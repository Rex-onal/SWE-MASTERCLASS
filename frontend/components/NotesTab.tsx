"use strict";
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Save } from "lucide-react";
import { getProgress, saveModuleNote } from "@/lib/progress";

interface NotesTabProps {
  moduleId: string;
}

export default function NotesTab({ moduleId }: NotesTabProps) {
  const [text, setText] = useState("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const lastSavedText = useRef("");

  // Load existing note on mount / module change
  useEffect(() => {
    const prog = getProgress();
    const existingNote = prog.notes[moduleId] || "";
    setText(existingNote);
    lastSavedText.current = existingNote;
    setSaveStatus("idle");
  }, [moduleId]);

  // Save helper
  const handleSave = (currentText: string) => {
    if (currentText === lastSavedText.current) return;
    setSaveStatus("saving");
    saveModuleNote(moduleId, currentText);
    lastSavedText.current = currentText;
    setSaveStatus("saved");

    // Fade out indicator after 2 seconds
    setTimeout(() => {
      setSaveStatus((prev) => (prev === "saved" ? "idle" : prev));
    }, 2000);
  };

  // 30 Seconds Auto-Save Interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleSave(text);
    }, 30000);

    return () => clearInterval(interval);
  }, [text, moduleId]);

  // Keyboard Shortcuts (Ctrl+S or Cmd+S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSave(text);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [text, moduleId]);

  return (
    <div className="flex flex-col gap-3 font-sans h-full min-h-[300px]">
      <div className="flex items-center justify-between">
        <h4 className="font-display font-bold text-sm text-[#1A2E44] uppercase tracking-wider">
          Personal Module Notebook
        </h4>

        {/* Saved Indicator */}
        <div className="flex items-center gap-1.5 h-6">
          {saveStatus === "saving" && (
            <span className="text-xs text-[#6B7C8D] animate-pulse">Saving...</span>
          )}
          {saveStatus === "saved" && (
            <span className="text-xs text-[#2EC97E] font-semibold flex items-center gap-1 animate-fade-in">
              Saved ✓
            </span>
          )}
          {saveStatus === "idle" && lastSavedText.current && (
            <span className="text-[10px] text-[#6B7C8D] opacity-60">Auto-saves every 30s</span>
          )}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => handleSave(text)}
          placeholder="Write your notes, code snippets, summaries, or questions here..."
          className="w-full flex-1 min-h-[250px] p-5 rounded-[20px] bg-slate-50 border-none focus:outline-none focus:ring-2 focus:ring-[#A8E6CF]/50 text-sm text-[#1A2E44] leading-relaxed resize-none shadow-inner"
        />

        {/* Manual Save Button floating bottom-right */}
        <button
          onClick={() => handleSave(text)}
          className="absolute bottom-4 right-4 p-2.5 bg-[#1A2E44] hover:bg-[#1A2E44]/90 text-white rounded-full shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
          title="Save Notes (Ctrl+S)"
        >
          <Save size={16} />
        </button>
      </div>
    </div>
  );
}
