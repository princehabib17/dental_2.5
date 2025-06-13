import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, ChevronDown, Sparkles } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Advanced 2025 Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-teal-500/10 to-purple-600/20 animate-gradient-x"></div>
        
        {/* Dynamic noise overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating orbs with advanced animations */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/30 to-teal-400/30 backdrop-blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 backdrop-blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-20 h-20 border border-white/20 -rotate-45 animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <motion.div 
              className={`${isRtl ? 'lg:order-2 text-right' : 'lg:order-1 text-left'} space-y-8`}
              initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`text-white/90 font-medium ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                  Available for Same-Day Appointments
                </span>
              </motion.div>

              {/* Main Heading with 2025 Typography */}
              <div className="space-y-6">
                <motion.h1 
                  className={`text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight ${
                    isRtl ? 'font-arabic' : 'font-heading-en'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <span className="block text-white mb-4">
                    Your Perfect
                  </span>
                  <motion.span 
                    className="block bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '300% 300%' }}
                  >
                    Smile Transformation
                  </motion.span>
                </motion.h1>

                <motion.p 
                  className={`text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed ${
                    isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  World-class dental care in Makati with cutting-edge technology, 
                  personalized treatments, and internationally trained specialists.
                </motion.p>
              </div>

              {/* CTA Buttons with Advanced Interactions */}
              <motion.div 
                className={`flex flex-col sm:flex-row gap-6 ${isRtl ? 'sm:justify-end' : 'sm:justify-start'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#appointment">
                    <Button 
                      size="lg" 
                      className={`group relative overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 ${
                        isRtl ? 'font-arabic' : 'font-heading-en'
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <CalendarCheck className="w-6 h-6" />
                        Book Consultation
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="tel:+6328123456">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className={`group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-500 ${
                        isRtl ? 'font-arabic' : 'font-heading-en'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        Call Now
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex items-center gap-8 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 border-3 border-white/30 flex items-center justify-center text-white font-bold shadow-xl"
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                    >
                      {String.fromCharCode(65 + i)}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className={`text-white/80 font-medium ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                    2,500+ Happy Patients
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive 3D Elements */}
            <motion.div 
              className={`${isRtl ? 'lg:order-1' : 'lg:order-2'} relative h-[700px]`}
              initial={{ opacity: 0, x: isRtl ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* 3D Card Stack */}
              <div className="relative h-full w-full perspective-1000">
                
                {/* Main Card */}
                <motion.div
                  className="absolute top-16 left-8 right-8 h-80 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8"
                  animate={{ 
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, 2, 0, -2, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 15,
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className={`text-2xl font-bold text-white mb-4 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                        Premium Care Experience
                      </h3>
                      <p className={`text-white/80 leading-relaxed ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                        State-of-the-art dental technology with personalized treatment plans designed specifically for you.
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white/60 text-sm">4.9/5.0</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  className="absolute top-8 right-4 w-48 h-32 bg-gradient-to-br from-teal-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-black text-white mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      15+
                    </motion.div>
                    <p className="text-white/80 text-sm font-medium">Years Experience</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-16 left-4 w-52 h-36 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -2, 0, 2, 0]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <CalendarCheck className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-bold">Same Day</h4>
                      <p className="text-white/80 text-sm">Appointments Available</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className={`text-sm font-medium ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
            Explore Services
          </span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;