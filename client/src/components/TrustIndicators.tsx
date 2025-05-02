import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { UserCog, Calendar, Stethoscope, Phone } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  
  const indicators = [
    {
      icon: <UserCog className="h-10 w-10" />,
      title: t('trust.experts.title'),
      description: t('trust.experts.description')
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: t('trust.booking.title'),
      description: t('trust.booking.description')
    },
    {
      icon: <Stethoscope className="h-10 w-10" />,
      title: t('trust.facilities.title'),
      description: t('trust.facilities.description')
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: t('trust.support.title'),
      description: t('trust.support.description')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {indicators.map((indicator, index) => (
          <div key={index} className="text-center">
            <div className="text-primary mb-3 flex justify-center">
              {indicator.icon}
            </div>
            <h3 
              className={`text-xl md:text-2xl font-bold mb-2 ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {indicator.title}
            </h3>
            <p 
              className={`text-gray-600 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {indicator.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
