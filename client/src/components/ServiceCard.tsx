import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, icon }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <div id={id} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 
        className={`text-xl font-bold mb-3 ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
        }`}
      >
        {t(`services.${id}.title`)}
      </h3>
      <p 
        className={`text-gray-600 mb-4 ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
        }`}
      >
        {t(`services.${id}.description`)}
      </p>
      <Link href={`/services#${id}`}>
        <a 
          className={`inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors ${
            isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
          }`}
        >
          {t('services.learnMore')}
          <ArrowRight 
            className={`${isRtl ? 'mr-2 rtl-mirror' : 'ml-2'} h-4 w-4`} 
          />
        </a>
      </Link>
    </div>
  );
};

export default ServiceCard;
