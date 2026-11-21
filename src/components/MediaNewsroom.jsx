import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newsArticles from '../data/newsArticles.json';
import { Newspaper, Search, ExternalLink, Download, ChevronDown, Building } from 'lucide-react';

export default function MediaNewsroom() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const regions = useMemo(() => {
    return ['All', 'National / Pan-India', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Maharashtra'];
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
    <section id="media" className="py-24 sm:py-32 bg-[#090b10] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              <Newspaper className="w-4 h-4 text-cyan-400" />
              <span>05 // National Press Record &bull; 207+ Verified Outlets</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.04] font-display">
              Media Dossier &amp; Newsroom
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Profiled across 207+ national and regional news publications across all 28 Indian States &amp; Union Territories with an estimated total readership exceeding 2.3 Million.
            </p>
          </div>

          <a
            href="/documents/Nethra-D-Inspiring-Journey-Media-Report.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-mono font-bold tracking-wider transition-all uppercase self-start md:self-end shadow-md active:scale-98"
          >
            <Download className="w-4 h-4" />
            <span>Download PR Report (PDF)</span>
          </a>
        </div>

        {/* Featured Newspaper Clippings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { img: '/assets/news-tamil-daily-feature.jpeg', title: 'Tamil Daily Full Feature', sub: 'Salem District Edition' },
            { img: '/assets/news-just-now-salem.jpeg', title: 'Just Now Salem Breaking', sub: 'Youth Innovation Coverage' },
            { img: '/assets/publication-record.jpeg', title: 'Official Press Dossier', sub: '207+ Publications Documented' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[#0d1017] border border-white/[0.08] hover:border-cyan-500/30 transition-all shadow-xl"
            >
              <div className="h-56 overflow-hidden bg-[#06080d] flex items-center justify-center p-2">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded filter contrast-[1.02]"
                />
              </div>
              <div className="p-4 border-t border-white/[0.08]">
                <div className="text-sm font-bold text-white font-display">
                  {item.title}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Region Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none font-mono text-xs">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-colors uppercase tracking-wider ${
                  selectedRegion === region
                    ? 'bg-cyan-400 text-slate-950 font-bold'
                    : 'bg-[#12151c] border border-white/[0.08] text-slate-400 hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72 font-mono">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search outlet or domain..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#12151c] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Filtered Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedArticles.map((article, idx) => (
              <motion.div
                key={article.id || idx}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="p-5 rounded-xl bg-[#0d1017] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span className="text-cyan-400 font-bold">{article.region}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-display leading-snug">
                    {article.headline || article.outlet}
                  </h3>

                  <div className="mt-2 text-xs font-mono text-slate-400 flex items-center gap-1.5 truncate">
                    <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{article.outlet} ({article.domain})</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 text-[11px]">Rank: #{article.rank || idx + 1}</span>
                  <a
                    href={`https://${article.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Visit Domain</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredArticles.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#12151c] border border-white/10 hover:border-white/20 text-xs font-mono text-slate-200 transition-all uppercase tracking-wider"
            >
              <span>LOAD MORE ARTICLES ({filteredArticles.length - visibleCount} REMAINING)</span>
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
