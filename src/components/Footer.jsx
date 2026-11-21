import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b14] border-t border-[#1e293b] py-12 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-extrabold text-white text-base tracking-tight">
                NETHRA NEHA DS
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[#34d399] font-mono font-bold">Annexra Technologies</span>
            </div>
            <p className="mt-1 text-slate-400 text-xs font-normal">
              Salem, Tamil Nadu, India • GHSS Periyavadangampatti • Founder &amp; CEO at 16
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-300">
            <a href="#about" className="hover:text-[#34d399] transition-colors">About</a>
            <a href="#patents" className="hover:text-[#34d399] transition-colors">Patents &amp; IP (7)</a>
            <a href="#leadership" className="hover:text-[#34d399] transition-colors">Leadership &amp; TNV</a>
            <a href="#media" className="hover:text-[#34d399] transition-colors">Press (207+)</a>
            <a href="#journey" className="hover:text-[#34d399] transition-colors">Journey</a>
            <a href="#projects" className="hover:text-[#34d399] transition-colors">Projects</a>
            <a href="#credentials" className="hover:text-[#34d399] transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-[#34d399] transition-colors">Contact</a>
          </div>

          {/* Back to top in Solid Colors */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-[#121a2d] border border-[#263654] hover:border-[#059669] text-white transition-colors flex items-center gap-2 text-xs font-bold shadow-sm"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#34d399]" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#34d399] shrink-0" />
            <span>&copy; {new Date().getFullYear()} NETHRA NEHA DS. All rights reserved. Intellectual Property registered in UK, Canada, India, and Germany.</span>
          </div>
          <div>
            Annexra Technologies • Deep Tech, Oncology AI &amp; Civic Infrastructure
          </div>
        </div>

      </div>
    </footer>
  );
}
