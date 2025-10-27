
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';

interface Quote {
  content: string;
  author: string;
}

const DynamicQuote: React.FC = () => {
  const { t } = useTranslation();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.quotable.io/random?tags=technology|inspirational');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote({ content: data.content, author: data.author });
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        setQuote(null);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center p-6 bg-black/20 rounded-2xl border border-white/10 shadow-lg">
      <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider text-slate-400 mb-2">
        {t('insights.dynamicQuote.title')}
      </h4>
      {loading && <p className="text-slate-300 italic">{t('insights.dynamicQuote.loading')}</p>}
      {error && <p className="text-red-500">{t<string>('insights.dynamicQuote.error').replace('{error}', error)}</p>}
      {quote && (
        <blockquote className="relative">
          <p className="text-xl md:text-2xl italic text-slate-100">
            "{quote.content}"
          </p>
          <cite className="block text-right mt-2 not-italic font-semibold text-secondary">
            — {quote.author}
          </cite>
        </blockquote>
      )}
    </div>
  );
};

export default DynamicQuote;