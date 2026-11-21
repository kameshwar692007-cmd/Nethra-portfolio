import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipRoles } from '../data/portfolioData';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);

  const tnvRole = leadershipRoles.find(r => r.org.includes('Tamil Nadu Volunteers')) || leadershipRoles[0];
  const annexraRole = leadershipRoles.find(r => r.org.includes('Annexra')) || leadershipRoles[1];
  const otherRoles = leadershipRoles.filter(r => r !== tnvRole && r !== annexraRole);

  const displayedOtherRoles = showAll ? otherRoles : otherRoles.slice(0, 3);

  return (
    <section id="leadership" className="py-16 sm:py-20 bg-[#0a0c10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-2">
            Executive Appointments &bull; Civic Governance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
            Leadership &amp; State Infrastructure
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Directing centralized digital tools for Tamil Nadu Volunteers across all 38 districts, pioneering enterprise R&amp;D at Annexra Technologies, and representing international design bodies.
          </p>
        </div>

        {/* Dual Primary Governance Bento Cards — Solid Styling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
          
          {/* Primary Role 1: TAMIL NADU VOLUNTEERS (7 cols) */}
          <div className="md:col-span-7 rounded-xl bg-[#0d1017] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white font-semibold uppercase text-[11px]">
                  Statewide Digital Systems
                </span>
                <span className="text-slate-400 text-[11px]">{tnvRole.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display">
                {tnvRole.title}
              </h3>
              
              <div className="text-xs font-semibold text-slate-200 mt-1.5 flex flex-wrap items-center gap-2">
                <span className="text-white font-bold">{tnvRole.org}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {tnvRole.location}
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {tnvRole.desc}
              </p>

              {/* Responsibilities List — Clean Rows Without Nested Boxes */}
              <div className="mt-5 space-y-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tnvRole.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/5 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px] text-slate-300">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Jurisdiction: 38 Districts of Tamil Nadu</span>
              <span className="text-white font-semibold">Active Executive</span>
            </div>
          </div>

          {/* Primary Role 2: ANNEXRA TECHNOLOGIES (5 cols) */}
          <div className="md:col-span-5 rounded-xl bg-[#0d1017] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white font-semibold uppercase text-[11px]">
                  Deep-Tech Startup
                </span>
                <span className="text-slate-400 text-[11px]">{annexraRole.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display">
                {annexraRole.title}
              </h3>

              <div className="text-xs font-semibold text-white mt-1.5">
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
                  <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/5 flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 text-[11px]">07 Sovereign Patents</span>
              <span className="text-white font-bold text-[11px]">Founded at Age 16</span>
            </div>
          </div>

        </div>

        {/* Secondary Engagements: Miro, SDC, Paytm, Tata iQ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <AnimatePresence mode="popLayout">
            {displayedOtherRoles.map((role) => (
              <div
                key={role.title + role.org}
                className="p-5 rounded-xl bg-[#0d1017] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px]">
                    <span className="text-white font-semibold uppercase">{role.type}</span>
                    <span className="text-slate-400">{role.period.split('–')[0].trim()}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display leading-snug">
                    {role.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-300 mt-1 font-mono">{role.org}</div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">{role.desc}</p>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Toggle for Secondary Engagements */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#141822] hover:bg-[#1a202d] border border-white/15 text-xs font-mono font-bold text-white uppercase tracking-wider transition-all"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Collapse Additional Engagements</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span>View All Engagements ({leadershipRoles.length} Roles)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
