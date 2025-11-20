import React from 'react';
import { motion } from 'framer-motion'; // Upgrade: Animate timeline items with stagger
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  isDarkMode: boolean; // From App theme
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const experienceData = t<ExperienceItem[]>('experience.items');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="experience" className="font-mono">
      <SectionTitle className="uppercase tracking-tight font-bold text-lg inline-block border-b-4 border-black px-3">
        {t('experience.title')}
      </SectionTitle>

      <motion.div
        className="relative max-w-3xl mx-auto mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.role}
              variants={itemVariants}
              className={`relative pl-10 border-l-4 rounded-lg p-4 ${
                isDarkMode
                  ? 'bg-black border-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)]'
                  : 'bg-paper-white border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]'
              } group`}
              role="article"
              aria-labelledby={`exp-${index}-role`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-6 w-5 h-5 rounded-full flex items-center justify-center -translate-x-1/2 border-2 border-black ${
                  isDarkMode ? 'bg-eco-green shadow-lg' : 'bg-electric-blue shadow-md'
                }`}
                aria-hidden="true"
              >
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>

              <p
                className={`text-xs mb-2 uppercase tracking-wider ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {item.period}
              </p>

              <h3
                id={`exp-${index}-role`}
                className={`text-xl font-bold uppercase mb-1 ${
                  isDarkMode ? 'text-eco-green' : 'text-electric-blue'
                } group-hover:opacity-90 transition-opacity duration-200`}
              >
                {item.role}
              </h3>

              <p
                className={`font-semibold mb-3 uppercase ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {item.company}
              </p>

              <ul
                className={`space-y-2 text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                } list-disc list-inside`}
              >
                {item.details.map((detail, detailIndex) => (
                  <motion.li
                    key={detail}
                    className="ml-2 transform transition-transform group-hover:translate-x-1 duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + detailIndex * 0.08 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Experience;
