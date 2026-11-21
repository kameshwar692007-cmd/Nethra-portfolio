import React from 'react';
import { honorsData, certificationsData } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake, ExternalLink } from 'lucide-react';

export default function CredentialsAndHonors() {
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
    <section id="credentials" className="py-20 bg-[#080a0f] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Accreditations &amp; Distinctions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Honors, Certifications &amp; Civic Leadership
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Rigorous validation from national science platforms, prestigious academic institutions including IIT Madras, and international diplomatic assemblies.
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {honorsData.map((honor, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#0e121a] border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {honor.year}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-400">
                    National Honor
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {honor.title}
                </h3>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {honor.award}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {honor.organization}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {honor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Certificates Strip */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0e121a] p-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 mb-3 border border-slate-800">
              <img
                src="/assets/award-kalai-thiruvizha.jpeg"
                alt="Kalai Thiruvizha State Honor Certificate"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
            <div className="text-xs font-semibold text-white">Kalai Thiruvizha Cultural &amp; Literature Honor</div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Tamil Nadu School Education Department district &amp; state level certificate of excellence.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0e121a] p-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 mb-3 border border-slate-800">
              <img
                src="/assets/award-beyond-space.jpeg"
                alt="Beyond Science Hubble Legacy Honor"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
            <div className="text-xs font-semibold text-white">Beyond Science &bull; Space Astronomy Honor</div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Appreciation for scientific inquiry into astronomical telemetry and cosmic systems.
            </p>
          </div>
        </div>

        {/* Certifications Table / Grid */}
        <div className="rounded-2xl bg-[#0e121a] border border-slate-800 p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white font-display">
              Technical Certifications &amp; Institutional Training
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
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
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] text-emerald-400/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government of India Civic Pledges */}
        <div className="rounded-2xl bg-[#0e121a] border border-slate-800 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white font-display">
              Government of India National Pledges &amp; Civic Commitments
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-3xl">
            Official social responsibility pledges registered with Government of India ministries, reinforcing dedication to digital literacy, public health, energy conservation, and gender welfare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {governmentPledges.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800/80 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-200">{item.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.ministry}</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">ID: {item.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
