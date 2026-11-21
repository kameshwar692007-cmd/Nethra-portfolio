import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("init"); // "init" -> "reveal" -> "exit"
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check if user previously saw loader in this session or prefers reduced motion
    const hasSeenLoader = sessionStorage.getItem("nethra_preloader_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenLoader || prefersReducedMotion) {
      onComplete?.();
      return;
    }

    // Monitor actual document readiness and primary assets
    const imagesToPreload = [
      "/assets/nethra-portrait.jpeg",
      "/assets/news-just-now-salem.jpeg",
      "/assets/award-kalai-thiruvizha.jpeg",
    ];

    let loadedCount = 0;
    const totalAssets = imagesToPreload.length + 1; // +1 for DOM readiness

    const updateProgress = () => {
      loadedCount++;
      const current = Math.round((loadedCount / totalAssets) * 100);
      setProgress(current);
      if (loadedCount >= totalAssets) {
        setTimeout(() => setStage("reveal"), 400);
        setTimeout(() => {
          setStage("exit");
          setTimeout(() => {
            sessionStorage.setItem("nethra_preloader_seen", "true");
            onComplete?.();
          }, 600);
        }, 1600);
      }
    };

    // Check document readiness
    if (document.readyState === "complete") {
      updateProgress();
    } else {
      window.addEventListener("load", updateProgress, { once: true });
    }

    // Preload critical hero images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Don't hang on network error
    });

    // Keyboard escape listener to skip
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        skip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Hard fallback timeout: max 2.8s
    const fallbackTimer = setTimeout(() => {
      skip();
    }, 2800);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const skip = () => {
    setIsSkipped(true);
    sessionStorage.setItem("nethra_preloader_seen", "true");
    onComplete?.();
  };

  if (isSkipped) return null;

  return (
    <AnimatePresence>
      {stage !== "exit" && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#07090e] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Background Grid Mesh */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Central Typography Mask Reveal */}
          <div className="relative max-w-xl w-full text-center space-y-6">
            
            {/* Minimal Geometric Blueprint Motif */}
            <div className="flex items-center justify-center gap-3">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-12 h-[1px] bg-[#2f6bff]"
              />
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                Annexra Innovation Core &bull; 2026
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-12 h-[1px] bg-[#2f6bff]"
              />
            </div>

            {/* Masked Name Reveal */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display"
              >
                NETHRA NEHA DS
              </motion.h1>
            </div>

            {/* Sub-label */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                className="text-xs sm:text-sm font-mono text-slate-400"
              >
                Clinical AI &bull; 7 Sovereign Patents &bull; Civic Infrastructure
              </motion.p>
            </div>

            {/* Real Initialization Meter */}
            <div className="w-48 sm:w-64 mx-auto pt-4 space-y-2">
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#2f6bff]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>SYSTEM_READY</span>
                <span>{progress}%</span>
              </div>
            </div>

          </div>

          {/* Skip Button */}
          <button
            onClick={skip}
            className="absolute bottom-8 text-xs font-mono text-slate-500 hover:text-white px-3 py-1.5 rounded border border-white/10 transition-colors uppercase tracking-widest"
          >
            Skip [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
