import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar, Search, Heart } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import ArevoloLogo from '@/assets/images/arevalo-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    <>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a href="tel:+97141234567" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={isRtl ? 'font-arabic' : 'font-body-en'}>+971 4 123 4567</span>
              </a>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={isRtl ? 'font-arabic' : 'font-body-en'}>Mon-Sat: 8AM - 8PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageToggle />
              <Link href="/favorites" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
              <Heart className="h-4 w-4" />
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-gradient-to-r from-blue-600/95 via-teal-600/95 to-purple-600/95 backdrop-blur-md shadow-2xl" : "bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 shadow-xl"
      )}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img 
                  src={ArevoloLogo} 
                  alt="Arevalo Dental Clinic Logo" 
                  className="logo-size mr-2 rtl:ml-2 rtl:mr-0" 
                />
              </motion.div>
            </Link>

            {/* Search bar (desktop) */}
            <div className="hidden lg:flex relative max-w-md w-full mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 rtl:left-auto rtl:right-3" />
                <input 
                  type="text" 
                  placeholder={t('nav.searchPlaceholder')} 
                  className={`w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rtl:pl-4 rtl:pr-10 ${isRtl ? 'font-arabic' : 'font-body-en'}`}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10 rtl:space-x-reverse">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="relative group"
                >
                  <span className={`${isRtl ? 'font-arabic' : 'font-heading-en'} text-sm uppercase tracking-wider font-bold hover:text-yellow-300 transition-colors ${location === link.href ? 'text-yellow-300' : 'text-white'}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* Appointment Button (Desktop) */}
              <div className="hidden md:block">
                <Link href="/contact#appointment">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className={`bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                    >
                      <Calendar className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                      {t('nav.bookAppointment')}
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Mobile language toggle */}
              <div className="md:hidden">
                <LanguageToggle />
              </div>

              {/* Mobile Menu Button */}
              <Button 
                onClick={toggleMenu} 
                variant="outline" 
                size="icon" 
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {/* Mobile search */}
                  <div className="relative w-full mb-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 rtl:left-auto rtl:right-3" />
                    <input 
                      type="text" 
                      placeholder={t('nav.searchPlaceholder')} 
                      className={`w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary rtl:pl-4 rtl:pr-10 ${isRtl ? 'font-arabic' : 'font-body-en'}`}
                    />
                  </div>
                  
                  {navigationLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={`block py-2 border-b border-gray-100 ${isRtl ? 'font-arabic text-right' : 'font-heading-en text-left'} font-semibold hover:text-primary transition-colors ${location === link.href ? 'text-primary' : 'text-gray-800'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="block pt-2">
                    <Link 
                      href="/contact#appointment" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button 
                        className={`w-full bg-primary hover:bg-primary/90 text-white ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
                      >
                        <Calendar className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                        {t('nav.bookAppointment')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
