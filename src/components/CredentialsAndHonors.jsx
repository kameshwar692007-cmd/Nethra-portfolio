import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { honorsData, certificationsData } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

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

  return (
    <section id="credentials" className="py-14 sm:py-20 bg-[#080a0f] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5" />
            Accreditations &amp; Distinctions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Honors, Certifications &amp; Civic Leadership
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Validation from national science platforms, IIT Madras, and international assemblies.
          </p>
        </div>

        {/* Segmented View Switcher (Tabbed to eliminate page scroll) */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('honors')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'honors'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            National Honors &amp; Awards ({honorsData.length})
          </button>

          <button
            onClick={() => setActiveTab('certs')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'certs'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Certifications &amp; Training ({certificationsData.length})
          </button>

          <button
            onClick={() => setActiveTab('pledges')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pledges'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Govt of India Pledges ({governmentPledges.length})
          </button>
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
                      className="p-4 sm:p-5 rounded-xl bg-[#0e121a] border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-emerald-400">{honor.year}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
                          National
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 leading-snug">
                        {honor.title}
                      </h3>
                      <div className="text-xs font-medium text-emerald-300/90">{honor.award}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{honor.organization}</div>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {honor.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Visual Award Photos in exact aspect ratios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800 flex flex-col justify-between">
                    <div 
                      className="w-full rounded-lg overflow-hidden bg-slate-950 mb-2 border border-slate-800 flex items-center justify-center p-2"
                      style={{ aspectRatio: '1179 / 1465' }}
                    >
                      <img
                        src="/assets/award-kalai-thiruvizha.jpeg"
                        alt="Kalai Thiruvizha State Honor"
                        className="w-full h-full object-contain filter brightness-95 rounded"
                        style={{ aspectRatio: '1179 / 1465' }}
                      />
                    </div>
                    <div className="text-xs font-bold text-white">Kalai Thiruvizha Cultural &amp; Literature Honor</div>
                    <p className="text-[11px] text-slate-400">Tamil Nadu School Education Department district &amp; state certificate.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800 flex flex-col justify-between">
                    <div 
                      className="w-full rounded-lg overflow-hidden bg-slate-950 mb-2 border border-slate-800 flex items-center justify-center p-2"
                      style={{ aspectRatio: '1179 / 1477' }}
                    >
                      <img
                        src="/assets/award-beyond-space.jpeg"
                        alt="Beyond Science Hubble Honor"
                        className="w-full h-full object-contain filter brightness-95 rounded"
                        style={{ aspectRatio: '1179 / 1477' }}
                      />
                    </div>
                    <div className="text-xs font-bold text-white">Beyond Science &bull; Space Astronomy Honor</div>
                    <p className="text-[11px] text-slate-400">Scientific inquiry into astronomical telemetry and cosmic systems.</p>
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide block mb-1">
                        {cert.category} &bull; {cert.year}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800 flex items-center gap-1 text-[10px] text-emerald-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Verified Certificate</span>
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {governmentPledges.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">{item.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.ministry}</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-1">ID: {item.id}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
