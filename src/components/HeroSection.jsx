import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Award, ArrowRight, ExternalLink, MapPin, Mail, Phone, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Subtle structural grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Verified Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Founder &amp; CEO @ Age 16 &bull; Annexra Technologies
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                NETHRA NEHA DS
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-emerald-400 tracking-tight">
                Student Innovator &bull; Founder &bull; Multi-National Patentee &bull; AI in Healthcare
              </p>
            </div>

            {/* Inspiring Lead Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              From a government school classroom in Salem, Tamil Nadu to founding{' '}
              <span className="text-white font-semibold">Annexra Technologies</span> at age 16. 
              Inventor behind a portfolio of{' '}
              <span className="text-emerald-400 font-semibold">7 patented innovation concepts</span> across 
              the United Kingdom, Canada, India, and Germany—bridging artificial intelligence, hematological oncology, 
              rural agritech, and accessible public hardware.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800 hover:text-emerald-300 hover:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800 hover:text-emerald-300 hover:border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5">
              <a
                href="#patents"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                Explore 7 Patents &amp; IP
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#media"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:text-white active:scale-[0.98] transition-all"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                207+ News Articles Coverage
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Credentials Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer boundary frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0e121a] shadow-xl p-3 sm:p-4">
                
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80">
                  <img
                    src={personalInfo.avatar}
                    alt="Nethra Neha DS - Founder & CEO of Annexra Technologies"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // fallback to placeholder if needed
                      e.target.onerror = null;
                      e.target.src = "/assets/news-press-photo.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-80" />
                  
                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800">
                    <div className="text-xs font-semibold text-white">Nethra Neha DS (Nethra D)</div>
                    <div className="text-[11px] text-emerald-400 font-medium">Founder &amp; Director, Annexra Technologies</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Government Higher Secondary School, Periyavadangampatti</div>
                  </div>
                </div>

                {/* Micro credential tags below image */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-center text-xs font-medium">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/90">
                    <span className="block text-slate-400 text-[10px] uppercase font-semibold">Global Ambassadorship</span>
                    <span className="text-slate-200 font-medium mt-0.5 block">Miro &bull; UN SDC</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/90">
                    <span className="block text-slate-400 text-[10px] uppercase font-semibold">Tech Leadership</span>
                    <span className="text-slate-200 font-medium mt-0.5 block">Tamil Nadu Volunteers</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* High-Impact Numerical Stats Grid */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-5 rounded-xl bg-[#0c1017] border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
