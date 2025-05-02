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
      className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
    >
      {/* Background pattern */}
      <div className="absolute -right-6 -top-6 h-24 w-24 bg-primary/5 rounded-full transition-transform group-hover:scale-150"></div>
      
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
          <a>
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
          </a>
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
