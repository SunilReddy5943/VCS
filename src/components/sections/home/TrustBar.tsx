'use client';

import { motion } from 'motion/react';

const industries = [
  'Global Banking & Finance',
  'Enterprise Retail',
  'Government & Public Sector',
  'Healthcare & Life Sciences',
  'Telecommunications',
  'Technology & SaaS',
  'Manufacturing',
  'Insurance & Risk',
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-surface-light border-y border-border-light overflow-hidden">
      <div className="container-vcs mb-8">
        <p className="text-center text-sm font-medium text-text-muted uppercase tracking-wider">
          Trusted by leading enterprises across industries
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-light to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...industries, ...industries].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center gap-3 group"
            >
              {/* Placeholder logo */}
              <div className="w-10 h-10 rounded-lg bg-surface-muted/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-text-disabled" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-sm font-medium text-text-disabled whitespace-nowrap group-hover:text-text-muted transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
