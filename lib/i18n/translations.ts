export type Language = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      ecosystem: 'Ecosystem',
      features: 'Features',
      capabilities: 'Capabilities',
      contact: 'Contact',
      launchApp: 'Launch App',
    },
    hero: {
      title: 'SumAlpha',
      slogan: 'The Sum of All Alpha',
      description: 'The automated asset management matrix bridging Web2 and Web3. Powered by AaaS (Agent as a Service) architecture, we integrate MCP data perception and modular Skills to aggregate strategies across all markets, maximizing your returns through the Quad-Squad multi-agent collaboration.',
      getStarted: 'Get Started',
      readDocs: 'Read Docs',
    },
    features: {
      description: 'From stable yields to alpha discovery, SumAlpha provides a complete asset management matrix.',
    },
    valueProp: {
      yield: {
        title: 'SumAlpha Basic',
        subtitle: 'The Foundation (Free)',
        description: 'Built-in desktop tools for low-risk compounding. Focus on stable, automated yield generation via Staking and Lending.',
        list: [
          'Auto-Compounding',
          'Rate Arbitrage Lending',
          'Stablecoin Peg-Guard',
        ],
      },
      alpha: {
        title: 'SumAlpha Pro',
        subtitle: 'The Expansion (Paid)',
        description: 'Advanced AaaS platform unlocking Python Sidecars for cross-market arbitrage, high-frequency strategies, and multi-agent collaboration.',
        list: [
          'Cross-Market Arbitrage',
          'AI-Factor Mining (Python Sidecar)',
          'The Quad-Squad Collaboration',
        ],
      },
    },
    ecosystem: {
      title: 'Ecosystem Architecture',
      subtitle: 'Data Perception (MCP) + Strategy Logic (Skills) + Execution Runtime (Core)',
      layers: {
        perception: {
          title: 'Perception Layer',
          desc: 'Core Gateway acting as the "Eyes". Real-time data from Blockchain nodes, CEX, and Web2 markets via MCP.',
        },
        skills: {
          title: 'Skill Layer',
          desc: 'Feature Toggle managed Skills acting as the "Brain". From Rust Core Basic Skills to Python Sidecar Advanced Skills.',
        },
        execution: {
          title: 'Execution Layer',
          desc: 'Dual Delivery acting as the "Hands". Secure execution via SumAlpha Desktop (Tauri) and Web AaaS (Axum).',
        },
      },
    },
    agents: {
      title: 'The Multi-Agent Quad-Squad',
      subtitle: 'Autonomous Synergy & Human Co-Pilot',
      alice: {
        name: 'Alice',
        role: 'Intelligence Officer',
        desc: 'The eyes of the squad. Cleans data, monitors sentiment, and tracks narratives, feeding high-quality intelligence directly to Bob.',
      },
      bob: {
        name: 'Bob',
        role: 'Strategy Analyst',
        desc: 'The brain of the squad. Ingests Alice\'s intelligence for factor mining and code evolution, generating dynamic strategies for Cindy to evaluate.',
      },
      cindy: {
        name: 'Cindy',
        role: 'Risk Officer',
        desc: 'The conscience of the squad. Subjects Bob\'s strategies to rigorous backtesting and veto-based risk control, ensuring safe passage for David.',
      },
      david: {
        name: 'David',
        role: 'Trader',
        desc: 'The hands of the squad. Takes Cindy\'s approved parameters to execute trades flawlessly, optimizing gas and controlling slippage.',
      },
    },
    capabilities: {
      title: 'Platform Capabilities',
      subtitle: 'What SumAlpha Can Do',
      phases: {
        perception: {
          title: 'Perception',
          subtitle: 'Global Data & Narrative',
          desc: 'Real-time data acquisition and sentiment tracking across markets.',
          features: [
            'Real-time global financial data',
            'Macro narrative & sentiment analysis',
            'Structured document extraction',
            'Automated multi-channel market reports'
          ]
        },
        analysis: {
          title: 'Analysis',
          subtitle: 'Research & Strategy',
          desc: 'Advanced tools for quantitative backtesting and factor mining.',
          features: [
            'Professional strategy backtesting',
            'Market price trend forecasting',
            'Automated strategy factor mining',
            'One-click deep research reports'
          ]
        },
        execution: {
          title: 'Execution',
          subtitle: 'Cross-Market Trading',
          desc: 'Seamless execution across traditional finance and decentralized markets.',
          features: [
            'CeFi & DeFi trading integration',
            'Cross-network asset scheduling',
            'Early-stage asset discovery',
            'Smart cross-market order routing'
          ]
        },
        risk: {
          title: 'Risk Control',
          subtitle: 'Security & Compliance',
          desc: 'Multi-dimensional risk arbitration and secure sandbox execution.',
          features: [
            'Veto-based intelligent risk review',
            'Transaction stress testing',
            'Isolated execution sandbox',
            'High-availability auto-degradation'
          ]
        }
      }
    },
    cta: {
      title: 'Ready to maximize your Alpha?',
      descriptionLine1: 'Join the automated asset management revolution.',
      descriptionLine2: 'Start with SumAlpha Desktop today or request access to SumAlpha Pro.',
      download: 'Download SumAlpha Desktop',
      contact: 'Contact Sales',
    },
    footer: {
      copyright: '© 2026 SumAlpha. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};
