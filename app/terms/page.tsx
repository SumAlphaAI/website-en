'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SumAlpha Terms of Service</h1>
            <p className="text-xl text-slate-400">Last updated: February 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the SumAlpha ecosystem, including the SumAlpha desktop app and the SumAlpha Pro platform (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, you may not access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                SumAlpha provides an automated asset management matrix bridging Web2 and Web3. The Service consists of two main components:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>SumAlpha Basic (The Foundation):</strong> A desktop-based tool for local execution of low-risk compounding strategies.
                </li>
                <li>
                  <strong>SumAlpha Pro (The Expansion):</strong> A cloud-based Agent as a Service (AaaS) platform for advanced cross-market strategies and multi-agent collaboration.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities & Security</h2>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-white/5 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Self-Custody (SumAlpha Basic)</h3>
                  <p>
                    When using SumAlpha Basic, you retain full custody of your private keys, which are stored locally on your device. You are solely responsible for securing your device and backing up your keys. SumAlpha has no access to your local keys and cannot recover funds if you lose access.
                  </p>
                </div>
                
                <div className="w-full h-px bg-white/10 my-4" />
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Platform Authorization (SumAlpha Pro)</h3>
                  <p>
                    When using SumAlpha Pro, you may authorize our Agents to execute trades on your behalf via MPC (Multi-Party Computation) wallets or API keys. You acknowledge that while we employ TEE (Trusted Execution Environments) for security, you are responsible for monitoring your account activity.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Risks & Disclaimers</h2>
              <p className="mb-4">
                Trading in cryptographic assets and financial markets involves a high degree of risk.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>Software &quot;As Is&quot;:</strong> The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind.
                </li>
                <li>
                  <strong>Market Risk:</strong> Our AI Agents (Alice, Bob, Cindy, David) use advanced algorithms and historical data, but they cannot predict future market movements with certainty. You may incur losses.
                </li>
                <li>
                  <strong>Smart Contract Risk:</strong> Interaction with DeFi protocols carries inherent risks of smart contract bugs or exploits. SumAlpha is not responsible for losses caused by third-party protocol failures.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Fees & Payments</h2>
              <p>
                By using SumAlpha Pro, you agree to our fee structure, which may include subscription fees and/or performance-based fees on generated alpha. Specific fee details are provided on the platform dashboard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Modifications to Service</h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at <span className="text-purple-400">hello@sumalpha.ai</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
