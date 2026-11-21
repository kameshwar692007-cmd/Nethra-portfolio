import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Award, ArrowRight, MapPin, Mail, Phone, FileText } from 'lucide-react';
import NumberTicker from './ui/NumberTicker';

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-[#1e293b] bg-[#0b0f19] overflow-hidden">
      {/* Subtle background technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Solid High-Visibility Green Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064e3b] border border-[#059669] text-[#a7f3d0] text-xs font-mono font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#34d399]" />
              FOUNDER &amp; CEO @ AGE 16 • ANNEXRA TECHNOLOGIES
            </div>

            {/* Main Name & Title in Crisp Pure White */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                NETHRA NEHA DS
              </h1>
              <p className="mt-2 text-base sm:text-xl font-bold text-slate-200 tracking-tight flex items-center gap-2 font-display">
                <span>Student Innovator</span>
                <span className="text-slate-600">•</span>
                <span>Founder &amp; CEO</span>
                <span className="text-slate-600">•</span>
                <span className="text-[#34d399] font-mono">7 Sovereign Patents</span>
              </p>
            </div>

            {/* Narrative Summary with Crisp Whites and Lights */}
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              From a government school classroom in Salem to founding{' '}
              <strong className="text-white font-bold">Annexra Technologies</strong> at age 16. 
              Inventor behind <strong className="text-[#34d399] font-bold">7 sovereign-patented inventions</strong> across 
              the UK, Canada, India, and Germany—bridging AI hematological oncology, sustainable smart irrigation, and wearable warning hardware.
            </p>

            {/* Quick Contact & Verified Location */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-200 pt-1">
              <div className="flex items-center gap-1.5 bg-[#121a2d] px-3 py-1.5 rounded-lg border border-[#263654]">
                <MapPin className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 bg-[#121a2d] px-3 py-1.5 rounded-lg border border-[#263654] hover:text-[#34d399] hover:border-[#059669] active:scale-98 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 bg-[#121a2d] px-3 py-1.5 rounded-lg border border-[#263654] hover:text-[#34d399] hover:border-[#059669] active:scale-98 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Action Buttons in Solid Colors */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#patents"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] active:scale-98 transition-all shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Inspect 7 Patents</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#media"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#141d30] border border-[#263654] hover:bg-[#1a253d] hover:border-[#059669] active:scale-98 transition-all"
              >
                <Award className="w-4 h-4 text-[#34d399]" />
                <span>207+ Press Releases</span>
              </a>

              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold text-slate-200 bg-[#0f172a] border border-[#334155] hover:text-white hover:border-[#059669] active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4 text-[#34d399]" />
                <span>CV (.docx)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Card with Solid Architecture (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-2xl border-2 border-[#263654] border-t-4 border-t-[#059669] bg-[#121a2d] p-3 shadow-lg">
                
                {/* Natural 853x1280 Aspect Ratio Container */}
                <div 
                  className="relative w-full rounded-xl overflow-hidden bg-[#090e1a] border border-[#1e2a42]"
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
                  
                  {/* High-Contrast Bottom Solid Banner */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#090d16] via-[#090d16]/90 to-transparent">
                    <div className="text-base font-extrabold text-white tracking-tight font-display">Nethra Neha DS</div>
                    <div className="text-xs text-[#34d399] font-bold font-mono">Founder &amp; CEO, Annexra Technologies</div>
                    <div className="text-[11px] text-slate-200 font-sans mt-0.5 font-normal">Government Higher Secondary School, Salem</div>
                  </div>
                </div>

                {/* Sub-label Badges with Solid Dark Green Inset */}
                <div className="mt-2.5 grid grid-cols-2 gap-2 text-center text-xs font-medium">
                  <div className="p-2.5 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                    <span className="block text-slate-400 text-[10px] uppercase font-mono font-bold">Leadership</span>
                    <span className="text-white text-xs font-bold mt-0.5 block font-display">Tamil Nadu Volunteers</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0b1120] border border-[#1e2a42]">
                    <span className="block text-slate-400 text-[10px] uppercase font-mono font-bold">Ambassadorship</span>
                    <span className="text-[#a7f3d0] text-xs font-bold mt-0.5 block font-display">Miro • UN SDC</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* High-Contrast Numerical Stats Ribbon in Solid Cards */}
        <div className="mt-10 pt-8 border-t border-[#1e293b] grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => {
            const num = parseInt(stat.value, 10);
            const isPureNum = !isNaN(num) && String(num) === stat.value;
            return (
              <div 
                key={i} 
                className="p-4 rounded-xl bg-[#121a2d] border border-[#263654] hover:border-[#059669] transition-colors shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display flex items-baseline gap-1">
                  {isPureNum ? (
                    <NumberTicker value={num} />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block" />
                </div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-white font-display">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-[#34d399] font-bold truncate mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
