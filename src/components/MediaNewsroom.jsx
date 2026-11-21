import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newsArticles from '../data/newsArticles.json';
import { Newspaper, Search, ExternalLink, Download } from 'lucide-react';
import WheelPagination from '@/components/ui/wheel-pagination';

export default function MediaNewsroom() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const regions = useMemo(() => {
    return ['All', 'National / Pan-India', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Maharashtra'];
  }, []);

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesSearch = 
        article.outlet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.headline && article.headline.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRegion = 
        selectedRegion === 'All' ? true : article.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, selectedRegion]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  const displayedArticles = useMemo(() => {
    const start = currentPage * pageSize;
    return filteredArticles.slice(start, start + pageSize);
  }, [filteredArticles, currentPage, pageSize]);

  return (
    <section id="media" className="py-16 sm:py-20 bg-[#090b10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#2f6bff] uppercase mb-2">
              National Press Record &bull; 207+ Verified Outlets
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Media Dossier &amp; Press Index
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Profiled across 207+ national and regional news publications across all 28 Indian States &amp; Union Territories with an estimated total readership exceeding 2.3 Million.
            </p>
          </div>

          <a
            href="/documents/Nethra-D-Inspiring-Journey-Media-Report.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white text-xs font-mono font-bold tracking-wider transition-all uppercase self-start md:self-end shadow-sm active:scale-98"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PR Report (PDF)</span>
          </a>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none font-mono text-xs">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-colors uppercase tracking-wider text-xs ${
                  selectedRegion === region
                    ? 'bg-[#2f6bff] text-white font-bold shadow-sm'
                    : 'bg-[#12151c] border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72 font-mono">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by outlet or keyword..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#12151c] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#2f6bff]"
            >
            </input>
          </div>
        </div>

        {/* Directory Ledger Table */}
        <div className="rounded-xl border border-white/10 bg-[#0d1017] overflow-hidden shadow-xl">
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 border-b border-white/10 bg-[#090c12] text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Publication Outlet</div>
            <div className="col-span-5">Feature Headline / Story</div>
            <div className="col-span-2">Territory</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          <div className="divide-y divide-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage + selectedRegion + searchQuery}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {displayedArticles.map((article, idx) => {
                  const globalIndex = currentPage * pageSize + idx + 1;
                  return (
                    <div
                      key={article.id || `${currentPage}-${idx}`}
                      className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-4 sm:px-5 py-3.5 hover:bg-white/[0.02] transition-colors items-center text-xs"
                    >
                      <div className="col-span-1 font-mono text-[#2f6bff] text-[11px] font-semibold">
                        #{article.rank || globalIndex}
                      </div>

                      <div className="col-span-3">
                        <span className="font-bold text-white font-display block">{article.outlet}</span>
                        <span className="text-[11px] font-mono text-slate-400">{article.domain}</span>
                      </div>

                      <div className="col-span-5 text-slate-300 font-normal leading-snug">
                        {article.headline || article.title || "Special Feature: Nethra Neha DS Journey from Salem to Deep-Tech Enterprise"}
                      </div>

                      <div className="col-span-2">
                        <span className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                          {article.region}
                        </span>
                      </div>

                      <div className="col-span-1 text-right">
                        <a
                          href={`https://${article.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#2f6bff] hover:text-white font-mono text-xs font-semibold underline underline-offset-2"
                        >
                          <span>Read</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Wheel Pagination Integration with Lazy Page Splitting */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            Showing <strong className="text-white">{currentPage * pageSize + 1}</strong> &ndash;{' '}
            <strong className="text-white">
              {Math.min((currentPage + 1) * pageSize, filteredArticles.length)}
            </strong> of <strong className="text-white">{filteredArticles.length}</strong> outlets
            (Page {currentPage + 1} of {totalPages})
          </div>

          <div className="flex items-center justify-center">
            <WheelPagination
              totalPages={totalPages}
              visibleCount={5}
              currentPage={currentPage}
              onChange={(page) => setCurrentPage(page)}
              className="bg-[#0e121a] border border-white/10 rounded-2xl shadow-xl py-2 px-3"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
