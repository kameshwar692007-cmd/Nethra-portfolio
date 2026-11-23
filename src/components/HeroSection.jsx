import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ScrollTextReveal } from './scroll-text-reveal';

export default function HeroSection() {
  const pinRef = useRef(null);
  const portraitCardRef = useRef(null);

  // Direct CV Download Helper
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/documents/Nethra-Neha-DS-CV.docx';
    link.setAttribute('download', 'Nethra-Neha-DS-CV.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll Progress driving the text illumination while pinned
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  // Pointer-responsive 3D depth for portrait
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotY, { stiffness: 200, damping: 25 });

  const handlePointerMove = (e) => {
    if (!portraitCardRef.current) return;
    const rect = portraitCardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    rotY.set(deltaX * 6); // Max 6 deg tilt
    rotX.set(-deltaY * 6);
  };

  const handlePointerLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  // Magnetic CTA
  const magX = useMotionValue(0);
  const magY = useMotionValue(0);
  const springMagX = useSpring(magX, { stiffness: 300, damping: 20 });
  const springMagY = useSpring(magY, { stiffness: 300, damping: 20 });

  const handleMagMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    magX.set(x * 0.25);
    magY.set(y * 0.25);
  };

  const handleMagLeave = () => {
    magX.set(0);
    magY.set(0);
  };

  return (
    <div ref={pinRef} className="relative w-full h-[260vh] sm:h-[200vh]">
      <section
        id="about"
        className="sticky top-0 min-h-screen sm:h-screen w-full flex flex-col justify-center pt-28 sm:pt-24 lg:pt-10 pb-16 sm:pb-0 overflow-hidden border-b border-[var(--border)] bg-[#0a0c10]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 sm:pt-0">
          
          {/* Top Identity Tag — Solid Blue Monospace */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2f6bff] mb-4 sm:mb-6 font-semibold"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-5 h-px bg-[#2f6bff] origin-left"
            />
            <span>High School Innovator &bull; Founder at 16 &bull; Systems Engineer</span>
          </motion.div>

          {/* Hero Main Responsive Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Main Content Column (7 cols on desktop, full on mobile) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Masked Line Display Headline */}
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.0] font-display">
                  <span className="block overflow-hidden py-0.5">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      NETHRA
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-0.5">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                      className="block"
                    >
                      <span className="text-slate-200">NEHA </span>
                      <span className="text-[#2f6bff]">DS.</span>
                    </motion.span>
                  </span>
                </h1>
                
                {/* Dynamic Scroll Text Reveal — Locked Until Text Becomes Pure White */}
                <div className="mt-4 sm:mt-5 max-w-2xl">
                  <ScrollTextReveal
                    text="Building deep-tech hardware and clinical AI from Salem, while orchestrating digital platforms for 38 districts across Tamil Nadu. Turning grassroots science into 7 sovereign patent registrations and sovereign commercial technologies."
                    progress={scrollYProgress}
                    completionPoint={0.52}
                    className="mx-0 max-w-2xl text-left text-lg sm:text-2xl lg:text-[1.65rem] font-medium leading-[1.35] tracking-tight text-white"
                  />
                </div>
              </div>

              {/* Action Buttons & Prominent Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="flex flex-wrap items-center gap-3 pt-1 font-mono"
              >
                <motion.a
                  style={{ x: springMagX, y: springMagY }}
                  onPointerMove={handleMagMove}
                  onPointerLeave={handleMagLeave}
                  href="#patents"
                  data-cursor="explore"
                  data-cursor-label="PATENTS"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 group"
                >
                  <span>Sovereign Patents (07)</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <button
                  type="button"
                  onClick={handleDownloadCV}
                  data-cursor="download"
                  data-cursor-label="CV"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider transition-all active:scale-95 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#2f6bff]" />
                  <span>Download CV</span>
                </button>

                {/* Prominent LinkedIn and GitHub Badges */}
                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="Connect with Nethra Neha DS on LinkedIn"
                    className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--card)] hover:border-[#2f6bff]/50 text-[var(--foreground)] hover:text-[#2f6bff] transition-all active:scale-95 shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    title="View Open Source Repositories on GitHub"
                    className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--card)] hover:border-[#2f6bff]/50 text-[var(--foreground)] hover:text-[#2f6bff] transition-all active:scale-95 shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Operational Metrics Strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.52 }}
                className="pt-6 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight font-display">16</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Founder Age</div>
                  <div className="text-[10px] text-[var(--text-muted)] opacity-80">Deep-Tech R&amp;D</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#2f6bff] tracking-tight font-display">07</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Sovereign IP</div>
                  <div className="text-[10px] text-[var(--text-muted)] opacity-80">UK &bull; CA &bull; IN &bull; DE</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight font-display">38</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Districts Managed</div>
                  <div className="text-[10px] text-[var(--text-muted)] opacity-80">TN Volunteers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight font-display">207+</div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-1">Media Outlets</div>
                  <div className="text-[10px] text-[var(--text-muted)] opacity-80">Pan-India Reach</div>
                </div>
              </motion.div>

            </div>

            {/* Right Visual Column — Refined size for optimal visual balance */}
            <motion.div 
              className="lg:col-span-5 w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[340px] mx-auto [perspective:1000px]"
            >
            <motion.div
              ref={portraitCardRef}
              style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
              }}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-cursor="view"
              data-cursor-label="PORTRAIT"
              className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[#12151c] shadow-2xl group transition-shadow duration-300 hover:shadow-[#2f6bff]/10"
            >
              <img
                src="/assets/nethra-portrait.jpeg"
                alt="Nethra Neha DS - Founder & Director of Annexra Technologies"
                width={853}
                height={1180}
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover object-top filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ aspectRatio: '853 / 1180' }}
                loading="eager"
              />

              {/* Verified Attribution Bar at Bottom of Portrait — Always high-contrast on photo */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent pointer-events-none">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-white uppercase tracking-wider keep-white">Nethra Neha DS</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2f6bff] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm keep-white">
                    Systems Innovator
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-200 mt-0.5 keep-white">
                  GHSS Periyavadangampatti, Salem
                </div>
              </div>
            </motion.div>

            {/* Contextual Responsibility Indicator — Solid Styling */}
            <div className="mt-2.5 p-3 rounded-lg border border-white/10 bg-[#10131a] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Digital Systems: 38 Districts Active</span>
              <span className="text-white font-semibold">TN Volunteers</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  </div>
  );
}
