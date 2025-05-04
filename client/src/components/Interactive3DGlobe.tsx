import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Interactive3DGlobe: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const globeRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  // Animation for flight path when scrolled into view
  useEffect(() => {
    if (inView) {
      controls.start({
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" }
      });
    } else {
      controls.start({
        pathLength: 0,
        transition: { duration: 1 }
      });
    }
  }, [inView, controls]);

  // Set refs for both framer motion and intersection observer
  const setRefs = (el: HTMLDivElement | null) => {
    globeRef.current = el;
    inViewRef(el);
  };

  return (
    <div 
      ref={setRefs}
      className="relative min-h-[100vh] w-full overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 py-16"
    >
      {/* Background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white,_rgba(255,255,255,0)_2px)] bg-[length:50px_50px] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
        >
          Connecting Continents Through Smiles
        </h2>
        
        <p 
          className={`text-xl md:text-2xl text-center mb-12 max-w-3xl ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}
        >
          From Saudi Arabia to the Philippines, experience world-class dental care at Arevalo Dental Clinic in Makati
        </p>

        {/* Interactive Globe */}
        <div className="relative w-full max-w-4xl h-[400px] my-8">
          {/* Stylized globe */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-900 to-blue-600"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={inView ? { scale: 1, opacity: 0.8, rotate: 360 } : { scale: 0.8, opacity: 0.5 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {/* Longitude/latitude lines */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-400/20 -rotate-45"></div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 rotate-45"></div>
            <div className="absolute inset-0 rounded-full border-[1px] border-white/10"></div>
            <div className="absolute inset-4 rounded-full border-[1px] border-white/10"></div>
            <div className="absolute inset-8 rounded-full border-[1px] border-white/10"></div>
          </motion.div>
          
          {/* Saudi Arabia pin */}
          <motion.div 
            className="absolute left-[32%] top-[35%] flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping absolute -top-2 -left-2 opacity-30"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
            </div>
            <div className="mt-1 bg-blue-900/70 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-blue-200 font-semibold">
              Saudi Arabia
            </div>
          </motion.div>
          
          {/* Philippines pin */}
          <motion.div 
            className="absolute right-[28%] bottom-[32%] flex flex-col items-center"
            initial={{ y: -20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-teal-400 rounded-full animate-ping absolute -top-2 -left-2 opacity-30"></div>
              <div className="w-4 h-4 bg-teal-500 rounded-full relative z-10"></div>
            </div>
            <div className="mt-1 bg-teal-900/70 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-teal-200 font-semibold">
              Philippines
            </div>
          </motion.div>
          
          {/* Flight path */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 400">
            <motion.path
              d="M 140 140 Q 200 50, 280 170"
              fill="transparent"
              stroke="url(#gradientPath)"
              strokeWidth="3"
              strokeDasharray="0 1"
              initial={{ pathLength: 0 }}
              animate={controls}
            />
            <defs>
              <linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>

            {/* Animated plane */}
            <motion.g 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.path 
                d="M0,-5 L10,0 L0,5 L2,0 Z" 
                fill="white"
                initial={{ translateX: 140, translateY: 140, rotate: 45 }}
                animate={inView ? { translateX: 280, translateY: 170, rotate: -45 } : { translateX: 140, translateY: 140, rotate: 45 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.g>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <h3 className={`text-2xl font-bold mb-4 text-blue-300 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              Saudi Arabia
            </h3>
            <p className={`text-gray-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              Our valued clients from Saudi Arabia and the Gulf region choose Arevalo Dental Clinic for our exceptional dental expertise and personalized care that respects their cultural preferences.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <h3 className={`text-2xl font-bold mb-4 text-teal-300 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              Makati, Philippines
            </h3>
            <p className={`text-gray-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              Located in the heart of Makati's business district, our premier dental clinic offers state-of-the-art technology and internationally-trained dentists specializing in cosmetic and restorative procedures.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className={`text-lg animate-pulse text-blue-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            Scroll to explore our services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DGlobe;