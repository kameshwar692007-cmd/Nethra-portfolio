import React from "react";
import { motion } from "framer-motion";
import { Cpu, Network, Rocket } from "lucide-react";
import { cn } from "../../lib/utils";

const DEFAULT_CARDS = [
  {
    icon: <Cpu className="w-5 h-5 text-[#2f6bff]" />,
    stat: "07",
    title: "Sovereign Patents & IP",
    body: "Multi-national intellectual property filed and registered across UK IPO, CIPO Canada, IP India, and DPMA Germany.",
    rotate: -4,
    offset: 16,
    tint: "bg-[#2f6bff]/10 text-[#2f6bff] border border-[#2f6bff]/20",
  },
  {
    icon: <Network className="w-5 h-5 text-cyan-400" />,
    stat: "38",
    title: "Districts Statewide",
    body: "Directing centralized IT infrastructure, volunteer databases, and disaster dispatch pipelines for Tamil Nadu Volunteers.",
    rotate: 0,
    offset: -8,
    tint: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  },
  {
    icon: <Rocket className="w-5 h-5 text-indigo-400" />,
    stat: "Age 16",
    title: "Deep-Tech Founder",
    body: "Incorporated Annexra Technologies Pvt Ltd to engineer clinical AI algorithms and telemetry hardware from Salem.",
    rotate: 4,
    offset: 16,
    tint: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  },
];

export function TiltedFeatureCards({
  cards = DEFAULT_CARDS,
  className,
}) {
  return (
    <section className={cn("w-full overflow-hidden px-4 sm:px-6 py-12 relative", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#2f6bff] uppercase mb-2">
          Empirical Scale &amp; Proof of Velocity
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
          Three Concurrent Realities. Zero Theoretical Hype.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The convergence of multi-national patent drafting, state-scale civic infrastructure deployment, and early enterprise incorporation.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-5 md:flex-row md:items-end md:justify-center md:gap-0">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: card.offset, rotate: card.rotate }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: card.offset - 14, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20, delay: i * 0.08 }}
            style={{ zIndex: i === 1 ? 10 : 1 }}
            className={cn(
              "w-full max-w-xs rounded-2xl border border-white/10 bg-[#0d1017] p-6 shadow-xl transition-colors md:w-72 hover:border-[#2f6bff]/50 cursor-pointer",
              i === 1 && "shadow-2xl md:mx-[-1.25rem] bg-[#0f1420] border-[#2f6bff]/40"
            )}
          >
            <div className={cn("mb-4 grid w-10 h-10 place-items-center rounded-xl", card.tint)}>
              {card.icon}
            </div>
            <p className="text-3xl font-extrabold tracking-tight text-white font-mono">{card.stat}</p>
            <p className="mt-1.5 text-sm font-bold text-white font-display">{card.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 font-normal">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TiltedFeatureCards;
