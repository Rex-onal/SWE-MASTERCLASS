import React from "react";

interface LogoProps {
  fontSize?: string;
  padding?: string;
}

export default function Logo({ fontSize = "14px", padding }: LogoProps) {
  return (
    <div
      className="flex items-center gap-[10px] select-none overflow-hidden"
      style={{ padding }}
    >
      {/* Hexagon SVG */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#1A2E44] stroke-[8] flex-shrink-0"
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
      <span
        className="font-display font-black tracking-tight whitespace-nowrap"
        style={{ fontSize }}
      >
        <span className="text-[#1A2E44] font-display font-black" style={{ fontSize }}>SWE</span>
        <span className="text-[#F5C842]" style={{ margin: "0 2px", fontSize }}>{"\u2014"}</span>
        <span className="text-[#F5C842] font-display font-black" style={{ fontSize }}>MASTERCLASS</span>
      </span>
    </div>
  );
}
