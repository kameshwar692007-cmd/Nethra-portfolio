import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Patents', href: '#patents', highlight: true },
    { label: 'Trajectory', href: '#trajectory' },
    { label: 'Projects', href: '#projects' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={false}
      animate={{
        top: stuck ? 0 : 12,
        width: stuck ? '100%' : 'min(94%, 72rem)',
        borderRadius: stuck ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        'fixed inset-x-0 z-50 mx-auto border bg-[#0d1017]/90 backdrop-blur-md transition-colors',
        stuck ? 'border-x-0 border-t-0 border-b border-white/10 shadow-lg' : 'border-white/15 shadow-2xl'
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Brand Monogram & Name */}
        <a href="#" className="flex items-center gap-2.5 group select-none">
          <div className="w-7 h-7 rounded-lg bg-[#2f6bff] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20V4l16 16V4" />
              <circle cx="4" cy="4" r="1.5" fill="currentColor" />
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-white tracking-tight text-sm sm:text-base leading-none">
              NETHRA NEHA DS
            </span>
            <span className="text-[10px] font-mono text-[#2f6bff] font-bold tracking-wider uppercase hidden sm:inline">
              ANNEXRA
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pills — Quarry UI Style */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-3.5 py-1.5 transition-colors',
                link.highlight
                  ? 'bg-[#2f6bff] text-white font-bold shadow-sm hover:bg-[#2558d9]'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Action & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="/documents/Nethra-Neha-DS-CV.docx"
            download
            className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 px-3.5 text-xs font-mono font-medium text-white transition-colors"
          >
            <FileText className="w-3 h-3 text-[#2f6bff]" />
            <span>Download CV</span>
          </a>

          {/* Morphing Mobile Burger Button (Quarry UI Pattern) */}
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative grid size-9 place-items-center rounded-full border border-white/15 md:hidden bg-[#12151c] focus:outline-none"
          >
            <span
              className={cn(
                'absolute h-px w-4 bg-white transition-transform duration-300',
                open ? 'rotate-45' : '-translate-y-1'
              )}
            />
            <span
              className={cn(
                'absolute h-px w-4 bg-white transition-opacity duration-200',
                open && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'absolute h-px w-4 bg-white transition-transform duration-300',
                open ? '-rotate-45' : 'translate-y-1'
              )}
            />
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu (Quarry UI Pattern) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden md:hidden font-mono"
            aria-label="Mobile Navigation"
          >
            <ul className="border-t border-white/10 px-5 py-3 space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block py-2.5 px-3 rounded-lg text-xs tracking-wider transition-colors',
                      link.highlight
                        ? 'bg-[#2f6bff] text-white font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * navLinks.length }}
                className="pt-2"
              >
                <a
                  href="/documents/Nethra-Neha-DS-CV.docx"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider bg-white/10 text-white border border-white/10"
                >
                  <FileText className="w-3.5 h-3.5 text-[#2f6bff]" />
                  <span>Download CV</span>
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
