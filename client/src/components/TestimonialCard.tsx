import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 relative"
    >
      {/* Quote mark decoration */}
      <div className="absolute -top-4 -right-2 text-primary/10 rotate-12">
        <Quote size={100} strokeWidth={1} />
      </div>

      {/* Rating stars */}
      <div className="flex items-center mb-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex"
        >
          {renderStars(5)}
        </motion.div>
      </div>

      {/* Testimonial quote */}
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.6 }}
        className={`text-gray-700 mb-8 text-lg relative z-10 leading-relaxed ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
        }`}
      >
        "{t(`testimonials.${id}.quote`)}"
      </motion.p>

      {/* Avatar and name section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`flex items-center ${isRtl ? 'flex-row-reverse' : ''}`}
      >
        <div className={`relative ${isRtl ? 'ml-4' : 'mr-4'}`}>
          <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-md">
            <img 
              src={t(`testimonials.${id}.avatar`)} 
              alt={t(`testimonials.${id}.name`)} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-4 h-4 border-2 border-white"></div>
        </div>
        <div>
          <h4 
            className={`font-bold text-gray-900 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}
          >
            {t(`testimonials.${id}.name`)}
          </h4>
          <p 
            className={`text-primary text-sm font-medium ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}
          >
            {t(`testimonials.${id}.position`)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
