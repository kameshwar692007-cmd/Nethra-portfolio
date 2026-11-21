import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';

export default function TrajectorySection() {
  const [expandedStory, setExpandedStory] = useState(false);

  return (
    <section id="trajectory" className="py-16 sm:py-20 bg-[#0a0c10] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-2">
            Biographical Trajectory &bull; 2020 &mdash; 2026
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
            Two Worlds. One Relentless Velocity.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Orchestrating state-wide civic digital infrastructure for 38 districts across Tamil Nadu while developing a 7-patent deep-tech enterprise from Salem.
          </p>
        </div>

        {/* BENTO BOX NARRATIVE & VISUAL MEDIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10 items-stretch">
          
          {/* Left Column: Personal History Story, Quote, and Annexra Directive (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Story Card — Comfortable editorial font size that flows naturally */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1017] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                <span className="text-[#2f6bff] font-bold uppercase tracking-wider">Origin &amp; Mission</span>
                <span className="text-slate-400">Government School to Tech Founder</span>
              </div>

              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal">
                {storyData.paragraphs[0]}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {storyData.paragraphs[1]}
              </p>

              {/* Expandable 5-Part Narrative */}
              <AnimatePresence>
                {expandedStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 overflow-hidden pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <p>{storyData.paragraphs[2]}</p>
                    <p>{storyData.paragraphs[3]}</p>
                    <p>{storyData.paragraphs[4]}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle Link */}
              <div className="pt-1">
                <button
                  onClick={() => setExpandedStory(!expandedStory)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#2f6bff] hover:text-white transition-colors"
                >
                  {expandedStory ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>Show Summary</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      <span>Read Complete 5-Part Narrative</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Standalone Founder Quote Card */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/10 shadow-xl space-y-3">
              <div className="text-[#2f6bff]">
                <svg className="w-6 h-6 fill-current opacity-90" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-sm sm:text-base text-slate-100 italic leading-relaxed">
                &ldquo;{storyData.quote}&rdquo;
              </blockquote>
              <div className="text-xs font-mono font-medium text-[#2f6bff]">
                — NETHRA NEHA DS &bull; Founder &amp; CEO, Annexra Technologies
              </div>
            </div>

            {/* Annexra Technologies Directive Card (Moved below quote card for seamless narrative continuity) */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/10 shadow-xl space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#2f6bff] font-bold uppercase tracking-wider">Annexra Technologies Directive</span>
                <span className="text-slate-400">Salem Core</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                Incorporated in January 2026 to convert grassroots research in clinical AI, soil sensor telemetry, and IoT warning hardware into sovereign, production technologies.
              </p>
            </div>
          </div>

          {/* Right Column: Exact Natural Poster Artifact Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl border border-white/10 bg-[#0d1017] p-5 sm:p-6 space-y-4 shadow-xl h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/10">
                  <span className="text-[#2f6bff] font-bold uppercase tracking-wider">Press Artifact</span>
                  <span>National Syndication</span>
                </div>

                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#06080d]">
                  <img
                    src="/assets/news-just-now-salem.jpeg"
                    alt="Salem District Recognition to National Media"
                    className="w-full h-auto object-cover filter contrast-[1.02]"
                  />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base sm:text-lg font-bold text-white font-display">
                    Salem District Recognition to National Media
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    From Salem government school science exhibitions to syndication across 207 nationwide news outlets.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">38 Districts Active</span>
                <span className="text-[#2f6bff] font-semibold">TN Volunteers IT</span>
              </div>
            </div>
          </div>

        </div>

        {/* CHRONOLOGICAL MILESTONES — UNIFORM, CLEAN 5-CARD GRID */}
        <div className="border-t border-white/10 pt-8 sm:pt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold text-white font-display tracking-tight">
              Chronological Milestones (2020 &mdash; 2026)
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              Progressive Trajectory
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {storyData.milestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-4 rounded-xl bg-[#0d1017] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-base font-bold text-white font-mono mb-1">
                    {m.year}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200 font-display leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
