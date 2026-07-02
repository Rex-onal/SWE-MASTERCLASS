export interface Resource {
  id: string;
  title: string;
  type: "video" | "article";
  duration: string;
  url: string;
  source: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface Module {
  id: string;
  title: string;
  track: "A" | "B" | "C" | "D"; // A=Concept, B=DSA Drill, C=Build, D=AI Direction
  trackName: string;
  realWorldContext: string;
  resources: Resource[];
  questions: Question[];
  companyName: string;
  companyContext: string;
  weekId: number;
}

export interface Week {
  id: number; // e.g. 1 for Week 1
  title: string;
  phase: number;
  modules: Module[];
}

export interface Phase {
  number: number;
  name: string;
  weekRange: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  phase: string;
  status: "Live" | "In Progress" | "Not Started";
  brief: string;
  deliverables: string[];
}

export interface InterviewQuestion {
  id: string;
  text: string;
  difficulty: "Easy" | "Medium" | "Hard";
  type: "dsa" | "system" | "ai";
  topic: string;
}

export interface UserProgress {
  completedModules: string[];
  completedResources: Record<string, string[]>; // moduleId -> resourceId[]
  quizScores: Record<string, number>; // moduleId -> score
  passedQuizzes: string[];
  notes: Record<string, string>; // moduleId -> text
  visitedResources: Record<string, string[]>; // moduleId -> resourceId[]
  currentWeek: number;
  currentModule: string;
  practicedQuestions: string[]; // list of interview question IDs marked practiced
}
