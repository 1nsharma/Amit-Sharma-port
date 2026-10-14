
import React from 'react';
import { HomeIcon, BriefcaseIcon, CodeIcon, MailIcon, AcademicCapIcon } from './Icons';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const MobileNav: React.FC = () => {
    const { t } = useTranslation();
    const mobileNavLinks = [
        // FIX: Explicitly typed the return of t() to string to avoid 'unknown' type,
        // which caused errors for the `key` prop and when used as a React child.
        { href: '#', icon: <HomeIcon />, label: t<string>('mobileNav.home') },
        { href: '#experience', icon: <BriefcaseIcon />, label: t<string>('mobileNav.experience') },
        { href: '#projects', icon: <CodeIcon />, label: t<string>('mobileNav.projects') },
        { href: '#workshops', icon: <AcademicCapIcon />, label: t<string>('mobileNav.workshops') },
    ];

    return (
        <div className="mobile-nav md:hidden fixed bottom-0 left-0 right-0 z-50">
            <div className="bg-light/80 dark:bg-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
                <div className="container mx-auto px-4 h-16 flex justify-around items-center">
                    {mobileNavLinks.map(link => (
                        <a 
                            key={link.label}
                            href={link.href} 
                            className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                        >
                            {link.icon}
                            <span className="text-xs font-medium">{link.label}</span>
                        </a>
                    ))}
                    <LanguageSwitcher />
                    <a href="#contact" className="px-6 py-3 font-semibold text-sm rounded-full bg-primary text-white shadow-lg -translate-y-4 transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                        {t('header.cta.hire')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;