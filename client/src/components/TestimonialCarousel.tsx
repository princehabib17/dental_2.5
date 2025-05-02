import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  
  const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <MessageSquareQuote className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Patient Stories</span>
            </div>
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }} 
            className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {t('testimonials.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-gray-600 max-w-2xl mx-auto ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
            }`}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Card shadow */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] h-16 bg-primary/5 blur-xl rounded-full"></div>
          
          {/* Testimonial Slides with AnimatePresence for smooth transitions */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 50 : -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <TestimonialCard id={testimonials[currentSlide]} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons - more sophisticated styling */}
          <div className="flex justify-between mt-10">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="bg-white backdrop-blur-sm border border-gray-200 rounded-full h-12 w-12 shadow-md hover:bg-gray-50 transition-all group"
                aria-label={t('testimonials.previous')}
              >
                <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </Button>
            </motion.div>
            
            {/* Indicators in the middle */}
            <div className="flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={t('testimonials.goToSlide', { number: index + 1 })}
                />
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="bg-white backdrop-blur-sm border border-gray-200 rounded-full h-12 w-12 shadow-md hover:bg-gray-50 transition-all group"
                aria-label={t('testimonials.next')}
              >
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
