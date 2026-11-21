import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { Code, ExternalLink, Cpu, Check, Terminal } from 'lucide-react';

export default function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showSkills, setShowSkills] = useState(false);

  const activeProject = projectsData[activeProjectIndex];

  const skillCategories = [
    {
      title: "AI & Medical Technology",
      skills: ["TensorFlow.js", "AI in Healthcare (NCVET Level 4)", "Hematological Oncology Models", "Predictive Analytics"]
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
      title: "Design Thinking",
      skills: ["Miro Global Ambassador", "Figma UI Systems", "Human-Centered Design", "Technical Writing"]
    }
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 bg-[#0d1322] border-b border-[#202c44] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 shadow-sm">
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            Software Engineering &amp; Research Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Featured Projects &amp; Software
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hands-on technical solutions engineered for automated microplastic detection, carbon lifecycle accounting, and civic infrastructure.
          </p>
        </div>

        {/* Tabbed Project Switcher (Zero Scroll token waste, instant switching) */}
        <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
          {projectsData.map((project, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveProjectIndex(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 shadow-[0_2px_10px_rgba(16,185,129,0.25)]'
                    : 'bg-[#141d30] text-slate-300 hover:text-white hover:bg-[#1a253d] border border-[#263552]'
                }`}
              >
                {project.title.split('–')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Active Project Spotlight Card */}
        <div className="max-w-3xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-7 rounded-2xl bg-[#141d30] border-2 border-[#23304a] shadow-xl"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wide">
                  {activeProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-300 bg-[#0c1322] px-2.5 py-0.5 rounded border border-[#1e2a42]">
                  {activeProject.period}
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 font-display">
                {activeProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                {activeProject.summary}
              </p>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {activeProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="p-2.5 rounded-xl bg-[#0c1322] border border-[#1e2a42] flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-[#202c44]">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#0c1322] border border-[#1e2a42] text-[11px] font-mono font-medium text-emerald-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 active:scale-98 transition-all"
                >
                  <span>Explore Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Compact Toggle for Technical Skills Matrix */}
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1a253d] border-2 border-[#263552] text-xs font-bold text-white active:scale-98 transition-all shadow-sm"
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>{showSkills ? 'Hide Competencies Matrix' : 'View Specialized Technical Competencies Matrix'}</span>
          </button>

          <AnimatePresence>
            {showSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left mt-4 overflow-hidden pt-1"
              >
                {skillCategories.map((cat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#141d30] border-2 border-[#23304a]">
                    <h4 className="text-[11px] font-bold text-emerald-300 font-mono uppercase tracking-wider mb-2.5">
                      {cat.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {cat.skills.map((s, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="text-[11px] text-slate-200">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
