"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import { Phase } from "@/lib/aiEngineeringData";
import PhaseResourceCard from "./PhaseResourceCard";

interface PhaseContentProps {
  phase: Phase;
}

export default function PhaseContent({ phase }: PhaseContentProps) {
  const shouldReduceMotion = useReducedMotion();

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.04,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={phase.id}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        className="bg-white rounded-[20px] shadow-brand p-[18px_20px] md:p-7 flex flex-col gap-6 select-text"
      >
        {/* Phase Header */}
        <div className="flex flex-col items-start">
          <span className="inline-block border border-[#2EC97E] text-[#2EC97E] font-sans font-bold text-[11px] uppercase tracking-wider rounded-[50px] p-[4px_12px]">
            PHASE {phase.id} — {phase.id === 1 ? "PYTHON" : phase.id === 2 ? "LLM & PROMPTING" : phase.id === 3 ? "RAG & SYSTEMS" : "AI AGENTS"}
          </span>
          
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#1A2E44] mt-2.5">
            {phase.title}
          </h2>
          
          <p className="font-sans font-normal text-[14px] md:text-[15px] text-[#6B7C8D] mt-2 leading-relaxed">
            {phase.goal}
          </p>

          {/* Portfolio Project Callout */}
          <div className="w-full bg-[#F5C842]/10 border-l-4 border-[#F5C842] rounded-[14px] p-[14px_16px] md:p-[16px_20px] mt-4 flex gap-3 items-start select-text">
            <FolderOpen size={18} className="text-[#E6B800] mt-0.5 flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="font-sans font-semibold text-[11px] text-[#E6B800] tracking-wider uppercase">
                PORTFOLIO PROJECT
              </span>
              <p className="font-sans font-normal text-[14px] text-[#1A2E44] leading-relaxed">
                {phase.projectDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Resources Staggered List */}
        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 mt-2"
        >
          {phase.resources.map((resource, index) => (
            <PhaseResourceCard key={index} resource={resource} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
