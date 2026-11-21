import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Award, Newspaper, ShieldCheck, Mail, FileText } from 'lucide-react';

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
    { name: 'Patents & IP', href: '#patents', highlight: true },
    { name: 'Journey', href: '#journey' },
    { name: 'Media (207+)', href: '#media' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg group-hover:border-emerald-400 transition-colors">
              N
            </div>
            <div>
              <span className="font-display font-bold text-slate-100 tracking-tight text-base sm:text-lg block group-hover:text-emerald-400 transition-colors">
                NETHRA NEHA DS
              </span>
              <span className="text-[11px] font-medium text-slate-400 block tracking-wide uppercase">
                Founder &amp; CEO &bull; Annexra
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/documents/Nethra-Neha-DS-CV.docx"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-4 pt-3 pb-6 animate-slide-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  link.highlight
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-slate-300 bg-slate-800/80"
              >
                <FileText className="w-4 h-4" /> Download Official CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-slate-950 bg-emerald-400"
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
