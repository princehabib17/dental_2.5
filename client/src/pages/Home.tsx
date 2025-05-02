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
import { Heart, Brain, Bone, Stethoscope, Eye, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  // Featured services data
  const services = [
    { id: 'cardiology', icon: <Heart className="h-8 w-8" /> },
    { id: 'neurology', icon: <Brain className="h-8 w-8" /> },
    { id: 'orthopedics', icon: <Bone className="h-8 w-8" /> },
    { id: 'internal', icon: <Stethoscope className="h-8 w-8" /> },
    { id: 'ophthalmology', icon: <Eye className="h-8 w-8" /> },
    { id: 'pediatrics', icon: <Baby className="h-8 w-8" /> },
  ];

  // Featured doctors data
  const doctors = [
    { 
      id: 'doctor1', 
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' 
    },
    { 
      id: 'doctor2', 
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' 
    },
    { 
      id: 'doctor3', 
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80' 
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
              <a>
                <Button 
                  className={`bg-primary hover:bg-primary/90 text-white ${
                    isRtl ? 'font-arabic' : 'font-heading-en'
                  }`}
                >
                  {t('services.viewAll')}
                </Button>
              </a>
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
              <a>
                <Button 
                  className={`bg-primary hover:bg-primary/90 text-white ${
                    isRtl ? 'font-arabic' : 'font-heading-en'
                  }`}
                >
                  {t('doctors.viewAll')}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      
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
