import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { FaTooth, FaTeeth } from 'react-icons/fa';
import { TbDentalOff, TbDental } from 'react-icons/tb';
import { GiTooth } from 'react-icons/gi';
import { MdDns } from 'react-icons/md';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  // Dental services data
  const services = [
    { id: 'crowns', icon: <FaTooth className="h-8 w-8" /> },
    { id: 'veneers', icon: <TbDental className="h-8 w-8" /> },
    { id: 'rootcanal', icon: <TbDentalOff className="h-8 w-8" /> },
    { id: 'bonding', icon: <GiTooth className="h-8 w-8" /> },
    { id: 'bridges', icon: <FaTeeth className="h-8 w-8" /> },
    { id: 'whitening', icon: <FaTooth className="h-8 w-8" /> },
    { id: 'orthodontic', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14V6M12 6H8.5C8.5 6 8 5.3 8 5C8 4.5 8.5 4 9 4C9.5 4 10 4.5 10 5C10 5.5 10.5 6 11 6C11.5 6 12 5.5 12 5C12 4.5 12.5 4 13 4C13.5 4 14 4.5 14 5C14 5.5 14.5 6 15 6C15.5 6 16 5.5 16 5C16 4.5 16.5 4 17 4C17.5 4 18 4.5 18 5C18 5.3 17.5 6 17.5 6H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 11H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.5 16.5L12 20L8.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'implants', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15C3 15 3 9 7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 9C17 9 17 15 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 17C10 19 14 19 16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 10C10 9 11 7 12 7C13 7 14 9 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'overlay', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L11 4L18 11L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 9.5C10 9.5 11 9 12 10C13 11 14 10.5 14 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11.5C6 11.5 7 11 8 12C9 13 10 12.5 10 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 13.5C10 13.5 11 13 12 14C13 15 14 14.5 14 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.34961 17C6.14961 21.5 12.8496 22.9999 17.9496 19C13.9496 18.5 10.9496 13.5 9.94961 11C7.94961 13 5.74961 14 3.34961 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'periodontics', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.0229 9.26491 18.8687 11.21 21.3184C11.5199 21.7038 12.1096 21.6861 12.394 21.2829C14.1952 18.7372 19 12.8185 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'oralsurgery', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 15H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'dentures', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> }
  ];
  
  // Animation variants for the services grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Services Banner */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {t('servicesPage.title')}
            </h1>
            <p 
              className={`text-lg text-gray-600 max-w-2xl mx-auto ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('servicesPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 right-0 w-64 h-64 bg-primary/5 rounded-full z-0"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 -left-20 w-80 h-80 bg-secondary/5 rounded-full z-0"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <div className="absolute top-1/3 right-10 opacity-10">
          <FaTooth className="w-20 h-20 text-primary" />
        </div>
        <div className="absolute bottom-1/3 left-10 opacity-10">
          <FaTeeth className="w-20 h-20 text-secondary" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              {t('services.title')}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-primary"></div>
              <FaTooth className="text-primary h-5 w-5" />
              <div className="h-0.5 w-12 bg-primary"></div>
            </div>
            <p className={`text-gray-600 max-w-3xl mx-auto ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              {t('services.subtitle')}
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard 
                  id={service.id} 
                  icon={service.icon} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section title */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              {t('servicesPage.technology.title')}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-primary"></div>
              <GiTooth className="text-primary h-5 w-5" />
              <div className="h-0.5 w-12 bg-primary"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-xl shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2568&q=80" 
                  alt={t('servicesPage.technology.imageAlt')} 
                  className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-70 mix-blend-overlay rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg inline-block">
                    <p className={`text-sm font-medium text-primary ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                      {t('servicesPage.technology.imageAlt')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={`md:w-1/2 ${isRtl ? 'md:pr-12' : 'md:pl-12'}`}>
              <p 
                className={`text-gray-600 mb-6 ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                }`}
              >
                {t('servicesPage.technology.description1')}
              </p>
              <p 
                className={`text-gray-600 ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                }`}
              >
                {t('servicesPage.technology.description2')}
              </p>
              <ul className={`mt-6 space-y-3 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                {['equipment1', 'equipment2', 'equipment3', 'equipment4', 'equipment5'].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg 
                      className={`h-6 w-6 text-primary ${isRtl ? 'ml-2' : 'mr-2'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{t(`servicesPage.technology.${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
