import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Award, ArrowRight, MapPin, Mail, Phone, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-slate-800/60">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Text Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Founder &amp; CEO @ Age 16 &bull; Annexra Technologies
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                NETHRA NEHA DS
              </h1>
              <p className="mt-2.5 text-base sm:text-xl font-medium text-emerald-400 tracking-tight">
                Student Innovator &bull; Founder &bull; Multi-National Patentee
              </p>
            </div>

            {/* Lead Narrative */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              From a government school classroom in Salem, Tamil Nadu to founding{' '}
              <strong className="text-white font-semibold">Annexra Technologies</strong> at age 16. 
              Holder of <strong className="text-emerald-400 font-semibold">7 patented invention concepts</strong> across 
              the UK, Canada, India, and Germany—bridging AI hematological oncology, sustainable smart irrigation, and assistive wearables.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap gap-2.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Salem, Tamil Nadu</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 hover:text-emerald-300 hover:border-slate-700 active:scale-98 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 hover:text-emerald-300 hover:border-slate-700 active:scale-98 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#patents"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Highlighted Patents (7)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#media"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:text-white active:scale-98 transition-all"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>207+ Press Features</span>
              </a>

              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900/60 border border-slate-800 hover:text-white hover:bg-slate-800 active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>CV (.docx)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Card Preserving Exact 853x1280 Aspect Ratio (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-2xl border border-slate-800 bg-[#0e121a] p-3 sm:p-4 shadow-xl">
                
                {/* Image container with EXACT natural aspect ratio of 853x1280 (~0.666) */}
                <div 
                  className="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80"
                  style={{ aspectRatio: '853 / 1280' }}
                >
                  <img
                    src={personalInfo.avatar}
                    alt="Nethra Neha DS - Founder & CEO of Annexra Technologies"
                    className="w-full h-full object-cover object-top"
                    style={{ aspectRatio: '853 / 1280' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/news-press-photo.jpeg";
                    }}
                  />
                  
                  {/* Subtle lower gradient overlay for legible typography */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <div className="text-xs font-bold text-white tracking-tight">Nethra Neha DS</div>
                    <div className="text-[11px] text-emerald-400 font-medium">Founder &amp; Director, Annexra Technologies</div>
                    <div className="text-[10px] text-slate-400">GHSS Periyavadangampatti, Salem</div>
                  </div>
                </div>

                {/* Compact Highlights below portrait */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-medium">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="block text-slate-500 text-[10px] uppercase font-semibold">Leadership</span>
                    <span className="text-slate-200 text-[11px] font-semibold mt-0.5 block">Tamil Nadu Volunteers</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="block text-slate-500 text-[10px] uppercase font-semibold">Ambassadorship</span>
                    <span className="text-slate-200 text-[11px] font-semibold mt-0.5 block">Miro &bull; UN SDC</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Compact Stats Row */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-3.5 sm:p-4 rounded-xl bg-[#0c1017] border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
