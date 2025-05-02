import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  
  const faqItems = ['appointment', 'insurance', 'firstVisit', 'emergency', 'prescription'];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {t('faq.title')}
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
            }`}
          >
            {t('faq.subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item} value={item}>
                <AccordionTrigger 
                  className={`text-left font-semibold hover:bg-gray-50 p-4 rounded-lg ${
                    isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                  }`}
                >
                  {t(`faq.${item}.question`)}
                </AccordionTrigger>
                <AccordionContent 
                  className={`bg-white p-4 border border-gray-200 rounded-b-lg mt-1 ${
                    isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                  }`}
                >
                  {t(`faq.${item}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
