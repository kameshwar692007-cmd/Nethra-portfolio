import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  MapPin, 
  FileText,
  Activity,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function RefinedDirectionB() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f8fafc] font-sans selection:bg-cyan-500/20 selection:text-cyan-300 antialiased">
      
      {/* Precision Top Telemetry Header */}
      <header className="border-b border-white/[0.07] bg-[#0a0c10]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-sm bg-cyan-400" />
            <span className="font-bold text-white tracking-wider">NETHRA D.</span>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <span className="text-slate-400 hidden sm:inline">ANNEXRA TECHNOLOGIES</span>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hidden md:inline text-[11px] text-slate-500">SALEM, TAMIL NADU &bull; 11°39'N 78°09'E</span>
            <span className="px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold text-[10px] tracking-wider uppercase">
              PROTOTYPE: DIRECTION B
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION — Unboxed, Editorial, Deep Tech Physical Systems */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-white/[0.07]">
        
        {/* Subtle structural architectural line grid (12-col alignment guides) */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Top Identity Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-6"
          >
            <span className="w-6 h-px bg-cyan-400" />
            <span>High School Innovator &bull; Founder at 16 &bull; Systems Engineer</span>
          </motion.div>

          {/* Hero Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative Column (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Massive Scaled Typography */}
              <div>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.98] font-display">
                  NETHRA<br />
                  <span className="text-slate-300">NEHA DS.</span>
                </h1>
                <p className="mt-6 text-xl sm:text-2xl text-slate-300 font-normal max-w-xl leading-snug">
                  Building deep-tech hardware &amp; clinical AI from Salem, while orchestrating digital platforms for <span className="text-white font-semibold">38 districts</span> across Tamil Nadu.
                </p>
              </div>

              {/* Unboxed Manifesto Paragraph with crisp measure */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                High school student at GHSS Periyavadangampatti. Founder &amp; Director of <strong className="text-white">Annexra Technologies</strong>. 
                Author of <strong className="text-white">7 multi-national patent registrations</strong> spanning predictive power optimization, 
                hematological oncology diagnostics, and wearable assistive mechanics in the UK, Canada, India, and Germany.
              </p>

              {/* Action Buttons — Tactile, Quiet Chrome with Precision Accents */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono">
                <a
                  href="#trajectory"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-98"
                >
                  <span>Explore Trajectory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/documents/Nethra-Neha-DS-CV.docx"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#141720] hover:bg-[#1a1f2c] border border-white/10 text-slate-300 hover:text-white text-xs tracking-wider transition-all active:scale-98"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Curriculum Vitae</span>
                </a>
              </div>

              {/* Live Operational Metrics Ribbon (No generic card wrappers) */}
              <div className="pt-8 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">16</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Founder Age</div>
                  <div className="text-[10px] text-slate-600">Annexra Tech</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight font-display">07</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Sovereign IP</div>
                  <div className="text-[10px] text-slate-600">UK &bull; CA &bull; IN &bull; DE</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">38</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Districts Managed</div>
                  <div className="text-[10px] text-slate-600">TN Volunteers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">207+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Media Outlets</div>
                  <div className="text-[10px] text-slate-600">Pan-India Reach</div>
                </div>
              </div>

            </motion.div>

            {/* Right Visual Composition (5 cols) — Integrated Documentary Anchor */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Asymmetric Framed Anchor */}
              <div className="relative">
                {/* Technical Boundary Marker */}
                <div className="absolute -top-3 -left-3 text-[10px] font-mono text-slate-600 select-none">
                  [REF: GHSS_SALEM_NETHRA_D]
                </div>

                {/* Natural Image Container with Zero Decorative Glassmorphism */}
                <div className="relative rounded-lg overflow-hidden border border-white/[0.12] bg-[#12151c] shadow-2xl">
                  <img
                    src="/assets/nethra-portrait.jpeg"
                    alt="Nethra D - Founder & Systems Engineer"
                    className="w-full h-auto object-cover object-top filter contrast-[1.03] grayscale-[0.15] hover:grayscale-0 transition-all duration-700"
                    style={{ aspectRatio: '853 / 1200' }}
                  />

                  {/* Clean Technical Corner Stamp */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-transparent">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                      <span className="font-bold text-white uppercase tracking-wider">Nethra D</span>
                      <span className="text-cyan-400 font-semibold">Director &bull; Annexra</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                      GHSS Periyavadangampatti, Salem
                    </div>
                  </div>
                </div>

                {/* Secondary Execution Tag Beneath */}
                <div className="mt-4 p-4 rounded-lg border border-white/[0.07] bg-[#10131a] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>State Digital Infrastructure: ACTIVE</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">38 Districts</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 1 — EDITORIAL STORYTELLING: THE TWO WORLDS OF NETHRA D */}
      <section id="trajectory" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#0c0e14]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Marker */}
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              01 // EXECUTION TRAJECTORY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Two Worlds. One Relentless Velocity.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Her credibility isn't derived from startup hype. It is rooted in two concurrent, real-world realities:
            </p>
          </div>

          {/* Asymmetric Dual World Narrative Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* World A: Grassroots Civic Reality */}
            <div className="border-t-2 border-white/20 pt-8 space-y-6">
              <div className="flex items-center justify-between font-mono text-xs text-slate-500">
                <span className="uppercase text-cyan-400 font-bold">World 01</span>
                <span>Grassroots Scale</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                Civic Technology &amp; State Infrastructure
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Operating from Salem while completing 12th grade in Computer Science and Bio-Maths at a government school, 
                Nethra manages statewide IT infrastructure for <strong className="text-white">Tamil Nadu Volunteers</strong>. 
                Her responsibilities span centralized volunteer databases, disaster response dispatch portals, and mission-critical cloud deployments.
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated dispatch pipelines serving thousands of volunteers</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-time hybrid governance across all 38 revenue districts</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Civic disaster relief, youth mobilization, and blood donation coordination</span>
                </div>
              </div>
            </div>

            {/* World B: Deep Tech & Sovereign Research */}
            <div className="border-t-2 border-cyan-400 pt-8 space-y-6">
              <div className="flex items-center justify-between font-mono text-xs text-slate-500">
                <span className="uppercase text-cyan-400 font-bold">World 02</span>
                <span>Deep Tech Innovation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                Annexra Technologies &amp; Patent Architecture
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Incorporated Annexra Technologies at 16 to engineer scalable hardware-software systems. 
                Rather than building superficial apps, she mastered patent drafting and sovereign filing independently, 
                securing intellectual property across the UK Intellectual Property Office, CIPO Canada, and IP India.
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Clinical AI Precision Oncology algorithm filed with CIPO Canada (#1249257)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Predictive power telemetry device registered with UK IPO (#6518777)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Certified in AI in Healthcare (NCVET Level 4 / Microsoft CSR)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Prototype Notice */}
      <footer className="py-8 border-t border-white/[0.07] bg-[#0a0c10] text-center font-mono text-xs text-slate-500">
        DIRECTION B PROTOTYPE // NON-DESTRUCTIVE VALIDATION BUILD // NETHRA D
      </footer>

    </div>
  );
}
