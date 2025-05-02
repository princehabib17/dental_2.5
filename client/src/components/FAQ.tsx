import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { ShieldCheck, HelpCircle, Search, Clock, Hospital, Phone, Stethoscope } from 'lucide-react';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Define FAQ items with their associated icons
  const faqItems = [
    { id: 'appointment', icon: <Clock className="w-5 h-5 text-primary" /> },
    { id: 'insurance', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { id: 'firstVisit', icon: <Stethoscope className="w-5 h-5 text-primary" /> },
    { id: 'emergency', icon: <Hospital className="w-5 h-5 text-primary" /> },
    { id: 'prescription', icon: <Phone className="w-5 h-5 text-primary" /> }
  ];

  // Filter FAQ items based on search term
  const filteredFaqItems = searchTerm.trim() === '' 
    ? faqItems 
    : faqItems.filter(item => 
        t(`faq.${item.id}.question`).toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(`faq.${item.id}.answer`).toLowerCase().includes(searchTerm.toLowerCase())
      );

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 rounded-b-[100%] transform scale-x-150"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <HelpCircle className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              {t('faq.helpSection')}
            </span>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {t('faq.title')}
          </h2>
          
          <p 
            className={`text-gray-600 max-w-2xl mx-auto mb-8 ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
            }`}
          >
            {t('faq.subtitle')}
          </p>
          
          {/* Search input */}
          <div className="relative max-w-md mx-auto mb-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
              placeholder={t('faq.searchPlaceholder')}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-1 overflow-hidden">
          {filteredFaqItems.length === 0 ? (
            <div className="p-8 text-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"
              >
                <Search className="h-8 w-8 text-gray-400" />
              </motion.div>
              <h3 className={`text-lg font-semibold mb-2 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                {t('faq.noResults')}
              </h3>
              <p className={`text-gray-500 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                {t('faq.tryDifferentSearch')}
              </p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="divide-y divide-gray-100"
            >
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqItems.map((item, index) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <AccordionItem value={item.id} className="border-none">
                      <AccordionTrigger 
                        className={`group text-left font-semibold hover:bg-gray-50 p-5 rounded-lg transition-all ${
                          isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                            {item.icon}
                          </div>
                          <span>{t(`faq.${item.id}.question`)}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent 
                        className={`px-5 pt-0 pb-5 leading-relaxed ${
                          isRtl ? 'font-arabic rtl-toggle pr-[60px]' : 'font-body-en pl-[60px]'
                        }`}
                      >
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          {t(`faq.${item.id}.answer`)}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
