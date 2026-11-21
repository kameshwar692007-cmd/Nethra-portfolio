import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadershipRoles } from '../data/portfolioData';
import { Briefcase, Building2, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedRoles = showAll ? leadershipRoles : leadershipRoles.slice(0, 3);

  return (
    <section id="leadership" className="py-14 sm:py-20 bg-[#080a0f] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5" />
            Executive Leadership &amp; Community Impact
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Leadership &amp; Professional Roles
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Leading deep-tech research, voluntary civic tech infrastructure, and representing international platforms.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {displayedRoles.map((role, idx) => (
              <motion.div
                key={role.title + role.org}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-xl bg-[#0e121a] border border-slate-800/90 hover:border-slate-700 hover:bg-[#121722] transition-colors flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">
                      {role.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {role.period.split('–')[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {role.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{role.org}</span>
                  </div>

                  <div className="mt-1.5 text-[11px] text-slate-400 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Verified Designation</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All / Collapse Button */}
        <div className="mt-7 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 active:scale-98 transition-all"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 text-emerald-400" />
                <span>Show Fewer (Collapse to Top 3 Roles)</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-emerald-400" />
                <span>View All 7 Leadership Roles ({leadershipRoles.length - 3} more)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
