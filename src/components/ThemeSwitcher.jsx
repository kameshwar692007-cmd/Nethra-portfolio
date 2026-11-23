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
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light Mode' : 'Dark Mode'}`}
      className={`relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 focus:outline-none select-none active:scale-95 shadow-xs ${
        isDark
          ? 'bg-[#11151D] border-white/15 text-slate-200 hover:border-[#2f6bff]/50'
          : 'bg-[#F5F3EF] border-black/15 text-[#1E232A] hover:border-[#2f6bff]/50'
      } ${className}`}
    >
      {/* Icon with silky spring rotation */}
      <motion.div
        key={theme}
        initial={{ rotate: -60, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 60, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="flex items-center justify-center text-[#2f6bff]"
      >
        {isDark ? (
          <Moon className="w-4 h-4 fill-[#2f6bff]/20 text-[#2f6bff]" />
        ) : (
          <Sun className="w-4 h-4 text-[#2f6bff]" />
        )}
      </motion.div>
    </button>
  );
}
