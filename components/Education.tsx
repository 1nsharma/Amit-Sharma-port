import React from 'react';
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { EducationItem, LanguageItem } from '../types';
import { AcademicCapIcon } from './Icons';

const Education: React.FC = () => {
    const { t } = useTranslation();
    const academics = t<{ title: string, items: EducationItem[] }>('education.academics');
    const languages = t<{ title: string, items: LanguageItem[] }>('education.languages');

    return (
        <Section id="education">
            <SectionTitle>{t('education.title')}</SectionTitle>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Academics Column */}
                <div>
                    <h3 className="font-poppins text-2xl font-bold text-secondary mb-6">{academics.title}</h3>
                    <div className="space-y-8">
                        {academics.items.map(item => (
                            <div key={item.institution + item.period} className="flex gap-4 items-start">
                                <div className="mt-1 flex-shrink-0">
                                    <AcademicCapIcon className="w-8 h-8 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-slate-100">{item.title}</h4>
                                    <p className="text-slate-300">{item.institution}</p>
                                    <p className="text-sm text-slate-400">{item.period}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages Column */}
                <div>
                    <h3 className="font-poppins text-2xl font-bold text-secondary mb-6">{languages.title}</h3>
                    <div className="space-y-4">
                        {languages.items.map(lang => (
                            <div key={lang.name}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-semibold text-lg text-slate-100">{lang.name}</h4>
                                    <p className="text-sm text-slate-400">{lang.proficiency}</p>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2.5">
                                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: lang.proficiency.toLowerCase().includes('native') ? '100%' : '85%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;