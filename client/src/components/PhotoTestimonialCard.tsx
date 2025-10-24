import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PhotoTestimonialCardProps {
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

export function PhotoTestimonialCard({
  name,
  nameAr,
  location,
  locationAr,
  procedure,
  procedureAr,
  rating,
  imageUrl,
  quote,
  quoteAr,
  language = 'en'
}: PhotoTestimonialCardProps) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const displayName = isArabic && nameAr ? nameAr : name;
  const displayLocation = isArabic && locationAr ? locationAr : location;
  const displayProcedure = isArabic && procedureAr ? procedureAr : procedure;
  const displayQuote = isArabic && quoteAr ? quoteAr : quote;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
    >
      {/* Patient Photo */}
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
        <img
          src={imageUrl}
          alt={displayName}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Language Badge */}
        {language === 'ar' && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            🇸🇦 {t('enhancedTestimonials.arabicTestimonial', 'Arabic')}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
          "{displayQuote}"
        </blockquote>

        {/* Patient Info */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-900 dark:text-white text-lg">
            {displayName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {displayLocation}
          </p>
          <div className="mt-2">
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
              {displayProcedure}
            </span>
          </div>
        </div>

        {/* Translation Note */}
        {language === 'ar' && isArabic && (
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            {t('enhancedTestimonials.originallyArabic', 'Originally recorded in Arabic')}
          </p>
        )}
        {language === 'ar' && !isArabic && (
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            {t('enhancedTestimonials.translatedFromArabic', 'Translated from Arabic')}
          </p>
        )}
      </div>
    </motion.div>
  );
}
