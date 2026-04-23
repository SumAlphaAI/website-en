'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Eye, Brain, Hand, Search, LineChart, ShieldAlert, Zap } from 'lucide-react';
import { Highlighter, HighlighterItem } from './Highlighter';

export const Ecosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none transform -translate-x-1/2"></div>
      <div className="absolute top-3/4 right-0 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none transform translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-32 border-t border-slate-800/60 relative">

          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center pb-16 md:pb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-slate-200 via-white to-slate-200 pb-6 tracking-tight">{t.ecosystem.title}</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              {t.ecosystem.subtitle}
            </p>
          </div>

          {/* Technical Layers */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: Eye,
                title: t.ecosystem.layers.perception.title,
                desc: t.ecosystem.layers.perception.desc,
                color: 'text-cyan-500',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/20',
                shadow: 'hover:shadow-cyan-500/20'
              },
              {
                icon: Brain,
                title: t.ecosystem.layers.skills.title,
                desc: t.ecosystem.layers.skills.desc,
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
                shadow: 'hover:shadow-purple-500/20'
              },
              {
                icon: Hand,
                title: t.ecosystem.layers.execution.title,
                desc: t.ecosystem.layers.execution.desc,
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20',
                shadow: 'hover:shadow-emerald-500/20'
              }
            ].map((layer, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-3xl bg-slate-800/40 border ${layer.border} backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/60 hover:shadow-2xl ${layer.shadow}`}>
                <div className={`w-16 h-16 rounded-2xl ${layer.bg} flex items-center justify-center mb-6`}>
                  <layer.icon className={`w-8 h-8 ${layer.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-50 mb-4">{layer.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>

          {/* Agents Squad */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200 via-white to-slate-200 pb-4 tracking-tight">{t.agents.title}</h3>
            <p className="text-xl text-slate-400">{t.agents.subtitle}</p>
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
                <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden p-6 xl:p-8 flex flex-col transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-slate-800/80 border border-slate-700 shadow-inner shrink-0`}>
                      <agent.icon className={`w-6 h-6 ${agent.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-100">{agent.name}</h4>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{agent.role}</span>
                  </div>
                  <p className="text-sm xl:text-base text-slate-400 leading-relaxed flex-grow">
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
