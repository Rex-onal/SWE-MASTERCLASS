"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, GraduationCap, BookOpen } from "lucide-react";
import { Resource } from "@/lib/aiEngineeringData";

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

interface PhaseResourceCardProps {
  resource: Resource;
}

export default function PhaseResourceCard({ resource }: PhaseResourceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const getBadgeStyles = (type: string) => {
    switch (type) {
      case "YouTube":
        return {
          bg: "bg-[rgba(255,0,0,0.08)]",
          text: "text-[#CC0000]",
          border: "border-[rgba(255,0,0,0.2)]",
        };
      case "Course":
        return {
          bg: "bg-[rgba(139,92,246,0.1)]",
          text: "text-[#8B5CF6]",
          border: "border-[rgba(139,92,246,0.2)]",
        };
      case "Text/Web":
      case "Text/Web/Course":
        return {
          bg: "bg-[rgba(59,130,246,0.1)]",
          text: "text-[#3B82F6]",
          border: "border-[rgba(59,130,246,0.2)]",
        };
      default:
        return {
          bg: "bg-[#6B7C8D]/10",
          text: "text-[#6B7C8D]",
          border: "border-[#6B7C8D]/20",
        };
    }
  };

  const getActionDetails = (type: string, platform: string) => {
    if (type === "YouTube") {
      return {
        icon: Youtube,
        colorClass: "text-[#FF0000]",
        text: "Watch Video",
      };
    } else if (
      type === "Course" ||
      type === "Text/Web/Course" ||
      platform === "LangChain Academy" ||
      platform === "DeepLearning.AI" ||
      platform === "Hugging Face"
    ) {
      return {
        icon: GraduationCap,
        colorClass: "text-[#F5C842]",
        text: "Open Course",
      };
    } else {
      return {
        icon: BookOpen,
        colorClass: "text-[#3B82F6]",
        text: "Read Docs",
      };
    }
  };

  const badgeStyles = getBadgeStyles(resource.type);
  const action = getActionDetails(resource.type, resource.platform);
  const ActionIcon = action.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: "easeOut" as any,
      },
    },
  };

  // Determine if it includes a certificate
  const isHuggingFaceCourse = resource.platform === "Hugging Face";
  const costLabel = isHuggingFaceCourse ? "Free + Free Certificate" : "Free";

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-[20px] shadow-brand p-5 md:p-[24px_28px] flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 hover:-translate-y-[3px] hover:shadow-brand-hover transition-all duration-200 w-full select-text"
    >
      {/* Left section: Resource details */}
      <div className="flex-1 flex flex-col items-start">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`font-sans font-bold text-[10px] uppercase tracking-wider rounded-full px-2.5 py-0.5 border ${badgeStyles.bg} ${badgeStyles.text} ${badgeStyles.border}`}
          >
            {resource.type}
          </span>
          <span className="bg-[rgba(0,0,0,0.05)] text-[#1A2E44] font-sans font-medium text-[11px] rounded-[50px] px-2.5 py-[3px]">
            {resource.platform}
          </span>
        </div>

        {/* Topic Label */}
        <span className="font-sans font-medium text-[11px] text-[#6B7C8D] uppercase tracking-wider mt-3">
          {resource.topic}
        </span>

        {/* Resource Name */}
        <h3 className="font-display font-semibold text-[17px] text-[#1A2E44] mt-1 leading-snug">
          {resource.name}
        </h3>

        {/* Duration Pill Row */}
        <div className="flex items-center gap-1 mt-2 text-[13px] text-[#6B7C8D] font-sans">
          <Clock size={13} className="text-[#6B7C8D]" />
          <span>{resource.duration}</span>
        </div>

        {/* Cost Badge */}
        <span className="inline-block bg-[rgba(46,201,126,0.12)] text-[#2EC97E] font-sans font-semibold text-[12px] rounded-[50px] px-2.5 py-[3px] mt-2 border border-[#2EC97E]/20">
          {costLabel}
        </span>
      </div>

      {/* Right section: Action Box */}
      <div className="w-full md:w-[160px] flex-shrink-0 mt-4 md:mt-0">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full bg-white border-[1.5px] border-[#E8F0EC] hover:border-[#F5C842] hover:bg-[#F5C842]/[0.05] rounded-[14px] p-[16px_20px] text-center transition-all duration-200 cursor-pointer min-h-[44px]"
        >
          <div className="flex flex-col items-center justify-center">
            <ActionIcon
              size={28}
              className={`${action.colorClass} group-hover:scale-110 transition-transform duration-200`}
            />
            <span className="font-sans font-semibold text-[13px] text-[#1A2E44] mt-2 block">
              {action.text}
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
