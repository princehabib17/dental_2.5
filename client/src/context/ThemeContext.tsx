import React, { createContext, useContext, ReactNode } from 'react';
import { useTheme, Theme } from '@/hooks/useTheme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
  systemTheme: 'light' | 'dark';
  isDark: boolean;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  
  const isDark = resolvedTheme === 'dark';
  const isLight = resolvedTheme === 'light';

  const value = {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
    isDark,
    isLight
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};