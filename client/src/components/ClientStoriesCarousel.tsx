import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  image?: string;
  captionEn: string;
  captionAr: string;
  rating?: number;
}

export const ClientStoriesCarousel: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl, language } = useLanguage();
  const swiperRef = useRef<any>(null);

  // Sample testimonials with bilingual captions
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Tariq',
      procedure: 'Dental Implants',
      image: '/images/testimonial-1.jpg',
      captionEn: 'Tariq was terrified leaving Qatar for surgery, but by the time we were done he couldn\'t stop smiling.',
      captionAr: 'كان طارق خائفًا من مغادرة قطر للجراحة، لكن بحلول الوقت الذي انتهينا منه لم يتمكن من التوقف عن الابتسام.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Fatima',
      procedure: 'Smile Makeover',
      image: '/images/testimonial-2.jpg',
      captionEn: 'The team made me feel so comfortable and welcomed. My smile is now exactly what I dreamed of!',
      captionAr: 'جعلني الفريق أشعر براحة جداً ورحابة. ابتسامتي الآن بالضبط ما كنت أحلم به!',
      rating: 5,
    },
    {
      id: '3',
      name: 'Abdullah',
      procedure: 'Root Canal',
      image: '/images/testimonial-3.jpg',
      captionEn: 'Professional, gentle, and caring. The pain was gone and I left with a restored tooth and newfound confidence.',
      captionAr: 'احترافي ولطيف وعطوف. ذهب الألم وغادرت مع سن مستعاد وثقة جديدة.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-off-black mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {isRtl ? 'قصص العملاء' : 'Client Stories'}
          </h2>
          <p
            className={`text-muted-blue text-base md:text-lg max-w-2xl mx-auto ${
              isRtl ? 'font-arabic' : 'font-body-en'
            }`}
          >
            {isRtl
              ? 'اكتشف كيف غيرنا ابتسامات وثقة عملائنا'
              : 'Discover how we transformed smiles and confidence'}
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-8">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            loop={true}
            spaceBetween={30}
            className="rounded-lg overflow-hidden"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 min-h-[400px] md:min-h-[300px] items-center">
                    {/* Image */}
                    <div
                      className={`flex items-center justify-center bg-gradient-to-br from-saudi-green/10 to-muted-blue/10 rounded-lg min-h-[250px] md:min-h-[280px] ${
                        isRtl ? 'md:order-2' : ''
                      }`}
                    >
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-5xl mb-2">😊</div>
                          <p className="text-muted-blue font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-off-black/60">{testimonial.procedure}</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center ${
                        isRtl ? 'md:order-1' : ''
                      }`}
                    >
                      {/* Rating */}
                      {testimonial.rating && (
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Caption */}
                      <p
                        className={`text-base md:text-lg leading-relaxed text-off-black mb-6 italic ${
                          isRtl ? 'font-arabic text-right' : 'font-body-en text-left'
                        }`}
                      >
                        "{language === 'en' ? testimonial.captionEn : testimonial.captionAr}"
                      </p>

                      {/* Name & Procedure */}
                      <div className={isRtl ? 'text-right' : ''}>
                        <p className="font-semibold text-off-black text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-muted-blue text-sm">
                          {testimonial.procedure}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/testimonials">
            <Button
              className={`bg-saudi-green hover:bg-saudi-green/90 text-white px-8 py-3 rounded-lg ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {isRtl ? 'عرض المزيد من التحولات' : 'View More Transformations'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesCarousel;
