import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { FaTeeth, FaTooth, FaWhatsapp } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

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
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-teal-50 to-white flex items-center">
      {/* Floating dental particles */}
      <div className="dental-particle text-3xl text-primary/30"><FaTooth /></div>
      <div className="dental-particle text-2xl text-secondary/30"><FaTeeth /></div>
      <div className="dental-particle text-4xl text-primary/20"><FaTooth /></div>
      <div className="dental-particle text-3xl text-secondary/20"><FaTeeth /></div>
      <div className="dental-particle text-2xl text-primary/30"><FaTooth /></div>
      <div className="dental-particle text-4xl text-secondary/30"><FaTeeth /></div>
      <div className="dental-particle text-3xl text-primary/20"><FaTooth /></div>
      <div className="dental-particle text-2xl text-secondary/20"><FaTeeth /></div>
      <div className="dental-particle text-4xl text-primary/30"><FaTooth /></div>
      {/* Background pattern with dental symbols and animated elements */}
      <div className="absolute inset-0 opacity-5 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-20 text-6xl text-primary"
        >
          <FaTooth />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-40 right-40 text-6xl text-secondary"
        >
          <FaTeeth />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-60 right-60 text-5xl text-primary"
        >
          <GiMedicines />
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/4 text-7xl text-secondary/20"
        >
          <FaTooth />
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/3 text-8xl text-primary/20"
        >
          <FaTeeth />
        </motion.div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-200px)]">
          {/* Left side (text content) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center bg-accent px-4 py-2 rounded-full mb-5">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className={`text-sm font-medium text-primary ${isRtl ? 'font-arabic' : 'font-body-en'}`}>
                AREVALO DENTAL CLINIC
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
              >
                Dr. Daisy Miranda-Arevalo
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 drop-shadow-lg"
              >
                Transforming Smiles
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-gray-900 mt-4 text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-md"
              >
                For Over 30 Years
              </motion.span>
            </h1>

            <p className={`text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              Premier cosmetic dentist serving clients from Saudi Arabia, Bahrain, and Qatar. Specialized in smile makeovers, dental implants, and aesthetic dentistry with international standards in the heart of Makati, Philippines.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isRtl ? 'rtl-toggle' : ''}`}>
              <a href="https://wa.me/639123456789?text=Hello%20Dr.%20Daisy,%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className={`bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 rounded-2xl shadow-2xl transition-all hover:shadow-xl ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <FaWhatsapp className="mr-2 h-6 w-6 rtl:ml-2 rtl:mr-0" />
                    WhatsApp Dr. Daisy
                  </Button>
                </motion.div>
              </a>

              <Link href="/contact#appointment">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`border-primary text-primary hover:bg-primary/5 px-6 py-6 rounded-xl transition-all ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <CalendarCheck className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                    Book Appointment
                  </Button>
                </motion.div>
              </Link>

              <a href="tel:+639123456789">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="ghost"
                    size="lg"
                    className={`text-gray-700 hover:bg-gray-100 px-6 py-6 rounded-xl transition-all ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <Phone className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                    Call Now
                  </Button>
                </motion.div>
              </a>
            </div>
            
            {/* Dental specific trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="bg-accent rounded-full p-3 mb-1" style={{ animation: 'dental-glow 3s infinite' }}>
                  <FaTooth className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium text-gray-800 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Modern Equipment</span>
                <span className={`text-xs text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Latest dental technology</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="bg-accent rounded-full p-3 mb-1" style={{ animation: 'dental-glow 3s infinite 0.5s' }}>
                  <FaTeeth className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium text-gray-800 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Expert Dentists</span>
                <span className={`text-xs text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Over 30 years experience</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="bg-accent rounded-full p-3 mb-1" style={{ animation: 'dental-glow 3s infinite 1s' }}>
                  <GiMedicines className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium text-gray-800 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>International Standards</span>
                <span className={`text-xs text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Filipino excellence</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side (Dr. Daisy's profile image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20 bg-white">
              {/* Dr. Daisy's professional photo */}
              <img
                src="/images/dr-daisy.png"
                alt="Dr. Daisy Miranda-Arevalo - Leading Cosmetic Dentist"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = "/images/dr-daisy-miranda-arevalo.jpg";
                }}
              />

              {/* Dr. Daisy's credentials overlay */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <FaTeeth className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Dr. Daisy Miranda-Arevalo</h3>
                    <p className={`text-sm text-white/90 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>DMD, Fellow in Cosmetic Dentistry</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">30+</div>
                    <div className="text-xs text-white/80">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">5,000+</div>
                    <div className="text-xs text-white/80">Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-white/80">Satisfaction</div>
                  </div>
                </div>

                {/* WhatsApp Quick Contact */}
                <a
                  href="https://wa.me/639123456789?text=Hello%20Dr.%20Daisy,%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    <span className={`font-semibold ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Message on WhatsApp</span>
                  </motion.div>
                </a>
              </div>
              
              {/* Floating specialty badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-3 lg:-left-8 top-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5" />
                  <h3 className={`font-bold ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Smile Makeovers</h3>
                </div>
                <p className="text-xs text-white/90">Transform your smile with expert cosmetic dentistry</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-3 lg:-right-8 bottom-32 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaTooth className="h-5 w-5" />
                  <h3 className={`font-bold ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Dental Implants</h3>
                </div>
                <p className="text-xs text-white/90">Permanent solution for missing teeth</p>
              </motion.div>
            </div>
            
            {/* Animated tooth floating element */}
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut" 
              }}
              className="absolute -right-4 -bottom-10 text-8xl text-primary/30 z-0"
            >
              <FaTooth />
            </motion.div>
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
          <span className={`text-sm text-gray-500 mb-2 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Our Services</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <ChevronDown className="w-4 h-4 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
