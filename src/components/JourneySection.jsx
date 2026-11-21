import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '../data/portfolioData';
import { Compass, Quote, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(storyData.milestones[4]); // default to 2026 Annexra

  return (
    <section id="journey" className="py-14 sm:py-20 bg-[#0b0f19] border-b border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064e3b] border border-[#059669] text-[#a7f3d0] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-[#34d399]" />
            Biographical Journey &amp; Origin Story
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {storyData.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#34d399] font-mono font-bold">
            {storyData.subtitle}
          </p>
        </div>

        {/* Narrative & Visual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10">
          
          {/* Left Column: Story (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
            
            {/* Lead 2 paragraphs */}
            <div className="p-6 rounded-2xl bg-[#121a2d] border border-[#263654] border-t-4 border-t-[#059669] shadow-md space-y-3.5">
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                {storyData.paragraphs[0]}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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
                    className="space-y-3.5 overflow-hidden pt-3 border-t border-[#202c44]"
                  >
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{storyData.paragraphs[2]}</p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{storyData.paragraphs[3]}</p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{storyData.paragraphs[4]}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Read More / Collapse Toggle Button */}
              <div className="pt-2">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white active:scale-98 transition-all px-4 py-2 rounded-xl bg-[#064e3b] hover:bg-[#065f46] border border-[#059669] shadow-sm"
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 text-[#34d399]" />
                      <span>Show Summary View</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 text-[#34d399]" />
                      <span>Read Complete 5-Part Narrative</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Founder Quote Callout */}
            <div className="p-6 rounded-2xl bg-[#121a2d] border-l-4 border-l-[#059669] border-r border-y border-[#263654] shadow-md">
              <Quote className="w-6 h-6 text-[#34d399] mb-2" />
              <blockquote className="text-sm sm:text-base font-medium text-white italic leading-relaxed">
                &ldquo;{storyData.quote}&rdquo;
              </blockquote>
              <div className="mt-3 text-xs font-bold text-[#34d399] font-mono">
                — NETHRA NEHA DS • Founder &amp; CEO, Annexra Technologies
              </div>
            </div>

          </div>

          {/* Right Column: News Graphic in Exact Square 1179x1177 Ratio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-[#263654] bg-[#121a2d] p-4 shadow-md">
              
              {/* Exact aspect ratio 1179 / 1177 */}
              <div 
                className="w-full rounded-xl overflow-hidden bg-[#090e1a] mb-3 border border-[#1e2a42] flex items-center justify-center"
                style={{ aspectRatio: '1179 / 1177' }}
              >
                <img
                  src="/assets/news-just-now-salem.jpeg"
                  alt="Just Now Salem newspaper feature covering Nethra D"
                  className="w-full h-full object-contain filter brightness-95"
                  style={{ aspectRatio: '1179 / 1177' }}
                />
              </div>

              <div className="text-sm font-bold text-white font-display">Salem District Recognition to National Press</div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                From Salem government school science awards to 207 nationwide media publications.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#121a2d] border border-[#263654] text-xs shadow-sm">
              <div className="flex items-center gap-1.5 text-[#34d399] font-bold mb-1 font-mono">
                <CheckCircle className="w-4 h-4 text-[#34d399]" />
                <span>Annexra Technologies Directive</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Incorporated in January 2026 to convert grassroots research in clinical AI, soil sensor telemetry, and IoT warning hardware into production technologies.
              </p>
            </div>
          </div>

        </div>

        {/* Compact Interactive Timeline */}
        <div className="pt-6 border-t border-[#1e293b]">
          <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight mb-4 font-display text-center">
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
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#059669] text-white shadow-sm'
                      : 'bg-[#141d30] text-slate-300 hover:text-white hover:bg-[#1a253d] border border-[#263654]'
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
            className="max-w-2xl mx-auto p-5 rounded-2xl bg-[#121a2d] border border-[#263654] text-center shadow-md"
          >
            <div className="inline-block text-xs font-mono font-bold text-[#a7f3d0] px-3 py-1 rounded-full bg-[#064e3b] border border-[#059669] mb-2">
              YEAR {selectedMilestone.year}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 font-display">
              {selectedMilestone.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
              {selectedMilestone.desc}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
