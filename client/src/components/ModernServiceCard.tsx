import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface ModernServiceCardProps {
  id: string;
  icon: React.ReactNode;
  index: number;
}

const ModernServiceCard: React.FC<ModernServiceCardProps> = ({ id, icon, index }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <motion.div
      className="group relative h-80 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glassmorphism Header */}
      <div className="relative p-6 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md border-b border-white/20">
        <motion.div
          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
          whileHover={{ 
            rotate: 360,
            scale: 1.1
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-white text-2xl">
            {icon}
          </div>
        </motion.div>
        
        <h3 className={`text-xl font-bold text-gray-900 text-center mb-2 ${
          isRtl ? 'font-arabic' : 'font-heading-en'
        }`}>
          {t(`services.${id}.title`, t(`footer.services.${id}`, id))}
        </h3>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <p className={`text-gray-600 text-center leading-relaxed mb-6 ${
          isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
        }`}>
          {t(`services.${id}.description`, `Professional ${id} services with modern techniques and personalized care.`)}
        </p>
        
        {/* Features List */}
        <div className="space-y-2">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + num * 0.1 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
              <span className={`text-sm text-gray-600 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}>
                {t(`services.${id}.feature${num}`, `Advanced ${id} technique`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500/20 group-hover:to-teal-500/20 transition-all duration-500"></div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

export default ModernServiceCard;