"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * WordmarkFooter from Quarry UI adapted for Nethra Neha DS.
 * A calm footer ending on an oversized wordmark with a soft pointer spotlight.
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
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 240, damping: 26 });
  const sy = useSpring(y, { stiffness: 240, damping: 26 });
  const mask = useMotionTemplate`radial-gradient(300px circle at ${sx}px ${sy}px, black 30%, transparent 80%)`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        onPointerMove={(e) => {
          if (!ref.current) return;
          const r = ref.current.getBoundingClientRect();
          x.set(e.clientX - r.left);
          y.set(e.clientY - r.top);
        }}
        onPointerLeave={() => {
          x.set(-500);
          y.set(-500);
        }}
        className="relative select-none px-4 pb-4 pt-6 border-t border-[var(--border)]/40 overflow-hidden cursor-default group"
      >
        {/* Soft Ambient Radial Light Following Pointer */}
        <motion.div
          style={{
            left: sx,
            top: sy,
            transform: "translate(-50%, -50%)",
          }}
          className="pointer-events-none absolute w-[380px] h-[380px] rounded-full bg-[#2f6bff]/20 dark:bg-[#2f6bff]/25 blur-[60px] opacity-90 transition-opacity"
        />

        {/* Base Subdued Wordmark — Visible in both Light and Dark */}
        <p
          aria-hidden
          className="text-center text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-[var(--foreground)]/12 dark:text-[var(--foreground)]/[0.08] font-display"
        >
          {word}
        </p>

        {/* Spotlight Illuminated Layer — Highly Visible Electric Blue Glow in Light & White in Dark */}
        <motion.p
          aria-hidden
          style={{ WebkitMaskImage: mask, maskImage: mask }}
          className="pointer-events-none absolute inset-x-4 top-6 text-center text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.85] tracking-tighter text-[#2f6bff] dark:text-white drop-shadow-[0_0_30px_rgba(47,107,255,0.7)] font-display"
        >
          {word}
        </motion.p>
        <span className="sr-only">{word}</span>
      </div>

      <div className="px-6 py-4 text-center text-[11px] text-[var(--text-muted)] border-t border-[var(--border)]/30">
        07 Sovereign Registered Patents Across 4 Jurisdictions &bull; Directing TN Volunteers Digital Systems
      </div>
    </footer>
  );
}
