import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/doctors', label: t('nav.doctors') },
    { href: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <svg className="text-primary h-8 w-8 mr-2 rtl:ml-2 rtl:mr-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
                <path d="M9 12h6"></path>
                <path d="M12 9v6"></path>
              </svg>
              <span className={`font-bold text-primary text-xl ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
                {t('site.name')}
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`${isRtl ? 'font-arabic' : 'font-heading-en'} font-semibold hover:text-primary transition-colors ${location === link.href ? 'text-primary' : 'text-gray-800'}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Appointment Button (Desktop) */}
            <Link href="/contact#appointment">
              <a className="hidden md:block">
                <Button 
                  className={`bg-primary hover:bg-primary/90 text-white ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                >
                  {t('nav.bookAppointment')}
                </Button>
              </a>
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              onClick={toggleMenu} 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className={`block ${isRtl ? 'font-arabic text-right' : 'font-heading-en text-left'} font-semibold hover:text-primary transition-colors ${location === link.href ? 'text-primary' : 'text-gray-800'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact#appointment">
                <a className="block mt-2" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className={`w-full bg-primary hover:bg-primary/90 text-white ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                  >
                    {t('nav.bookAppointment')}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
