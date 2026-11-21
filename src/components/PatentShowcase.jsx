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
  Check,
  Calendar,
  Award
} from 'lucide-react';

export default function PatentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const filters = ['All', 'United Kingdom', 'Canada', 'India', 'Germany'];

  const filteredPatents = activeFilter === 'All'
    ? patentsData
    : patentsData.filter(p => p.country === activeFilter);

  // In desktop view, show 2 cards first in the All tab, then reveal remaining 5 on clicking show more
  const visiblePatents = (activeFilter === 'All' && !showAll)
    ? filteredPatents.slice(0, 2)
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
    <section id="patents" className="py-14 sm:py-20 bg-[#0b0f19] border-b border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Solid Badge */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064e3b] border border-[#059669] text-[#a7f3d0] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#34d399]" />
            Sovereign Intellectual Property Portfolio
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            7 Patented Inventions &amp; Designs
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Registered multi-national intellectual property filed across the UK Patent Office, Canadian CIPO, and Government of India—bridging clinical oncology AI, energy prediction, and agritech.
          </p>
        </div>

        {/* Country Filter Tabs with Solid Active Pill */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto p-1.5 bg-[#101726] border border-[#22314e] rounded-xl w-fit mx-auto scrollbar-none">
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
                className={`relative whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold transition-all z-10 ${
                  isActive
                    ? 'text-white bg-[#059669] shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#18233a]'
                }`}
              >
                <span className="flex items-center gap-1.5">
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

        {/* Desktop View: Exactly 2 Expansive Cards first, then Show More */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visiblePatents.map((patent) => (
              <motion.div
                key={patent.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-[#121a2d] border border-[#263654] hover:border-[#059669] transition-all flex flex-col justify-between overflow-hidden shadow-md group"
              >
                <div>
                  {/* Solid Header Ribbon */}
                  <div className="px-5 py-3 bg-[#0d1424] border-b border-[#202c44] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <span className="text-base">{patent.flag}</span>
                      <span>{patent.country}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-300 font-sans font-normal">{patent.office}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#064e3b] text-[#a7f3d0] border border-[#059669] text-[11px] font-bold">
                      {patent.status}
                    </span>
                  </div>

                  {/* Document Graphic Inset */}
                  <div 
                    className="relative bg-[#090e1a] border-b border-[#202c44] overflow-hidden cursor-pointer flex items-center justify-center p-4"
                    style={{ height: '220px' }}
                    onClick={() => setSelectedPatent(patent)}
                  >
                    <img
                      src={patent.certificateImage}
                      alt={patent.title}
                      className="max-h-full w-auto object-contain filter brightness-95 rounded border border-[#1e2a42]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                      }}
                    />
                    
                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-[#090e1a]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#059669] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                        <Eye className="w-4 h-4" />
                        Inspect Sovereign Certificate
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={(e) => handleCopyId(e, patent)}
                        title="Click to copy registration ID"
                        className="text-[#34d399] font-bold tracking-wide hover:underline flex items-center gap-1.5 bg-[#0b1120] px-2.5 py-1 rounded border border-[#1e293b]"
                      >
                        <span>{patent.number}</span>
                        {copiedId === patent.id ? (
                          <span className="text-[10px] text-[#a7f3d0] flex items-center gap-0.5 font-bold">
                            <Check className="w-3 h-3 text-[#34d399]" /> Copied
                          </span>
                        ) : (
                          <Copy className="w-3 h-3 text-slate-400 hover:text-white" />
                        )}
                      </button>
                      <span className="text-slate-300 font-sans text-xs flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {patent.grantDate}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug font-display">
                      {patent.title}
                    </h3>

                    {/* Solid Inset Description */}
                    <div className="p-3.5 rounded-xl bg-[#0b1120] border border-[#1e293b] text-xs text-slate-200 leading-relaxed font-normal">
                      {patent.summary}
                    </div>

                    {/* Significance Line */}
                    <div className="text-xs text-[#a7f3d0] bg-[#064e3b]/40 px-3 py-1.5 rounded-lg border border-[#059669]/30">
                      <strong className="text-[#34d399] font-semibold">Impact: </strong>{patent.significance}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 border-t border-[#202c44] mt-3 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedPatent(patent)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold transition-all shadow-sm active:scale-98"
                  >
                    <Eye className="w-4 h-4" />
                    Inspect Grant Document
                  </button>

                  {patent.documentUrl && (
                    <a
                      href={patent.documentUrl}
                      download
                      className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-[#064e3b] hover:bg-[#065f46] text-[#a7f3d0] border border-[#059669] text-xs font-bold transition-all"
                      title="Download Official Sovereign Certificate PDF"
                    >
                      <Download className="w-4 h-4 text-[#34d399]" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All / Collapse Button for Desktop 2-Card Flow */}
        {activeFilter === 'All' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141d30] hover:bg-[#1a253d] border-2 border-[#263654] hover:border-[#059669] text-xs sm:text-sm font-bold text-white active:scale-98 transition-all shadow-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 text-[#34d399]" />
                  <span>Show Fewer (Collapse to 2 Cards)</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-[#34d399]" />
                  <span>View Remaining 5 Patented Inventions (Show More)</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Official Certificate Inspection Modal */}
      {selectedPatent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#070b14]/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#121a2d] border-2 border-[#2b3a58] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#23304a] flex items-center justify-between bg-[#0e1628]">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{selectedPatent.flag}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight line-clamp-1 font-display">
                    {selectedPatent.title}
                  </h3>
                  <div className="text-[11px] text-[#34d399] font-mono font-bold">
                    {selectedPatent.number} • {selectedPatent.office}
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
              
              {/* Certificate Image */}
              <div className="rounded-xl border border-[#23304a] overflow-hidden bg-[#090e1a] flex items-center justify-center p-3">
                <img
                  src={selectedPatent.certificateImage}
                  alt={`${selectedPatent.title} Certificate`}
                  className="max-h-[420px] w-auto object-contain rounded"
                />
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-bold block">Inventor</span>
                  <span className="text-white font-bold mt-0.5 block font-display">{selectedPatent.inventor}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-bold block">Status</span>
                  <span className="text-[#34d399] font-bold mt-0.5 block font-mono">{selectedPatent.status}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono font-bold block">Grant Date</span>
                  <span className="text-white font-bold mt-0.5 block font-mono">{selectedPatent.grantDate}</span>
                </div>
              </div>

              {/* Technical Description */}
              <div className="p-4 rounded-xl bg-[#0b1120] border border-[#1e2a42] text-xs text-slate-200 leading-relaxed space-y-2">
                <div>
                  <strong className="text-white block font-display text-sm mb-1">Architecture &amp; Real-World Application:</strong>
                  {selectedPatent.summary}
                </div>
                <div className="pt-2 border-t border-[#1e2a42] text-[#a7f3d0]">
                  <strong className="text-[#34d399]">Core Impact: </strong>{selectedPatent.significance}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 border-t border-[#23304a] bg-[#0e1628] flex items-center justify-between">
              {selectedPatent.documentUrl ? (
                <a
                  href={selectedPatent.documentUrl}
                  download
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] px-4 py-2 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Official Registered PDF
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400">Official Sovereign Registration</span>
              )}
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-[#1a253d] hover:bg-[#233252] text-slate-200"
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
