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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[color:var(--panel)] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--line)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[color:var(--line)]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="h2 text-[color:var(--foreground)] mb-6">{t.cta.title}</h2>
        <p className="text-[color:var(--muted)] text-lg mb-10 leading-relaxed">
          {t.cta.descriptionLine1}
          <br />
          {t.cta.descriptionLine2}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn btn-primary w-full sm:w-auto px-8 py-4 rounded-2xl">
            {t.cta.download}
          </button>
          <button onClick={() => setIsModalOpen(true)} className="btn btn-ghost w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center justify-center">
            {t.cta.contact}
          </button>
        </div>
      </div>
    </section>
  );
};
