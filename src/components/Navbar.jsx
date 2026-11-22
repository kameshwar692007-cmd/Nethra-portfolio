import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, setTheme, themes } = useTheme();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#about');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Patents', href: '#patents' },
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' },
  ];

  // Smooth custom scroll handler taking navbar height into account
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveTab(href);
    if (open) setOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 40);

      const sectionIds = ['about', 'patents', 'journey', 'projects', 'leadership', 'credentials', 'media', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(`#${sectionIds[i]}`);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setActiveTab(window.location.hash);
    }
    const onHashChange = () => {
      if (window.location.hash) setActiveTab(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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
        
        {/* Brand Monogram & Name — Smooth scroll to #about */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center gap-2.5 group select-none cursor-pointer"
        >
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
          </div>
        </a>

        {/* Center Desktop Navigation Pills — Dynamic Sliding Pill with Silky Smooth Spring */}
        <nav className="relative hidden md:flex items-center gap-0.5 lg:gap-1 font-mono text-xs" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeTab === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'relative rounded-full px-2.5 lg:px-3 py-1.5 transition-colors duration-200 z-10 select-none text-[11px] lg:text-xs',
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-[#2f6bff] shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Action & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Atmospheric Theme Switcher with permanent blue accent */}
          <ThemeSwitcher />

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

      {/* Mobile Drawer Menu & Outside Tap Close */}
      <AnimatePresence initial={false}>
        {open && (
          <>
            {/* Backdrop Dismiss Layer for Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-20 md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="overflow-y-auto max-h-[calc(100vh-5rem)] md:hidden font-mono bg-[#0d1017]/98 border-t border-white/10 rounded-b-2xl shadow-2xl"
              aria-label="Mobile Navigation"
            >
              <ul className="px-4 py-3 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = activeTab === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.025 * i }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          'flex items-center justify-between py-2.5 px-3.5 rounded-xl text-xs tracking-wider transition-colors select-none',
                          isActive
                            ? 'bg-[#2f6bff] text-white font-bold shadow-md'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />}
                      </a>
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.025 * navLinks.length }}
                  className="pt-2 border-t border-white/10"
                >
                  <a
                    href="/documents/Nethra-Neha-DS-CV.docx"
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#2f6bff]" />
                    <span>Download CV</span>
                  </a>
                </motion.li>

                {/* Mobile Direct Theme Switcher */}
                <motion.li
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.025 * (navLinks.length + 1) }}
                  className="pt-3 border-t border-white/10"
                >
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold px-1 mb-2 flex items-center justify-between">
                    <span>Visual Atmosphere</span>
                    <span className="text-[9px] text-[var(--brand)] font-mono">Permanent Blue Accent</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {themes.map((t) => {
                      const isActive = theme === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            setTheme(t.id);
                            setOpen(false);
                          }}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all border text-left",
                            isActive
                              ? "bg-[var(--brand)]/15 border-[var(--brand)] text-[var(--brand)] font-bold shadow-xs"
                              : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                          )}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                            style={{ backgroundColor: t.bg }}
                          />
                          <span className="truncate">{t.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
