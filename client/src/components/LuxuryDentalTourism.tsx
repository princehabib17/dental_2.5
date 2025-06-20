import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { FaPlane, FaStar, FaUserTie, FaHotel, FaAward, FaShieldAlt } from 'react-icons/fa';
import { MdDiamond, MdStars } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const LuxuryDentalTourism: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const luxuryFeatures = [
    {
      icon: <FaPlane className="h-8 w-8" />,
      title: "VIP Airport Transfer",
      description: "Luxury vehicle pickup from NAIA with Arabic-speaking driver",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHotel className="h-8 w-8" />,
      title: "5-Star Accommodation",
      description: "Premium hotel suites in Makati CBD with halal dining options",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaUserTie className="h-8 w-8" />,
      title: "Personal Concierge",
      description: "Dedicated Arabic-speaking assistant for entire stay",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <MdDiamond className="h-8 w-8" />,
      title: "Premium Dental Suites",
      description: "Private treatment rooms with luxury amenities",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const certifications = [
    { name: "JCI Accredited", icon: <FaAward className="h-5 w-5" /> },
    { name: "ISO 9001:2015", icon: <FaShieldAlt className="h-5 w-5" /> },
    { name: "DOH Licensed", icon: <FaStar className="h-5 w-5" /> },
    { name: "PDA Member", icon: <MdStars className="h-5 w-5" /> }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-xl"
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-none">
            <MdDiamond className="mr-2 h-4 w-4" />
            Exclusive for Saudi Clients
          </Badge>
          
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-blue-300 to-teal-300 bg-clip-text text-transparent ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
            Luxury Dental Tourism
          </h2>
          
          <p className={`text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            Experience world-class dental care with unparalleled luxury and cultural sensitivity. 
            From Riyadh to Manila, we provide an exclusive dental tourism experience designed for discerning Saudi clients.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "500+", label: "Saudi Clients Served", icon: <FaStar /> },
            { number: "98%", label: "Satisfaction Rate", icon: <FaAward /> },
            { number: "15+", label: "Years Experience", icon: <MdDiamond /> },
            { number: "24/7", label: "Concierge Support", icon: <FaUserTie /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className={`text-blue-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Luxury Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {luxuryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-all duration-300"></div>
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-bold text-white mb-4 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                  {feature.title}
                </h3>
                <p className={`text-blue-100 leading-relaxed ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12"
        >
          <h3 className={`text-2xl font-bold text-white mb-8 text-center ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
            International Certifications & Accreditations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center flex-col text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white mb-3">
                  {cert.icon}
                </div>
                <span className={`text-blue-100 font-medium ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
            Ready for Your Luxury Dental Journey?
          </h3>
          <p className={`text-blue-100 mb-8 max-w-2xl mx-auto ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            Contact our specialized Saudi client services team to plan your personalized dental tourism experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-none px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaPlane className="mr-2 h-5 w-5" />
              Plan My Dental Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              <FaUserTie className="mr-2 h-5 w-5" />
              Speak to Concierge
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryDentalTourism;