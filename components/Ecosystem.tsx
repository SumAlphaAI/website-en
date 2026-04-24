'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Eye, Brain, Hand, Search, LineChart, ShieldAlert, Zap } from 'lucide-react';
import { Highlighter, HighlighterItem } from './Highlighter';

export const Ecosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-32 border-t border-[color:var(--line)] relative">

          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center pb-16 md:pb-24">
            <h2 className="h2 text-[color:var(--foreground)] pb-4">{t.ecosystem.title}</h2>
            <p className="text-xl text-[color:var(--muted)] leading-relaxed">
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
                accent: 'var(--accent-2)',
              },
              {
                icon: Brain,
                title: t.ecosystem.layers.skills.title,
                desc: t.ecosystem.layers.skills.desc,
                accent: 'var(--accent)',
              },
              {
                icon: Hand,
                title: t.ecosystem.layers.execution.title,
                desc: t.ecosystem.layers.execution.desc,
                accent: 'var(--foreground)',
              }
            ].map((layer, i) => (
              <div
                key={i}
                className="p-8 md:p-10 rounded-3xl bg-[color:var(--panel)] border border-[color:var(--line)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--panel)]/80 hover:shadow-[0_18px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="w-16 h-16 rounded-2xl surface-2 flex items-center justify-center mb-6">
                  <layer.icon className="w-8 h-8" style={{ color: layer.accent }} />
                </div>
                <h3 className="text-2xl font-semibold text-[color:var(--foreground)] mb-4">{layer.title}</h3>
                <p className="text-[color:var(--muted)] text-base leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>

          {/* Agents Squad */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h3 className="h2 text-[color:var(--foreground)] pb-4">{t.agents.title}</h3>
            <p className="text-xl text-[color:var(--muted)]">{t.agents.subtitle}</p>
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
                <div className="relative h-full p-6 xl:p-8 flex flex-col transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl surface-2 shrink-0">
                      <agent.icon className={`w-6 h-6 ${agent.color}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-[color:var(--foreground)]">{agent.name}</h4>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs font-bold text-[color:var(--muted)] uppercase tracking-widest">{agent.role}</span>
                  </div>
                  <p className="text-sm xl:text-base text-[color:var(--muted)] leading-relaxed flex-grow">
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
