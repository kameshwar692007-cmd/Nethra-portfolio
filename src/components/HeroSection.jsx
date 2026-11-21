import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-white/10 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Identity Tag — Solid Minimal Monospace */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-6"
        >
          <span className="w-4 h-px bg-slate-400" />
          <span>High School Innovator &bull; Founder at 16 &bull; Systems Engineer</span>
        </motion.div>

        {/* Hero Main Responsive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Main Content Column (7 cols on desktop, full on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Display Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.0] font-display">
                NETHRA<br />
                <span className="text-slate-300">NEHA DS.</span>
              </h1>
              
              <p className="mt-4 sm:mt-5 text-lg sm:text-2xl text-slate-300 font-normal max-w-xl leading-snug">
                Building deep-tech hardware &amp; clinical AI from Salem, while orchestrating digital platforms for <span className="text-white font-semibold">38 districts</span> across Tamil Nadu.
              </p>
            </div>

            {/* Concise Verified Achievement — Solid Hairline Editorial Block */}
            <div className="border-l-2 border-white pl-4 py-1 max-w-xl">
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Holder of <strong className="text-white font-semibold">7 sovereign patent registrations</strong> across the UK, Canada, India, and Germany in predictive power AI, clinical oncology, and assistive wearables.{' '}
                <a href="#patents" className="text-white hover:underline underline-offset-2 font-mono font-semibold inline-flex items-center gap-1">
                  <span>Inspect Inventions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 inline" />
                </a>
              </div>
            </div>

            {/* Narrative Summary */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
              High school student in Computer Science &amp; Bio-Maths at GHSS Periyavadangampatti. 
              Founder &amp; Director of <strong className="text-white">Annexra Technologies Pvt Ltd</strong> and Manager of Technology &amp; Digital Systems at <strong className="text-white">Tamil Nadu Volunteers</strong>.
            </p>

            {/* Action Buttons — Solid White & Solid Slate Contrast */}
            <div className="flex flex-wrap items-center gap-3 pt-1 font-mono">
              <a
                href="#patents"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98"
              >
                <span>Sovereign Patents (07)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#141720] hover:bg-[#1a1f2c] border border-white/10 text-white text-xs tracking-wider transition-all active:scale-98"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Operational Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">16</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Founder Age</div>
                <div className="text-[10px] text-slate-500">Annexra Tech</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">07</div>
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
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#12151c] shadow-xl">
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
                  <span className="text-slate-300 font-semibold">Founder &bull; Annexra</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  GHSS Periyavadangampatti, Salem
                </div>
              </div>
            </div>

            {/* Contextual Responsibility Indicator — Solid Styling */}
            <div className="mt-2.5 p-3 rounded-lg border border-white/10 bg-[#10131a] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Digital Systems: 38 Districts Active</span>
              <span className="text-white font-semibold">TN Volunteers</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
