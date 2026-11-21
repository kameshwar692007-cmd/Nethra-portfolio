import React, { useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Quarry UI SpotlightCard System
 * A card grid that shares one pointer spotlight across surfaces and borders.
 * Uses CSS custom properties --mx, --my, --on.
 * Surface glow is tuned to 0.08 opacity so text content is never obscured.
 */
export function SpotlightGrid({ children, className }) {
  const grid = useRef(null);

  const move = (e) => {
    if (!grid.current) return;
    grid.current.querySelectorAll("[data-spot]").forEach((el) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      el.style.setProperty("--on", "1");
    });
  };

  const leave = () => {
    if (!grid.current) return;
    grid.current.querySelectorAll("[data-spot]").forEach((el) => {
      el.style.setProperty("--on", "0");
    });
  };

  return (
    <div
      ref={grid}
      onPointerMove={move}
      onPointerLeave={leave}
      className={cn("w-full", className)}
    >
      {children}
    </div>
  );
}

export function SpotlightCardItem({ children, className, style, ...props }) {
  return (
    <div
      data-spot
      style={{
        "--mx": "-999px",
        "--my": "-999px",
        "--on": "0",
        ...style,
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1017] p-6 transition-colors",
        className
      )}
      {...props}
    >
      {/* Surface glow: subtle so text content is never obscured */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--on)",
          background:
            "radial-gradient(280px circle at var(--mx) var(--my), rgba(47, 107, 255, 0.08), transparent 70%)",
        }}
      />
      {/* Border glow: masked to 1px edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl p-px transition-opacity duration-300"
        style={{
          opacity: "var(--on)",
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), #2f6bff, transparent 70%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default SpotlightGrid;
