'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Eye, Brain, Hand, Search, LineChart, ShieldAlert, Zap } from 'lucide-react';
import { Highlighter, HighlighterItem } from './Highlighter';

export const Ecosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-800">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{t.ecosystem.title}</h2>
            <p className="text-lg text-slate-400">
              {t.ecosystem.subtitle}
            </p>
          </div>

          {/* Technical Layers */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              {
                icon: Eye,
                title: t.ecosystem.layers.perception.title,
                desc: t.ecosystem.layers.perception.desc,
                color: 'text-cyan-500',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/20'
              },
              {
                icon: Brain,
                title: t.ecosystem.layers.skills.title,
                desc: t.ecosystem.layers.skills.desc,
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20'
              },
              {
                icon: Hand,
                title: t.ecosystem.layers.execution.title,
                desc: t.ecosystem.layers.execution.desc,
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20'
              }
            ].map((layer, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-slate-800/50 border ${layer.border} backdrop-blur-sm transition-transform hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-lg ${layer.bg} flex items-center justify-center mb-4`}>
                  <layer.icon className={`w-6 h-6 ${layer.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{layer.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>

          {/* Agents Squad */}
          <div className="mb-12 text-center">
            <h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{t.agents.title}</h3>
            <p className="text-lg text-slate-400">{t.agents.subtitle}</p>
          </div>

          <Highlighter className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 group">
            {[
              {
                id: 'alice',
                icon: Search,
                name: t.agents.alice.name,
                role: t.agents.alice.role,
                desc: t.agents.alice.desc,
                color: 'text-cyan-400'
              },
              {
                id: 'bob',
                icon: LineChart,
                name: t.agents.bob.name,
                role: t.agents.bob.role,
                desc: t.agents.bob.desc,
                color: 'text-purple-400'
              },
              {
                id: 'cindy',
                icon: ShieldAlert,
                name: t.agents.cindy.name,
                role: t.agents.cindy.role,
                desc: t.agents.cindy.desc,
                color: 'text-amber-400'
              },
              {
                id: 'david',
                icon: Zap,
                name: t.agents.david.name,
                role: t.agents.david.role,
                desc: t.agents.david.desc,
                color: 'text-emerald-400'
              }
            ].map((agent) => (
              <HighlighterItem key={agent.id}>
                <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 rounded-lg bg-slate-800 border border-slate-700`}>
                      <agent.icon className={`w-5 h-5 ${agent.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100">{agent.name}</h4>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">{agent.role}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">
                    {agent.desc}
                  </p>
                </div>
              </HighlighterItem>
            ))}
          </Highlighter>
        </div>
      </div>
    </section>
  );
};
