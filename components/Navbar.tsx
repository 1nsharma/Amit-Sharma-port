
import React from 'react';
import { SunIcon, MoonIcon } from './Icons';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isDarkMode, toggleTheme }) => {
  const { t } = useTranslation();
  const sections = t<{[key: string]: string}>('sections');
  
  return (
    <nav className="site-nav hidden md:flex sticky top-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="font-poppins font-bold text-xl text-slate-800 dark:text-white">
          <a href="#">{t('header.name')}</a>
        </div>
        <div className="flex items-center space-x-1">
          {Object.entries(sections).map(([id, title]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${
                activeSection === id
                  ? 'text-primary dark:text-secondary'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              {title}
              {activeSection === id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-primary dark:bg-secondary rounded-full"></span>
              )}
            </a>
          ))}
          <div className="flex items-center pl-2">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
              aria-label={t('navbar.toggleTheme')}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
