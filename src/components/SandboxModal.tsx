import React, { useState } from 'react';
import { X, Play, RotateCcw, Copy, Check, Sparkles, Code2, Monitor } from 'lucide-react';
import { VsCodeEditor } from './VsCodeEditor';

interface SandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHtml?: string;
  initialCss?: string;
}

export const SandboxModal: React.FC<SandboxModalProps> = ({
  isOpen,
  onClose,
  initialHtml = `<!-- MRDU Free-Form Coding Playground -->
<div class="welcome-box">
  <h1>MRDU Live HTML + CSS Lab</h1>
  <p>Start writing your custom HTML & CSS code here!</p>
  <button class="test-btn">Click Me</button>
</div>`,
  initialCss = `body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #f8fafc;
  padding: 20px;
}
.welcome-box {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
h1 {
  color: #0284c7;
  margin-top: 0;
}
p {
  color: #475569;
  line-height: 1.6;
}
.test-btn {
  background: #0284c7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}
.test-btn:hover {
  background: #0369a1;
  transform: translateY(-2px);
}`,
}) => {
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);
  const [runKey, setRunKey] = useState(0);

  if (!isOpen) return null;

  const fullDocument = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * { box-sizing: border-box; }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(`<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setRunKey((k) => k + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 w-full max-w-6xl h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Top Bar */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Full-Screen Live HTML + CSS Scratchpad
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex p-0.5 rounded-lg bg-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'html' ? 'bg-white text-sky-800 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                HTML Editor
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'css' ? 'bg-white text-sky-800 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                CSS Editor
              </button>
            </div>

            <button
              onClick={() => setRunKey((k) => k + 1)}
              className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Run</span>
            </button>

            <button
              onClick={handleReset}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 border border-slate-200 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleCopy}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 border border-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Split Editor and Output */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 overflow-hidden">
          {/* VS Code Style Code Editor */}
          <div className="flex flex-col h-full overflow-hidden bg-[#1e1e1e]">
            <VsCodeEditor
              value={activeTab === 'html' ? htmlCode : cssCode}
              onChange={(newVal) => {
                if (activeTab === 'html') setHtmlCode(newVal);
                else setCssCode(newVal);
              }}
              language={activeTab}
              fileName={activeTab === 'html' ? 'index.html' : 'styles.css'}
            />
          </div>

          {/* Live Preview */}
          <div className="flex flex-col bg-white h-full overflow-hidden">
            <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 text-[11px] font-mono text-emerald-800 flex items-center justify-between font-bold">
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-emerald-600" />
                <span>LIVE RENDERED OUTPUT</span>
              </span>
              <span className="text-slate-500 text-[10px] font-normal">Active Sandboxed iFrame</span>
            </div>
            <iframe
              key={runKey}
              srcDoc={fullDocument}
              title="Fullscreen Sandbox Preview"
              sandbox="allow-scripts"
              className="flex-1 w-full h-full border-0 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
