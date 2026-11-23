import React from "react";
import { motion } from "framer-motion";
import { Cpu, Network, Rocket } from "lucide-react";
import { cn } from "../../lib/utils";

const DEFAULT_CARDS = [
  {
    icon: <Cpu className="w-5 h-5 text-[#2f6bff]" />,
    stat: "07",
    label: "Sovereign Inventions",
    title: "Registered Patents & IP",
    body: "Multi-national intellectual property filed and registered across UK IPO, CIPO Canada, IP India, and DPMA Germany.",
    tint: "bg-[#2f6bff]/10 text-[#2f6bff] border border-[#2f6bff]/20",
  },
  {
    icon: <Network className="w-5 h-5 text-[#2f6bff]" />,
    stat: "38",
    label: "Statewide Infrastructure",
    title: "Districts Active (TNV)",
    body: "Directing centralized volunteer databases, disaster dispatch portals, and mission-critical cloud deployments.",
    tint: "bg-[#2f6bff]/10 text-[#2f6bff] border border-[#2f6bff]/20",
  },
  {
    icon: <Rocket className="w-5 h-5 text-[#2f6bff]" />,
    stat: "Age 16",
    label: "Deep-Tech Enterprise",
    title: "Founder & Director (CEO)",
    body: "Incorporated Annexra Technologies Pvt Ltd to convert grassroots research into sovereign, commercial-grade hardware & AI.",
    tint: "bg-[#2f6bff]/10 text-[#2f6bff] border border-[#2f6bff]/20",
  },
];

export function TiltedFeatureCards({
  cards = DEFAULT_CARDS,
  className,
}) {
  return (
    <section className={cn("w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[var(--border)] relative", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#2f6bff] uppercase mb-2">
          Empirical Scale &amp; Proof of Velocity
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--foreground)] font-display">
          Three Concurrent Realities. Zero Theoretical Hype.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          The convergence of multi-national patent drafting, state-scale civic infrastructure deployment, and early enterprise incorporation.
        </p>
      </div>

      {/* Clean 3-Card Grid with zero overlap and silky hover lift */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="rounded-2xl border border-[var(--border)] bg-[#0d1017] p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className={cn("w-10 h-10 rounded-xl grid place-items-center transition-transform group-hover:scale-105", card.tint)}>
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  {card.label}
                </span>
              </div>

              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] font-mono">
                {card.stat}
              </p>
              <h3 className="mt-2 text-base font-bold text-[var(--foreground)] font-display">
                {card.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-[var(--text-secondary)] font-normal">
                {card.body}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Verified Execution</span>
              <span className="text-[#2f6bff] font-semibold">&bull; Active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TiltedFeatureCards;
