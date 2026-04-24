'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { Highlighter, HighlighterItem } from './Highlighter';

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-[color:var(--foreground)] pb-4">{t.nav.features}</h2>
            <p className="text-lg text-[color:var(--muted)]">
              {t.features.description}
            </p>
          </div>

          {/* Highlighted Boxes */}
          <Highlighter className="grid md:grid-cols-2 gap-6 group">
            
            {/* SumAlpha Card */}
            <HighlighterItem>
              <div className="flex flex-col h-full p-6 sm:p-8">
                <div className="md:pr-6">
                  <div className="w-12 h-12 rounded-xl surface-2 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-[color:var(--accent-2)]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[color:var(--foreground)] mb-2">{t.valueProp.yield.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-[color:var(--line)] text-[color:var(--muted)]">
                    {t.valueProp.yield.subtitle}
                  </div>
                  <p className="text-[color:var(--muted)] leading-relaxed mb-8">
                    {t.valueProp.yield.description}
                  </p>
                  <ul className="space-y-3">
                    {t.valueProp.yield.list.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[color:var(--foreground)]/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-2)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </HighlighterItem>

            {/* SumAlpha Pro Card */}
            <HighlighterItem>
              <div className="flex flex-col h-full p-6 sm:p-8">
                <div className="md:pr-6">
                  <div className="w-12 h-12 rounded-xl surface-2 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-[color:var(--accent)]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[color:var(--foreground)] mb-2">{t.valueProp.alpha.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-[color:var(--line)] text-[color:var(--muted)]">
                    {t.valueProp.alpha.subtitle}
                  </div>
                  <p className="text-[color:var(--muted)] leading-relaxed mb-8">
                    {t.valueProp.alpha.description}
                  </p>
                  <ul className="space-y-3">
                    {t.valueProp.alpha.list.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[color:var(--foreground)]/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </HighlighterItem>

          </Highlighter>

        </div>
      </div>
    </section>
  );
};
