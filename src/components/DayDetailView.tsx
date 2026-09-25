import React, { useState } from 'react';
import { DayLesson } from '../types';
import { CodePlayground } from './CodePlayground';
import { QuizComponent } from './QuizComponent';
import { Day1StructuredNotesView } from './Day1StructuredNotesView';
import { CodeBlock } from './CodeBlock';
import {
  BookOpen,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Eye,
  ChevronLeft,
  ChevronRight,
  Code,
  Terminal,
  Zap,
  Play
} from 'lucide-react';

interface DayDetailViewProps {
  day: DayLesson;
  onNavigateDay: (dayNumber: number) => void;
  onOpenSandboxWithCode?: (html: string, css?: string) => void;
}

export const DayDetailView: React.FC<DayDetailViewProps> = ({
  day,
  onNavigateDay,
  onOpenSandboxWithCode,
}) => {
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});

  const toggleSolution = (index: number) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 text-slate-800">
      {/* Top Breadcrumb & Day Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                day.module === 'HTML'
                  ? 'bg-rose-100 text-rose-800 border border-rose-200'
                  : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
              }`}
            >
              Module {day.module === 'HTML' ? 'I: HTML (The Skeleton)' : 'II: CSS (The Styling)'}
            </span>
            <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
              Day {day.day} of 20
            </span>
          </div>

          {/* Quick prev/next day navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateDay(day.day - 1)}
              disabled={day.day === 1}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-700 flex items-center gap-1 transition-colors border border-slate-200"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Prev Day
            </button>
            <button
              onClick={() => onNavigateDay(day.day + 1)}
              disabled={day.day === 20}
              className="px-3 py-1.5 rounded-lg bg-[#131618] hover:bg-[#22272b] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white flex items-center gap-1 transition-colors border border-[#131618]"
            >
              Next Day
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Day {day.day}: {day.title}
        </h1>
        <p className="text-sm md:text-base text-sky-800 font-medium mt-1">
          {day.subtitle}
        </p>

        {/* Key takeaway pill */}
        <div className="mt-4 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/90 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span className="text-xs md:text-sm text-slate-800 leading-relaxed">
            <strong className="text-amber-800 font-bold">Core Takeaway:</strong> {day.keyIdea}
          </span>
        </div>
      </div>

      {/* 1. Definition & 2. Why We Use It */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <h3>Defination</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            {day.definition}
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <h3>2. Why Do We Use It?</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            {day.whyUseIt}
          </p>
        </div>
      </section>

      {/* 3. Real-Life Analogy (MRDU College Context) */}
      <section className="bg-gradient-to-r from-amber-50 via-white to-orange-50/50 border border-amber-200/90 p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          <h3>3. Real-Life College Analogy</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-800 leading-relaxed italic font-serif">
          "{day.analogy}"
        </p>
      </section>

      {/* 4. Syntax & Separate Explanation of Every Component */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
          <Code className="w-4 h-4 text-sky-600" />
          <h3>4. Syntax Breakdown & Component Anatomy</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold uppercase tracking-wider">
                <th className="py-2.5 px-3">Syntax Part</th>
                <th className="py-2.5 px-3">Detailed Purpose / Role</th>
                <th className="py-2.5 px-3">Code Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {day.syntaxBreakdown.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-bold text-sky-700 whitespace-nowrap">
                    {item.part}
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 leading-relaxed">{item.description}</td>
                  <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 border border-slate-100 rounded">
                    {item.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Valid Values / Types */}
      {day.validValuesOrTypes && day.validValuesOrTypes.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-indigo-800 font-bold text-sm">
            <Terminal className="w-4 h-4 text-indigo-600" />
            <h3>5. Important & Common Values / Modes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {day.validValuesOrTypes.map((val, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50/90 border border-slate-200 rounded-lg space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-sky-700">{val.name}</span>
                  <span className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {val.meaning}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-800 bg-white px-2 py-1 rounded border border-slate-200">
                  {val.example}
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">{val.expectedBehavior}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Comprehensive Day 1 Master Notes (All 35 Structured Sections) */}
      {day.structuredDay1Notes && day.structuredDay1Notes.length > 0 && (
        <Day1StructuredNotesView sections={day.structuredDay1Notes} />
      )}

      {/* 6. Complete Interactive Code Example & Beside Output Preview */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-600" />
              6. Interactive Code Snippet & Beside Output Preview
            </h3>
            <p className="text-xs text-slate-600">
              Edit the code directly on the left to see the rendered output live on the right.
            </p>
          </div>
          {onOpenSandboxWithCode && (
            <button
              onClick={() => onOpenSandboxWithCode(day.defaultCode.html, day.defaultCode.css)}
              className="text-xs bg-sky-50 hover:bg-sky-100 border border-sky-300 text-sky-800 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current text-sky-600" />
              Open in Fullscreen Sandbox
            </button>
          )}
        </div>

        <CodePlayground
          initialHtml={day.defaultCode.html}
          initialCss={day.defaultCode.css}
          title={`Day ${day.day}: ${day.title} Code Lab`}
        />
      </section>

      {/* 7. Expected Output (ASCII Visual Diagram) */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
          <Eye className="w-4 h-4 text-emerald-600" />
          <h3>7. Expected Output Diagram (Visual Representation)</h3>
        </div>
        <p className="text-xs text-slate-600">
          This is exactly how the browser window renders the HTML and CSS elements:
        </p>
        <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
          {day.expectedOutputAscii}
        </pre>
      </section>

      {/* 8. Line-by-Line Code Explanation */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
          <CheckCircle className="w-4 h-4 text-sky-600" />
          <h3>8. Line-by-Line Code Explanation</h3>
        </div>
        <div className="space-y-2">
          {day.lineByLineExplanation.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs"
            >
              <code className="text-sky-800 font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                {item.line}
              </code>
              <span className="text-slate-700 leading-relaxed">{item.explanation}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Common Beginner Mistakes (Wrong vs Correct + Why) */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <h3>9. Common Beginner Mistakes & How to Avoid Them</h3>
        </div>
        <div className="space-y-3">
          {day.commonMistakes.map((m, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded bg-rose-50 border border-rose-200 text-rose-950">
                  <span className="text-[10px] uppercase font-bold text-rose-700 block mb-1">
                    ❌ Wrong Code:
                  </span>
                  {m.wrong}
                </div>
                <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-950">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block mb-1">
                    ✅ Correct Code:
                  </span>
                  {m.correct}
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed pt-1">
                <strong className="text-amber-800">Why it is wrong:</strong> {m.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Important Differences & Comparison */}
      {day.importantDifference && (
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-purple-800 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <h3>10. Important Differences: {day.importantDifference.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-purple-50/60 border border-purple-200 rounded-lg">
              <span className="font-bold text-purple-900 block mb-1">Concept A</span>
              <p className="text-slate-700 leading-relaxed">{day.importantDifference.conceptA}</p>
            </div>
            <div className="p-3.5 bg-sky-50/60 border border-sky-200 rounded-lg">
              <span className="font-bold text-sky-900 block mb-1">Concept B</span>
              <p className="text-slate-700 leading-relaxed">{day.importantDifference.conceptB}</p>
            </div>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
            <strong className="text-purple-900">Key Summary:</strong> {day.importantDifference.comparison}
          </div>
        </section>
      )}

      {/* 11. Memory Trick */}
      <section className="bg-gradient-to-r from-sky-50 via-white to-indigo-50 border border-sky-200 p-5 rounded-xl shadow-sm flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-sky-600 shrink-0" />
        <div className="space-y-0.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
            11. Exam & Viva Memory Trick
          </span>
          <p className="text-sm font-bold text-slate-900">{day.memoryTrick}</p>
        </div>
      </section>

      {/* 12. Mini Practice Problems (Easy, Medium, Challenge) */}
      <section className="space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-600" />
            12. Mini Practice Exercises (Hands-On Problems)
          </h3>
          <p className="text-xs text-slate-600">
            Attempt these challenges independently before checking the verified solution!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {day.practiceExercises.map((exercise, idx) => {
            const isRevealed = revealedSolutions[idx] || false;
            const diffColor =
              exercise.difficulty === 'Easy'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                : exercise.difficulty === 'Medium'
                ? 'bg-amber-100 text-amber-800 border-amber-200'
                : 'bg-rose-100 text-rose-800 border-rose-200';

            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${diffColor}`}>
                      {exercise.difficulty} Practice
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{exercise.title}</h4>
                  </div>

                  <button
                    onClick={() => toggleSolution(idx)}
                    className="text-xs px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-sky-800 border border-slate-200 font-semibold transition-colors"
                  >
                    {isRevealed ? 'Hide Solution' : 'Show Solution'}
                  </button>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {exercise.task}
                </p>
                <p className="text-[11px] text-slate-600">
                  <strong className="text-slate-800">Hint:</strong> {exercise.hint}
                </p>

                {isRevealed && (
                  <div className="pt-3 border-t border-slate-200 space-y-2.5">
                    <CodeBlock
                      code={
                        exercise.solutionCss
                          ? `${exercise.solutionHtml}\n\n/* Embedded CSS */\n<style>\n${exercise.solutionCss}\n</style>`
                          : exercise.solutionHtml
                      }
                      language="html"
                      showLineNumbers={true}
                    />
                    <p className="text-[11px] text-slate-600">{exercise.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 13. Interactive Checkpoint Quiz */}
      <section className="space-y-3">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          13. Interactive Concept Checkpoint (Test Your Knowledge)
        </h3>
        <QuizComponent questions={day.quizQuestions} topicTitle={`Day ${day.day}: ${day.title}`} />
      </section>

      {/* Bottom Navigation for Next Lesson */}
      <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
        {day.day > 1 ? (
          <button
            onClick={() => onNavigateDay(day.day - 1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-sm font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous: Day {day.day - 1}
          </button>
        ) : (
          <div></div>
        )}

        {day.day < 20 && (
          <button
            onClick={() => onNavigateDay(day.day + 1)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold shadow-sm transition-colors"
          >
            Next Lesson: Day {day.day + 1}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
