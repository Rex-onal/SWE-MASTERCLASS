"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Target, FileText, Bot, Lightbulb } from "lucide-react";

import SectionNav from "./SectionNav";
import BigPictureDiagram from "./BigPictureDiagram";
import ResourceCard, { ResourceItem } from "./ResourceCard";
import DecisionMatrix from "./DecisionMatrix";

const sections = ["start-here", "week-1", "week-2", "bonus-resources", "quick-reference"];

export default function TechLiteracyPage() {
  const [activeSection, setActiveSection] = useState("start-here");
  const [showSticky, setShowSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const week1Items: ResourceItem[] = [
    {
      id: "DAY 1",
      title: "React.js",
      category: "Frontend",
      duration: "~1 hr",
      learnText: "Understand what React is, why it exists, component-based UI, JSX, props, state, and hooks.",
      channel: "Zero To Knowing",
      url: "https://www.youtube.com/watch?v=bjoKplaqe84"
    },
    {
      id: "DAY 2",
      title: "Next.js",
      category: "Frontend Framework",
      duration: "~1 hr",
      learnText: "Learn how Next.js builds on React to add server-side rendering, file-based routing, API routes, and full-stack capability.",
      channel: "developedbyed",
      url: "https://www.youtube.com/watch?v=L7-CQpa2JFU"
    },
    {
      id: "DAY 3",
      title: "Node.js",
      category: "Backend Runtime",
      duration: "~1 hr 15 min",
      learnText: "Understand what Node.js is, how JavaScript runs on the server, the event loop, core modules, and building a basic HTTP server.",
      channel: "Traversy Media",
      url: "https://www.youtube.com/watch?v=32M1al-Y6Ag"
    },
    {
      id: "DAY 4",
      title: "Express.js",
      category: "Backend Framework",
      duration: "~1 hr",
      learnText: "Learn how Express simplifies Node.js server creation: routing, middleware, request/response handling, and REST endpoints.",
      channel: "Traversy Media",
      url: "https://www.youtube.com/watch?v=CnH3kAXSrmU"
    },
    {
      id: "DAY 5",
      title: "Python",
      category: "Backend Language",
      duration: "~1 hr 30 min",
      learnText: "Get a solid foundation in Python syntax, variables, functions, loops, lists, and why Python dominates backend and AI development.",
      channel: "Traversy Media",
      url: "https://www.youtube.com/watch?v=JJmcL1N2KQs"
    },
    {
      id: "DAY 6",
      title: "Django",
      category: "Python Backend Framework",
      duration: "~40 min",
      learnText: "See how Django works as a batteries-included framework: MVC/MVT pattern, models, views, templates, admin panel, and ORM.",
      channel: "NeuralNine",
      url: "https://www.youtube.com/watch?v=0roB7wZMLqI"
    },
    {
      id: "DAY 7",
      title: "FastAPI",
      category: "Python API Framework",
      duration: "~1 hr",
      learnText: "Discover FastAPI's modern approach to building APIs: automatic docs, Pydantic validation, async support, and how it differs from Django.",
      channel: "Traversy Media",
      url: "https://www.youtube.com/watch?v=8TMQcRcBnW8"
    }
  ];

  const week2Items: ResourceItem[] = [
    {
      id: "DAY 8",
      title: "RESTful APIs",
      category: "API Design Concept",
      duration: "~25 min",
      learnText: "Understand what REST is, HTTP methods (GET/POST/PUT/DELETE), status codes, request/response cycle, and why APIs are the backbone of modern apps.",
      channel: "ByteByteGo",
      url: "https://www.youtube.com/watch?v=-mN3VyJuCjM"
    },
    {
      id: "DAY 9",
      title: "PostgreSQL",
      category: "Relational Database",
      duration: "~40 min",
      learnText: "Learn SQL basics, tables, queries, joins, and why PostgreSQL is the go-to open-source relational database for production apps.",
      channel: "NeuralNine",
      url: "https://www.youtube.com/watch?v=gySEbKmkvEU"
    },
    {
      id: "DAY 10",
      title: "MySQL",
      category: "Relational Database",
      duration: "~40 min",
      learnText: "Understand MySQL's role in the database world, how it differs from PostgreSQL, basic DDL/DML, and where it's commonly used.",
      channel: "Coding With Lewis",
      url: "https://www.youtube.com/watch?v=3HX9rOQiKOs"
    },
    {
      id: "DAY 11",
      title: "MongoDB",
      category: "NoSQL Database",
      duration: "~1 hr",
      learnText: "Grasp the NoSQL concept, documents vs. tables, collections, CRUD operations in MongoDB, and when to choose MongoDB over SQL.",
      channel: "PiyushGarg",
      url: "https://www.youtube.com/watch?v=Zndy6PfyLLM"
    },
    {
      id: "DAY 12",
      title: "AWS",
      category: "Cloud Platform",
      duration: "~30 min",
      learnText: "Get a bird's-eye view of Amazon Web Services: EC2, S3, Lambda, IAM, VPC, and how cloud hosting works at a high level.",
      channel: "Coding with Lewis",
      url: "https://www.youtube.com/watch?v=LFCTFzcMQuA"
    },
    {
      id: "DAY 13",
      title: "Google Cloud & Azure",
      category: "Cloud Platforms",
      duration: "~20 min",
      learnText: "Compare GCP and Azure with AWS — key services, what makes each unique, and how to pick the right cloud for a project.",
      channel: "Adam Marczak",
      url: "https://www.youtube.com/watch?v=liRgZeF6mbk"
    },
    {
      id: "DAY 14",
      title: "Docker & Kubernetes",
      category: "DevOps / Containers",
      duration: "~40 min",
      learnText: "Understand containerisation with Docker (images, containers, Dockerfile, Compose) and orchestration with Kubernetes (pods, deployments, services).",
      channel: "NeuralNine",
      url: "https://www.youtube.com/watch?v=XQNv0SRB0OM"
    }
  ];

  const bonusItems: ResourceItem[] = [
    {
      id: "BONUS",
      title: "Next.js 15 Full Course 2025 — Deeper Dive",
      category: "Frontend Framework",
      duration: "~1 hr 30 min",
      learnText: "A deeper dive into Next.js 15 covering server components, advanced routing, data fetching patterns, and full-stack architecture.",
      channel: "Codevolution",
      url: "https://www.youtube.com/watch?v=k7o9R6eaSes"
    },
    {
      id: "BONUS",
      title: "Kubernetes Crash Course for Absolute Beginners",
      category: "DevOps / Containers",
      duration: "~1 hr",
      learnText: "Hands-on Kubernetes tutorial covering pods, deployments, services, and how Kubernetes orchestrates containers at scale.",
      channel: "TechWorld with Nana",
      url: "https://www.youtube.com/watch?v=s_o8dwzRlu4"
    },
    {
      id: "BONUS",
      title: "REST API Crash Course — Introduction + Full Python API Tutorial",
      category: "API Design",
      duration: "~45 min",
      learnText: "A practical REST API deep-dive with a full Python implementation — great for reinforcing Day 8 with actual code.",
      channel: "CalebCurry",
      url: "https://www.youtube.com/watch?v=qbLc5a9jdXo"
    },
    {
      id: "BONUS",
      title: "FastAPI Crash Course 2025: Python Tutorial for Absolute Beginners",
      category: "Python API Framework",
      duration: "~30 min",
      learnText: "A focused beginner-level FastAPI walkthrough — great as a follow-up to Day 7 if you want a second perspective.",
      channel: "Zero To Knowing",
      url: "https://www.youtube.com/watch?v=nWWPlEO0he8"
    },
    {
      id: "BONUS",
      title: "Django Crash Course For Beginners 2025",
      category: "Python Backend Framework",
      duration: "~1 hr",
      learnText: "A comprehensive Django walkthrough covering models, views, templates, URLs, and the admin panel — deeper than Day 6.",
      channel: "NeuralNine",
      url: "https://www.youtube.com/watch?v=u1GnZfDw5LU"
    }
  ];

  const overviewData = [
    { day: "1", topic: "React.js", cat: "Frontend", dur: "~1 hr" },
    { day: "2", topic: "Next.js", cat: "Frontend Framework", dur: "~1 hr" },
    { day: "3", topic: "Node.js", cat: "Backend Runtime", dur: "~1 hr 15 min" },
    { day: "4", topic: "Express.js", cat: "Backend Framework", dur: "~1 hr" },
    { day: "5", topic: "Python", cat: "Backend Language", dur: "~1 hr 30 min" },
    { day: "6", topic: "Django", cat: "Python Backend Framework", dur: "~40 min" },
    { day: "7", topic: "FastAPI", cat: "Python API Framework", dur: "~1 hr" },
    { day: "8", topic: "RESTful APIs", cat: "API Design Concept", dur: "~25 min" },
    { day: "9", topic: "PostgreSQL", cat: "Relational Database", dur: "~40 min" },
    { day: "10", topic: "MySQL", cat: "Relational Database", dur: "~40 min" },
    { day: "11", topic: "MongoDB", cat: "NoSQL Database", dur: "~1 hr" },
    { day: "12", topic: "AWS", cat: "Cloud Platform", dur: "~30 min" },
    { day: "13", topic: "Google Cloud & Azure", cat: "Cloud Platforms", dur: "~20 min" },
    { day: "14", topic: "Docker & Kubernetes", cat: "DevOps / Containers", dur: "~40 min" }
  ];

  const getCategoryBadgeClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("frontend")) {
      return "bg-blue-500/12 text-blue-600";
    }
    if (cat.includes("backend") || cat.includes("framework") || cat.includes("language") || cat.includes("runtime")) {
      return "bg-[#8B5CF6]/12 text-[#8B5CF6]";
    }
    if (cat.includes("api design") || cat.includes("api design concept")) {
      return "bg-[#F5C842]/20 text-[#1A2E44]";
    }
    if (cat.includes("database")) {
      return "bg-[#2EC97E]/12 text-[#2EC97E]";
    }
    if (cat.includes("cloud") || cat.includes("platform")) {
      return "bg-[#FF7F7F]/12 text-[#FF7F7F]";
    }
    if (cat.includes("devops") || cat.includes("containers")) {
      return "bg-[#1A2E44]/10 text-[#1A2E44]";
    }
    return "bg-[#6B7C8D]/10 text-[#6B7C8D]";
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setShowSticky(scrollTop > 240);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: "-90px 0px -65% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePillClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.04
      }
    }
  };

  return (
    <motion.div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 h-full overflow-y-auto pt-4 md:pt-8 p-4 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Page Header Card */}
      <section className="bg-white rounded-[20px] shadow-brand p-5 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative overflow-hidden select-text">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#A8E6CF]/20 to-transparent pointer-events-none rounded-full" />
        
        <div className="flex flex-col gap-3 max-w-[65%] w-full">
          <div>
            <span className="inline-block bg-[#F5C842] text-[#1A2E44] font-display font-extrabold text-[10px] rounded-full px-2.5 py-1 uppercase tracking-wider">
              BONUS RESOURCE
            </span>
            <h1 className="text-2xl md:text-3.5xl font-display font-bold text-[#1A2E44] mt-2">
              Tech Literacy Crash Course
            </h1>
            <p className="text-[#6B7C8D] font-sans text-[15px] mt-2 leading-relaxed">
              14 days. One topic per day. Understand what everything does, why it exists, and when to use it — so you can direct AI like an architect briefing a builder.
            </p>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["14 Days", "19 Resources", "Free & Open Access"].map((stat, idx) => (
              <span
                key={idx}
                className="bg-[#F5C842] text-[#1A2E44] font-display font-semibold text-[12px] rounded-full px-3.5 py-1.5 shadow-sm"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Header Stack Diagram */}
        <div className="w-full lg:w-auto bg-[#A8E6CF]/5 border border-[#A8E6CF]/25 rounded-[16px] p-4 flex flex-col gap-2 shadow-sm select-none">
          <div className="text-[10px] font-sans font-bold text-[#6B7C8D] uppercase tracking-wider text-center md:text-left">
            Architecture Flow
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-2">
            {["Browser", "React/Next.js", "REST API", "Backend", "Database", "Cloud"].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-[#1A2E44] text-white font-sans text-[11px] font-semibold rounded-full px-3 py-1 text-center whitespace-nowrap shadow-sm">
                  {step}
                </div>
                {idx < 5 && (
                  <>
                    <span className="text-[#F5C842] font-display font-bold text-[13px] hidden md:inline">→</span>
                    <span className="text-[#F5C842] font-display font-bold text-[13px] inline md:hidden">↓</span>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Pill Navigation Strip */}
      <div
        className={`sticky top-0 z-30 transition-all duration-300 w-full rounded-full shadow-md overflow-hidden ${
          showSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <SectionNav activeSection={activeSection} onPillClick={handlePillClick} />
      </div>

      {/* SECTION 1: START HERE */}
      <section id="start-here" className="scroll-mt-[70px] flex flex-col gap-5 select-text">
        <div className="flex flex-col gap-1">
          <span className="text-[#2EC97E] border border-[#2EC97E] rounded-full px-3 py-0.5 text-[11px] uppercase tracking-widest font-sans font-semibold w-fit">
            START HERE
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A2E44] mt-1">
            How to Use This Guide
          </h2>
        </div>

        {/* Guide Intro & Rules Card */}
        <div className="bg-white rounded-[20px] shadow-brand p-5 md:p-[28px] flex flex-col gap-6">
          <p className="font-sans text-[15px] text-[#1A2E44] leading-relaxed">
            This guide is built for one specific type of learner: someone who uses AI agents to write code and wants to understand what each technology does, why it exists, and when to use it — without needing to memorise syntax or become a deep expert. You are the architect. AI is the builder. You need to know what to ask for and why.
          </p>

          {/* Rule Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Clock,
                text: "One topic per day, one video per session. Each session is 30–60 minutes max."
              },
              {
                icon: Target,
                text: "Goal: understand concepts, not memorise code. Pause and ask yourself — what problem does this solve?"
              },
              {
                icon: FileText,
                text: "Keep a simple note for each topic: What is it? What does it do? When would I use it?"
              },
              {
                icon: Bot,
                text: "After each video, open your AI agent and ask it to explain the topic in a different way or build a tiny example."
              }
            ].map((rule, idx) => {
              const IconComponent = rule.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#A8E6CF]/10 rounded-[14px] p-[16px_20px] border-l-[3px] border-[#2EC97E] flex gap-3.5 items-start"
                >
                  <IconComponent className="text-[#F5C842] flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-sans text-[14px] text-[#1A2E44] leading-relaxed">
                    {rule.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Skip Callout Card */}
          <div className="bg-[#F5C842]/12 rounded-[14px] border-l-[3px] border-[#F5C842] p-[16px_20px] flex gap-3.5 items-start">
            <Lightbulb className="text-[#F5C842] flex-shrink-0 mt-0.5" size={18} />
            <span className="font-sans text-[14px] text-[#1A2E44] leading-relaxed">
              Skip sections you already understand. This is a reference, not a test.
            </span>
          </div>
        </div>

        {/* The Big Picture Diagram */}
        <BigPictureDiagram />

        {/* 14-Day Course Overview Card */}
        <div className="bg-white rounded-[20px] shadow-brand p-5 md:p-[28px] mt-2 overflow-hidden">
          <h3 className="font-display font-semibold text-lg md:text-xl text-[#1A2E44]">
            14-Day Course Overview
          </h3>
          <div className="w-full overflow-x-auto mt-4" style={{ WebkitOverflowScrolling: "touch" }}>
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-bottom border-[#E8F0EC]">
                  <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-2.5 px-4">
                    Day
                  </th>
                  <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-2.5">
                    Topic
                  </th>
                  <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-2.5">
                    Category
                  </th>
                  <th className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#6B7C8D] border-b-2 border-[#E8F0EC] p-2.5 px-4">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {overviewData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`font-sans text-[14px] text-[#1A2E44] ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#A8E6CF]/5"
                    }`}
                  >
                    <td className="p-3 px-4 font-bold text-[#1A2E44]">{row.day}</td>
                    <td className="p-3 font-semibold">{row.topic}</td>
                    <td className="p-3">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-sans font-semibold whitespace-nowrap ${getCategoryBadgeClass(row.cat)}`}>
                        {row.cat}
                      </span>
                    </td>
                    <td className="p-3 px-4 text-[#6B7C8D]">{row.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: WEEK 1 */}
      <section id="week-1" className="scroll-mt-[70px] flex flex-col gap-5 select-text">
        <div className="flex flex-col gap-1">
          <span className="bg-[#F5C842] text-[#1A2E44] rounded-full px-3 py-0.5 text-[11px] uppercase tracking-widest font-sans font-bold w-fit">
            WEEK 1
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A2E44] mt-1">
            Frontend Frameworks · Backend Runtimes · Python Ecosystem
          </h2>
          <p className="text-[#6B7C8D] font-sans text-sm">
            Days 1–7 · Understand the tools that power every modern web application
          </p>
        </div>

        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full"
        >
          {week1Items.map((item, idx) => (
            <ResourceCard key={idx} item={item} />
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: WEEK 2 */}
      <section id="week-2" className="scroll-mt-[70px] flex flex-col gap-5 select-text">
        <div className="flex flex-col gap-1">
          <span className="bg-[#F5C842] text-[#1A2E44] rounded-full px-3 py-0.5 text-[11px] uppercase tracking-widest font-sans font-bold w-fit">
            WEEK 2
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A2E44] mt-1">
            APIs · Databases · Cloud Platforms · DevOps
          </h2>
          <p className="text-[#6B7C8D] font-sans text-sm">
            Days 8–14 · From API design to cloud deployment — the full production stack
          </p>
        </div>

        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full"
        >
          {week2Items.map((item, idx) => (
            <ResourceCard key={idx} item={item} />
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: BONUS RESOURCES */}
      <section id="bonus-resources" className="scroll-mt-[70px] flex flex-col gap-5 select-text">
        <div className="flex flex-col gap-1">
          <span className="bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full px-3 py-0.5 text-[11px] uppercase tracking-widest font-sans font-bold w-fit">
            BONUS
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A2E44] mt-1">
            Bonus Resources
          </h2>
          <p className="text-[#6B7C8D] font-sans text-sm">
            Finished the 14 days? Go deeper on specific topics with these hand-picked videos.
          </p>
        </div>

        {/* Intro callout card */}
        <div className="bg-[#A8E6CF]/10 rounded-[14px] p-[16px_20px] border-l-[3px] border-[#2EC97E] flex gap-3.5 items-start">
          <Lightbulb className="text-[#F5C842] flex-shrink-0 mt-0.5" size={18} />
          <span className="font-sans text-[14px] text-[#1A2E44] leading-relaxed">
            These extra videos are for going deeper — not required, but recommended once you&apos;ve completed the day that covers that topic.
          </span>
        </div>

        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full"
        >
          {bonusItems.map((item, idx) => (
            <ResourceCard key={idx} item={item} />
          ))}
        </motion.div>
      </section>

      {/* SECTION 5: QUICK REFERENCE */}
      <section id="quick-reference" className="scroll-mt-[70px] flex flex-col gap-5 select-text">
        <div className="flex flex-col gap-1">
          <span className="bg-[#1A2E44] text-white rounded-full px-3 py-0.5 text-[11px] uppercase tracking-widest font-sans font-bold w-fit">
            QUICK REFERENCE
          </span>
        </div>

        <DecisionMatrix />
      </section>
    </motion.div>
  );
}
