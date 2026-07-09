"use client";

import React from "react";

interface MatrixRow {
  need: string;
  tech: string;
  notes: string;
}

export default function DecisionMatrix() {
  const matrixData: MatrixRow[] = [
    { need: "Build a UI in the browser", tech: "React.js", notes: "Component-based, most popular frontend library" },
    { need: "Build a full-stack web app fast", tech: "Next.js", notes: "Adds SSR, routing, API routes on top of React" },
    { need: "Run JavaScript on a server", tech: "Node.js", notes: "Event-driven, non-blocking, fast for I/O tasks" },
    { need: "Build REST APIs in JS quickly", tech: "Express.js", notes: "Minimal framework on top of Node.js" },
    { need: "Write backend/AI/automation code", tech: "Python", notes: "Readable, huge ecosystem, #1 for AI/ML" },
    { need: "Build a full-featured Python web app", tech: "Django", notes: "Batteries included: ORM, admin, auth built in" },
    { need: "Build a fast Python API with auto-docs", tech: "FastAPI", notes: "Modern, async, auto Swagger docs, great for APIs" },
    { need: "Connect frontend ↔ backend", tech: "RESTful API", notes: "Standard HTTP-based communication protocol" },
    { need: "Store structured relational data", tech: "PostgreSQL", notes: "Most feature-rich open-source SQL database" },
    { need: "Need a simpler relational database", tech: "MySQL", notes: "Widely used, great for read-heavy workloads" },
    { need: "Store flexible / document data", tech: "MongoDB", notes: "NoSQL, great for unstructured or nested data" },
    { need: "Host on the most popular cloud", tech: "AWS", notes: "Largest ecosystem, most job demand" },
    { need: "Host on Google's cloud", tech: "GCP", notes: "Strong ML/AI services, BigQuery, Kubernetes origin" },
    { need: "Host on Microsoft's cloud", tech: "Azure", notes: "Best for enterprise, Office 365 integration" },
    { need: "Package your app to run anywhere", tech: "Docker", notes: "Containers solve \"works on my machine\" problem" },
    { need: "Scale containers across servers", tech: "Kubernetes", notes: "Orchestrates Docker containers at scale" }
  ];

  return (
    <div className="bg-white rounded-[20px] shadow-brand p-5 md:p-7 flex flex-col gap-6">
      <div>
        <h2 className="font-display font-semibold text-xl md:text-2xl text-[#1A2E44]">
          Technology Decision Matrix
        </h2>
        <p className="font-sans text-[#6B7C8D] text-sm mt-1">
          Use this cheat sheet when planning a project with AI to decide which technology to reach for.
        </p>
      </div>

      {/* Responsive Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto scrollbar-thin" style={{ WebkitOverflowScrolling: "touch" }}>
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-bottom border-[#E8F0EC]">
              <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-3 pl-4">
                If you need to…
              </th>
              <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-3">
                Use this
              </th>
              <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-3 pr-4">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {matrixData.map((row, idx) => (
              <tr
                key={idx}
                className={`font-sans text-[14px] text-[#1A2E44] ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#A8E6CF]/5"
                }`}
              >
                <td className="p-3.5 pl-4 font-medium">{row.need}</td>
                <td className="p-3.5">
                  <span className="inline-block bg-[#F5C842]/20 text-[#1A2E44] font-sans font-semibold text-xs rounded-full px-2.5 py-1 whitespace-nowrap">
                    {row.tech}
                  </span>
                </td>
                <td className="p-3.5 pr-4 text-[#6B7C8D]">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pro Tip Card */}
      <div className="bg-[#F5C842]/10 border-l-4 border-[#F5C842] rounded-[16px] p-6 md:p-7 mt-2">
        <span className="font-sans font-semibold text-[11px] text-[#E6B800] uppercase tracking-wider block">
          PRO TIP FOR AI-ASSISTED BUILDERS
        </span>
        <p className="font-sans text-[15px] text-[#1A2E44] leading-relaxed mt-2">
          After completing this course, you will have the vocabulary and mental models to describe architecture clearly to your AI agent. Instead of &quot;build me a website,&quot; you will be able to say &quot;build me a Next.js frontend that calls a FastAPI backend connected to a PostgreSQL database, containerised with Docker and deployed to AWS.&quot; That precision is what separates an effective AI collaborator from a frustrated one.
        </p>
      </div>
    </div>
  );
}
