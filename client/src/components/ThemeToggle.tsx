import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useThemeContext } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useThemeContext();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' }
  ] as const;

  const currentThemeIndex = themes.findIndex(t => t.value === theme);
  
  const cycleTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  const CurrentIcon = themes[currentThemeIndex].icon;

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={cycleTheme}
        className={`relative overflow-hidden rounded-xl p-2 transition-all duration-300 ${
          resolvedTheme === 'dark' 
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <CurrentIcon className="w-4 h-4" />
          </motion.div>
        </AnimatePresence>

        {/* Background gradient effect */}
        <motion.div
          className={`absolute inset-0 rounded-xl ${
            resolvedTheme === 'dark'
              ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20'
              : 'bg-gradient-to-r from-blue-500/10 to-teal-500/10'
          }`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Button>

      {/* Tooltip */}
      <motion.div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded-lg whitespace-nowrap pointer-events-none ${
          resolvedTheme === 'dark'
            ? 'bg-white/10 backdrop-blur-md text-white border border-white/20'
            : 'bg-gray-800 text-white'
        }`}
        initial={{ opacity: 0, y: 5, scale: 0.8 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {themes[currentThemeIndex].label} theme
        <div 
          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent ${
            resolvedTheme === 'dark' ? 'border-t-white/10' : 'border-t-gray-800'
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;