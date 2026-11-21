import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Patents', href: '#patents', highlight: true },
    { name: 'Trajectory', href: '#trajectory' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Media', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0a0c10]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name — Solid Blue Accent */}
          <a href="#" className="flex items-center gap-2.5 group select-none">
            <div className="w-8 h-8 rounded-lg bg-[#2f6bff] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V4l16 16V4" />
                <circle cx="4" cy="4" r="1.5" fill="currentColor" />
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white tracking-tight text-sm sm:text-base leading-none">
                NETHRA NEHA <span className="font-mono text-[#2f6bff]">DS</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider mt-1 leading-none">
                Founder &bull; Annexra Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  link.highlight
                    ? 'text-white bg-[#2f6bff] hover:bg-[#2558d9] font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/documents/Nethra-Neha-DS-CV.docx"
              download
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141822] hover:bg-[#1c2230] border border-white/10 text-xs font-mono text-white transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#2f6bff]" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Button (44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 bg-[#12151c] text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#2f6bff]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/10 bg-[#0c0e14] px-4 pt-3 pb-6 shadow-2xl overflow-hidden font-mono"
          >
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-xs tracking-wider transition-colors ${
                    link.highlight
                      ? 'bg-[#2f6bff] text-white font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-xs tracking-wider bg-[#141822] text-white border border-white/10 mt-2"
              >
                <FileText className="w-4 h-4 text-[#2f6bff]" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
