import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '../data/portfolioData';
import { Compass, Quote, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(storyData.milestones[4]); // default to 2026 Annexra

  return (
    <section id="journey" className="py-14 sm:py-20 bg-[#0a0d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5" />
            Biographical Journey
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {storyData.title}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-emerald-400 font-medium">
            {storyData.subtitle}
          </p>
        </div>

        {/* Narrative & Visual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Story with Interactive Read More Expander (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
            
            {/* Lead 2 paragraphs (always visible) */}
            <p className="font-normal text-slate-200 text-sm sm:text-base leading-relaxed">
              {storyData.paragraphs[0]}
            </p>
            <p>
              {storyData.paragraphs[1]}
            </p>

            {/* Expandable Remainder Paragraphs */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3.5 overflow-hidden pt-1"
                >
                  <p>{storyData.paragraphs[2]}</p>
                  <p>{storyData.paragraphs[3]}</p>
                  <p>{storyData.paragraphs[4]}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Collapse Toggle Button */}
            <div className="pt-1">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 active:scale-98 transition-all px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
              >
                {expanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    <span>Show Summary View</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    <span>Read Full 5-Part Narrative</span>
                  </>
                )}
              </button>
            </div>

            {/* Founder Quote Callout */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border-l-4 border-emerald-500 border-r border-y border-slate-800">
              <Quote className="w-5 h-5 text-emerald-400 mb-1 opacity-70" />
              <blockquote className="text-sm sm:text-base font-medium text-white italic">
                &ldquo;{storyData.quote}&rdquo;
              </blockquote>
              <div className="mt-1.5 text-xs font-semibold text-emerald-400">
                — Nethra Neha DS, Founder &amp; CEO, Annexra Technologies
              </div>
            </div>

          </div>

          {/* Right Column: News Graphic in Exact Square 1179x1177 Aspect Ratio (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0e121a] p-3.5 shadow-lg">
              
              {/* Exact aspect ratio 1179 / 1177 */}
              <div 
                className="w-full rounded-lg overflow-hidden bg-slate-950 mb-2.5 border border-slate-800 flex items-center justify-center"
                style={{ aspectRatio: '1179 / 1177' }}
              >
                <img
                  src="/assets/news-just-now-salem.jpeg"
                  alt="Just Now Salem news coverage of Nethra D"
                  className="w-full h-full object-contain filter brightness-95"
                  style={{ aspectRatio: '1179 / 1177' }}
                />
              </div>

              <div className="text-xs font-bold text-white">Local Salem Recognition to National Headlines</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                From Salem district science honors to nationwide press syndication.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Annexra Technologies Directive</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Registered in January 2026 to convert grassroots research in precision medicine, soil chemistry, and IoT into scalable enterprise products.
              </p>
            </div>
          </div>

        </div>

        {/* Compact Interactive Timeline (Tabbed by Year to eliminate multi-row doom scrolling) */}
        <div className="pt-6 border-t border-slate-800">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-4 font-display text-center">
            Key Growth Milestones (2020 – 2026)
          </h3>

          {/* Interactive Year Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-1 scrollbar-none">
            {storyData.milestones.map((m) => {
              const isSelected = selectedMilestone.year === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Selected Milestone Spotlight Card */}
          <motion.div
            key={selectedMilestone.year}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto p-4 sm:p-5 rounded-xl bg-[#0e121a] border border-slate-800 text-center"
          >
            <div className="inline-block text-xs font-mono font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 mb-2">
              Year {selectedMilestone.year}
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">
              {selectedMilestone.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              {selectedMilestone.desc}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
