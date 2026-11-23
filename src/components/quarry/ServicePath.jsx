"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Bot, Code2, Search, Smartphone, Sparkles, Award } from "lucide-react";
import { cn } from "../../lib/utils";

export const MILESTONES_DATA = [
  {
    words: ["2020", "Inquisitive Foundations"],
    icon: <Code2 className="w-4 h-4" />,
    body: "Entered GHSS Periyavadangampatti with deep passion for computer science and biological systems, initiating self-guided research into scalable software.",
    tags: ["GHSS Salem", "Bio-Maths", "Self-Taught Architecture"],
  },
  {
    words: ["2023", "National Science Honor"],
    icon: <Sparkles className="w-4 h-4" />,
    body: "Selected for National Children's Science Congress (NCSC) and honored with State Kalai Thiruvizha award for applied scientific inventions.",
    tags: ["NCSC India", "State Honor", "Applied Science"],
  },
  {
    words: ["2024", "Diplomacy & Cloud"],
    icon: <Search className="w-4 h-4" />,
    body: "Represented Belgium as delegate at International Model United Nations (IMUN); pioneered GCP cloud system architecture.",
    tags: ["IMUN Delegate", "Belgium", "Google Cloud"],
  },
  {
    words: ["2025", "Multi-Patent Breakthroughs"],
    icon: <Bot className="w-4 h-4" />,
    body: "Authored and filed 7 sovereign patents across the UK, Canada, India, and Germany in predictive power AI and clinical oncology diagnostics.",
    tags: ["7 Sovereign Patents", "UK IPO", "Clinical Oncology"],
  },
  {
    words: ["2026", "Annexra Tech & 38 Districts"],
    icon: <Smartphone className="w-4 h-4" />,
    body: "Incorporated Annexra Technologies as CEO at 16, profiled across 207+ national news agencies, while orchestrating IT systems for 38 districts of TN Volunteers.",
    tags: ["Founder & CEO (16)", "38 Districts", "207+ Media Outlets"],
  },
];

const PW = 1440;
const SEG = 430;
const TOP = 300;
const lerp = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
const bez = (p, t) => {
  const u = 1 - t;
  return {
    x: u ** 3 * p[0].x + 3 * u * u * t * p[1].x + 3 * u * t * t * p[2].x + t ** 3 * p[3].x,
    y: u ** 3 * p[0].y + 3 * u * u * t * p[1].y + 3 * u * t * t * p[2].y + t ** 3 * p[3].y,
  };
};
const split = (p, t) => {
  const a = lerp(p[0], p[1], t),
    b = lerp(p[1], p[2], t),
    c = lerp(p[2], p[3], t);
  const d = lerp(a, b, t),
    e = lerp(b, c, t),
    f = lerp(d, e, t);
  return [
    [p[0], a, d, f],
    [f, e, c, p[3]],
  ];
};
const cub = (p) => ` C ${p[1].x} ${p[1].y} ${p[2].x} ${p[2].y} ${p[3].x} ${p[3].y}`;

/** A loop that leaves and rejoins the line with the same heading, so it never kinks. */
function loop(m, tx, ty, r, drift) {
  const pts = [];
  for (let k = 1; k <= 90; k++) {
    const f = (k / 90) * Math.PI * 2;
    const fwd = (drift * k) / 90 + r * Math.sin(f);
    const side = r * (1 - Math.cos(f));
    pts.push({ x: m.x + tx * fwd + ty * side, y: m.y + ty * fwd - tx * side });
  }
  return pts;
}

