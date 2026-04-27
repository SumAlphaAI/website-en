'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Particles } from './Particles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" quantity={15} />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[color:var(--accent)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[color:var(--accent-2)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="py-20 md:py-32">
          
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="inline-flex">
                    <Link
                      className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)]/70 px-4 py-2 text-sm text-[color:var(--muted)] shadow-sm hover:bg-[color:var(--panel)] hover:shadow-md transition-all duration-300"
                      href="#"
                    >
                        <span className="relative inline-flex items-center">
                            SumAlpha Desktop Preview <span className="tracking-normal text-[color:var(--accent)] ml-1">-&gt;</span>
                        </span>
                    </Link>
                </div>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h1 text-[color:var(--foreground)] pb-6"
            >
                {t.hero.slogan}
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-[color:var(--muted)] mb-12 leading-relaxed max-w-3xl mx-auto"
            >
                {t.hero.description}
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <div>
                    <Link className="btn btn-primary w-full justify-center text-base px-8 py-3" href="#">
                        {t.hero.getStarted} <span className="tracking-normal text-[color:var(--accent)] ml-1">-&gt;</span>
                    </Link>
                </div>
                <div>
                    <Link className="btn btn-ghost w-full justify-center text-base px-8 py-3" href="https://docs.sumalpha.ai">
                        <svg className="shrink-0 fill-[color:var(--muted)] mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                        </svg>
                        <span>{t.hero.readDocs}</span>
                    </Link>
                </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-[color:var(--muted)] animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
