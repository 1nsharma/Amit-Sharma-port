
import React, { useEffect, useRef, useState } from 'react';
import Section, { SectionTitle } from './Section';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './Icons';
import { useTranslation } from '../i18n';
import { Stat } from '../types';

// ANIMATION ADDED: A self-contained animated statistic card component
const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { value, suffix, label } = stat;

  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuad(progress);
            
            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        {count}{suffix}
      </p>
      <p className="text-sm md:text-base text-slate-300 mt-1">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const { t } = useTranslation();
  const stats = t<Stat[]>('about.stats');

  return (
    <Section id="about">
      <SectionTitle>{t('about.title')}</SectionTitle>
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="md:col-span-3 space-y-4 text-lg text-slate-200">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p className="font-semibold text-white">
            {t('about.p3')}
          </p>
        </div>
        <div className="md:col-span-2 bg-black/20 text-white p-6 lg:p-8 rounded-2xl shadow-lg border border-white/10">
          <h3 className="font-poppins text-2xl font-bold mb-4">{t('about.contactInfo.title')}</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 transition-transform hover:translate-x-1 duration-200">
              <MailIcon />
              <span>{t('about.contactInfo.email')}</span>
            </div>
            <div className="flex items-center gap-3 transition-transform hover:translate-x-1 duration-200">
              <PhoneIcon />
              <span>{t('about.contactInfo.phone')}</span>
            </div>
            <div className="flex items-center gap-3 transition-transform hover:translate-x-1 duration-200">
              <LocationMarkerIcon />
              <span>{t('about.contactInfo.location')}</span>
            </div>
            <a href="#contact" className="inline-block mt-4 font-semibold text-white underline decoration-wavy decoration-secondary hover:text-secondary transition-colors">
              {t('about.contactInfo.connectLink')}
            </a>
          </div>
        </div>
      </div>
       {/* WORLD-CLASS DATA ADDED: Displaying animated stats for better impact */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map(stat => (
            <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </Section>
  );
};

export default About;