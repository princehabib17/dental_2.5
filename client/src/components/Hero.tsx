import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className={`md:w-1/2 mt-12 md:mt-0 ${isRtl ? 'md:pl-0 md:pr-8' : 'md:pr-0 md:pl-8'}`}>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
              }`}
            >
              {t('hero.title')}
            </h1>
            <p 
              className={`text-lg md:text-xl text-gray-600 mb-8 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('hero.subtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRtl ? 'rtl-toggle' : ''}`}>
              <Link href="/contact#appointment">
                <a>
                  <Button 
                    size="lg"
                    className={`bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-lg transition-all hover:shadow-xl ${
                      isRtl ? 'font-arabic' : 'font-heading-en'
                    }`}
                  >
                    {t('hero.bookAppointment')}
                  </Button>
                </a>
              </Link>
              <Link href="/services">
                <a>
                  <Button 
                    variant="outline"
                    size="lg"
                    className={`bg-white border-primary text-primary hover:bg-gray-50 px-6 py-3 rounded-lg shadow-md transition-all hover:shadow-lg ${
                      isRtl ? 'font-arabic' : 'font-heading-en'
                    }`}
                  >
                    {t('hero.ourServices')}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1579684288361-5c1a2950f005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt={t('hero.imageAlt')} 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
