import { motion } from 'framer-motion';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { useTranslation } from 'react-i18next';

interface CaseStudy {
  id: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  caseStudyLink?: string;
  category?: string;
}

interface BeforeAfterGalleryProps {
  cases?: CaseStudy[];
}

const defaultCases: CaseStudy[] = [
  {
    id: '1',
    beforeImage: '/images/before-after/smile-1-before.jpg',
    afterImage: '/images/before-after/smile-1-after.jpg',
    title: 'Complete Smile Makeover',
    description: 'Porcelain veneers and teeth whitening transformation',
    category: 'Cosmetic Dentistry',
    caseStudyLink: '/case-studies/smile-makeover-1'
  },
  {
    id: '2',
    beforeImage: '/images/before-after/teeth-2-before.jpg',
    afterImage: '/images/before-after/teeth-2-after.jpg',
    title: 'Dental Implant Success',
    description: 'Full arch restoration with dental implants',
    category: 'Implants',
    caseStudyLink: '/case-studies/implant-success-2'
  },
  {
    id: '3',
    beforeImage: '/images/before-after/alignment-3-before.jpg',
    afterImage: '/images/before-after/alignment-3-after.jpg',
    title: 'Invisalign Treatment',
    description: '12-month clear aligner transformation',
    category: 'Orthodontics',
    caseStudyLink: '/case-studies/invisalign-3'
  }
];

export function BeforeAfterGallery({ cases = defaultCases }: BeforeAfterGalleryProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('beforeAfter.transformations', 'Smile Transformations')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('beforeAfter.transformationsDesc', 'See the life-changing results our patients have achieved with our expert dental care')}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              {caseStudy.category && (
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {caseStudy.category}
                  </span>
                </div>
              )}
              <BeforeAfterSlider
                beforeImage={caseStudy.beforeImage}
                afterImage={caseStudy.afterImage}
                title={caseStudy.title}
                description={caseStudy.description}
                caseStudyLink={caseStudy.caseStudyLink}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {t('beforeAfter.readyForTransformation', 'Ready for your own smile transformation?')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            {t('beforeAfter.bookConsultation', 'Book Your Free Consultation')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
