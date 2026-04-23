import type { ComponentType } from 'react';
import { ShieldCheck, LockKeyhole, Workflow, Wallet, Search, CreditCard, Code2 } from 'lucide-react';

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

const advancedCapabilities = [
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
    accent: 'text-cyan-400',
  },
  {
    title: 'Local Vault Boundary',
    description: 'Private keys stay inside a local Vault with encrypted storage and no server-side plaintext exposure.',
    icon: Wallet,
    accent: 'text-emerald-400',
  },
  {
    title: 'MPC + Risk Gate',
    description: 'Privy-backed MPC delegation and Cindy risk review sit in front of every write action.',
    icon: ShieldCheck,
    accent: 'text-purple-400',
  },
  {
    title: 'Private Sandbox',
    description: 'Execution remains inside isolated runtime boundaries before signing and broadcast.',
    icon: Workflow,
    accent: 'text-amber-400',
  },
];

export const BlockchainDefiEcosystem = () => {
  return (
    <section id="blockchain-defi" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-cyan-500/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-purple-500/10 to-transparent" />
        <div className="absolute left-1/2 top-10 h-80 w-full max-w-5xl -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-32 h-72 w-full max-w-4xl -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              SumAlpha Blockchain &amp; DeFi Ecosystem
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-100 to-slate-200/60 pt-6 pb-4">
              Multi-chain aggregation with a one-stop DeFi entry point
            </h2>
            <p className="text-lg text-slate-400">
              Bridging major EVM networks, Solana, and Sui, our infrastructure unifies deep DeFi integration, intent-driven skill discovery, and MPC-backed secure execution into a single, powerful gateway.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <StatPill label="Chains Supported" value="15" />
            <StatPill label="DeFi Protocols" value="30" />
            <StatPill label="Agent Skills" value="45" />
          </div>

          <div className="mt-12 grid gap-6">
            <EcosystemCard
              title="Mainnet Coverage"
              description="Comprehensive support spanning major EVM networks, high-performance L1s like Solana and Sui, plus specialized app chains, providing a unified multi-chain foundation."
              items={liveChains}
            />
            <EcosystemCard
              title="DeFi Protocol Surface"
              description="A unified set of execution and unsigned transaction building logic tailored for DeFi protocols, spanning DEXs, aggregators, lending, and derivatives."
              items={liveProtocols}
            />
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_60px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="pt-2 text-2xl font-bold text-slate-100">Advanced Capability Matrix</h3>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                Core infrastructure providing deep protocol integration, semantic skill retrieval, dynamic SOPs, multi-chain transaction building, and secure Web3 delegation.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {advancedCapabilities.map((item) => (
                <CapabilityCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_60px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="pt-2 text-2xl font-bold text-slate-100">Desktop and Web AaaS wallet model</h3>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                The security boundary follows the wallet architecture proposal: local signing for Desktop, MPC-assisted delegation
                for Web AaaS, and risk-first control before any write path reaches the chain.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {securityItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-colors duration-200 hover:border-slate-700"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-colors group-hover:border-slate-700">
                      <item.icon className={`h-5 w-5 ${item.accent}`} />
                    </div>
                    <h4 className="mb-2 font-semibold text-slate-100">{item.title}</h4>
                    <p className="text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10 ${item.accent.replace('text-', 'bg-')}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type CapabilityItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const CapabilityCard = ({ item }: { item: CapabilityItem }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-colors duration-200 hover:border-slate-700">
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-colors group-hover:border-slate-700">
          <item.icon className="h-5 w-5" style={{ color: item.color }} />
        </div>
        <h4 className="mb-2 font-semibold text-slate-100">{item.title}</h4>
        <p className="text-sm leading-6 text-slate-400">
          {item.description}
        </p>
      </div>
      <div 
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10"
        style={{ backgroundColor: item.color }}
      />
    </div>
  );
};

const EcosystemCard = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: BrandItem[];
}) => {
  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.35)] backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="pt-2 text-2xl font-bold text-slate-100">{title}</h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>

      <div className="-mx-2 mt-6 overflow-x-auto px-2 pb-2">
        <div className="grid min-w-[20rem] grid-cols-1 gap-3 sm:grid-cols-2 md:min-w-0">
          {items.map((item) => (
            <BrandPanel key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BrandPanel = ({ item }: { item: BrandItem }) => {
  return (
    <div
      className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:border-slate-700"
      style={{
        boxShadow: `inset 0 0 0 1px ${item.color}12`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900"
          style={{
            boxShadow: `0 0 0 1px ${item.color}22, 0 0 24px ${item.color}20`,
          }}
        >
          <item.icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-100">{item.name}</h4>
          <p className="mt-1 text-xs leading-5 text-slate-400">{item.summary}</p>
        </div>
      </div>
    </div>
  );
};

const StatPill = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2">
      <span className="text-lg font-semibold text-slate-100">{value}</span>
      <span className="ml-2 text-sm text-slate-400">{label}</span>
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

function UniswapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#FF007A" opacity="0.18" />
      <path
        fill="#FF007A"
        d="M20.6 8.2c-1.3-1.2-3.3-1.3-4.6-.1-.4.4-.7.8-.9 1.3l-2.7 5.2c-.6 1.1-.5 2.5.2 3.5l1.8 2.5c1.4 1.9 4.2 2.3 6.1.9l1.3-.9-1.3-1.8-1.3.9c-.9.7-2.2.5-2.8-.4l-1.8-2.5c-.3-.4-.4-1-.1-1.5l2.7-5.2c.3-.6 1.1-.8 1.6-.4.5.4.6 1 .4 1.6l-.5 1.2 2.2.8.5-1.2c.7-1.7.3-3.6-.8-4.9z"
      />
      <path fill="#FF9BCB" d="M22.3 7.6 24.7 6l-.4 2.8 2.4.5-2.3 1.4.6 2.7-2.1-1.8-2.1 1.6.8-2.7-2.2-1.6 2.6-.3z" />
    </svg>
  );
}

function JupiterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#10131B" />
      <path d="M8 12c3.3-2 12.5-2.2 16 0" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M7.5 16.2c3.7 1.8 12.8 1.8 17 0" stroke="#A855F7" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M8.5 20.4c4.1 1.9 11.6 1.8 15 0" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="24.8" cy="9.2" r="1.6" fill="#F8FAFC" />
    </svg>
  );
}

function SuiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="#4CA2FF" d="M16 2L3.5 9v14L16 30l12.5-7V9L16 2z" />
      <path fill="#FFFFFF" d="M16 8l8 4.5v7L16 24l-8-4.5v-7L16 8z" />
    </svg>
  );
}

function AppChainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="none" stroke="#4F46E5" strokeWidth="2" />
      <path fill="#4F46E5" d="M16 6a10 10 0 100 20 10 10 0 000-20zm0 16a6 6 0 110-12 6 6 0 010 12z" />
    </svg>
  );
}

function AaveIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="#B6509E" d="M16 2L3 26h5l2.5-4.5h11L24 26h5L16 2zm0 6l4 7h-8l4-7z" />
    </svg>
  );
}

function DerivativesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="#4F46E5" d="M4 24V8h6v16H4zm9-8V8h6v8h-6zm9-6V4h6v6h-6z" />
      <path fill="#818CF8" d="M2 28h28v2H2z" />
    </svg>
  );
}
