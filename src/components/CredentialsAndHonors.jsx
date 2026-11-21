import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { honorsData, certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Languages } from 'lucide-react';

export default function CredentialsAndHonors() {
  const [activeTab, setActiveTab] = useState('honors');

  const governmentPledges = [
    { title: "Energy Efficiency Pledge", ministry: "Energy Efficiency Services Ltd, Ministry of Power", id: "2484488976" },
    { title: "Decade of Digital India Pledge", ministry: "Digital India Corp, Ministry of Electronics & IT", id: "8642976629" },
    { title: "Voluntary Blood Donation Pledge", ministry: "National Blood Transfusion Council (NBTC), MoHFW", id: "7962788497" },
    { title: "Healthier Living (World Liver Day)", ministry: "Ministry of Health & Family Welfare / FSSAI", id: "8957636429" },
    { title: "Tobacco-Free Youth Campaign 2.0", ministry: "Ministry of Health and Family Welfare, Govt of India", id: "7948867587" },
    { title: "Pledge Against Child Marriage", ministry: "Ministry of Women & Child Development, Govt of India", id: "5544788652" },
    { title: "Support Women Artisans & Weavers", ministry: "Central Cottage Industries Corp of India Ltd", id: "8843766559" },
  ];

  const tabs = [
    { id: 'honors', label: `National Honors & Awards (${honorsData.length})` },
    { id: 'certs', label: `Certifications & Training (${certificationsData.length})` },
    { id: 'pledges', label: `Govt of India Pledges (${governmentPledges.length})` },
  ];

  return (
    <section id="credentials" className="py-14 sm:py-20 bg-[#0b0f19] border-b border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064e3b] border border-[#059669] text-[#a7f3d0] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#34d399]" />
            Accreditations &amp; Distinctions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Honors, Certifications &amp; Civic Leadership
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Validation from national science platforms, IIT Madras, Boston Consulting Group, AWS, and international assemblies.
          </p>
        </div>

        {/* Segmented View Switcher with Solid Active Pill */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 overflow-x-auto p-1.5 bg-[#101726] border border-[#22314e] rounded-xl w-fit mx-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold transition-all z-10 ${
                  isActive
                    ? 'text-white bg-[#059669] shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#18233a]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* 1. Honors Tab */}
            {activeTab === 'honors' && (
              <motion.div
                key="honors"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {honorsData.map((honor, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-[#121a2d] border border-[#263654] flex flex-col justify-between shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-[#34d399] bg-[#0b1120] px-2.5 py-0.5 rounded border border-[#1e2a42]">
                            {honor.year}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-[#064e3b] text-[#a7f3d0] border border-[#059669] text-[10px] font-mono font-bold">
                            Verified Recognition
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-extrabold text-white mb-1 leading-snug font-display">
                          {honor.title}
                        </h3>
                        <div className="text-xs font-bold text-[#34d399] font-display">{honor.award}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 font-medium">{honor.organization}</div>
                        <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                          {honor.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Award Photos in exact intrinsic aspect ratios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#121a2d] border border-[#263654] flex flex-col justify-between shadow-sm">
                    <div 
                      className="w-full rounded-xl overflow-hidden bg-[#090e1a] mb-3 border border-[#1e2a42] flex items-center justify-center p-2"
                      style={{ aspectRatio: '1179 / 1465' }}
                    >
                      <img
                        src="/assets/award-kalai-thiruvizha.jpeg"
                        alt="Kalai Thiruvizha State Honor"
                        className="w-full h-full object-contain filter brightness-95 rounded"
                        style={{ aspectRatio: '1179 / 1465' }}
                      />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white font-display">Kalai Thiruvizha Cultural &amp; Literature Honor</div>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Tamil Nadu School Education Department district &amp; state certificate.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#121a2d] border border-[#263654] flex flex-col justify-between shadow-sm">
                    <div 
                      className="w-full rounded-xl overflow-hidden bg-[#090e1a] mb-3 border border-[#1e2a42] flex items-center justify-center p-2"
                      style={{ aspectRatio: '1179 / 1477' }}
                    >
                      <img
                        src="/assets/award-beyond-space.jpeg"
                        alt="Beyond Science Hubble Honor"
                        className="w-full h-full object-contain filter brightness-95 rounded"
                        style={{ aspectRatio: '1179 / 1477' }}
                      />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white font-display">Beyond Science • Space Astronomy Honor</div>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-normal">Scientific inquiry into astronomical telemetry and cosmic systems.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. Certifications Tab */}
            {activeTab === 'certs' && (
              <motion.div
                key="certs"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
              >
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121a2d] border border-[#22314e] flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#a7f3d0] uppercase tracking-wide block mb-1">
                        {cert.category} • {cert.year}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug font-display">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 leading-normal font-normal">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="mt-3.5 pt-2 border-t border-[#1e2a42] flex items-center gap-1.5 text-[10px] text-[#34d399] font-mono font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                      <span>Verified Credential</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. Government of India Pledges Tab */}
            {activeTab === 'pledges' && (
              <motion.div
                key="pledges"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
              >
                {governmentPledges.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#121a2d] border border-[#22314e] flex items-start gap-3 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white font-display">{item.title}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">{item.ministry}</div>
                      <div className="text-[10px] font-mono text-[#a7f3d0] mt-1 bg-[#0b1120] px-2 py-0.5 rounded border border-[#1e2a42] inline-block font-bold">
                        ID: {item.id}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>

          {/* Trilingual Fluency Showcase */}
          <div className="mt-8 p-5 rounded-2xl bg-[#121a2d] border border-[#263654] shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#064e3b] border border-[#059669] flex items-center justify-center text-[#34d399] shrink-0">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Trilingual Linguistic Fluency
                  </div>
                  <div className="text-xs text-slate-300">
                    Global academic and technical communication capabilities.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#0b1120] border border-[#1e2a42] text-xs font-mono font-bold text-[#a7f3d0]">
                  English (Professional)
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0b1120] border border-[#1e2a42] text-xs font-mono font-bold text-[#a7f3d0]">
                  Tamil (Native)
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0b1120] border border-[#1e2a42] text-xs font-mono font-bold text-[#a7f3d0]">
                  Japanese (Elementary)
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
