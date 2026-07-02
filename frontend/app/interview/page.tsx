"use strict";
"use client";

import React, { useEffect, useState } from "react";
import { Award, CheckCircle2, BookmarkCheck, ArrowLeft, ArrowRight, Save, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getProgress } from "@/lib/progress";
import { INTERVIEW_QUESTIONS } from "@/lib/curriculum";
import { InterviewQuestion, UserProgress } from "@/lib/types";

export default function InterviewPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [solutions, setSolutions] = useState<Record<string, string>>({});
  const [tempSolution, setTempSolution] = useState("");
  const [isSolutionSaved, setIsSolutionSaved] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProgress(getProgress());

    // Load custom notes/solutions
    const savedSol = localStorage.getItem("swe_masterclass_interview_solutions");
    if (savedSol) {
      setSolutions(JSON.parse(savedSol));
    }

    const handleUpdate = () => {
      setProgress(getProgress());
    };

    window.addEventListener("swe_progress_updated", handleUpdate);
    return () => {
      window.removeEventListener("swe_progress_updated", handleUpdate);
    };
  }, []);

  if (!mounted || !progress) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-[#A8E6CF]/10">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#F5C842] border-t-transparent rounded-full animate-spin" />
          <span className="text-[#1A2E44] font-medium text-sm">Loading Interview Prep...</span>
        </div>
      </div>
    );
  }

  const handleSelectQuestion = (q: InterviewQuestion) => {
    setSelectedQuestionId(q.id);
    setTempSolution(solutions[q.id] || "");
    setIsSolutionSaved(false);
  };

  const handleTogglePracticed = (qId: string) => {
    const current = getProgress();
    let updatedList: string[];
    if (current.practicedQuestions.includes(qId)) {
      updatedList = current.practicedQuestions.filter((id) => id !== qId);
    } else {
      updatedList = [...current.practicedQuestions, qId];
    }
    const updated = {
      ...current,
      practicedQuestions: updatedList
    };
    localStorage.setItem("swe_masterclass_progress", JSON.stringify(updated));
    window.dispatchEvent(new Event("swe_progress_updated"));
    setProgress(updated);
  };

  const handleSaveSolution = (qId: string) => {
    const updated = {
      ...solutions,
      [qId]: tempSolution
    };
    setSolutions(updated);
    localStorage.setItem("swe_masterclass_interview_solutions", JSON.stringify(updated));
    setIsSolutionSaved(true);
    setTimeout(() => setIsSolutionSaved(false), 2000);
  };

  const selectedQuestion = INTERVIEW_QUESTIONS.find((q) => q.id === selectedQuestionId);

  // Group questions by type
  const dsaQuestions = INTERVIEW_QUESTIONS.filter((q) => q.type === "dsa");
  const systemQuestions = INTERVIEW_QUESTIONS.filter((q) => q.type === "system");
  const aiQuestions = INTERVIEW_QUESTIONS.filter((q) => q.type === "ai");

  const difficultyColors = {
    Easy: "bg-[#2EC97E]/10 border-[#2EC97E]/20 text-[#2EC97E]",
    Medium: "bg-[#F5C842]/10 border-[#F5C842]/20 text-[#E6B800]",
    Hard: "bg-[#FF7F7F]/10 border-[#FF7F7F]/20 text-[#FF7F7F]"
  };

  return (
    <div className="flex-1 flex h-[calc(100vh-64px)] w-full overflow-hidden select-none font-sans">
      
      {/* 1. Main Columns List / Sidebar (when selected) */}
      <motion.div
        layout
        className={`bg-slate-50 border-r border-[#E8F0EC]/80 flex flex-col h-full overflow-y-auto p-6 transition-all duration-300 ${
          selectedQuestionId ? "hidden md:flex w-[320px] flex-shrink-0" : "w-full"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col gap-2 mb-6">
          {selectedQuestionId && (
            <button
              onClick={() => setSelectedQuestionId(null)}
              className="flex items-center gap-2 text-xs font-display font-bold text-[#F5C842] hover:text-[#E6B800] transition-colors mb-2"
            >
              <ArrowLeft size={14} />
              <span>All Categories</span>
            </button>
          )}
          <h2 className="text-2xl font-display font-bold text-[#1A2E44]">
            Interview Preparation
          </h2>
          <p className="text-xs text-[#6B7C8D]">
            Master technical topics, algorithms, and system design paradigms.
          </p>
        </div>

        {/* 3 Columns Layout (Grid) */}
        <div
          className={`grid gap-6 ${
            selectedQuestionId ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {/* Column 1: DSA Drills */}
          {(!selectedQuestionId || selectedQuestion?.type === "dsa") && (
            <div className="flex flex-col gap-4">
              {!selectedQuestionId && (
                <h3 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider flex items-center gap-2 border-b border-[#E8F0EC] pb-2">
                  <Play size={14} className="text-[#3B82F6] transform rotate-90" />
                  <span>DSA Drills</span>
                </h3>
              )}
              <div className="flex flex-col gap-4">
                {dsaQuestions.map((q) => {
                  const isPracticed = progress.practicedQuestions.includes(q.id);
                  const isSelected = q.id === selectedQuestionId;

                  return (
                    <div
                      key={q.id}
                      onClick={() => handleSelectQuestion(q)}
                      className={`bg-white rounded-[20px] p-4 border flex flex-col gap-3 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-[#F5C842] bg-[#F5C842]/5 border-l-4 shadow-sm"
                          : "border-transparent shadow-brand hover:-translate-y-1 hover:shadow-brand-hover hover:border-[#A8E6CF]/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 border text-[9px] font-display font-bold rounded-full bg-[#1A2E44]/5 text-[#6B7C8D]">
                          {q.topic}
                        </span>
                        <span
                          className={`px-2 py-0.5 border text-[9px] font-display font-bold rounded-full ${
                            difficultyColors[q.difficulty]
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#1A2E44] line-clamp-2">
                        {q.text}
                      </p>
                      <div className="flex items-center justify-between border-t border-[#E8F0EC]/60 pt-2 text-xs font-semibold">
                        <span className="text-[#6B7C8D] flex items-center gap-1">
                          {isPracticed ? (
                            <>
                              <CheckCircle2 size={12} className="text-[#2EC97E]" />
                              <span className="text-[#2EC97E] text-[10px]">Practiced</span>
                            </>
                          ) : (
                            <span className="text-[10px]">Not Practiced</span>
                          )}
                        </span>
                        <button className="text-[#F5C842] hover:text-[#E6B800] text-[11px] font-display">
                          Practice →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Column 2: System Design */}
          {(!selectedQuestionId || selectedQuestion?.type === "system") && (
            <div className="flex flex-col gap-4">
              {!selectedQuestionId && (
                <h3 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider flex items-center gap-2 border-b border-[#E8F0EC] pb-2">
                  <Award size={14} className="text-[#F5C842]" />
                  <span>System Design</span>
                </h3>
              )}
              <div className="flex flex-col gap-4">
                {systemQuestions.map((q) => {
                  const isPracticed = progress.practicedQuestions.includes(q.id);
                  const isSelected = q.id === selectedQuestionId;

                  return (
                    <div
                      key={q.id}
                      onClick={() => handleSelectQuestion(q)}
                      className={`bg-white rounded-[20px] p-4 border flex flex-col gap-3 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-[#F5C842] bg-[#F5C842]/5 border-l-4 shadow-sm"
                          : "border-transparent shadow-brand hover:-translate-y-1 hover:shadow-brand-hover hover:border-[#A8E6CF]/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 border text-[9px] font-display font-bold rounded-full bg-[#1A2E44]/5 text-[#6B7C8D]">
                          {q.topic}
                        </span>
                        <span
                          className={`px-2 py-0.5 border text-[9px] font-display font-bold rounded-full ${
                            difficultyColors[q.difficulty]
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#1A2E44] line-clamp-2">
                        {q.text}
                      </p>
                      <div className="flex items-center justify-between border-t border-[#E8F0EC]/60 pt-2 text-xs font-semibold">
                        <span className="text-[#6B7C8D] flex items-center gap-1">
                          {isPracticed ? (
                            <>
                              <CheckCircle2 size={12} className="text-[#2EC97E]" />
                              <span className="text-[#2EC97E] text-[10px]">Practiced</span>
                            </>
                          ) : (
                            <span className="text-[10px]">Not Practiced</span>
                          )}
                        </span>
                        <button className="text-[#F5C842] hover:text-[#E6B800] text-[11px] font-display">
                          Practice →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Column 3: AI Engineering */}
          {(!selectedQuestionId || selectedQuestion?.type === "ai") && (
            <div className="flex flex-col gap-4">
              {!selectedQuestionId && (
                <h3 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider flex items-center gap-2 border-b border-[#E8F0EC] pb-2">
                  <BookmarkCheck size={14} className="text-[#8B5CF6]" />
                  <span>AI Questions</span>
                </h3>
              )}
              <div className="flex flex-col gap-4">
                {aiQuestions.map((q) => {
                  const isPracticed = progress.practicedQuestions.includes(q.id);
                  const isSelected = q.id === selectedQuestionId;

                  return (
                    <div
                      key={q.id}
                      onClick={() => handleSelectQuestion(q)}
                      className={`bg-white rounded-[20px] p-4 border flex flex-col gap-3 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-[#F5C842] bg-[#F5C842]/5 border-l-4 shadow-sm"
                          : "border-transparent shadow-brand hover:-translate-y-1 hover:shadow-brand-hover hover:border-[#A8E6CF]/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 border text-[9px] font-display font-bold rounded-full bg-[#1A2E44]/5 text-[#6B7C8D]">
                          {q.topic}
                        </span>
                        <span
                          className={`px-2 py-0.5 border text-[9px] font-display font-bold rounded-full ${
                            difficultyColors[q.difficulty]
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#1A2E44] line-clamp-2">
                        {q.text}
                      </p>
                      <div className="flex items-center justify-between border-t border-[#E8F0EC]/60 pt-2 text-xs font-semibold">
                        <span className="text-[#6B7C8D] flex items-center gap-1">
                          {isPracticed ? (
                            <>
                              <CheckCircle2 size={12} className="text-[#2EC97E]" />
                              <span className="text-[#2EC97E] text-[10px]">Practiced</span>
                            </>
                          ) : (
                            <span className="text-[10px]">Not Practiced</span>
                          )}
                        </span>
                        <button className="text-[#F5C842] hover:text-[#E6B800] text-[11px] font-display">
                          Practice →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* 2. Workspace Panel (Right Slide-Out) */}
      <AnimatePresence>
        {selectedQuestion && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex-1 bg-white h-full overflow-y-auto p-6 md:p-8 flex flex-col gap-6"
          >
            {/* Title Block */}
            <div className="border-b border-[#E8F0EC]/80 pb-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 border text-[9px] font-display font-bold rounded-full bg-[#1A2E44]/5 text-[#6B7C8D] uppercase tracking-wide">
                  {selectedQuestion.type.toUpperCase()} / {selectedQuestion.topic}
                </span>
                <span
                  className={`px-2 py-0.5 border text-[9px] font-display font-bold rounded-full ${
                    difficultyColors[selectedQuestion.difficulty]
                  }`}
                >
                  {selectedQuestion.difficulty}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A2E44] leading-snug">
                {selectedQuestion.text}
              </h2>
            </div>

            {/* Code / Scratchpad Area */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-xs text-[#1A2E44] uppercase tracking-wider">
                  Write Your Approach & Solution
                </h4>
                {isSolutionSaved && (
                  <span className="text-xs text-[#2EC97E] font-semibold animate-pulse">
                    Saved ✓
                  </span>
                )}
              </div>

              <textarea
                value={tempSolution}
                onChange={(e) => setTempSolution(e.target.value)}
                placeholder="Draft your code, key takeaways, architectural blocks, or reasoning outline here..."
                className="w-full flex-grow min-h-[300px] p-5 rounded-[20px] bg-slate-50 border-none focus:outline-none focus:ring-2 focus:ring-[#A8E6CF]/50 text-sm text-[#1A2E44] leading-relaxed resize-none shadow-inner"
              />
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between border-t border-[#E8F0EC]/60 pt-4 mt-auto">
              <button
                onClick={() => handleTogglePracticed(selectedQuestion.id)}
                className={`px-6 py-2.5 font-display font-bold text-xs rounded-full flex items-center gap-1.5 transition-all duration-200 ${
                  progress.practicedQuestions.includes(selectedQuestion.id)
                    ? "bg-[#2EC97E]/10 border border-[#2EC97E]/20 text-[#2EC97E] hover:bg-[#2EC97E]/15"
                    : "bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] shadow-md shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                <CheckCircle2 size={14} />
                <span>
                  {progress.practicedQuestions.includes(selectedQuestion.id)
                    ? "Practiced ✓"
                    : "Mark Practiced"}
                </span>
              </button>

              <button
                onClick={() => handleSaveSolution(selectedQuestion.id)}
                className="px-6 py-2.5 bg-[#1A2E44] hover:bg-[#1A2E44]/90 text-white font-display font-bold text-xs rounded-full flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
              >
                <Save size={14} />
                <span>Save Response</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
