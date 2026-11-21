import React, { useState } from 'react';
import { patentsData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  ExternalLink, 
  Eye, 
  X, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Building,
  Calendar,
  UserCheck
} from 'lucide-react';

export default function PatentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPatent, setSelectedPatent] = useState(null);

  const filters = ['All', 'United Kingdom', 'Canada', 'India', 'Germany'];

  const filteredPatents = activeFilter === 'All'
    ? patentsData
    : patentsData.filter(p => p.country === activeFilter);

  return (
    <section id="patents" className="py-20 bg-[#0a0d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Intellectual Property Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Patented Inventions &amp; Innovation Portfolio
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            A portfolio of seven groundbreaking inventions engineered and patented across the United Kingdom, Canada, India, and Germany—spanning predictive energy AI, clinical oncology platforms, rural smart irrigation, and assistive wearables.
          </p>
        </div>

        {/* Country Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => {
            const count = filter === 'All' 
              ? patentsData.length 
              : patentsData.filter(p => p.country === filter).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
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

        {/* Patents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatents.map((patent) => (
            <div
              key={patent.id}
              className="rounded-xl bg-[#0f141f] border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md"
            >
              {/* Card Header & Certificate Thumbnail Preview */}
              <div>
                {/* Certificate Preview Top Thumbnail */}
                <div 
                  className="relative h-44 bg-slate-950 border-b border-slate-800/80 overflow-hidden cursor-pointer group/img"
                  onClick={() => setSelectedPatent(patent)}
                >
                  <img
                    src={patent.certificateImage}
                    alt={patent.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover/img:scale-[1.03] transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-700 flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      View Official Certificate
                    </span>
                  </div>

                  {/* Top Flag & Jurisdiction Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <span>{patent.flag}</span>
                    <span>{patent.country}</span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 bg-emerald-500/90 text-slate-950 px-2 py-0.5 rounded text-[11px] font-bold tracking-tight">
                    {patent.status}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Patent Identifier & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span className="text-emerald-400 font-semibold">{patent.number}</span>
                    <span>{patent.grantDate}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white leading-snug tracking-tight font-display group-hover:text-emerald-300 transition-colors">
                    {patent.title}
                  </h3>

                  {/* Office & Authority */}
                  <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                    <Building className="w-3 h-3 text-slate-500 shrink-0" />
                    <span className="truncate">{patent.office}</span>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {patent.summary}
                  </p>

                  {/* Classification tag */}
                  <div className="mt-3.5 p-2 rounded-md bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-400">
                    <span className="text-slate-500 font-medium block text-[10px] uppercase">Classification / Reg</span>
                    <span className="text-slate-300 font-mono text-[11px] line-clamp-1">{patent.classification}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-4 flex items-center gap-2">
                <button
                  onClick={() => setSelectedPatent(patent)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  Inspect Grant
                </button>

                {patent.documentUrl && (
                  <a
                    href={patent.documentUrl}
                    download
                    className="inline-flex items-center justify-center p-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                    title="Download Official Certificate PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Official Certificate Inspection Modal */}
      {selectedPatent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#0e121a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedPatent.flag}</span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {selectedPatent.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                    <span className="font-semibold text-emerald-400 font-mono">{selectedPatent.number}</span>
                    <span>&bull;</span>
                    <span>{selectedPatent.office}</span>
                    <span>&bull;</span>
                    <span>Granted: {selectedPatent.grantDate}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPatent(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Detailed Breakdown Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-500 font-semibold uppercase text-[10px] block">Inventor / Proprietor</span>
                  <span className="text-slate-200 font-semibold mt-1 block">{selectedPatent.inventor}</span>
                  <span className="text-slate-400 text-[11px]">GHSS Periyavadangampatti, Salem</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-500 font-semibold uppercase text-[10px] block">Registration Status</span>
                  <span className="text-emerald-400 font-semibold mt-1 block">{selectedPatent.status}</span>
                  <span className="text-slate-400 text-[11px]">Reg: {selectedPatent.registrationDate}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <span className="text-slate-500 font-semibold uppercase text-[10px] block">Jurisdiction</span>
                  <span className="text-slate-200 font-semibold mt-1 block">{selectedPatent.country}</span>
                  <span className="text-slate-400 text-[11px] truncate block">{selectedPatent.classification}</span>
                </div>
              </div>

              {/* Technical Significance */}
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800/80 space-y-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Technical Architecture &amp; Real-World Impact
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedPatent.summary}
                </p>
                <p className="text-xs sm:text-sm text-emerald-300/90 leading-relaxed pt-1">
                  <span className="font-semibold text-emerald-400">Core Significance: </span>
                  {selectedPatent.significance}
                </p>
              </div>

              {/* High-Resolution Certificate Document Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Official Registered Certificate Document
                  </span>
                  {selectedPatent.documentUrl && (
                    <a
                      href={selectedPatent.documentUrl}
                      download
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Original PDF
                    </a>
                  )}
                </div>
                
                <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                  <img
                    src={selectedPatent.certificateImage}
                    alt={`${selectedPatent.title} Certificate`}
                    className="max-h-[500px] w-auto object-contain rounded"
                  />
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Issued in accordance with sovereign statutory intellectual property provisions.
              </span>
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
