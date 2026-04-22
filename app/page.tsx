import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Ecosystem } from '@/components/Ecosystem';
import { BlockchainDefiEcosystem } from '@/components/BlockchainDefiEcosystem';
import { Capabilities } from '@/components/Capabilities';
import { Footer } from '@/components/Footer';
import { Cta } from '@/components/Cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Ecosystem />
      <BlockchainDefiEcosystem />
      <Capabilities />
      <Cta />
      <Footer />
    </main>
  );
}
