import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import { Heart, Brain, Bone, Stethoscope, Eye, Baby, HeartPulse, Cat, Ear, Microscope } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  // All services data
  const services = [
    { id: 'cardiology', icon: <Heart className="h-8 w-8" /> },
    { id: 'neurology', icon: <Brain className="h-8 w-8" /> },
    { id: 'orthopedics', icon: <Bone className="h-8 w-8" /> },
    { id: 'internal', icon: <Stethoscope className="h-8 w-8" /> },
    { id: 'ophthalmology', icon: <Eye className="h-8 w-8" /> },
    { id: 'pediatrics', icon: <Baby className="h-8 w-8" /> },
    { id: 'pulmonology', icon: <HeartPulse className="h-8 w-8" /> },
    { id: 'nephrology', icon: <Cat className="h-8 w-8" /> },
    { id: 'ent', icon: <Ear className="h-8 w-8" /> },
    { id: 'laboratory', icon: <Microscope className="h-8 w-8" /> },
  ];

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                id={service.id} 
                icon={service.icon} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt={t('servicesPage.technology.imageAlt')} 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <div className={`md:w-1/2 ${isRtl ? 'md:pr-12' : 'md:pl-12'}`}>
              <h2 
                className={`text-3xl font-bold text-gray-900 mb-4 ${
                  isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                }`}
              >
                {t('servicesPage.technology.title')}
              </h2>
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
                {['equipment1', 'equipment2', 'equipment3', 'equipment4'].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg 
                      className={`h-6 w-6 text-green-500 ${isRtl ? 'ml-2' : 'mr-2'}`} 
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
