import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
        </div>
        
        {/* Floating Orbs with Glassmorphism */}
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 backdrop-blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-teal-400/20 to-blue-400/20 backdrop-blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <motion.div 
            className={`${isRtl ? 'lg:order-2 text-right' : 'lg:order-1 text-left'} space-y-8`}
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Microinteraction Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm font-medium text-gray-700 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                🦷 {t('hero.badge', 'Premium Dental Care')}
              </span>
            </motion.div>
            
            {/* Modern Typography Hierarchy */}
            <div className="space-y-6">
              <motion.h1 
                className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight ${
                  isRtl ? 'font-arabic' : 'font-heading-en'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-gray-900 mb-2">
                  {t('hero.title1', 'Your Perfect')}
                </span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  {t('hero.title2', 'Smile Awaits')}
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className={`text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.subtitle', 'Experience world-class dental care in the heart of Makati with our internationally trained specialists.')}
              </motion.p>
            </div>
            
            {/* CTA Section with Modern Styling */}
            <motion.div 
              className={`flex flex-col sm:flex-row gap-4 ${isRtl ? 'sm:justify-end' : 'sm:justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="#appointment">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className={`group relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      isRtl ? 'font-arabic' : 'font-heading-en'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t('hero.bookAppointment', 'Book Appointment')}
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              
              <Link href="#services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className={`group bg-white/60 backdrop-blur-md border-2 border-gray-200/50 text-gray-700 hover:bg-white/80 hover:border-blue-300/50 hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${
                      isRtl ? 'font-arabic' : 'font-heading-en'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {t('hero.exploreServices', 'Our Services')}
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-4 h-4 fill-current" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className={`text-sm text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                  {t('hero.reviews', '2,500+ Happy Patients')}
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Modern Bento Grid Cards */}
          <motion.div 
            className={`${isRtl ? 'lg:order-1' : 'lg:order-2'} relative h-[600px]`}
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
              {/* Main Feature Card - Glassmorphism */}
              <motion.div 
                className="col-span-4 row-span-3 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div className="text-right">
                    <div className="flex text-yellow-400 justify-end mb-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg 
                          key={i} 
                          className="w-4 h-4 fill-current" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9/5.0</span>
                  </div>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-2 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                  {t('hero.card1.title', 'Excellence Certified')}
                </h3>
                <p className={`text-gray-600 text-sm leading-relaxed ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                  {t('hero.card1.subtitle', 'International quality standards with personalized care for every patient.')}
                </p>
              </motion.div>
              
              {/* Stats Card */}
              <motion.div 
                className="col-span-2 row-span-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-4 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="h-full flex flex-col justify-between">
                  <motion.div 
                    className="p-2 bg-white/20 rounded-xl w-fit"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </motion.div>
                  <div>
                    <motion.div 
                      className={`text-3xl font-bold mb-1 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      15+
                    </motion.div>
                    <p className={`text-white/80 text-sm ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                      {t('hero.yearsExp', 'Years Experience')}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Quick Action Card */}
              <motion.div 
                className="col-span-3 row-span-2 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/20 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    className="p-2 bg-green-100 rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className={`font-semibold text-gray-900 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                      {t('hero.card2.title', 'Same Day Service')}
                    </h4>
                    <p className={`text-sm text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                      {t('hero.card2.subtitle', 'Emergency & walk-ins welcome')}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Technology Card */}
              <motion.div 
                className="col-span-3 row-span-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border border-white/20 p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="p-1.5 bg-purple-100 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <span className={`text-sm font-medium text-gray-700 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                    {t('hero.card3.title', 'Latest Tech')}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;