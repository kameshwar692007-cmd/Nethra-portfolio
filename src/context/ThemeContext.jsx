import React, { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = [
  { id: 'midnight', name: 'Midnight', bg: '#090B10', surface: '#11151D', text: '#F4F5F7', accent: '#22C7E6' },
  { id: 'clean-light', name: 'Clean Light', bg: '#FAFAF8', surface: '#FFFFFF', text: '#17191E', accent: '#087F99' },
  { id: 'warm-sand', name: 'Warm Sand', bg: '#F3EBDD', surface: '#FFF9F0', text: '#29251F', accent: '#087F99' },
  { id: 'soft-stone', name: 'Soft Stone', bg: '#E8E6E1', surface: '#F5F3EF', text: '#252A30', accent: '#087F99' },
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

  const applyTheme = (themeId) => {
    if (typeof document === 'undefined') return;
    
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);
    
    if (themeId === 'midnight') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const found = THEMES.find(t => t.id === themeId);
    if (metaTheme && found) {
      metaTheme.setAttribute('content', found.bg);
    }
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nethra_portfolio_theme', newTheme);
      applyTheme(newTheme);
    }
  };

  useEffect(() => {
    applyTheme(theme);
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

