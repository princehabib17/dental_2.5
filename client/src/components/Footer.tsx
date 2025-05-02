import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              {t('footer.about.title')}
            </h3>
            <p className={`text-gray-300 mb-4 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              {t('footer.about.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              {t('footer.quickLinks.title')}
            </h3>
            <ul className={`space-y-2 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.quickLinks.home')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.quickLinks.services')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/doctors">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.quickLinks.doctors')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.quickLinks.contact')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              {t('footer.services.title')}
            </h3>
            <ul className={`space-y-2 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              {['cardiology', 'neurology', 'orthopedics', 'pediatrics', 'ophthalmology'].map(service => (
                <li key={service}>
                  <Link href={`/services#${service}`}>
                    <a className="text-gray-300 hover:text-white transition-colors">
                      {t(`services.${service}.title`)}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isRtl ? 'font-arabic rtl-toggle' : 'font-heading-en'}`}>
              {t('footer.contact.title')}
            </h3>
            <ul className={`space-y-3 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              <li className={`flex items-start ${isRtl ? 'rtl-toggle' : ''}`}>
                <MapPin className={`mt-1 ${isRtl ? 'ml-3' : 'mr-3'} flex-shrink-0`} size={18} />
                <span className="text-gray-300">
                  {t('contact.address')}
                </span>
              </li>
              <li className={`flex items-center ${isRtl ? 'rtl-toggle' : ''}`}>
                <Phone className={`${isRtl ? 'ml-3' : 'mr-3'} flex-shrink-0`} size={18} />
                <span className="text-gray-300">{t('contact.phone')}</span>
              </li>
              <li className={`flex items-center ${isRtl ? 'rtl-toggle' : ''}`}>
                <Mail className={`${isRtl ? 'ml-3' : 'mr-3'} flex-shrink-0`} size={18} />
                <span className="text-gray-300">{t('contact.email')}</span>
              </li>
              <li className={`flex items-center ${isRtl ? 'rtl-toggle' : ''}`}>
                <Clock className={`${isRtl ? 'ml-3' : 'mr-3'} flex-shrink-0`} size={18} />
                <span className="text-gray-300">
                  {t('contact.hours')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`text-gray-400 text-sm ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className={`flex space-x-6 rtl:space-x-reverse text-sm text-gray-400 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.sitemap')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
