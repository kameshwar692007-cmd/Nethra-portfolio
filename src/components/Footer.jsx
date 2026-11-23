"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * WordmarkFooter adapted for Nethra Neha DS.
 * A calm footer ending on an oversized wordmark with a soft, non-intrusive pointer spotlight,
 * with continuous ambient light gliding and touch-responsiveness on mobile.
 */
export default function Footer({
  word = "Nethra Neha",
  links = [
    { label: "About", href: "#about" },
    { label: "Patents", href: "#patents" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Leadership", href: "#leadership" },
    { label: "Credentials", href: "#credentials" },
    { label: "Media", href: "#media" },
    { label: "Contact", href: "#contact" },
  ],
  className,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(100);
  const y = useMotionValue(50);
  const sx = useSpring(x, { stiffness: 220, damping: 28 });
  const sy = useSpring(y, { stiffness: 220, damping: 28 });
  const mask = useMotionTemplate`radial-gradient(240px circle at ${sx}px ${sy}px, black 30%, transparent 80%)`;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // On mobile touch devices, continuously sweep the spotlight across the wordmark
  useEffect(() => {
    if (!isMobile) return;
    let start = null;
    let rafId;
    const loop = (ts) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const r = ref.current?.getBoundingClientRect();
      const w = r ? r.width : 360;
      const h = r ? r.height : 120;
      // Gentle sine oscillation across wordmark (between 15% and 85% width)
      const progress = (Math.sin(elapsed * 1.5) + 1) / 2;
      const posX = w * 0.15 + progress * (w * 0.7);
      const posY = h * 0.5;
      if (!isHovered) {
        x.set(posX);
        y.set(posY);
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile, isHovered, x, y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePointerEnter = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const enterX = e.clientX - r.left;
    const enterY = e.clientY - r.top;
    x.jump(enterX);
    y.jump(enterY);
    setIsHovered(true);
  };

  const handlePointerMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = (e) => {
    if (!ref.current || !e.touches[0]) return;
    const r = ref.current.getBoundingClientRect();
    x.jump(e.touches[0].clientX - r.left);
    y.jump(e.touches[0].clientY - r.top);
    setIsHovered(true);
  };

  const handleTouchMove = (e) => {
    if (!ref.current || !e.touches[0]) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.touches[0].clientX - r.left);
    y.set(e.touches[0].clientY - r.top);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsHovered(false), 2000);
  };

  return (
    <footer
      className={cn(
        "w-full overflow-hidden border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] font-mono",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--text-muted)]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors hover:text-[#2f6bff] font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <span>&copy; 2026 Annexra Technologies Pvt Ltd</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[var(--card)] hover:bg-[#2f6bff]/10 border border-[var(--border)] text-[var(--foreground)] hover:text-[#2f6bff] transition-all ml-2"
            title="Return to Top"
            aria-label="Return to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative select-none px-4 pb-4 pt-6 border-t border-[var(--border)]/40 overflow-hidden cursor-default group"
      >
        {/* Soft Ambient Radial Spotlight — Active on Hover & Ambiently Gliding on Mobile */}
        <motion.div
          style={{
            left: sx,
            top: sy,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: isMobile || isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full bg-[#2f6bff]/20 dark:bg-[#2f6bff]/25 blur-[40px]"
        />

        {/* Base Subdued Wordmark — Visible in both Light and Dark */}
        <p
          aria-hidden
          className="text-center text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-[var(--foreground)]/12 dark:text-[var(--foreground)]/[0.08] font-display"
        >
          {word}
        </p>

        {/* Spotlight Illuminated Layer — Refined, soft, executive sheen */}
        <motion.p
          aria-hidden
          style={{ WebkitMaskImage: mask, maskImage: mask }}
          animate={{ opacity: isMobile || isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-x-4 top-6 text-center text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-[#2f6bff] dark:text-white drop-shadow-[0_0_15px_rgba(47,107,255,0.3)] font-display"
        >
          {word}
        </motion.p>
        <span className="sr-only">{word}</span>
      </div>

      {/* Bottom Footer Details — Generous bottom padding on mobile so MobileQuickNav dock never hides content */}
      <div className="px-6 pt-4 pb-24 md:pb-6 text-center text-[11px] text-[var(--text-muted)] border-t border-[var(--border)]/30">
        07 Sovereign Registered Patents Across 4 Jurisdictions &bull; Directing TN Volunteers Digital Systems
      </div>
    </footer>
  );
}
