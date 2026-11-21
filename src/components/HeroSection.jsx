import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, FileText, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-white/[0.08] bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Verified Identity Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-6"
        >
          <span className="w-5 h-px bg-cyan-400" />
          <span>High School Innovator &bull; Founder at 16 &bull; Systems Engineer</span>
        </motion.div>

        {/* Hero Main Responsive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Content Column (7 cols on desktop, full on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Display Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.0] font-display">
                NETHRA<br />
                <span className="text-slate-300">NEHA DS.</span>
              </h1>
              
              <p className="mt-4 sm:mt-6 text-lg sm:text-2xl text-slate-300 font-normal max-w-xl leading-snug">
                Building deep-tech hardware &amp; clinical AI from Salem, while orchestrating digital platforms for <span className="text-white font-semibold">38 districts</span> across Tamil Nadu.
              </p>
            </div>

            {/* Concise Verified Achievement & Patent Callout Above the Fold */}
            <div className="p-4 rounded-xl border border-cyan-500/25 bg-cyan-950/20 max-w-xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Holder of <strong className="text-white font-semibold">7 sovereign patent registrations</strong> across the UK, Canada, India, and Germany in predictive power AI, clinical oncology, and assistive wearables.{' '}
                  <a href="#patents" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 font-mono font-semibold inline-flex items-center gap-1">
                    <span>Inspect Inventions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 inline" />
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative Summary */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              High school student in Computer Science &amp; Bio-Maths at GHSS Periyavadangampatti. 
              Founder &amp; Director of <strong className="text-white">Annexra Technologies Pvt Ltd</strong> and Manager of Technology &amp; Digital Systems at <strong className="text-white">Tamil Nadu Volunteers</strong>.
            </p>

            {/* Action Buttons with snappy physical feedback */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 font-mono">
              <a
                href="#patents"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                <span>Sovereign Patents (07)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#141720] hover:bg-[#1a1f2c] border border-white/10 text-slate-300 hover:text-white text-xs tracking-wider transition-all active:scale-98"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Operational Metrics Strip */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 font-mono text-xs">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">16</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Founder Age</div>
                <div className="text-[10px] text-slate-500">Annexra Tech</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight font-display">07</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Sovereign IP</div>
                <div className="text-[10px] text-slate-500">UK &bull; CA &bull; IN &bull; DE</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">38</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Districts Managed</div>
                <div className="text-[10px] text-slate-500">TN Volunteers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">207+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Media Outlets</div>
                <div className="text-[10px] text-slate-500">Pan-India Reach</div>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Column (5 cols on desktop, responsive container on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/[0.12] bg-[#12151c] shadow-2xl">
              <img
                src="/assets/nethra-portrait.jpeg"
                alt="Nethra Neha DS - Founder & Director of Annexra Technologies"
                className="w-full h-auto object-cover object-top filter contrast-[1.02]"
                style={{ aspectRatio: '853 / 1180' }}
                loading="eager"
              />

              {/* Verified Attribution Bar at Bottom of Portrait */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/85 to-transparent">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="font-bold text-white uppercase tracking-wider">Nethra Neha DS</span>
                  <span className="text-cyan-400 font-semibold">Founder &bull; Annexra</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  GHSS Periyavadangampatti, Salem
                </div>
              </div>
            </div>

            {/* Contextual Responsibility Indicator */}
            <div className="mt-3 p-3.5 rounded-lg border border-white/[0.08] bg-[#10131a] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Digital Systems: 38 Districts Active</span>
              <span className="text-cyan-400 font-semibold">TN Volunteers</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
