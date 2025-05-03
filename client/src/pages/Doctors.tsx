import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import DoctorCard from '@/components/DoctorCard';
import DrDaisyImage from '@/assets/images/dr-daisy.png';
import DrCarolineImage from '@/assets/images/dr-caroline.png';
import DrEloisaImage from '@/assets/images/dr-eloisa.png';

const Doctors: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  // Dentist data with real photos
  const doctors = [
    { 
      id: 'doctor1', // Dr. Daisy Miranda-Arevalo (Head Dentist)
      image: DrDaisyImage 
    },
    { 
      id: 'doctor2', // Dr. Caroline Verceles-Arevalo (Associate Dentist)
      image: DrCarolineImage 
    },
    { 
      id: 'doctor3', // Dr. Eloisa Tiongson (Associate Dentist)
      image: DrEloisaImage 
    }
  ];

  return (
    <>
      {/* Doctors Banner */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {t('doctorsPage.title')}
            </h1>
            <p 
              className={`text-lg text-gray-600 max-w-2xl mx-auto ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('doctorsPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                id={doctor.id} 
                image={doctor.image} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className={`text-3xl font-bold text-gray-900 mb-4 ${
                isRtl ? 'font-arabic' : 'font-heading-en'
              }`}
            >
              {t('doctorsPage.joinTeam.title')}
            </h2>
            <p 
              className={`text-gray-600 mb-8 ${
                isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'
              }`}
            >
              {t('doctorsPage.joinTeam.description')}
            </p>
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-col md:flex-row md:space-x-6 rtl:md:space-x-reverse">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 
                    className={`text-xl font-bold text-gray-900 mb-3 ${
                      isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                    }`}
                  >
                    {t('doctorsPage.joinTeam.benefits.title')}
                  </h3>
                  <ul className={`space-y-2 text-left rtl:text-right ${isRtl ? 'font-arabic' : 'font-body-en'}`}>
                    {['benefit1', 'benefit2', 'benefit3', 'benefit4'].map((item) => (
                      <li key={item} className="flex items-start">
                        <svg 
                          className={`h-5 w-5 text-green-500 ${isRtl ? 'ml-2' : 'mr-2'} mt-0.5`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{t(`doctorsPage.joinTeam.benefits.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <h3 
                    className={`text-xl font-bold text-gray-900 mb-3 ${
                      isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'
                    }`}
                  >
                    {t('doctorsPage.joinTeam.opportunities.title')}
                  </h3>
                  <ul className={`space-y-2 text-left rtl:text-right ${isRtl ? 'font-arabic' : 'font-body-en'}`}>
                    {['opportunity1', 'opportunity2', 'opportunity3', 'opportunity4'].map((item) => (
                      <li key={item} className="flex items-start">
                        <svg 
                          className={`h-5 w-5 text-green-500 ${isRtl ? 'ml-2' : 'mr-2'} mt-0.5`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{t(`doctorsPage.joinTeam.opportunities.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="mailto:careers@arevalodental.com" 
                  className={`inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-md transition-colors ${
                    isRtl ? 'font-arabic' : 'font-heading-en'
                  }`}
                >
                  {t('doctorsPage.joinTeam.contactUs')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
