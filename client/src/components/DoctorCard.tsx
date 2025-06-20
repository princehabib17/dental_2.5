import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, MapPin, Clock, MessageCircle, Check, Medal, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { FaTooth } from 'react-icons/fa';

interface DoctorCardProps {
  id: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ id, image }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 card-hover"
    >
      {/* Professional dental doctor card - Arevalo style */}
      <div className="relative overflow-hidden">
        {/* Doctor image */}
        <img 
          src={image} 
          alt={t(`doctors.${id}.name`)} 
          className="w-full h-80 object-cover object-top"
        />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-6 -right-6 w-16 h-16 bg-primary/10 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div 
          className="absolute top-10 right-4 text-primary/30 text-3xl"
          animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <FaTooth />
        </motion.div>
      </div>
      
      {/* Doctor info - matching clean Arevalo style */}
      <div className="p-5 text-center">        
        {/* Name and title */}
        <h3 className={`text-xl font-bold text-primary mb-1 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
          {t(`doctors.${id}.name`)}
        </h3>
        <p className={`text-gray-500 mb-3 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
          {t(`doctors.${id}.position`)}
        </p>
        
        {/* Credentials with icon */}
        <div className="flex items-center justify-center mb-4 gap-1">
          <Medal className="w-4 h-4 text-primary/80" />
          <span className={`text-sm text-gray-600 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            {t(`doctors.${id}.credentials`)}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 justify-center mt-4">
          <Link href="/contact#appointment">
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-white group-hover:shadow-md transition-all"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {t('doctors.bookAppointment')}
            </Button>
          </Link>
          <a href={`tel:${t(`doctors.${id}.phone`)}`}>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary/5 group-hover:shadow-sm transition-all"
            >
              <Phone className="mr-2 h-4 w-4" />
              {t('doctors.callNow')}
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
