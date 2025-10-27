
import React from 'react';
import Section from './Section';
import { useTranslation } from '../i18n';

const FuturePlans: React.FC = () => {
  const { t } = useTranslation();
  const plans = t<string[]>('future.plans');

  return (
    <Section id="future">
      <h2 className="text-center mb-4 font-poppins text-3xl md:text-5xl font-bold text-white">
        {t('future.title')}
      </h2>
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-white/90 mb-8">
          {t('future.subtitle')}
        </p>
        <ul className="text-left inline-block space-y-3">
          {plans.map((plan, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-xl">🚀</span>
              <span className="text-lg">{plan}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a href="#contact" className="px-8 py-3 text-lg font-semibold rounded-full bg-secondary text-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300">
            {t('future.cta')}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default FuturePlans;