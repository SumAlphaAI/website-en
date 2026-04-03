'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SumAlpha Privacy Policy</h1>
            <p className="text-xl text-slate-400">Last updated: February 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                SumAlpha (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our ecosystem, including the SumAlpha desktop app and SumAlpha Pro platform. By using our services, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Architecture & Data Security</h2>
              <p className="mb-4">
                Our architecture is designed with &quot;Security by Design&quot; principles, ensuring that your assets and sensitive data are protected across both local and cloud environments.
              </p>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/5 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">SumAlpha Desktop APP</h3>
                  <p>
                    For users of our desktop application, your private keys are stored <strong>locally on your device</strong> in an encrypted format. We do not have access to your local keys, and all transactions are signed locally before being broadcast to the blockchain.
                  </p>
                </div>
                
                <div className="w-full h-px bg-white/10 my-4" />
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">SumAlpha Pro Platform</h3>
                  <p>
                    For our AaaS (Agent as a Service) platform, we utilize <strong>MPC (Multi-Party Computation)</strong> and <strong>TEE (Trusted Execution Environments)</strong>. This ensures that:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
                    <li>Private keys are sharded; we never hold the full key in plain text.</li>
                    <li>Execution logic is verified within a secure sandbox.</li>
                    <li>You retain control over your asset authorization.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Collection</h2>
              <p className="mb-4">We collect the following types of information to provide our automated asset management services:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>Market Data (Perception Layer):</strong> We aggregate public data from blockchain nodes, DeFi aggregators, and Web2 markets (stocks, news) via our MCP (Model Context Protocol) servers. This data is public and not linked to your personal identity.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect anonymous usage statistics, error logs, and performance metrics to improve our Agents (Alice, Bob, Cindy, David) and their skills.
                </li>
                <li>
                  <strong>Contact Information:</strong> If you sign up for our waitlist or contact support, we collect your email address.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Your Information</h2>
              <p>We use the collected data to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-300">
                <li>Execute automated strategies and risk management protocols.</li>
                <li>Monitor the health of the ecosystem and prevent malicious activities.</li>
                <li>Train and evolve our &quot;Evolving Skills&quot; and &quot;Factor Mining&quot; algorithms.</li>
                <li>Send you important updates regarding the service or your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Integration</h2>
              <p>
                SumAlpha integrates with various third-party protocols and services (e.g., Uniswap, Aave, CEX APIs). When you authorize our Agents to interact with these services, your transaction data will be subject to the privacy policies of those respective third parties. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <span className="text-purple-400">hello@sumalpha.ai</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
