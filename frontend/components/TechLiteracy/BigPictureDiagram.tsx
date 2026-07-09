"use client";

import React from "react";

export default function BigPictureDiagram() {
  const steps = [
    { tech: "User Browser", label: "Browser" },
    { tech: "React / Next.js", label: "Frontend UI" },
    { tech: "REST API", label: "HTTP Calls" },
    { tech: "Backend Server", label: "Node / Python" },
    { tech: "Database", label: "SQL / NoSQL" }
  ];

  return (
    <div className="bg-white rounded-[20px] shadow-brand p-5 md:p-7 mt-5">
      <h3 className="font-display font-semibold text-lg md:text-xl text-[#1A2E44]">
        The Big Picture — How Everything Connects
      </h3>
      <p className="font-sans text-[#6B7C8D] text-sm mt-2 leading-relaxed">
        Frontend is what users see. Backend handles requests. Databases store data. APIs are how frontend and backend talk. Cloud is where all of this runs. Docker and Kubernetes package and scale everything.
      </p>

      {/* Main Flow Diagram */}
      <div className="mt-6 flex flex-col gap-4 w-full">
        {/* Row 1: The main flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2 w-full">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Box */}
              <div className="bg-white border-[1.5px] border-[#1A2E44] rounded-[10px] p-[10px_16px] text-center w-full md:w-[18%] flex flex-col justify-center">
                <div className="font-display font-semibold text-[13px] text-[#1A2E44] leading-tight whitespace-nowrap">
                  {step.tech}
                </div>
                <div className="font-sans text-[11px] text-[#6B7C8D] mt-0.5 whitespace-nowrap">
                  {step.label}
                </div>
              </div>

              {/* Connected Arrow */}
              {idx < steps.length - 1 && (
                <>
                  <div className="text-[#F5C842] font-display font-bold text-[16px] hidden md:block select-none">
                    →
                  </div>
                  <div className="text-[#F5C842] font-display font-bold text-[16px] block md:hidden select-none">
                    ↓
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Row 2: Cloud infrastructure summary */}
        <div className="w-full mt-2">
          <div className="bg-[#F5C842]/10 rounded-[10px] p-[12px_20px] text-center border border-[#F5C842]/20">
            <span className="font-sans font-medium text-[13px] text-[#1A2E44]">
              ↓ All of this runs on Cloud Infrastructure, managed with Docker & Kubernetes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
