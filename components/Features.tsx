'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ShieldCheck, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--panel-2)]/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[color:var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[color:var(--accent-2)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-12 md:pb-20">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center pb-16 md:pb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--panel)] border border-[color:var(--line)] mb-6">
              <Sparkles className="w-4 h-4 text-[color:var(--accent)]" />
              <span className="text-sm font-medium text-[color:var(--muted)]">Key Features</span>
            </div>
            <h2 className="h2 text-[color:var(--foreground)] pb-4">{t.nav.features}</h2>
            <p className="text-lg text-[color:var(--muted)]">
              {t.features.description}
            </p>
          </motion.div>

          {/* Feature 1 - Left aligned with large icon */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-32"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[color:var(--accent-2)]/20 to-[color:var(--accent)]/20 border border-[color:var(--accent-2)]/30 mb-6 shadow-xl">
                  <ShieldCheck className="w-10 h-10 text-[color:var(--accent-2)]" />
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-[color:var(--line)] text-[color:var(--muted)]">
                  {t.valueProp.yield.subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)] mb-4">{t.valueProp.yield.title}</h3>
                <p className="text-[color:var(--muted)] text-lg leading-relaxed mb-8">
                  {t.valueProp.yield.description}
                </p>
                <ul className="space-y-4">
                  {t.valueProp.yield.list.map((item, idx) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-[color:var(--foreground)]/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[color:var(--accent-2)] shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-2)]/10 to-[color:var(--accent)]/10 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 shadow-lg card-interactive">
                    <div className="space-y-4">
                      {[
                        { title: 'Risk Assessment', desc: 'Real-time portfolio analysis' },
                        { title: 'Position Sizing', desc: 'Optimal allocation strategy' },
                        { title: 'Stop Loss', desc: 'Dynamic risk management' }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ scale: 1.02, x: 4 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)] cursor-pointer"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[color:var(--accent-2)]/20 flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-[color:var(--accent-2)]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-[color:var(--foreground)]">{item.title}</div>
                            <div className="text-xs text-[color:var(--muted)] mt-1">{item.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 - Right aligned with different style */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="order-2 md:order-1 hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/10 to-[color:var(--accent-2)]/10 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 shadow-lg card-interactive">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Alpha Signals', value: '+24%' },
                        { label: 'Win Rate', value: '68%' },
                        { label: 'Sharpe Ratio', value: '2.1' },
                        { label: 'Max Drawdown', value: '-8%' }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-[color:var(--accent)]/10 to-[color:var(--accent-2)]/10 border border-[color:var(--accent)]/20 text-center cursor-pointer"
                        >
                          <TrendingUp className="w-6 h-6 text-[color:var(--accent)] mx-auto mb-2" />
                          <div className="text-lg font-bold text-[color:var(--foreground)]">{item.value}</div>
                          <div className="text-xs text-[color:var(--muted)] mt-1">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[color:var(--accent)]/20 to-[color:var(--accent-2)]/20 border border-[color:var(--accent)]/30 mb-6 shadow-xl">
                  <TrendingUp className="w-10 h-10 text-[color:var(--accent)]" />
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-[color:var(--line)] text-[color:var(--muted)]">
                  {t.valueProp.alpha.subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)] mb-4">{t.valueProp.alpha.title}</h3>
                <p className="text-[color:var(--muted)] text-lg leading-relaxed mb-8">
                  {t.valueProp.alpha.description}
                </p>
                <ul className="space-y-4">
                  {t.valueProp.alpha.list.map((item, idx) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-[color:var(--foreground)]/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[color:var(--accent)] shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
