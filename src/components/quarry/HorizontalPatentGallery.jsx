import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, FileCheck2, ExternalLink, X, Eye } from "lucide-react";
import { cn } from "../../lib/utils";
import { patentsData } from "../../data/portfolioData";

export function HorizontalPatentGallery({ className }) {
  const scroller = useRef(null);
  const track = useRef(null);
  const [range, setRange] = useState(0);
  const [selectedPatent, setSelectedPatent] = useState(null);

  const { scrollYProgress } = useScroll({ container: scroller });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const rangeValue = useMotionValue(0);
  const x = useTransform([smooth, rangeValue], ([p, r]) => -(p) * (r));
  const bar = useTransform(smooth, (p) => `${Math.max(4, p * 100)}%`);

  useEffect(() => {
    const measure = () => {
      if (!track.current || !scroller.current) return;
      const next = Math.max(0, track.current.scrollWidth - scroller.current.clientWidth);
      setRange(next);
      rangeValue.set(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [rangeValue]);

  return (
    <div className={cn("w-full relative", className)}>
      {/* Horizontal Scroller Container */}
      <div
        ref={scroller}
        className="h-[36rem] w-full overflow-y-auto scrollbar-none relative border-y border-white/10 bg-[#090c12]"
      >
        <div style={{ height: `calc(100% + ${range}px)` }} className="relative">
          <div className="sticky top-0 flex h-[36rem] flex-col justify-center overflow-hidden">
            
            {/* Header row with eyebrow, title, and hint */}
            <div className="mb-6 flex items-end justify-between gap-6 px-6 sm:px-12 max-w-7xl mx-auto w-full">
              <div>
                <p className="text-xs font-mono font-semibold tracking-wider text-[#2f6bff] uppercase">
                  Innovation Archive &bull; Scroll to Traverse
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
                  Sovereign Patent Portfolio (07 Registered)
                </h3>
              </div>
              <p className="hidden text-xs font-mono text-slate-400 sm:block">
                Vertical scroll glides patents horizontally &rarr;
              </p>
            </div>

            {/* Horizontal Track */}
            <motion.div
              ref={track}
              style={{ x }}
              className="flex w-max gap-5 px-6 sm:px-12"
            >
              {patentsData.map((patent, i) => (
                <div
                  key={patent.id}
                  data-cursor="view"
                  data-cursor-label="INSPECT"
                  onClick={() => setSelectedPatent(patent)}
                  className="group relative block w-[21rem] sm:w-[23rem] shrink-0 rounded-2xl border border-white/10 bg-[#0d1017] p-6 shadow-xl transition-all duration-300 hover:border-[#2f6bff]/50 hover:bg-[#111622] cursor-pointer"
                >
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between font-mono text-xs mb-3 text-slate-400">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-semibold text-[11px] uppercase">
                      {patent.country}
                    </span>
                    <span className="text-[11px] text-[#2f6bff] font-semibold flex items-center gap-1">
                      <FileCheck2 className="w-3.5 h-3.5" />
                      {patent.status.split("&")[0].trim()}
                    </span>
                  </div>

                  {/* Title & Patent Number */}
                  <div className="min-h-[4.5rem]">
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      {patent.number}
                    </span>
                    <h4 className="text-base font-bold text-white font-display tracking-tight leading-snug group-hover:text-slate-100 transition-colors line-clamp-2">
                      {patent.title}
                    </h4>
                  </div>

                  {/* Technical Summary */}
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {patent.summary}
                  </p>

                  {/* Significance Tag */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="truncate max-w-[180px] text-[11px]">
                      {patent.office}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#2f6bff] font-semibold text-xs group-hover:translate-x-0.5 transition-transform">
                      Inspect
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Serial Number Watermark */}
                  <span className="absolute bottom-3 right-4 text-3xl font-mono font-black text-white/[0.04] select-none pointer-events-none">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Thin Progress Line Underneath (Quarry UI Pattern) */}
            <div className="mx-6 sm:mx-12 mt-6 h-[2px] overflow-hidden rounded-full bg-white/10 max-w-7xl">
              <motion.div style={{ width: bar }} className="h-full bg-[#2f6bff]" />
            </div>

          </div>
        </div>
      </div>

      {/* Detail Inspection Modal for Selected Patent */}
      {selectedPatent && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-2xl rounded-2xl bg-[#0e121a] border border-white/15 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedPatent(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#2f6bff]/20 text-[#2f6bff] font-bold uppercase">
                {selectedPatent.country}
              </span>
              <span>{selectedPatent.number}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
              {selectedPatent.title}
            </h3>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                  Technical Architecture &amp; System Summary
                </span>
                <p className="leading-relaxed font-normal">{selectedPatent.summary}</p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                  Empirical Significance
                </span>
                <p className="leading-relaxed font-normal">{selectedPatent.significance}</p>
              </div>

              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px]">Office &amp; Jurisdiction</span>
                  <span className="text-white font-semibold">{selectedPatent.office}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Registration Status</span>
                  <span className="text-[#2f6bff] font-semibold">{selectedPatent.status}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-5 py-2 rounded-lg bg-[#2f6bff] hover:bg-[#2557d6] text-white font-semibold text-xs transition-colors"
              >
                Close Inspection
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HorizontalPatentGallery;
