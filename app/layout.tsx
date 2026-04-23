import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SumAlpha - The Sum of All Alpha',
  description: 'Automated asset management matrix bridging Web3 DeFi and Traditional Finance. Maximize your edge with SumAlpha AaaS and an Open Skill Ecosystem.',
  keywords: ['DeFi', 'Asset Management', 'TradFi', 'Alpha', 'Yield', 'Crypto', 'Web3', 'Agent'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100 tracking-tight selection:bg-purple-500/30 selection:text-white overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
