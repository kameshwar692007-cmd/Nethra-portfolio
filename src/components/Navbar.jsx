import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Mail, ShieldCheck, Newspaper, Award } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Patents (7)', href: '#patents', highlight: true },
    { name: 'Leadership & TNV', href: '#leadership' },
    { name: 'Press (207+)', href: '#media' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-[#23304a] shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-display font-extrabold text-lg shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:border-emerald-400 transition-colors">
              N
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-tight text-base sm:text-lg block group-hover:text-emerald-400 transition-colors">
                NETHRA NEHA DS
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 block tracking-wider uppercase font-semibold">
                Founder &bull; Annexra &bull; 7 Patents
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  link.highlight
                    ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/40 hover:text-white'
                    : 'text-slate-300 hover:text-white hover:bg-[#162033]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/documents/Nethra-Neha-DS-CV.docx"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-[#141d30] border border-[#263552] hover:text-white hover:border-emerald-500/50 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              CV (.docx)
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all shadow-md"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#162033] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1322] border-b border-[#23304a] px-4 pt-3 pb-6 animate-slide-up">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-xs font-semibold ${
                  link.highlight
                    ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/40'
                    : 'text-slate-200 hover:bg-[#162033]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#23304a] flex flex-col gap-2">
              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-200 bg-[#141d30] border border-[#263552]"
              >
                <FileText className="w-4 h-4 text-emerald-400" /> Download Curriculum Vitae
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400"
              >
                <Mail className="w-4 h-4" /> Connect with Nethra
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
