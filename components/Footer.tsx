'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';
import { Mail, X } from 'lucide-react';
import { Tooltip } from './Tooltip';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-[color:var(--line)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-semibold tracking-tight text-[color:var(--foreground)] font-[family:var(--font-display)]">
                SumAlpha
              </span>
            </div>

            <div className="flex gap-6">
              <Link href="https://x.com/SumAlphaAI" target="_blank" className="flex justify-center items-center text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition duration-150 ease-in-out" aria-label="X">
                <X className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/SumAlphaAI" target="_blank" className="flex justify-center items-center text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition duration-150 ease-in-out" aria-label="Github">
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Tooltip content="hello@sumalpha.ai">
                <Link href="#" onClick={(e) => e.preventDefault()} className="flex justify-center items-center text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition duration-150 ease-in-out" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </Link>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[color:var(--muted)]">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[color:var(--foreground)] transition-colors">{t.footer.privacy}</Link>
              <Link href="/terms" className="hover:text-[color:var(--foreground)] transition-colors">{t.footer.terms}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
