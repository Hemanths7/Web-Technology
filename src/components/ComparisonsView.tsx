import React, { useState } from 'react';
import { comparisonTablesList } from '../data/supplementaryData';
import { Sparkles, Search } from 'lucide-react';

export const ComparisonsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTableId, setSelectedTableId] = useState<string>('all');

  const filteredTables = comparisonTablesList.filter((table) => {
    const matchesSearch =
      table.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      table.itemA.toLowerCase().includes(searchTerm.toLowerCase()) ||
      table.itemB.toLowerCase().includes(searchTerm.toLowerCase()) ||
      table.rows.some(
        (r) =>
          r.feature.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.valA.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.valB.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesId = selectedTableId === 'all' || table.id === selectedTableId;
    return matchesSearch && matchesId;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 text-slate-800">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
            Conceptual Mastery
          </span>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
            15+ Core Comparison Matrices
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Core HTML & CSS Conceptual Differences
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Never confuse similar concepts again! Master the exact differences between Tag vs Element, b vs strong, Flexbox vs Grid, Margin vs Padding, and more.
        </p>

        {/* Filter controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search comparison tables (e.g. flex, padding, id)..."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          <select
            value={selectedTableId}
            onChange={(e) => setSelectedTableId(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">All Comparison Tables</option>
            {comparisonTablesList.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tables List */}
      <div className="space-y-6">
        {filteredTables.map((table) => (
          <div
            key={table.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                {table.title}
              </h3>
              <span className="text-xs font-mono font-bold text-purple-800 bg-purple-100 border border-purple-200 px-2 py-0.5 rounded">
                Comparison
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider">
                    <th className="py-3 px-4 w-1/4">Comparison Dimension</th>
                    <th className="py-3 px-4 w-3/8 text-sky-900 bg-sky-50/70 border-x border-slate-200/60 font-bold">{table.itemA}</th>
                    <th className="py-3 px-4 w-3/8 text-emerald-900 bg-emerald-50/70 font-bold">{table.itemB}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {table.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">{row.feature}</td>
                      <td className="py-3 px-4 font-mono text-sky-900 bg-sky-50/30 border-x border-slate-200/60 leading-relaxed">
                        {row.valA}
                      </td>
                      <td className="py-3 px-4 font-mono text-emerald-900 bg-emerald-50/30 leading-relaxed">
                        {row.valB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
