import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileCheck2, ExternalLink, X, ShieldCheck, Download, Eye } from "lucide-react";
import { cn } from "../../lib/utils";
import { patentsData } from "../../data/portfolioData";

export function HorizontalPatentGallery({ className }) {
  const sectionRef = useRef(null);
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Window scroll drives horizontal translation through the pinned track across all devices
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate translation range across the 7 cards (responsive for mobile & desktop)
  const x = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "-85%" : "-70%"]);
  const barWidth = useTransform(smoothProgress, [0, 1], ["14%", "100%"]);

  return (
    <div
      ref={sectionRef}
      className={cn("relative w-full h-[260vh] sm:h-[280vh]", className)}
    >
      {/* UNIFIED PINNED SCROLL ARCHIVE — ACTIVE ACROSS MOBILE, TABLET & DESKTOP */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[var(--background)] border-y border-[var(--border)] select-none">
        
        {/* Top Gallery Header Bar */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#2f6bff] mb-1 font-semibold">
              <span className="w-4 h-px bg-[#2f6bff]" />
              <span>Signature Experience &bull; Pinned Scroll Archive</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display flex items-baseline">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-[#2f6bff] mr-2">07</span>
              <span className="text-[var(--foreground)]">Sovereign Registered Inventions</span>
            </h3>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] font-semibold shadow-xs text-[11px] sm:text-xs">
              Scroll down to glide &rarr;
            </span>
          </div>
        </div>

        {/* Horizontal Track Gliding on Window Scroll (Patents 1 to 7) */}
        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 w-max"
        >
          {patentsData.map((patent, idx) => (
            <motion.div
              key={patent.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              data-cursor="view"
              data-cursor-label="DOSSIER"
              onClick={() => setSelectedPatent(patent)}
              className="group relative w-[84vw] sm:w-[26rem] lg:w-[28rem] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(47,107,255,0.08),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(47,107,255,0.14),0_2px_8px_rgba(0,0,0,0.06)] flex flex-col justify-between transition-all duration-300 hover:border-[#2f6bff]/50 cursor-pointer overflow-hidden shrink-0"
            >
              <div className="relative z-10">
                {/* Top Jurisdiction Badge, Patent Number & Status Tag */}
                <div className="flex items-center justify-between font-mono text-xs mb-3 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold text-[10px] sm:text-xs uppercase tracking-wider font-mono">
                      {patent.country}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[var(--foreground)]">
                      {patent.number}
                    </span>
                  </div>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 font-mono shrink-0">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#2f6bff]" />
                    {patent.status.split("&")[0].trim()}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--foreground)] font-display tracking-tight leading-snug line-clamp-2 transition-colors">
                  {patent.title}
                </h4>

                {/* Visual Document Snippet */}
                <div className="mt-3 sm:mt-4 w-full h-28 sm:h-36 rounded-xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-2 relative">
                  <img
                    src={patent.certificateImage}
                    alt={patent.title}
                    className="w-full h-full object-contain filter contrast-[1.02] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 sm:py-1 rounded-md bg-[var(--surface)]/95 text-[9px] sm:text-[10px] font-mono font-bold text-[var(--foreground)] border border-[var(--border)] shadow-xs">
                    Official Specification Filing
                  </span>
                </div>

                {/* Technical Summary */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                  {patent.summary}
                </p>
              </div>

              {/* Card Footer with Inspect Action */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs relative z-10">
                <span className="text-[var(--text-muted)] text-[11px] sm:text-xs font-mono font-semibold truncate max-w-[150px] sm:max-w-[190px]">
                  {patent.office}
                </span>
                <span className="inline-flex items-center gap-1 text-[#2f6bff] font-bold text-xs group-hover:translate-x-1 transition-transform">
                  <span>Inspect Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Big Serial Watermark Number (Prominently Visible on Mobile & Desktop) */}
              <span className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 text-5xl sm:text-7xl lg:text-8xl font-mono font-black text-[#2f6bff]/20 select-none pointer-events-none tracking-tighter z-0">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Progress Line — Active on Mobile and Desktop */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
          <div className="h-[3px] w-full bg-[var(--border)] rounded-full overflow-hidden">
            <motion.div
              style={{ width: barWidth }}
              className="h-full bg-[#2f6bff]"
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] sm:text-xs font-mono font-semibold text-[var(--foreground)]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#2f6bff] font-bold font-mono">01</span>
              <span className="text-[var(--text-muted)]">&bull;</span>
              <span>UK IPO POWER AI</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#2f6bff] font-bold font-mono">07</span>
              <span className="text-[var(--text-muted)]">&bull;</span>
              <span>DE VEIN LOCALIZATION</span>
            </span>
          </div>
        </div>

      </div>

      {/* Detail Inspection Modal for Selected Patent */}
      {selectedPatent && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="w-full max-w-2xl rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 shadow-[0_20px_50px_rgba(47,107,255,0.15)] relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedPatent(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--card)] hover:bg-[#2f6bff]/10 text-[var(--text-muted)] hover:text-[#2f6bff] border border-[var(--border)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs mb-2">
              <span className="px-2.5 py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold uppercase font-mono">
                {selectedPatent.country}
              </span>
              <span className="text-sm font-mono font-bold text-[var(--foreground)]">{selectedPatent.number}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] font-display leading-snug">
              {selectedPatent.title}
            </h3>

            {/* Certificate Scan Showcase */}
            <div className="mt-4 w-full rounded-xl bg-[var(--card)] border border-[var(--border)] p-4 flex justify-center max-h-72 overflow-hidden">
              <img
                src={selectedPatent.certificateImage}
                alt={selectedPatent.title}
                className="max-h-64 w-auto object-contain rounded-lg filter contrast-[1.03]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/patent-cert-india-smart-irrigation.jpeg";
                }}
              />
            </div>

            {/* Comprehensive Dossier Specifications */}
            <div className="mt-5 space-y-4 text-xs font-mono">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase font-semibold">Jurisdiction</span>
                  <strong className="text-[var(--foreground)] text-xs">{selectedPatent.jurisdiction}</strong>
                </div>
                <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase font-semibold">Grant Date</span>
                  <strong className="text-[var(--foreground)] text-xs">{selectedPatent.grantDate}</strong>
                </div>
                <div className="p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] col-span-2 sm:col-span-1">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase font-semibold">Filing Number</span>
                  <strong className="text-[#2f6bff] text-xs font-bold">{selectedPatent.number}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <strong className="text-[var(--foreground)] block text-xs uppercase mb-1">
                  Technical Architecture:
                </strong>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed font-sans">
                  {selectedPatent.significance}
                </p>
              </div>

              {selectedPatent.documentUrl && (
                <a
                  href={selectedPatent.documentUrl}
                  download
                  className="w-full py-3 rounded-xl bg-[#2f6bff] hover:bg-[#2558d9] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Sovereign Dossier (PDF)</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HorizontalPatentGallery;
