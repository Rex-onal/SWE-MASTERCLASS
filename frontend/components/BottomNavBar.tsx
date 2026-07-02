"use strict";
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { getProgress, getAllModulesOrdered } from "@/lib/progress";
import { getWeekByModuleId } from "@/lib/curriculum";

interface BottomNavBarProps {
  currentModuleId: string;
}

export default function BottomNavBar({ currentModuleId }: BottomNavBarProps) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    setPassed(getProgress().passedQuizzes.includes(currentModuleId));

    const handleUpdate = () => {
      setPassed(getProgress().passedQuizzes.includes(currentModuleId));
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
    };
  }, [currentModuleId]);

  const orderedModules = getAllModulesOrdered();
  const currentIndex = orderedModules.findIndex((m) => m.id === currentModuleId);

  const prevModule = currentIndex > 0 ? orderedModules[currentIndex - 1] : null;
  const nextModule =
    currentIndex < orderedModules.length - 1
      ? orderedModules[currentIndex + 1]
      : null;

  const currentModule = orderedModules[currentIndex];
  const week = getWeekByModuleId(currentModuleId);
  const weekModules = week ? week.modules : [];
  const modulePositionInWeek = weekModules.findIndex(
    (m) => m.id === currentModuleId
  );

  return (
    <div className="h-12 border-t border-[#E8F0EC]/80 bg-white flex items-center justify-between px-6 text-sm font-sans select-none flex-shrink-0">
      {/* Previous Module Link */}
      {prevModule ? (
        <Link
          href={`/module/${prevModule.id}`}
          className="flex items-center gap-2 text-[#F5C842] hover:text-[#E6B800] font-semibold transition-colors group"
        >
          <ArrowLeft size={16} className="transform group-hover:translate-x-[-2px] transition-transform" />
          <span>Previous Module</span>
        </Link>
      ) : (
        <span className="flex items-center gap-2 text-[#D0D8E4] cursor-not-allowed">
          <ArrowLeft size={16} />
          <span>Previous Module</span>
        </span>
      )}

      {/* Center Label */}
      <span className="text-[#6B7C8D] font-medium text-xs">
        Module {modulePositionInWeek + 1} of {weekModules.length} — Week {week?.id}
      </span>

      {/* Next Module Link (Locked if current quiz not passed) */}
      {nextModule ? (
        passed ? (
          <Link
            href={`/module/${nextModule.id}`}
            className="flex items-center gap-2 text-[#F5C842] hover:text-[#E6B800] font-semibold transition-colors group"
          >
            <span>Next Module</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-[2px] transition-transform" />
          </Link>
        ) : (
          <button
            disabled
            className="flex items-center gap-2 text-[#D0D8E4] cursor-not-allowed font-semibold group"
            title="Pass the quiz to unlock the next module"
          >
            <span>Next Module</span>
            <Lock size={14} className="text-[#D0D8E4]" />
          </button>
        )
      ) : (
        <span className="flex items-center gap-2 text-[#D0D8E4] cursor-not-allowed">
          <span>Next Module</span>
          <ArrowRight size={16} />
        </span>
      )}
    </div>
  );
}
