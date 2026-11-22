import React, { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = [
  { id: 'midnight', name: 'Midnight', bg: '#090B10', surface: '#11151D', accent: '#22C7E6' },
  { id: 'clean-light', name: 'Clean Light', bg: '#FAFAF8', surface: '#FFFFFF', accent: '#087F99' },
  { id: 'warm-sand', name: 'Warm Sand', bg: '#F3EBDD', surface: '#FFF9F0', accent: '#087F99' },
  { id: 'soft-stone', name: 'Soft Stone', bg: '#E8E6E1', surface: '#F5F3EF', accent: '#087F99' },
];

const ThemeContext = createContext({
  theme: 'midnight',
  setTheme: () => {},
  themes: THEMES,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nethra_portfolio_theme');
      if (saved && THEMES.some(t => t.id === saved)) return saved;
    }
    return 'midnight';
  });

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nethra_portfolio_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      const found = THEMES.find(t => t.id === newTheme);
      if (metaTheme && found) {
        metaTheme.setAttribute('content', found.bg);
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const found = THEMES.find(t => t.id === theme);
    if (metaTheme && found) {
      metaTheme.setAttribute('content', found.bg);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
