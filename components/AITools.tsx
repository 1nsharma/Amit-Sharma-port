import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Upgrade: Stagger animations for categories and rows
import Section from './Section';
import { useTranslation } from '../i18n';
import { AIToolCategory, AITool } from '../types';
import Modal from './Modal';

interface AIToolsProps {
  isDarkMode: boolean; // From App theme
}

const AITools: React.FC<AIToolsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const aiToolsData = t<AIToolCategory[]>('aitools.categories');
  const [modalTool, setModalTool] = useState<AITool | null>(null);

  const handleDemoClick = (tool: AITool) => {
    setModalTool(tool);
  };

  const closeModal = () => {
    setModalTool(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Section id="aitools" className="font-mono">
        <motion.h2
          className={`text-center mb-4 font-bold uppercase tracking-tight ${
            isDarkMode ? 'text-eco-green' : 'text-black'
          } text-3xl md:text-5xl`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('aitools.title')}
        </motion.h2>
        <motion.p
          className={`text-center text-lg max-w-3xl mx-auto mb-16 font-mono ${
            isDarkMode ? 'text-sun-yellow/80' : 'text-slate-700'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('aitools.subtitle')}
        </motion.p>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aiToolsData.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`p-6 rounded-2xl border-4 ${
                isDarkMode
                  ? 'bg-black text-white border-black'
                  : 'bg-paper-white text-black border-black'
              } shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]`}
            >
              <motion.h3
                className="text-2xl font-bold uppercase mb-4 font-mono bg-electric-blue/10 inline-block px-3 border-2 border-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              <div className="overflow-x-auto">
                <table
                  className={`w-full text-left rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-900/40 text-slate-200' : 'bg-white/90 text-slate-900'
                    }`}
                  role="table"
                  aria-label={t('aitools.tableAriaLabel', { category: category.title })}
                >
                  <thead className="bg-black/80 text-white uppercase text-xs font-mono">
                    <tr>
                      {t<string[]>('aitools.tableHeaders').map((header, hIndex) => (
                        <th
                          key={header}
                          scope="col"
                          className="p-3 border-b-2 border-black font-bold"
                          aria-label={`${header} column`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.tools.map((tool, toolIndex) => (
                      <motion.tr
                        key={tool.name}
                        variants={rowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className={`border-t border-black hover:bg-yellow-50/10 transition-colors ${isDarkMode ? 'bg-black/10' : 'bg-white/50'
                          }`}
                      >
                        <td className="p-3 font-bold uppercase font-mono border-r border-black">{tool.name}</td>
                        <td className="p-3 text-sm font-mono">{tool.description}</td>
                        <td className="p-3 text-sm font-mono">{tool.freeTier}</td>
                        <td className="p-3 text-sm font-mono">{tool.useCase}</td>
                        <td className="p-3 text-sm font-mono">
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-block px-3 py-1 font-semibold uppercase rounded-full border-2 border-black focus:outline-none focus:ring-2 ${
                              isDarkMode
                                ? 'bg-eco-green text-black hover:bg-eco-green/90'
                                : 'bg-electric-blue text-black hover:bg-electric-blue/90'
                            }`}
                            aria-label={`Visit ${tool.name} website`}
                          >
                            {t('aitools.visitLink')}
                          </a>
                        </td>
                        <td className="p-3 text-sm">
                          <button
                            onClick={() => handleDemoClick(tool)}
                            className={`px-3 py-1 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 ${
                              isDarkMode
                                ? 'bg-sun-yellow/30 text-sun-yellow hover:bg-sun-yellow/40 border-2 border-black'
                                : 'bg-sun-yellow/20 text-sun-yellow hover:bg-sun-yellow/30 border-2 border-black'
                            }`}
                            aria-label={`Demo ${tool.name}`}
                          >
                            {t('aitools.demoAction')}
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {modalTool && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Modal onClose={closeModal}>
            <motion.div
              className="p-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold uppercase mb-4 text-electric-blue border-b-2 border-black inline-block px-2">
                {t('aitools.demoModal.title')} - {modalTool.name}
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {t<string>('aitools.demoModal.description').replace('{toolName}', modalTool.name)}
              </p>
              <a
                href={modalTool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 font-semibold rounded-full bg-eco-green text-black shadow-[4px_4px_0px_0px_#000] transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-eco-green"
                aria-label={`Go to ${modalTool.name} demo`}
              >
                {t('aitools.demoModal.cta')}
              </a>
            </motion.div>
          </Modal>
        </motion.div>
      )}
    </>
  );
};

export default AITools;
