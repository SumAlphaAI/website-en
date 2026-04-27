'use client';

import type { ComponentType } from 'react';
import { ShieldCheck, LockKeyhole, Workflow, Wallet, Search, CreditCard, Code2, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

type BrandItem = {
  name: string;
  color: string;
  summary: string;
  icon: ComponentType<{ className?: string }>;
};

type SecurityItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  glow: string;
};

const liveChains: BrandItem[] = [
  {
    name: 'EVM Networks',
    color: '#627EEA',
    summary: 'Ethereum, Base, BNBChain, Arbitrum, Optimism, Polygon, ...',
    icon: EthereumIcon,
  },
  {
    name: 'Solana',
    color: '#14F195',
    summary: 'High-performance L1 mainnet',
    icon: SolanaIcon,
  },
  {
    name: 'Sui',
    color: '#6FD6FF',
    summary: 'High-performance MoveVM mainnet',
    icon: SuiIcon,
  },
  {
    name: 'App Chains',
    color: '#4F46E5',
    summary: 'dYdX (v4), Hyperliquid L1, Unichain',
    icon: AppChainIcon,
  },
];

const liveProtocols: BrandItem[] = [
  {
    name: 'DEX',
    color: '#FF007A',
    summary: 'Uniswap, Curve, PancakeSwap, Raydium, Cetus',
    icon: UniswapIcon,
  },
  {
    name: 'Aggregators',
    color: '#FBAA4C',
    summary: '1inch, Jupiter, Aftermath',
    icon: JupiterIcon,
  },
  {
    name: 'Lending',
    color: '#B6509E',
    summary: 'Aave, NAVI, Scallop, Suilend, Moonwell',
    icon: AaveIcon,
  },
  {
    name: 'Derivatives',
    color: '#4F46E5',
    summary: 'dYdX, GMX, Hyperliquid, Polymarket',
    icon: DerivativesIcon,
  },
];

type CapabilityItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const advancedCapabilities: CapabilityItem[] = [
  {
    title: 'On-chain Data Retrieval',
    description: 'Read-only queries for protocol states, liquidity, prices, and account balances.',
    icon: Search,
    color: '#0EA5E9',
  },
  {
    title: 'Multi-chain Tx Building',
    description: 'Generates standardized unsigned transaction payloads based on intent.',
    icon: Code2,
    color: '#10B981',
  },
  {
    title: 'Semantic Skill Discovery',
    description: 'Intent-based skill discovery driven by semantic retrieval and hybrid re-ranking.',
    icon: Search,
    color: '#F59E0B',
  },
  {
    title: 'x402 Payment Governance',
    description: 'Built-in challenge, verify, and settle flow for high-cost capabilities.',
    icon: CreditCard,
    color: '#E11D48',
  },
];

const securityItems: SecurityItem[] = [
  {
    title: 'Cold / Hot Isolation',
    description: 'Desktop keeps signing local, while Web AaaS delegates bounded actions to MPC wallets.',
    icon: LockKeyhole,
    accent: 'text-cyan-600',
    glow: '#0891b2',
  },
  {
    title: 'Local Vault Boundary',
    description: 'Private keys stay inside a local Vault with encrypted storage and no server-side plaintext exposure.',
    icon: Wallet,
    accent: 'text-emerald-600',
    glow: '#059669',
  },
  {
    title: 'MPC + Risk Gate',
    description: 'Privy-backed MPC delegation and Cindy risk review sit in front of every write action.',
    icon: ShieldCheck,
    accent: 'text-purple-600',
    glow: '#9333ea',
  },
  {
    title: 'Private Sandbox',
    description: 'Execution remains inside isolated runtime boundaries before signing and broadcast.',
    icon: Workflow,
    accent: 'text-amber-600',
    glow: '#d97706',
  },
];