function build(n) {
  const way = Array.from({ length: n }, (_, i) => ({ x: i % 2 ? 470 : 960, y: TOP + i * SEG }));
  const H = TOP + n * SEG;
  const start = { x: -140, y: 70 };
  let d = `M ${start.x} ${start.y}` + cub([start, { x: start.x + 360, y: start.y }, { x: way[0].x, y: way[0].y - 200 }, way[0]]);
  for (let i = 1; i < n; i++) {
    const a = way[i - 1],
      b = way[i],
      k = SEG * 0.64;
    const c = [a, { x: a.x, y: a.y + k }, { x: b.x, y: b.y - k }, b];
    if (i === 3) {
      const [l] = split(c, 0.36);
      const m = l[3],
        m2 = bez(c, 0.47);
      const dist = Math.hypot(m2.x - m.x, m2.y - m.y);
      d += cub(l) + loop(m, (m2.x - m.x) / dist, (m2.y - m.y) / dist, 84, dist).map((q) => ` L ${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join("");
      d += cub(split(c, 0.47)[1]);
    } else {
      d += cub(c);
    }
  }
  const last = way[n - 1],
    end = { x: PW + 200, y: H - 80 };
  d += cub([last, { x: last.x, y: last.y + 300 }, { x: end.x - 520, y: end.y }, end]);
  return { way, H, d };
}

function Title({ s }) {
  return (
    <h3 className="font-display font-extrabold text-[clamp(1.5rem,3.2vw,2.85rem)] uppercase leading-[1.0] tracking-tight break-words text-[var(--foreground)]">
      <span>{s.words[0]}</span>{" "}
      <span className="mx-2 sm:mx-3 inline-grid size-[1.65em] sm:size-[1.85em] -translate-y-[0.08em] -rotate-6 place-items-center rounded-2xl sm:rounded-3xl bg-[#2f6bff] align-middle text-white shadow-lg shadow-[#2f6bff]/35 ring-2 ring-[#38bdf8]/40 [&_svg]:!w-[0.95em] [&_svg]:!h-[0.95em] transition-transform hover:scale-110">
        {s.icon}
      </span>{" "}
      <span className="text-[#38bdf8] block sm:inline drop-shadow-[0_2px_12px_rgba(56,189,248,0.25)]">
        {s.words[1]}
      </span>
    </h3>
  );
}

function Bubble({ s, tilt }) {
  return (
    <div
      style={{ rotate: `${tilt}deg` }}
      className="mt-3.5 max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[4px_4px_0_0_#2f6bff] transition-all hover:rotate-0 duration-300"
    >
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
        {s.body}
      </p>
      <ul className="mt-3.5 flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-[#2f6bff]/30 bg-[#2f6bff]/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-[#2f6bff]"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * ServicePath adapted for Nethra Neha DS Chronological Milestones.
 * Draws an interactive path down the page as you scroll, looping and revealing milestones.
 */
export function ServicePath({
  services = MILESTONES_DATA,
  eyebrow = "Sequential Empirical Track &bull; 2020 — 2026",
  title = ["Chronological", "Milestones"],
  lead = "From rural government school science exhibitions to sovereign patent registrations and statewide civic digital infrastructure.",
  container,
  className,
}) {
  const n = services.length;
  const { way, H, d } = useMemo(() => build(n), [n]);
  const scene = useRef(null);
  const ghost = useRef(null);
  const pen = useRef(null);
  const [at, setAt] = useState([]);
  const [len, setLen] = useState(0);
  const { scrollYProgress } = useScroll({
    target: scene,
    container,
    offset: ["start 72%", "end 62%"],
  });

  useEffect(() => {
    const g = ghost.current;
    if (!g) return;
    const total = g.getTotalLength();
    setAt(
      way.map((w) => {
        let best = 0,
          bd = Infinity;
        for (let l = 0; l <= total; l += 6) {
          const p = g.getPointAtLength(l);
          const dd = (p.x - w.x) ** 2 + (p.y - w.y) ** 2;
          if (dd < bd) {
            bd = dd;
            best = l;
          }
        }
        return best;
      })
    );
  }, [way]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const g = ghost.current;
    if (!g) return;
    const l = Math.min(1, Math.max(0, p)) * g.getTotalLength();
    const pt = g.getPointAtLength(l);
    pen.current?.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
    setLen(l);
  });

  const head = (
    <header className="mx-auto max-w-4xl px-6 text-center mb-6">
      <p
        className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#2f6bff]"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <h2 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[var(--foreground)]">
        <span className="block">{title[0]}</span>
        <span className="block text-[#2f6bff]">{title[1]}</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
        {lead}
      </p>
    </header>
  );

  return (
    <div className={cn("w-full overflow-x-clip py-12 relative", className)}>
      {head}
      
      {/* Desktop & Tablet Interactive Animated Path */}
      <div
        ref={scene}
        style={{ aspectRatio: `${PW} / ${H}` }}
        className="relative mx-auto mt-8 hidden w-full max-w-[85rem] md:block px-4"
      >
        <svg
          viewBox={`0 0 ${PW} ${H}`}
          className="absolute inset-0 size-full overflow-visible"
          aria-hidden
        >
          <path
            ref={ghost}
            d={d}
            fill="none"
            stroke="var(--border)"
            strokeWidth="24"
            strokeLinecap="round"
          />
          <motion.path
            d={d}
            fill="none"
            stroke="#2f6bff"
            strokeWidth="24"
            strokeLinecap="round"
            style={{ pathLength: scrollYProgress }}
          />
          <g ref={pen} transform="translate(-140 70)">
            <circle r="22" fill="var(--foreground)" />
            <circle r="8" fill="#2f6bff" />
          </g>
        </svg>

        {services.map((s, i) => {
          const on = at.length > 0 && len >= at[i] - (i === 0 ? 900 : 300);
          const isRight = way[i].x !== 960; // Opposite side of path
          const targetX = isRight ? 930 : 490; // Pull slightly inward to prevent edge collisions
          return (
            <motion.div
              key={s.words.join()}
              animate={on ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              style={{ left: `${(targetX / PW) * 100}%`, top: `${(way[i].y / H) * 100}%` }}
              className={cn(
                "absolute w-[44%] max-w-[450px] -translate-y-1/2",
                isRight ? "-translate-x-1/2 pr-3" : "-translate-x-1/2 pl-3"
              )}
            >
              <Title s={s} />
              <Bubble s={s} tilt={i % 2 ? -2.5 : 2.5} />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Stacked Cards */}
      <ul className="mx-auto mt-8 grid max-w-xl gap-8 px-4 md:hidden">
        {services.map((s, i) => (
          <li key={s.words.join()} className="space-y-2">
            <Title s={s} />
            <Bubble s={s} tilt={i % 2 ? -2 : 2} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicePath;
