import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeSwitcher({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'Soft Stone light' : 'Dark'} theme`}
      title={`Current: ${isDark ? 'Dark Theme' : 'Soft Stone'}. Click to toggle.`}
      className={`relative inline-flex items-center h-8 px-2.5 rounded-full border transition-all duration-300 focus:outline-none select-none font-mono text-xs gap-1.5 active:scale-95 ${
        isDark
          ? 'bg-[#11151D] border-white/15 text-slate-200 hover:border-[#2f6bff]/50 shadow-sm'
          : 'bg-[#F5F3EF] border-black/15 text-[#1E232A] hover:border-[#2f6bff]/50 shadow-xs'
      } ${className}`}
    >
      {/* Icon with silky spring rotation */}
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center text-[#2f6bff]"
      >
        {isDark ? <Moon className="w-3.5 h-3.5 fill-[#2f6bff]/20" /> : <Sun className="w-3.5 h-3.5" />}
      </motion.div>

      {/* Text label */}
      <span className="text-[11px] font-bold tracking-tight">
        {isDark ? 'Dark' : 'Soft Stone'}
      </span>

      {/* Permanent signature royal blue dot */}
      <span className="w-2 h-2 rounded-full bg-[#2f6bff] shadow-xs" title="Signature Blue Accent" />
    </button>
  );
}
