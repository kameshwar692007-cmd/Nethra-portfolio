import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Mail, ShieldCheck, Newspaper } from 'lucide-react';

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
          ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-[#202c44] shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Solid Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#064e3b] border border-[#059669] flex items-center justify-center text-[#a7f3d0] font-display font-extrabold text-lg group-hover:bg-[#059669] group-hover:text-white transition-colors">
              N
            </div>
            <div>
              <span className="font-display font-extrabold text-white tracking-tight text-base sm:text-lg block group-hover:text-[#34d399] transition-colors">
                NETHRA NEHA DS
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#34d399] block tracking-wider uppercase font-bold">
                Founder • Annexra • 7 Patents
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  link.highlight
                    ? 'text-[#a7f3d0] bg-[#064e3b] border border-[#059669] hover:bg-[#059669] hover:text-white'
                    : 'text-slate-300 hover:text-white hover:bg-[#151f32]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons in Solid Colors */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/documents/Nethra-Neha-DS-CV.docx"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold text-slate-200 bg-[#121a2d] border border-[#263654] hover:text-white hover:border-[#059669] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#34d399]" />
              CV (.docx)
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] active:scale-98 transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#151f32] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#202c44] bg-[#0b0f19] rounded-2xl p-4 space-y-2 border border-[#202c44] shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-200 hover:bg-[#121a2d] hover:text-[#34d399] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#202c44] flex flex-col gap-2">
              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-bold text-slate-200 bg-[#121a2d] border border-[#263654]"
              >
                <FileText className="w-3.5 h-3.5 text-[#34d399]" />
                Download CV (.docx)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white bg-[#059669]"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Directly
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
