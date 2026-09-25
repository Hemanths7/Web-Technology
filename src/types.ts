export type ModuleType = 'HTML' | 'CSS';

export interface QuizQuestion {
  id: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface PracticeExercise {
  difficulty: 'Easy' | 'Medium' | 'Challenge';
  title: string;
  task: string;
  hint: string;
  solutionHtml: string;
  solutionCss?: string;
  explanation: string;
}

export interface CommonMistakeItem {
  id: number;
  title: string;
  wrongCode: string;
  correctCode: string;
  why: string;
  topic: string;
}

export interface Day1SectionItem {
  id: number;
  title: string;
  badge?: string;
  definition?: string;
  simpleWords?: string;
  analogy?: string;
  examples?: string[];
  diagramAscii?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  steps?: { stepNumber: number; title: string; desc: string }[];
  codeSnippets?: {
    code: string;
    language: 'html' | 'css' | 'text';
    caption?: string;
  }[];
  notes?: string[];
  memoryTrick?: string;
  mistakes?: { wrong: string; correct: string; note?: string }[];
  qaList?: { q: string; a: string }[];
}

export interface DayLesson {
  day: number;
  module: ModuleType;
  title: string;
  subtitle: string;
  keyIdea: string;
  analogy: string;
  definition: string;
  whyUseIt: string;
  structuredDay1Notes?: Day1SectionItem[];
  syntaxBreakdown: {
    part: string;
    description: string;
    example: string;
  }[];
  validValuesOrTypes: {
    name: string;
    meaning: string;
    syntax: string;
    example: string;
    expectedBehavior: string;
  }[];
  defaultCode: {
    html: string;
    css?: string;
  };
  expectedOutputAscii: string;
  lineByLineExplanation: {
    line: string;
    explanation: string;
  }[];
  commonMistakes: {
    wrong: string;
    correct: string;
    why: string;
  }[];
  importantDifference: {
    title: string;
    conceptA: string;
    conceptB: string;
    comparison: string;
  };
  memoryTrick: string;
  practiceExercises: PracticeExercise[];
  quizQuestions: QuizQuestion[];
}

export interface VivaQuestionItem {
  id: number;
  day: number;
  module: ModuleType;
  question: string;
  answer: string;
  explanation: string;
}

export interface ComparisonTableItem {
  id: string;
  title: string;
  itemA: string;
  itemB: string;
  rows: {
    feature: string;
    valA: string;
    valB: string;
  }[];
}
