import React from 'react';
import {
  Plane,
  Car,
  MessageSquare,
  Coffee,
  Stethoscope,
  Heart,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 1,
    icon: Plane,
    titleEn: 'Ticket Recommendations',
    titleAr: 'توصيات التذاكر',
    descEn: 'We help you find the best flights for your journey',
    descAr: 'نساعدك في العثور على أفضل الرحلات',
  },
  {
    id: 2,
    icon: Car,
    titleEn: 'Airport Pickup',
    titleAr: 'استقبال من المطار',
    descEn: 'Arrive worry-free with our airport transfer service',
    descAr: 'وصول آمن مع خدمة نقل المطار',
  },
  {
    id: 3,
    icon: MessageSquare,
    titleEn: 'Online Translator',
    titleAr: 'مترجم أون لاين',
    descEn: 'Language support throughout your stay',
    descAr: 'دعم لغوي طوال فترة إقامتك',
  },
  {
    id: 4,
    icon: Coffee,
    titleEn: 'Coffee & Dates',
    titleAr: 'القهوة والتمر',
    descEn: 'Welcome to comfort and hospitality',
    descAr: 'أهلا وسهلا بالراحة والضيافة',
  },
  {
    id: 5,
    icon: Stethoscope,
    titleEn: 'Smooth Procedures',
    titleAr: 'إجراءات سلسة',
    descEn: 'Expert care with gentle, skilled hands',
    descAr: 'رعاية متخصصة بأيد ماهرة وحنونة',
  },
  {
    id: 6,
    icon: Heart,
    titleEn: 'Aftercare',
    titleAr: 'رعاية ما بعد العلاج',
    descEn: 'Your healing journey starts here',
    descAr: 'رحلة شفاؤك تبدأ هنا',
  },
];

export const YourJourney: React.FC = () => {
  const { isRtl, language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-off-black mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {isRtl ? 'رحلتك معنا' : 'Your Journey'}
          </h2>
          <p
            className={`text-muted-blue text-base md:text-lg max-w-2xl mx-auto ${
              isRtl ? 'font-arabic' : 'font-body-en'
            }`}
          >
            {isRtl
              ? 'من الاستشارة إلى الابتسامة - نحن معك في كل خطوة'
              : 'From consultation to smile — we guide you every step'}
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="mb-12">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:grid md:grid-cols-6 gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.id} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center mb-4 w-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saudi-green to-saudi-green/80 flex items-center justify-center text-white mb-3 shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-bold text-saudi-green mb-2">
                      Step {step.id}
                    </span>
                  </div>

                  {/* Connector Line */}
                  {!isLast && (
                    <div className="absolute w-full h-1 bg-gradient-to-r from-saudi-green to-transparent top-8 left-0 hidden md:block -z-10" />
                  )}

                  {/* Title & Description */}
                  <div className="text-center">
                    <h3
                      className={`font-semibold text-off-black text-sm mb-2 ${
                        isRtl ? 'font-arabic' : 'font-heading-en'
                      }`}
                    >
                      {language === 'en' ? step.titleEn : step.titleAr}
                    </h3>
                    <p
                      className={`text-xs md:text-sm text-muted-blue leading-relaxed ${
                        isRtl ? 'font-arabic' : 'font-body-en'
                      }`}
                    >
                      {language === 'en' ? step.descEn : step.descAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.id} className="flex gap-4">
                  {/* Connector Line & Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saudi-green to-saudi-green/80 flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    {!isLast && (
                      <div className="w-1 h-12 bg-gradient-to-b from-saudi-green to-muted-blue/30 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pt-2 pb-4 ${isRtl ? 'pr-2' : 'pl-2'}`}>
                    <p className="text-xs font-bold text-saudi-green mb-1">
                      Step {step.id}
                    </p>
                    <h3
                      className={`font-semibold text-off-black mb-1 ${
                        isRtl ? 'font-arabic text-right' : 'font-heading-en text-left'
                      }`}
                    >
                      {language === 'en' ? step.titleEn : step.titleAr}
                    </h3>
                    <p
                      className={`text-sm text-muted-blue ${
                        isRtl ? 'font-arabic text-right' : 'font-body-en text-left'
                      }`}
                    >
                      {language === 'en' ? step.descEn : step.descAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            className={`bg-saudi-green hover:bg-saudi-green/90 text-white px-8 py-3 rounded-lg ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {isRtl ? 'خطط لزيارتي' : 'Plan My Visit'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
