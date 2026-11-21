import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipRoles } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  Globe2, 
  ChevronDown, 
  ChevronUp,
  Activity,
  Award
} from 'lucide-react';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);

  // Top 2 anchor roles: Tamil Nadu Volunteers & Annexra Technologies
  const tnvRole = leadershipRoles.find(r => r.org.includes('Tamil Nadu Volunteers')) || leadershipRoles[0];
  const annexraRole = leadershipRoles.find(r => r.org.includes('Annexra')) || leadershipRoles[1];
  const otherRoles = leadershipRoles.filter(r => r !== tnvRole && r !== annexraRole);

  const displayedOtherRoles = showAll ? otherRoles : otherRoles.slice(0, 3);

  return (
    <section id="leadership" className="py-14 sm:py-20 bg-[#0b0f19] border-b border-[#202c44] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            Executive Leadership &amp; Civic Infrastructure
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Executive Leadership &amp; Roles
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Directing digital infrastructure for 38 districts at Tamil Nadu Volunteers, leading deep-tech R&amp;D at Annexra Technologies, and representing international design bodies.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-6">
          
          {/* BENTO HERO 1: TAMIL NADU VOLUNTEERS (Spans 7 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 rounded-2xl bg-[#141d30] border-2 border-[#23304a] hover:border-emerald-500/50 p-6 sm:p-7 flex flex-col justify-between group shadow-xl transition-all relative overflow-hidden"
          >
            {/* Specular edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATEWIDE CIVIC TECH INFRASTRUCTURE
                </div>
                <span className="text-xs font-mono text-slate-300 bg-[#0e1526] px-2.5 py-1 rounded-lg border border-[#23304a]">
                  {tnvRole.period}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug font-display group-hover:text-emerald-300 transition-colors">
                {tnvRole.title}
              </h3>
              
              <div className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{tnvRole.org}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs text-slate-300 flex items-center gap-1 font-normal font-sans">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {tnvRole.location}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {tnvRole.desc}
              </p>

              {/* Operational Responsibilities */}
              <div className="mt-4 space-y-2">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  Engineering &amp; Operations Portfolio:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {tnvRole.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-xl bg-[#0c1322] border border-[#1e2a42] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug text-[11px] text-slate-200">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric strip footer */}
            <div className="mt-5 pt-4 border-t border-[#202c44] grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-[#0c1322] border border-[#1e2a42]">
                <span className="block text-emerald-400 font-extrabold font-mono text-sm sm:text-base">38 Districts</span>
                <span className="text-[10px] text-slate-300 font-medium">Statewide Reach</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c1322] border border-[#1e2a42]">
                <span className="block text-emerald-400 font-extrabold font-mono text-sm sm:text-base">Full-Time Hybrid</span>
                <span className="text-[10px] text-slate-300 font-medium">Executive Capacity</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c1322] border border-[#1e2a42]">
                <span className="block text-emerald-400 font-extrabold font-mono text-sm sm:text-base">99.9% Uptime</span>
                <span className="text-[10px] text-slate-300 font-medium">Cloud Reliability</span>
              </div>
            </div>
          </motion.div>


          {/* BENTO HERO 2: ANNEXRA TECHNOLOGIES (Spans 5 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 rounded-2xl bg-[#141d30] border-2 border-[#23304a] hover:border-emerald-500/50 p-6 sm:p-7 flex flex-col justify-between group shadow-xl transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  Deep-Tech Startup &bull; Inc. at 16
                </span>
                <span className="text-xs font-mono text-slate-300 bg-[#0e1526] px-2.5 py-1 rounded-lg border border-[#23304a]">
                  {annexraRole.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug font-display group-hover:text-emerald-300 transition-colors">
                {annexraRole.title}
              </h3>

              <div className="text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{annexraRole.org}</span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{annexraRole.location}</span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {annexraRole.desc}
              </p>

              <div className="mt-4 space-y-2 text-xs">
                {annexraRole.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="p-2 rounded-xl bg-[#0c1322] border border-[#1e2a42] flex items-start gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#202c44] flex items-center justify-between text-xs">
              <span className="text-slate-300 text-[11px] font-medium font-sans">7 Multi-National Patents</span>
              <span className="text-emerald-400 font-bold font-mono text-xs bg-[#0c1322] px-2.5 py-1 rounded-lg border border-[#1e2a42]">
                Salem Headquarters
              </span>
            </div>
          </motion.div>

        </div>

        {/* BENTO SECONDARY TILES: MIRO, UN SDC, PAYTM, TATA iQ, HEMECANCER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedOtherRoles.map((role) => (
              <motion.div
                key={role.title + role.org}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-[#141d30] border-2 border-[#23304a] hover:border-emerald-500/40 transition-colors flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 font-mono">
                      {role.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300 bg-[#0c1322] px-2 py-0.5 rounded border border-[#1e2a42]">
                      {role.period.split('–')[0].trim()}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug font-display">
                    {role.title}
                  </h4>

                  <div className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{role.org}</span>
                  </div>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#202c44] flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Engagement
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Toggle */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1a253d] border-2 border-[#263552] hover:border-emerald-500/50 text-xs font-bold text-white active:scale-98 transition-all shadow-sm"
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
