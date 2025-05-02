import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Phone, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-primary/5 to-secondary/10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side (text content) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-5">
              <span className={`text-sm font-medium ${isRtl ? 'font-arabic' : 'font-body-en'}`}>
                {t('hero.tagline')}
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {t('hero.titleHighlight')}
              </span>
              <br />
              <span className="text-gray-900">{t('hero.titleRest')}</span>
            </h1>
            
            <p className={`text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              {t('hero.subtitle')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isRtl ? 'rtl-toggle' : ''}`}>
              <Link href="/contact#appointment">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg"
                    className={`bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <CalendarCheck className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                    {t('hero.bookAppointment')}
                  </Button>
                </motion.div>
              </Link>
              
              <a href="tel:+97141234567">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline"
                    size="lg"
                    className={`border-primary text-primary hover:bg-primary/5 px-6 py-6 rounded-xl transition-all ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <Phone className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                    {t('hero.callUs')}
                  </Button>
                </motion.div>
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3 rtl:ml-3 rtl:mr-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <span className={`text-sm font-medium text-gray-600 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>{t('hero.certified')}</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3 rtl:ml-3 rtl:mr-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" className="text-primary" />
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  </svg>
                </div>
                <span className={`text-sm font-medium text-gray-600 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>{t('hero.experienced')}</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3 rtl:ml-3 rtl:mr-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    <path d="M21 6H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    <path d="M21 14H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    <path d="M21 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <span className={`text-sm font-medium text-gray-600 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>{t('hero.modern')}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side (image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1579684288361-5c1a2950f005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt={t('hero.imageAlt')} 
                className="w-full h-auto object-cover"
              />
              
              {/* Highlight cards */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-8 bottom-20 bg-white rounded-lg shadow-xl p-4 max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <CalendarCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className={`font-medium text-gray-900 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>{t('hero.card1Title')}</h3>
                </div>
                <p className={`text-sm text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>{t('hero.card1Text')}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-8 top-20 bg-white rounded-lg shadow-xl p-4 max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M19.5 13.5L12 21L4.5 13.5L12 6L17.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5 11.5L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 7L19.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className={`font-medium text-gray-900 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>{t('hero.card2Title')}</h3>
                </div>
                <p className={`text-sm text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>{t('hero.card2Text')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center">
          <span className={`text-sm text-gray-500 mb-2 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>{t('hero.scrollDown')}</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
