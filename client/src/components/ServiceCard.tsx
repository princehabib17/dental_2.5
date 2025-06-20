import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, icon }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      id={id} 
      className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 card-hover"
    >
      {/* Background pattern */}
      <div className="absolute -right-6 -top-6 h-24 w-24 bg-primary/5 rounded-full transition-transform group-hover:scale-150">
        <motion.div
          className="absolute top-10 left-10 text-primary/10 text-xl"
          animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14V6M12 6H8.5C8.5 6 8 5.3 8 5C8 4.5 8.5 4 9 4C9.5 4 10 4.5 10 5C10 5.5 10.5 6 11 6C11.5 6 12 5.5 12 5C12 4.5 12.5 4 13 4C13.5 4 14 4.5 14 5C14 5.5 14.5 6 15 6C15.5 6 16 5.5 16 5C16 4.5 16.5 4 17 4C17.5 4 18 4.5 18 5C18 5.3 17.5 6 17.5 6H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
      
      {/* Icon with animated background */}
      <div className="relative mb-6">
        <div className="absolute -left-3 -top-3 h-16 w-16 bg-primary/10 rounded-xl transform rotate-12 transition-transform group-hover:scale-110 group-hover:rotate-0"></div>
        <div className="relative z-10 text-primary text-4xl bg-white rounded-xl p-3 w-fit transition-transform group-hover:translate-x-2 group-hover:text-secondary">
          {icon}
        </div>
      </div>
      
      {/* Title with gradient on hover */}
      <h3 
        className={`text-xl font-bold mb-3 transition-colors group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
        }`}
      >
        {t(`services.${id}.title`)}
      </h3>
      
      {/* Description */}
      <p 
        className={`text-gray-600 mb-6 ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
        }`}
      >
        {t(`services.${id}.description`)}
      </p>
      
      {/* Modern call-to-action button */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
        
        <Link href={`/services#${id}`}>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`group/button relative rounded-full hover:bg-primary/10 p-2 ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
            }`}
          >
            <ArrowUpRight 
              className={`h-5 w-5 text-primary transition-transform group-hover/button:rotate-45`} 
            />
            <span className="sr-only">{t('services.learnMore')}</span>
          </Button>
        </Link>
      </div>
      
      {/* Corner accent */}
      <div className="absolute right-0 bottom-0 w-10 h-10 overflow-hidden">
        <div className="absolute transform rotate-45 bg-primary/10 w-10 h-10 translate-x-1/2 translate-y-1/2 group-hover:bg-primary/20 transition-colors"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
