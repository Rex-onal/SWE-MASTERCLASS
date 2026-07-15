"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

interface PhaseTabStripProps {
  activePhaseId: number;
  onPhaseSelect: (id: number) => void;
}

export default function PhaseTabStrip({
  activePhaseId,
  onPhaseSelect,
}: PhaseTabStripProps) {
  const shouldReduceMotion = useReducedMotion();

  const phases = [
    { id: 1, title: "Phase 1 — Python", duration: "Months 1–3" },
    { id: 2, title: "Phase 2 — LLM & Prompting", duration: "Months 4–6" },
    { id: 3, title: "Phase 3 — RAG & Systems", duration: "Months 7–10" },
    { id: 4, title: "Phase 4 — AI Agents", duration: "Months 11–15" },
  ];

  return (
    <div
      className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible md:flex-wrap md:justify-start [&::-webkit-scrollbar]:hidden"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {phases.map((phase) => {
        const isActive = activePhaseId === phase.id;

        return (
          <div
            key={phase.id}
            className="flex flex-col items-center gap-1.5 flex-shrink-0"
          >
            <button
              onClick={() => onPhaseSelect(phase.id)}
              className={`min-h-[44px] px-5 py-[10px] text-[14px] rounded-[50px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-[1.5px] whitespace-nowrap outline-none ${
                shouldReduceMotion ? "" : "transition-all duration-200 ease-in-out"
              } ${
                isActive
                  ? "bg-[#F5C842] text-[#1A2E44] font-display font-semibold border-[#F5C842] shadow-md shadow-[#F5C842]/20"
                  : "bg-white text-[#6B7C8D] font-sans font-medium border-[#D0D8E4] hover:bg-[#F5C842]/[0.08] hover:border-[#F5C842]"
              }`}
            >
              {phase.title}
            </button>
            <span className="font-sans font-normal text-[11px] text-[#6B7C8D]">
              {phase.duration}
            </span>
          </div>
        );
      })}
    </div>
  );
}
