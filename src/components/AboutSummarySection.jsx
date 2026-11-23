import React from 'react';
import { ScrollTextReveal } from './scroll-text-reveal';

export default function AboutSummarySection() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 border-b border-[var(--border)] bg-[var(--background)] relative">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-xs font-mono font-semibold uppercase tracking-widest">
          Executive Narrative &bull; The Mission
        </div>
        <ScrollTextReveal
          text="Building deep-tech hardware and clinical AI from Salem, while orchestrating digital platforms for 38 districts across Tamil Nadu. Turning grassroots science into 7 sovereign patent registrations and sovereign commercial technologies."
          className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-medium leading-[1.25] tracking-tight text-[var(--foreground)]"
        />
        <div className="pt-4 text-xs font-mono text-[var(--text-muted)] flex items-center justify-center gap-2">
          <span>NETHRA NEHA DS</span>
          <span>&bull;</span>
          <span className="text-[#2f6bff]">Founder &amp; CEO, Annexra Technologies</span>
        </div>
      </div>
    </section>
  );
}
