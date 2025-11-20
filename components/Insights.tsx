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
    <Section id="insights" className="font-mono">
      <SectionTitle className="uppercase tracking-tight font-bold text-lg inline-block border-b-4 border-black px-3">
        {t('insights.title')}
      </SectionTitle>

      <p className="text-center text-lg font-mono max-w-3xl mx-auto -mt-6 mb-12 text-sun-yellow/80">
        {t('insights.subtitle')}
      </p>
      
      <DynamicQuote />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {insightsData.map((insight) => (
          <div
            key={insight.title}
            className="group p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] bg-black text-white transition-all duration-300 hover:translate-x-2"
          >
            <h3 className="font-mono text-xl font-bold uppercase mb-2 text-eco-green">
              {insight.title}
            </h3>
            <p className="text-slate-300 mb-4 font-mono">
              {insight.description}
            </p>
            <a
              href={`#${insight.linkId}`}
              className="font-bold uppercase text-xs inline-flex items-center gap-2 px-2 py-1 border-2 border-black bg-electric-blue/10 hover:bg-electric-blue/20"
            >
              {t('insights.learnMore')}
              <ArrowRightIcon className="transition-transform group-hover:translate-x-2 h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Insights;
