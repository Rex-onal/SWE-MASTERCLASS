"use strict";
"use client";

import React from "react";
import { ExternalLink, Video, FileText } from "lucide-react";
import { Module } from "@/lib/types";

interface ResourcesTabProps {
  module: Module;
  visitedResources: string[];
  onOpenResource: (resourceId: string) => void;
}

export default function ResourcesTab({
  module,
  visitedResources,
  onOpenResource
}: ResourcesTabProps) {
  const handleOpenClick = (url: string, id: string) => {
    onOpenResource(id);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-4 font-sans">
      <h4 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider mb-2">
        Full Resources Catalog
      </h4>

      <div className="flex flex-col gap-4">
        {module.resources.map((res) => {
          const isVisited = visitedResources.includes(res.id);

          return (
            <div
              key={res.id}
              className="p-5 rounded-[20px] bg-white shadow-brand hover:shadow-brand-hover duration-200 transition-all flex items-center justify-between gap-4"
            >
              {/* Left Details */}
              <div className="flex items-center gap-3">
                {/* Visited Indicator Dot */}
                <div className="w-2.5 h-2.5 flex items-center justify-center flex-shrink-0">
                  {isVisited && (
                    <div className="w-2 h-2 rounded-full bg-[#2EC97E]" title="Already visited" />
                  )}
                </div>

                <div className="text-[#6B7C8D]">
                  {res.type === "video" ? (
                    <Video size={18} fill="currentColor" className="text-[#6B7C8D]/60" />
                  ) : (
                    <FileText size={18} />
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#1A2E44]">
                    {res.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#A8E6CF]/10 border border-[#A8E6CF]/25 text-[#2EC97E] text-[10px] font-sans font-bold rounded-full">
                      {res.source}
                    </span>
                    <span className="text-xs text-[#6B7C8D]">
                      · Estimated Time: {res.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Open Button */}
              <button
                onClick={() => handleOpenClick(res.url, res.id)}
                className="px-4 py-2 bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] font-display font-bold text-xs rounded-full flex items-center gap-1.5 shadow-md shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex-shrink-0"
              >
                <span>Open</span>
                <ExternalLink size={12} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
