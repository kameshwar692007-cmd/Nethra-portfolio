import React from 'react';
import { ShieldCheck, Award, Newspaper, Sparkles } from 'lucide-react';

export default function MarqueeStrip() {
  const items = [
    { label: "UK IPO Granted", code: "Design #6518777 (AI Power Telemetry)", flag: "🇬🇧" },
    { label: "Canada CIPO Registered", code: "Reg #1249257 (Precision Oncology)", flag: "🇨🇦" },
    { label: "Govt of India Certified", code: "Cert #LD-20260188338 (Smart Irrigation)", flag: "🇮🇳" },
    { label: "UK IPO Granted", code: "Design #6513103 (Smart Sandal Hardware)", flag: "🇬🇧" },
    { label: "National Pressroom", code: "207+ Verified Outlets &bull; 2.3M+ Reach", flag: "📰" },
    { label: "Annexra Technologies", code: "Deep-Tech Startup &bull; Inc. at 16", flag: "⚡" },
    { label: "Tamil Nadu Volunteers", code: "Manager – Tech &amp; Digital Systems (38 Districts)", flag: "🏛️" },
    { label: "Miro Global Ambassador", code: "Design Thinking &amp; Frameworks", flag: "🎨" },
    { label: "UN SDC Ambassador", code: "Global Member &bull; SDGs 3, 9, 13", flag: "🌐" },
    { label: "UK IPO Granted", code: "Design #6524277 (Biometric Payment Kiosk)", flag: "🇬🇧" },
    { label: "Germany DPMA", code: "DE-VEIN-AI-MED (Infrared Vein Sensor)", flag: "🇩🇪" },
    { label: "IIT Madras Accreditations", code: "CODE AI &amp; Data Science", flag: "🎓" },
  ];

  return (
    <div className="w-full bg-[#0b0f19] border-y-2 border-[#202c44] py-3.5 overflow-hidden select-none relative group">
      {/* Left and right vignette gradients */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0b0f19] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0b0f19] to-transparent z-10 pointer-events-none" />

      {/* Marquee track with silky 60fps translation */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3.5 py-1.5 mx-2 rounded-xl bg-[#141d30] border-2 border-[#23304a] text-xs text-slate-300 shrink-0 hover:border-emerald-500/50 hover:bg-[#18243b] transition-all shadow-sm"
          >
            <span className="text-sm">{item.flag}</span>
            <span className="font-extrabold text-white font-display text-xs">{item.label}:</span>
            <span 
              className="text-emerald-400 font-mono text-[11px] font-semibold" 
              dangerouslySetInnerHTML={{ __html: item.code }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
