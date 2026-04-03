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
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30 hover:border-emerald-500/50',
      bulletColor: 'bg-emerald-500'
    },
    { 
      id: 'analysis', 
      data: t.capabilities.phases.analysis, 
      icon: Brain,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30 hover:border-blue-500/50',
      bulletColor: 'bg-blue-500'
    },
    { 
      id: 'execution', 
      data: t.capabilities.phases.execution, 
      icon: Zap,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30 hover:border-purple-500/50',
      bulletColor: 'bg-purple-500'
    },
    { 
      id: 'risk', 
      data: t.capabilities.phases.risk, 
      icon: ShieldCheck,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30 hover:border-rose-500/50',
      bulletColor: 'bg-rose-500'
    }
  ];

  return (
    <section id="capabilities" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{t.capabilities.title}</h2>
            <p className="text-lg text-slate-400">{t.capabilities.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div 
                key={cap.id} 
                className={`relative group p-6 rounded-2xl bg-slate-800/50 border transition-all duration-300 hover:-translate-y-1 ${cap.borderColor}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${cap.bgColor} ${cap.color}`}>
                    {cap.data.title}
                  </div>
                  <cap.icon className={`w-5 h-5 ${cap.color}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">{cap.data.subtitle}</h3>
                <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                  {cap.data.desc}
                </p>

                <div className="space-y-3">
                  {cap.data.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
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
