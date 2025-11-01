import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const StickyWhatsAppFAB: React.FC = () => {
  const { isRtl } = useLanguage();

  const whatsappNumber = '639123456789';
  const whatsappMessage = 'Hi! I am interested in your dental services. Could you help me?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center cursor-pointer shadow-xl transition-all duration-200 hover:shadow-2xl animate-pulse-fab ${
        isRtl ? 'left-6 md:left-6' : 'right-6 md:right-6'
      } bottom-6 md:bottom-6`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
    </motion.a>
  );
};

export default StickyWhatsAppFAB;
