import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeStrip() {
  const items = [
    { label: "UK IPO Granted", code: "Design #6518777 (AI Power Telemetry)", flag: "🇬🇧" },
    { label: "Canada CIPO Registered", code: "Reg #1249257 (Precision Oncology)", flag: "🇨🇦" },
    { label: "Govt of India Certified", code: "Cert #LD-20260188338 (Smart Irrigation)", flag: "🇮🇳" },
    { label: "UK IPO Granted", code: "Design #6513103 (Smart Sandal Hardware)", flag: "🇬🇧" },
    { label: "National Pressroom", code: "207+ Verified Outlets • 2.3M+ Reach", flag: "📰" },
    { label: "Annexra Technologies", code: "Deep-Tech Startup • Inc. at 16", flag: "⚡" },
    { label: "Tamil Nadu Volunteers", code: "Manager – Tech & Digital Systems (38 Districts)", flag: "🏛️" },
    { label: "Miro Global Ambassador", code: "Design Thinking & Systems", flag: "🎨" },
    { label: "UN SDC Ambassador", code: "Global Member • SDGs 3, 9, 13", flag: "🌐" },
    { label: "UK IPO Granted", code: "Design #6524277 (Biometric Payment Kiosk)", flag: "🇬🇧" },
    { label: "Germany Framework", code: "DE-VEIN-AI-MED (Infrared Vein Sensor)", flag: "🇩🇪" },
    { label: "IIT Madras Accreditations", code: "CODE AI & Data Science", flag: "🎓" },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full bg-[#0a0c10] border-y border-white/[0.08] py-3 overflow-hidden select-none relative">
      {/* Vignette side gradients for smooth fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0a0c10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0a0c10] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max gap-3 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
        whileHover={{ transition: { duration: 120 } }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0e121a] border border-white/[0.08] hover:border-cyan-500/30 text-xs shrink-0 transition-colors"
          >
            <span className="text-sm">{item.flag}</span>
            <span className="font-semibold text-white/90 text-xs">{item.label}:</span>
            <span className="text-cyan-400 font-mono text-[11px] font-medium tracking-tight">
              {item.code}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
