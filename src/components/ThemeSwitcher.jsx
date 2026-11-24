import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './theme-toggle';

export default function ThemeSwitcher({ className = "", size = "sm" }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ThemeToggle
      checked={isDark}
      onCheckedChange={(dark) => setTheme(dark ? 'dark' : 'soft-stone')}
      size={size}
      className={className}
    />
  );
}
