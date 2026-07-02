"use strict";
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Play,
  FileText,
  HelpCircle,
  Edit3,
  BookOpen,
  X
} from "lucide-react";
import { motion } from "framer-motion";
import {
  getProgress,
  isModuleUnlocked,
  isWeekUnlocked,
  toggleResourceCompleted,
  markResourceVisited,
  areAllResourcesCompleted,
  passQuizForModule
} from "@/lib/progress";
import { getModuleById, getWeekByModuleId, WEEKS } from "@/lib/curriculum";
import { UserProgress, Module } from "@/lib/types";

// Tab Components
import LearnTab from "@/components/LearnTab";
import ResourcesTab from "@/components/ResourcesTab";
import QuizTab from "@/components/QuizTab";
import NotesTab from "@/components/NotesTab";
import BottomNavBar from "@/components/BottomNavBar";

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.moduleId as string;

  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [activeTab, setActiveTab] = useState<"learn" | "resources" | "quiz" | "notes">("learn");
  const [showQuizLockTooltip, setShowQuizLockTooltip] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isModuleListOpen, setIsModuleListOpen] = useState(false);

  // Auto-close modules list drawer when module changes
  useEffect(() => {
    setIsModuleListOpen(false);
  }, [moduleId]);

  // Fetch module and week
  const moduleData = getModuleById(moduleId);
  const weekData = getWeekByModuleId(moduleId);

  useEffect(() => {
    setMounted(true);
    setProgress(getProgress());

    // Redirect if module doesn't exist or is locked
    if (!moduleData || !isModuleUnlocked(moduleId)) {
      router.push("/");
      return;
    }

    // Mark current module and week in progress
    const current = getProgress();
    if (current.currentModule !== moduleId || current.currentWeek !== moduleData.weekId) {
      const updated = {
        ...current,
        currentModule: moduleId,
        currentWeek: moduleData.weekId
      };
      localStorage.setItem("swe_masterclass_progress", JSON.stringify(updated));
      window.dispatchEvent(new Event("swe_progress_updated"));
      setProgress(updated);
    }

    const handleUpdate = () => {
      setProgress(getProgress());
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
    };
  }, [moduleId, router, moduleData]);

  if (!mounted || !progress || !moduleData || !weekData) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-[#A8E6CF]/10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#F5C842] border-t-transparent rounded-full animate-spin" />
          <span className="text-[#1A2E44] font-medium text-sm">Loading Module...</span>
        </div>
      </div>
    );
  }

  const isQuizUnlocked = areAllResourcesCompleted(moduleId);
  const isQuizPassed = progress.passedQuizzes.includes(moduleId);
  const completedResources = progress.completedResources[moduleId] || [];
  const visitedResources = progress.visitedResources[moduleId] || [];

  const handleToggleResource = (resId: string) => {
    const updated = toggleResourceCompleted(moduleId, resId);
    setProgress(updated);
  };

  const handleOpenResource = (resId: string) => {
    const updated = markResourceVisited(moduleId, resId);
    setProgress(updated);
  };

  const handlePassQuiz = (score: number) => {
    const updated = passQuizForModule(moduleId, score);
    setProgress(updated);
  };

  const handleTabClick = (tab: "learn" | "resources" | "quiz" | "notes") => {
    if (tab === "quiz" && !isQuizUnlocked) {
      setShowQuizLockTooltip(true);
      setTimeout(() => setShowQuizLockTooltip(false), 3000);
      return;
    }
    setActiveTab(tab);
  };

  // Track badge color utility
  const trackColorMap: Record<string, string> = {
    A: "bg-[#3B82F6] text-[#3B82F6]",
    B: "bg-[#F5C842] text-[#F5C842]",
    C: "bg-[#2EC97E] text-[#2EC97E]",
    D: "bg-[#8B5CF6] text-[#8B5CF6]"
  };

  return (
    <div className="flex-1 flex h-[calc(100vh-64px)] w-full overflow-hidden bg-slate-100 select-none relative">
      
      {/* Mobile Overlay Backdrop for Modules List */}
      {isModuleListOpen && (
        <div
          className="fixed inset-0 bg-black/25 z-40 md:hidden animate-fade-in"
          onClick={() => setIsModuleListOpen(false)}
        />
      )}

      {/* 1. Left Compressed Sidebar List (320px) */}
      <div
        className={`bg-slate-50 border-r border-[#E8F0EC]/80 flex flex-col h-full flex-shrink-0 transition-all duration-300 ease-out ${
          isQuizActive ? "opacity-40 pointer-events-none" : "opacity-100"
        } ${
          isModuleListOpen
            ? "fixed inset-y-0 left-0 w-[280px] bg-white shadow-xl z-50 flex"
            : "hidden md:flex w-[320px]"
        }`}
      >
        {/* Back Button and Week info header */}
        <div className="p-4 border-b border-[#E8F0EC]/80 flex flex-col gap-3 bg-white">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-display font-bold text-[#F5C842] hover:text-[#E6B800] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>All Weeks</span>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-base text-[#1A2E44]">
                Week {weekData.id} Modules
              </h3>
              <span className="text-xs text-[#6B7C8D] font-sans">
                {weekData.title}
              </span>
            </div>
            <button
              onClick={() => setIsModuleListOpen(false)}
              className="p-1 text-[#6B7C8D] hover:text-[#1A2E44] md:hidden"
              title="Close Menu"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modules List */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {weekData.modules.map((m) => {
            const isSelected = m.id === moduleId;
            const mUnlocked = isModuleUnlocked(m.id);
            const mCompleted = progress.passedQuizzes.includes(m.id);

            if (!mUnlocked) {
              return (
                <div
                  key={m.id}
                  className="p-3 bg-slate-200/50 border border-slate-200 rounded-xl flex items-center justify-between opacity-50 cursor-not-allowed select-none"
                >
                  <span className="text-xs font-semibold text-[#6B7C8D] truncate max-w-[200px]">
                    {m.title}
                  </span>
                  <Lock size={12} className="text-[#6B7C8D]" />
                </div>
              );
            }

            return (
              <Link
                key={m.id}
                href={`/module/${m.id}`}
                className={`p-3 rounded-xl border flex flex-col gap-1 transition-all duration-200 ${
                  isSelected
                    ? "bg-[#F5C842]/5 border-[#F5C842] border-l-4"
                    : "bg-white border-[#E8F0EC] hover:border-[#A8E6CF]/30"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 truncate">
                    <div className={`w-2 h-2 rounded-full ${trackColorMap[m.track]?.split(" ")[0]}`} />
                    <span className="text-[10px] font-sans font-bold text-[#6B7C8D] uppercase tracking-wider">
                      Track {m.track}
                    </span>
                  </div>
                  {mCompleted && (
                    <CheckCircle2 size={12} className="text-[#2EC97E] flex-shrink-0" />
                  )}
                </div>
                <span className="text-xs font-semibold text-[#1A2E44] truncate line-clamp-1">
                  {m.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Main Content Panel (70-75% remaining) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1 bg-white flex flex-col justify-between h-full relative"
      >
        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
          
          {/* Top Title Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8F0EC]/80 pb-5">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between md:justify-start gap-4">
                <span className="text-xs text-[#6B7C8D] font-sans">
                  Phase {weekData.phase} → Week {weekData.id} → Track {moduleData.track} — {moduleData.trackName}
                </span>
                {/* Syllabus Toggle on Mobile */}
                <button
                  onClick={() => setIsModuleListOpen(true)}
                  className="md:hidden px-3 py-1 bg-[#F5C842]/10 border border-[#F5C842]/20 text-[#1A2E44] font-display font-semibold text-[10px] rounded-full flex items-center gap-1"
                >
                  <BookOpen size={10} />
                  <span>Modules</span>
                </button>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1A2E44]">
                {moduleData.title}
              </h2>
            </div>

            {/* Mark as Done button */}
            <div className="flex-shrink-0">
              {isQuizPassed ? (
                <button
                  disabled
                  className="px-5 py-2.5 bg-[#2EC97E]/10 border border-[#2EC97E]/20 text-[#2EC97E] font-display font-bold text-sm rounded-full flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 size={16} />
                  <span>Module Completed</span>
                </button>
              ) : (
                <button
                  disabled
                  className="px-5 py-2.5 bg-[#D0D8E4] text-[#6B7C8D] font-display font-bold text-sm rounded-full flex items-center gap-1.5 cursor-not-allowed"
                  title="Pass the quiz to complete this module"
                >
                  <Lock size={14} />
                  <span>Mark as Done</span>
                </button>
              )}
            </div>
          </div>

          {/* Tab Selection Bar */}
          <div className="flex border-b border-[#E8F0EC]/80 gap-6 text-sm font-sans relative">
            {(["learn", "resources", "quiz", "notes"] as const).map((tab) => {
              const isActive = activeTab === tab;
              const isLockedTab = tab === "quiz" && !isQuizUnlocked;

              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`py-2 px-1 relative font-display font-semibold transition-all duration-200 capitalize flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#1A2E44] border-b-2 border-[#F5C842]"
                      : "text-[#6B7C8D] hover:text-[#1A2E44]"
                  } ${isLockedTab ? "cursor-not-allowed opacity-60" : ""}`}
                >
                  {tab === "learn" && <BookOpen size={16} />}
                  {tab === "resources" && <FileText size={16} />}
                  {tab === "quiz" && (
                    <>
                      <HelpCircle size={16} />
                      {isLockedTab && <Lock size={12} className="text-[#6B7C8D]" />}
                    </>
                  )}
                  {tab === "notes" && <Edit3 size={16} />}
                  <span>{tab}</span>
                </button>
              );
            })}

            {/* Locked Quiz tab tooltip */}
            {showQuizLockTooltip && (
              <div className="absolute top-8 left-36 bg-[#1A2E44] text-white text-[10px] rounded py-1.5 px-3 whitespace-nowrap shadow-lg z-50 animate-bounce">
                Check off all resources in **Learn** tab first!
              </div>
            )}
          </div>

          {/* Tab Render panel */}
          <div className="flex-1 mt-2">
            {activeTab === "learn" && (
              <LearnTab
                module={moduleData}
                completedResources={completedResources}
                onToggleResource={handleToggleResource}
              />
            )}
            {activeTab === "resources" && (
              <ResourcesTab
                module={moduleData}
                visitedResources={visitedResources}
                onOpenResource={handleOpenResource}
              />
            )}
            {activeTab === "quiz" && (
              <QuizTab
                module={moduleData}
                isUnlocked={isQuizUnlocked}
                onPass={handlePassQuiz}
                onReviewResources={() => setActiveTab("learn")}
                isQuizActive={isQuizActive}
                setIsQuizActive={setIsQuizActive}
              />
            )}
            {activeTab === "notes" && <NotesTab moduleId={moduleId} />}
          </div>
        </div>

        {/*traversal footer bar */}
        <BottomNavBar currentModuleId={moduleId} />
      </motion.div>
    </div>
  );
}
