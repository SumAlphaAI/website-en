'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export const Navbar = () => {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Close mobile menu on escape key
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#ecosystem', label: t.nav.ecosystem },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Link href="/" className="inline-flex" aria-label="SumAlpha">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200">
                SumAlpha
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-center flex-wrap items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 hidden md:flex justify-end items-center gap-6">
            <li>
              <Link
                href="#"
                className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none btn-gradient"
              >
                <span className="relative inline-flex items-center">
                  {t.nav.launchApp}
                </span>
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center ml-4">
            
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transition ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect 
                  className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] ${mobileNavOpen ? 'rotate-[315deg] translate-y-0' : ''}`} 
                  y="7" width="16" height="2" rx="1" 
                />
                <rect 
                  className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${mobileNavOpen ? 'rotate-45' : ''}`} 
                  y="7" width="16" height="2" rx="1" 
                />
                <rect 
                  className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] ${mobileNavOpen ? 'rotate-[135deg] translate-y-0' : ''}`} 
                  y="7" width="16" height="2" rx="1" 
                />
              </svg>
            </button>

            {/* Mobile navigation */}
            <div
              ref={mobileNav}
              id="mobile-nav"
              className={`absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${mobileNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-80'}`}
            >
              <ul className="border border-transparent rounded-lg px-4 py-1.5 btn-gradient">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                    <Link
                      href="#"
                      className="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {t.nav.launchApp}
                    </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
