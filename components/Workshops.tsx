
import React from 'react';
import Section from './Section';
import { useTranslation } from '../i18n';
import { WorkshopLevel } from '../types';

const Workshops: React.FC = () => {
    const { t } = useTranslation();
    const workshopsData = t<WorkshopLevel[]>('workshops.levels');

    return (
        <Section id="workshops">
            <h2 className="text-center mb-4 font-poppins text-3xl md:text-5xl font-bold text-white">
                {t('workshops.title')}
            </h2>
            <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-16">
                {t('workshops.subtitle')}
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {workshopsData.map(level => (
                    <div key={level.title} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                        <h3 className="font-poppins text-xl font-bold text-secondary mb-4">{level.title}</h3>
                        <div className="space-y-4">
                            {level.ideas.map(idea => (
                                <div key={idea.title} className="bg-black/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-white">{idea.title}</h4>
                                    <p className="text-sm text-white/80">{idea.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <a href="#contact" className="block w-max mx-auto px-8 py-3 text-lg font-semibold rounded-full bg-secondary text-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300">
                {t('workshops.cta')}
            </a>
        </Section>
    );
};

export default Workshops;