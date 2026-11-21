import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { patentsData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Download, 
  Eye, 
  X, 
  Building, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function PatentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPatent, setSelectedPatent] = useState(null);

  const filters = ['All', 'United Kingdom', 'Canada', 'India', 'Germany'];

  const filteredPatents = activeFilter === 'All'
    ? patentsData
    : patentsData.filter(p => p.country === activeFilter);

  return (
    <section id="patents" className="py-24 sm:py-32 bg-[#090b10] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Editorial & Authoritative */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Sovereign Intellectual Property &bull; 07 Registered Inventions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.04] font-display">
            Patents &amp; Hardware Innovations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Seven multi-national intellectual property registrations across the UK Intellectual Property Office, Canadian Intellectual Property Office (CIPO), and Intellectual Property India—engineered to address real-world failures in energy loss, oncology diagnostics, and rural groundwater conservation.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
          {filters.map((filter) => {
            const count = filter === 'All' 
              ? patentsData.length 
              : patentsData.filter(p => p.country === filter).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2.5 rounded-lg tracking-wider transition-all select-none whitespace-nowrap uppercase ${
                  isActive 
                    ? 'text-slate-950 font-bold bg-cyan-400 shadow-sm' 
                    : 'text-slate-400 hover:text-white bg-[#12151c] border border-white/[0.08]'
                }`}
              >
                <span>{filter} [{count}]</span>
              </button>
            );
          })}
        </div>

        {/* Flagship Editorial Patent Showcase (Asymmetrical List/Grid) */}
        <div className="space-y-8 sm:space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredPatents.map((patent, index) => (
              <motion.article
                key={patent.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-white/[0.1] bg-[#0d1017] overflow-hidden shadow-2xl transition-all hover:border-cyan-500/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left Column: Official Document & Certificate Illustration (5 cols on desktop) */}
                  <div 
                    className="lg:col-span-5 bg-[#06080d] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] relative group cursor-pointer"
                    onClick={() => setSelectedPatent(patent)}
                  >
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                      <span className="px-2.5 py-1 rounded bg-[#141822] border border-white/10 uppercase tracking-wider text-slate-300">
                        {patent.country}
                      </span>
                      <span className="text-cyan-400 font-semibold uppercase tracking-wider">
                        {patent.status}
                      </span>
                    </div>

                    {/* Certificate Thumbnail Preview */}
                    <div className="relative my-auto py-4 flex items-center justify-center">
                      <img
                        src={patent.certificateImage}
                        alt={`Official filing for ${patent.title}`}
                        className="max-h-56 sm:max-h-64 w-auto object-contain rounded border border-white/10 filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                        <span className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                          <Eye className="w-4 h-4" />
                          <span>Inspect Filing</span>
                        </span>
                      </div>
                    </div>

                    {/* Bottom Registration Reference */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500">
                      <span className="font-bold text-slate-300">{patent.number}</span>
                      <span>Grant: {patent.grantDate}</span>
                    </div>
                  </div>

                  {/* Right Column: In-Depth Engineering Narrative & Contributions (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Classification & Office Header */}
                      <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                        {patent.office} &bull; {patent.classification}
                      </div>

                      {/* Official Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display tracking-tight leading-snug">
                        {patent.title}
                      </h3>

                      {/* Core Problem Addressed */}
                      <div className="mt-5 space-y-3">
                        <div className="p-3.5 rounded-lg bg-[#11141e] border border-white/[0.06]">
                          <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 font-semibold">
                            Critical Problem Addressed
                          </span>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {patent.significance}
                          </p>
                        </div>

                        {/* Technical Architecture */}
                        <div className="p-3.5 rounded-lg bg-[#11141e] border border-white/[0.06]">
                          <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 font-semibold">
                            Technical Innovation &amp; Architecture
                          </span>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {patent.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-slate-500">Inventor:</span>
                        <span className="text-white font-semibold">{patent.inventor}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedPatent(patent)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#161b26] hover:bg-[#1f2636] border border-white/10 text-cyan-300 hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Detailed Dossier</span>
                        </button>

                        {patent.documentUrl ? (
                          <a
                            href={patent.documentUrl}
                            download
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedPatent(patent)}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 border border-cyan-500/30 font-semibold transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Record</span>
                          </button>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Sovereign Patent Inspector Modal */}
      <AnimatePresence>
        {selectedPatent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#06080d]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#0e1219] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col font-sans"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#0a0c10]">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold uppercase">
                    {selectedPatent.country}
                  </span>
                  <span className="text-slate-400 font-bold">{selectedPatent.number}</span>
                </div>
                <button
                  onClick={() => setSelectedPatent(null)}
                  aria-label="Close Inspection Modal"
                  className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Certificate Showcase */}
                <div className="bg-[#06080d] border border-white/10 rounded-xl p-6 flex justify-center">
                  <img
                    src={selectedPatent.certificateImage}
                    alt={selectedPatent.title}
                    className="max-h-96 w-auto object-contain rounded filter contrast-[1.03]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {selectedPatent.title}
                  </h3>
                  <p className="mt-1 text-xs text-cyan-400 font-mono">
                    {selectedPatent.office} &bull; {selectedPatent.classification}
                  </p>
                </div>

                {/* Metadata Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-500 uppercase text-[10px]">Registration / Grant</span>
                    <span className="text-slate-200 mt-0.5 block">{selectedPatent.grantDate || selectedPatent.registrationDate}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-500 uppercase text-[10px]">Sovereign Status</span>
                    <span className="text-cyan-400 font-semibold mt-0.5 block">{selectedPatent.status}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-500 uppercase text-[10px]">Jurisdiction</span>
                    <span className="text-slate-200 mt-0.5 block">{selectedPatent.country}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-500 uppercase text-[10px]">Primary Inventor</span>
                    <span className="text-slate-200 mt-0.5 block">{selectedPatent.inventor}</span>
                  </div>
                </div>

                {/* Technical Breakdowns */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10">
                    <strong className="text-white block font-display mb-1">Societal Problem Addressed:</strong>
                    <p className="text-slate-300">{selectedPatent.significance}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10">
                    <strong className="text-white block font-display mb-1">Innovation &amp; Technical Architecture:</strong>
                    <p className="text-slate-300">{selectedPatent.summary}</p>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-white/10 flex justify-end gap-3 bg-[#0a0c10]">
                {selectedPatent.documentUrl ? (
                  <a
                    href={selectedPatent.documentUrl}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-mono font-bold hover:bg-cyan-300 transition-colors uppercase tracking-wider"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF Document</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] text-slate-400 border border-white/10 text-xs font-mono">
                    Official Sovereign Dossier on Record
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
