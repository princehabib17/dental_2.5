import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  captionEn: string;
  captionAr: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Tariq Al-Dosari',
    procedure: 'Dental Implants',
    captionEn: 'Tariq was terrified leaving Qatar for surgery, but by the time we were done he couldn\'t stop smiling.',
    captionAr: 'كان طارق خائفًا من مغادرة قطر للجراحة، لكن بحلول الوقت الذي انتهينا منه لم يتمكن من التوقف عن الابتسام.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Fatima Al-Rasheed',
    procedure: 'Smile Makeover',
    captionEn: 'The team made me feel so comfortable and welcomed. My smile is now exactly what I dreamed of!',
    captionAr: 'جعلني الفريق أشعر براحة جداً ورحابة. ابتسامتي الآن بالضبط ما كنت أحلم به!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Abdullah Al-Mansouri',
    procedure: 'Root Canal',
    captionEn: 'Professional, gentle, and caring. The pain was gone and I left with a restored tooth and newfound confidence.',
    captionAr: 'احترافي ولطيف وعطوف. ذهب الألم وغادرت مع سن مستعاد وثقة جديدة.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Noor Al-Harbi',
    procedure: 'Veneers',
    captionEn: 'Amazing experience from start to finish. The clinic is modern, clean, and the staff is incredibly professional.',
    captionAr: 'تجربة رائعة من البداية إلى النهاية. العيادة حديثة ونظيفة والموظفون محترفون جداً.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Mohammad Al-Otaibi',
    procedure: 'Orthodontics',
    captionEn: 'Best decision I made! The treatment plan was clear, the team was supportive, and my teeth have never looked better.',
    captionAr: 'أفضل قرار اتخذته! كانت خطة العلاج واضحة، والفريق كان داعماً، وأسناني لم تبدو أفضل من أي وقت مضى.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Layla Al-Kahtani',
    procedure: 'Teeth Whitening',
    captionEn: 'Quick, painless, and incredible results! I love my bright new smile. Highly recommended!',
    captionAr: 'سريع وغير مؤلم ونتائج رائعة! أحب ابتسامتي الجديدة المشرقة. موصى به بشدة!',
    rating: 5,
  },
];

export const TestimonialsPage: React.FC = () => {
  const { language, isRtl } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-off-white to-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold text-off-black mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {isRtl ? 'تحويلات ابتسامات العملاء' : 'Client Smile Transformations'}
          </h1>
          <p
            className={`text-lg text-muted-blue max-w-2xl mx-auto ${
              isRtl ? 'font-arabic' : 'font-body-en'
            }`}
          >
            {isRtl
              ? 'اكتشف كيف غيرنا ابتسامات وثقة مئات الرضا'
              : 'See how we\'ve transformed hundreds of smiles across the Gulf region'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 md:p-8"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className={`text-base leading-relaxed text-off-black mb-6 italic min-h-[120px] ${
                  isRtl ? 'font-arabic text-right' : 'font-body-en text-left'
                }`}
              >
                "{language === 'en' ? testimonial.captionEn : testimonial.captionAr}"
              </p>

              {/* Client Info */}
              <div className={`border-t pt-4 ${isRtl ? 'text-right' : ''}`}>
                <p className="font-semibold text-off-black text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-blue">
                  {testimonial.procedure}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p
            className={`text-lg text-muted-blue mb-6 ${
              isRtl ? 'font-arabic' : 'font-body-en'
            }`}
          >
            {isRtl
              ? 'هل أنت مستعد لتحويل ابتسامتك أيضًا؟'
              : 'Ready to transform your smile too?'}
          </p>
          <a
            href={`https://wa.me/639123456789?text=${encodeURIComponent('Hi! I am interested in your dental services. Could you help me?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-saudi-green hover:bg-saudi-green/90 text-white px-10 py-3 rounded-lg font-semibold transition-all ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
          >
            {isRtl ? 'تحدث معنا على واتساب' : 'Chat with Us on WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
