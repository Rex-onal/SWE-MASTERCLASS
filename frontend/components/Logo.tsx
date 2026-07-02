import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Hexagon SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#1A2E44] stroke-[8] flex-shrink-0"
      >
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
        {/* </ code tag inside */}
        <path
          d="M38,35 L23,50 L38,65 M62,35 L77,50 L62,65 M46,67 L54,33"
          stroke="#1A2E44"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-baseline font-display font-black text-lg tracking-tight">
        <span className="text-[#1A2E44]">SWE</span>
        <span className="text-[#F5C842] mx-1 font-light opacity-80">-</span>
        <span className="text-[#F5C842]">MASTERCLASS</span>
      </div>
    </div>
  );
}
