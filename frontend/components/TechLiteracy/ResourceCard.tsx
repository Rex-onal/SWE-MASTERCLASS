"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { User } from "lucide-react";

const Youtube = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export interface ResourceItem {
  id: string | number; // e.g. "DAY 1" or "BONUS"
  title: string;
  category: string;
  duration: string;
  learnText: string;
  channel: string;
  url: string;
}

interface ResourceCardProps {
  item: ResourceItem;
}

export default function ResourceCard({ item }: ResourceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const getCategoryClasses = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("frontend")) {
      return "bg-blue-500/10 text-blue-600";
    }
    if (cat.includes("backend") || cat.includes("framework") || cat.includes("language") || cat.includes("runtime") || cat.includes("api framework")) {
      return "bg-[#8B5CF6]/10 text-[#8B5CF6]";
    }
    if (cat.includes("api design") || cat.includes("api design concept")) {
      return "bg-[#F5C842]/20 text-[#1A2E44]";
    }
    if (cat.includes("database")) {
      return "bg-[#2EC97E]/10 text-[#2EC97E]";
    }
    if (cat.includes("cloud") || cat.includes("platform")) {
      return "bg-[#FF7F7F]/10 text-[#FF7F7F]";
    }
    if (cat.includes("devops") || cat.includes("containers")) {
      return "bg-[#1A2E44]/10 text-[#1A2E44]";
    }
    return "bg-[#6B7C8D]/10 text-[#6B7C8D]";
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" as any }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-[20px] shadow-brand p-5 md:p-[24px_28px] flex flex-col md:flex-row gap-5 md:gap-8 items-start md:items-center hover:-translate-y-[3px] hover:shadow-brand-hover transition-all duration-200 w-full"
    >
      {/* Left Info Section */}
      <div className="flex-1 flex flex-col">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display font-extrabold text-[13px] text-[#1A2E44] bg-[#F5C842] rounded-[8px] px-2.5 py-1">
            {item.id}
          </span>
          <span className={`font-sans font-semibold text-[11px] rounded-full px-3 py-1 uppercase tracking-wider ${getCategoryClasses(item.category)}`}>
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg md:text-[20px] text-[#1A2E44] mt-3 leading-snug">
          {item.title}
        </h3>

        {/* Learn Section */}
        <div className="mt-3">
          <span className="font-sans font-medium text-[11px] text-[#6B7C8D] uppercase tracking-widest block">
            What You&apos;ll Learn
          </span>
          <p className="font-sans text-[14px] text-[#1A2E44] leading-relaxed mt-1">
            {item.learnText}
          </p>
        </div>

        {/* Metadata Footer */}
        <div className="flex flex-wrap items-center gap-3 mt-4 text-[13px] text-[#6B7C8D] font-sans">
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-[#6B7C8D]" />
            <span>{item.channel}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8F0EC]" />
          <span className="bg-[#E8F0EC]/60 text-[#1A2E44] font-medium text-[12px] rounded-full px-2.5 py-0.5">
            {item.duration}
          </span>
        </div>
      </div>

      {/* Right Video Link Box */}
      <div className="w-full md:w-[160px] flex-shrink-0">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full bg-white border-[1.5px] border-[#E8F0EC] hover:border-[#F5C842] hover:bg-[#F5C842]/5 rounded-[14px] p-5 text-center transition-all duration-200"
        >
          <div className="flex flex-col items-center justify-center">
            <Youtube size={28} className="text-[#FF0000] group-hover:scale-110 transition-transform duration-200" />
            <span className="font-sans font-semibold text-[13px] text-[#1A2E44] mt-2 block">
              Watch Video
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
