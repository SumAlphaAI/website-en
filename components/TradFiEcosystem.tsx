'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LineChart, Database, Calculator, BookOpen, Bot } from 'lucide-react';
import { Highlighter, HighlighterItem } from './Highlighter';

export const TradFiEcosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="tradfi-ecosystem" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[color:var(--panel-2)] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-32 border-t border-[color:var(--line)] relative">
          
          <div className="max-w-4xl mx-auto text-center pb-16 md:pb-24">
            <div className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)] mb-6">
              {t.tradFi?.tag || 'SumAlpha Cross-Market Ecosystem'}
            </div>
            <h2 className="h2 text-[color:var(--foreground)] pb-4">
              {t.tradFi?.title || 'Bridging Web3 Alpha with Traditional Finance'}
            </h2>
            <p className="text-xl text-[color:var(--muted)] leading-relaxed">
              {t.tradFi?.description || 'Beyond blockchain. SumAlpha Pro unlocks Python and Node.js Sidecars, extending our multi-agent framework into global equities, derivatives, and macro markets.'}
            </p>
          </div>

          <Highlighter className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 group">
            {[
              {
                id: 'data',
                icon: Database,
                title: t.tradFi?.categories.data.title || 'Data & Narrative',
                desc: t.tradFi?.categories.data.desc || 'A-Share Market Data, Global Macro Events, and Semantic Sentiment Tracking.',
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
              },
              {
                id: 'quant',
                icon: Calculator,
                title: t.tradFi?.categories.quant.title || 'Quantitative Models',
                desc: t.tradFi?.categories.quant.desc || 'Time-Series Market Forecasting, DCF Valuation, and AI-Factor Mining.',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
              },
              {
                id: 'research',
                icon: LineChart,
                title: t.tradFi?.categories.research.title || 'Deep Research',
                desc: t.tradFi?.categories.research.desc || 'Auto-generated comprehensive stock analysis covering technicals and fundamentals.',
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20',
              },
              {
                id: 'exec',
                icon: BookOpen,
                title: t.tradFi?.categories.exec.title || 'Master Personas & Reasoning',
                desc: t.tradFi?.categories.exec.desc || 'Simulate decision logic from 10+ investment masters (Buffett, Munger) through advanced multi-agent orchestration.',
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/20',
              }
            ].map((item) => (
              <HighlighterItem key={item.id}>
                <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden p-8 flex flex-col transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-6 shadow-inner shrink-0`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h4>
                  <p className="text-base text-slate-400 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </HighlighterItem>
            ))}
          </Highlighter>

          <div className="mt-16 rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 md:p-12 overflow-hidden relative shadow-sm">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-[color:var(--panel-2)] to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[color:var(--foreground)] mb-4 flex items-center gap-3">
                  <Bot className="w-8 h-8 text-[color:var(--accent)]" />
                  Advanced Trading & Analysis
                </h3>
                <p className="text-[color:var(--muted)] text-lg leading-relaxed">
                  SumAlpha extends its capabilities to traditional finance by incorporating robust time-series forecasting, automated stock valuation models (DCF), and comprehensive technical/fundamental analysis workflows to empower your edge.
                </p>
              </div>
              <div className="flex shrink-0 gap-4 flex-wrap justify-end">
                <div className="px-6 py-3 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)] text-[color:var(--foreground)]/80 font-medium font-mono text-sm">
                  Deep Research
                </div>
                <div className="px-6 py-3 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)] text-[color:var(--foreground)]/80 font-medium font-mono text-sm">
                  DCF Valuation
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
