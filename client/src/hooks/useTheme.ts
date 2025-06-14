import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
  systemTheme: 'light' | 'dark';
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(resolvedTheme);
    
    // Set CSS custom properties for dynamic theming
    if (resolvedTheme === 'dark') {
      root.style.setProperty('--theme-bg-primary', '#0f172a');
      root.style.setProperty('--theme-bg-secondary', '#1e293b');
      root.style.setProperty('--theme-bg-tertiary', '#334155');
      root.style.setProperty('--theme-text-primary', '#f8fafc');
      root.style.setProperty('--theme-text-secondary', '#cbd5e1');
      root.style.setProperty('--theme-text-tertiary', '#94a3b8');
      root.style.setProperty('--theme-border', '#475569');
      root.style.setProperty('--theme-accent', '#3b82f6');
      root.style.setProperty('--theme-accent-secondary', '#14b8a6');
    } else {
      root.style.setProperty('--theme-bg-primary', '#ffffff');
      root.style.setProperty('--theme-bg-secondary', '#f8fafc');
      root.style.setProperty('--theme-bg-tertiary', '#e2e8f0');
      root.style.setProperty('--theme-text-primary', '#0f172a');
      root.style.setProperty('--theme-text-secondary', '#334155');
      root.style.setProperty('--theme-text-tertiary', '#64748b');
      root.style.setProperty('--theme-border', '#e2e8f0');
      root.style.setProperty('--theme-accent', '#3b82f6');
      root.style.setProperty('--theme-accent-secondary', '#14b8a6');
    }
  }, [resolvedTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme
  };
}