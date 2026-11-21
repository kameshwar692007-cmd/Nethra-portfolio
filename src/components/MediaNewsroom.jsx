import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newsArticles from '../data/newsArticles.json';
import { 
  Newspaper, 
  Search, 
  ExternalLink, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  X,
  FileCheck2,
  Globe2
} from 'lucide-react';

export default function MediaNewsroom() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = useMemo(() => {
    return ['All', 'National / Pan-India', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh'];
  }, []);

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesSearch = 
        article.outlet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.region.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion = 
        selectedRegion === 'All' ? true : article.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <section id="media" className="py-14 sm:py-20 bg-[#0d1322] border-b border-[#202c44] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 shadow-sm">
            <Newspaper className="w-3.5 h-3.5 text-emerald-400" />
            National Press &amp; Verified Media
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            207+ Press Features Across India
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Featured across leading national dailies, state media networks, and technology publications celebrating Nethra&apos;s innovations from a Salem government school.
          </p>
        </div>

        {/* PR Campaign Highlights Card with Visible Boundaries & Exact Natural Image Ratios */}
        <div className="mb-8 rounded-2xl bg-[#141d30] border-2 border-[#23304a] p-5 sm:p-7 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold">
                  OFFICIAL NATIONAL CAMPAIGN &bull; 24 FEB 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug font-display">
                &ldquo;From Government School to Startup Founder at 16: The Inspiring Journey of Nethra D&rdquo;
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Syndicated coverage across 207 verified news outlets with a combined reach exceeding 2.3 Million readers across 28+ states and union territories.
              </p>

              {/* Numerical Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#0c1322] border border-[#1e2a42] text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">207</span>
                  <span className="text-[11px] text-slate-300 font-medium">Publishers</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0c1322] border border-[#1e2a42] text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">2.3M+</span>
                  <span className="text-[11px] text-slate-300 font-medium">Audience</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0c1322] border border-[#1e2a42] text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">28+</span>
                  <span className="text-[11px] text-slate-300 font-medium">States</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:scale-98 text-slate-950 text-xs font-bold transition-all shadow-[0_2px_10px_rgba(16,185,129,0.25)]"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search All 207 Articles</span>
                </button>

                <a
                  href="/documents/Nethra-D-Inspiring-Journey-Media-Report.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#162035] hover:bg-[#1d2a45] border border-[#2a3a5a] active:scale-98 text-slate-200 text-xs font-semibold transition-all hover:border-emerald-500/50"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>17-Page Media Dossier (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Preserved Intrinsic Ratios (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 items-center">
              {/* Exact ratio for Tamil daily: 1484 / 1600 */}
              <div 
                className="rounded-xl overflow-hidden border-2 border-[#263552] bg-[#0c1322] p-2 flex flex-col justify-between shadow-md"
                style={{ aspectRatio: '1484 / 1600' }}
              >
                <img
                  src="/assets/news-tamil-daily-feature.jpeg"
                  alt="Tamil Daily Newspaper coverage of Nethra D"
                  className="w-full h-full object-contain filter brightness-95 rounded"
                  style={{ aspectRatio: '1484 / 1600' }}
                />
                <span className="text-[10px] text-emerald-400 font-mono font-medium text-center block mt-1">Regional Print Daily</span>
              </div>

              {/* Exact ratio for PR report cover: 1488 / 2105 */}
              <div 
                className="rounded-xl overflow-hidden border-2 border-[#263552] bg-[#0c1322] p-2 flex flex-col justify-between shadow-md"
                style={{ aspectRatio: '1488 / 2105' }}
              >
                <img
                  src="/certificates/pr-media-coverage-report.png"
                  alt="PR Release Report 207 Publishers"
                  className="w-full h-full object-contain filter brightness-95 rounded"
                  style={{ aspectRatio: '1488 / 2105' }}
                />
                <span className="text-[10px] text-emerald-400 font-mono font-medium text-center block mt-1">National Media Dossier</span>
              </div>
            </div>

          </div>
        </div>

        {/* Compact In-Page News Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified Publications ({displayedArticles.length} of {newsArticles.length})
            </h4>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-mono"
            >
              <span>Explore All 207 Outlets</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                className="p-4 rounded-xl bg-[#141d30] border-2 border-[#23304a] hover:border-emerald-500/40 transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-white line-clamp-1 font-display">{article.outlet}</span>
                    <span className="text-[10px] text-emerald-300 font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 shrink-0">
                      {article.region}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {article.title}
                  </p>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-[#202c44] flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono truncate max-w-[130px]">{article.domain}</span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Compact View More / Show Less Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {visibleCount < 18 ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1a253d] border-2 border-[#263552] hover:border-emerald-500/40 text-xs font-bold text-white active:scale-98 transition-all shadow-sm"
              >
                <ChevronDown className="w-4 h-4 text-emerald-400" />
                <span>Show Next 6 Articles</span>
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(6)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1a253d] border-2 border-[#263552] hover:border-emerald-500/40 text-xs font-bold text-white active:scale-98 transition-all shadow-sm"
              >
                <ChevronUp className="w-4 h-4 text-emerald-400" />
                <span>Collapse to Top 6</span>
              </button>
            )}

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/60 border-2 border-emerald-500/40 text-xs font-bold text-emerald-300 active:scale-98 transition-all shadow-sm"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Complete Searchable Directory (207 Articles)</span>
            </button>
          </div>
        </div>

      </div>

      {/* Full-Screen Searchable Directory Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#090d16]/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#111827] border-2 border-[#2a3a5a] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-[#202c44] flex items-center justify-between bg-[#0e1526]">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight font-display">
                  National Press Coverage &bull; 207 Verified Outlets
                </h3>
                <p className="text-xs text-slate-300 font-sans">
                  Explore coverage across all 28 states and union territories.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1a253d] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Search & Filter Controls */}
            <div className="p-4 border-b border-[#202c44] bg-[#0c1322] space-y-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search outlets (e.g. Karnataka, Kerala, Forbes, Wire, Tamil Nadu, Express)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141d30] border-2 border-[#23304a] text-slate-100 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedRegion === region
                        ? 'bg-emerald-400 text-slate-950 font-bold'
                        : 'bg-[#141d30] text-slate-300 hover:bg-[#1a253d] border border-[#23304a]'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Scrollable Articles List */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-2.5 max-h-[55vh]">
              <div className="text-xs text-slate-300 font-mono mb-2 flex items-center justify-between">
                <span>Found <strong className="text-emerald-400">{filteredArticles.length}</strong> matching publications</span>
                <span className="text-[11px] text-slate-400">Press Release: 24 Feb 2026</span>
              </div>

              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-3 rounded-xl bg-[#141d30] border border-[#23304a] hover:border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-[#0c1322] border border-[#1e2a42] text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {article.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white font-display">{article.outlet}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">{article.domain}</span>
                      </div>
                      <span className="text-[11px] text-slate-300 block line-clamp-1">{article.title}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                    <span className="px-2 py-0.5 rounded-md bg-[#0c1322] border border-[#1e2a42] text-[10px] text-slate-300 font-mono">
                      {article.region}
                    </span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Read</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-[#202c44] bg-[#0e1526] flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">Total Reach: 2.3M+ Potential Audience</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#141d30] hover:bg-[#1a253d] text-white border border-[#23304a]"
              >
                Close Directory
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
