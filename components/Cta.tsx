'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export const Cta = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        email="hello@sumalpha.ai"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue to-brand-purple/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
        <p className="text-slate-400 text-lg mb-10">
          {t.cta.descriptionLine1}
          <br />
          {t.cta.descriptionLine2}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg shadow-emerald-500/20">
            {t.cta.download}
          </button>
          <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold transition-all flex items-center justify-center">
            {t.cta.contact}
          </button>
        </div>
      </div>
    </section>
  );
};
