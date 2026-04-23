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
      description: 'The automated asset management matrix bridging Web3 DeFi and Traditional Finance. Powered by an AaaS (Agent as a Service) architecture, we seamlessly integrate MPC execution, an Open Skill Ecosystem, and the Multi-Agent Quad-Squad to maximize your edge across all markets.',
      getStarted: 'Get Started',
      readDocs: 'Read Docs',
    },
    features: {
      description: 'From stable yields to alpha discovery, SumAlpha provides a complete asset management matrix.',
    },
    valueProp: {
      yield: {
        title: 'SumAlpha Desktop',
        subtitle: 'SumAlpha Basic (Free)',
        description: 'Built-in desktop modules tailored for geeks, DeFi retail users, and junior developers. Focuses on low-risk compounding and on-chain crypto interactions.',
        list: [
          'Auto-Compounding',
          'Rate Arbitrage Lending',
          'Stablecoin Peg-Guard',
        ],
      },
      alpha: {
        title: 'SumAlpha Desktop & Web AaaS',
        subtitle: 'SumAlpha Pro (Subscription)',
        description: 'Advanced ecosystem for institutions and professional traders. Unlocks Python/Node.js Sidecars for multi-market edge discovery across Crypto, Stocks, and Derivatives.',
        list: [
          'Cross-Market Arbitrage',
          'AI-Factor Mining',
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
    tradFi: {
      tag: 'SumAlpha Traditional Finance Ecosystem',
      title: 'Advanced AI Trading in Traditional Finance',
      description: 'SumAlpha applies its advanced multi-agent framework to traditional finance, analyzing global equities, derivatives, and macro markets to uncover edge and alpha.',
      categories: {
        data: {
          title: 'Data & Narrative',
          desc: 'Global Equities Market Data, Real-time Macro Events, and Semantic Sentiment Tracking.',
        },
        quant: {
          title: 'Quantitative Models',
          desc: 'Time-Series Market Forecasting, DCF Valuation, and AI-Factor Mining.',
        },
        exec: {
          title: 'Master Personas',
          desc: 'Simulate decision logic from 10+ investment masters through multi-agent orchestration.',
        },
        research: {
          title: 'Deep Research',
          desc: 'Auto-generated comprehensive stock analysis covering technicals and fundamentals.',
        }
      }
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
