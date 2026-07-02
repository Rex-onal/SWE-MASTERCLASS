"use strict";
"use client";

import React, { useEffect, useState } from "react";
import { FolderGit2, CheckCircle2, Lock, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
const Github = ({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2.2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
import { motion, AnimatePresence } from "framer-motion";
import { getProgress, isModuleUnlocked } from "@/lib/progress";
import { PROJECTS } from "@/lib/curriculum";
import { Project, UserProgress } from "@/lib/types";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [deployedUrls, setDeployedUrls] = useState<Record<string, string>>({});
  const [tempUrl, setTempUrl] = useState("");
  const [isUrlSaved, setIsUrlSaved] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProgress(getProgress());

    // Load custom deployed URLs if any
    const savedUrls = localStorage.getItem("swe_masterclass_project_urls");
    if (savedUrls) {
      setDeployedUrls(JSON.parse(savedUrls));
    }

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
          <span className="text-[#1A2E44] font-medium text-sm">Loading Projects...</span>
        </div>
      </div>
    );
  }

  // Map project to curriculum module IDs to calculate dynamic status
  const projectModuleMapping: Record<string, string> = {
    p1: "w3-m1",
    p2: "w5-m2",
    p3: "w12-m2",
    p4: "w14-m2",
    p5: "w16-m2",
    p6: "w18-m1"
  };

  const getProjectStatus = (projectId: string): "Live" | "In Progress" | "Not Started" => {
    const mId = projectModuleMapping[projectId];
    if (progress.passedQuizzes.includes(mId)) return "Live";
    if (isModuleUnlocked(mId)) return "In Progress";
    return "Not Started";
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProjectId(project.id);
    setTempUrl(deployedUrls[project.id] || "");
    setIsUrlSaved(false);
  };

  const handleSaveUrl = (projectId: string) => {
    const updated = {
      ...deployedUrls,
      [projectId]: tempUrl
    };
    setDeployedUrls(updated);
    localStorage.setItem("swe_masterclass_project_urls", JSON.stringify(updated));
    setIsUrlSaved(true);
    setTimeout(() => setIsUrlSaved(false), 2000);
  };

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId);

  // Styling helper for difficulty badges
  const difficultyColors = {
    Easy: "bg-[#2EC97E]/10 border-[#2EC97E]/20 text-[#2EC97E]",
    Medium: "bg-[#F5C842]/10 border-[#F5C842]/20 text-[#E6B800]",
    Hard: "bg-[#FF7F7F]/10 border-[#FF7F7F]/20 text-[#FF7F7F]"
  };

  return (
    <div className="flex-1 flex h-[calc(100vh-64px)] w-full overflow-hidden select-none font-sans">
      
      {/* 1. Project Grid Container / Left Sidebar (when selected) */}
      <motion.div
        layout
        className={`bg-slate-50 border-r border-[#E8F0EC]/80 flex flex-col h-full overflow-y-auto p-6 transition-all duration-300 ${
          selectedProjectId ? "hidden md:flex w-[320px] flex-shrink-0" : "w-full"
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-6">
          {selectedProjectId && (
            <button
              onClick={() => setSelectedProjectId(null)}
              className="flex items-center gap-2 text-xs font-display font-bold text-[#F5C842] hover:text-[#E6B800] transition-colors mb-2"
            >
              <ArrowLeft size={14} />
              <span>All Projects</span>
            </button>
          )}
          <h2 className="text-2xl font-display font-bold text-[#1A2E44]">
            Portfolio Projects
          </h2>
          <p className="text-xs text-[#6B7C8D]">
            Build real products to lock in key software and AI engineering skills.
          </p>
        </div>

        {/* Project Cards (Full Grid vs. Compact Sidebar) */}
        <div
          className={`grid gap-6 ${
            selectedProjectId ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {PROJECTS.map((proj) => {
            const status = getProjectStatus(proj.id);
            const isSelected = proj.id === selectedProjectId;

            return (
              <div
                key={proj.id}
                onClick={() => handleSelectProject(proj)}
                className={`bg-white rounded-[20px] p-5 border flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                  selectedProjectId ? "h-36" : "h-56"
                } ${
                  isSelected
                    ? "border-[#F5C842] bg-[#F5C842]/5 border-l-4 shadow-sm"
                    : "border-transparent shadow-brand hover:-translate-y-1 hover:shadow-brand-hover hover:border-[#A8E6CF]/30"
                }`}
              >
                {/* Card Top */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#6B7C8D]">
                      {proj.phase}
                    </span>
                    <span
                      className={`px-2 py-0.5 border text-[9px] font-display font-bold rounded-full ${
                        difficultyColors[proj.difficulty]
                      }`}
                    >
                      {proj.difficulty}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#1A2E44] line-clamp-1 mt-1">
                    {proj.name}
                  </h3>

                  {/* Tech Stack (Only visible in full view) */}
                  {!selectedProjectId && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#1A2E44]/5 text-[#6B7C8D] text-[9px] font-sans font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {proj.tags.length > 3 && (
                        <span className="text-[9px] text-[#6B7C8D] font-semibold">
                          +{proj.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Bottom */}
                <div className="flex items-center justify-between border-t border-[#E8F0EC]/60 pt-3 mt-3">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        status === "Live"
                          ? "bg-[#2EC97E] animate-pulse"
                          : status === "In Progress"
                          ? "bg-[#F5C842] animate-pulse"
                          : "bg-[#D0D8E4]"
                      }`}
                    />
                    <span className="text-[10px] font-sans font-semibold text-[#6B7C8D]">
                      {status}
                    </span>
                  </div>

                  <button className="text-xs font-display font-bold text-[#F5C842] hover:text-[#E6B800] flex items-center gap-1">
                    <span>Brief</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* 2. Project Brief Panel (Right Slide-Out) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex-1 bg-white h-full overflow-y-auto p-6 md:p-8 flex flex-col gap-6"
          >
            {/* Title Block */}
            <div className="border-b border-[#E8F0EC]/80 pb-5">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-display font-black text-[#1A2E44]/10 select-none">
                  Project {selectedProject.number}
                </span>
                <span className="px-2 py-0.5 bg-[#A8E6CF]/10 border border-[#A8E6CF]/20 text-[#2EC97E] text-[10px] font-display font-bold uppercase rounded-full">
                  {selectedProject.phase}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1A2E44] mt-2">
                {selectedProject.name}
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h4 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider">
                Project Overview
              </h4>
              <p className="text-sm text-[#1A2E44] leading-relaxed">
                {selectedProject.brief}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider">
                Core Deliverables
              </h4>
              <div className="flex flex-col gap-2.5">
                {selectedProject.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#2EC97E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1A2E44]">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sandbox Deployed URL */}
            <div className="bg-slate-50 p-5 rounded-[20px] flex flex-col gap-4 border border-[#E8F0EC]">
              <div className="flex flex-col gap-1">
                <h4 className="font-display font-semibold text-sm text-[#1A2E44]">
                  Deploy Your Build
                </h4>
                <p className="text-xs text-[#6B7C8D]">
                  Paste your live deployed Vercel/Netlify URL to log your production-ready link.
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="https://your-glossary-app.vercel.app"
                  className="flex-1 bg-white border border-[#E8F0EC] px-4 py-2 text-sm text-[#1A2E44] rounded-full focus:outline-none focus:ring-2 focus:ring-[#A8E6CF]"
                />
                <button
                  onClick={() => handleSaveUrl(selectedProject.id)}
                  className="px-6 py-2 bg-[#1A2E44] hover:bg-[#1A2E44]/90 text-white font-display font-bold text-xs rounded-full transition-all flex items-center gap-1"
                >
                  <span>Save URL</span>
                </button>
              </div>

              {isUrlSaved && (
                <span className="text-xs text-[#2EC97E] font-semibold animate-pulse">
                  Link logged successfully! ✓
                </span>
              )}

              {deployedUrls[selectedProject.id] && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-[#6B7C8D]">Live Link:</span>
                  <a
                    href={deployedUrls[selectedProject.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#F5C842] hover:text-[#E6B800] flex items-center gap-1 underline"
                  >
                    <span>{deployedUrls[selectedProject.id]}</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              )}
            </div>

            {/* GitHub Placeholder */}
            <div className="flex items-center gap-3 mt-4 border-t border-[#E8F0EC]/60 pt-4">
              <span className="text-xs text-[#6B7C8D]">Submit Code:</span>
              <button
                onClick={() => window.open("https://github.com", "_blank")}
                className="px-4 py-2 border border-[#6B7C8D]/20 text-[#6B7C8D] hover:text-[#1A2E44] hover:bg-slate-50 font-display font-semibold text-xs rounded-full flex items-center gap-1.5 transition-colors"
              >
                <Github size={14} />
                <span>Link GitHub Repository</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
