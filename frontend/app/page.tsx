"use strict";
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Play,
  FileText,
  CheckCircle2,
  Lock,
  ChevronDown,
  ChevronUp,
  Database,
  Code,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles
} from "lucide-react";
const Github = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { getProgress, isModuleUnlocked, isWeekUnlocked, getModuleProgressPercent } from "@/lib/progress";
import { WEEKS, PROJECTS, PHASES } from "@/lib/curriculum";
import { UserProgress, Module } from "@/lib/types";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({});

  // Fetch progress on mount
  useEffect(() => {
    setMounted(true);
    const prog = getProgress();
    setProgress(prog);

    // Default expand the current active week
    setExpandedWeeks({
      [prog.currentWeek]: true
    });

    const handleUpdate = () => {
      setProgress(getProgress());
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
    };
  }, []);

  if (!mounted || !progress) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-[#A8E6CF]/10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#F5C842] border-t-transparent rounded-full animate-spin" />
          <span className="text-[#1A2E44] font-medium text-sm">Loading Curriculum...</span>
        </div>
      </div>
    );
  }

  // Statistics Computations
  const totalModules = WEEKS.reduce((acc, w) => acc + w.modules.length, 0);
  const completedModulesCount = progress.completedModules.length;
  const topicsPercent = Math.round((completedModulesCount / totalModules) * 100);

  // Projects live count
  const projectModules = ["w3-m1", "w5-m2", "w12-m2", "w14-m2", "w16-m2", "w18-m1"];
  const liveProjectsCount = projectModules.filter((id) =>
    progress.passedQuizzes.includes(id)
  ).length;

  const currentPhaseIndex = progress.currentWeek <= 3 ? 1 : progress.currentWeek <= 5 ? 2 : progress.currentWeek <= 10 ? 3 : progress.currentWeek <= 13 ? 4 : progress.currentWeek <= 16 ? 5 : 6;
  const currentPhaseName = ["How Software Works", "Databases, Auth & Backend", "DSA Drills", "System Design", "AI Engineering", "Production & Scale"][currentPhaseIndex - 1];

  const toggleWeek = (weekId: number) => {
    if (!isWeekUnlocked(weekId)) {
      // Locked week visual shake
      const el = document.getElementById(`week-row-${weekId}`);
      if (el) {
        el.classList.add("shake");
        setTimeout(() => el.classList.remove("shake"), 300);
      }
      return;
    }
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekId]: !prev[weekId]
    }));
  };

  const handleLockedCardTap = (moduleId: string) => {
    const el = document.getElementById(`card-${moduleId}`);
    if (el) {
      el.classList.add("shake");
      setTimeout(() => el.classList.remove("shake"), 300);
    }
  };

  return (
    <div className="flex-1 h-full overflow-y-auto p-4 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full">
      {/* Hero Card */}
      <section className="bg-white rounded-[20px] shadow-brand p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Glow decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#B2EBD4]/30 to-transparent pointer-events-none rounded-full" />
        
        {/* Left Side Info */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 z-10">
          <div>
            <span className="px-[10px] py-[4px] bg-[#2EC97E]/10 border border-[#2EC97E]/20 text-[#2EC97E] text-[10px] font-sans font-bold uppercase tracking-wider rounded-full">
              Phase {currentPhaseIndex}: {currentPhaseName}
            </span>
            <h1 className="text-[26px] leading-[1.2] md:text-4xl md:leading-normal font-display font-bold text-[#1A2E44] mt-2">
              Your 18-Week AI Engineering Roadmap
            </h1>
            <p className="text-[#6B7C8D] font-sans text-sm mt-1">
              Complete each week&apos;s modules and pass the gated quizzes to unlock the next level.
            </p>
          </div>

          {/* Phase Segment Progress */}
          <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="flex justify-between items-center text-xs text-[#6B7C8D] font-semibold uppercase tracking-wider">
              <span>Overall Roadmap Progress</span>
              <span>{Math.round((progress.passedQuizzes.length / totalModules) * 100)}%</span>
            </div>
            <div className="grid grid-cols-6 gap-2 w-full h-3">
              {[1, 2, 3, 4, 5, 6].map((idx) => {
                let color = "bg-[#D0D8E4]";
                if (idx < currentPhaseIndex) {
                  color = "bg-[#2EC97E]";
                } else if (idx === currentPhaseIndex) {
                  color = "bg-[#F5C842] pulse-active";
                }
                return (
                  <div
                    key={idx}
                    className={`h-full rounded-full transition-all duration-300 ${color}`}
                    title={`Phase ${idx}`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] text-[#6B7C8D] font-sans font-semibold mt-1">
              {["P1: Core", "P2: Backend", "P3: DSA", "P4: System", "P5: AI", "P6: Scale"].map((lbl, idx) => (
                <span key={idx}>
                  <span className="hidden md:inline">{lbl}</span>
                  <span className="inline md:hidden">P{idx + 1}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Animated Orbit Illustration */}
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex-shrink-0 mx-auto md:mx-0 md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 select-none">
          {/* Layer 2 — Center icon (does not rotate) */}
          <div className="absolute bg-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] w-[48px] h-[48px] top-[66px] left-[66px] md:top-[86px] md:left-[86px] z-20">
            <Sparkles size={28} className="text-[#F5C842]" />
          </div>

          {/* Rotating Orbit Container (Layer 1 + Layer 3) */}
          <div className="absolute inset-0 orbit-ring-container">
            {/* Layer 1 — Orbit ring */}
            <div className="absolute rounded-full border-[1.5px] border-[#A8E6DF]/60 shadow-[0_0_24px_rgba(46,201,126,0.15)] w-[130px] h-[130px] top-[25px] left-[25px] md:w-[160px] md:h-[160px] md:top-[30px] md:left-[30px] orbit-ring" />

            {/* Layer 3 — Four orbit icons */}
            {/* Top (12 o'clock): Lucide <Code2 /> */}
            <div className="absolute bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.07)] w-[40px] h-[40px] top-[25px] left-[70px] md:top-[30px] md:left-[90px] z-10">
              <div className="orbit-icon-inner flex items-center justify-center">
                <Code2 size={20} className="text-[#1A2E44]" />
              </div>
            </div>

            {/* Right (3 o'clock): Lucide <Cpu /> */}
            <div className="absolute bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.07)] w-[40px] h-[40px] top-[70px] left-[115px] md:top-[90px] md:left-[150px] z-10">
              <div className="orbit-icon-inner flex items-center justify-center">
                <Cpu size={20} className="text-[#2EC97E]" />
              </div>
            </div>

            {/* Bottom (6 o'clock): Lucide <GraduationCap /> */}
            <div className="absolute bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.07)] w-[40px] h-[40px] top-[115px] left-[70px] md:top-[150px] md:left-[90px] z-10">
              <div className="orbit-icon-inner flex items-center justify-center">
                <GraduationCap size={20} className="text-[#8B5CF6]" />
              </div>
            </div>

            {/* Left (9 o'clock): Lucide <Database /> */}
            <div className="absolute bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.07)] w-[40px] h-[40px] top-[70px] left-[25px] md:top-[90px] md:left-[30px] z-10">
              <div className="orbit-icon-inner flex items-center justify-center">
                <Database size={20} className="text-[#3B82F6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat 1: Current Week */}
        <div className="bg-white rounded-[20px] shadow-brand p-6 flex items-center justify-between hover:-translate-y-1 hover:shadow-brand-hover duration-200 transition-all">
          <div className="flex flex-col">
            <span className="text-[#6B7C8D] font-sans font-medium text-sm">Current Week</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-display font-extrabold text-[#1A2E44]">
                {progress.currentWeek}
              </span>
              <span className="text-[#6B7C8D] text-sm">of 18</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#F5C842]/10 flex items-center justify-center text-[#F5C842]">
            <Sparkles size={24} />
          </div>
        </div>

        {/* Stat 2: Topics Completed */}
        <div className="bg-white rounded-[20px] shadow-brand p-6 flex items-center justify-between hover:-translate-y-1 hover:shadow-brand-hover duration-200 transition-all">
          <div className="flex flex-col">
            <span className="text-[#6B7C8D] font-sans font-medium text-sm">Modules Completed</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-display font-extrabold text-[#1A2E44]">
                {completedModulesCount}
              </span>
              <span className="text-[#6B7C8D] text-sm">/ {totalModules}</span>
            </div>
          </div>
          {/* Circular Progress Ring */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="#E8F0EC"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="#2EC97E"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 22}
                strokeDashoffset={2 * Math.PI * 22 * (1 - topicsPercent / 100)}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            <span className="absolute text-[10px] font-display font-bold text-[#1A2E44]">
              {topicsPercent}%
            </span>
          </div>
        </div>

        {/* Stat 3: Projects Live */}
        <div className="bg-white rounded-[20px] shadow-brand p-6 flex items-center justify-between hover:-translate-y-1 hover:shadow-brand-hover duration-200 transition-all">
          <div className="flex flex-col">
            <span className="text-[#6B7C8D] font-sans font-medium text-sm">Projects Deployed</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-4xl font-display font-extrabold text-[#1A2E44]">
                {liveProjectsCount}
              </span>
              <span className="text-[#6B7C8D] text-sm">/ 6 Live</span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#2EC97E] animate-ping" />
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#2EC97E]/10 flex items-center justify-center text-[#2EC97E]">
            <Github size={24} />
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-display font-bold text-[#1A2E44]">Your Curriculum Journey</h2>
        <div className="flex flex-col gap-4">
          {WEEKS.map((week) => {
            const isUnlocked = isWeekUnlocked(week.id);
            const isExpanded = expandedWeeks[week.id] || false;
            const isActive = progress.currentWeek === week.id;

            // Check if all modules in week are passed
            const allPassed = week.modules.every((m) =>
              progress.passedQuizzes.includes(m.id)
            );

            // Completed count
            const completedCount = week.modules.filter((m) =>
              progress.passedQuizzes.includes(m.id)
            ).length;

            const weekPhase = PHASES.find((p) => p.number === week.phase);

            return (
              <div
                key={week.id}
                id={`week-row-${week.id}`}
                className={`bg-white rounded-[20px] shadow-brand overflow-hidden transition-all duration-300 ${
                  isActive ? "active-week-pulse" : ""
                } ${!isUnlocked ? "opacity-60 cursor-not-allowed select-none" : ""}`}
              >
                {/* Week Header Row */}
                <div
                  onClick={() => toggleWeek(week.id)}
                  className={`flex items-center justify-between p-5 cursor-pointer hover:bg-[#A8E6CF]/5 transition-colors`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-lg font-display font-bold text-[#1A2E44]">
                      Week {week.id} — {week.title}
                    </span>
                    <div className="flex items-center gap-2">
                      {weekPhase && (
                        <span className="px-2 py-0.5 bg-[#1A2E44]/5 text-[#6B7C8D] text-[9px] font-sans font-bold uppercase tracking-wider rounded-full">
                          {weekPhase.name}
                        </span>
                      )}
                      {allPassed ? (
                        <span className="flex items-center gap-1 text-[#2EC97E] text-xs font-semibold bg-[#2EC97E]/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 size={12} /> Complete
                        </span>
                      ) : (
                        <span className="text-xs font-sans text-[#6B7C8D] bg-slate-100 px-2 py-0.5 rounded-full">
                          {completedCount} of {week.modules.length} done
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {!isUnlocked ? (
                      <Lock size={16} className="text-[#6B7C8D]" />
                    ) : isExpanded ? (
                      <ChevronUp size={20} className="text-[#1A2E44]" />
                    ) : (
                      <ChevronDown size={20} className="text-[#1A2E44]" />
                    )}
                  </div>
                </div>

                {/* Collapsible content progress bar (for completed week) */}
                {isUnlocked && allPassed && (
                  <div className="h-1.5 w-full bg-[#2EC97E]/20">
                    <div className="h-full bg-[#2EC97E]" style={{ width: "100%" }} />
                  </div>
                )}

                {/* Collapsible Module Grid */}
                <AnimatePresence initial={false}>
                  {isExpanded && isUnlocked && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#E8F0EC]/10 border-t border-[#E8F0EC]/60"
                    >
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {week.modules.map((mod) => {
                          const mUnlocked = isModuleUnlocked(mod.id);
                          const mCompleted = progress.passedQuizzes.includes(mod.id);
                          const progressPercent = getModuleProgressPercent(mod.id);

                          // Track badge colors
                          const trackColors: Record<string, string> = {
                            A: "bg-[#3B82F6] text-[#3B82F6]", // blue
                            B: "bg-[#F5C842] text-[#F5C842]", // amber
                            C: "bg-[#2EC97E] text-[#2EC97E]", // green
                            D: "bg-[#8B5CF6] text-[#8B5CF6]"  // purple
                          };

                          const vCount = mod.resources.filter((r) => r.type === "video").length;
                          const aCount = mod.resources.filter((r) => r.type === "article").length;

                          if (!mUnlocked) {
                            return (
                              <div
                                key={mod.id}
                                id={`card-${mod.id}`}
                                onClick={() => handleLockedCardTap(mod.id)}
                                className="bg-[#D0D8E4]/30 rounded-[20px] p-5 h-44 flex flex-col justify-between border border-[#D0D8E4]/60 relative cursor-not-allowed select-none opacity-60"
                              >
                                <div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#D0D8E4]" />
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#6B7C8D]">
                                      Locked
                                    </span>
                                  </div>
                                  <h3 className="text-base font-display font-bold text-[#6B7C8D] mt-2 line-clamp-2">
                                    {mod.title}
                                  </h3>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-[#D0D8E4] flex items-center justify-center shadow-md">
                                    <Lock size={16} className="text-[#6B7C8D]" />
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={mod.id}
                              href={`/module/${mod.id}`}
                              className="bg-white rounded-[20px] p-5 h-44 flex flex-col justify-between shadow-brand hover:-translate-y-1 hover:shadow-brand-hover duration-200 transition-all border border-transparent hover:border-[#A8E6CF]/30 relative"
                            >
                              {/* Header */}
                              <div>
                                <div className="flex items-center gap-2">
                                  <div className={`w-2.5 h-2.5 rounded-full ${trackColors[mod.track]?.split(" ")[0]}`} />
                                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#6B7C8D]">
                                    Track {mod.track} — {mod.trackName}
                                  </span>
                                </div>
                                <h3 className="text-base font-display font-bold text-[#1A2E44] mt-2 line-clamp-2">
                                  {mod.title}
                                </h3>
                              </div>

                              {/* Footer content */}
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 text-xs text-[#6B7C8D] font-sans">
                                  {vCount > 0 && (
                                    <span className="flex items-center gap-1">
                                      <Play size={12} fill="currentColor" /> {vCount} video{vCount > 1 ? "s" : ""}
                                    </span>
                                  )}
                                  {aCount > 0 && (
                                    <span className="flex items-center gap-1">
                                      <FileText size={12} /> {aCount} article{aCount > 1 ? "s" : ""}
                                    </span>
                                  )}
                                </div>

                                {/* Progress Bar / Indicator */}
                                <div className="flex items-center justify-between mt-1">
                                  <div className="flex-1 max-w-[70%] h-1.5 bg-[#E8F0EC] rounded-full overflow-hidden">
                                    <div
                                      className={`h-full transition-all duration-500 ${
                                        mCompleted ? "bg-[#2EC97E]" : "bg-[#F5C842]"
                                      }`}
                                      style={{ width: `${progressPercent}%` }}
                                    />
                                  </div>
                                  <span className="text-[10px] font-display font-bold text-[#6B7C8D] ml-2">
                                    {progressPercent}%
                                  </span>

                                  {/* Status Icon */}
                                  <div className="ml-2">
                                    {mCompleted ? (
                                      <CheckCircle2 size={18} className="text-[#2EC97E]" />
                                    ) : progressPercent > 0 ? (
                                      <Play size={18} className="text-[#F5C842]" fill="#F5C842" />
                                    ) : (
                                      <Play size={18} className="text-[#F5C842]/40" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
