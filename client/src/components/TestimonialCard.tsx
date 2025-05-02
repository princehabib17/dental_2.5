import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  id: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ id }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  // Star rating rendering helper
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-300'}`} 
      />
    ));
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-md">
      <div className="flex items-center mb-6">
        <div className="flex">
          {renderStars(5)}
        </div>
      </div>
      <p 
        className={`text-gray-600 mb-6 text-lg italic ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
        }`}
      >
        {t(`testimonials.${id}.quote`)}
      </p>
      <div className={`flex items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
        <div className={`rounded-full overflow-hidden w-12 h-12 ${isRtl ? 'ml-4' : 'mr-4'}`}>
          <img 
            src={t(`testimonials.${id}.avatar`)} 
            alt={t(`testimonials.${id}.name`)} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 
            className={`font-bold text-gray-900 ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
            }`}
          >
            {t(`testimonials.${id}.name`)}
          </h4>
          <p 
            className={`text-gray-600 text-sm ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
            }`}
          >
            {t(`testimonials.${id}.position`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
