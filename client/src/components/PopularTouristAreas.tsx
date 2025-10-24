import { motion } from 'framer-motion';
import { MapPin, Camera, Palmtree, Mountain, Building2, Waves } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TouristArea {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  imageUrl: string;
  icon: any;
  category: string;
  categoryAr?: string;
  distance?: string;
  distanceAr?: string;
}

interface PopularTouristAreasProps {
  areas?: TouristArea[];
}

const defaultAreas: TouristArea[] = [
  {
    id: '1',
    name: 'Intramuros',
    nameAr: 'إنتراموروس',
    description: 'Historic walled city with Spanish colonial architecture and rich cultural heritage',
    descriptionAr: 'مدينة تاريخية محاطة بأسوار مع عمارة استعمارية إسبانية وتراث ثقافي غني',
    imageUrl: '/images/tourist-areas/intramuros.jpg',
    icon: Building2,
    category: 'Historical',
    categoryAr: 'تاريخي',
    distance: '5 km from clinic',
    distanceAr: '5 كم من العيادة'
  },
  {
    id: '2',
    name: 'Manila Bay',
    nameAr: 'خليج مانيلا',
    description: 'Famous waterfront with spectacular sunsets and seaside dining experiences',
    descriptionAr: 'كورنيش شهير مع غروب شمس مذهل وتجارب طعام على شاطئ البحر',
    imageUrl: '/images/tourist-areas/manila-bay.jpg',
    icon: Waves,
    category: 'Waterfront',
    categoryAr: 'واجهة بحرية',
    distance: '7 km from clinic',
    distanceAr: '7 كم من العيادة'
  },
  {
    id: '3',
    name: 'Rizal Park',
    nameAr: 'منتزه ريزال',
    description: 'Urban park and green space perfect for relaxation between appointments',
    descriptionAr: 'حديقة حضرية ومساحة خضراء مثالية للاسترخاء بين المواعيد',
    imageUrl: '/images/tourist-areas/rizal-park.jpg',
    icon: Palmtree,
    category: 'Parks & Nature',
    categoryAr: 'حدائق وطبيعة',
    distance: '4 km from clinic',
    distanceAr: '4 كم من العيادة'
  },
  {
    id: '4',
    name: 'Greenbelt Mall',
    nameAr: 'مجمع جرين بيلت',
    description: 'Premier shopping and dining destination in Makati\'s central business district',
    descriptionAr: 'وجهة تسوق وطعام رئيسية في منطقة الأعمال المركزية بمكاتي',
    imageUrl: '/images/tourist-areas/greenbelt.jpg',
    icon: Building2,
    category: 'Shopping',
    categoryAr: 'تسوق',
    distance: '2 km from clinic',
    distanceAr: '2 كم من العيادة'
  },
  {
    id: '5',
    name: 'National Museum',
    nameAr: 'المتحف الوطني',
    description: 'World-class museum complex showcasing Filipino art, culture, and natural history',
    descriptionAr: 'مجمع متاحف عالمي يعرض الفن الفلبيني والثقافة والتاريخ الطبيعي',
    imageUrl: '/images/tourist-areas/national-museum.jpg',
    icon: Camera,
    category: 'Culture',
    categoryAr: 'ثقافة',
    distance: '6 km from clinic',
    distanceAr: '6 كم من العيادة'
  },
  {
    id: '6',
    name: 'Tagaytay',
    nameAr: 'تاجايتاي',
    description: 'Scenic highland city with cool climate, Taal Volcano views, and fresh local cuisine',
    descriptionAr: 'مدينة مرتفعة ذات مناظر خلابة مع مناخ بارد ومناظر بركان تال ومأكولات محلية طازجة',
    imageUrl: '/images/tourist-areas/tagaytay.jpg',
    icon: Mountain,
    category: 'Day Trip',
    categoryAr: 'رحلة نهارية',
    distance: '60 km from clinic',
    distanceAr: '60 كم من العيادة'
  }
];

export function PopularTouristAreas({ areas = defaultAreas }: PopularTouristAreasProps) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">{t('touristAreas.title', 'Popular Tourist Destinations')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            {t('touristAreas.subtitle', 'Explore the beautiful Philippines while receiving world-class dental care')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('touristAreas.description', 'Combine your dental treatment with an unforgettable vacation experience')}
          </p>
        </motion.div>

        {/* Tourist Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const displayName = isArabic && area.nameAr ? area.nameAr : area.name;
            const displayDescription = isArabic && area.descriptionAr ? area.descriptionAr : area.description;
            const displayCategory = isArabic && area.categoryAr ? area.categoryAr : area.category;
            const displayDistance = isArabic && area.distanceAr ? area.distanceAr : area.distance;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={area.imageUrl}
                    alt={displayName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.background =
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {displayCategory}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {displayName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {displayDescription}
                  </p>
                  {displayDistance && (
                    <div className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>{displayDistance}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic ? 'خطط لإجازتك العلاجية' : 'Plan Your Dental Tourism Experience'}
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {isArabic
              ? 'فريقنا المتخصص يمكنه مساعدتك في التخطيط لرحلتك الكاملة - من العلاج إلى السياحة والإقامة'
              : 'Our concierge team can help you plan your entire trip - from treatment to sightseeing and accommodation'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              {isArabic ? 'اتصل بفريق السفر' : 'Contact Travel Team'}
            </a>
            <a
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all hover:scale-105"
            >
              {isArabic ? 'عرض خدماتنا' : 'View Our Services'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
