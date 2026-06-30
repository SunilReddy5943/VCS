'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { mainNavLinks, ctaLink } from '@/config/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      if (currentY > 200) {
        setIsHidden(currentY > lastScrollY && currentY - lastScrollY > 10);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle Cmd+K trigger click to open search
  const triggerSearch = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  const isDarkPage = pathname === '/' || pathname === '/salesforce' || pathname === '/contact';
  const isDarkTheme = isDarkPage;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? (isDarkPage
              ? 'bg-[#0B1D3A]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] py-3'
              : 'bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-subtle py-3')
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-vcs flex items-center justify-between" aria-label="Main navigation">
        {/* Adaptive Node Logo Symbol */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="VCS Home">
          <div className="relative w-10 h-10 flex items-center justify-center bg-transparent">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
              {/* Outer boundary grid */}
              <circle cx="20" cy="20" r="18" stroke={isDarkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 87, 255, 0.05)"} strokeWidth="1" />
              <line x1="20" y1="2" x2="20" y2="38" stroke={isDarkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 87, 255, 0.05)"} strokeWidth="1" />
              <line x1="2" y1="20" x2="38" y2="20" stroke={isDarkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 87, 255, 0.05)"} strokeWidth="1" />

              {/* Connected node lines */}
              {/* Path 1: Top-Left to Center */}
              <path d="M10 10 L20 20" stroke="#0057FF" strokeWidth="2.5" strokeLinecap="round" />
              {/* Path 2: Bottom-Left to Center */}
              <path d="M10 30 L20 20" stroke="#00D5FF" strokeWidth="2.5" strokeLinecap="round" />
              {/* Path 3: Right Center to Center */}
              <path d="M30 20 L20 20" stroke={isDarkTheme ? "#8B5CF6" : "#071A52"} strokeWidth="2.5" strokeLinecap="round" />

              {/* Endpoints */}
              <circle cx="10" cy="10" r="2.5" fill="#0057FF" />
              <circle cx="10" cy="30" r="2.5" fill="#00D5FF" />
              <circle cx="30" cy="20" r="2.5" fill={isDarkTheme ? "#8B5CF6" : "#071A52"} />

              {/* Central Adaptive Node */}
              <circle cx="20" cy="20" r="4.5" fill="#0057FF" className="animate-pulse" />
              <circle cx="20" cy="20" r="2" fill="#FFFFFF" />
            </svg>
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isDarkTheme
              ? "text-white group-hover:text-[#00D5FF]"
              : "text-text-primary group-hover:text-primary-500"
          )}>
            VCS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative',
                  pathname === link.href
                    ? (isDarkTheme ? 'text-[#00D5FF] bg-white/10' : 'text-primary-500 bg-primary-50/50')
                    : (isDarkTheme ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-text-secondary hover:text-text-primary hover:bg-surface-soft')
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className={cn("w-px h-6", isDarkTheme ? "bg-white/10" : "bg-border-light")} />

          {/* Cmd+K Search Trigger */}
          <button
            onClick={triggerSearch}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs",
              isDarkTheme
                ? "border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20"
                : "border-border-light bg-surface-light text-text-muted hover:text-text-primary hover:border-border-medium"
            )}
            title="Search (Cmd+K)"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
            <kbd className={cn(
              "hidden sm:inline-block px-1.5 py-0.5 rounded border text-[10px] font-sans font-medium",
              isDarkTheme
                ? "bg-white/10 border-white/20 text-slate-400"
                : "bg-white border-border-light text-text-disabled"
            )}>
              ⌘K
            </kbd>
          </button>

          {/* Book Consultation CTA */}
          <Link
            href={ctaLink.href}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          >
            {ctaLink.label}
          </Link>
        </div>

        {/* Mobile Hamburger menu */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Cmd+K Search Trigger */}
          <button
            onClick={triggerSearch}
            className={cn(
              "p-2 rounded-lg border",
              isDarkTheme
                ? "border-white/10 bg-white/5 text-slate-300"
                : "border-border-light bg-surface-light text-text-muted"
            )}
            aria-label="Search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 rounded-lg",
              isDarkTheme
                ? "text-slate-300 hover:text-white hover:bg-white/5"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-soft"
            )}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 border-t border-border-light bg-white shadow-lg p-6 flex flex-col gap-4 lg:hidden"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-semibold text-text-secondary hover:text-text-primary py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink.href}
            className="flex items-center justify-center w-full py-3 mt-2 bg-primary-500 text-white font-semibold rounded-xl"
          >
            {ctaLink.label}
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
