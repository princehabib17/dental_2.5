import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Plane } from 'lucide-react';

interface GlobeConnectionProps {
  title?: string;
  subtitle?: string;
}

const GlobeConnection: React.FC<GlobeConnectionProps> = ({ 
  title = "Global Dental Tourism",
  subtitle = "From Saudi Arabia to Makati, Philippines"
}) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const globeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
            {title}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            {subtitle}
          </p>
        </div>

        <div className="relative h-96 mb-8">
          {/* Globe container */}
          <div ref={globeRef} className="absolute inset-0 flex items-center justify-center">
            {/* Stylized globe visualization */}
            <div className="relative w-64 h-64">
              {/* Globe background */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Globe grid lines */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-white/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-t border-b border-white/10" style={{ transform: 'rotateX(70deg)' }}></div>
                <div className="absolute inset-0 rounded-full border-t border-b border-white/10" style={{ transform: 'rotateX(35deg)' }}></div>
                <div className="absolute inset-0 rounded-full border-t border-b border-white/10" style={{ transform: 'rotateX(-35deg)' }}></div>
                <div className="absolute inset-0 rounded-full border-l border-r border-white/10" style={{ transform: 'rotateY(70deg)' }}></div>
                <div className="absolute inset-0 rounded-full border-l border-r border-white/10" style={{ transform: 'rotateY(35deg)' }}></div>
                <div className="absolute inset-0 rounded-full border-l border-r border-white/10" style={{ transform: 'rotateY(-35deg)' }}></div>
              </motion.div>

              {/* Saudi Arabia marker */}
              <motion.div 
                className="absolute h-4 w-4 rounded-full bg-red-500 shadow-lg"
                initial={{ x: 20, y: 20, opacity: 0 }}
                animate={{ x: 20, y: 20, opacity: 1 }}
                style={{ left: '35%', top: '30%' }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-red-500"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Philippines marker */}
              <motion.div 
                className="absolute h-4 w-4 rounded-full bg-secondary shadow-lg"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                style={{ right: '25%', bottom: '40%' }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-secondary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Flight path animation */}
              <motion.div
                className="absolute left-[40%] top-[30%] z-10"
                initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
                animate={{ x: 70, y: 50, scale: 0.8, opacity: [0, 1, 1, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  repeatDelay: 2,
                  times: [0, 0.1, 0.8, 1] 
                }}
              >
                <Plane className="text-primary rotate-45" size={20} />
              </motion.div>
            </div>
          </div>

          {/* Information cards */}
          <div className="absolute left-0 top-1/4 md:top-1/3 flex flex-col md:flex-row justify-between w-full">
            {/* Saudi Arabia card */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-white p-4 md:ml-8 rounded-lg shadow-lg md:w-64 mb-4 md:mb-0"
            >
              <h3 className={`font-bold text-primary ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                Saudi Arabia
              </h3>
              <p className={`text-sm text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                Where our valued patients from the Arab Gulf region come from, seeking world-class dental care
              </p>
            </motion.div>

            {/* Connection arrow for larger screens */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="hidden md:flex items-center justify-center flex-1"
            >
              <ArrowRight className="text-primary w-10 h-10" />
            </motion.div>

            {/* Philippines card */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-white p-4 md:mr-8 rounded-lg shadow-lg md:w-64"
            >
              <h3 className={`font-bold text-secondary ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                Makati, Philippines
              </h3>
              <p className={`text-sm text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                Home to Arevalo Dental Clinic, where we offer premium dental services with international standards
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-primary w-8 h-8" />
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              International Patients
            </h3>
            <p className={`text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              We welcome patients from Saudi Arabia, Bahrain, Qatar, and other Gulf countries with specialized services.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              Guaranteed Quality
            </h3>
            <p className={`text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              Our dental procedures meet the highest international standards with advanced technology and expertise.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              Efficient Service
            </h3>
            <p className={`text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              We respect your time with efficient scheduling, minimizing waiting periods for international patients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobeConnection;