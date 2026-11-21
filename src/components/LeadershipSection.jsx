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
  ChevronDown, 
  ChevronUp,
  Globe2,
  Calendar
} from 'lucide-react';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);

  // Top 2 anchor roles: Tamil Nadu Volunteers & Annexra Technologies
  const tnvRole = leadershipRoles.find(r => r.org.includes('Tamil Nadu Volunteers')) || leadershipRoles[0];
  const annexraRole = leadershipRoles.find(r => r.org.includes('Annexra')) || leadershipRoles[1];
  const otherRoles = leadershipRoles.filter(r => r !== tnvRole && r !== annexraRole);

  const displayedOtherRoles = showAll ? otherRoles : otherRoles.slice(0, 3);

  return (
    <section id="leadership" className="py-14 sm:py-20 bg-[#0b0f19] border-b border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064e3b] border border-[#059669] text-[#a7f3d0] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-4 h-4 text-[#34d399]" />
            Executive Leadership &amp; Civic Infrastructure
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Leadership &amp; Professional Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Directing digital infrastructure for 38 districts at Tamil Nadu Volunteers, leading deep-tech R&amp;D at Annexra Technologies, and representing international design assemblies.
          </p>
        </div>

        {/* Bento Grid Architecture with Solid Craftsmanship */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          
          {/* BENTO HERO 1: TAMIL NADU VOLUNTEERS (Spans 7 cols on desktop) */}
          <div className="md:col-span-7 rounded-2xl bg-[#121a2d] border border-[#263654] border-t-4 border-t-[#059669] p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#064e3b] text-[#a7f3d0] border border-[#059669] text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#34d399]" />
                  STATEWIDE CIVIC TECH INFRASTRUCTURE
                </span>
                <span className="text-xs font-mono text-slate-300 bg-[#0b1120] px-3 py-1 rounded-md border border-[#1e293b]">
                  {tnvRole.period}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug font-display mt-2">
                {tnvRole.title}
              </h3>
              
              <div className="text-sm font-bold text-[#34d399] mt-1.5 flex items-center gap-2 font-display">
                <Building2 className="w-4 h-4 text-[#34d399] shrink-0" />
                <span className="text-white">{tnvRole.org}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-300 flex items-center gap-1 font-normal font-sans">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {tnvRole.location}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {tnvRole.desc}
              </p>

              {/* Engineering Responsibilities */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#34d399]" />
                  Engineering &amp; Operations Portfolio:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {tnvRole.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-[#0b1120] border border-[#1e293b] flex items-start gap-2.5 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                      <span className="leading-snug text-xs">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric strip footer */}
            <div className="mt-6 pt-4 border-t border-[#202c44] grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="p-3 rounded-xl bg-[#0b1120] border border-[#1e293b]">
                <span className="block text-white font-extrabold font-mono text-base sm:text-lg">38 Districts</span>
                <span className="text-[11px] text-slate-400 font-medium">Statewide Reach</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                <span className="block text-[#34d399] font-extrabold font-mono text-base sm:text-lg">Full-Time Hybrid</span>
                <span className="text-[11px] text-slate-400 font-medium">Executive Capacity</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                <span className="block text-white font-extrabold font-mono text-base sm:text-lg">99.9% Uptime</span>
                <span className="text-[11px] text-slate-400 font-medium">Cloud Architecture</span>
              </div>
            </div>
          </div>

          {/* BENTO HERO 2: ANNEXRA TECHNOLOGIES (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 rounded-2xl bg-[#121a2d] border border-[#263654] border-t-4 border-t-[#059669] p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-md bg-[#064e3b] text-[#a7f3d0] border border-[#059669] text-xs font-mono font-bold uppercase tracking-wider">
                  Deep-Tech Startup • Inc. at 16
                </span>
                <span className="text-xs font-mono text-slate-300 bg-[#0b1120] px-3 py-1 rounded-md border border-[#1e293b]">
                  {annexraRole.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug font-display mt-2">
                {annexraRole.title}
              </h3>

              <div className="text-sm font-bold text-[#34d399] mt-1.5 flex items-center gap-1.5 font-display">
                <Building2 className="w-4 h-4 text-[#34d399] shrink-0" />
                <span className="text-white">{annexraRole.org}</span>
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{annexraRole.location}</span>
              </div>

              <p className="mt-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {annexraRole.desc}
              </p>

              <div className="mt-4 space-y-2 text-xs">
                {annexraRole.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="p-2.5 rounded-xl bg-[#0b1120] border border-[#1e293b] flex items-start gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202c44] flex items-center justify-between text-xs">
              <span className="text-white font-bold text-xs font-mono">7 Sovereign Patents</span>
              <span className="text-[#a7f3d0] font-bold font-mono text-xs bg-[#064e3b] px-3 py-1 rounded-md border border-[#059669]">
                Salem Headquarters
              </span>
            </div>
          </div>

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
                className="p-5 rounded-2xl bg-[#121a2d] border border-[#22314e] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#a7f3d0] uppercase tracking-wide px-2 py-0.5 rounded-md bg-[#064e3b] border border-[#059669] font-mono">
                      {role.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300 bg-[#0b1120] px-2 py-0.5 rounded border border-[#1e293b]">
                      {role.period.split('–')[0].trim()}
                    </span>
                  </div>

                  <h4 className="text-sm font-extrabold text-white leading-snug font-display mt-1">
                    {role.title}
                  </h4>

                  <div className="text-xs font-bold text-[#34d399] mt-1 flex items-center gap-1.5 font-display">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{role.org}</span>
                  </div>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#202c44] flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#34d399]" />
                    Verified Engagement
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Toggle */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141d30] hover:bg-[#1a253d] border-2 border-[#263654] hover:border-[#059669] text-xs font-bold text-white active:scale-98 transition-all shadow-sm"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 text-[#34d399]" />
                <span>Collapse Additional Engagements</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-[#34d399]" />
                <span>View All Engagements (SDC, Paytm, Tata iQ, HemeCancer)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
