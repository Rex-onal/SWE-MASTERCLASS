"use strict";
"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, TrendingUp, Calendar, ShieldCheck, Star } from "lucide-react";
import { getProgress } from "@/lib/progress";
import { WEEKS, PHASES } from "@/lib/curriculum";
import { UserProgress } from "@/lib/types";

export default function ProgressPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setMounted(true);
    setProgress(getProgress());

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
          <span className="text-[#1A2E44] font-medium text-sm">Loading Progress...</span>
        </div>
      </div>
    );
  }

  // Calculate phase completions
  const getPhaseCompletion = (phaseNum: number): number => {
    const phaseWeeks = WEEKS.filter((w) => w.phase === phaseNum);
    const phaseModules = phaseWeeks.flatMap((w) => w.modules);
    if (phaseModules.length === 0) return 0;

    const completed = phaseModules.filter((m) =>
      progress.passedQuizzes.includes(m.id)
    ).length;
    return Math.round((completed / phaseModules.length) * 100);
  };

  // Get completed count for a specific week
  const getWeekCompletionInfo = (weekId: number) => {
    const week = WEEKS.find((w) => w.id === weekId);
    if (!week) return { completed: 0, total: 0 };
    const total = week.modules.length;
    const completed = week.modules.filter((m) =>
      progress.passedQuizzes.includes(m.id)
    ).length;
    return { completed, total };
  };

  const completedModules = WEEKS.flatMap((w) => w.modules).filter((m) =>
    progress.passedQuizzes.includes(m.id)
  );

  return (
    <div className="flex-1 p-4 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full font-sans select-none">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-display font-bold text-[#1A2E44]">
          Your Learning Progress
        </h2>
        <p className="text-sm text-[#6B7C8D]">
          Analyze your course metrics, review passed quizzes, and track your certification history.
        </p>
      </div>

      {/* Phase Completion Cards (Grid) */}
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-display font-bold text-[#1A2E44] flex items-center gap-2">
          <TrendingUp size={18} className="text-[#2EC97E]" />
          <span>Phase Milestones</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PHASES.map((p) => {
            const completion = getPhaseCompletion(p.number);
            return (
              <div
                key={p.number}
                className="bg-white rounded-[20px] shadow-brand p-4 flex flex-col items-center justify-between text-center border border-transparent hover:border-[#A8E6CF]/30 transition-all hover:-translate-y-1 duration-200"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#6B7C8D]">
                    Phase {p.number}
                  </span>
                  <span className="text-xs font-semibold text-[#1A2E44] line-clamp-1 h-8 flex items-center justify-center">
                    {p.name}
                  </span>
                </div>

                {/* Progress Circle */}
                <div className="relative w-16 h-16 flex items-center justify-center my-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke="#E8F0EC"
                      strokeWidth="3.5"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke={completion === 100 ? "#2EC97E" : "#F5C842"}
                      strokeWidth="3.5"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 26}
                      strokeDashoffset={2 * Math.PI * 26 * (1 - completion / 100)}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <span className="absolute text-xs font-display font-bold text-[#1A2E44]">
                    {completion}%
                  </span>
                </div>

                <span className="text-[10px] text-[#6B7C8D] font-medium uppercase tracking-wider">
                  {p.weekRange}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Heatmap Section */}
      <section className="bg-white rounded-[20px] shadow-brand p-6 flex flex-col gap-4 border border-[#E8F0EC]/80">
        <h3 className="text-lg font-display font-bold text-[#1A2E44] flex items-center gap-2">
          <Calendar size={18} className="text-[#F5C842]" />
          <span>Curriculum Contribution Heatmap</span>
        </h3>
        <p className="text-xs text-[#6B7C8D]">
          Each block represents one week of the masterclass. The cell depth indicates module completions.
        </p>

        {/* 18 Weeks Grid (18 columns/blocks) */}
        <div className="flex flex-wrap gap-3 mt-2 justify-start items-center">
          {Array.from({ length: 18 }).map((_, idx) => {
            const wId = idx + 1;
            const { completed, total } = getWeekCompletionInfo(wId);
            const ratio = total === 0 ? 0 : completed / total;

            let cellBg = "bg-slate-100 hover:bg-slate-200"; // not started
            if (completed > 0) {
              if (ratio === 1) {
                cellBg = "bg-[#F5C842] shadow-sm"; // fully completed
              } else {
                cellBg = "bg-[#F5C842]/40"; // in progress
              }
            }

            return (
              <div
                key={wId}
                className="group relative flex flex-col items-center"
              >
                {/* Heatmap Block */}
                <div
                  className={`w-10 h-10 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 flex flex-col items-center justify-center text-xs font-bold text-[#1A2E44] ${cellBg}`}
                >
                  W{wId}
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-11 scale-0 group-hover:scale-100 transition-all duration-150 origin-bottom bg-[#1A2E44] text-white text-[10px] rounded py-1 px-2.5 whitespace-nowrap shadow-lg z-50">
                  {completed} of {total} modules passed ({Math.round(ratio * 100)}%)
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-end items-center gap-3 text-[10px] text-[#6B7C8D] font-sans font-semibold mt-2">
          <span>Less Active</span>
          <div className="w-4 h-4 bg-slate-100 rounded-sm" />
          <div className="w-4 h-4 bg-[#F5C842]/40 rounded-sm" />
          <div className="w-4 h-4 bg-[#F5C842] rounded-sm" />
          <span>Fully Completed</span>
        </div>
      </section>

      {/* Quizzes & running logs columns */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1: Quizzes Passed */}
        <div className="bg-white rounded-[20px] shadow-brand p-6 flex flex-col gap-4 border border-[#E8F0EC]/80 h-[380px]">
          <h3 className="text-base font-display font-bold text-[#1A2E44] flex items-center gap-2 border-b border-[#E8F0EC]/60 pb-2.5">
            <ShieldCheck size={18} className="text-[#2EC97E]" />
            <span>Passed Quizzes & Scores</span>
          </h3>

          <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
            {completedModules.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-xs text-[#6B7C8D]">
                <span>No quizzes passed yet. Attempt quizzes inside the modules!</span>
              </div>
            ) : (
              completedModules.map((m) => {
                const score = progress.quizScores[m.id] || 100;
                return (
                  <div
                    key={m.id}
                    className="p-3 bg-slate-50 rounded-xl flex items-center justify-between border border-[#E8F0EC]/40"
                  >
                    <div className="flex flex-col gap-0.5 truncate pr-2">
                      <span className="text-xs font-semibold text-[#1A2E44] truncate">
                        {m.title}
                      </span>
                      <span className="text-[10px] text-[#6B7C8D] uppercase font-bold tracking-wider">
                        Week {m.weekId} · Track {m.track}
                      </span>
                    </div>

                    <span className="px-3 py-1 bg-[#2EC97E]/10 border border-[#2EC97E]/20 text-[#2EC97E] font-display font-bold text-xs rounded-full whitespace-nowrap flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      <span>{score}% Score</span>
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Column 2: Running Log of Completed Modules */}
        <div className="bg-white rounded-[20px] shadow-brand p-6 flex flex-col gap-4 border border-[#E8F0EC]/80 h-[380px]">
          <h3 className="text-base font-display font-bold text-[#1A2E44] flex items-center gap-2 border-b border-[#E8F0EC]/60 pb-2.5">
            <CheckCircle2 size={18} className="text-[#3B82F6]" />
            <span>Module Graduation Log</span>
          </h3>

          <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
            {completedModules.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-xs text-[#6B7C8D]">
                <span>Log is empty. Pass modules to fill.</span>
              </div>
            ) : (
              completedModules.map((m) => (
                <div
                  key={m.id}
                  className="p-3 bg-slate-50 rounded-xl flex items-center justify-between border border-[#E8F0EC]/40"
                >
                  <div className="flex flex-col gap-0.5 truncate pr-2">
                    <span className="text-xs font-semibold text-[#1A2E44] truncate">
                      {m.title}
                    </span>
                    <span className="text-[10px] text-[#6B7C8D]">
                      Phase {WEEKS.find((w) => w.id === m.weekId)?.phase} · Track {m.track} — {m.trackName}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-[10px] font-sans font-bold rounded-full whitespace-nowrap">
                    Graduated ✓
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
