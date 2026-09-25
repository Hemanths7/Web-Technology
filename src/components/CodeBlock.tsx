import React, { useState, useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import { Copy, Check, Code2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: 'html' | 'css' | 'javascript' | 'text';
  fileName?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'html',
  fileName,
  showLineNumbers = false,
  maxHeight,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const highlightedHtml = useMemo(() => {
    if (!code) return '';
    try {
      if (language === 'html') {
        return Prism.highlight(code, Prism.languages.markup, 'markup');
      } else if (language === 'css') {
        return Prism.highlight(code, Prism.languages.css, 'css');
      } else if (language === 'javascript') {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
      } else {
        // Plain text with escaping
        return code
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
    } catch {
      return code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
  }, [code, language]);

  const lines = useMemo(() => code.split('\n'), [code]);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const badgeText =
    fileName ||
    (language === 'html'
      ? 'HTML5'
      : language === 'css'
      ? 'CSS3'
      : language === 'javascript'
      ? 'JavaScript'
      : 'Code');

  return (
    <div className={`prism-code-container font-mono text-[13px] leading-relaxed shadow-sm overflow-hidden ${className}`}>
      {/* Top Header Bar */}
      <div className="bg-[#252526] px-3.5 py-1.5 border-b border-[#2d2d2d] flex items-center justify-between text-xs text-slate-300 select-none">
        <div className="flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-sky-400" />
          <span className="font-sans font-medium text-slate-200 text-xs">{badgeText}</span>
          <span className="text-[10px] text-slate-500 uppercase px-1.5 py-0.5 rounded bg-[#1e1e1e] font-mono border border-slate-700/60">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-[#1e1e1e] hover:bg-[#2d2d2d] text-slate-300 hover:text-white border border-slate-700/60 transition-colors cursor-pointer"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-slate-400" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div
        className="flex overflow-auto bg-[#1e1e1e] p-3 text-slate-200"
        style={{ maxHeight: maxHeight || 'none' }}
      >
        {showLineNumbers && (
          <div
            className="select-none pr-3 mr-3 text-right text-[#858585] border-r border-[#2d2d2d] font-mono text-[12px] shrink-0"
            aria-hidden="true"
          >
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}

        <pre className="m-0 p-0 font-mono text-[13px] leading-relaxed overflow-x-auto w-full">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      </div>
    </div>
  );
};
