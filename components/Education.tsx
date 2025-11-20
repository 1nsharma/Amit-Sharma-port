import React from 'react';
import { motion } from 'framer-motion'; // Upgrade: Animate items and progress bars
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { EducationItem, LanguageItem } from '../types';
import { AcademicCapIcon } from './Icons';

interface EducationProps {
  isDarkMode: boolean; // From App theme
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const academics = t<{ title: string, items: EducationItem[] }>('education.academics');
  const languages = t<{ title: string, items: LanguageItem[] }>('education.languages');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const getProgressWidth = (proficiency: string) => proficiency.toLowerCase().includes('native') ? '100%' : '85%';

  return (
    <Section id="education" className="font-mono">
      <SectionTitle className="uppercase tracking-tight font-bold text-lg border-b-4 border-black inline-block px-3">
        {t('education.title')}
      </SectionTitle>

      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Academics Column */}
        <motion.div variants={itemVariants} className="p-6 rounded-2xl border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)]"
          style={{ background: isDarkMode ? '#000' : '#fff' }}>
          <motion.h3
            className="text-2xl font-bold uppercase mb-6 inline-block px-3 border-2 border-black bg-electric-blue/10 text-electric-blue"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {academics.title}
          </motion.h3>

          <div className="space-y-8 mt-4">
            {academics.items.map((item, index) => (
              <motion.div
                key={item.institution + item.period}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 items-start p-3 border-2 border-black rounded-lg"
                style={{ background: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}
              >
                <motion.div
                  className="mt-1 flex-shrink-0 p-2 rounded-md border-2 border-black"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                >
                  <AcademicCapIcon
                    className={`w-8 h-8 ${isDarkMode ? 'text-eco-green' : 'text-electric-blue'}`}
                    aria-hidden="true"
                  />
                </motion.div>
                <div>
                  <h4 className={`font-semibold text-lg uppercase ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} font-mono`}>{item.institution}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-mono`}>
                    {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Column */}
        <motion.div variants={itemVariants} className="p-6 rounded-2xl border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)]"
          style={{ background: isDarkMode ? '#000' : '#fff' }}>
          <motion.h3
            className="text-2xl font-bold uppercase mb-6 inline-block px-3 border-2 border-black bg-eco-green/10 text-eco-green"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {languages.title}
          </motion.h3>

          <div className="space-y-6 mt-4">
            {languages.items.map((lang, index) => (
              <motion.div
                key={lang.name}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pt-2"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className={`font-semibold text-lg uppercase ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                    {lang.name}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-mono`}>
                    {lang.proficiency}
                  </p>
                </div>

                <div
                  className={`w-full rounded-full h-3 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'} border-2 border-black overflow-hidden`}
                  role="progressbar"
                  aria-label={`${lang.name} proficiency: ${lang.proficiency}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={lang.proficiency.toLowerCase().includes('native') ? 100 : 85}
                >
                  <motion.div
                    className="h-3 rounded-full"
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    style={{
                      width: getProgressWidth(lang.proficiency),
                      background: isDarkMode ? '#00C48C' : '#00A3FF' // eco-green for dark, electric-blue for light
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Education;