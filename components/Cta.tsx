'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useState } from 'react';
import { ContactModal } from './ContactModal';
import { motion } from 'framer-motion';

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
        <div className="absolute inset-0 bg-[color:var(--panel)]/50" />
        <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--line)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[color:var(--line)]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h2 text-[color:var(--foreground)] mb-6"
        >
          {t.cta.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[color:var(--muted)] text-lg mb-10 leading-relaxed"
        >
          {t.cta.descriptionLine1}
          <br />
          {t.cta.descriptionLine2}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary w-full sm:w-auto px-8 py-4 rounded-2xl"
          >
            {t.cta.download}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)} 
            className="btn btn-ghost w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center justify-center"
          >
            {t.cta.contact}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
