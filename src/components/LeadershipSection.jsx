import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipRoles } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  Globe2, 
  Sparkles, 
  Users, 
  Cpu, 
  ChevronDown, 
  ChevronUp,
  Activity
} from 'lucide-react';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);

  // We highlight the top 2 as large bento items: Tamil Nadu Volunteers and Annexra
  const tnvRole = leadershipRoles.find(r => r.org.includes('Tamil Nadu Volunteers')) || leadershipRoles[0];
  const annexraRole = leadershipRoles.find(r => r.org.includes('Annexra')) || leadershipRoles[1];
  const otherRoles = leadershipRoles.filter(r => r !== tnvRole && r !== annexraRole);

  const displayedOtherRoles = showAll ? otherRoles : otherRoles.slice(0, 3);

  return (
    <section id="leadership" className="py-14 sm:py-20 bg-[#080a0f] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5" />
            Executive Leadership &amp; Civic Infrastructure
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Leadership &amp; Professional Roles
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Directing state-level civic technology infrastructure at Tamil Nadu Volunteers, pioneering deep-tech R&amp;D at Annexra, and representing international design and sustainability assemblies.
          </p>
        </div>

        {/* Bento Grid Architecture (Quarry UI / 21st.dev Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8">
          
          {/* BENTO HERO 1: TAMIL NADU VOLUNTEERS (Spans 7 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 rounded-2xl bg-[#0e121a] border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden shadow-lg transition-all"
          >
            {/* Subtle glow backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider font-mono">
                    Statewide Tech Leadership
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {tnvRole.period}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display group-hover:text-emerald-300 transition-colors">
                {tnvRole.title}
              </h3>
              
              <div className="text-sm font-semibold text-slate-200 mt-1 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>{tnvRole.org}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {tnvRole.location}
                </span>
              </div>

              {/* Narrative description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {tnvRole.desc}
              </p>

              {/* Interactive Operational Pillars */}
              <div className="mt-5 space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Core Engineering &amp; Operational Responsibilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {tnvRole.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-normal text-[11px] text-slate-300">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric strip footer */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="block text-emerald-400 font-bold font-mono text-sm">38 Districts</span>
                <span className="text-[10px] text-slate-400">Coordination Scope</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="block text-emerald-400 font-bold font-mono text-sm">Full-Time Hybrid</span>
                <span className="text-[10px] text-slate-400">Executive Capacity</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="block text-emerald-400 font-bold font-mono text-sm">99.9% Cloud</span>
                <span className="text-[10px] text-slate-400">Platform Uptime</span>
              </div>
            </div>
          </motion.div>


          {/* BENTO HERO 2: ANNEXRA TECHNOLOGIES (Spans 5 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 rounded-2xl bg-[#0e121a] border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between group shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                  Flagship Deep-Tech Startup
                </span>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {annexraRole.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight leading-snug font-display group-hover:text-emerald-300 transition-colors">
                {annexraRole.title}
              </h3>

              <div className="text-sm font-semibold text-slate-200 mt-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>{annexraRole.org}</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{annexraRole.location}</span>
              </div>

              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                {annexraRole.desc}
              </p>

              <div className="mt-4 space-y-1.5 text-xs">
                {annexraRole.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-normal">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">7 Multi-National Patents</span>
              <span className="text-emerald-400 font-bold font-mono text-xs">Incorporated at 16</span>
            </div>
          </motion.div>

        </div>

        {/* BENTO SECONDARY TILES: MIRO, UN SDC, PAYTM, TATA iQ, HEMECANCER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedOtherRoles.map((role, idx) => (
              <motion.div
                key={role.title + role.org}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-xl bg-[#0e121a] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {role.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {role.period.split('–')[0].trim()}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {role.title}
                  </h4>

                  <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{role.org}</span>
                  </div>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Verified Engagement</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle to expand remaining roles without cluttering the page */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 active:scale-98 transition-all shadow-sm"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 text-emerald-400" />
                <span>Collapse Additional Engagements</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-emerald-400" />
                <span>View All Engagements (SDC, Paytm, Tata iQ, HemeCancer)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
