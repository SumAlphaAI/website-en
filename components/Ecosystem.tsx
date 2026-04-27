'use client';

import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Eye, Brain, Hand, Search, LineChart, ShieldAlert, Zap, Layers, ArrowRight, Bot } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

const TimelineLayer = ({ 
  layer, 
  index 
}: { 
  layer: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
    accent: string;
    color: string;
    bg: string;
  }; 
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: layerProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 0.7']
  });

  const scaleX = useTransform(layerProgress, [0, 0.3], [0.3, 1]);
  const opacity = useTransform(layerProgress, [0, 0.1, 0.3], [0.3, 0.6, 1]);
  const translateX = useTransform(
    layerProgress, 
    [0, 0.3], 
    index % 2 === 0 ? [-60, 0] : [60, 0]
  );
  const rotateY = useTransform(layerProgress, [0, 0.3], [8, 0]);
  const scale = useTransform(layerProgress, [0, 0.3], [0.9, 1]);

  const smoothScaleX = useSpring(scaleX, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const smoothOpacity = useSpring(opacity, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const smoothTranslateX = useSpring(translateX, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <motion.div 
      ref={ref}
      className="relative"
      style={{
        opacity: smoothOpacity,
      }}
    >
      {/* Progress indicator */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-8 w-8 h-8 rounded-full bg-[color:var(--panel)] border-2 border-[color:var(--line)] flex items-center justify-center z-10">
        <div 
          className="w-3 h-3 rounded-full" 
          style={{ 
            background: `var(${layer.accent})`,
            boxShadow: `0 0 12px var(${layer.accent})`
          }} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Content side */}
        <motion.div 
          className="order-2 md:order-none"
          style={{
            x: smoothTranslateX,
            opacity: smoothOpacity,
          }}
        >
          <motion.div 
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${layer.bg} ${layer.color}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ transformOrigin: index % 2 === 0 ? 'left' : 'right' }}
          >
            <layer.icon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Layer {index + 1}</span>
          </motion.div>
          <motion.h3 
            className="text-2xl md:text-3xl font-semibold text-[color:var(--foreground)] mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {layer.title}
          </motion.h3>
          <motion.p 
            className="text-[color:var(--muted)] text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {layer.desc}
          </motion.p>
        </motion.div>

        {/* Visual side */}
        <motion.div 
          className="order-1 md:order-none"
          style={{
            x: smoothTranslateX,
            opacity: smoothOpacity,
            rotateY: smoothRotateY,
            scale: smoothScale,
          }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 rounded-2xl blur-2xl" 
              style={{ 
                background: `linear-gradient(135deg, var(${layer.accent})10, transparent)`,
                scaleX: smoothScaleX,
                transformOrigin: index % 2 === 0 ? 'left' : 'right'
              }} 
            />
            <motion.div 
              className="relative rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 shadow-lg overflow-hidden card-interactive"
              style={{
                scaleX: smoothScaleX,
                transformOrigin: index % 2 === 0 ? 'left' : 'right'
              }}
            >
              {/* Animated progress bar */}
              <motion.div 
                className="absolute top-0 left-0 h-1 bg-gradient-to-r"
                style={{
                  width: smoothScaleX,
                  background: `linear-gradient(90deg, var(${layer.accent}), transparent)`,
                  transformOrigin: 'left'
                }}
              />
              
              {/* Icon and feature list */}
              <div className="space-y-4">
                <motion.div 
                  className={`w-16 h-16 rounded-xl ${layer.bg} flex items-center justify-center`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
                >
                  <layer.icon className={`w-8 h-8 ${layer.color}`} />
                </motion.div>
                
                {/* Feature items with icons */}
                <div className="space-y-3">
                  {[
                    { label: index === 0 ? 'Multi-source Data' : index === 1 ? 'Pattern Recognition' : 'Real-time Execution', value: '99.9%' },
                    { label: index === 0 ? 'Real-time Processing' : index === 1 ? 'Deep Analysis' : 'Risk Control', value: '<10ms' },
                    { label: index === 0 ? 'Cross-platform' : index === 1 ? 'Strategy Generation' : 'Order Management', value: '24/7' }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-[color:var(--panel-2)]/50 border border-[color:var(--line)]/50"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${layer.bg}`} style={{ backgroundColor: `var(${layer.accent})` }} />
                        <span className="text-sm text-[color:var(--foreground)]/80">{item.label}</span>
                      </div>
                      <span className={`text-sm font-semibold ${layer.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Ecosystem = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="ecosystem" className="relative overflow-hidden" ref={containerRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--panel-2)]/40 to-transparent" />
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-[color:var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-[color:var(--accent-2)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-32 border-t border-[color:var(--line)] relative">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center pb-16 md:pb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--panel)] border border-[color:var(--line)] mb-6">
              <Layers className="w-4 h-4 text-[color:var(--accent)]" />
              <span className="text-sm font-medium text-[color:var(--muted)]">Ecosystem Architecture</span>
            </div>
            <h2 className="h2 text-[color:var(--foreground)] pb-4">{t.ecosystem.title}</h2>
            <p className="text-xl text-[color:var(--muted)] leading-relaxed">
              {t.ecosystem.subtitle}
            </p>
          </motion.div>

          {/* Center hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/20 to-[color:var(--accent-2)]/20 rounded-full blur-2xl" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] flex items-center justify-center shadow-2xl border-4 border-[color:var(--panel)]">
                <div className="text-center">
                  <Bot className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto" />
                  <div className="text-white text-xs font-bold mt-1">SumAlpha</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Layers in timeline style with scroll-driven animations */}
          <div className="space-y-16 md:space-y-24 mb-32 relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--accent)]/30 via-[color:var(--accent-2)]/30 to-transparent" />

            {[
              {
                icon: Eye,
                title: t.ecosystem.layers.perception.title,
                desc: t.ecosystem.layers.perception.desc,
                accent: 'var(--accent-2)',
                color: 'text-[color:var(--accent-2)]',
                bg: 'bg-[color:var(--accent-2)]/10',
              },
              {
                icon: Brain,
                title: t.ecosystem.layers.skills.title,
                desc: t.ecosystem.layers.skills.desc,
                accent: 'var(--accent)',
                color: 'text-[color:var(--accent)]',
                bg: 'bg-[color:var(--accent)]/10',
              },
              {
                icon: Hand,
                title: t.ecosystem.layers.execution.title,
                desc: t.ecosystem.layers.execution.desc,
                accent: 'var(--foreground)',
                color: 'text-[color:var(--foreground)]',
                bg: 'bg-[color:var(--foreground)]/10',
              }
            ].map((layer, i) => (
              <TimelineLayer 
                key={i} 
                layer={layer} 
                index={i} 
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="h2 text-[color:var(--foreground)] pb-4">{t.agents.title}</h3>
            <p className="text-xl text-[color:var(--muted)]">{t.agents.subtitle}</p>
          </motion.div>

          {/* Agents in horizontal flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'alice',
                icon: Search,
                name: t.agents.alice.name,
                role: t.agents.alice.role,
                desc: t.agents.alice.desc,
                color: 'text-cyan-600',
                glow: '#0891b2'
              },
              {
                id: 'bob',
                icon: LineChart,
                name: t.agents.bob.name,
                role: t.agents.bob.role,
                desc: t.agents.bob.desc,
                color: 'text-purple-600',
                glow: '#9333ea'
              },
              {
                id: 'cindy',
                icon: ShieldAlert,
                name: t.agents.cindy.name,
                role: t.agents.cindy.role,
                desc: t.agents.cindy.desc,
                color: 'text-amber-600',
                glow: '#d97706'
              },
              {
                id: 'david',
                icon: Zap,
                name: t.agents.david.name,
                role: t.agents.david.role,
                desc: t.agents.david.desc,
                color: 'text-emerald-600',
                glow: '#059669'
              }
            ].map((agent, i) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Hover gradient with agent color */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${agent.glow}08, transparent)` }} />
                
                <div className="relative h-full p-6 xl:p-8 flex flex-col z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[color:var(--panel-2)] to-[color:var(--panel)] border border-[color:var(--line)] shrink-0 group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
