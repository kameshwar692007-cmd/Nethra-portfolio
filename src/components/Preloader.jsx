import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    // High performance smooth 60fps/120fps progress countdown without artificial delay
    let startTimestamp = null;
    const duration = 480; // Crisp, cinematic 480ms unmasking
    let rafId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          onComplete?.();
        }, 100);
      }
    };

    rafId = requestAnimationFrame(step);

    // Escape listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        cancelAnimationFrame(rafId);
        setIsFinished(true);
        onComplete?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          y: -40,
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 z-[99999] bg-[#07090e] flex flex-col items-center justify-center p-6 select-none"
      >
        {/* Subtle Background Grid Mesh */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Central Branded Mask Container */}
        <div className="relative max-w-xl w-full text-center space-y-5">
          
          {/* Animated Blueprint Line Motif */}
          <div className="flex items-center justify-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-10 h-[1.5px] bg-[#2f6bff]"
            />
            <span className="text-[11px] font-mono tracking-widest text-[#2f6bff] font-bold uppercase">
              Innovation Core &bull; 2026
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-10 h-[1.5px] bg-[#2f6bff]"
            />
          </div>

          {/* Masked Name Reveal */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display"
            >
              NETHRA NEHA DS
            </motion.h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs sm:text-sm font-mono text-slate-400"
            >
              07 Sovereign Patents &bull; Clinical AI &bull; 38 Districts Infrastructure
            </motion.p>
          </div>

          {/* Real Progress Meter */}
          <div className="w-48 sm:w-64 mx-auto pt-3 space-y-2">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#2f6bff]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>INITIALIZING SYSTEM</span>
              <span className="text-[#2f6bff] font-bold">{progress}%</span>
            </div>
          </div>

        </div>

        {/* Skip [Esc] */}
        <button
          onClick={() => {
            setIsFinished(true);
            onComplete?.();
          }}
          className="absolute bottom-8 text-[11px] font-mono text-slate-500 hover:text-white px-3 py-1 rounded border border-white/10 transition-colors uppercase tracking-widest"
        >
          Skip [Esc]
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
