
import React from 'react';
import { useTranslation } from '../i18n';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-slate-300">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="text-center text-sm">
            <p className="font-semibold text-white">{t('footer.copyright')}</p>
            <p className="text-slate-400 mt-1">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
