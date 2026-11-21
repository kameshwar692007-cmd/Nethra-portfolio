import React from 'react';

export default function MarqueeStrip() {
  const items = [
    { label: "UK IPO Granted", code: "Design #6518777 (AI Power)", flag: "🇬🇧" },
    { label: "Canada CIPO Registered", code: "Reg #1249257 (Precision Oncology)", flag: "🇨🇦" },
    { label: "Govt of India Certified", code: "Cert #LD-20260188338 (Smart Irrigation)", flag: "🇮🇳" },
    { label: "UK IPO Granted", code: "Design #6513103 (Smart Sandal)", flag: "🇬🇧" },
    { label: "National Press", code: "207+ Verified Outlets &bull; 2.3M+ Reach", flag: "📰" },
    { label: "Annexra Technologies", code: "Founder &amp; CEO at Age 16", flag: "⚡" },
    { label: "Tamil Nadu Volunteers", code: "Manager – Technology &amp; Digital Systems", flag: "🏛️" },
    { label: "Miro Global Ambassador", code: "Design Sprints &amp; Workshops", flag: "🎨" },
    { label: "UN SDC Ambassador", code: "Global Member &bull; SDGs 3, 9, 13", flag: "🌐" },
    { label: "UK IPO Granted", code: "Design #6524277 (Biometric Kiosk)", flag: "🇬🇧" },
    { label: "Germany Framework", code: "DE-VEIN-AI-MED (NIR Vein Band)", flag: "🇩🇪" },
    { label: "IIT Madras", code: "CODE AI &amp; Data Science", flag: "🎓" },
  ];

  return (
    <div className="w-full bg-[#0a0d14] border-y border-slate-800/80 py-3 overflow-hidden select-none relative group">
      {/* Left and right vignette gradients */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#080a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#080a0f] to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-1.5 mx-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shrink-0 hover:border-slate-700 transition-colors"
          >
            <span>{item.flag}</span>
            <span className="font-semibold text-white">{item.label}:</span>
            <span 
              className="text-emerald-400 font-mono text-[11px]" 
              dangerouslySetInnerHTML={{ __html: item.code }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
