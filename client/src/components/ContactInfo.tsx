import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.addressTitle'),
      content: t('contact.address'),
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.phoneTitle'),
      content: t('contact.phone'),
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.emailTitle'),
      content: t('contact.email'),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('contact.hoursTitle'),
      content: t('contact.hours'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactItems.map((item, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <div className={`flex items-start ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className={`text-primary ${isRtl ? 'ml-4' : 'mr-4'} mt-1`}>{item.icon}</div>
              <div>
                <h3 
                  className={`font-bold text-gray-900 mb-1 ${
                    isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                  }`}
                >
                  {item.title}
                </h3>
                <p 
                  className={`text-gray-600 ${
                    isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
                  }`}
                >
                  {item.content}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
