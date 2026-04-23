import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Ecosystem } from '@/components/Ecosystem';
import { BlockchainDefiEcosystem } from '@/components/BlockchainDefiEcosystem';
import { TradFiEcosystem } from '@/components/TradFiEcosystem';
import { Capabilities } from '@/components/Capabilities';
import { Footer } from '@/components/Footer';
import { Cta } from '@/components/Cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BlockchainDefiEcosystem />
      <TradFiEcosystem />
      <Ecosystem />
      <Capabilities />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
}
