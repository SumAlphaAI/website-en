'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Eye, Brain, Zap, ShieldCheck } from 'lucide-react';

export const Capabilities = () => {
  const { t } = useLanguage();

  const capabilities = [
    { 
      id: 'perception', 
      data: t.capabilities.phases.perception, 
      icon: Eye,
      color: 'text-[color:var(--accent-2)]',
      bgColor: 'bg-[color:var(--panel-2)]',
      borderColor: 'border-[color:var(--line)] hover:border-[color:var(--line)]/80',
      bulletColor: 'bg-[color:var(--accent-2)]'
    },
    { 
      id: 'analysis', 
      data: t.capabilities.phases.analysis, 
      icon: Brain,
      color: 'text-[color:var(--accent)]',
      bgColor: 'bg-[color:var(--panel-2)]',
      borderColor: 'border-[color:var(--line)] hover:border-[color:var(--line)]/80',
      bulletColor: 'bg-[color:var(--accent)]'
    },
    { 
      id: 'execution', 
      data: t.capabilities.phases.execution, 
      icon: Zap,
      color: 'text-[color:var(--foreground)]',
      bgColor: 'bg-[color:var(--panel-2)]',
      borderColor: 'border-[color:var(--line)] hover:border-[color:var(--line)]/80',
      bulletColor: 'bg-[color:var(--foreground)]'
    },
    { 
      id: 'risk', 
      data: t.capabilities.phases.risk, 
      icon: ShieldCheck,
      color: 'text-[color:var(--muted)]',
      bgColor: 'bg-[color:var(--panel-2)]',
      borderColor: 'border-[color:var(--line)] hover:border-[color:var(--line)]/80',
      bulletColor: 'bg-[color:var(--muted)]'
    }
  ];

  return (
    <section id="capabilities" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-[color:var(--line)]">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-[color:var(--foreground)] pb-4">{t.capabilities.title}</h2>
            <p className="text-lg text-[color:var(--muted)]">{t.capabilities.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div 
                key={cap.id} 
                className={`relative group p-6 rounded-2xl bg-[color:var(--panel)] border transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--panel)]/80 ${cap.borderColor}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${cap.bgColor} ${cap.color}`}>
                    {cap.data.title}
                  </div>
                  <cap.icon className={`w-5 h-5 ${cap.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">{cap.data.subtitle}</h3>
                <p className="text-[color:var(--muted)] text-sm mb-6 min-h-[40px]">
                  {cap.data.desc}
                </p>

                <div className="space-y-3">
                  {cap.data.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[color:var(--foreground)]/80">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${cap.bulletColor}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
