import React from 'react';
import { leadershipRoles } from '../data/portfolioData';
import { Briefcase, Building2, Globe, Users, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-[#080a0f] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Executive Leadership &amp; Community Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Leadership &amp; Professional Roles
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Leading research initiatives, driving state-level voluntary digital infrastructure, and representing global platforms as a design thinking and sustainability ambassador.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0e121a] border border-slate-800/90 hover:border-slate-700 hover:bg-[#121722] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Organization & Type Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">
                    {role.type}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {role.period.split('–')[0].trim()}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {role.title}
                </h3>

                {/* Organization Name */}
                <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{role.org}</span>
                </div>

                {/* Location & Dates */}
                <div className="mt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{role.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{role.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {role.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Designation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
