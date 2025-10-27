import React from 'react';
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
    const { t } = useTranslation();
    const skillsData = t<SkillCategory[]>('skills.categories');

    return (
        <Section id="skills">
            <SectionTitle>{t('skills.title')}</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((category) => (
                    <div key={category.title} className="bg-black/20 p-6 rounded-2xl shadow-lg border border-white/10">
                        <h3 className="font-poppins text-xl font-bold text-secondary mb-4">{category.title}</h3>
                        <ul className="flex flex-wrap gap-3">
                            {category.skills.map(skill => (
                                <li key={skill} className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md text-sm">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;