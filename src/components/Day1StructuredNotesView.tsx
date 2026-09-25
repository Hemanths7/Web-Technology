import React, { useState } from 'react';
import { Day1SectionItem } from '../types';
import { CodeBlock } from './CodeBlock';
import {
  BookOpen,
  Search,
  Layers,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  FileText,
  Terminal,
  Sparkles,
  ArrowRight,
  Monitor,
  Network,
} from 'lucide-react';

interface Day1StructuredNotesViewProps {
  sections: Day1SectionItem[];
}

export const Day1StructuredNotesView: React.FC<Day1StructuredNotesViewProps> = ({ sections }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);

  const filteredSections = sections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      (sec.definition && sec.definition.toLowerCase().includes(q)) ||
      (sec.badge && sec.badge.toLowerCase().includes(q)) ||
      (sec.simpleWords && sec.simpleWords.toLowerCase().includes(q))
    );
  });

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
              <Network className="w-5 h-5" />
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Day 1 — Complete Master Notes (All 35 Sections)
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-600">
            Comprehensive 1st-year introductory handbook covering Web architecture, client-server models, and HTML fundamentals.
          </p>
        </div>

        {/* Search input to quickly filter across 35 sections */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 35 sections..."
            className="w-full h-9 pl-9 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Quick Jump Topic Navigation Badges */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span>Quick Jump (Click to scroll or highlight)</span>
          <span>{filteredSections.length} of {sections.length} topics</span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200 no-scrollbar">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#day1-sec-${sec.id}`}
              onClick={() => setSelectedSectionId(sec.id)}
              className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all whitespace-nowrap font-medium ${
                selectedSectionId === sec.id
                  ? 'bg-sky-600 text-white border-sky-600 font-bold shadow-xs'
                  : 'bg-white hover:bg-sky-50 text-slate-700 border-slate-200 hover:border-sky-300'
              }`}
            >
              #{sec.id} {sec.title.replace(/^\d+\.\s*/, '')}
            </a>
          ))}
        </div>
      </div>

      {/* 35 Structured Sections List */}
      <div className="space-y-6 pt-2">
        {filteredSections.map((sec) => (
          <div
            key={sec.id}
            id={`day1-sec-${sec.id}`}
            className={`p-6 rounded-2xl border transition-all space-y-4 scroll-mt-20 ${
              selectedSectionId === sec.id
                ? 'bg-sky-50/40 border-sky-300 ring-2 ring-sky-500/10'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            {/* Section Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 font-black text-xs flex items-center justify-center font-mono">
                  {sec.id}
                </span>
                <h3 className="text-base md:text-lg font-bold text-slate-900">
                  {sec.title}
                </h3>
              </div>
              {sec.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {sec.badge}
                </span>
              )}
            </div>

            {/* Definition & Simple Words */}
            {sec.definition && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  Definition
                </span>
                <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-normal">
                  {sec.definition}
                </p>
                {sec.simpleWords && (
                  <blockquote className="p-3 bg-sky-50/70 border-l-4 border-sky-500 text-xs md:text-sm text-slate-800 rounded-r-lg font-medium italic mt-2">
                    "{sec.simpleWords}"
                  </blockquote>
                )}
              </div>
            )}

            {/* Bullet Points / Examples */}
            {sec.examples && sec.examples.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Examples & Uses:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                  {sec.examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-2 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Real-world Analogy */}
            {sec.analogy && (
              <div className="p-4 bg-amber-50/70 border border-amber-200/90 rounded-xl space-y-1 text-xs md:text-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  Simple Real-Life Analogy
                </span>
                <p className="text-slate-800 whitespace-pre-line leading-relaxed font-serif italic">
                  {sec.analogy}
                </p>
              </div>
            )}

            {/* ASCII Diagram / Architectural Flow */}
            {sec.diagramAscii && (
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                  Visual Architecture / Flow Diagram
                </span>
                <pre className="bg-[#1e1e1e] p-3.5 rounded-xl border border-[#2d2d2d] font-mono text-xs text-sky-300 overflow-x-auto leading-relaxed select-text shadow-inner">
                  {sec.diagramAscii}
                </pre>
              </div>
            )}

            {/* Numbered Steps */}
            {sec.steps && sec.steps.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  Sequential Execution Steps:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {sec.steps.map((st) => (
                    <div
                      key={st.stepNumber}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 text-xs"
                    >
                      <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                        {st.stepNumber}
                      </span>
                      <div className="space-y-0.5">
                        <strong className="text-slate-900 font-semibold">{st.title}: </strong>
                        <span className="text-slate-700 leading-relaxed">{st.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syntax-Highlighted Code Snippets via PrismJS */}
            {sec.codeSnippets && sec.codeSnippets.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  Code Implementation (PrismJS Syntax Highlighting)
                </span>
                {sec.codeSnippets.map((snip, idx) => (
                  <div key={idx} className="space-y-1">
                    <CodeBlock
                      code={snip.code}
                      language={snip.language}
                      showLineNumbers={true}
                    />
                    {snip.caption && (
                      <p className="text-[11px] text-slate-500 italic px-1">
                        {snip.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Structured Table */}
            {sec.table && (
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold">
                      {sec.table.headers.map((h, i) => (
                        <th key={i} className="py-2.5 px-3 uppercase tracking-wider text-[11px]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {sec.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-2.5 px-3 text-slate-700 ${
                              cIdx === 0 ? 'font-bold text-slate-900' : ''
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Common Mistakes */}
            {sec.mistakes && sec.mistakes.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  Common Mistakes to Avoid:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {sec.mistakes.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs"
                    >
                      {m.note && (
                        <p className="font-semibold text-slate-800">{m.note}</p>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
                        <div className="p-2 rounded bg-rose-50 border border-rose-200 text-rose-900 text-xs">
                          <span className="text-[10px] font-bold text-rose-700 block uppercase font-sans">
                            ❌ Wrong:
                          </span>
                          {m.wrong}
                        </div>
                        <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                          <span className="text-[10px] font-bold text-emerald-700 block uppercase font-sans">
                            ✅ Correct:
                          </span>
                          {m.correct}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Viva Q&A List */}
            {sec.qaList && sec.qaList.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                  15 Oral Viva Questions & Crisp Answers:
                </span>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {sec.qaList.map((qa, qIdx) => (
                    <div
                      key={qIdx}
                      className="p-3 bg-amber-50/40 border border-amber-200/80 rounded-xl space-y-1 text-xs"
                    >
                      <p className="font-bold text-slate-900">{qa.q}</p>
                      <p className="text-slate-700 leading-relaxed pl-2 border-l-2 border-amber-400">
                        {qa.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Memory Trick / Takeaway Pill */}
            {sec.memoryTrick && (
              <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 flex items-center gap-2 text-xs font-semibold text-sky-900">
                <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Memory Rule: {sec.memoryTrick}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
