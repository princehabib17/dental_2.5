import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

export const FinalCTA: React.FC = () => {
  const { isRtl, language } = useLanguage();

  const whatsappNumber = '639123456789';
  const whatsappMessage = 'Hi! I am interested in your dental services. Could you help me?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-off-white via-white to-muted-blue/5">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold text-off-black mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {isRtl ? 'هل أنت مستعد؟' : 'So… are you ready?'}
          </h2>
          <p
            className={`text-lg text-muted-blue max-w-2xl mx-auto ${
              isRtl ? 'font-arabic' : 'font-body-en'
            }`}
          >
            {isRtl
              ? 'دعنا نجعل أحلام ابتسامتك حقيقة'
              : 'Let\'s make your smile dreams real'}
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              className={`bg-saudi-green hover:bg-saudi-green/90 text-white px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {isRtl ? 'تحدث على واتساب' : 'Chat on WhatsApp'}
            </Button>
          </a>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Info */}
            <div>
              <h3
                className={`text-2xl font-bold text-off-black mb-6 ${
                  isRtl ? 'font-arabic text-right' : 'font-heading-en'
                }`}
              >
                {isRtl ? 'عيادة أريفالو للأسنان' : 'Arevalo Dental Clinic'}
              </h3>

              {/* Address */}
              <div className="flex gap-4 mb-6">
                <MapPin className="w-6 h-6 text-saudi-green flex-shrink-0" />
                <div className={isRtl ? 'text-right' : ''}>
                  <p className={`font-semibold text-off-black ${isRtl ? 'font-arabic' : ''}`}>
                    {isRtl ? 'الموقع' : 'Location'}
                  </p>
                  <p className={`text-muted-blue ${isRtl ? 'font-arabic' : ''}`}>
                    {isRtl ? 'مانيلا، الفلبين' : 'Manila, Philippines'}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <Phone className="w-6 h-6 text-saudi-green flex-shrink-0" />
                <div className={isRtl ? 'text-right' : ''}>
                  <p className={`font-semibold text-off-black ${isRtl ? 'font-arabic' : ''}`}>
                    {isRtl ? 'الهاتف' : 'Phone'}
                  </p>
                  <a
                    href="tel:+639123456789"
                    className="text-saudi-green hover:text-saudi-green/80 transition-colors"
                  >
                    +63 9123 456789
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-saudi-green flex-shrink-0" />
                <div className={isRtl ? 'text-right' : ''}>
                  <p className={`font-semibold text-off-black ${isRtl ? 'font-arabic' : ''}`}>
                    {isRtl ? 'البريد الإلكتروني' : 'Email'}
                  </p>
                  <a
                    href="mailto:info@arevalodental.com"
                    className="text-saudi-green hover:text-saudi-green/80 transition-colors"
                  >
                    info@arevalodental.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-saudi-green/10 to-muted-blue/10 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-saudi-green mx-auto mb-4" />
                <p className={`text-muted-blue mb-2 ${isRtl ? 'font-arabic' : ''}`}>
                  {isRtl ? 'خريطة Google' : 'Google Map'}
                </p>
                <a
                  href="https://maps.google.com/?q=Arevalo+Dental+Clinic+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saudi-green hover:text-saudi-green/80 font-semibold transition-colors"
                >
                  {isRtl ? 'افتح الخريطة' : 'Open Map'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p
            className={`text-muted-blue italic text-lg ${
              isRtl ? 'font-arabic' : 'font-body-en'
            }`}
          >
            {isRtl
              ? 'نحن في انتظار ابتسامتك التالية'
              : 'We\'re waiting for your next smile'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
