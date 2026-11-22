import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('pointerdown', handleOutsideClick);
    }
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle visual theme"
        title="Atmospheric Theme Switcher"
        className="h-8 w-8 rounded-full flex items-center justify-center border border-white/15 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
      >
        <Palette className="w-3.5 h-3.5 text-[var(--brand)]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 rounded-xl border border-white/15 bg-[#11151D] text-[#F4F5F7] p-1.5 shadow-2xl z-50 font-mono text-xs"
          >
            <div className="px-2.5 py-1.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider border-b border-white/10 mb-1">
              Atmosphere &bull; Blue Accent
            </div>

            <div className="space-y-0.5">
              {themes.map((t) => {
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-white/10 text-white font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border border-white/20 shadow-xs flex-shrink-0"
                        style={{ backgroundColor: t.bg }}
                      />
                      <span>{t.name}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: t.accent }}
                        title="Permanent Blue Accent"
                      />
                      {isActive && <Check className="w-3 h-3 text-[var(--brand)]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
