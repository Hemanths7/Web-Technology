import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  AlertTriangle,
  Layers,
  HelpCircle,
  FileText,
  Play,
  PanelLeftClose,
  PanelLeftOpen,
  GraduationCap,
  ChevronDown,
  Check,
} from 'lucide-react';

export type ActiveTabType = 'notes' | 'mistakes' | 'comparisons' | 'viva' | 'onepage';

interface NavbarProps {
  activeTab: ActiveTabType;
  onSelectTab: (tab: ActiveTabType) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  onOpenSandbox: () => void;
  currentDay: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onToggleSidebar,
  isSidebarOpen,
  onOpenSandbox,
  currentDay,
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      id: 'notes' as ActiveTabType,
      label: `Day ${currentDay} Notes`,
      description: 'Step-by-step topic breakdown & interactive code',
      icon: BookOpen,
      iconColor: 'text-sky-600',
      activeBg: 'bg-sky-50 text-sky-800',
    },
    {
      id: 'mistakes' as ActiveTabType,
      label: '32 Common Mistakes',
      description: 'Wrong vs correct code with explanation',
      icon: AlertTriangle,
      iconColor: 'text-rose-600',
      activeBg: 'bg-rose-50 text-rose-800',
    },
    {
      id: 'comparisons' as ActiveTabType,
      label: '15+ Core Comparisons',
      description: 'Side-by-side technical trade-off tables',
      icon: Layers,
      iconColor: 'text-purple-600',
      activeBg: 'bg-purple-50 text-purple-800',
    },
    {
      id: 'viva' as ActiveTabType,
      label: '100 Viva Exam Questions',
      description: 'High-frequency viva questions & crisp answers',
      icon: HelpCircle,
      iconColor: 'text-amber-600',
      activeBg: 'bg-amber-50 text-amber-800',
    },
    {
      id: 'onepage' as ActiveTabType,
      label: 'One-Page Cheat Sheet',
      description: 'Ultra-compact memory sheet & tags reference',
      icon: FileText,
      iconColor: 'text-emerald-600',
      activeBg: 'bg-emerald-50 text-emerald-800',
    },
  ];

  const currentNav = navItems.find((i) => i.id === activeTab) || navItems[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Left Branding & Sidebar Slide Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className={`p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer ${
              !isSidebarOpen ? 'bg-sky-50 border-sky-300 text-sky-700 shadow-sm' : ''
            }`}
            title={isSidebarOpen ? 'Slide to close HTML & CSS sidebar' : 'Slide to open HTML & CSS sidebar'}
          >
            {isSidebarOpen ? (
              <>
                <PanelLeftClose className="w-4 h-4 text-slate-500" />
                <span className="hidden sm:inline text-xs">Close</span>
              </>
            ) : (
              <>
                <PanelLeftOpen className="w-4 h-4 text-sky-600" />
                <span className="text-xs text-sky-700 font-bold">HTML & CSS</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-md shadow-sky-600/20 text-white font-black text-sm shrink-0">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold tracking-tight text-sm sm:text-base text-slate-900">
                  MRDU College
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                HTML & CSS Master Notes & Interactive Lab
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: "More" Navigation Dropdown & Live Sandbox */}
        <div className="flex items-center gap-2.5">
          {/* Unified "More" Navigation Dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setIsMoreOpen((prev) => !prev)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isMoreOpen
                  ? 'bg-sky-50 border-sky-400 text-sky-800 shadow-sm ring-2 ring-sky-500/20'
                  : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
              title="Navigate all learning sections"
              aria-expanded={isMoreOpen}
            >
              <currentNav.icon className={`w-3.5 h-3.5 ${currentNav.iconColor}`} />
              <span>More</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  isMoreOpen ? 'rotate-180 text-sky-600' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                  <span>Navigation Menu</span>
                  <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">5 Sections</span>
                </div>
                <div className="py-1">
                  {navItems.map((item) => {
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectTab(item.id);
                          setIsMoreOpen(false);
                        }}
                        className={`w-full flex items-start gap-3 px-3.5 py-2.5 text-left transition-all cursor-pointer ${
                          isSelected
                            ? `${item.activeBg} font-bold`
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.iconColor}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs">{item.label}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />}
                          </div>
                          <p className="text-[10px] text-slate-500 font-normal leading-tight mt-0.5 truncate">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Sandbox Launch Button */}
          <button
            onClick={onOpenSandbox}
            className="flex items-center gap-1.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
            title="Open Free-Form HTML + CSS Playground"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Live Sandbox</span>
          </button>
        </div>
      </div>
    </header>
  );
};
