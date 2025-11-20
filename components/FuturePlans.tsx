import React from 'react';
import { motion } from 'framer-motion'; // Upgrade: Stagger animations for plans list and CTA
import Section from './Section';
import { useTranslation } from '../i18n';

interface FuturePlansProps {
  isDarkMode: boolean; // From App theme
}

const FuturePlans: React.FC<FuturePlansProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const plans = t<string[]>('future.plans');

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const planVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="future" className="font-mono">
      <motion.h2
        className={`text-center mb-4 font-bold uppercase tracking-tight ${isDarkMode ? 'text-eco-green' : 'text-electric-blue'} text-3xl md:text-5xl`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('future.title')}
      </motion.h2>

      <motion.div
        className={`max-w-3xl mx-auto text-center p-6 rounded-2xl border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] ${isDarkMode ? 'bg-black text-white border-black' : 'bg-paper-white text-black border-black'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p
          className={`text-lg mb-8 font-mono ${isDarkMode ? 'text-sun-yellow/80' : 'text-slate-700/90'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t('future.subtitle')}
        </motion.p>

        <motion.ul
          className="text-left inline-block space-y-3 w-full max-w-xl mx-auto"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
          aria-label={t('future.plansAria')}
        >
          {plans.map((plan, index) => (
            <motion.li
              key={index}
              variants={planVariants}
              className="flex items-start gap-4 p-3 rounded-md border-2 border-black hover:bg-black/5 transition-colors"
            >
              <motion.span
                className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-black text-white"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.15 }}
                aria-hidden="true"
              >
                🚀
              </motion.span>
              <span className={`text-lg font-semibold ${isDarkMode ? 'text-slate-100' : 'text-slate-900'} font-mono uppercase`}>
                {plan}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className={`inline-block px-8 py-3 text-lg font-bold rounded-full border-4 border-black transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-eco-green shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] uppercase font-mono ${isDarkMode ? 'bg-eco-green text-black hover:brightness-95' : 'bg-eco-green text-black hover:brightness-95'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('future.cta')}
          >
            {t('future.cta')}
          </motion.a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default FuturePlans;
