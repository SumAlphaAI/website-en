'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Particles } from './Particles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" quantity={50} />

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
                <Image src="/images/glow-bottom.svg" className="max-w-none" width={2146} height={774} alt="Hero Illustration" />
            </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
            >
                <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                    <Link className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm bg-linear-to-r from-purple-500/50 to-purple-500/50" href="#">
                        <span className="relative inline-flex items-center">
                            SumAlpha Desktop Preview <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </span>
                    </Link>
                </div>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
            >
                {t.hero.slogan}
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 mb-8"
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
                    <Link className="btn !text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#">
                        {t.hero.getStarted} <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </Link>
                </div>
                <div>
                    <Link className="btn text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 w-full transition duration-150 ease-in-out" href="https://docs.sumalpha.ai">
                        <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                        </svg>
                        <span>{t.hero.readDocs}</span>
                    </Link>
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
