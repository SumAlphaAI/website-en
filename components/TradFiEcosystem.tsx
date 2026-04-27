'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LineChart, Database, Calculator, BookOpen, Bot, TrendingUp, ArrowRight, Target, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TradFiEcosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="tradfi-ecosystem" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[color:var(--panel-2)] opacity-35" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-[color:var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-[color:var(--accent-2)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-32 border-t border-[color:var(--line)] relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center pb-16 md:pb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)] mb-6">
              <TrendingUp className="w-4 h-4" />
              {t.tradFi?.tag || 'SumAlpha Cross-Market Ecosystem'}
            </div>
            <h2 className="h2 text-[color:var(--foreground)] pb-4">
              {t.tradFi?.title || 'Bridging Web3 Alpha with Traditional Finance'}
            </h2>
            <p className="text-xl text-[color:var(--muted)] leading-relaxed">
              {t.tradFi?.description || 'Beyond blockchain. SumAlpha Pro unlocks Python and Node.js Sidecars, extending our multi-agent framework into global equities, derivatives, and macro markets.'}
            </p>
          </motion.div>

          {/* Hero banner - Full width */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 relative"
          >
            <div className="rounded-3xl bg-gradient-to-r from-[color:var(--accent)]/10 via-[color:var(--accent-2)]/10 to-[color:var(--accent)]/10 border border-[color:var(--line)] p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[color:var(--panel)]/80" />
              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[color:var(--accent)]/10 text-[color:var(--accent)] mb-4">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Core Vision</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-4">
                    Multi-Agent Intelligence for Global Markets
                  </h3>
                  <p className="text-[color:var(--muted)] text-lg leading-relaxed">
                    From A-Share data to Wall Street strategies, our AI agents synthesize quantitative models, deep research, and master investor personas to deliver institutional-grade analysis.
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/20 to-[color:var(--accent-2)]/20 rounded-2xl blur-xl" />
                    <div className="relative w-48 h-48 rounded-2xl bg-[color:var(--panel)] border border-[color:var(--line)] p-6 flex items-center justify-center">
                      <BarChart3 className="w-20 h-20 text-[color:var(--accent)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories in alternating layout */}
          <div className="space-y-16 mb-20">
            {[
              {
                id: 'data',
                icon: Database,
                title: t.tradFi?.categories.data.title || 'Data & Narrative',
                desc: t.tradFi?.categories.data.desc || 'A-Share Market Data, Global Macro Events, and Semantic Sentiment Tracking.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                glow: '#2563eb',
                features: ['Real-time Market Data', 'Sentiment Analysis', 'Macro Event Tracking']
              },
              {
                id: 'quant',
                icon: Calculator,
                title: t.tradFi?.categories.quant.title || 'Quantitative Models',
                desc: t.tradFi?.categories.quant.desc || 'Time-Series Market Forecasting, DCF Valuation, and AI-Factor Mining.',
                color: 'text-purple-600',
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                glow: '#9333ea',
                features: ['Time-Series Forecasting', 'DCF Valuation', 'AI-Factor Mining']
              },
              {
                id: 'research',
                icon: LineChart,
                title: t.tradFi?.categories.research.title || 'Deep Research',
                desc: t.tradFi?.categories.research.desc || 'Auto-generated comprehensive stock analysis covering technicals and fundamentals.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-200',
                glow: '#059669',
                features: ['Technical Analysis', 'Fundamental Analysis', 'Auto-Generated Reports']
              },
              {
                id: 'exec',
                icon: BookOpen,
                title: t.tradFi?.categories.exec.title || 'Master Personas & Reasoning',
                desc: t.tradFi?.categories.exec.desc || 'Simulate decision logic from 10+ investment masters (Buffett, Munger) through advanced multi-agent orchestration.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                glow: '#d97706',
                features: ['Buffett Strategy', 'Munger Mental Models', 'Multi-Agent Orchestration']
              }
            ].map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  {/* Content side */}
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl mb-4 ${item.bg} ${item.color} border ${item.border}`}>
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-bold">{item.title}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)] mb-3">{item.title}</h3>
                    <p className="text-[color:var(--muted)] text-base leading-relaxed mb-6">{item.desc}</p>
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-[color:var(--foreground)]/80"
                        >
                          <ArrowRight className="w-4 h-4" style={{ color: item.glow }} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual side */}
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ background: `linear-gradient(135deg, ${item.glow}10, transparent)` }} />
                      <div className="relative rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                            <item.icon className={`w-8 h-8 ${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-[color:var(--foreground)] mb-1">{item.title}</h4>
                            <p className="text-sm text-[color:var(--muted)]">{item.desc}</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[color:var(--panel-2)]/50 border border-[color:var(--line)]/50">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.glow }} />
                              <span className="text-sm text-[color:var(--foreground)]/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom banner - Advanced Trading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[color:var(--accent)]/10 text-[color:var(--accent)] mb-4">
                      <Bot className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Advanced Capabilities</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-4">
                      Advanced Trading & Analysis
                    </h3>
                    <p className="text-[color:var(--muted)] text-lg leading-relaxed mb-6">
                      SumAlpha extends its capabilities to traditional finance by incorporating robust time-series forecasting, automated stock valuation models (DCF), and comprehensive technical/fundamental analysis workflows to empower your edge.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-5 py-2.5 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)] text-[color:var(--foreground)]/80 font-medium text-sm hover:bg-[color:var(--panel)] hover:border-[color:var(--accent)]/30 transition-all duration-300">
                        Deep Research
                      </div>
                      <div className="px-5 py-2.5 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)] text-[color:var(--foreground)]/80 font-medium text-sm hover:bg-[color:var(--panel)] hover:border-[color:var(--accent)]/30 transition-all duration-300">
                        DCF Valuation
                      </div>
                      <div className="px-5 py-2.5 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)] text-[color:var(--foreground)]/80 font-medium text-sm hover:bg-[color:var(--panel)] hover:border-[color:var(--accent)]/30 transition-all duration-300">
                        Technical Analysis
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/10 to-[color:var(--accent-2)]/10 rounded-2xl blur-xl" />
                      <div className="relative rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
                        <div className="space-y-4">
                          {[
                            { title: 'Time-Series Forecasting', desc: 'LSTM/Transformer models' },
                            { title: 'DCF Valuation Engine', desc: 'Automated cash flow analysis' },
                            { title: 'Technical Analysis', desc: '100+ indicators & patterns' }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[color:var(--panel-2)] border border-[color:var(--line)]">
                              <div className="w-10 h-10 rounded-lg bg-[color:var(--accent)]/20 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-[color:var(--accent)]" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-[color:var(--foreground)]">{item.title}</div>
                                <div className="text-xs text-[color:var(--muted)] mt-1">{item.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
