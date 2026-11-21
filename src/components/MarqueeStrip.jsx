import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeStrip() {
  const items = [
    { tag: "UK IPO", label: "Granted Design #6518777", sub: "AI Power Telemetry System" },
    { tag: "CIPO CA", label: "Registered Reg #1249257", sub: "Clinical Precision Oncology AI" },
    { tag: "IP INDIA", label: "Certified #LD-20260188338", sub: "Smart Irrigation & Soil Sensors" },
    { tag: "UK IPO", label: "Granted Design #6513103", sub: "Smart Sandal Hardware Architecture" },
    { tag: "PRESS", label: "207+ Verified Outlets", sub: "2.3M+ National Audience Reach" },
    { tag: "ANNEXRA", label: "Deep-Tech Enterprise", sub: "Founded & Incorporated at Age 16" },
    { tag: "TN GOV", label: "Tamil Nadu Volunteers", sub: "38 Revenue Districts Infrastructure" },
    { tag: "MIRO", label: "Global Ambassador", sub: "Design Thinking & Frameworks" },
    { tag: "UN SDC", label: "Global Council Member", sub: "Sustainable Development Goals 3, 9, 13" },
    { tag: "UK IPO", label: "Granted Design #6524277", sub: "Biometric Payment & Telemetry Kiosk" },
    { tag: "DPMA DE", label: "Framework DE-VEIN-AI-MED", sub: "Infrared Vein Sensor Device" },
    { tag: "IIT MADRAS", label: "CODE AI & Data Science", sub: "Accredited Technical Program" },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full bg-[#080a0f] border-y border-white/10 py-3 overflow-hidden select-none relative">
      {/* Quarry UI inspired edge fade mask */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-[#080a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-[#080a0f] to-transparent z-10 pointer-events-none" />

      {/* Luxuriously smooth, slow drift (85 seconds duration — NOT fast) */}
      <motion.div
        className="flex w-max gap-3.5 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 85,
        }}
        whileHover={{ transition: { duration: 250 } }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/50 text-xs shrink-0 transition-colors shadow-sm"
          >
            <span className="px-2 py-0.5 rounded-md bg-[#2f6bff]/15 border border-[#2f6bff]/30 text-[#2f6bff] font-mono text-[10px] font-bold uppercase tracking-wider">
              {item.tag}
            </span>
            <span className="font-semibold text-white text-xs">{item.label}</span>
            <span className="text-slate-600 text-[10px] font-mono">&bull;</span>
            <span className="text-slate-400 font-mono text-[11px] font-normal">
              {item.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
