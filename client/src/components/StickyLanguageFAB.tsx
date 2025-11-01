import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export const StickyLanguageFAB: React.FC = () => {
  const { language, setLanguage, isRtl } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`fixed z-40 w-12 h-12 md:w-12 md:h-12 rounded-full bg-saudi-green hover:bg-saudi-green/90 text-white font-semibold flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 hover:shadow-xl ${
        isRtl ? 'left-4 md:left-4' : 'right-4 md:right-4'
      } top-4 md:top-4`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
      title={language === 'en' ? 'العربية' : 'English'}
    >
      <span className="text-sm">{language === 'en' ? 'EN' : 'عربي'}</span>
    </motion.button>
  );
};

export default StickyLanguageFAB;
