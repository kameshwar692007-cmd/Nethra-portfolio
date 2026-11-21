import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';
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
    { name: 'Patents & IP', href: '#patents', highlight: true },
    { name: 'Trajectory', href: '#trajectory' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Media (207+)', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0a0c10]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <div className="w-9 h-9 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-base group-hover:border-cyan-400 transition-colors">
              N
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-tight text-sm sm:text-base block group-hover:text-cyan-400 transition-colors">
                NETHRA NEHA DS
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block tracking-wider uppercase">
                Founder &bull; Annexra Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  link.highlight
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
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
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV (.docx)</span>
            </a>

            {/* Mobile Hamburger Button (44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 bg-[#12151c] text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden border-b border-white/[0.08] bg-[#0c0e14] px-4 pt-3 pb-6 shadow-2xl overflow-hidden font-mono"
          >
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-xs tracking-wider transition-colors ${
                    link.highlight
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 font-bold'
                      : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="/documents/Nethra-Neha-DS-CV.docx"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs uppercase"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
