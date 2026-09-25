import React from 'react';
import { examRevisionPoints } from '../data/supplementaryData';
import { BookmarkCheck, Layers, Code } from 'lucide-react';

export const OnePageView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 text-slate-800">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Ultra-Compact Cheat Sheet
            </span>
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
              Classroom & Exam Ready
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            One-Page HTML & CSS Ultimate Memory Sheet
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            MRDU College of Engineering • 1st-Year B.Tech Computer Science Front-End Reference Guide
          </p>
        </div>
      </div>

      {/* 1. Essential HTML5 Tags Reference Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm print:border-slate-300">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2 font-bold text-sm text-slate-900">
          <Code className="w-4 h-4 text-sky-600" />
          <span>HTML5 Essential Tags Reference</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-semibold">
                <th className="py-2.5 px-3">Tag</th>
                <th className="py-2.5 px-3">Purpose</th>
                <th className="py-2.5 px-3">Code Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;!DOCTYPE html&gt;</td>
                <td className="py-2.5 px-3">Enforces modern HTML5 standards mode</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;!DOCTYPE html&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;meta name="viewport"&gt;</td>
                <td className="py-2.5 px-3">Sets viewport width to device screen for mobile responsiveness</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;h1&gt; to &lt;h6&gt;</td>
                <td className="py-2.5 px-3">Document hierarchy (h1=highest, h6=lowest)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;h1&gt;MRDU College&lt;/h1&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;p&gt;</td>
                <td className="py-2.5 px-3">Paragraph text block element with automatic margins</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;p&gt;Engineering Admissions 2026&lt;/p&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;strong&gt; / &lt;em&gt;</td>
                <td className="py-2.5 px-3">Semantic high importance (bold) & verbal emphasis (italics)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;strong&gt;ALERT&lt;/strong&gt; &lt;em&gt;Note&lt;/em&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;sub&gt; / &lt;sup&gt;</td>
                <td className="py-2.5 px-3">Chemical subscript & mathematical exponent power</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">H&lt;sub&gt;2&lt;/sub&gt;O, X&lt;sup&gt;2&lt;/sup&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;ul&gt; / &lt;ol&gt; / &lt;li&gt;</td>
                <td className="py-2.5 px-3">Unordered (bulleted) & Ordered (numbered) lists</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;ul&gt;&lt;li&gt;CSE&lt;/li&gt;&lt;/ul&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;a href="..."&gt;</td>
                <td className="py-2.5 px-3">Hyperlink (target="_blank" for new tab; #id for page jump)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;a href="about.html"&gt;About&lt;/a&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;img src="..." alt="..."&gt;</td>
                <td className="py-2.5 px-3">Void element embedding images; alt is mandatory</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;img src="logo.png" alt="MRDU Logo"&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</td>
                <td className="py-2.5 px-3">Tabular data matrix; colspan (horizontal) & rowspan (vertical)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;td colspan="2"&gt;Total&lt;/td&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;form&gt; &amp; &lt;input&gt;</td>
                <td className="py-2.5 px-3">User data inputs (text, email, password, radio, checkbox, submit)</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;input type="email" required&gt;</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono font-bold text-sky-800">&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</td>
                <td className="py-2.5 px-3">HTML5 Semantic landmarks describing structural meaning</td>
                <td className="py-2.5 px-3 font-mono text-emerald-800 bg-slate-50 rounded">&lt;nav&gt;...&lt;/nav&gt;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Essential CSS Layout & Positioning Rules */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm print:border-slate-300">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2 font-bold text-sm text-slate-900">
          <Layers className="w-4 h-4 text-emerald-600" />
          <span>CSS Layout & Positioning Quick Reference</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-semibold">
                <th className="py-2.5 px-3">Concept</th>
                <th className="py-2.5 px-3">Key Syntax / Value</th>
                <th className="py-2.5 px-3">Crucial Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Box Model</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">box-sizing: border-box;</td>
                <td className="py-2.5 px-3">Absorbs padding and borders inside width, preventing layout breakage.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Position: Relative</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">position: relative;</td>
                <td className="py-2.5 px-3">Offsets without altering DOM flow; serves as anchor for absolute children.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Position: Absolute</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">position: absolute; top: 0;</td>
                <td className="py-2.5 px-3">Pulls out of flow; locks relative to nearest positioned ancestor.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Position: Fixed / Sticky</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">position: sticky; top: 0;</td>
                <td className="py-2.5 px-3">Fixed locks to viewport glass; Sticky locks when scrolling reaches offset.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Flexbox Centering</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">justify-content: center; align-items: center;</td>
                <td className="py-2.5 px-3">justify-content aligns MAIN AXIS; align-items aligns CROSS AXIS.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">CSS Grid Blueprint</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">grid-template-columns: repeat(3, 1fr);</td>
                <td className="py-2.5 px-3">Two-dimensional layout; 1fr is 1 fraction of free available space.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Responsive Grid</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">repeat(auto-fit, minmax(200px, 1fr))</td>
                <td className="py-2.5 px-3">Automatically wraps into multi-column layout without media queries.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Mobile-First Media</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">{'@media (min-width: 768px) { ... }'}</td>
                <td className="py-2.5 px-3">Base styles for phones; min-width enhances layout for tablets and desktops.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Smooth Transitions</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">transition: transform 0.3s ease;</td>
                <td className="py-2.5 px-3">Declare on base class selector so both hover-in and hover-out animate smoothly.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Keyframe Loop</td>
                <td className="py-2.5 px-3 font-mono text-sky-800">animation: spin 1s linear infinite;</td>
                <td className="py-2.5 px-3">Runs autonomous timelines via @keyframes with infinite repetition.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. 20 High-Yield B.Tech Exam Bullet Points */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 print:border-slate-300">
        <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
          <BookmarkCheck className="w-5 h-5 text-amber-600" />
          <span>20 Golden Rules for 1st-Year B.Tech Exams & Viva</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
          {examRevisionPoints.map((pt, i) => (
            <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="font-mono font-bold text-sky-800 shrink-0">
                {i + 1}.
              </span>
              <span className="leading-relaxed">{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
