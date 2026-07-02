"use strict";
"use client";

import React from "react";
import { Lightbulb, Video, FileText, CheckSquare, Square, Building2 } from "lucide-react";
import { Module } from "@/lib/types";

interface LearnTabProps {
  module: Module;
  completedResources: string[];
  onToggleResource: (resourceId: string) => void;
}

export default function LearnTab({
  module,
  completedResources,
  onToggleResource
}: LearnTabProps) {
  const completedCount = completedResources.length;
  const totalCount = module.resources.length;
  const progressPercent = totalCount === 0 ? 100 : Math.round((completedCount / totalCount) * 100);

  // Track colors
  const trackBorderColor: Record<string, string> = {
    A: "border-l-4 border-l-[#3B82F6]", // blue
    B: "border-l-4 border-l-[#F5C842]", // amber
    C: "border-l-4 border-l-[#2EC97E]", // green
    D: "border-l-4 border-l-[#8B5CF6]"  // purple
  };

  return (
    <div className="flex flex-col gap-6 font-sans">
      {/* Top Progress Bar */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-xs text-[#6B7C8D] font-bold uppercase tracking-wider">
          <span>Resources Read/Watched</span>
          <span>{progressPercent}% Checked</span>
        </div>
        <div className="w-full h-2 bg-[#E8F0EC] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F5C842] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Concept Callout Card */}
      <div className="bg-[#A8E6CF]/10 p-5 rounded-[20px] border-none flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#2EC97E]/10 flex items-center justify-center text-[#2EC97E] flex-shrink-0 mt-0.5">
          <Lightbulb size={22} fill="currentColor" className="opacity-80" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-display font-semibold text-sm text-[#1A2E44]">
            Why This Concept Matters
          </h4>
          <p className="text-sm text-[#1A2E44] leading-relaxed">
            {module.realWorldContext}
          </p>
        </div>
      </div>

      {/* Resource Checklist */}
      <div className="flex flex-col gap-3">
        <h4 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider">
          Module Checklist ({completedCount} of {totalCount} done)
        </h4>

        <div className="flex flex-col gap-3">
          {module.resources.map((res) => {
            const isCompleted = completedResources.includes(res.id);

            return (
              <div
                key={res.id}
                onClick={() => onToggleResource(res.id)}
                className={`p-4 rounded-[20px] bg-white shadow-brand hover:shadow-brand-hover duration-200 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  trackBorderColor[module.track]
                } ${isCompleted ? "bg-[#2EC97E]/5" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#6B7C8D]">
                    {res.type === "video" ? (
                      <Video size={18} fill="currentColor" className="text-[#6B7C8D]/60" />
                    ) : (
                      <FileText size={18} />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-semibold text-[#1A2E44] transition-all ${
                        isCompleted ? "line-through text-[#6B7C8D]" : ""
                      }`}
                    >
                      {res.title}
                    </span>
                    <span className="text-xs text-[#6B7C8D] mt-0.5">
                      {res.source} · {res.duration}
                    </span>
                  </div>
                </div>

                <button className="text-[#6B7C8D] hover:text-[#2EC97E] transition-colors">
                  {isCompleted ? (
                    <CheckSquare size={20} className="text-[#2EC97E]" />
                  ) : (
                    <Square size={20} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-World Company Card */}
      <div className="bg-[#F5C842]/10 p-5 rounded-[20px] flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#F5C842]/10 flex items-center justify-center text-[#E6B800] flex-shrink-0 mt-0.5">
          <Building2 size={22} className="opacity-90" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-display font-semibold text-sm text-[#1A2E44]">
            How {module.companyName} Uses This
          </h4>
          <p className="text-xs text-[#6B7C8D] uppercase tracking-wider font-semibold">
            Real-world Application
          </p>
          <p className="text-sm text-[#1A2E44] mt-1 leading-relaxed">
            {module.companyContext}
          </p>
        </div>
      </div>
    </div>
  );
}
