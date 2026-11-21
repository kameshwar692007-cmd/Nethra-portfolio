import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { honorsData, certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Languages, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CredentialsAndHonors() {
  const [activeTab, setActiveTab] = useState('honors');
  const [showAllHonors, setShowAllHonors] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllPledges, setShowAllPledges] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowAllHonors(false);
    setShowAllCerts(false);
    setShowAllPledges(false);
  };

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

        {/* Segmented View Switcher — Zero Overflow on Mobile with Horizontal Scroll */}
        <div className="w-full max-w-full overflow-x-auto scrollbar-none mb-8 pb-1">
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#0e121a] border border-white/10 rounded-lg font-mono text-xs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-md text-xs font-medium transition-all select-none",
                    isActive
                      ? "text-white bg-[#2f6bff] font-bold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            
            {/* 1. Honors Tab — High-Density Bento Box Layout */}
            {activeTab === 'honors' && (
              <motion.div
                key="honors"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="space-y-4"
              >
                {/* 6-Card Integrated Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Bento Card 1: National Children's Science Congress (Text) */}
                  <div className="p-5 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                          {honorsData[0].year}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          Verified Distinction
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                        {honorsData[0].title}
                      </h3>
                      <div className="text-xs font-semibold text-[#2f6bff]">{honorsData[0].award}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{honorsData[0].organization}</div>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {honorsData[0].desc}
                      </p>
                    </div>
                  </div>

                  {/* Bento Card 2: International Model United Nations (Text) */}
                  <div className="p-5 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                          {honorsData[2].year}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          Verified Distinction
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                        {honorsData[2].title}
                      </h3>
                      <div className="text-xs font-semibold text-[#2f6bff]">{honorsData[2].award}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{honorsData[2].organization}</div>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {honorsData[2].desc}
                      </p>
                    </div>
                  </div>

                  {/* Bento Card 3: Kalai Thiruvizha Visual Certificate Bento (Tight Container, No Extra Space) */}
                  <div className="rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col sm:flex-row overflow-hidden shadow-lg">
                    <div className="w-full sm:w-[195px] md:w-[210px] shrink-0 bg-[#06080c] flex items-center justify-center overflow-hidden border-b sm:border-b-0 sm:border-r border-white/10 p-0">
                      <img
                        src="/assets/award-kalai-thiruvizha.jpeg"
                        alt="Kalai Thiruvizha State Honor Certificate"
                        className="w-full h-auto sm:h-full object-cover filter brightness-95"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                          <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                            2023 – 2024
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            Official State Document
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                          Kalai Thiruvizha Cultural &amp; Literature Honor
                        </h3>
                        <div className="text-xs font-semibold text-[#2f6bff]">District &amp; State Level Distinction</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Tamil Nadu School Education Department</div>
                        <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                          State certificate awarded for outstanding creative expression, classical Tamil literature mastery, and cultural heritage contribution representing Salem district.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bento Card 3: International Model United Nations (IMUN) 2024 (Text) */}
                  <div className={cn(
                    "p-5 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between shadow-lg",
                    !showAllHonors && "hidden md:flex"
                  )}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                          {honorsData[2].year}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          Verified Distinction
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                        {honorsData[2].title}
                      </h3>
                      <div className="text-xs font-semibold text-[#2f6bff]">{honorsData[2].award}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{honorsData[2].organization}</div>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {honorsData[2].desc}
                      </p>
                    </div>
                  </div>

                  {/* Bento Card 4: Beyond Science Space Astronomy Visual Bento */}
                  <div className={cn(
                    "rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col sm:flex-row overflow-hidden shadow-lg",
                    !showAllHonors && "hidden md:flex"
                  )}>
                    <div className="w-full sm:w-[195px] md:w-[210px] shrink-0 bg-[#06080c] flex items-center justify-center overflow-hidden border-b sm:border-b-0 sm:border-r border-white/10 p-0">
                      <img
                        src="/assets/award-beyond-space.jpeg"
                        alt="Beyond Science Hubble Astronomy Honor"
                        className="w-full h-auto sm:h-full object-cover filter brightness-95"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                          <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                            2024
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            Space Telemetry Honor
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                          Beyond Science &bull; Space Astronomy Honor
                        </h3>
                        <div className="text-xs font-semibold text-[#2f6bff]">The Legacy of Hubble Publication</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Beyond Science Initiative</div>
                        <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                          Scientific inquiry into astronomical telemetry and cosmic systems, recognized for deep observational astrophysics inquiry.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bento Card 5: State Kalai Thiruvizha Honors (Text) */}
                  <div className={cn(
                    "p-5 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between shadow-lg",
                    !showAllHonors && "hidden md:flex"
                  )}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                          {honorsData[1].year}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          Verified Distinction
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                        {honorsData[1].title}
                      </h3>
                      <div className="text-xs font-semibold text-[#2f6bff]">{honorsData[1].award}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{honorsData[1].organization}</div>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {honorsData[1].desc}
                      </p>
                    </div>
                  </div>

                  {/* Bento Card 6: Budget Quest 2025–26 (Text) */}
                  <div className={cn(
                    "p-5 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between shadow-lg",
                    !showAllHonors && "hidden md:flex"
                  )}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="text-[#2f6bff] font-bold px-2 py-0.5 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20">
                          {honorsData[3].year}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          Verified Distinction
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 leading-snug font-display">
                        {honorsData[3].title}
                      </h3>
                      <div className="text-xs font-semibold text-[#2f6bff]">{honorsData[3].award}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{honorsData[3].organization}</div>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                        {honorsData[3].desc}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Mobile View More Toggle for Honors */}
                <div className="md:hidden pt-2">
                  <button
                    onClick={() => setShowAllHonors(!showAllHonors)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0e121a] hover:bg-[#141926] border border-white/10 text-[#2f6bff] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-98"
                  >
                    {showAllHonors ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" />
                        <span>View All Honors &amp; Distinctions ({honorsData.length + 2})</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* 2. Certifications Tab — Modular with View More on Mobile */}
            {activeTab === 'certs' && (
              <motion.div
                key="certs"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {certificationsData.map((cert, idx) => {
                    const hideOnMobile = !showAllCerts && idx >= 4;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          "p-4 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex flex-col justify-between",
                          hideOnMobile && "hidden sm:flex"
                        )}
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
                    );
                  })}
                </div>

                {/* Mobile View More Toggle for Certifications */}
                <div className="sm:hidden pt-2">
                  <button
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0e121a] hover:bg-[#141926] border border-white/10 text-[#2f6bff] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-98"
                  >
                    {showAllCerts ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" />
                        <span>View All Certifications ({certificationsData.length})</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* 3. Government of India Pledges Tab — Modular with View More on Mobile */}
            {activeTab === 'pledges' && (
              <motion.div
                key="pledges"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {governmentPledges.map((item, idx) => {
                    const hideOnMobile = !showAllPledges && idx >= 3;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          "p-4 rounded-xl bg-[#0d1017] border border-white/10 hover:border-[#2f6bff]/40 transition-colors flex items-start gap-3",
                          hideOnMobile && "hidden sm:flex"
                        )}
                      >
                        <ShieldCheck className="w-4 h-4 text-[#2f6bff] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-white font-display">{item.title}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{item.ministry}</div>
                          <div className="text-[10px] font-mono text-[#2f6bff] mt-1 bg-[#2f6bff]/10 px-2 py-0.5 rounded border border-[#2f6bff]/20 inline-block font-semibold">
                            ID: {item.id}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile View More Toggle for Pledges */}
                <div className="sm:hidden pt-2">
                  <button
                    onClick={() => setShowAllPledges(!showAllPledges)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0e121a] hover:bg-[#141926] border border-white/10 text-[#2f6bff] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-98"
                  >
                    {showAllPledges ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" />
                        <span>View All Pledges ({governmentPledges.length})</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Trilingual Fluency Showcase — Fully Responsive Wrapping, Zero Overflow */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0d1017] border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2f6bff]/15 border border-[#2f6bff]/30 flex items-center justify-center text-[#2f6bff] shrink-0 mt-0.5 sm:mt-0">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Trilingual Linguistic Fluency
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Academic, scientific, and global technical communication capabilities.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
                <span className="px-2.5 py-1 rounded-md bg-[#080a0f] border border-[#2f6bff]/30 text-[11px] font-mono font-medium text-[#2f6bff]">
                  English (Professional)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#080a0f] border border-[#2f6bff]/30 text-[11px] font-mono font-medium text-[#2f6bff]">
                  Tamil (Native)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#080a0f] border border-[#2f6bff]/30 text-[11px] font-mono font-medium text-[#2f6bff]">
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
