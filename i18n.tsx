import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import * as en from './locales/en';
import * as hi from './locales/hi';

type Language = 'en' | 'hi';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T>(key: string) => T;
}

const resources = {
  en: en.translations,
  hi: hi.translations,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// FIX: Rewrote the entire file to resolve numerous parsing and type errors.
// The I18nProvider component now correctly returns JSX, and the 't' function
// uses a generic type with a trailing comma `<T,>` to avoid TSX parsing conflicts.
// The useTranslation hook is now correctly typed and exported.
export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      return (savedLang === 'en' || savedLang === 'hi') ? savedLang : 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = <T,>(key: string): T => {
    const keys = key.split('.');
    let result: any = resources[language];
    for (const k of keys) {
      result = result?.[k];
    }
    return result as T;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
