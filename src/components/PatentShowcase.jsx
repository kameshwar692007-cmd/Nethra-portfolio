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
  Copy,
  Check
} from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import BorderBeam from './ui/BorderBeam';

export default function PatentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const filters = ['All', 'United Kingdom', 'Canada', 'India', 'Germany'];

  const filteredPatents = activeFilter === 'All'
    ? patentsData
    : patentsData.filter(p => p.country === activeFilter);

  // Default to 3 items initially for clean non-scrolling layout
  const visiblePatents = (activeFilter === 'All' && !showAll)
    ? filteredPatents.slice(0, 3)
    : filteredPatents;

  const handleCopyId = (e, patent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(patent.number);
    setCopiedId(patent.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="patents" className="py-14 sm:py-20 bg-[#0d1322] border-b-2 border-[#202c44] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 shadow-sm">
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

        {/* Country Filter Tabs with Quarry UI / Apple Sliding Pill (Framer Motion layoutId) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto p-1.5 bg-[#0a0f1d] border-2 border-[#23304a] rounded-2xl w-fit mx-auto scrollbar-none">
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
                className={`relative whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors z-10 ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="patentTabPill"
                    className="absolute inset-0 bg-emerald-400 rounded-xl -z-10 shadow-[0_2px_10px_rgba(16,185,129,0.25)]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {filter === 'United Kingdom' && '🇬🇧 '}
                  {filter === 'Canada' && '🇨🇦 '}
                  {filter === 'India' && '🇮🇳 '}
                  {filter === 'Germany' && '🇩🇪 '}
                  {filter} ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Structural 21st.dev / Quarry UI Spotlight Cards Grid */}
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
                className="h-full"
              >
                <SpotlightCard className="h-full shadow-xl group">
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
                        <span className="bg-[#141d30] text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-emerald-500/50 flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-emerald-400" />
                          Inspect Official Grant
                        </span>
                      </div>
                    </div>

                    {/* Card Content Inset */}
                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <button
                          onClick={(e) => handleCopyId(e, patent)}
                          title="Click to copy registration ID"
                          className="text-emerald-400 font-bold tracking-wide hover:text-emerald-300 flex items-center gap-1"
                        >
                          <span>{patent.number}</span>
                          {copiedId === patent.id ? (
                            <span className="text-[10px] text-emerald-300 flex items-center gap-0.5 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/30">
                              <Check className="w-2.5 h-2.5" /> Copied
                            </span>
                          ) : (
                            <Copy className="w-3 h-3 text-slate-500 opacity-70 hover:opacity-100" />
                          )}
                        </button>
                        <span className="text-slate-400">{patent.grantDate}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug font-display group-hover:text-emerald-300 transition-colors">
                        {patent.title}
                      </h3>

                      <div className="text-xs text-slate-300 flex items-center gap-1 truncate pt-0.5">
                        <Building className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{patent.office}</span>
                      </div>

                      {/* Inset Description Compartment */}
                      <div className="p-2.5 rounded-xl bg-[#0c1322] border border-[#1e2a42] text-xs text-slate-300 leading-relaxed mt-2.5 line-clamp-3">
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
                        className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/60 active:scale-98 text-emerald-300 border border-emerald-500/40 transition-all"
                        title="Download Official Sovereign Certificate PDF"
                      >
                        <Download className="w-4 h-4 text-emerald-400" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All / Collapse Button */}
        {activeFilter === 'All' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1c2842] border-2 border-[#263552] text-xs sm:text-sm font-bold text-white active:scale-98 transition-all shadow-md"
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

      {/* Official Certificate Inspection Modal with 21st.dev Border Beam */}
      {selectedPatent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#070b14]/90 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#131b2e] border-2 border-[#2b3a58] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            <BorderBeam size={300} duration={10} colorFrom="#10b981" colorTo="#34d399" />

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
                <div className="p-3 rounded-xl bg-[#0c1322] border border-[#1e2a42]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold block">Inventor</span>
                  <span className="text-white font-bold mt-0.5 block font-display">{selectedPatent.inventor}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0c1322] border border-[#1e2a42]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold block">Status</span>
                  <span className="text-emerald-400 font-bold mt-0.5 block font-mono">{selectedPatent.status}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#0c1322] border border-[#1e2a42]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold block">Grant Date</span>
                  <span className="text-white font-bold mt-0.5 block font-mono">{selectedPatent.grantDate}</span>
                </div>
              </div>

              {/* Technical Description */}
              <div className="p-4 rounded-xl bg-[#0c1322] border border-[#1e2a42] text-xs text-slate-200 leading-relaxed space-y-2">
                <div>
                  <strong className="text-white block font-display text-sm mb-1">Architecture &amp; Real-World Application:</strong>
                  {selectedPatent.summary}
                </div>
                <div className="pt-2 border-t border-[#1e2a42] text-emerald-300">
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
