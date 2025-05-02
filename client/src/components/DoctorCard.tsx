import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, MapPin, Clock, MessageCircle, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface DoctorCardProps {
  id: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ id, image }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[450px] perspective-1000 group cursor-pointer"
      onClick={toggleFlip}
    >
      <motion.div 
        className="relative w-full h-full preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden border border-gray-100 rounded-2xl overflow-hidden shadow-md bg-white">
          {/* Top status bar with availability indicator */}
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className={`text-xs text-gray-600 ${isRtl ? 'font-arabic' : 'font-body-en'}`}>
                {t('doctors.available')}
              </span>
            </div>
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              {t('doctors.topRated')}
            </Badge>
          </div>
          
          {/* Doctor image with gradient overlay */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
            <img 
              src={image} 
              alt={t(`doctors.${id}.name`)} 
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
            />
            {/* Specialization badge */}
            <Badge className="absolute left-4 bottom-4 z-20 bg-white/80 text-primary backdrop-blur-sm border-0">
              {t(`doctors.${id}.specialty`)}
            </Badge>
          </div>
          
          {/* Doctor info */}
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className={`text-xl font-bold mb-1 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
                  {t(`doctors.${id}.name`)}
                </h3>
                <div className="flex items-center gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({t(`doctors.${id}.reviewCount`)})</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
            
            {/* Quick info */}
            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>{t(`doctors.${id}.experience`)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className={isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}>{t(`doctors.${id}.location`)}</span>
              </div>
            </div>
            
            {/* Flip prompt */}
            <div className="text-xs text-center text-gray-400 mt-1">
              {t('doctors.tapForMore')}
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden border border-gray-100 rounded-2xl overflow-hidden shadow-md bg-white rotateY-180">
          <div className="p-5 flex flex-col h-full">
            <div className="mb-4 flex justify-between items-center">
              <h3 className={`text-xl font-bold ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
                {t(`doctors.${id}.name`)}
              </h3>
              <div className="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            
            <p className={`text-gray-600 mb-4 flex-grow overflow-y-auto ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              {t(`doctors.${id}.bio`)}
            </p>
            
            {/* Specializations */}
            <div className="mb-4">
              <h4 className={`text-sm font-semibold mb-2 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
                {t('doctors.specializations')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {['spec1', 'spec2', 'spec3'].map((spec) => (
                  <Badge key={spec} variant="secondary" className="bg-primary/5 text-primary border-0">
                    {t(`doctors.${id}.${spec}`)}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="mb-4">
              <h4 className={`text-sm font-semibold mb-2 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
                {t('doctors.languages')}
              </h4>
              <div className="flex gap-3">
                {['lang1', 'lang2', 'lang3'].map((lang) => (
                  <div key={lang} className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-primary" />
                    <span className={`text-sm ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
                      {t(`doctors.${id}.${lang}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link href={`tel:${t(`doctors.${id}.phone`)}`}>
                <a className="w-full">
                  <Button variant="outline" className="w-full" size="sm">
                    <Phone className="mr-2 h-3 w-3" />
                    {t('doctors.callNow')}
                  </Button>
                </a>
              </Link>
              <Link href="/contact#appointment">
                <a className="w-full">
                  <Button className="w-full" size="sm">
                    <Calendar className="mr-2 h-3 w-3" />
                    {t('doctors.bookAppointment')}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DoctorCard;
