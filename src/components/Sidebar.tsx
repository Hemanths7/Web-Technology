import React, { useState } from 'react';
import { allDaysData } from '../data/daysData';
import { BookOpen, Search, X, PanelLeftClose, ChevronLeft, Sparkles, CheckCircle2 } from 'lucide-react';

interface SidebarProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentDay,
  onSelectDay,
  isOpen,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const term = searchTerm.toLowerCase().trim();
  const filteredDays = allDaysData.filter((d) => {
    if (!term) return true;
    return (
      d.title.toLowerCase().includes(term) ||
      d.subtitle.toLowerCase().includes(term) ||
      `day ${d.day}`.includes(term) ||
      `d${d.day}`.includes(term) ||
      d.keyIdea.toLowerCase().includes(term) ||
      d.definition.toLowerCase().includes(term) ||
      d.whyUseIt.toLowerCase().includes(term)
    );
  });

  const module1 = filteredDays.filter((d) => d.module === 'HTML');
  const module2 = filteredDays.filter((d) => d.module === 'CSS');

  return (
    <>
      {/* Subtle Mobile Backdrop Overlay - NO dark blur, transparent dismissal on phones only */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-20 bg-slate-900/10 sm:hidden transition-opacity"
        />
      )}

      {/* Sliding Sidebar Container */}
      <aside
        className={`fixed sm:sticky top-[58px] bottom-0 sm:bottom-auto sm:h-[calc(100vh-58px)] left-0 z-30 bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out shadow-lg sm:shadow-none ${
          isOpen
            ? 'w-72 sm:w-80 translate-x-0 opacity-100 pointer-events-auto'
            : '-translate-x-full sm:translate-x-0 sm:w-0 sm:border-r-0 sm:opacity-0 sm:pointer-events-none'
        } overflow-hidden shrink-0`}
      >
        {/* Inner fixed-width wrapper to prevent text squeezing during width animation */}
        <div className="w-72 sm:w-80 flex flex-col h-full shrink-0">
          {/* Sidebar Top Header */}
          <div className="p-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span className="font-bold text-sm text-slate-800">HTML & CSS</span>
            </div>

            {/* Collapse button that works on BOTH desktop and mobile */}
            <button
              onClick={onClose}
              className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm bg-white cursor-pointer"
              title="Slide to close HTML & CSS (Full screen reading mode)"
            >
              <PanelLeftClose className="w-3.5 h-3.5 text-slate-600" />
              <span>Slide Close</span>
            </button>
          </div>

          {/* Search Input Bar with Title/Keyword Filtering and Clear Button */}
          <div className="p-3 border-b border-slate-200 bg-white space-y-1.5">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search topics by keyword (flexbox, table, meta)..."
                className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {searchTerm.trim() && (
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span>{filteredDays.length} of {allDaysData.length} topics found</span>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-sky-600 hover:underline font-semibold"
                >
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* Scrollable Syllabus List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs bg-white">
            {/* Empty search results state */}
            {filteredDays.length === 0 && (
              <div className="text-center py-8 px-3">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-700">No matching topics found</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Try searching for terms like "flexbox", "tables", "meta", or "forms".
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}

            {/* Module I Section */}
            {module1.length > 0 && (
              <div className="space-y-1">
                <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-700 flex items-center justify-between">
                  <span>Module I: HTML</span>
                  <span className="text-[10px] bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded text-rose-700 font-semibold">
                    Structure
                  </span>
                </div>

                {module1.map((d) => {
                  const isActive = d.day === currentDay;
                  return (
                    <button
                      key={d.day}
                      onClick={() => {
                        onSelectDay(d.day);
                        // On small mobile phone screens only, auto-close sidebar after selection
                        if (window.innerWidth < 640) {
                          onClose();
                        }
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-sky-600 text-white font-semibold shadow-sm'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200'
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isActive
                            ? 'bg-sky-700 text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        D{d.day}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-xs leading-snug">{d.title}</div>
                        <div
                          className={`truncate text-[10px] mt-0.5 ${
                            isActive ? 'text-sky-100' : 'text-slate-500'
                          }`}
                        >
                          {d.keyIdea}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Module II Section */}
            {module2.length > 0 && (
              <div className="space-y-1 pt-2">
                <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700 flex items-center justify-between">
                  <span>Module II: CSS</span>
                  <span className="text-[10px] bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded text-indigo-700 font-semibold">
                    Styling
                  </span>
                </div>

                {module2.map((d) => {
                  const isActive = d.day === currentDay;
                  return (
                    <button
                      key={d.day}
                      onClick={() => {
                        onSelectDay(d.day);
                        if (window.innerWidth < 640) {
                          onClose();
                        }
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-sky-600 text-white font-semibold shadow-sm'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-200'
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isActive
                            ? 'bg-sky-700 text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        D{d.day}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-xs leading-snug">{d.title}</div>
                        <div
                          className={`truncate text-[10px] mt-0.5 ${
                            isActive ? 'text-sky-100' : 'text-slate-500'
                          }`}
                        >
                          {d.keyIdea}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-600 flex items-center justify-between">
            <span>MRDU • HTML & CSS</span>
            <span className="text-emerald-700 font-mono font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              20 Chapters
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
