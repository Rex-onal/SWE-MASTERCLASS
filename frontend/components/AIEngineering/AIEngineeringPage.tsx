"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PhaseTabStrip from "./PhaseTabStrip";
import PhaseContent from "./PhaseContent";
import { AI_ENGINEERING_PHASES } from "@/lib/aiEngineeringData";

export default function AIEngineeringPage() {
  const [activePhaseId, setActivePhaseId] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const activePhase = AI_ENGINEERING_PHASES.find((p) => p.id === activePhaseId) || AI_ENGINEERING_PHASES[0];

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 h-full overflow-y-auto pt-4 md:pt-8 p-4 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Page Header Card */}
      <header className="bg-white rounded-[20px] shadow-brand p-5 md:p-8 flex flex-col gap-6 relative overflow-hidden select-text">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#F5C842]/10 to-transparent pointer-events-none rounded-full" />
        
        <div className="flex flex-col gap-3 max-w-[80%] w-full">
          <div>
            <span className="inline-block bg-[#F5C842] text-[#1A2E44] font-display font-extrabold text-[10px] rounded-full px-2.5 py-1 uppercase tracking-wider">
              LEARNING TRACK
            </span>
            <h1 className="text-2xl md:text-3.5xl font-display font-bold text-[#1A2E44] mt-2">
              AI Engineering
            </h1>
            <p className="text-[#6B7C8D] font-sans text-[15px] mt-2 leading-relaxed">
              Four phases from zero Python to production AI agents. Work through each phase at your own pace — all resources are free and open access.
            </p>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["4 Phases", "28 Resources", "Free & Open Access"].map((stat, idx) => (
              <span
                key={idx}
                className="bg-[#F5C842] text-[#1A2E44] font-display font-semibold text-[12px] rounded-[50px] p-[6px_14px] shadow-sm"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Phase Navigation Strip */}
      <PhaseTabStrip
        activePhaseId={activePhaseId}
        onPhaseSelect={setActivePhaseId}
      />

      {/* Phase Content Area */}
      <PhaseContent phase={activePhase} />
    </motion.div>
  );
}
