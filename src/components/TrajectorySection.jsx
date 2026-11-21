import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../data/portfolioData';
import { Compass, CheckCircle2, Quote } from 'lucide-react';

export default function TrajectorySection() {
  const milestoneImages = {
    "2023": "/assets/award-kalai-thiruvizha.jpeg",
    "2024": "/assets/award-beyond-space.jpeg",
    "2026": "/assets/news-just-now-salem.jpeg"
  };

  return (
    <section id="trajectory" className="py-24 sm:py-32 bg-[#0a0c10] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>01 // Biographical Trajectory &bull; 2020 &mdash; 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.04] font-display">
            Two Worlds. One Relentless Velocity.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Her credibility isn't derived from startup hype. It is rooted in two concurrent, real-world realities: managing state-wide civic digital infrastructure for 38 districts while building a 7-patent deep-tech enterprise.
          </p>
        </div>

        {/* Dual Worlds Editorial Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 sm:mb-28">
          
          {/* World 01: Grassroots Civic Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-xl bg-[#0e1219] border border-white/[0.08] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 pb-3 border-b border-white/[0.06]">
                <span className="text-cyan-400 font-bold uppercase">World 01</span>
                <span>Grassroots Reality</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                Civic Technology &amp; State Infrastructure
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Operating from Salem while completing 12th grade in Computer Science and Bio-Maths at a government school, 
                Nethra manages statewide IT infrastructure for <strong className="text-white">Tamil Nadu Volunteers</strong>. 
                Her responsibilities span centralized volunteer databases, disaster response dispatch portals, and mission-critical cloud deployments.
              </p>
              
              <div className="pt-2 space-y-2.5 font-mono text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Automated dispatch pipelines serving thousands of volunteers</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Executive management across all 38 revenue districts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Civic disaster relief, youth mobilization, and blood donation coordination</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-xs text-slate-400 flex items-center justify-between">
              <span>Organization: TN Volunteers</span>
              <span className="text-cyan-400 font-semibold">Active Executive</span>
            </div>
          </motion.div>

          {/* World 02: Deep Tech Hardware & Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-xl bg-[#0e1219] border border-cyan-500/20 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 pb-3 border-b border-white/[0.06]">
                <span className="text-cyan-400 font-bold uppercase">World 02</span>
                <span>Deep Tech Innovation</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                Annexra Technologies &amp; Patent Architecture
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Incorporated Annexra Technologies at age 16 to engineer scalable hardware-software systems. 
                Rather than building superficial apps, she mastered patent drafting and sovereign filing independently, 
                securing intellectual property across the UK Intellectual Property Office, CIPO Canada, and IP India.
              </p>

              <div className="pt-2 space-y-2.5 font-mono text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Clinical AI Precision Oncology algorithm filed with CIPO Canada (#1249257)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Predictive power telemetry device registered with UK IPO (#6518777)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Certified in AI in Healthcare (NCVET Level 4 / Microsoft CSR)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-xs text-slate-400 flex items-center justify-between">
              <span>Enterprise: Annexra Technologies</span>
              <span className="text-cyan-400 font-semibold">Founder &amp; Director</span>
            </div>
          </motion.div>

        </div>

        {/* Chronological Milestone Timeline */}
        <div className="border-t border-white/[0.08] pt-16 sm:pt-20">
          <div className="max-w-2xl mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Chronological Milestones (2020 &mdash; 2026)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              From school laboratory research to sovereign patent grants and national recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {storyData.milestones.map((m, idx) => {
              const photo = milestoneImages[m.year];
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="p-5 rounded-xl bg-[#0e1219] border border-white/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-lg font-bold text-cyan-400 font-mono mb-2">{m.year}</div>
                    <h4 className="text-sm font-bold text-white font-display leading-snug">{m.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-normal">{m.desc}</p>
                  </div>

                  {photo && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-white/[0.08] bg-[#06080d] h-28 flex items-center justify-center">
                      <img
                        src={photo}
                        alt={m.title}
                        className="w-full h-full object-cover filter contrast-[1.02]"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
