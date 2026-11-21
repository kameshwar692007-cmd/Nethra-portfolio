import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Award, ArrowRight, MapPin, Mail, Phone, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-[#202c44] bg-[#0b0f19] overflow-hidden">
      {/* Structural technical grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #34d399 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {/* High-Visibility Green Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.12)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              FOUNDER &amp; CEO @ AGE 16 &bull; ANNEXRA TECHNOLOGIES
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                NETHRA NEHA DS
              </h1>
              <p className="mt-2 text-base sm:text-xl font-semibold text-emerald-400 tracking-tight flex items-center gap-2">
                <span>Student Innovator</span>
                <span className="text-slate-600">&bull;</span>
                <span>Founder &amp; CEO</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-emerald-300 font-mono">7 Sovereign Patents</span>
              </p>
            </div>

            {/* Narrative Summary (Direct, Punchy, Zero Fluff) */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              From a government school classroom in Salem to founding{' '}
              <strong className="text-white font-semibold">Annexra Technologies</strong> at age 16. 
              Inventor behind <strong className="text-emerald-400 font-semibold">7 sovereign-patented inventions</strong> across 
              the UK, Canada, India, and Germany—bridging AI hematological oncology, sustainable smart irrigation, and wearable warning hardware.
            </p>

            {/* Quick Contact & Verified Location */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 bg-[#141d30] px-3 py-1.5 rounded-lg border border-[#263552]">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 bg-[#141d30] px-3 py-1.5 rounded-lg border border-[#263552] hover:text-emerald-300 hover:border-emerald-500/50 active:scale-98 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 bg-[#141d30] px-3 py-1.5 rounded-lg border border-[#263552] hover:text-emerald-300 hover:border-emerald-500/50 active:scale-98 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#patents"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all shadow-[0_2px_12px_rgba(16,185,129,0.25)]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Inspect 7 Patents</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#media"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#162035] border border-[#2a3a5a] hover:bg-[#1d2a45] hover:text-white hover:border-emerald-500/50 active:scale-98 transition-all"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>207+ Press Releases</span>
              </a>

              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-300 bg-[#131b2e] border border-[#263552] hover:text-white hover:border-emerald-500/50 active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>CV (.docx)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Card with High Visibility & Exact 853x1280 Aspect Ratio (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Outer high-contrast container */}
              <div className="rounded-2xl border-2 border-[#263552] bg-[#141d30] p-3 shadow-2xl">
                
                {/* Natural 853x1280 Aspect Ratio Container */}
                <div 
                  className="relative w-full rounded-xl overflow-hidden bg-[#0c1220] border border-[#1e2a42]"
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
                  
                  {/* High-Contrast Bottom Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#090d16] via-[#090d16]/90 to-transparent">
                    <div className="text-sm font-bold text-white tracking-tight font-display">Nethra Neha DS</div>
                    <div className="text-xs text-emerald-400 font-semibold font-mono">Founder &amp; CEO, Annexra Technologies</div>
                    <div className="text-[11px] text-slate-300 font-sans mt-0.5">Government Higher Secondary School, Salem</div>
                  </div>
                </div>

                {/* Sub-label Badges with Dark Green Inset for Maximum Contrast */}
                <div className="mt-2.5 grid grid-cols-2 gap-2 text-center text-xs font-medium">
                  <div className="p-2 rounded-lg bg-[#0e1626] border border-[#212e47]">
                    <span className="block text-slate-400 text-[10px] uppercase font-mono font-semibold">Leadership</span>
                    <span className="text-slate-100 text-xs font-bold mt-0.5 block">Tamil Nadu Volunteers</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0e1626] border border-[#212e47]">
                    <span className="block text-slate-400 text-[10px] uppercase font-mono font-semibold">Ambassadorship</span>
                    <span className="text-emerald-300 text-xs font-bold mt-0.5 block">Miro &bull; UN SDC</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* High-Contrast Numerical Stats Ribbon */}
        <div className="mt-10 pt-8 border-t border-[#202c44] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-4 rounded-xl bg-[#141d30] border border-[#263552] hover:border-emerald-500/50 transition-colors shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display flex items-baseline gap-1">
                <span>{stat.value}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-slate-100">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-emerald-400/90 truncate mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
