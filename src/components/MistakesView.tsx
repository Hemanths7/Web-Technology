import React, { useState } from 'react';
import { commonMistakesList } from '../data/supplementaryData';
import { AlertTriangle, CheckCircle, XCircle, Search } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

export const MistakesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Extract unique topics
  const topics = ['all', ...Array.from(new Set(commonMistakesList.map((m) => m.topic)))];

  const filteredMistakes = commonMistakesList.filter((m) => {
    const matchesSearch =
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.why.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.wrongCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.correctCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || m.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 text-slate-800">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
            Crucial Debugging Guide
          </span>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
            32 Common Pitfalls
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Most Common Beginner Mistakes in HTML & CSS
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Learn from real student errors! For every mistake, examine the wrong code, the corrected code, and the underlying architectural reason why it failed.
        </p>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search mistakes (e.g., box-sizing, radio, semicolon)..."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-sky-500 font-medium"
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t === 'all' ? 'All Topics' : t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Mistakes */}
      <div className="space-y-4">
        {filteredMistakes.map((m) => (
          <div
            key={m.id}
            className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 space-y-3.5 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200 px-2 py-0.5 rounded">
                  #{m.id}
                </span>
                <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded">
                Topic: {m.topic}
              </span>
            </div>

            {/* Side-by-side comparison code blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
              {/* Wrong Code */}
              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                  <XCircle className="w-4 h-4" />
                  <span>WRONG CODE:</span>
                </div>
                <CodeBlock
                  code={m.wrongCode}
                  language={m.topic.toLowerCase().includes('css') ? 'css' : 'html'}
                />
              </div>

              {/* Correct Code */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle className="w-4 h-4" />
                  <span>CORRECT CODE:</span>
                </div>
                <CodeBlock
                  code={m.correctCode}
                  language={m.topic.toLowerCase().includes('css') ? 'css' : 'html'}
                />
              </div>
            </div>

            {/* Why Explanation */}
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-800 font-bold">Why it happens: </strong>
                <span>{m.why}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
