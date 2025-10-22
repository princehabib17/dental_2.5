import { motion } from 'framer-motion';
import { VideoTestimonialCard } from './VideoTestimonialCard';
import { TestimonialCard } from './TestimonialCard';
import { useTranslation } from 'react-i18next';
import { Star, Video, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface VideoTestimonial {
  type: 'video';
  id: string;
  name: string;
  nameAr?: string;
  location: string;
  locationAr?: string;
  procedure: string;
  procedureAr?: string;
  rating: number;
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
  quoteAr?: string;
  language?: 'en' | 'ar';
}

interface PhotoTestimonial {
  type: 'photo';
  id: string;
  name: string;
  nameAr?: string;
  location: string;
  locationAr?: string;
  procedure: string;
  procedureAr?: string;
  rating: number;
  imageUrl: string;
  quote: string;
  quoteAr?: string;
  language?: 'en' | 'ar';
}

type Testimonial = VideoTestimonial | PhotoTestimonial;

interface EnhancedTestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    type: 'video',
    id: 'v1',
    name: 'Ahmed Al-Rashid',
    nameAr: 'أحمد الراشد',
    location: 'Riyadh, Saudi Arabia',
    locationAr: 'الرياض، المملكة العربية السعودية',
    procedure: 'Complete Smile Makeover',
    procedureAr: 'تجميل الابتسامة الكامل',
    rating: 5,
    videoUrl: '/videos/testimonials/ahmed-testimonial.mp4',
    thumbnailUrl: '/images/testimonials/ahmed-thumb.jpg',
    quote: 'The team at Arevalo Dental made my dream smile a reality. The entire experience was comfortable and professional.',
    quoteAr: 'فريق عيادة أريفالو جعل حلم ابتسامتي حقيقة. كانت التجربة بأكملها مريحة ومهنية.',
    language: 'ar'
  },
  {
    type: 'video',
    id: 'v2',
    name: 'Fatima Al-Dosari',
    nameAr: 'فاطمة الدوسري',
    location: 'Jeddah, Saudi Arabia',
    locationAr: 'جدة، المملكة العربية السعودية',
    procedure: 'Dental Implants',
    procedureAr: 'زراعة الأسنان',
    rating: 5,
    videoUrl: '/videos/testimonials/fatima-testimonial.mp4',
    thumbnailUrl: '/images/testimonials/fatima-thumb.jpg',
    quote: 'I was nervous about getting implants, but Dr. Arevalo explained everything clearly. Now I can smile confidently again!',
    quoteAr: 'كنت قلقة من زراعة الأسنان، لكن الدكتور أريفالو شرح كل شيء بوضوح. الآن أستطيع الابتسام بثقة مرة أخرى!',
    language: 'ar'
  },
  {
    type: 'photo',
    id: 'p1',
    name: 'Mohammed Al-Qahtani',
    nameAr: 'محمد القحطاني',
    location: 'Dammam, Saudi Arabia',
    locationAr: 'الدمام، المملكة العربية السعودية',
    procedure: 'Invisalign Treatment',
    procedureAr: 'علاج الإنفزلاين',
    rating: 5,
    imageUrl: '/images/testimonials/mohammed.jpg',
    quote: 'Outstanding service from consultation to final results. My teeth are perfectly aligned and I did not have to wear traditional braces!',
    quoteAr: 'خدمة متميزة من الاستشارة إلى النتائج النهائية. أسناني الآن مستقيمة تماماً ولم أضطر لارتداء تقويم الأسنان التقليدي!',
    language: 'ar'
  },
  {
    type: 'photo',
    id: 'p2',
    name: 'Sarah Al-Mutairi',
    nameAr: 'سارة المطيري',
    location: 'Riyadh, Saudi Arabia',
    locationAr: 'الرياض، المملكة العربية السعودية',
    procedure: 'Teeth Whitening',
    procedureAr: 'تبييض الأسنان',
    rating: 5,
    imageUrl: '/images/testimonials/sarah.jpg',
    quote: 'The professional teeth whitening gave me incredible results in just one session. Highly recommend!',
    quoteAr: 'تبييض الأسنان الاحترافي أعطاني نتائج مذهلة في جلسة واحدة فقط. أنصح به بشدة!',
    language: 'ar'
  },
  {
    type: 'video',
    id: 'v3',
    name: 'Abdullah Al-Shehri',
    nameAr: 'عبدالله الشهري',
    location: 'Mecca, Saudi Arabia',
    locationAr: 'مكة المكرمة، المملكة العربية السعودية',
    procedure: 'Root Canal & Crown',
    procedureAr: 'علاج الجذور والتاج',
    rating: 5,
    videoUrl: '/videos/testimonials/abdullah-testimonial.mp4',
    thumbnailUrl: '/images/testimonials/abdullah-thumb.jpg',
    quote: 'I was in severe pain and they saw me immediately. The treatment was painless and my tooth feels great now.',
    quoteAr: 'كنت أعاني من ألم شديد وقاموا بفحصي على الفور. كان العلاج بدون ألم وأسناني تشعر بالراحة الآن.',
    language: 'ar'
  },
  {
    type: 'photo',
    id: 'p3',
    name: 'Noura Al-Harbi',
    nameAr: 'نورة الحربي',
    location: 'Medina, Saudi Arabia',
    locationAr: 'المدينة المنورة، المملكة العربية السعودية',
    procedure: 'Porcelain Veneers',
    procedureAr: 'قشور البورسلين',
    rating: 5,
    imageUrl: '/images/testimonials/noura.jpg',
    quote: 'My veneers look so natural! Everyone asks me what I did to get such a beautiful smile.',
    quoteAr: 'القشور تبدو طبيعية جداً! الجميع يسألني ماذا فعلت للحصول على ابتسامة جميلة كهذه.',
    language: 'ar'
  }
];

export function EnhancedTestimonials({ testimonials = defaultTestimonials }: EnhancedTestimonialsProps) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'video' | 'photo'>('all');

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'all') return true;
    return testimonial.type === filter;
  });

  const videoCount = testimonials.filter(t => t.type === 'video').length;
  const photoCount = testimonials.filter(t => t.type === 'photo').length;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            <span className="font-semibold">{t('enhancedTestimonials.patientReviews', 'Patient Reviews')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {t('enhancedTestimonials.hearFromPatients', 'Hear From Our Patients')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('enhancedTestimonials.testimonialsDesc', 'Real stories from real patients who transformed their smiles with us')}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            {t('enhancedTestimonials.allTestimonials', 'All')} ({testimonials.length})
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              filter === 'video'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <Video className="w-4 h-4" />
            {t('enhancedTestimonials.videoTestimonials', 'Videos')} ({videoCount})
          </button>
          <button
            onClick={() => setFilter('photo')}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              filter === 'photo'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            {t('enhancedTestimonials.photoTestimonials', 'Photos')} ({photoCount})
          </button>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {testimonial.type === 'video' ? (
                <VideoTestimonialCard {...testimonial} />
              ) : (
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  text={testimonial.quote}
                  rating={testimonial.rating}
                  image={testimonial.imageUrl}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('enhancedTestimonials.satisfactionRate', 'Patient Satisfaction Rate')}
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
              2,500+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('enhancedTestimonials.happyPatients', 'Happy Patients')}
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('enhancedTestimonials.averageRating', 'Average Rating')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
