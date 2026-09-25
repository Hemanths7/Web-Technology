import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, Eye, Code2, Sparkles, Monitor } from 'lucide-react';
import { VsCodeEditor } from './VsCodeEditor';

interface CodePlaygroundProps {
  initialHtml: string;
  initialCss?: string;
  title?: string;
  height?: string;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialHtml,
  initialCss = '',
  title = 'Interactive Code Snippet & Live Browser Output',
  height = '420px',
}) => {
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync state if props change when navigating between days
  useEffect(() => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setActiveTab('html');
    setRunKey((prev) => prev + 1);
  }, [initialHtml, initialCss]);

  // Construct sandbox document for the iframe
  const fullDocument = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 16px;
            color: #1e293b;
            background-color: #ffffff;
            line-height: 1.5;
          }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

  const handleCopy = () => {
    const textToCopy =
      cssCode && cssCode.trim().length > 0
        ? `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}`
        : htmlCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setRunKey((k) => k + 1);
  };

  const lines = (activeTab === 'html' ? htmlCode : cssCode).split('\n');

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-md my-6">
      {/* Playground Header Bar (Light Chrome) */}
      <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-sky-600" />
            {title}
          </span>
        </div>

        {/* Tab Switcher & Action Buttons */}
        <div className="flex items-center gap-2">
          {cssCode && cssCode.trim().length > 0 && (
            <div className="inline-flex p-0.5 rounded-lg bg-slate-200/90 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'html'
                    ? 'bg-white text-sky-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                index.html
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'css'
                    ? 'bg-white text-sky-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                style.css
              </button>
            </div>
          )}

          <button
            onClick={() => setRunKey((k) => k + 1)}
            title="Refresh Output"
            className="flex items-center gap-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Run</span>
          </button>

          <button
            onClick={handleReset}
            title="Reset to Original Code"
            className="flex items-center gap-1 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <button
            onClick={handleCopy}
            title="Copy Code"
            className="flex items-center gap-1 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-2.5 py-1.5 rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Split-Screen Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Pane: VS Code Style Code Editor */}
        <div className="flex flex-col bg-[#1e1e1e]" style={{ minHeight: height }}>
          <div className="flex-1 overflow-hidden">
            <VsCodeEditor
              value={activeTab === 'html' ? htmlCode : cssCode}
              onChange={(newVal) => {
                if (activeTab === 'html') {
                  setHtmlCode(newVal);
                } else {
                  setCssCode(newVal);
                }
              }}
              language={activeTab}
              fileName={activeTab === 'html' ? 'index.html' : 'styles.css'}
              height="100%"
            />
          </div>
          <div className="p-2 bg-[#252526] border-t border-[#1e1e1e] text-[11px] text-slate-300 flex items-center gap-1.5 px-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Edit the code live in VS Code style! Click "Run" or watch real-time browser preview.</span>
          </div>
        </div>

        {/* Right Pane: Live Rendered Output */}
        <div className="flex flex-col bg-white" style={{ minHeight: height }}>
          <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 text-[11px] font-mono text-slate-700 flex justify-between items-center font-bold">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              LIVE BROWSER RENDERED OUTPUT
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-[10px] font-normal">
              <Monitor className="w-3 h-3" />
              Sandbox Viewport
            </span>
          </div>

          <div className="flex-1 bg-white p-2 relative overflow-hidden flex flex-col">
            <iframe
              key={runKey}
              ref={iframeRef}
              srcDoc={fullDocument}
              title="Code Preview"
              sandbox="allow-scripts"
              className="w-full h-full min-h-[340px] flex-1 border-0 bg-white rounded"
            />
          </div>
          <div className="px-3 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex justify-between items-center">
            <span>Visual result exactly as rendered in the web browser.</span>
            <span className="text-emerald-700 font-mono text-[10px] font-bold">Active DOM Sandbox</span>
          </div>
        </div>
      </div>
    </div>
  );
};
