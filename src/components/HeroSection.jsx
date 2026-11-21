import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const portraitCardRef = useRef(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textParallax = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const portraitParallax = useTransform(scrollYProgress, [0, 1], [0, -30]);

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
    <section
      ref={containerRef}
      id="about"
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-white/10 bg-[#0a0c10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Identity Tag — Solid Blue Monospace */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2f6bff] mb-6 font-semibold"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Main Content Column (7 cols on desktop, full on mobile) */}
          <motion.div 
            style={{ y: textParallax }}
            className="lg:col-span-7 space-y-6"
          >
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
              
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
                className="mt-4 sm:mt-5 text-lg sm:text-2xl text-slate-300 font-normal max-w-xl leading-snug"
              >
                Building deep-tech hardware &amp; clinical AI from Salem, while orchestrating digital platforms for <span className="text-white font-semibold">38 districts</span> across Tamil Nadu.
              </motion.p>
            </div>

            {/* Concise Verified Achievement — Solid Hairline Editorial Block */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l-2 border-[#2f6bff] pl-4 py-1 max-w-xl"
            >
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Holder of <strong className="text-white font-semibold">7 sovereign patent registrations</strong> across the UK, Canada, India, and Germany in predictive power AI, clinical oncology, and assistive wearables.{' '}
                <a
                  href="#patents"
                  data-cursor="explore"
                  data-cursor-label="PATENTS"
                  className="text-[#2f6bff] hover:underline underline-offset-2 font-mono font-semibold inline-flex items-center gap-1 group"
                >
                  <span>Inspect Inventions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Narrative Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-normal"
            >
              High school student in Computer Science &amp; Bio-Maths at GHSS Periyavadangampatti. 
              Founder &amp; Director of <strong className="text-white">Annexra Technologies Pvt Ltd</strong> and Manager of Technology &amp; Digital Systems at <strong className="text-white">Tamil Nadu Volunteers</strong>.
            </motion.p>

            {/* Action Buttons with Magnetic Touch */}
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg active:scale-95 group"
              >
                <span>Sovereign Patents (07)</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                data-cursor="download"
                data-cursor-label="CV"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#141720] hover:bg-[#1a1f2c] border border-white/10 text-white text-xs tracking-wider transition-colors active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#2f6bff]" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Operational Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">16</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Founder Age</div>
                <div className="text-[10px] text-slate-500">Annexra Tech</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2f6bff] tracking-tight font-display">07</div>
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
            </motion.div>

          </motion.div>

          {/* Right Visual Column (5 cols on desktop, responsive container on mobile) */}
          <motion.div 
            style={{ y: portraitParallax }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none [perspective:1000px]"
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
              className="relative rounded-lg overflow-hidden border border-white/10 bg-[#12151c] shadow-2xl group transition-shadow duration-300 hover:shadow-[#2f6bff]/10"
            >
              <img
                src="/assets/nethra-portrait.jpeg"
                alt="Nethra Neha DS - Founder & Director of Annexra Technologies"
                className="w-full h-auto object-cover object-top filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ aspectRatio: '853 / 1180' }}
                loading="eager"
              />

              {/* Verified Attribution Bar at Bottom of Portrait */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/85 to-transparent">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="font-bold text-white uppercase tracking-wider">Nethra Neha DS</span>
                  <span className="text-[#2f6bff] font-semibold">Founder &bull; Annexra</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
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
  );
}
