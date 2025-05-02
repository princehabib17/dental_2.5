import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface DoctorCardProps {
  id: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ id, image }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={t(`doctors.${id}.name`)} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 
          className={`text-xl font-bold mb-1 ${
            isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
          }`}
        >
          {t(`doctors.${id}.name`)}
        </h3>
        <p 
          className={`text-primary mb-3 ${
            isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
          }`}
        >
          {t(`doctors.${id}.specialty`)}
        </p>
        <p 
          className={`text-gray-600 mb-4 ${
            isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
          }`}
        >
          {t(`doctors.${id}.bio`)}
        </p>
        <div className={`flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
          <Link href="/contact#appointment">
            <a>
              <Button 
                variant="link" 
                className={`text-primary hover:text-primary/80 p-0 ${
                  isRtl ? 'font-arabic' : 'font-heading-en'
                }`}
              >
                {t('doctors.bookAppointment')}
                <Calendar className={`${isRtl ? 'mr-2' : 'ml-2'} h-4 w-4`} />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
