import React, { useRef, useEffect, useState, useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import { FileCode2, Palette, Hash } from 'lucide-react';

interface VsCodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: 'html' | 'css';
  fileName?: string;
  height?: string;
  readOnly?: boolean;
}

// Tokenizer powered by PrismJS with VS Code Dark+ theme
function tokenizeCode(code: string, language: 'html' | 'css'): string {
  if (!code) return '';
  try {
    const grammar = language === 'html' ? Prism.languages.markup : Prism.languages.css;
    return Prism.highlight(code, grammar, language === 'html' ? 'markup' : 'css');
  } catch {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

export const VsCodeEditor: React.FC<VsCodeEditorProps> = ({
  value,
  onChange,
  language,
  fileName,
  height = '100%',
  readOnly = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });

  const defaultFileName = fileName || (language === 'html' ? 'index.html' : 'style.css');

  // Compute lines for line numbers
  const linesCount = useMemo(() => {
    return (value || '').split('\n').length;
  }, [value]);

  // Compute highlighted HTML
  const highlightedHtml = useMemo(() => {
    return tokenizeCode(value || '', language);
  }, [value, language]);

  // Synchronize scrolling between textarea and pre/line-numbers
  const handleScroll = () => {
    if (textareaRef.current) {
      const { scrollTop, scrollLeft } = textareaRef.current;
      if (preRef.current) {
        preRef.current.scrollTop = scrollTop;
        preRef.current.scrollLeft = scrollLeft;
      }
      if (lineNumbersRef.current) {
        lineNumbersRef.current.scrollTop = scrollTop;
      }
    }
  };

  // Track cursor position for VS Code status bar
  const updateCursorPosition = () => {
    if (!textareaRef.current) return;
    const text = textareaRef.current.value;
    const selStart = textareaRef.current.selectionStart;
    const lines = text.substring(0, selStart).split('\n');
    setCursorPos({
      line: lines.length,
      col: lines[lines.length - 1].length + 1,
    });
  };

  // Support Tab key indentation (2 spaces like VS Code)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;

      // Insert 2 spaces
      const newText = text.substring(0, start) + '  ' + text.substring(end);
      onChange(newText);

      // Restore cursor position after state update
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        updateCursorPosition();
      }, 0);
    }
  };

  return (
    <div
      className="flex flex-col bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[13px] leading-[20px] select-text overflow-hidden h-full border border-slate-800"
      style={{ minHeight: height }}
    >
      {/* VS Code Tab Header */}
      <div className="bg-[#252526] border-b border-[#1e1e1e] flex items-center justify-between px-2 text-xs select-none">
        <div className="flex items-center">
          <div className="flex items-center gap-2 bg-[#1e1e1e] text-slate-200 px-3.5 py-1.5 border-t-2 border-sky-500 font-sans text-xs font-medium">
            {language === 'html' ? (
              <span className="text-[#e34f26] font-bold text-xs flex items-center gap-1 font-mono">
                &lt;/&gt;
              </span>
            ) : (
              <span className="text-[#42a5f5] font-bold text-xs flex items-center gap-1 font-mono">
                #
              </span>
            )}
            <span>{defaultFileName}</span>
          </div>
        </div>

        {/* Breadcrumb info */}
        <div className="text-[11px] text-slate-500 font-sans hidden sm:flex items-center gap-1 pr-2">
          <span>workspace</span>
          <span>&gt;</span>
          <span>src</span>
          <span>&gt;</span>
          <span className="text-slate-300 font-semibold">{defaultFileName}</span>
        </div>
      </div>

      {/* Editor Body: Line Numbers + Highlight Layer + Textarea Input */}
      <div className="flex-1 relative flex overflow-hidden bg-[#1e1e1e]">
        {/* Line Numbers Column */}
        <div
          ref={lineNumbersRef}
          className="select-none py-3 px-3 text-right text-[#858585] bg-[#1e1e1e] border-r border-[#2d2d2d] w-12 shrink-0 font-mono text-[12px] leading-[20px] overflow-hidden"
          aria-hidden="true"
        >
          {Array.from({ length: linesCount }).map((_, i) => (
            <div
              key={i}
              className={`${
                cursorPos.line === i + 1 ? 'text-[#c6c6c6] font-bold' : 'text-[#6e7681]'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code Viewport with Overlay */}
        <div className="relative flex-1 h-full overflow-hidden">
          {/* Syntax-Highlighted Render Layer (behind textarea) */}
          <pre
            ref={preRef}
            aria-hidden="true"
            className="absolute inset-0 p-3 m-0 font-mono text-[13px] leading-[20px] overflow-hidden pointer-events-none whitespace-pre break-normal select-none"
            dangerouslySetInnerHTML={{
              __html: highlightedHtml + '\n', // Ensure trailing newline matches textarea
            }}
          />

          {/* Editable Transparent Textarea (front layer) */}
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              updateCursorPosition();
            }}
            onScroll={handleScroll}
            onSelect={updateCursorPosition}
            onKeyUp={updateCursorPosition}
            onClick={updateCursorPosition}
            onKeyDown={handleKeyDown}
            readOnly={readOnly}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            className="absolute inset-0 w-full h-full p-3 m-0 font-mono text-[13px] leading-[20px] bg-transparent text-transparent caret-white resize-none outline-none selection:bg-[#264f78]/80 selection:text-transparent whitespace-pre break-normal overflow-auto"
          />
        </div>
      </div>

      {/* VS Code Dark Status Bar */}
      <div className="bg-[#007acc] text-white px-3 py-1 flex items-center justify-between text-[11px] font-sans select-none shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
            VS Code Live Editor
          </span>
          <span className="hidden sm:inline text-sky-100">
            {language === 'html' ? 'HTML5' : 'CSS3'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sky-100">
          <span>
            Ln {cursorPos.line}, Col {cursorPos.col}
          </span>
          <span className="hidden sm:inline">Spaces: 2</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="bg-[#005a9e] px-1.5 py-0.5 rounded font-bold uppercase text-[10px] text-white">
            {language}
          </span>
        </div>
      </div>
    </div>
  );
};
