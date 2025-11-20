import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion'; // Upgrade: Animate quote reveal and loading spinner
import { useTranslation } from '../i18n';

interface Quote {
  content: string;
  author: string;
}

interface DynamicQuoteProps {
  isDarkMode: boolean; // From App theme
}

const DynamicQuote: React.FC<DynamicQuoteProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Upgrade: Retry functionality
  const fetchQuote = useCallback(async (retry?: boolean) => {
    try {
      if (!retry) setLoading(true);
      setError(null);
      const response = await fetch('https://api.quotable.io/random?tags=technology|inspirational');
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setQuote(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const handleRetry = () => {
    fetchQuote(true);
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const errorVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } },
  };

  const loadingSpinner = (
    <motion.div
      className="flex justify-center items-center"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 border-t-4 ${
          isDarkMode ? 'border-t-eco-green border-slate-600' : 'border-t-electric-blue border-slate-300'
        }`}
      />
    </motion.div>
  );

  return (
    <motion.div
      className={`max-w-3xl mx-auto text-center p-6 rounded-2xl border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] font-mono ${
        isDarkMode ? 'bg-black text-white border-black' : 'bg-paper-white text-black border-black'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      role="region"
      aria-live="polite"
      aria-label={t('insights.dynamicQuote.ariaLabel')}
    >
      <h4
        className={`uppercase tracking-wider text-xs mb-2 font-bold ${
          isDarkMode ? 'text-sun-yellow' : 'text-electric-blue'
        }`}
      >
        {t('insights.dynamicQuote.title')}
      </h4>

      {loading && (
        <motion.div
          className="text-sm italic"
          variants={quoteVariants}
          initial="hidden"
          animate="visible"
        >
          {loadingSpinner}
          <p className="mt-2 font-mono">{t('insights.dynamicQuote.loading')}</p>
        </motion.div>
      )}

      {error && (
        <motion.div
          variants={errorVariants}
          initial="hidden"
          animate="visible"
          className={`p-4 rounded-xl mt-4 border-2 font-mono ${
            isDarkMode
              ? 'bg-red-900/5 text-red-300 border-red-600'
              : 'bg-red-100 text-red-700 border-red-300'
          }`}
        >
          <p className="mb-3">{t<string>('insights.dynamicQuote.error').replace('{error}', error)}</p>
          <motion.button
            onClick={handleRetry}
            className={`inline-block px-4 py-2 rounded-full font-bold uppercase tracking-tight border-2 transition ${
              isDarkMode
                ? 'bg-sun-yellow/20 text-sun-yellow border-black hover:bg-sun-yellow/30'
                : 'bg-sun-yellow/10 text-black border-black hover:bg-sun-yellow/20'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label={t('insights.dynamicQuote.retry')}
          >
            {t('insights.dynamicQuote.retry')}
          </motion.button>
        </motion.div>
      )}

      {quote && (
        <motion.blockquote
          variants={quoteVariants}
          initial="hidden"
          animate="visible"
          className="relative mt-4"
          role="complementary"
        >
          <motion.p
            className={`text-lg md:text-2xl italic font-semibold ${
              isDarkMode ? 'text-slate-100' : 'text-slate-900'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            “{quote.content}”
          </motion.p>
          <motion.cite
            className={`block text-right mt-3 not-italic font-bold uppercase ${
              isDarkMode ? 'text-eco-green' : 'text-electric-blue'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            — {quote.author}
          </motion.cite>
        </motion.blockquote>
      )}
    </motion.div>
  );
};

export default DynamicQuote;
