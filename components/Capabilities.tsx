'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Eye, Brain, Zap, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Capabilities = () => {
  const { t } = useLanguage();

  const capabilities = [
    { 
      id: 'perception', 
      data: t.capabilities.phases.perception, 
      icon: Eye,
      color: 'text-[color:var(--accent-2)]',
      bgColor: 'bg-[color:var(--accent-2)]/10',
      borderColor: 'border-[color:var(--accent-2)]/30',
      bulletColor: 'bg-[color:var(--accent-2)]',
      glow: 'var(--accent-2)'
    },
    { 
      id: 'analysis', 
      data: t.capabilities.phases.analysis, 
      icon: Brain,
      color: 'text-[color:var(--accent)]',
      bgColor: 'bg-[color:var(--accent)]/10',
      borderColor: 'border-[color:var(--accent)]/30',
      bulletColor: 'bg-[color:var(--accent)]',
      glow: 'var(--accent)'
    },
    { 
      id: 'execution', 
      data: t.capabilities.phases.execution, 
      icon: Zap,
      color: 'text-[color:var(--foreground)]',
      bgColor: 'bg-[color:var(--foreground)]/10',
      borderColor: 'border-[color:var(--foreground)]/30',
      bulletColor: 'bg-[color:var(--foreground)]',
      glow: 'var(--foreground)'
    },
    { 
      id: 'risk', 
      data: t.capabilities.phases.risk, 
      icon: ShieldCheck,
      color: 'text-[color:var(--muted)]',
      bgColor: 'bg-[color:var(--muted)]/10',
      borderColor: 'border-[color:var(--muted)]/30',
      bulletColor: 'bg-[color:var(--muted)]',
      glow: 'var(--muted)'
    }
  ];

  return (
    <section id="capabilities" className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--panel-2)]/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[color:var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[color:var(--accent-2)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-[color:var(--line)]">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--panel)] border border-[color:var(--line)] mb-6">
              <Cpu className="w-4 h-4 text-[color:var(--accent)]" />
              <span className="text-sm font-medium text-[color:var(--muted)]">Core Capabilities</span>
            </div>
            <h2 className="h2 text-[color:var(--foreground)] pb-4">{t.capabilities.title}</h2>
            <p className="text-lg text-[color:var(--muted)]">{t.capabilities.subtitle}</p>
          </motion.div>

          {/* Horizontal step flow */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[color:var(--accent-2)]/30 via-[color:var(--accent)]/30 to-[color:var(--muted)]/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {capabilities.map((cap, i) => (
                <motion.div 
                    key={cap.id} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative p-6 rounded-2xl bg-[color:var(--panel)] border border-[color:var(--line)] card-interactive cursor-pointer"
                  >
                  {/* Step number badge */}
                  <div className="hidden lg:flex absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[color:var(--panel)] border border-[color:var(--line)] items-center justify-center z-10">
                    <span className="text-sm font-bold text-[color:var(--muted)]">{i + 1}</span>
                  </div>

                  {/* Icon circle */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative`}>
                      <div className="absolute inset-0 rounded-full blur-xl" style={{ background: `var(${cap.glow})20` }} />
                      <div className={`relative w-16 h-16 rounded-full ${cap.bgColor} border ${cap.borderColor} flex items-center justify-center`}>
                        <cap.icon className={`w-8 h-8 ${cap.color}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className={`inline-block px-3 py-1 rounded-md ${cap.bgColor} ${cap.color} text-xs font-bold uppercase tracking-wider mb-3`}>
                      {cap.data.title}
                    </div>
                    <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">{cap.data.subtitle}</h3>
                    <p className="text-[color:var(--muted)] text-sm mb-6 min-h-[40px]">
                      {cap.data.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 text-left">
                      {cap.data.features.map((feature: string, idx: number) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-[color:var(--foreground)]/80"
                        >
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cap.color}`} />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow connector (except last) */}
                  {i < capabilities.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-6 z-10">
                      <ArrowRight className="w-6 h-6 text-[color:var(--muted)]/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
