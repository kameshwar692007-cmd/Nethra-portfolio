import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeStrip() {
  const items = [
    { tag: "UK IPO", label: "Granted Design #6518777", sub: "AI Power Telemetry" },
    { tag: "CIPO CA", label: "Registered Reg #1249257", sub: "Precision Oncology AI" },
    { tag: "IP INDIA", label: "Certified #LD-20260188338", sub: "Smart Irrigation & Soil Sensors" },
    { tag: "UK IPO", label: "Granted Design #6513103", sub: "Smart Sandal Hardware" },
    { tag: "PRESS", label: "207+ Verified Outlets", sub: "2.3M+ National Readership" },
    { tag: "ANNEXRA", label: "Deep-Tech Enterprise", sub: "Incorporated at Age 16" },
    { tag: "TN GOV", label: "Tamil Nadu Volunteers", sub: "38 Revenue Districts Managed" },
    { tag: "MIRO", label: "Global Ambassador", sub: "Design Systems & Thinking" },
    { tag: "UN SDC", label: "Global Council Member", sub: "SDGs 3, 9 & 13" },
    { tag: "UK IPO", label: "Granted Design #6524277", sub: "Biometric Payment Kiosk" },
    { tag: "DPMA DE", label: "Framework DE-VEIN-AI-MED", sub: "Infrared Vein Sensor" },
    { tag: "IIT MADRAS", label: "CODE Accreditation", sub: "AI & Data Science" },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full bg-[#080a0f] border-y border-white/[0.08] py-2.5 overflow-hidden select-none relative">
      {/* Vignette side gradients for smooth fade */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-28 bg-gradient-to-r from-[#080a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-28 bg-gradient-to-l from-[#080a0f] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max gap-3 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 38,
        }}
        whileHover={{ transition: { duration: 120 } }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1017] border border-white/[0.08] hover:border-cyan-500/30 text-xs shrink-0 transition-colors"
          >
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider">
              {item.tag}
            </span>
            <span className="font-semibold text-white/90 text-xs">{item.label}</span>
            <span className="text-slate-500 text-[10px] font-mono">&bull;</span>
            <span className="text-slate-400 font-mono text-[11px] font-normal">
              {item.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
