import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { Code, ExternalLink, Cpu, Check, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectsData[activeProjectIndex];

  const skillCategories = [
    {
      title: "AI & Medical Technology",
      skills: ["TensorFlow.js (In-Browser Inference)", "AI in Healthcare (NCVET Level 4)", "Hematological Oncology Models", "Predictive Analytics"]
    },
    {
      title: "Cloud & Systems",
      skills: ["Google Cloud Platform (GCP)", "Kubernetes (GKE)", "BigQuery Analytics", "AWS Solutions Architecture"]
    },
    {
      title: "Software & Web",
      skills: ["JavaScript (ES6+)", "Angular", "HTML5 & Canvas API", "Flutter & Dart Fundamentals"]
    },
    {
      title: "Human-Centered Design",
      skills: ["Miro Global Ambassador", "Figma UI Systems", "User Interface Architecture", "Technical Writing"]
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#090b10] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>03 // Engineering &amp; Computational Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.04] font-display">
            Software &amp; Deep Tech Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Independent software development spanning in-browser computer vision neural nets, distributed cloud telemetry, and progressive civic applications.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
          {projectsData.map((project, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveProjectIndex(idx)}
                className={`relative px-4 py-2.5 rounded-lg whitespace-nowrap transition-all uppercase tracking-wider ${
                  isActive
                    ? 'text-slate-950 font-bold bg-cyan-400 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-[#12151c] border border-white/[0.08]'
                }`}
              >
                <span>{project.title.split('–')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Deep Dive Card */}
        <div className="rounded-xl border border-white/[0.1] bg-[#0d1017] p-6 sm:p-10 shadow-2xl mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold uppercase">
                  {activeProject.badge}
                </span>
                <span className="text-slate-400">{activeProject.period}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white font-display tracking-tight">
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {activeProject.summary}
              </p>

              {/* Technical Features Matrix */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Architectural Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                  {activeProject.features.map((feat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#121620] border border-white/[0.06] flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Launch Link */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#141822] border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-all uppercase tracking-wider"
                >
                  <span>Launch Application / Code</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Technical Competency Matrix */}
        <div className="border-t border-white/[0.08] pt-14 sm:pt-18">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
              Engineering Disciplines &bull; NCVET Level 4 Certified
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              Recognized vocational qualifications and production toolchains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#0e1219] border border-white/[0.08]">
                <div className="text-xs font-bold text-white font-display mb-3 text-cyan-300">
                  {cat.title}
                </div>
                <ul className="space-y-2 text-xs font-mono text-slate-400">
                  {cat.skills.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
