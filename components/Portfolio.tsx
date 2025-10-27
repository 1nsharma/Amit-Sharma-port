
import React from 'react';
import Section, { SectionTitle } from './Section';
import { useTranslation } from '../i18n';
import { ServiceItem } from '../types';
import { SparklesIcon, CodeIcon, AcademicCapIcon } from './Icons';

const iconMap = {
    sparkles: <SparklesIcon className="w-8 h-8 text-white" />,
    code: <CodeIcon className="w-8 h-8 text-white" />,
    academic_cap: <AcademicCapIcon className="w-8 h-8 text-white" />
};

const Services: React.FC = () => {
    const { t } = useTranslation();
    const servicesData = t<ServiceItem[]>('services.items');

    return (
        <Section id="services">
            <SectionTitle>{t('services.title')}</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <div key={service.title} className="bg-black/20 p-8 rounded-2xl border border-white/10 text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
                            {iconMap[service.icon]}
                        </div>
                        <h3 className="font-poppins text-xl font-bold text-secondary mb-2">{service.title}</h3>
                        <p className="text-slate-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;