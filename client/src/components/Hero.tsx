import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { FaTeeth, FaTooth } from 'react-icons/fa';
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
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-r from-primary/10 via-accent to-white">
      {/* Background pattern with dental symbols */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-20 left-20 text-6xl text-primary/20"><FaTooth /></div>
        <div className="absolute bottom-40 right-40 text-6xl text-secondary/20"><FaTeeth /></div>
        <div className="absolute top-60 right-60 text-5xl text-primary/10"><GiMedicines /></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
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
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Transforming Smiles
              </span>
              <br />
              <span className="text-gray-800">In the Heart of Saudi Arabia</span>
            </h1>
            
            <p className={`text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              With a clientele composed of Saudis, Bahrainis, and Qataris, we've established ourselves as a dental clinic of international standards, proudly providing quality general and cosmetic dental care.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isRtl ? 'rtl-toggle' : ''}`}>
              <Link href="/contact#appointment">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg"
                    className={`bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-xl shadow-lg transition-all hover:shadow-xl ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <CalendarCheck className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                    Make an Appointment
                  </Button>
                </motion.div>
              </Link>
              
              <a href="tel:+97141234567">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline"
                    size="lg"
                    className={`border-primary text-primary hover:bg-primary/5 px-6 py-6 rounded-xl transition-all ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    <Phone className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                    Contact Us
                  </Button>
                </motion.div>
              </a>
            </div>
            
            {/* Dental specific trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="bg-accent rounded-full p-3 mb-1">
                  <FaTooth className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium text-gray-800 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Modern Equipment</span>
                <span className={`text-xs text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Latest dental technology</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="bg-accent rounded-full p-3 mb-1">
                  <FaTeeth className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium text-gray-800 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Expert Dentists</span>
                <span className={`text-xs text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Over 30 years experience</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start space-y-1">
                <div className="bg-accent rounded-full p-3 mb-1">
                  <GiMedicines className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium text-gray-800 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>International Standards</span>
                <span className={`text-xs text-gray-500 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Philippine-Arabian quality</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side (dental clinic image with floating elements) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white">
              {/* Main dental image */}
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Modern dental clinic with state-of-the-art equipment" 
                className="w-full h-auto object-cover rounded-t-2xl"
              />
              
              {/* Dental specialists overlay - similar to Arevalo reference */}
              <div className="bg-white p-4 rounded-b-2xl">
                <h3 className={`text-lg font-bold text-gray-800 mb-1 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Our Dental Specialists</h3>
                <p className={`text-sm text-gray-600 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>Meet our team of highly qualified dentists with expertise in all fields of dentistry</p>
                
                {/* Dentist avatars */}
                <div className="flex items-center mt-3 space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">DA</div>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">CV</div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">ET</div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="ml-2"
                  >
                    <Link href="/doctors" className="text-xs text-primary font-medium flex items-center">
                      View All
                      <ChevronDown className="h-3 w-3 ml-1 rotate-270" />
                    </Link>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating cards with dental services*/}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-8 bottom-32 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent rounded-full p-2">
                    <FaTooth className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className={`font-medium text-gray-900 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Dental Implants</h3>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <div className="flex-1 h-1 rounded-full bg-gray-100">
                    <div className="h-1 rounded-full bg-primary w-3/4"></div>
                  </div>
                  <span className="ml-2">98% Success</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-8 top-20 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent rounded-full p-2">
                    <FaTeeth className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className={`font-medium text-gray-900 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>Teeth Whitening</h3>
                </div>
                <div className="w-full bg-gray-100 h-1 rounded-full mt-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-1 rounded-full bg-secondary"
                  ></motion.div>
                </div>
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
