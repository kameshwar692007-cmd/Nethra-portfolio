import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { Check, ArrowUpRight } from 'lucide-react';
import { SpotlightGrid, SpotlightCardItem } from './quarry/SpotlightCard';
import { RewardsList } from '@/components/rewards-list';

export default function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectsData[activeProjectIndex];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#090b10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-2">
            Engineering &amp; Computational Systems
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
            Software &amp; Deep Tech Projects
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Independent software development spanning in-browser computer vision neural nets, distributed cloud telemetry, and progressive civic applications.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
          {projectsData.map((project, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveProjectIndex(idx)}
                data-cursor="select"
                data-cursor-label="PROJECT"
                className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all uppercase tracking-wider text-xs ${
                  isActive
                    ? 'text-white font-bold bg-[#2f6bff] shadow-sm'
                    : 'text-slate-400 hover:text-white bg-[#12151c] border border-white/10'
                }`}
              >
                <span>{project.title.split('–')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Deep Dive Card with Spotlight Glow */}
        <SpotlightGrid className="mb-10">
          <SpotlightCardItem className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjectIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white font-semibold uppercase text-[11px]">
                    {activeProject.badge}
                  </span>
                  <span className="text-slate-400 text-xs">{activeProject.period}</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-white font-display tracking-tight">
                  {activeProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {activeProject.summary}
                </p>

                {/* Technical Features Matrix */}
                <div className="pt-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-semibold">
                    Core Architectural Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                    {activeProject.features.map((feat, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/5 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2f6bff] shrink-0" />
                        <span className="text-[11px] leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Tags & Action Button */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-[#141822] border border-white/10 text-slate-300 text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    data-cursor-label="CODE"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold transition-all uppercase tracking-wider text-xs shadow-sm"
                  >
                    <span>Launch Application / Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </SpotlightCardItem>
        </SpotlightGrid>

        {/* Technical Competency Matrix — Powered by Quarry UI Sticky RewardsList */}
        <div className="border-t border-white/10 pt-4">
          <RewardsList
            eyebrow="Certified Competency"
            title="Engineering Disciplines & Production Systems"
            text="Recognized vocational qualifications (NCVET Level 4) paired with enterprise cloud infrastructure, clinical oncology AI, and human-centered user interface architecture."
            cta="Inspect Credentials"
            className="px-0 py-10"
          />
        </div>

      </div>
    </section>
  );
}
