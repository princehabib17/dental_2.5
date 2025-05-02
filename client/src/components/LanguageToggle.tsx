import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 bg-transparent"
    >
      <Globe className="h-4 w-4" />
      <span className={language === 'ar' ? 'font-arabic' : 'font-heading-en'}>
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
