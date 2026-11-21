import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipRoles } from '../data/portfolioData';
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);
  const [mobileTab, setMobileTab] = useState('tnv'); // 'tnv' | 'annexra' | 'other'

  const tnvRole = leadershipRoles.find(r => r.org.includes('Tamil Nadu Volunteers')) || leadershipRoles[0];
  const annexraRole = leadershipRoles.find(r => r.org.includes('Annexra')) || leadershipRoles[1];
  const otherRoles = leadershipRoles.filter(r => r !== tnvRole && r !== annexraRole);

  const displayedOtherRoles = showAll ? otherRoles : otherRoles.slice(0, 3);

  return (
    <section id="leadership" className="scroll-mt-20 py-16 sm:py-20 bg-[#0a0c10] border-b border-white/10 relative">
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

        {/* ========================================================= */}
        {/* MOBILE VIEW: MODULAR TABBED STRUCTURE WITH COOL ANIMATIONS */}
        {/* ========================================================= */}
        <div className="block md:hidden">
          {/* Animated Tab Switcher */}
          <div className="w-full overflow-x-auto scrollbar-none mb-5 pb-1">
            <div className="flex items-center gap-1.5 p-1 bg-[#0e121a] border border-white/10 rounded-xl font-mono text-xs w-full justify-between">
              <button
                onClick={() => setMobileTab('tnv')}
                className={cn(
                  "relative flex-1 py-2 px-2 rounded-lg text-center font-medium transition-colors text-[11px] select-none",
                  mobileTab === 'tnv' ? "text-white font-bold" : "text-slate-400 hover:text-white"
                )}
              >
                {mobileTab === 'tnv' && (
                  <motion.div
                    layoutId="mobileLeadershipTab"
                    className="absolute inset-0 rounded-lg bg-[#2f6bff] shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>State Systems</span>
              </button>

              <button
                onClick={() => setMobileTab('annexra')}
                className={cn(
                  "relative flex-1 py-2 px-2 rounded-lg text-center font-medium transition-colors text-[11px] select-none",
                  mobileTab === 'annexra' ? "text-white font-bold" : "text-slate-400 hover:text-white"
                )}
              >
                {mobileTab === 'annexra' && (
                  <motion.div
                    layoutId="mobileLeadershipTab"
                    className="absolute inset-0 rounded-lg bg-[#2f6bff] shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>Annexra Tech</span>
              </button>

              <button
                onClick={() => setMobileTab('other')}
                className={cn(
                  "relative flex-1 py-2 px-2 rounded-lg text-center font-medium transition-colors text-[11px] select-none",
                  mobileTab === 'other' ? "text-white font-bold" : "text-slate-400 hover:text-white"
                )}
              >
                {mobileTab === 'other' && (
                  <motion.div
                    layoutId="mobileLeadershipTab"
                    className="absolute inset-0 rounded-lg bg-[#2f6bff] shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>Other Roles (4)</span>
              </button>
            </div>
          </div>

          {/* Animated Tab Content Display */}
          <AnimatePresence mode="wait">
            
            {/* 1. Mobile Tab: Tamil Nadu Volunteers (One Flagship Card) */}
            {mobileTab === 'tnv' && (
              <motion.div
                key="mob-tnv"
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="rounded-2xl bg-[#0d1017] border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-[#2f6bff]/15 border border-[#2f6bff]/30 text-[#2f6bff] font-semibold uppercase text-[10px]">
                        Statewide Digital Systems
                      </span>
                      <span className="text-slate-400 text-[11px]">{tnvRole.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug font-display">
                      {tnvRole.title}
                    </h3>
                    
                    <div className="text-xs font-semibold text-slate-200 mt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-white font-bold">{tnvRole.org}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {tnvRole.location}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                      {tnvRole.desc}
                    </p>

                    <div className="mt-4 space-y-2 text-xs">
                      {tnvRole.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/5 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2f6bff] shrink-0 mt-0.5" />
                          <span className="leading-relaxed text-[11px] text-slate-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>38 Districts Active</span>
                    <span className="text-[#2f6bff] font-semibold">Active Executive</span>
                  </div>

                  {/* Show More to Next Tab Action Button */}
                  <button
                    onClick={() => setMobileTab('annexra')}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#2f6bff]/10 hover:bg-[#2f6bff]/20 border border-[#2f6bff]/30 text-[#2f6bff] font-mono text-xs font-bold flex items-center justify-between transition-colors shadow-sm active:scale-98"
                  >
                    <span>Explore Annexra Tech Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 2. Mobile Tab: Annexra Technologies */}
            {mobileTab === 'annexra' && (
              <motion.div
                key="mob-annexra"
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="rounded-2xl bg-[#0d1017] border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-[#2f6bff]/15 border border-[#2f6bff]/30 text-[#2f6bff] font-semibold uppercase text-[10px]">
                        Deep-Tech Startup
                      </span>
                      <span className="text-slate-400 text-[11px]">{annexraRole.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug font-display">
                      {annexraRole.title}
                    </h3>

                    <div className="text-xs font-semibold text-white mt-1.5">
                      {annexraRole.org}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                      {annexraRole.location}
                    </div>

                    <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal">
                      {annexraRole.desc}
                    </p>

                    <div className="mt-4 space-y-2 text-xs">
                      {annexraRole.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/5 flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2f6bff] shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 text-[11px]">07 Sovereign Patents</span>
                    <span className="text-[#2f6bff] font-bold text-[11px]">Founded at Age 16</span>
                  </div>

                  {/* Show More to Next Tab Action Button */}
                  <button
                    onClick={() => setMobileTab('other')}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#2f6bff]/10 hover:bg-[#2f6bff]/20 border border-[#2f6bff]/30 text-[#2f6bff] font-mono text-xs font-bold flex items-center justify-between transition-colors shadow-sm active:scale-98"
                  >
                    <span>Explore Advisory Roles (Miro, UN SDC)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 3. Mobile Tab: Global Advisory & Fellowships (4 Roles) */}
            {mobileTab === 'other' && (
              <motion.div
                key="mob-other"
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                {otherRoles.map((role, idx) => (
                  <motion.div
                    key={role.title + role.org}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    className="p-4 rounded-xl bg-[#0d1017] border border-white/10 shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5 font-mono text-[10px]">
                      <span className="text-[#2f6bff] font-bold uppercase">{role.type}</span>
                      <span className="text-slate-400">{role.period.split('–')[0].trim()}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display leading-snug">
                      {role.title}
                    </h4>
                    <div className="text-xs font-semibold text-slate-300 mt-0.5 font-mono">{role.org}</div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">{role.desc}</p>
                  </motion.div>
                ))}

                {/* Back to Primary State Systems Tab */}
                <button
                  onClick={() => setMobileTab('tnv')}
                  className="w-full mt-3 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-mono text-xs font-bold flex items-center justify-between transition-colors shadow-sm active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="w-3.5 h-3.5 text-[#2f6bff]" />
                    <span>Back to State Systems (TNV)</span>
                  </div>
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW: EDITORIAL DUAL BENTO + SECONDARY ROLES GRID */}
        {/* ========================================================= */}
        <div className="hidden md:block">
          {/* Dual Primary Governance Bento Cards */}
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

                {/* Responsibilities List */}
                <div className="mt-5 space-y-2 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tnvRole.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="p-2.5 rounded-lg bg-[#080a0f] border border-white/5 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2f6bff] shrink-0 mt-0.5" />
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2f6bff] shrink-0 mt-0.5" />
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

      </div>
    </section>
  );
}
