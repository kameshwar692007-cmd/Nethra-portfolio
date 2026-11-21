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
    <section id="credentials" className="py-16 sm:py-20 bg-[#0a0c10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#2f6bff] uppercase mb-2">
            Accreditations &amp; Distinctions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Honors, Certifications &amp; Civic Commitments
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Validation from national science platforms, IIT Madras, Boston Consulting Group, AWS, and government bodies.
          </p>
        </div>

        {/* Segmented View Switcher — Solid Brand Blue Active Tab */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto p-1 bg-[#0e121a] border border-white/10 rounded-lg w-fit scrollbar-none font-mono text-xs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'text-white bg-[#2f6bff] font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            
            {/* 1. Honors Tab (Retained Previous Design with Solid Blue Accents) */}
            {activeTab === 'honors' && (
              <motion.div
                key="honors"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {honorsData.map((honor, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                          <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                            {honor.year}
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            Verified Distinction
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                          {honor.title}
                        </h3>
                        <div className="text-xs font-semibold text-[#2f6bff]">{honor.award}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{honor.organization}</div>
                        <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                          {honor.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Award Photos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 flex flex-col justify-between">
                    <div className="w-full rounded-lg overflow-hidden bg-[#06080c] mb-3 border border-white/10 flex items-center justify-center p-2 max-h-72">
                      <img
                        src="/assets/award-kalai-thiruvizha.jpeg"
                        alt="Kalai Thiruvizha State Honor"
                        className="w-full h-full object-contain filter brightness-95 rounded"
                      />
                    </div>
                    <div className="text-sm font-bold text-white font-display">Kalai Thiruvizha Cultural &amp; Literature Honor</div>
                    <p className="text-xs text-slate-400 mt-1">Tamil Nadu School Education Department district &amp; state certificate.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 flex flex-col justify-between">
                    <div className="w-full rounded-lg overflow-hidden bg-[#06080c] mb-3 border border-white/10 flex items-center justify-center p-2 max-h-72">
                      <img
                        src="/assets/award-beyond-space.jpeg"
                        alt="Beyond Science Hubble Honor"
                        className="w-full h-full object-contain filter brightness-95 rounded"
                      />
                    </div>
                    <div className="text-sm font-bold text-white font-display">Beyond Science &bull; Space Astronomy Honor</div>
                    <p className="text-xs text-slate-400 mt-1">Scientific inquiry into astronomical telemetry and cosmic systems.</p>
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
                transition={{ duration: 0.18 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-medium text-[#2f6bff] uppercase tracking-wide block mb-1">
                        {cert.category} &bull; {cert.year}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug font-display">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 text-[10px] text-[#2f6bff] font-mono flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2f6bff] shrink-0" />
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
                transition={{ duration: 0.18 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {governmentPledges.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#2f6bff] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white font-display">{item.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.ministry}</div>
                      <div className="text-[10px] font-mono text-[#2f6bff] mt-1 bg-[#2f6bff]/10 px-2 py-0.5 rounded border border-[#2f6bff]/20 inline-block font-semibold">
                        ID: {item.id}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>

          {/* Trilingual Fluency Showcase */}
          <div className="p-5 rounded-xl bg-[#0d1017] border border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2f6bff]/15 border border-[#2f6bff]/30 flex items-center justify-center text-[#2f6bff] shrink-0">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Trilingual Linguistic Fluency
                  </div>
                  <div className="text-xs text-slate-400">
                    Academic, scientific, and global technical communication capabilities.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#080a0f] border border-[#2f6bff]/30 text-xs font-mono font-medium text-[#2f6bff]">
                  English (Professional)
                </span>
                <span className="px-3 py-1 rounded-md bg-[#080a0f] border border-[#2f6bff]/30 text-xs font-mono font-medium text-[#2f6bff]">
                  Tamil (Native)
                </span>
                <span className="px-3 py-1 rounded-md bg-[#080a0f] border border-[#2f6bff]/30 text-xs font-mono font-medium text-[#2f6bff]">
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
