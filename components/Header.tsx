import React from 'react';
import { motion } from 'framer-motion'; // Upgrade: Replace CSS animations with Framer Motion for smoother, JS-free perf
import Section from './Section'; // Assuming Header uses Section wrapper, but original doesn't – added for consistency if needed
import { useTranslation } from '../i18n';

interface HeaderProps {
  isDarkMode: boolean; // From App theme
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const cta = t<{ [key: string]: string }>('header.cta');

  const blobVariants = {
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header
      className={`site-hero relative overflow-hidden pb-16 border-b-4 ${
        isDarkMode ? 'bg-black text-white border-black' : 'bg-paper-white text-black border-black'
      }`}
      role="banner"
    >
      {/* Decorative animated blobs (subtle, low-opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-8 w-72 h-72 rounded-full filter blur-2xl bg-eco-green/10 border-4 border-black/20"
          variants={blobVariants}
          animate="animate"
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-24 right-12 w-72 h-72 rounded-full filter blur-2xl bg-electric-blue/10 border-4 border-black/20"
          variants={blobVariants}
          animate="animate"
          style={{ translateY: 40 }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full filter blur-2xl bg-sun-yellow/8 border-4 border-black/10"
          variants={blobVariants}
          animate="animate"
          style={{ translateY: -20 }}
          aria-hidden="true"
        />
      </div>

      <Section>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            className="hero-avatar w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-black"
            variants={floatVariants}
            animate="animate"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://i.ibb.co/3s7xT6b/profile.jpg"
              alt={t('header.name')}
              className="w-full h-full object-cover"
              loading="lazy"
              aria-describedby="header-desc"
            />
          </motion.div>

          <motion.h1
            id="header-name"
            className="hero-title font-mono text-4xl md:text-6xl font-extrabold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-eco-green to-electric-blue"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('header.name')}
          </motion.h1>

          <motion.p
            className={`hero-tagline text-lg md:text-2xl mb-2 font-mono ${
              isDarkMode ? 'text-sun-yellow/90' : 'text-slate-800'
            } uppercase`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('header.tagline')}
          </motion.p>

          <motion.p
            id="header-desc"
            className={`hero-description max-w-3xl mx-auto text-sm md:text-base mb-8 font-mono ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('header.subTagline')}
          </motion.p>

          <div className="hero-actions flex flex-wrap justify-center items-center gap-4">
            <motion.a
              href="#contact"
              className="hero-button hero-button--primary px-8 py-3 font-bold rounded-full bg-eco-green text-black transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              aria-label={cta.hire}
            >
              {cta.hire}
            </motion.a>

            <motion.a
              href="#workshops"
              className={`hero-button hero-button--secondary px-8 py-3 font-semibold rounded-full backdrop-blur-md border-4 border-black/20 transform transition-all duration-300 ${
                isDarkMode
                  ? 'bg-black/30 text-sun-yellow border-black'
                  : 'bg-paper-white/60 text-electric-blue border-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              aria-label={cta.workshop}
            >
              {cta.workshop}
            </motion.a>

            <motion.a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className={`hero-button hero-button--secondary px-8 py-3 font-semibold rounded-full backdrop-blur-md border-4 border-black/20 transform transition-all duration-300 ${
                isDarkMode
                  ? 'bg-black/30 text-eco-green border-black'
                  : 'bg-paper-white/60 text-electric-blue border-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              aria-label={cta.resume}
            >
              {cta.resume}
            </motion.a>
          </div>
        </div>
      </Section>
    </header>
  );
};

export default Header;
