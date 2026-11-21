import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipRoles } from '../data/portfolioData';
import { Briefcase, Building2, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);

  const tnvRole = leadershipRoles.find(r => r.org.includes('Tamil Nadu Volunteers')) || leadershipRoles[0];
  const annexraRole = leadershipRoles.find(r => r.org.includes('Annexra')) || leadershipRoles[1];
  const otherRoles = leadershipRoles.filter(r => r !== tnvRole && r !== annexraRole);

  const displayedOtherRoles = showAll ? otherRoles : otherRoles.slice(0, 3);

  return (
    <section id="leadership" className="py-16 sm:py-20 bg-[#0a0c10] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // EXECUTIVE APPOINTMENTS &bull; CIVIC GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
            Leadership &amp; State Infrastructure
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Directing centralized digital tools for Tamil Nadu Volunteers across all 38 districts, pioneering enterprise R&amp;D at Annexra Technologies, and representing international design bodies.
          </p>
        </div>

        {/* Dual Primary Governance Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-6">
          
          {/* Primary Role 1: TAMIL NADU VOLUNTEERS (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="md:col-span-7 rounded-2xl bg-[#0d1017] border border-white/[0.1] hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider text-[11px]">
                  Statewide Digital Systems
                </span>
                <span className="text-slate-400 text-[11px]">{tnvRole.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display">
                {tnvRole.title}
              </h3>
              
              <div className="text-xs font-semibold text-slate-200 mt-1.5 flex flex-wrap items-center gap-2">
                <span className="text-cyan-400 font-bold">{tnvRole.org}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {tnvRole.location}
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {tnvRole.desc}
              </p>

              {/* Responsibilities List */}
              <div className="mt-5 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {tnvRole.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/[0.04] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px] text-slate-300">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/[0.06] grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
              <div className="p-2 rounded-lg bg-[#080a0f] border border-white/[0.04]">
                <span className="block text-cyan-400 font-bold text-sm">38 Districts</span>
                <span className="text-[10px] text-slate-500">Jurisdiction</span>
              </div>
              <div className="p-2 rounded-lg bg-[#080a0f] border border-white/[0.04]">
                <span className="block text-white font-bold text-sm">Executive</span>
                <span className="text-[10px] text-slate-500">Authority</span>
              </div>
              <div className="p-2 rounded-lg bg-[#080a0f] border border-white/[0.04]">
                <span className="block text-cyan-400 font-bold text-sm">Disaster IT</span>
                <span className="text-[10px] text-slate-500">Dispatch Portal</span>
              </div>
            </div>
          </motion.div>

          {/* Primary Role 2: ANNEXRA TECHNOLOGIES (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.06 }}
            className="md:col-span-5 rounded-2xl bg-[#0d1017] border border-cyan-500/25 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider text-[11px]">
                  Deep-Tech Startup
                </span>
                <span className="text-slate-400 text-[11px]">{annexraRole.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display">
                {annexraRole.title}
              </h3>

              <div className="text-xs font-semibold text-cyan-400 mt-1.5">
                {annexraRole.org}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {annexraRole.location}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {annexraRole.desc}
              </p>

              <div className="mt-5 space-y-2 text-xs">
                {annexraRole.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/[0.04] flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 text-[11px]">07 Sovereign Patents</span>
              <span className="text-cyan-400 font-bold text-[11px]">Founded at Age 16</span>
            </div>
          </motion.div>

        </div>

        {/* Secondary Engagements: Miro, SDC, Paytm, Tata iQ (Clean Bento Cards - NO REPETITIVE BADGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedOtherRoles.map((role) => (
              <motion.div
                key={role.title + role.org}
                layout
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-[#0d1017] border border-white/[0.08] hover:border-cyan-500/30 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px]">
                    <span className="text-cyan-400 font-semibold uppercase">{role.type}</span>
                    <span className="text-slate-500">{role.period.split('–')[0].trim()}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display leading-snug group-hover:text-cyan-300 transition-colors">
                    {role.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-300 mt-1 font-mono">{role.org}</div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Toggle for Secondary Engagements */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e121a] hover:bg-[#141924] border border-white/10 hover:border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider transition-all"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 text-cyan-400" />
                <span>Collapse Additional Engagements</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-cyan-400" />
                <span>View All Engagements ({leadershipRoles.length} Roles)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
