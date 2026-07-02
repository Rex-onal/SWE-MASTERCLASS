"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, BookOpen, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { Module } from "@/lib/types";
import { getProgress, isModuleUnlocked, getAllModulesOrdered } from "@/lib/progress";

interface QuizTabProps {
  module: Module;
  isUnlocked: boolean; // unlocked if all learn resources checked off
  onPass: (score: number) => void;
  onReviewResources: () => void;
  isQuizActive: boolean;
  setIsQuizActive: (active: boolean) => void;
}

export default function QuizTab({
  module,
  isUnlocked,
  onPass,
  onReviewResources,
  isQuizActive,
  setIsQuizActive
}: QuizTabProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [passed, setPassed] = useState(false);
  const [scorePercent, setScorePercent] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Check if already passed in the past
  const [alreadyPassed, setAlreadyPassed] = useState(false);
  const [pastScore, setPastScore] = useState<number | null>(null);

  useEffect(() => {
    const prog = getProgress();
    if (prog.passedQuizzes.includes(module.id)) {
      setAlreadyPassed(true);
      setPastScore(prog.quizScores[module.id] || null);
    } else {
      setAlreadyPassed(false);
      setPastScore(null);
    }
  }, [module.id, quizFinished]);

  if (!isUnlocked) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-[20px] h-64 text-center select-none font-sans relative">
        <div className="w-12 h-12 rounded-full bg-[#D0D8E4] flex items-center justify-center text-[#6B7C8D] mb-4">
          <Lock size={20} />
        </div>
        <h4 className="font-display font-bold text-sm text-[#1A2E44]">Quiz Locked</h4>
        <p className="text-xs text-[#6B7C8D] mt-2 max-w-xs">
          Check off all resources in the **Learn** tab first before attempting this module&apos;s validation quiz.
        </p>
      </div>
    );
  }

  // Already passed view
  if (alreadyPassed && !isQuizActive && !quizFinished) {
    return (
      <div className="bg-[#2EC97E]/5 p-6 rounded-[20px] flex flex-col items-center justify-center text-center font-sans">
        <div className="w-12 h-12 rounded-full bg-[#2EC97E]/10 flex items-center justify-center text-[#2EC97E] mb-4 animate-bounce">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="font-display font-bold text-lg text-[#1A2E44]">
          Quiz Already Passed ✓
        </h3>
        <p className="text-sm text-[#6B7C8D] mt-2">
          You scored {pastScore !== null ? `${pastScore}%` : "100%"} on this module&apos;s verification.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => {
              setSelectedAnswers({});
              setCurrentQuestionIndex(0);
              setQuizFinished(false);
              setIsQuizActive(true);
            }}
            className="px-6 py-2.5 bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] font-display font-bold text-sm rounded-full flex items-center gap-2 shadow-md shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <RotateCcw size={16} />
            <span>Retake Quiz</span>
          </button>
          <button
            onClick={onReviewResources}
            className="px-6 py-2.5 border border-[#6B7C8D]/30 text-[#6B7C8D] font-display font-bold text-sm rounded-full hover:bg-slate-100 transition-colors"
          >
            Review Syllabus
          </button>
        </div>
      </div>
    );
  }

  // Start Screen
  if (!isQuizActive && !quizFinished) {
    return (
      <div className="bg-white p-6 rounded-[20px] shadow-brand flex flex-col items-center justify-center text-center font-sans border border-[#E8F0EC]">
        <div className="w-12 h-12 rounded-full bg-[#F5C842]/10 flex items-center justify-center text-[#F5C842] mb-4">
          <Sparkles size={24} />
        </div>
        <h3 className="font-display font-bold text-lg text-[#1A2E44]">
          Ready for Module Validation?
        </h3>
        <p className="text-sm text-[#6B7C8D] mt-2 max-w-sm">
          You must answer at least 4 out of 5 questions correctly (80%+) to unlock the next module&apos;s path.
        </p>
        <button
          onClick={() => setIsQuizActive(true)}
          className="mt-6 px-8 py-3 bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] font-display font-bold text-sm rounded-full flex items-center gap-2 shadow-md shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>Start Quiz</span>
          <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const questions = module.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOptionIndex = selectedAnswers[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optIdx
    }));
  };

  const handleNext = () => {
    if (selectedOptionIndex === undefined) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate score
      let correct = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctIndex) {
          correct++;
        }
      });
      const percent = Math.round((correct / questions.length) * 100);
      const isPass = percent >= 70; // 70% pass threshold

      setCorrectAnswersCount(correct);
      setScorePercent(percent);
      setPassed(isPass);
      setQuizFinished(true);
      setIsQuizActive(false);

      if (isPass) {
        // Trigger Confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
        onPass(percent);
      }
    }
  };

  // Pass Screen
  if (quizFinished && passed) {
    // Find next module name
    const ordered = getAllModulesOrdered();
    const currentIdx = ordered.findIndex((m) => m.id === module.id);
    const nextMod = currentIdx < ordered.length - 1 ? ordered[currentIdx + 1] : null;

    return (
      <div className="bg-[#2EC97E]/5 p-6 rounded-[20px] flex flex-col items-center justify-center text-center font-sans border border-[#2EC97E]/20">
        <div className="w-14 h-14 rounded-full bg-[#2EC97E]/10 flex items-center justify-center text-[#2EC97E] mb-4 animate-bounce">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-[#2EC97E]">
          Quiz Passed ✓
        </h3>
        <span className="text-sm font-sans text-[#1A2E44] font-semibold mt-2">
          Score: {correctAnswersCount} of {questions.length} ({scorePercent}%)
        </span>

        {nextMod ? (
          <p className="text-xs text-[#6B7C8D] mt-3">
            Next module unlocked: <strong className="text-[#1A2E44]">{nextMod.title}</strong>
          </p>
        ) : (
          <p className="text-xs text-[#6B7C8D] mt-3">
            Congratulations! You have completed the final module of the SWE-MASTERCLASS!
          </p>
        )}

        <div className="flex gap-4 mt-6">
          {nextMod ? (
            <Link
              href={`/module/${nextMod.id}`}
              onClick={() => {
                // Reset quiz component state for next module
                setQuizFinished(false);
                setCurrentQuestionIndex(0);
                setSelectedAnswers({});
              }}
              className="px-6 py-2.5 bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] font-display font-bold text-sm rounded-full flex items-center gap-1.5 shadow-md shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Continue</span>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <Link
              href="/"
              className="px-6 py-2.5 bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] font-display font-bold text-sm rounded-full shadow-md shadow-[#F5C842]/20 hover:scale-[1.02]"
            >
              Back to Dashboard
            </Link>
          )}
          <button
            onClick={() => setQuizFinished(false)}
            className="px-6 py-2.5 border border-[#6B7C8D]/30 text-[#6B7C8D] font-display font-bold text-sm rounded-full hover:bg-slate-100 transition-colors"
          >
            Review Answers
          </button>
        </div>
      </div>
    );
  }

  // Fail Screen
  if (quizFinished && !passed) {
    return (
      <div className="bg-[#FF7F7F]/5 p-6 rounded-[20px] flex flex-col items-center justify-center text-center font-sans border border-[#FF7F7F]/20">
        <div className="w-14 h-14 rounded-full bg-[#FF7F7F]/10 flex items-center justify-center text-[#FF7F7F] mb-4">
          <AlertTriangle size={28} />
        </div>
        <h3 className="font-display font-bold text-xl text-[#FF7F7F]">
          Not quite — give it another shot
        </h3>
        <p className="text-sm text-[#6B7C8D] mt-2">
          You scored {correctAnswersCount} out of {questions.length} ({scorePercent}%). You need 80%+ to pass.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => {
              setSelectedAnswers({});
              setCurrentQuestionIndex(0);
              setQuizFinished(false);
              setIsQuizActive(true);
            }}
            className="px-6 py-2.5 bg-[#F5C842] hover:bg-[#E6B800] text-[#1A2E44] font-display font-bold text-sm rounded-full flex items-center gap-1.5 shadow-md shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <RotateCcw size={16} />
            <span>Retry Quiz</span>
          </button>
          <button
            onClick={() => {
              setQuizFinished(false);
              onReviewResources();
            }}
            className="px-6 py-2.5 border border-[#6B7C8D]/30 text-[#6B7C8D] font-display font-bold text-sm rounded-full flex items-center gap-1.5 hover:bg-slate-100 transition-colors"
          >
            <BookOpen size={16} />
            <span>Review Resources</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-[20px] shadow-brand border border-[#E8F0EC]/80 flex flex-col gap-6 font-sans">
      {/* Quiz Header Progress */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs text-[#6B7C8D] font-bold uppercase tracking-wider">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{progressPercent}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-[#E8F0EC] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F5C842] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="py-4">
        <h3 className="text-lg md:text-xl font-display font-semibold text-[#1A2E44] leading-snug text-center">
          {currentQuestion.text}
        </h3>
      </div>

      {/* Answer Options */}
      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((opt, oIdx) => {
          const isSelected = selectedOptionIndex === oIdx;

          return (
            <div
              key={oIdx}
              onClick={() => handleSelectOption(oIdx)}
              className={`p-4 rounded-xl border-2 cursor-pointer flex items-center gap-3 transition-all duration-100 bg-white ${
                isSelected
                  ? "border-[#F5C842] bg-[#F5C842]/5 shadow-sm"
                  : "border-[#E8F0EC] hover:border-slate-300"
              }`}
            >
              {/* Radio Indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  isSelected ? "border-[#F5C842] bg-[#F5C842]" : "border-[#D0D8E4]"
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              <span className="text-sm font-medium text-[#1A2E44]">{opt}</span>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleNext}
          disabled={selectedOptionIndex === undefined}
          className={`px-8 py-3 font-display font-bold text-sm rounded-full flex items-center gap-2 shadow-md transition-all duration-200 ${
            selectedOptionIndex !== undefined
              ? "bg-[#F5C842] text-[#1A2E44] hover:bg-[#E6B800] shadow-[#F5C842]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              : "bg-[#D0D8E4] text-[#6B7C8D] cursor-not-allowed shadow-none"
          }`}
        >
          <span>
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Submit Quiz"}
          </span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
