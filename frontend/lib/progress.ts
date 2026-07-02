import { UserProgress } from "./types";
import { WEEKS } from "./curriculum";

const PROGRESS_KEY = "swe_masterclass_progress";

const DEFAULT_PROGRESS: UserProgress = {
  completedModules: [],
  completedResources: {},
  quizScores: {},
  passedQuizzes: [],
  notes: {},
  visitedResources: {},
  currentWeek: 1,
  currentModule: "w1-m1",
  practicedQuestions: []
};

// Returns a flat list of all modules in order across all weeks
export const getAllModulesOrdered = () => {
  return WEEKS.flatMap((w) => w.modules);
};

export const getProgress = (): UserProgress => {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(DEFAULT_PROGRESS));
      return DEFAULT_PROGRESS;
    }
    const parsed = JSON.parse(raw);
    // Ensure nested objects are initialized
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedModules: parsed.completedModules || [],
      completedResources: parsed.completedResources || {},
      quizScores: parsed.quizScores || {},
      passedQuizzes: parsed.passedQuizzes || [],
      notes: parsed.notes || {},
      visitedResources: parsed.visitedResources || {},
      practicedQuestions: parsed.practicedQuestions || []
    };
  } catch (e) {
    return DEFAULT_PROGRESS;
  }
};

export const saveProgress = (progress: Partial<UserProgress>): UserProgress => {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  const current = getProgress();
  const updated = { ...current, ...progress };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
  // Dispatch custom event to notify other components of state changes
  window.dispatchEvent(new Event("swe_progress_updated"));
  return updated;
};

// Check if a module is unlocked
export const isModuleUnlocked = (moduleId: string): boolean => {
  const ordered = getAllModulesOrdered();
  const idx = ordered.findIndex((m) => m.id === moduleId);
  if (idx <= 0) return true; // First module is always unlocked

  const prevModule = ordered[idx - 1];
  const progress = getProgress();
  return progress.passedQuizzes.includes(prevModule.id);
};

// Check if a week is unlocked (a week is unlocked if its first module is unlocked)
export const isWeekUnlocked = (weekId: number): boolean => {
  const week = WEEKS.find((w) => w.id === weekId);
  if (!week || week.modules.length === 0) return false;
  return isModuleUnlocked(week.modules[0].id);
};

// Gets the completion percentage of a module
export const getModuleProgressPercent = (moduleId: string): number => {
  const mod = WEEKS.flatMap((w) => w.modules).find((m) => m.id === moduleId);
  if (!mod) return 0;
  const progress = getProgress();
  const completedRes = progress.completedResources[moduleId] || [];
  if (mod.resources.length === 0) return 100;
  return Math.min(
    100,
    Math.round((completedRes.length / mod.resources.length) * 100)
  );
};

// Check off / uncheck off a resource
export const toggleResourceCompleted = (moduleId: string, resourceId: string): UserProgress => {
  const progress = getProgress();
  const currentCompleted = progress.completedResources[moduleId] || [];
  let updatedCompleted: string[];

  if (currentCompleted.includes(resourceId)) {
    updatedCompleted = currentCompleted.filter((id) => id !== resourceId);
  } else {
    updatedCompleted = [...currentCompleted, resourceId];
  }

  // Auto-mark visited
  const currentVisited = progress.visitedResources[moduleId] || [];
  const updatedVisited = currentVisited.includes(resourceId)
    ? currentVisited
    : [...currentVisited, resourceId];

  return saveProgress({
    completedResources: {
      ...progress.completedResources,
      [moduleId]: updatedCompleted
    },
    visitedResources: {
      ...progress.visitedResources,
      [moduleId]: updatedVisited
    }
  });
};

// Check if all resources in Learn tab are completed for a module
export const areAllResourcesCompleted = (moduleId: string): boolean => {
  const mod = WEEKS.flatMap((w) => w.modules).find((m) => m.id === moduleId);
  if (!mod) return false;
  const progress = getProgress();
  const completed = progress.completedResources[moduleId] || [];
  return mod.resources.every((r) => completed.includes(r.id));
};

// Mark a resource as visited (for Green Dot visited status)
export const markResourceVisited = (moduleId: string, resourceId: string): UserProgress => {
  const progress = getProgress();
  const currentVisited = progress.visitedResources[moduleId] || [];
  if (currentVisited.includes(resourceId)) return progress;

  return saveProgress({
    visitedResources: {
      ...progress.visitedResources,
      [moduleId]: [...currentVisited, resourceId]
    }
  });
};

// Save a note for a module
export const saveModuleNote = (moduleId: string, noteText: string): UserProgress => {
  const progress = getProgress();
  return saveProgress({
    notes: {
      ...progress.notes,
      [moduleId]: noteText
    }
  });
};

// Pass a quiz
export const passQuizForModule = (moduleId: string, score: number): UserProgress => {
  const progress = getProgress();
  const passed = progress.passedQuizzes.includes(moduleId)
    ? progress.passedQuizzes
    : [...progress.passedQuizzes, moduleId];

  const completed = progress.completedModules.includes(moduleId)
    ? progress.completedModules
    : [...progress.completedModules, moduleId];

  return saveProgress({
    passedQuizzes: passed,
    completedModules: completed,
    quizScores: {
      ...progress.quizScores,
      [moduleId]: Math.max(score, progress.quizScores[moduleId] || 0)
    }
  });
};
