'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { Highlighter, HighlighterItem } from './Highlighter';
import Image from 'next/image';

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative">
      
      {/* Background illustration */}
      <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
          <Image src="/images/glow-top.svg" className="max-w-none" width={1404} height={658} alt="Features Illustration" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{t.nav.features}</h2>
            <p className="text-lg text-slate-400">
              {t.features.description}
            </p>
          </div>

          {/* Highlighted Boxes */}
          <Highlighter className="grid md:grid-cols-2 gap-6 group">
            
            {/* SumAlpha Card */}
            <HighlighterItem>
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                <div className="flex flex-col h-full p-6 sm:p-8">
                  <div className="md:pr-6">
                     <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
                        <ShieldCheck className="w-6 h-6 text-emerald-500" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-100 mb-2">{t.valueProp.yield.title}</h3>
                     <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold mb-4 border border-emerald-500/20">
                        {t.valueProp.yield.subtitle}
                     </div>
                     <p className="text-slate-400 leading-relaxed mb-8">
                        {t.valueProp.yield.description}
                     </p>
                     <ul className="space-y-3">
                        {t.valueProp.yield.list.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </div>
            </HighlighterItem>

            {/* SumAlpha Pro Card */}
            <HighlighterItem>
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                <div className="flex flex-col h-full p-6 sm:p-8">
                  <div className="md:pr-6">
                     <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
                        <TrendingUp className="w-6 h-6 text-purple-500" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-100 mb-2">{t.valueProp.alpha.title}</h3>
                     <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-semibold mb-4 border border-purple-500/20">
                        {t.valueProp.alpha.subtitle}
                     </div>
                     <p className="text-slate-400 leading-relaxed mb-8">
                        {t.valueProp.alpha.description}
                     </p>
                     <ul className="space-y-3">
                        {t.valueProp.alpha.list.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </div>
            </HighlighterItem>

          </Highlighter>

        </div>
      </div>
    </section>
  );
};
