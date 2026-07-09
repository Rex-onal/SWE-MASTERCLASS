"use client";

import React from "react";

interface NavPill {
  id: string;
  label: string;
}

interface SectionNavProps {
  activeSection: string;
  onPillClick: (id: string) => void;
}

export default function SectionNav({ activeSection, onPillClick }: SectionNavProps) {
  const pills: NavPill[] = [
    { id: "start-here", label: "Start Here" },
    { id: "week-1", label: "Week 1" },
    { id: "week-2", label: "Week 2" },
    { id: "bonus-resources", label: "Bonus Resources" },
    { id: "quick-reference", label: "Quick Reference" }
  ];

  return (
    <div className="w-full bg-white border-b border-[#E8F0EC] p-3 px-6 flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none select-none">
      <div className="flex gap-2.5 whitespace-nowrap min-w-max">
        {pills.map((pill) => {
          const isActive = activeSection === pill.id;

          return (
            <button
              key={pill.id}
              onClick={() => onPillClick(pill.id)}
              className={`font-sans text-[13px] font-medium rounded-full px-[18px] py-2 border-[1.5px] transition-all duration-200 ${
                isActive
                  ? "bg-[#F5C842] border-[#F5C842] text-[#1A2E44] font-bold shadow-sm"
                  : "bg-white border-[#D0D8E4] text-[#6B7C8D] hover:border-[#1A2E44] hover:text-[#1A2E44]"
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
