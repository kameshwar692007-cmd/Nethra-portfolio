import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Code, ExternalLink, Cpu, Check, Layers } from 'lucide-react';

export default function ProjectsSection() {
  const skillCategories = [
    {
      title: "AI, Machine Learning & Medical Tech",
      skills: ["TensorFlow.js", "AI in Healthcare (NCVET Level 4)", "Hematological Oncology Models", "Computer Vision", "Predictive Analytics", "GenAI Data Pipelines"]
    },
    {
      title: "Cloud & Systems Architecture",
      skills: ["Google Cloud Platform (GCP)", "Google Kubernetes Engine (GKE)", "BigQuery Analytics", "AWS Architecture", "IAM Security Policies", "Virtual Machine Deployment"]
    },
    {
      title: "Full-Stack & Web Engineering",
      skills: ["JavaScript (ES6+)", "Angular", "HTML5 & Canvas API", "Flutter & Dart", "REST APIs", "Git & GitHub"]
    },
    {
      title: "Design Thinking & Collaboration",
      skills: ["Miro Global Ambassador", "Figma & UI Systems", "Human-Centered Design", "Assistive Hardware", "Technical Writing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            Software &amp; Deep Tech Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Featured Projects &amp; Software
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Hands-on technical solutions engineered to tackle ecological microplastic contamination, environmental consciousness, and enterprise cloud infrastructure.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0e121a] border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wide">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Features Bullet List (Clean, Anti-Slop Checkmarks) */}
                <div className="mt-4 space-y-1.5">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Source / Deployment</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Domain Knowledge Matrix */}
        <div className="p-8 rounded-2xl bg-[#0e121a] border border-slate-800">
          <div className="flex items-center gap-2 mb-6 text-white font-bold text-lg font-display">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span>Technical Capabilities &amp; Specialized Competencies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                  {cat.title}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {cat.skills.map((s, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
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
