import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080c] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-extrabold text-white text-base">
                NETHRA NEHA DS
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-emerald-400 font-medium">Annexra Technologies</span>
            </div>
            <p className="mt-1 text-slate-500 text-[11px]">
              Salem, Tamil Nadu, India &bull; GHSS Periyavadangampatti &bull; Founder &amp; CEO at 16
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#patents" className="hover:text-emerald-400 transition-colors">Patents &amp; IP (7)</a>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">Journey</a>
            <a href="#media" className="hover:text-emerald-400 transition-colors">Press (207+)</a>
            <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#credentials" className="hover:text-emerald-400 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nethra Neha DS. All rights reserved. Intellectual Property registered across UK, Canada, India, and Germany.
          </div>
          <div>
            Annexra Technologies &bull; Research, Deep Tech &amp; Societal Impact
          </div>
        </div>

      </div>
    </footer>
  );
}
