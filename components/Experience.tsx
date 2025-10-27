import React from 'react';
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experienceData = t<ExperienceItem[]>('experience.items');

  return (
    <Section id="experience">
      <SectionTitle>{t('experience.title')}</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        <div className="space-y-8">
          {experienceData.map((item) => (
            <div key={item.role} className="relative pl-8 border-l-4 border-secondary">
              <p className="text-sm text-slate-300 mb-1">{item.period}</p>
              <h3 className="font-poppins text-xl font-bold text-secondary">{item.role}</h3>
              <p className="font-semibold text-white mb-2">{item.company}</p>
              <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside">
                {item.details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;