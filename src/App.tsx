import React, { useState } from 'react';
import { Navbar, ActiveTabType } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DayDetailView } from './components/DayDetailView';
import { MistakesView } from './components/MistakesView';
import { ComparisonsView } from './components/ComparisonsView';
import { VivaView } from './components/VivaView';
import { OnePageView } from './components/OnePageView';
import { SandboxModal } from './components/SandboxModal';
import { allDaysData, getDayData } from './data/daysData';
import { PanelLeftOpen } from 'lucide-react';

export default function App() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<ActiveTabType>('notes');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [sandboxConfig, setSandboxConfig] = useState<{
    isOpen: boolean;
    html?: string;
    css?: string;
  }>({
    isOpen: false,
  });

  const selectedDayLesson = getDayData(currentDay) || allDaysData[0];

  const handleSelectDay = (dayNum: number) => {
    setCurrentDay(dayNum);
    setActiveTab('notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSandbox = (html?: string, css?: string) => {
    setSandboxConfig({
      isOpen: true,
      html: html || selectedDayLesson.defaultCode.html,
      css: css || selectedDayLesson.defaultCode.css,
    });
  };

  const handleCloseSandbox = () => {
    setSandboxConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900 relative">
      {/* Top Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
        onOpenSandbox={() => handleOpenSandbox()}
        currentDay={currentDay}
      />

      {/* Floating Slide Trigger when sidebar is closed (works in fullscreen and standard mode) */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-0 top-28 z-40 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-l-0 border-slate-300 shadow-md hover:shadow-lg rounded-r-xl px-2.5 py-3.5 flex flex-col items-center gap-1.5 transition-all group cursor-pointer"
          title="Slide open HTML & CSS"
        >
          <PanelLeftOpen className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-wider [writing-mode:vertical-lr] rotate-180 text-slate-600 group-hover:text-sky-700">
            HTML & CSS
          </span>
        </button>
      )}

      {/* Main Layout Area */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
        {/* Left Sidebar (Day 1 - 20) with slide animation */}
        <Sidebar
          currentDay={currentDay}
          onSelectDay={handleSelectDay}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 transition-all duration-300">
          {activeTab === 'notes' && (
            <DayDetailView
              day={selectedDayLesson}
              onNavigateDay={handleSelectDay}
              onOpenSandboxWithCode={handleOpenSandbox}
            />
          )}

          {activeTab === 'mistakes' && <MistakesView />}

          {activeTab === 'comparisons' && <ComparisonsView />}

          {activeTab === 'viva' && <VivaView />}

          {activeTab === 'onepage' && <OnePageView />}
        </main>
      </div>

      {/* Global Sandbox Scratchpad Modal */}
      <SandboxModal
        isOpen={sandboxConfig.isOpen}
        onClose={handleCloseSandbox}
        initialHtml={sandboxConfig.html}
        initialCss={sandboxConfig.css}
      />
    </div>
  );
}
