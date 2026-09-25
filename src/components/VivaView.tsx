import React, { useState } from 'react';
import { vivaQuestionsList } from '../data/supplementaryData';
import { Search, Eye, EyeOff } from 'lucide-react';

export const VivaView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');
  const [selectedModule, setSelectedModule] = useState<'all' | 'HTML' | 'CSS'>('all');
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const filteredQuestions = vivaQuestionsList.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDay = selectedDay === 'all' || item.day === selectedDay;
    const matchesModule = selectedModule === 'all' || item.module === selectedModule;
    return matchesSearch && matchesDay && matchesModule;
  });

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleShowAll = () => {
    const nextState = !showAll;
    setShowAll(nextState);
    const map: Record<number, boolean> = {};
    if (nextState) {
      filteredQuestions.forEach((q) => {
        map[q.id] = true;
      });
    }
    setRevealedIds(map);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 text-slate-800">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            Exam & Interview Masterbank
          </span>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
            100 B.Tech Questions
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          100 B.Tech Viva-Voce Questions with One-Line Answers
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Carefully curated, beginner-to-intermediate oral viva questions grouped strictly across all 20 days of the syllabus. Test yourself or reveal answers one by one!
        </p>

        {/* Filter controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
          {/* Search box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions or answers (e.g., doctype, z-index)..."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          {/* Module filter */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => setSelectedModule('all')}
              className={`px-3 py-1 rounded font-semibold transition-all ${
                selectedModule === 'all' ? 'bg-white text-sky-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedModule('HTML')}
              className={`px-3 py-1 rounded font-semibold transition-all ${
                selectedModule === 'HTML' ? 'bg-white text-rose-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setSelectedModule('CSS')}
              className={`px-3 py-1 rounded font-semibold transition-all ${
                selectedModule === 'CSS' ? 'bg-white text-indigo-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              CSS
            </button>
          </div>

          {/* Day selector dropdown */}
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="bg-slate-50 border border-slate-300 text-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">All 20 Days</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                Day {d} ({d <= 10 ? 'HTML' : 'CSS'})
              </option>
            ))}
          </select>

          {/* Reveal All Toggle */}
          <button
            onClick={handleToggleShowAll}
            className="text-xs px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 flex items-center gap-1.5 transition-colors font-semibold"
          >
            {showAll ? <EyeOff className="w-3.5 h-3.5 text-rose-600" /> : <Eye className="w-3.5 h-3.5 text-emerald-600" />}
            <span>{showAll ? 'Hide All Answers' : 'Reveal All Answers'}</span>
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing {filteredQuestions.length} of 100 questions</span>
        <span>Click on any card or button to reveal/hide the verified answer.</span>
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQuestions.map((q) => {
          const isRevealed = showAll || revealedIds[q.id] || false;

          return (
            <div
              key={q.id}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 space-y-3 transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 rounded">
                      Q{q.id}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        q.module === 'HTML' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      }`}
                    >
                      Day {q.day} ({q.module})
                    </span>
                  </div>

                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="text-xs text-sky-700 hover:text-sky-900 flex items-center gap-1 font-semibold"
                  >
                    {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{isRevealed ? 'Hide' : 'Answer'}</span>
                  </button>
                </div>

                <h4 className="text-sm font-bold text-slate-900 leading-snug">{q.question}</h4>
              </div>

              {/* Revealable Answer */}
              {isRevealed ? (
                <div className="pt-2 border-t border-slate-100 space-y-1.5 bg-emerald-50/50 -mx-5 -mb-5 p-4 rounded-b-xl border-emerald-100">
                  <p className="text-xs text-emerald-950 font-bold leading-relaxed">
                    <strong className="text-emerald-800 uppercase text-[10px] tracking-wide block">Answer:</strong>
                    {q.answer}
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed italic">
                    <strong className="not-italic text-slate-800 font-semibold">One-line explanation: </strong>
                    {q.explanation}
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => toggleReveal(q.id)}
                  className="cursor-pointer py-2 text-center text-xs text-slate-500 hover:text-slate-800 border border-dashed border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Click to reveal answer & explanation
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
