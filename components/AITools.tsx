
import React, { useState } from 'react';
import Section from './Section';
import { useTranslation } from '../i18n';
import { AIToolCategory, AITool } from '../types';
import Modal from './Modal';

const AITools: React.FC = () => {
    const { t } = useTranslation();
    const aiToolsData = t<AIToolCategory[]>('aitools.categories');
    const [modalTool, setModalTool] = useState<AITool | null>(null);

    const handleDemoClick = (tool: AITool) => {
        setModalTool(tool);
    };

    const closeModal = () => {
        setModalTool(null);
    };
    
    return (
        <>
            <Section id="aitools">
                <h2 className="text-center mb-4 font-poppins text-3xl md:text-5xl font-bold text-white">
                     {t('aitools.title')}
                </h2>
                <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-16">
                    {t('aitools.subtitle')}
                </p>

                <div className="space-y-12">
                    {aiToolsData.map(category => (
                        <div key={category.title} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <h3 className="font-poppins text-2xl font-bold text-secondary mb-4">{category.title}</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left bg-slate-800/50 text-slate-200 rounded-lg overflow-hidden shadow-lg">
                                    <thead className="bg-white/10 font-poppins">
                                        <tr>
                                            {t<string[]>('aitools.tableHeaders').map(header => <th key={header} className="p-3">{header}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category.tools.map(tool => (
                                            <tr key={tool.name} className="border-t border-slate-700 hover:bg-white/10 transition-colors">
                                                <td className="p-3 font-semibold">{tool.name}</td>
                                                <td className="p-3 text-sm">{tool.description}</td>
                                                <td className="p-3 text-sm">{tool.freeTier}</td>
                                                <td className="p-3 text-sm">{tool.useCase}</td>
                                                <td className="p-3 text-sm"><a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-secondary font-semibold hover:underline">{t('aitools.visitLink')}</a></td>
                                                <td className="p-3 text-sm">
                                                    <button onClick={() => handleDemoClick(tool)} className="px-3 py-1 font-semibold rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary hover:bg-secondary/30 dark:hover:bg-secondary/40 transition">
                                                        {t('aitools.demoAction')}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {modalTool && (
                <Modal onClose={closeModal}>
                    <div className="p-6">
                        <h3 className="font-poppins text-2xl font-bold text-secondary mb-4">{t('aitools.demoModal.title')} - {modalTool.name}</h3>
                        <p className="text-slate-300 mb-6">
                            {t<string>('aitools.demoModal.description').replace('{toolName}', modalTool.name)}
                        </p>
                        <a href={modalTool.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 font-semibold rounded-full bg-secondary text-white shadow-lg transform transition-transform duration-300 hover:scale-105">
                            {t('aitools.demoModal.cta')}
                        </a>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default AITools;