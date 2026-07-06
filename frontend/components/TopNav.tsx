"use strict";
"use client";

import React, { useEffect, useState } from "react";
import { Bell, Menu } from "lucide-react";
import { getProgress } from "@/lib/progress";
import { PHASES } from "@/lib/curriculum";

export default function TopNav() {
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    // Initial fetch
    setCurrentWeek(getProgress().currentWeek);

    // Sync on updates
    const handleUpdate = () => {
      setCurrentWeek(getProgress().currentWeek);
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
    };
  }, []);

  // Helper to determine the status of a phase
  const getPhaseStatus = (phaseNum: number) => {
    if (phaseNum === 1) {
      if (currentWeek > 3) return "completed";
      if (currentWeek >= 1 && currentWeek <= 3) return "active";
      return "future";
    }
    if (phaseNum === 2) {
      if (currentWeek > 5) return "completed";
      if (currentWeek >= 4 && currentWeek <= 5) return "active";
      return "future";
    }
    if (phaseNum === 3) {
      if (currentWeek > 10) return "completed";
      if (currentWeek >= 6 && currentWeek <= 10) return "active";
      return "future";
    }
    if (phaseNum === 4) {
      if (currentWeek > 13) return "completed";
      if (currentWeek >= 11 && currentWeek <= 13) return "active";
      return "future";
    }
    if (phaseNum === 5) {
      if (currentWeek > 16) return "completed";
      if (currentWeek >= 14 && currentWeek <= 16) return "active";
      return "future";
    }
    if (phaseNum === 6) {
      if (currentWeek > 18) return "completed";
      if (currentWeek >= 17 && currentWeek <= 18) return "active";
      return "future";
    }
    return "future";
  };

  return (
    <>
      {/* Desktop Header: Visible on md screens and above */}
      <header className="hidden md:flex fixed top-0 left-0 w-full h-16 bg-white border-b border-[#E8F0EC]/80 items-center justify-between px-4 md:pl-[240px] md:pr-6 z-30 select-none">
        {/* Left: Breadcrumb / Active Step info */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => window.dispatchEvent(new Event("toggle_sidebar"))}
            className="p-1 text-[#1A2E44] hover:bg-slate-100 rounded-lg md:hidden mr-1.5"
            title="Toggle Menu"
          >
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-xs text-[#6B7C8D] uppercase tracking-wider hidden sm:inline">
              Current Track
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#2EC97E] hidden sm:block" />
            <span className="text-xs font-semibold text-[#1A2E44]">
              Phase {Math.min(6, Math.max(1, currentWeek <= 3 ? 1 : currentWeek <= 5 ? 2 : currentWeek <= 10 ? 3 : currentWeek <= 13 ? 4 : currentWeek <= 16 ? 5 : 6))}
            </span>
          </div>
        </div>

        {/* Center: Phase Tracker */}
        <div className="flex items-center gap-2">
          {PHASES.map((phase) => {
            const status = getPhaseStatus(phase.number);

            return (
              <div
                key={phase.number}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                {/* Segment Pill */}
                <div
                  className={`h-2.5 w-10 rounded-full transition-all duration-300 ${
                    status === "completed"
                      ? "bg-gradient-to-r from-[#2EC97E] to-[#F5C842]"
                      : status === "active"
                      ? "bg-[#F5C842] border border-[#E6B800] pulse-active"
                      : "bg-[#D0D8E4]"
                  }`}
                />
                {/* Tooltip */}
                <div className="absolute top-7 scale-0 group-hover:scale-100 transition-all duration-150 origin-top bg-[#1A2E44] text-white text-[10px] rounded py-1 px-2 whitespace-nowrap shadow-lg z-50">
                  Phase {phase.number}: {phase.name} ({phase.weekRange})
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Notifications & Current Week badge */}
        <div className="flex items-center gap-4">
          {/* Bell */}
          <button className="text-[#6B7C8D] hover:text-[#1A2E44] transition-colors p-1 rounded-full hover:bg-[#A8E6CF]/10">
            <Bell size={20} strokeWidth={2.2} />
          </button>

          {/* Current Week Badge */}
          <span className="px-3 py-1 bg-[#F5C842]/10 text-[#E6B800] border border-[#F5C842]/20 rounded-full text-xs font-display font-bold">
            Week {currentWeek} of 18
          </span>
        </div>
      </header>

      {/* Mobile Header: Visible on screens below 768px (md) */}
      <header className="flex flex-col md:hidden fixed top-0 left-0 w-full z-30 select-none bg-white">
        {/* Row 1 (height 48px) */}
        <div className="h-[48px] px-4 flex items-center justify-between border-b border-[#E8F0EC]/80">
          {/* Left side: hexagon logo icon </> in navy — no text at all */}
          <div className="flex items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#1A2E44] stroke-[8]"
            >
              <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
              <path
                d="M38,35 L23,50 L38,65 M62,35 L77,50 L62,65 M46,67 L54,33"
                stroke="#1A2E44"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right side: bell icon and "Week X of 18" amber badge */}
          <div className="flex items-center gap-3">
            {/* Bell */}
            <button className="text-[#6B7C8D] hover:text-[#1A2E44] transition-colors p-1 rounded-full hover:bg-[#A8E6CF]/10">
              <Bell size={18} strokeWidth={2.2} />
            </button>

            {/* Current Week Badge */}
            <span className="px-2.5 py-0.5 bg-[#F5C842]/10 text-[#E6B800] border border-[#F5C842]/20 rounded-full text-xs font-display font-bold">
              Week {currentWeek} of 18
            </span>
          </div>
        </div>

        {/* Row 2 (height 36px, background white, border-bottom 1px solid #E8F0EC) */}
        <div className="h-[36px] bg-white border-b border-[#E8F0EC] flex items-center overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap w-full">
          <div className="flex items-center gap-2 px-4 whitespace-nowrap">
            {PHASES.map((phase, index) => {
              const status = getPhaseStatus(phase.number);

              return (
                <React.Fragment key={phase.number}>
                  {index > 0 && <span className="text-gray-300 font-bold select-none">·</span>}
                  <div
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all duration-300 ${
                      status === "completed"
                        ? "bg-[#F5C842] text-[#1A2E44]"
                        : status === "active"
                        ? "bg-[#F5C842] text-[#1A2E44] pulse-active"
                        : "bg-[#D0D8E4] text-[#6B7C8D]"
                    }`}
                  >
                    P{phase.number}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
