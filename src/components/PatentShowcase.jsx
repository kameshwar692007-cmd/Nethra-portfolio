import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { patentsData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Download, 
  Eye, 
  X, 
  ChevronDown, 
  ChevronUp, 
  FileCheck2 
} from 'lucide-react';
import HorizontalPatentGallery from './quarry/HorizontalPatentGallery';

export default function PatentShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPatent, setSelectedPatent] = useState(null);

  // Show only 2 featured patents initially
  const initialPatents = patentsData.slice(0, 2);
  const remainingPatents = patentsData.slice(2);

  return (
    <section id="patents" className="scroll-mt-20 py-16 sm:py-20 bg-[#090b10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#2f6bff] uppercase mb-2">
              Sovereign Intellectual Property &bull; 07 Registered Inventions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Patents &amp; Hardware Innovations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              7 multi-national registrations across the UK IPO, CIPO Canada, and IP India engineered for real-world failures in electrical loss, clinical oncology, and rural water conservation.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-[#12151c] border border-white/10 text-slate-300">
              <strong className="text-[#2f6bff]">07</strong> Registered
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#12151c] border border-white/10 text-slate-300">
              <strong className="text-[#2f6bff]">04</strong> Jurisdictions
            </span>
          </div>
        </div>

        {/* FLAGSHIP INTERACTIVE HORIZONTAL SCROLL ARCHIVE (QUARRY UI) */}
        <div className="mb-12">
          <HorizontalPatentGallery />
        </div>

        {/* BENTO BOX GRID — TOP 2 FEATURED PATENTS (SOLID STYLING) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          
          {/* Bento Card 1: Flagship (7 cols) */}
          {initialPatents[0] && (
            <div className="lg:col-span-7 rounded-xl bg-[#0d1017] border border-white/10 p-6 sm:p-7 flex flex-col justify-between transition-colors shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white font-semibold uppercase text-[11px]">
                      {initialPatents[0].country}
                    </span>
                    <span className="text-slate-400">{initialPatents[0].number}</span>
                  </div>
                  <span className="text-slate-300 font-medium text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <FileCheck2 className="w-3.5 h-3.5 text-slate-400" />
                    {initialPatents[0].status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight leading-snug">
                  {initialPatents[0].title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {initialPatents[0].summary}
                </p>

                {/* Plain, Solid Narrative Field Without Nested Boxes */}
                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block font-display mb-1 text-[11px] uppercase tracking-wider">
                    Significance &bull; Real-World Solution:
                  </strong>
                  <p className="text-slate-400 text-xs font-normal">
                    {initialPatents[0].significance}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions — Solid Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3 font-mono text-xs">
                <span className="text-slate-400 text-[11px]">Grant: {initialPatents[0].grantDate}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPatent(initialPatents[0])}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#161a24] hover:bg-[#1f2432] border border-white/10 text-white text-xs font-medium transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>
                  {initialPatents[0].documentUrl && (
                    <a
                      href={initialPatents[0].documentUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Bento Card 2: Companion Feature with Certificate Preview (5 cols) */}
          {initialPatents[1] && (
            <div className="lg:col-span-5 rounded-xl bg-[#0d1017] border border-white/10 p-6 flex flex-col justify-between transition-colors shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white font-semibold uppercase text-[11px]">
                      {initialPatents[1].country}
                    </span>
                    <span className="text-slate-400">{initialPatents[1].number}</span>
                  </div>
                  <span className="text-slate-300 font-medium text-[11px] uppercase tracking-wider">
                    {initialPatents[1].status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight leading-snug">
                  {initialPatents[1].title}
                </h3>

                {/* Certificate Thumbnail Preview */}
                <div 
                  onClick={() => setSelectedPatent(initialPatents[1])}
                  className="my-3 rounded-lg overflow-hidden bg-[#06080d] border border-white/10 p-2.5 flex items-center justify-center cursor-pointer hover:border-white/20 transition-colors"
                >
                  <img
                    src={initialPatents[1].certificateImage}
                    alt={initialPatents[1].title}
                    className="h-32 w-auto object-contain rounded filter contrast-[1.02]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                    }}
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {initialPatents[1].summary}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-xs">
                <span className="text-slate-400 text-[11px]">Grant: {initialPatents[1].grantDate}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPatent(initialPatents[1])}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#161a24] hover:bg-[#1f2432] border border-white/10 text-white text-xs transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>
                  {initialPatents[1].documentUrl && (
                    <a
                      href={initialPatents[1].documentUrl}
                      download
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* EXPANDABLE REMAINING 5 PATENTS (SOLID STYLING) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2 pb-5">
                {remainingPatents.map((patent) => (
                  <div
                    key={patent.id}
                    className="rounded-xl bg-[#0d1017] border border-white/10 p-5 flex flex-col justify-between transition-colors shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                        <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white text-[11px] font-semibold uppercase">
                          {patent.country}
                        </span>
                        <span className="text-slate-400 text-[11px]">{patent.number}</span>
                      </div>

                      <h4 className="text-base font-bold text-white font-display leading-snug">
                        {patent.title}
                      </h4>

                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {patent.summary}
                      </p>

                      <div className="mt-3 text-[11px] font-mono text-slate-300 pt-2 border-t border-white/5">
                        Status: <strong className="text-white">{patent.status}</strong>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-xs">
                      <button
                        onClick={() => setSelectedPatent(patent)}
                        className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-xs font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>

                      {patent.documentUrl ? (
                        <a
                          href={patent.documentUrl}
                          download
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </a>
                      ) : (
                        <span className="text-[10px] text-slate-400 font-mono">Framework Record</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SHOW MORE / COLLAPSE ACTION BUTTON — SOLID BUTTON */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#141822] hover:bg-[#1a202d] border border-white/15 text-xs font-mono font-bold text-white uppercase tracking-wider transition-all shadow-sm active:scale-98"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 text-white" />
                <span>Show Less (Featured 2 Only)</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-white" />
                <span>View All Patents ({patentsData.length} Sovereign Inventions)</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Interactive Sovereign Patent Inspector Modal */}
      <AnimatePresence>
        {selectedPatent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-[#0e1219] border border-white/20 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col font-sans"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#0a0c10]">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white font-bold uppercase">
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
                <div className="bg-[#06080d] border border-white/10 rounded-lg p-6 flex justify-center">
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
                  <p className="mt-1 text-xs text-slate-400 font-mono">
                    {selectedPatent.office} &bull; {selectedPatent.classification}
                  </p>
                </div>

                {/* Metadata Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-400 uppercase text-[10px]">Registration / Grant</span>
                    <span className="text-slate-200 mt-0.5 block">{selectedPatent.grantDate || selectedPatent.registrationDate}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-400 uppercase text-[10px]">Sovereign Status</span>
                    <span className="text-white font-semibold mt-0.5 block">{selectedPatent.status}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-400 uppercase text-[10px]">Jurisdiction</span>
                    <span className="text-slate-200 mt-0.5 block">{selectedPatent.country}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121620] border border-white/10">
                    <span className="block text-slate-400 uppercase text-[10px]">Primary Inventor</span>
                    <span className="text-slate-200 mt-0.5 block">{selectedPatent.inventor}</span>
                  </div>
                </div>

                {/* Technical Breakdowns */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <div className="p-4 rounded-lg bg-[#121620] border border-white/10">
                    <strong className="text-white block font-display mb-1">Societal Problem Addressed:</strong>
                    <p className="text-slate-300">{selectedPatent.significance}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121620] border border-white/10">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white text-xs font-mono font-bold transition-colors uppercase tracking-wider shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF Document</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-slate-400 border border-white/10 text-xs font-mono">
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
