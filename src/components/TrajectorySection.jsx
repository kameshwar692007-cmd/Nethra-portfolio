import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyData } from '../data/portfolioData';
import { Compass, Quote, ChevronDown, ChevronUp, Sparkles, Building2, ShieldCheck } from 'lucide-react';

export default function TrajectorySection() {
  const [expandedStory, setExpandedStory] = useState(false);

  return (
    <section id="trajectory" className="py-16 sm:py-20 bg-[#0a0c10] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // BIOGRAPHICAL TRAJECTORY &bull; 2020 &mdash; 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
            Two Worlds. One Relentless Velocity.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Orchestrating state-wide civic digital infrastructure for 38 districts across Tamil Nadu while developing a 7-patent deep-tech enterprise from Salem.
          </p>
        </div>

        {/* BENTO BOX NARRATIVE & VISUAL MEDIA (COMPACT & DENSE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
          
          {/* Bento Card 1: Narrative & Integrated Quote (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0d1017] border border-white/[0.1] hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all shadow-xl space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-bold uppercase tracking-wide">Origin &amp; Mission</span>
                <span>Government School to Tech Founder</span>
              </div>

              <p className="text-white/95 text-xs sm:text-sm leading-relaxed font-normal">
                {storyData.paragraphs[0]}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {storyData.paragraphs[1]}
              </p>

              {/* Expandable Remainder Paragraphs (Collapsed by default to avoid excessive scrolling) */}
              <AnimatePresence>
                {expandedStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3 pt-3 border-t border-white/[0.06] overflow-hidden text-xs text-slate-300"
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors"
                >
                  {expandedStory ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Show Summary View</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Read Complete 5-Part Story</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Founder Quote Card — Integrated directly inside the Bento */}
            <div className="p-4 rounded-xl bg-[#080a0f] border border-cyan-500/20 border-l-2 border-l-cyan-400 mt-2">
              <Quote className="w-4 h-4 text-cyan-400 mb-1.5" />
              <blockquote className="text-xs sm:text-sm text-slate-100 italic leading-relaxed">
                &ldquo;{storyData.quote}&rdquo;
              </blockquote>
              <div className="mt-2 text-[11px] font-mono font-medium text-cyan-400">
                — NETHRA NEHA DS &bull; Founder &amp; CEO, Annexra Technologies
              </div>
            </div>
          </div>

          {/* Bento Card 2: Authentic Newspaper Media Artifact (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0d1017] border border-white/[0.1] hover:border-cyan-500/30 p-5 flex flex-col justify-between transition-all shadow-xl">
            <div>
              <div className="w-full rounded-xl overflow-hidden bg-[#06080d] mb-3 border border-white/[0.08] flex items-center justify-center max-h-72">
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
                From GHSS Periyavadangampatti science exhibitions to coverage in 207 nationwide publications.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">38 Districts Active</span>
              <span className="text-cyan-400 font-semibold">TN Volunteers IT</span>
            </div>
          </div>

        </div>

        {/* CHRONOLOGICAL MILESTONES — UNIFORM, CLEAN 5-CARD GRID (NO MISMATCHED IMAGES) */}
        <div className="border-t border-white/[0.08] pt-10 sm:pt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight">
              Chronological Milestones (2020 &mdash; 2026)
            </h3>
            <span className="text-xs font-mono text-cyan-400 hidden sm:inline-block">
              Progressive Trajectory
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {storyData.milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-[#0d1017] border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-base font-bold text-cyan-400 font-mono mb-1.5 group-hover:text-cyan-300">
                    {m.year}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-slate-500">
                  Phase 0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
