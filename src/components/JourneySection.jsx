import React from 'react';
import { storyData } from '../data/portfolioData';
import { Compass, BookOpen, Rocket, CheckCircle, ArrowRight, Quote } from 'lucide-react';

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 bg-[#0a0d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Biographical Narrative
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {storyData.title}
          </h2>
          <p className="mt-2 text-base text-emerald-400 font-medium">
            {storyData.subtitle}
          </p>
        </div>

        {/* Narrative & Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: The Written Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            {storyData.paragraphs.map((para, i) => (
              <p key={i} className="font-normal">
                {para}
              </p>
            ))}

            {/* Quote Callout */}
            <div className="mt-6 p-5 rounded-xl bg-slate-900/90 border-l-4 border-emerald-500 border-r border-y border-slate-800">
              <Quote className="w-6 h-6 text-emerald-400 mb-2 opacity-60" />
              <blockquote className="text-base sm:text-lg font-medium text-white italic">
                &ldquo;{storyData.quote}&rdquo;
              </blockquote>
              <div className="mt-2 text-xs font-semibold text-emerald-400">
                — Nethra Neha DS, Founder &amp; CEO, Annexra Technologies
              </div>
            </div>
          </div>

          {/* Right Column: Visual Press & Artifacts Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0e121a] p-4 shadow-lg">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 mb-3 border border-slate-800">
                <img
                  src="/assets/news-just-now-salem.jpeg"
                  alt="Just Now Salem news coverage of Nethra D"
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>
              <div className="text-xs font-semibold text-white">Local &amp; Regional Recognition</div>
              <p className="text-[11px] text-slate-400 mt-1">
                From Salem district honors to nationwide news syndication, celebrating youth-led deep tech breakthroughs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e121a] border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                <CheckCircle className="w-4 h-4" />
                <span>Annexra Technologies Vision</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Registered in January 2026, Annexra focuses on translating grassroots research in soil science, precision medicine algorithms, and human-machine telemetry into deployable, scalable technologies.
              </p>
            </div>
          </div>

        </div>

        {/* Milestone Chronological Timeline */}
        <div className="mt-12 pt-12 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white tracking-tight mb-8 font-display text-center">
            Chronology of Growth &amp; Milestones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {storyData.milestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-4 rounded-xl bg-[#0e121a] border border-slate-800/90 hover:border-slate-700 transition-colors relative"
              >
                <div className="text-emerald-400 font-mono font-bold text-sm mb-1.5 flex items-center justify-between">
                  <span>{m.year}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug">
                  {m.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
