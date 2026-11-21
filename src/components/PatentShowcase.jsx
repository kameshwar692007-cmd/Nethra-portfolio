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
  ExternalLink
} from 'lucide-react';

export default function PatentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filters = ['All', 'United Kingdom', 'Canada', 'India', 'Germany'];

  const filteredPatents = activeFilter === 'All'
    ? patentsData
    : patentsData.filter(p => p.country === activeFilter);

  // Default to 3 items initially for clean non-scrolling layout
  const visiblePatents = (activeFilter === 'All' && !showAll)
    ? filteredPatents.slice(0, 3)
    : filteredPatents;

  return (
    <section id="patents" className="py-14 sm:py-20 bg-[#0d1322] border-b border-[#202c44] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Sovereign Intellectual Property Portfolio
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            7 Patented Inventions &amp; Designs
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Registered inventions engineered across the UK Patent Office, Canadian CIPO, and Government of India—bridging clinical oncology AI, energy prediction, and agritech.
          </p>
        </div>

        {/* Country Filter Tabs (High Contrast) */}
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
                  setShowAll(true);
                }}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-[0_2px_10px_rgba(16,185,129,0.25)]'
                    : 'bg-[#141d30] text-slate-300 hover:text-white hover:bg-[#1a253d] border border-[#263552]'
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

        {/* Non-Generic Structural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visiblePatents.map((patent) => (
              <motion.div
                key={patent.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-[#141d30] border-2 border-[#23304a] hover:border-emerald-500/50 transition-all flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group"
              >
                <div>
                  {/* Structural Card Header Ribbon */}
                  <div className="px-4 py-2.5 bg-[#0e1526] border-b border-[#202c44] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                      <span>{patent.flag}</span>
                      <span>{patent.country}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                      {patent.status}
                    </span>
                  </div>

                  {/* Document Thumbnail Inset in Exact Aspect Ratio */}
                  <div 
                    className="relative bg-[#0a0f1d] border-b border-[#202c44] overflow-hidden cursor-pointer flex items-center justify-center p-3"
                    style={{ height: '190px' }}
                    onClick={() => setSelectedPatent(patent)}
                  >
                    <img
                      src={patent.certificateImage}
                      alt={patent.title}
                      className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-95 rounded"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                      }}
                    />
                    
                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-[#0b0f19]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#141d30] text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/50 flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        Inspect Official Grant
                      </span>
                    </div>
                  </div>

                  {/* Card Content Inset */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-bold tracking-wide">{patent.number}</span>
                      <span className="text-slate-400">{patent.grantDate}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug font-display group-hover:text-emerald-300 transition-colors">
                      {patent.title}
                    </h3>

                    <div className="text-xs text-slate-300 flex items-center gap-1 truncate pt-0.5">
                      <Building className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{patent.office}</span>
                    </div>

                    {/* Inset Description Compartment for Maximum Readability */}
                    <div className="p-2.5 rounded-xl bg-[#0e1628] border border-[#1e2a42] text-xs text-slate-300 leading-relaxed mt-2.5 line-clamp-3">
                      {patent.summary}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 pt-0 border-t border-[#202c44] mt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPatent(patent)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#1c273e] hover:bg-[#23324f] active:scale-98 text-xs font-bold text-slate-100 transition-all border border-[#2b3c5e]"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    Inspect Grant
                  </button>

                  {patent.documentUrl && (
                    <a
                      href={patent.documentUrl}
                      download
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 active:scale-98 text-emerald-300 border border-emerald-500/40 transition-all"
                      title="Download Official Sovereign Certificate PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All / Collapse Button (Prevents excessive vertical page scrolling) */}
        {activeFilter === 'All' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1c2842] border border-[#263552] text-xs sm:text-sm font-semibold text-slate-200 active:scale-98 transition-all shadow-md"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#070b14]/90 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#131b2e] border-2 border-[#2b3a58] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#23304a] flex items-center justify-between bg-[#0e1628]">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{selectedPatent.flag}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1 font-display">
                    {selectedPatent.title}
                  </h3>
                  <div className="text-[11px] text-emerald-400 font-mono font-semibold">
                    {selectedPatent.number} &bull; {selectedPatent.office}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPatent(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#1a253d] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              
              {/* Certificate Image in Exact Natural Proportion */}
              <div className="rounded-xl border border-[#23304a] overflow-hidden bg-[#090e1a] flex items-center justify-center p-3">
                <img
                  src={selectedPatent.certificateImage}
                  alt={`${selectedPatent.title} Certificate`}
                  className="max-h-[420px] w-auto object-contain rounded"
                />
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-[#0e1628] border border-[#202c44]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold block">Inventor</span>
                  <span className="text-white font-bold mt-0.5 block">{selectedPatent.inventor}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0e1628] border border-[#202c44]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold block">Status</span>
                  <span className="text-emerald-400 font-bold mt-0.5 block">{selectedPatent.status}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#0e1628] border border-[#202c44]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold block">Grant Date</span>
                  <span className="text-white font-bold mt-0.5 block">{selectedPatent.grantDate}</span>
                </div>
              </div>

              {/* Technical Description */}
              <div className="p-4 rounded-xl bg-[#0e1628] border border-[#202c44] text-xs text-slate-200 leading-relaxed space-y-2">
                <div>
                  <strong className="text-white block font-display text-sm mb-1">Architecture &amp; Real-World Application:</strong>
                  {selectedPatent.summary}
                </div>
                <div className="pt-2 border-t border-[#202c44] text-emerald-300">
                  <strong className="text-emerald-400">Core Impact: </strong>{selectedPatent.significance}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-[#23304a] bg-[#0e1628] flex items-center justify-between">
              {selectedPatent.documentUrl ? (
                <a
                  href={selectedPatent.documentUrl}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <Download className="w-4 h-4" />
                  Download Official Registered PDF
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400">Official Sovereign Registration</span>
              )}
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#1a253d] hover:bg-[#233252] text-slate-200"
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
