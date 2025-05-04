import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AppointmentForm from '@/components/AppointmentForm';
import FAQ from '@/components/FAQ';
import Interactive3DGlobe from '@/components/Interactive3DGlobe';
import { Heart, Brain, Bone, Stethoscope, Eye, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  // Featured dental services data
  const services = [
    { id: 'crowns', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.0229 9.26491 18.8687 11.21 21.3184C11.5199 21.7038 12.1096 21.6861 12.394 21.2829C14.1952 18.7372 19 12.8185 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'veneers', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L11 4L18 11L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 9.5C10 9.5 11 9 12 10C13 11 14 10.5 14 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 11.5C6 11.5 7 11 8 12C9 13 10 12.5 10 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 13.5C10 13.5 11 13 12 14C13 15 14 14.5 14 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.34961 17C6.14961 21.5 12.8496 22.9999 17.9496 19C13.9496 18.5 10.9496 13.5 9.94961 11C7.94961 13 5.74961 14 3.34961 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'rootcanal', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14V6M12 6H8.5C8.5 6 8 5.3 8 5C8 4.5 8.5 4 9 4C9.5 4 10 4.5 10 5C10 5.5 10.5 6 11 6C11.5 6 12 5.5 12 5C12 4.5 12.5 4 13 4C13.5 4 14 4.5 14 5C14 5.5 14.5 6 15 6C15.5 6 16 5.5 16 5C16 4.5 16.5 4 17 4C17.5 4 18 4.5 18 5C18 5.3 17.5 6 17.5 6H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 11H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.5 16.5L12 20L8.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'bonding', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15C3 15 3 9 7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 9C17 9 17 15 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 17C10 19 14 19 16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 10C10 9 11 7 12 7C13 7 14 9 15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'bridges', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 15H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { id: 'whitening', icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  ];

  // Featured doctors data - Arevalo Dental Clinic team
  const doctors = [
    { 
      id: 'doctor1', 
      image: '/images/dr-daisy-miranda-arevalo.jpg'
    },
    { 
      id: 'doctor2', 
      image: '/images/dr-caroline-verceles-arevalo.jpg'
    },
    { 
      id: 'doctor3', 
      image: '/images/dr-eloisa-tiongson.jpg'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Indicators */}
      <TrustIndicators />
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {t('services.title')}
            </h2>
            <p 
              className={`text-gray-600 max-w-2xl mx-auto ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                id={service.id} 
                icon={service.icon} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                className={`bg-primary hover:bg-primary/90 text-white ${
                  isRtl ? 'font-arabic' : 'font-heading-en'
                }`}
              >
                {t('services.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {t('doctors.title')}
            </h2>
            <p 
              className={`text-gray-600 max-w-2xl mx-auto ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('doctors.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                id={doctor.id} 
                image={doctor.image} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/doctors">
              <Button 
                className={`bg-primary hover:bg-primary/90 text-white ${
                  isRtl ? 'font-arabic' : 'font-heading-en'
                }`}
              >
                {t('doctors.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Global Connection Section */}
      <Interactive3DGlobe />
      
      {/* Testimonials */}
      <TestimonialCarousel />
      
      {/* Appointment Form */}
      <AppointmentForm />
      
      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default Home;
