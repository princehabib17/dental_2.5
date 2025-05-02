import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRtl } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${isRtl ? 'font-arabic' : 'font-body-en'}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
