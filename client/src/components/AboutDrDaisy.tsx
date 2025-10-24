import { motion } from 'framer-motion';
import { Award, Users, Star, Heart, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp as WhatsAppIcon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

export function AboutDrDaisy() {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: '30+ Years Experience',
      description: 'Over three decades of excellence in cosmetic and general dentistry'
    },
    {
      icon: Users,
      title: '5,000+ Happy Patients',
      description: 'Trusted by patients from Saudi Arabia, Bahrain, Qatar, and beyond'
    },
    {
      icon: Star,
      title: 'International Standards',
      description: 'Trained in advanced cosmetic dentistry techniques and continuing education'
    },
    {
      icon: Globe,
      title: 'Dental Tourism Expert',
      description: 'Specialized care for international patients with VIP services'
    }
  ];

  const specialties = [
    'Cosmetic Dentistry & Smile Makeovers',
    'Dental Implants & Implantology',
    'Porcelain Veneers & Crowns',
    'Teeth Whitening & Aesthetic Treatments',
    'Orthodontics & Invisalign',
    'Root Canal Therapy',
    'Full Mouth Rehabilitation',
    'Preventive & General Dentistry'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-semibold">Meet Your Dentist</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
            About Dr. Daisy Miranda-Arevalo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leading Cosmetic Dentist with 30+ Years of Experience in Makati, Philippines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Photo & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Photo */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-200 dark:ring-blue-800">
                <img
                  src="/images/dr-daisy.png"
                  alt="Dr. Daisy Miranda-Arevalo"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/dr-daisy-miranda-arevalo.jpg";
                  }}
                />
              </div>

              {/* Credentials Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 w-11/12"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Credentials</p>
                    <p className="font-bold text-gray-900 dark:text-white">DMD, Fellow in Cosmetic Dentistry</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <a
                href="https://wa.me/639123456789?text=Hello%20Dr.%20Daisy,%20I%20would%20like%20to%20schedule%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg">
                  <WhatsAppIcon className="mr-2 h-6 w-6" />
                  WhatsApp Dr. Daisy Directly
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - About Text & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:pt-0 pt-12"
          >
            {/* Bio */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dr. Daisy Miranda-Arevalo has dedicated over <strong>30 years</strong> to perfecting smiles and transforming lives through exceptional dental care. As the <strong>Head Dentist</strong> at Arevalo Dental Clinic in the heart of Makati's Central Business District, she has built a reputation for excellence that extends across the Philippines and throughout the Gulf region.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With a specialized focus on <strong>cosmetic dentistry</strong> and a Fellowship in Cosmetic Dentistry, Dr. Arevalo has helped thousands of patients from Saudi Arabia, Bahrain, Qatar, and beyond achieve their dream smiles. Her expertise in smile makeovers, dental implants, and aesthetic dentistry is matched only by her commitment to patient comfort and satisfaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dr. Arevalo combines <strong>cutting-edge technology</strong> with personalized care, offering international-standard dental services tailored to the unique needs of each patient. Her clinic is renowned for providing VIP dental tourism services, making the journey from the Gulf to Manila seamless and stress-free.
              </p>
            </div>

            {/* Specialties */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{specialty}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <achievement.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Dr. Daisy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Why Patients Choose Dr. Daisy
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience world-class dental care with a doctor who truly understands the needs of international patients and delivers exceptional results with compassion and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/639123456789?text=Hello%20Dr.%20Daisy,%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg">
                <WhatsAppIcon className="mr-2 h-6 w-6" />
                Book Your Consultation
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg">
                View Contact Details
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
