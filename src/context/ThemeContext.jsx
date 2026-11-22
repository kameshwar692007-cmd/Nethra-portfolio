import React, { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = [
  { id: 'dark', name: 'Dark', bg: '#090B10', surface: '#0D1017', text: '#F4F5F7', accent: '#2f6bff' },
  { id: 'soft-stone', name: 'Soft Stone', bg: '#E8E6E1', surface: '#F5F3EF', text: '#1E232A', accent: '#2f6bff' },
];

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
  themes: THEMES,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nethra_portfolio_theme');
      if (saved === 'soft-stone') return 'soft-stone';
      return 'dark';
    }
    return 'dark';
  });

  const applyTheme = (themeId) => {
    if (typeof document === 'undefined') return;
    
    const active = themeId === 'soft-stone' ? 'soft-stone' : 'dark';
    document.documentElement.setAttribute('data-theme', active);
    document.body.setAttribute('data-theme', active);
    
    if (active === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const found = THEMES.find(t => t.id === active) || THEMES[0];
    if (metaTheme && found) {
      metaTheme.setAttribute('content', found.bg);
    }
  };

  const setTheme = (newTheme) => {
    const active = newTheme === 'soft-stone' ? 'soft-stone' : 'dark';
    setThemeState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nethra_portfolio_theme', active);
      applyTheme(active);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'soft-stone' : 'dark');
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
