import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion'; // Upgrade: Smooth entrance animations
import Section, { SectionTitle } from './Section';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './Icons';
import { useTranslation } from '../i18n';
import { Stat } from '../types'; // Assuming types.ts has export interface Stat { value: number; suffix: string; label: string; }

// UPGRADE: Memoized StatCard for better perf (avoids re-renders)
const StatCard: React.FC<{ stat: Stat; isDarkMode: boolean }> = React.memo(({ stat, isDarkMode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { value, suffix, label } = stat;

  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR-safe

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
    <motion.div
      ref={ref}
      className="text-center font-mono"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p
        className={`text-4xl md:text-5xl font-bold tracking-tight uppercase ${
          isDarkMode ? 'text-eco-green' : 'text-electric-blue'
        }`}
        aria-label={`${count}${suffix} ${label}`}
      >
        {count}{suffix}
      </p>
      <p className={`text-sm md:text-base mt-1 ${isDarkMode ? 'text-sun-yellow/80' : 'text-black/80'} font-mono`}>
        {label}
      </p>
    </motion.div>
  );
});

interface AboutProps {
  isDarkMode: boolean; // From App theme
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const stats = useMemo(() => t<Stat[]>('about.stats'), [t]); // Memo for perf

  return (
    <Section id="about" className="font-mono">
      <SectionTitle className="uppercase tracking-tight font-bold">{t('about.title')}</SectionTitle>
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
        <motion.div
          className="md:col-span-3 space-y-4 text-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className={`${isDarkMode ? 'text-slate-200' : 'text-slate-800'} font-mono`}>{t('about.p1')}</p>
          <p className={`${isDarkMode ? 'text-slate-200' : 'text-slate-800'} font-mono`}>{t('about.p2')}</p>
          <p className={`font-semibold uppercase ${isDarkMode ? 'text-white' : 'text-black'} font-mono`}>
            {t('about.p3')}
          </p>
        </motion.div>
        <motion.div
          className={`md:col-span-2 p-6 lg:p-8 rounded-2xl border-4 ${
            isDarkMode ? 'bg-black text-white border-black' : 'bg-paper-white text-black border-black'
          } shadow-hard-sm`}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 font-mono text-electric-blue border-b-2 border-black inline-block px-2">{t('about.contactInfo.title')}</h3>
          <div className="space-y-4">
            <a
              href={`mailto:${t('about.contactInfo.email')}`}
              className="flex items-center gap-3 transition-transform hover:translate-x-1 duration-200 group"
              aria-label={`Email: ${t('about.contactInfo.email')}`}
            >
              <MailIcon className="group-hover:text-eco-green transition-colors" />
              <span className="font-mono">{t('about.contactInfo.email')}</span>
            </a>
            <a
              href={`tel:${t('about.contactInfo.phone')}`}
              className="flex items-center gap-3 transition-transform hover:translate-x-1 duration-200 group"
              aria-label={`Phone: ${t('about.contactInfo.phone')}`}
            >
              <PhoneIcon className="group-hover:text-eco-green transition-colors" />
              <span className="font-mono">{t('about.contactInfo.phone')}</span>
            </a>
            <div className="flex items-center gap-3 transition-transform hover:translate-x-1 duration-200">
              <LocationMarkerIcon />
              <span className="font-mono">{t('about.contactInfo.location')}</span>
            </div>
            <a
              href="#contact"
              className={`inline-block mt-4 font-semibold uppercase underline decoration-wavy hover:text-eco-green transition-colors ${
                isDarkMode ? 'text-white' : 'text-black'
              } font-mono`}
              aria-label={t('about.contactInfo.connectLink')}
            >
              {t('about.contactInfo.connectLink')}
            </a>
          </div>
        </motion.div>
      </div>
      {/* UPGRADE: Animated stats grid with stagger */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="p-6 rounded-xl border-2 border-black bg-gray-900/20">
            <StatCard stat={stat} isDarkMode={isDarkMode} />
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;
