import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileCheck2, ExternalLink, X, ShieldCheck, Download, Eye } from "lucide-react";
import { cn } from "../../lib/utils";
import { patentsData } from "../../data/portfolioData";

export function HorizontalPatentGallery({ className }) {
  const sectionRef = useRef(null);
  const [selectedPatent, setSelectedPatent] = useState(null);

  // Window scroll drives horizontal translation through the pinned 280vh track
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate translation range across the 7 cards
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);
  const barWidth = useTransform(smoothProgress, [0, 1], ["14%", "100%"]);

  return (
    <div
      ref={sectionRef}
      className={cn("relative w-full", className)}
    >
      {/* DESKTOP PINNED EXPERIENCE (Sticky h-screen across 280vh scroll length) */}
      <div className="hidden md:block h-[280vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[var(--background)] border-y border-[var(--border)] select-none">
          
          {/* Top Gallery Header Bar */}
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 mb-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#2f6bff] mb-1 font-semibold">
                <span className="w-4 h-px bg-[#2f6bff]" />
                <span>Signature Experience &bull; Pinned Scroll Archive</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight font-display flex items-baseline">
                <span className="text-4xl lg:text-5xl font-mono font-black text-[#2f6bff] mr-2.5">07</span>
                <span className="text-[var(--foreground)]">Sovereign Registered Inventions</span>
              </h3>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] font-semibold shadow-xs">
                Scroll down to glide horizontally &rarr;
              </span>
            </div>
          </div>

          {/* Horizontal Track Gliding on Window Scroll */}
          <motion.div
            style={{ x }}
            className="flex gap-6 px-6 lg:px-8 w-max"
          >
            {patentsData.map((patent, idx) => (
              <motion.div
                key={patent.id}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                data-cursor="view"
                data-cursor-label="DOSSIER"
                onClick={() => setSelectedPatent(patent)}
                className="group relative w-[26rem] lg:w-[28rem] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 lg:p-7 shadow-[0_8px_30px_rgba(47,107,255,0.08),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(47,107,255,0.14),0_2px_8px_rgba(0,0,0,0.06)] flex flex-col justify-between transition-all duration-300 hover:border-[#2f6bff]/50 cursor-pointer"
              >
                <div>
                  {/* Top Jurisdiction Badge, Patent Number & Status Tag */}
                  <div className="flex items-center justify-between font-mono text-xs mb-3.5 gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold text-xs uppercase tracking-wider font-mono">
                        {patent.country}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-[var(--foreground)]">
                        {patent.number}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 font-mono shrink-0">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#2f6bff]" />
                      {patent.status.split("&")[0].trim()}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg lg:text-xl font-bold text-[var(--foreground)] font-display tracking-tight leading-snug line-clamp-2 transition-colors">
                    {patent.title}
                  </h4>

                  {/* Visual Document Snippet */}
                  <div className="mt-4 w-full h-36 rounded-xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex items-center justify-center p-2 relative">
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
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-[var(--surface)]/95 text-[10px] font-mono font-bold text-[var(--foreground)] border border-[var(--border)] shadow-xs">
                      Official Specification Filing
                    </span>
                  </div>

                  {/* Technical Summary */}
                  <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal line-clamp-3">
                    {patent.summary}
                  </p>
                </div>

                {/* Card Footer with Inspect Action */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs">
                  <span className="text-[var(--text-muted)] text-xs font-mono font-semibold truncate max-w-[190px]">
                    {patent.office}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#2f6bff] font-bold text-xs group-hover:translate-x-1 transition-transform">
                    <span>Inspect Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Big Serial Watermark Number (Increased Size & Prominent Royal Blue Color) */}
                <span className="absolute bottom-3 right-4 text-6xl lg:text-7xl font-mono font-black text-[#2f6bff]/20 select-none pointer-events-none tracking-tighter">
                  0{idx + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Progress Line */}
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-6">
            <div className="h-[2px] w-full bg-[var(--border)] rounded-full overflow-hidden">
              <motion.div
                style={{ width: barWidth }}
                className="h-full bg-[#2f6bff]"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs font-mono font-semibold text-[var(--foreground)]">
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
      </div>

      {/* MOBILE TOUCH-FRIENDLY SWIPE TRACK (< md) */}
      <div className="block md:hidden py-8 px-4 bg-[var(--background)] border-y border-[var(--border)]">
        <div className="mb-4">
          <div className="text-[11px] font-mono text-[#2f6bff] font-semibold uppercase tracking-wider mb-1">
            Swipeable Gallery (07 Patents)
          </div>
          <h3 className="text-xl font-bold font-display flex items-baseline">
            <span className="text-2xl font-mono font-black text-[#2f6bff] mr-2">07</span>
            <span className="text-[var(--foreground)]">Sovereign Registered Inventions</span>
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            Swipe horizontally to review all 7 multi-national patents.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none">
          {patentsData.map((patent, idx) => (
            <div
              key={patent.id}
              onClick={() => setSelectedPatent(patent)}
              className="w-[82vw] shrink-0 snap-center rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_6px_20px_rgba(47,107,255,0.08),0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2.5 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold text-[10px] uppercase font-mono">
                      {patent.country}
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--foreground)]">
                      {patent.number}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-[#2f6bff] font-bold text-[10px] uppercase font-mono shrink-0">
                    {patent.status.split("&")[0].trim()}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[var(--foreground)] font-display leading-snug line-clamp-2">
                  {patent.title}
                </h4>

                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {patent.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)] text-[11px] font-semibold">{patent.office}</span>
                <span className="text-[#2f6bff] font-bold text-xs inline-flex items-center gap-1">
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
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

            <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <div>
                <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] font-semibold block mb-1">
                  Technical Architecture &amp; System Summary:
                </span>
                <p className="leading-relaxed font-normal">{selectedPatent.summary}</p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] font-semibold block mb-1">
                  Real-World Significance &bull; Problem Addressed:
                </span>
                <p className="leading-relaxed font-normal">{selectedPatent.significance}</p>
              </div>

              <div className="pt-3 border-t border-[var(--border)] grid grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px]">Office &amp; Jurisdiction</span>
                  <span className="text-[var(--foreground)] font-semibold">{selectedPatent.office}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px]">Registration Status</span>
                  <span className="text-[#2f6bff] font-semibold">{selectedPatent.status}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3">
              {selectedPatent.documentUrl && (
                <a
                  href={selectedPatent.documentUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs font-mono transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span className="text-white">Download Dossier (PDF)</span>
                </a>
              )}
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-4 py-2.5 rounded-xl bg-[var(--card)] hover:bg-[#2f6bff]/10 border border-[var(--border)] text-[var(--foreground)] font-medium text-xs font-mono transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HorizontalPatentGallery;
