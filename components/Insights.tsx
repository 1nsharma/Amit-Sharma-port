import React from 'react';
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { Insight } from '../types';
import { ArrowRightIcon } from './Icons';
import DynamicQuote from './DynamicQuote';

const Insights: React.FC = () => {
  const { t } = useTranslation();
  const insightsData = t<Insight[]>('insights.items');

  return (
    <Section id="insights">
      <SectionTitle>{t('insights.title')}</SectionTitle>
      <p className="text-center text-lg text-slate-300 max-w-3xl mx-auto -mt-8 mb-12">
        {t('insights.subtitle')}
      </p>
      
      <DynamicQuote />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {insightsData.map((insight) => (
          <div key={insight.title} className="group bg-black/20 p-6 rounded-2xl shadow-lg border-l-4 border-secondary transition-all duration-300 hover:shadow-xl hover:border-primary hover:translate-x-2">
            <h3 className="font-poppins text-xl font-bold text-secondary mb-2">{insight.title}</h3>
            <p className="text-slate-300 mb-4">{insight.description}</p>
            <a href={`#${insight.linkId}`} className="font-semibold text-secondary inline-flex items-center gap-2 group-hover:underline">
              {t('insights.learnMore')} <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Insights;