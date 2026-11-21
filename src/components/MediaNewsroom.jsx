import React, { useState, useMemo } from 'react';
import newsArticles from '../data/newsArticles.json';
import { 
  Newspaper, 
  Search, 
  ExternalLink, 
  Download, 
  FileCheck2, 
  Globe2, 
  Eye, 
  Share2,
  TrendingUp,
  Building2,
  Sparkles
} from 'lucide-react';

export default function MediaNewsroom() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [visibleCount, setVisibleCount] = useState(18);

  // Region aggregation
  const regions = useMemo(() => {
    const list = ['All', 'National / Pan-India', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh'];
    return list;
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
    <section id="media" className="py-20 bg-[#080a0f] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            National Media &amp; Pressroom Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            207+ Press Features Across India
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Leading national dailies, regional media networks, and technology journals covered Nethra&apos;s transformative journey from a government school classroom to launching Annexra Technologies at 16.
          </p>
        </div>

        {/* PR Campaign Highlights Card */}
        <div className="mb-12 rounded-2xl bg-[#0e121a] border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono font-medium text-slate-300">
                Official Press Release &bull; 24 February 2026
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                &ldquo;From Government School to Startup Founder at 16: The Inspiring Journey of Nethra D&rdquo;
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Featured across 207 verified news wire services, regional publications, and state portals nationwide, reaching a combined potential audience in excess of 2.3 Million readers.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">207</span>
                  <span className="text-[11px] text-slate-400 font-medium">Verified Publishers</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">2.3M+</span>
                  <span className="text-[11px] text-slate-400 font-medium">Potential Reach</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">28+</span>
                  <span className="text-[11px] text-slate-400 font-medium">States &amp; UTs</span>
                </div>
              </div>

              {/* Download PR Dossier Action */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/documents/Nethra-D-Inspiring-Journey-Media-Report.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Full 17-Page Media Dossier (PDF)
                </a>
              </div>
            </div>

            {/* Right: Media Clipping Visual Previews (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/5] relative group">
                <img
                  src="/assets/news-tamil-daily-feature.jpeg"
                  alt="Tamil Daily Newspaper coverage of Nethra D"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-slate-950/90 text-[10px] text-slate-300 border-t border-slate-800">
                  Regional Print Daily Feature
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/5] relative group">
                <img
                  src="/certificates/pr-media-coverage-report.png"
                  alt="PR Release Report 207 Publishers"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-slate-950/90 text-[10px] text-slate-300 border-t border-slate-800">
                  National Release Dossier
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Search Bar & Region Filters */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(18);
              }}
              placeholder="Search across 207 outlets (e.g. Karnataka, Kerala, Forbes, Wire, Daily)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0e121a] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/80 transition-colors"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  setVisibleCount(18);
                }}
                className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedRegion === region
                    ? 'bg-slate-200 text-slate-950 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>Showing <strong className="text-white">{displayedArticles.length}</strong> of <strong className="text-white">{filteredArticles.length}</strong> publications</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-emerald-400 hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Interactive Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 rounded-xl bg-[#0e121a] border border-slate-800/80 hover:border-slate-700 hover:bg-[#121722] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Outlet name & Region Tag */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-xs shrink-0 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                      {article.id}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                        {article.outlet}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono block">
                        {article.domain}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 border border-slate-800 text-slate-300 shrink-0">
                    {article.region}
                  </span>
                </div>

                {/* Article Title */}
                <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {article.title}
                </p>
              </div>

              {/* Card Bottom CTA */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {article.date}
                </span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:underline"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredArticles.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs sm:text-sm font-semibold transition-all hover:border-slate-600 shadow-sm"
            >
              Load More Publications ({filteredArticles.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
