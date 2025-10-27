

import React, { useState } from 'react';
import Section from './Section';
import { useTranslation } from '../i18n';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formState.name) {
      newErrors.name = t('contact.form.errors.nameRequired');
      isValid = false;
    }
    if (!formState.email) {
      newErrors.email = t('contact.form.errors.emailRequired');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
      isValid = false;
    }
    if (!formState.message) {
      newErrors.message = t('contact.form.errors.messageRequired');
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    // In a real app, you'd send this to a backend service
    console.log('Form submitted:', formState);
    setStatus('success');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <h2 className="text-center mb-4 font-poppins text-3xl md:text-5xl font-bold text-white">
        {t('contact.title')}
      </h2>
      <div className="text-center max-w-lg mx-auto">
        <p className="text-lg text-slate-300 mb-8">{t('contact.subtitle')}</p>
        
        {status === 'success' ? (
            <div className="bg-green-500/20 text-green-300 border border-green-500 p-6 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-2">{t('contact.feedback.success.title')}</h3>
                <p>{t('contact.feedback.success.message')}</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="bg-black/20 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4" noValidate>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder={t('contact.form.name')}
                  required 
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-slate-700/50 text-white rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-600'} focus:ring-2 focus:ring-secondary focus:outline-none transition`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder={t('contact.form.email')}
                  required 
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-slate-700/50 text-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-600'} focus:ring-2 focus:ring-secondary focus:outline-none transition`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea 
                  rows={5} 
                  name="message"
                  placeholder={t('contact.form.message')}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full p-3 bg-slate-700/50 text-white rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-600'} focus:ring-2 focus:ring-secondary focus:outline-none transition`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                className="w-full p-3 text-lg font-bold bg-secondary text-white rounded-lg shadow-lg hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300"
              >
                {t('contact.form.submit')}
              </button>
            </form>
        )}
      </div>
    </Section>
  );
};

export default Contact;