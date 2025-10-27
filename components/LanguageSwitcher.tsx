
import React from 'react';
import { useTranslation } from '../i18n';
import { GlobeIcon } from './Icons';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
      aria-label="Switch language"
    >
      <GlobeIcon className="h-5 w-5" />
      <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'HI'}</span>
    </button>
  );
};

export default LanguageSwitcher;
