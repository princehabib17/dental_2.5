import React from 'react';
import { Award, Shield, Star, CheckCircle, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const logos = [
  { id: 1, icon: Award, label: 'International Award' },
  { id: 2, icon: Shield, label: 'Quality Certified' },
  { id: 3, icon: Star, label: 'Excellence Badge' },
  { id: 4, icon: CheckCircle, label: 'Verified Partner' },
  { id: 5, icon: Zap, label: 'Innovation Leader' },
  { id: 6, icon: Users, label: 'Trusted By' },
];

export const LogoMarquee: React.FC = () => {
  const { isRtl } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Optional title */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-muted-blue font-semibold">
            {isRtl ? 'موثوق من قبل القادة في الصناعة' : 'Trusted by Industry Leaders'}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden bg-white rounded-lg p-6 shadow-sm">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling content */}
          <div className={`flex gap-12 animate-marquee ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* First set */}
            {logos.map((logo) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`${logo.id}-1`}
                  className="flex flex-col items-center justify-center min-w-max"
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'running';
                  }}
                >
                  <Icon className="w-12 h-12 text-saudi-green mb-2" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm text-off-black font-medium text-center whitespace-nowrap">
                    {isRtl ? 'معتمد' : logo.label}
                  </span>
                </div>
              );
            })}

            {/* Duplicate set for continuous loop */}
            {logos.map((logo) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`${logo.id}-2`}
                  className="flex flex-col items-center justify-center min-w-max"
                  onMouseEnter={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.style.animationPlayState = 'running';
                  }}
                >
                  <Icon className="w-12 h-12 text-saudi-green mb-2" strokeWidth={1.5} />
                  <span className="text-xs md:text-sm text-off-black font-medium text-center whitespace-nowrap">
                    {isRtl ? 'معتمد' : logo.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
