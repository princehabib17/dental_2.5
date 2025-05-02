import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  
  const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {t('testimonials.title')}
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto ${
              isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
            }`}
          >
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(${isRtl ? '' : '-'}${currentSlide * 100}%)` }}
            >
              {testimonials.map((id) => (
                <div key={id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard id={id} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 bg-white rounded-full h-10 w-10 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label={t('testimonials.previous')}
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 bg-white rounded-full h-10 w-10 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label={t('testimonials.next')}
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </Button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-200'
                }`}
                aria-label={t('testimonials.goToSlide', { number: index + 1 })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
