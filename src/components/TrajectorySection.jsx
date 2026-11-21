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

        {/* BENTO BOX NARRATIVE & VISUAL MEDIA (SOLID STYLING) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          
          {/* Bento Card 1: Narrative & Editorial Quote (7 cols) */}
          <div className="lg:col-span-7 rounded-xl bg-[#0d1017] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-lg space-y-4">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs font-mono text-slate-400">
                <span className="font-semibold text-white uppercase tracking-wider">Origin &amp; Mission</span>
                <span>Government School to Tech Founder</span>
              </div>

              <p className="text-white text-xs sm:text-sm leading-relaxed font-normal">
                {storyData.paragraphs[0]}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {storyData.paragraphs[1]}
              </p>

              {/* Expandable Remainder Paragraphs */}
              <AnimatePresence>
                {expandedStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 pt-3 border-t border-white/10 overflow-hidden text-xs text-slate-300"
                  >
                    <p>{storyData.paragraphs[2]}</p>
                    <p>{storyData.paragraphs[3]}</p>
                    <p>{storyData.paragraphs[4]}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Compact Toggle Button */}
              <div>
                <button
                  onClick={() => setExpandedStory(!expandedStory)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-slate-300 underline underline-offset-2 transition-colors"
                >
                  {expandedStory ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>Show Summary</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      <span>Read Complete 5-Part Story</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Founder Quote — Editorial Typography, No Glowing Box */}
            <div className="border-l-2 border-white pl-4 py-1.5 mt-2">
              <blockquote className="text-xs sm:text-sm text-slate-100 italic leading-relaxed">
                &ldquo;{storyData.quote}&rdquo;
              </blockquote>
              <div className="mt-1.5 text-[11px] font-mono font-medium text-slate-400">
                — NETHRA NEHA DS &bull; Founder &amp; CEO, Annexra Technologies
              </div>
            </div>
          </div>

          {/* Bento Card 2: Authentic Newspaper Media Artifact (5 cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#0d1017] border border-white/10 p-5 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-full rounded-lg overflow-hidden bg-[#06080d] mb-3 border border-white/10 flex items-center justify-center max-h-64">
                <img
                  src="/assets/news-just-now-salem.jpeg"
                  alt="Salem newspaper feature covering Nethra Neha DS"
                  className="w-full h-full object-contain filter brightness-95"
                />
              </div>
              <h3 className="text-sm font-bold text-white font-display">
                Salem District Recognition to National Press
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                From GHSS Periyavadangampatti science exhibitions to coverage across 207 nationwide publications.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">38 Districts Active</span>
              <span className="text-white font-semibold">TN Volunteers IT</span>
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
