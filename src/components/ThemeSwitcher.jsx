import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher({ className = "" }) {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [open]);

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  const handleSelectTheme = (themeId) => {
    setTheme(themeId);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Toggle Pill Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle visual atmosphere theme"
        title={`Current Theme: ${currentTheme.name}. Click to switch.`}
        className="h-8 px-2.5 rounded-full flex items-center gap-1.5 border border-white/20 bg-black/20 hover:bg-black/30 transition-all focus:outline-none select-none text-xs font-mono"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--card)',
          color: 'var(--foreground)',
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full border border-white/30 flex-shrink-0"
          style={{ backgroundColor: currentTheme.accent }}
        />
        <span className="hidden sm:inline-block text-[11px] font-medium tracking-tight">
          {currentTheme.name}
        </span>
        <Palette className="w-3 h-3 text-[var(--brand)] opacity-80" />
      </button>

      {/* Floating Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-52 rounded-2xl border shadow-2xl p-2 z-[9999] font-mono text-xs backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
            }}
          >
            <div
              className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border-b mb-1 flex items-center justify-between"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
            >
              <span>Atmosphere</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand)]/15 text-[var(--brand)] font-bold">
                BLUE ACCENT
              </span>
            </div>

            <div className="space-y-1">
              {themes.map((t) => {
                const isActive = theme === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSelectTheme(t.id);
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleSelectTheme(t.id);
                    }}
                    onClick={() => handleSelectTheme(t.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer select-none"
                    style={{
                      backgroundColor: isActive ? 'var(--brand-subtle, rgba(8,127,153,0.12))' : 'transparent',
                      color: isActive ? 'var(--brand)' : 'var(--foreground)',
                      fontWeight: isActive ? '700' : '400',
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full border shadow-xs flex-shrink-0"
                        style={{
                          backgroundColor: t.bg,
                          borderColor: 'var(--border)',
                        }}
                      />
                      <span className="text-xs">{t.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: t.accent }}
                        title="Permanent Blue Accent"
                      />
                      {isActive && <Check className="w-3.5 h-3.5 text-[var(--brand)]" />}
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
