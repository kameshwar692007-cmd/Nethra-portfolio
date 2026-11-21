import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { patentsData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Download, 
  Eye, 
  X, 
  Building, 
  ChevronDown, 
  ChevronUp,
  FileCheck2,
  Sparkles
} from 'lucide-react';

export default function PatentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filters = ['All', 'United Kingdom', 'Canada', 'India', 'Germany'];

  const filteredPatents = activeFilter === 'All'
    ? patentsData
    : patentsData.filter(p => p.country === activeFilter);

  // If "All" is active and showAll is false, show first 3 to prevent excessive scrolling
  const visiblePatents = (activeFilter === 'All' && !showAll)
    ? filteredPatents.slice(0, 3)
    : filteredPatents;

  return (
    <section id="patents" className="py-14 sm:py-20 bg-[#0a0d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Highlighted Intellectual Property
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Patented Inventions &amp; Innovation Portfolio
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Seven sovereign-registered invention concepts across the UK, Canada, India, and Germany—spanning predictive energy AI, clinical oncology platforms, and rural smart irrigation.
          </p>
        </div>

        {/* Country Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => {
            const count = filter === 'All' 
              ? patentsData.length 
              : patentsData.filter(p => p.country === filter).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(true); // show all for filtered view
                }}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {filter === 'United Kingdom' && '🇬🇧 '}
                {filter === 'Canada' && '🇨🇦 '}
                {filter === 'India' && '🇮🇳 '}
                {filter === 'Germany' && '🇩🇪 '}
                {filter} ({count})
              </button>
            );
          })}
        </div>

        {/* Compact Patents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visiblePatents.map((patent) => (
              <motion.div
                key={patent.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-[#0f141f] border border-slate-800/90 hover:border-emerald-500/40 transition-all flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Certificate Top Container - Image preserved in natural document ratio */}
                  <div 
                    className="relative bg-slate-950 border-b border-slate-800/80 overflow-hidden cursor-pointer flex items-center justify-center p-3"
                    style={{ minHeight: '190px', maxHeight: '220px' }}
                    onClick={() => setSelectedPatent(patent)}
                  >
                    <img
                      src={patent.certificateImage}
                      alt={patent.title}
                      className="max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-95"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/95 text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-700 flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        Inspect Grant
                      </span>
                    </div>

                    {/* Flag Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-sm border border-slate-800 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-200 flex items-center gap-1">
                      <span>{patent.flag}</span>
                      <span>{patent.country}</span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-2.5 right-2.5 bg-emerald-500/90 text-slate-950 px-2 py-0.5 rounded text-[10px] font-bold">
                      {patent.status}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                      <span className="text-emerald-400 font-bold">{patent.number}</span>
                      <span>{patent.grantDate}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug tracking-tight font-display group-hover:text-emerald-300 transition-colors">
                      {patent.title}
                    </h3>

                    <div className="mt-1.5 text-xs text-slate-400 flex items-center gap-1 truncate">
                      <Building className="w-3 h-3 text-slate-500 shrink-0" />
                      <span className="truncate">{patent.office}</span>
                    </div>

                    <p className="mt-2.5 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {patent.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 pt-0 border-t border-slate-800/60 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPatent(patent)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 active:scale-98 text-xs font-semibold text-slate-200 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    Inspect Grant
                  </button>

                  {patent.documentUrl && (
                    <a
                      href={patent.documentUrl}
                      download
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 active:scale-98 text-emerald-400 border border-emerald-500/30 transition-all"
                      title="Download Official Certificate PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All / Collapse Button (Prevents excessive page scrolling) */}
        {activeFilter === 'All' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-200 active:scale-98 transition-all shadow-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 text-emerald-400" />
                  <span>Show Fewer (Collapse to Top 3)</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-emerald-400" />
                  <span>View All 7 Patented Inventions</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Official Certificate Inspection Modal */}
      {selectedPatent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#0e121a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/70">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{selectedPatent.flag}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1">
                    {selectedPatent.title}
                  </h3>
                  <div className="text-[11px] text-emerald-400 font-mono">
                    {selectedPatent.number} &bull; {selectedPatent.office}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPatent(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              
              {/* Certificate Image in Exact Natural Proportion */}
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 flex items-center justify-center p-3">
                <img
                  src={selectedPatent.certificateImage}
                  alt={`${selectedPatent.title} Certificate`}
                  className="max-h-[420px] w-auto object-contain rounded"
                />
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold block">Inventor</span>
                  <span className="text-slate-200 font-semibold mt-0.5 block">{selectedPatent.inventor}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold block">Status</span>
                  <span className="text-emerald-400 font-semibold mt-0.5 block">{selectedPatent.status}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold block">Grant Date</span>
                  <span className="text-slate-200 font-semibold mt-0.5 block">{selectedPatent.grantDate}</span>
                </div>
              </div>

              {/* Technical Description */}
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Architecture &amp; Real-World Application:</strong>
                {selectedPatent.summary}
                <div className="mt-2 text-emerald-300/90">
                  <strong className="text-emerald-400">Core Impact: </strong>{selectedPatent.significance}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
              {selectedPatent.documentUrl ? (
                <a
                  href={selectedPatent.documentUrl}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Official Registered PDF
                </a>
              ) : (
                <span className="text-[11px] text-slate-500">Official Sovereign Registration</span>
              )}
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
