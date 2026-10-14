import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Upgrade: Animate form fields and success message
import Section from './Section';
import { useTranslation } from '../i18n';

interface ContactProps {
  isDarkMode: boolean; // From App theme
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // Upgrade: Loading state for submit

  // Upgrade: Auto-reset success after 5s
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formState.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
      isValid = false;
    }
    if (!formState.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
      isValid = false;
    }
    if (!formState.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // Clear error on type
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    setIsSubmitting(true);
    setStatus('idle'); // Reset status during submit
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Contact submission failed');
      }

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const successVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <Section id="contact" className="font-mono">
      <motion.h2
        className={`text-center mb-4 text-3xl md:text-5xl font-bold uppercase tracking-tight ${isDarkMode ? 'text-eco-green' : 'text-black'}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('contact.title')}
      </motion.h2>
      <motion.div
        className="text-center max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p
          className={`text-lg mb-8 ${isDarkMode ? 'text-sun-yellow/80' : 'text-slate-700'} font-mono`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t('contact.subtitle')}
        </motion.p>
        
        {status === 'success' ? (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            className={`border-4 p-6 rounded-2xl text-center ${
              isDarkMode
                ? 'bg-red-900/5 text-eco-green border-eco-green'
                : 'bg-eco-green/10 text-black border-eco-green'
            }`}
            role="alert"
            aria-live="polite"
          >
            <motion.h3
              className="text-2xl font-bold mb-2 uppercase"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('contact.feedback.success.title')}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono"
            >
              {t('contact.feedback.success.message')}
            </motion.p>
          </motion.div>
        ) : (
          <>
            {status === 'error' && (
            <p className={`mb-4 rounded-lg border-2 border-red-500 p-3 text-left font-mono ${isDarkMode ? 'text-red-300' : 'text-red-700'}`} role="alert" aria-live="polite">
              {t('contact.feedback.error.message')}
            </p>
          )}
          <motion.form
            onSubmit={handleSubmit}
            className={`p-6 sm:p-8 rounded-2xl border-4 space-y-4 ${
              isDarkMode
                ? 'bg-black text-white border-black'
                : 'bg-paper-white text-black border-black'
            } shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]`}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            noValidate
          >
            <motion.div variants={fieldVariants}>
              <input 
                type="text" 
                name="name"
                placeholder={t('contact.form.name')}
                required 
                value={formState.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full p-3 rounded-lg border-2 focus:ring-4 focus:outline-none transition font-mono uppercase tracking-tight ${
                  isDarkMode
                    ? `bg-black/30 text-white border-black ${errors.name ? 'ring-2 ring-red-600' : ''}`
                    : `bg-white/90 text-black border-black ${errors.name ? 'ring-2 ring-red-600' : ''}`
                }`}
              />
              {errors.name && (
                <motion.p
                  id="name-error"
                  className={`text-sm mt-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'} font-mono`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>
            <motion.div variants={fieldVariants}>
              <input 
                type="email" 
                name="email"
                placeholder={t('contact.form.email')}
                required 
                value={formState.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full p-3 rounded-lg border-2 focus:ring-4 focus:outline-none transition font-mono uppercase tracking-tight ${
                  isDarkMode
                    ? `bg-black/30 text-white border-black ${errors.email ? 'ring-2 ring-red-600' : ''}`
                    : `bg-white/90 text-black border-black ${errors.email ? 'ring-2 ring-red-600' : ''}`
                }`}
              />
              {errors.email && (
                <motion.p
                  id="email-error"
                  className={`text-sm mt-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'} font-mono`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>
            <motion.div variants={fieldVariants}>
              <textarea 
                rows={5} 
                name="message"
                placeholder={t('contact.form.message')}
                required
                value={formState.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full p-3 rounded-lg border-2 focus:ring-4 focus:outline-none transition resize-none font-mono ${
                  isDarkMode
                    ? `bg-black/30 text-white border-black ${errors.message ? 'ring-2 ring-red-600' : ''}`
                    : `bg-white/90 text-black border-black ${errors.message ? 'ring-2 ring-red-600' : ''}`
                }`}
              />
              {errors.message && (
                <motion.p
                  id="message-error"
                  className={`text-sm mt-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'} font-mono`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full p-3 text-lg font-bold rounded-lg shadow-[4px_4px_0px_0px_#000] transform transition-all duration-300 focus:outline-none focus:ring-4 ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-105 active:scale-95'
              } ${
                isDarkMode
                  ? 'bg-eco-green text-black ring-eco-green'
                  : 'bg-eco-green text-black ring-eco-green'
              } uppercase font-mono`}
              variants={fieldVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t('contact.form.submit')}
            >
              {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
            </motion.button>
          </motion.form>
          </>
        )}
      </motion.div>
    </Section>
  );
};

export default Contact;
