import React from 'react';
import { motion } from 'framer-motion'; // Upgrade: Subtle fade-in animation
import { useTranslation } from '../i18n';

interface FooterProps {
  isDarkMode: boolean; // From App theme
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <footer
      className={`font-mono ${
        isDarkMode ? 'bg-black text-slate-300 border-t-4 border-black' : 'bg-paper-white text-slate-700 border-t-4 border-black'
      }`}
      role="contentinfo"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-6 border-4 border-black rounded-tl-2xl rounded-tr-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="text-center text-sm">
          <motion.p
            className={`font-bold uppercase tracking-tight ${
              isDarkMode ? 'text-eco-green' : 'text-electric-blue'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {t('footer.copyright')}
          </motion.p>
          <motion.p
            className={`mt-1 ${isDarkMode ? 'text-sun-yellow/80' : 'text-slate-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
          >
            {t('footer.tagline')}
          </motion.p>

          <motion.div
            className="mt-4 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <span className="text-xs uppercase font-bold px-2 py-1 border-2 border-black bg-black text-white">AES-256</span>
            <span className="text-xs font-mono">Built with ❤️ · Amvision UI</span>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