export const BlockchainDefiEcosystem = () => {
  return (
    <section id="blockchain-defi" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[color:var(--panel-2)] opacity-45" />
        <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--line)]" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-[color:var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-[color:var(--accent-2)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-[color:var(--line)]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)] mb-6">
              <Globe className="w-4 h-4" />
              SumAlpha Blockchain &amp; DeFi Ecosystem
            </div>
            <h2 className="h2 text-[color:var(--foreground)] pt-6 pb-4">
              Multi-chain aggregation with a one-stop DeFi entry point
            </h2>
            <p className="text-lg text-[color:var(--muted)]">
              Bridging major EVM networks, Solana, and Sui, our infrastructure unifies deep DeFi integration, intent-driven skill discovery, and MPC-backed secure execution into a single, powerful gateway.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <StatPill label="Chains Supported" value="15" />
            <StatPill label="DeFi Protocols" value="30" />
            <StatPill label="Agent Skills" value="45" />
          </motion.div>

          {/* Step-by-step flow layout */}
          <div className="mt-16 space-y-12 md:space-y-20">
            
            {/* Step 1: Mainnet Coverage - Horizontal banner */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">Mainnet Coverage</h3>
                  <p className="text-[color:var(--muted)] text-base leading-relaxed">
                    Comprehensive support spanning major EVM networks, high-performance L1s like Solana and Sui, plus specialized app chains.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {liveChains.map((item, i) => (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ boxShadow: `inset 0 0 0 1px ${item.color}12` }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--panel-2)]"
                            style={{ boxShadow: `0 0 0 1px ${item.color}22, 0 0 20px ${item.color}20` }}
                          >
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-[color:var(--foreground)] text-sm">{item.name}</h4>
                            <p className="mt-1 text-xs leading-5 text-[color:var(--muted)]">{item.summary}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center">
              <ChevronDown className="w-8 h-8 text-[color:var(--muted)]/30 animate-bounce" />
            </div>

            {/* Step 2: DeFi Protocol Surface - Full width banner */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="grid grid-cols-2 gap-4">
                      {liveProtocols.map((item, i) => (
                        <motion.div 
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          style={{ boxShadow: `inset 0 0 0 1px ${item.color}12` }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--panel-2)]"
                              style={{ boxShadow: `0 0 0 1px ${item.color}22, 0 0 20px ${item.color}20` }}
                            >
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-[color:var(--foreground)] text-sm">{item.name}</h4>
                              <p className="mt-1 text-xs leading-5 text-[color:var(--muted)]">{item.summary}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">DeFi Protocol Surface</h3>
                    <p className="text-[color:var(--muted)] text-base leading-relaxed">
                      A unified set of execution and unsigned transaction building logic tailored for DeFi protocols, spanning DEXs, aggregators, lending, and derivatives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center">
              <ChevronDown className="w-8 h-8 text-[color:var(--muted)]/30 animate-bounce" />
            </div>

            {/* Step 3: Advanced Capability Matrix - Vertical list with icons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">Advanced Capability Matrix</h3>
                <p className="max-w-2xl mx-auto text-[color:var(--muted)] text-base leading-relaxed">
                  Core infrastructure providing deep protocol integration, semantic skill retrieval, dynamic SOPs, multi-chain transaction building, and secure Web3 delegation.
                </p>
              </div>

              <div className="space-y-6">
                {advancedCapabilities.map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[color:var(--accent)]/30"
                  >
                    <div className="flex-shrink-0">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.color}15` }}
                      >
                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">{item.title}</h4>
                      <p className="text-[color:var(--muted)] leading-relaxed">{item.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[color:var(--muted)]/30 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center">
              <ChevronDown className="w-8 h-8 text-[color:var(--muted)]/30 animate-bounce" />
            </div>

            {/* Step 4: Security Model - Grid with accent colors */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-3">Desktop and Web AaaS Wallet Model</h3>
                <p className="max-w-2xl mx-auto text-[color:var(--muted)] text-base leading-relaxed">
                  The security boundary follows the wallet architecture proposal: local signing for Desktop, MPC-assisted delegation for Web AaaS, and risk-first control before any write path reaches the chain.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityItems.map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[color:var(--accent)]/30"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${item.glow}08, transparent)` }} />
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-2)] group-hover:scale-110 transition-transform duration-300">
                        <item.icon className={`h-6 w-6 ${item.accent}`} />
                      </div>
                      <h4 className="mb-3 font-semibold text-[color:var(--foreground)] text-lg">{item.title}</h4>
                      <p className="text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

const StatPill = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2">
      <span className="text-lg font-semibold text-[color:var(--foreground)]">{value}</span>
      <span className="ml-2 text-sm text-[color:var(--muted)]">{label}</span>
    </div>
  );
};

function EthereumIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="#8A92B2" d="M16 2 9.9 16l6.1-3.8 6.1 3.8z" />
      <path fill="#627EEA" d="M16 2v10.2l6.1 3.8z" />
      <path fill="#62688F" d="M16 30 9.9 18.4 16 22z" />
      <path fill="#454A75" d="M16 30V22l6.1-3.6z" />
    </svg>
  );
}

function SolanaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="4" y="6" width="24" height="5" rx="2.5" fill="#14F195" transform="skewX(-18)" />
      <rect x="4" y="14" width="24" height="5" rx="2.5" fill="#80ECFF" transform="skewX(-18)" />
      <rect x="4" y="22" width="24" height="5" rx="2.5" fill="#9945FF" transform="skewX(-18)" />
    </svg>
  );
}

function SuiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="none" stroke="#6FD6FF" strokeWidth="2" />
      <path d="M12 16l4-4 4 4-4 4z" fill="#6FD6FF" />
    </svg>
  );
}

function AppChainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="2" fill="#4F46E5" />
      <rect x="18" y="4" width="10" height="10" rx="2" fill="#4F46E5" opacity="0.7" />
      <rect x="4" y="18" width="10" height="10" rx="2" fill="#4F46E5" opacity="0.7" />
      <rect x="18" y="18" width="10" height="10" rx="2" fill="#4F46E5" opacity="0.5" />
    </svg>
  );
}

function UniswapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="none" stroke="#FF007A" strokeWidth="2" />
      <circle cx="12" cy="16" r="3" fill="#FF007A" />
      <circle cx="20" cy="16" r="3" fill="#FF007A" />
    </svg>
  );
}

function JupiterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="#FBAA4C" />
      <path d="M10 16h12M16 10v12" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function AaveIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 4l-8 24h16z" fill="#B6509E" />
      <path d="M16 12l-4 12h8z" fill="white" opacity="0.3" />
    </svg>
  );
}

function DerivativesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4 24l8-8 4 4 12-12" fill="none" stroke="#4F46E5" strokeWidth="2" />
      <circle cx="28" cy="8" r="2" fill="#4F46E5" />
    </svg>
  );
}
