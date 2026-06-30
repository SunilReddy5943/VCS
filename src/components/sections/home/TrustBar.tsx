'use client';

import { motion } from 'motion/react';

interface Brand {
  name: string;
  industry: string;
  gradient: string;
  logo: React.ReactNode;
}

const brands: Brand[] = [
  {
    name: 'Apex Financial',
    industry: 'Banking & Finance',
    gradient: 'from-[#F59E0B] to-[#D97706]',
    logo: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  },
  {
    name: 'MediCore',
    industry: 'Healthcare & Biotech',
    gradient: 'from-[#10B981] to-[#059669]',
    logo: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  },
  {
    name: 'Nexus Retail',
    industry: 'E-Commerce',
    gradient: 'from-[#EC4899] to-[#F43F5E]',
    logo: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  },
  {
    name: 'CloudScale',
    industry: 'SaaS & Tech',
    gradient: 'from-[#0057FF] to-[#00D5FF]',
    logo: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19A5.5 5.5 0 0 0 18 8.02a7.5 7.5 0 1 0-14.71 1.03A6 6 0 0 0 5 21h12.5a4 4 0 0 0 0-8Z" />
      </svg>
    )
  },
  {
    name: 'AeroSpace',
    industry: 'Logistics',
    gradient: 'from-[#8B5CF6] to-[#6366F1]',
    logo: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 2.74-2 3.5.76 0 2.24-.5 3.5-2" />
        <path d="M12 3v13h4" />
        <path d="m12 3 8 8h-8" />
        <path d="M12 3 4 11h8" />
      </svg>
    )
  },
  {
    name: 'BioLife',
    industry: 'Life Sciences',
    gradient: 'from-[#06B6D4] to-[#0891B2]',
    logo: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2.96-1.29-6.66-7-11-5.71 4.34-7 8.04-7 11a7 7 0 0 0 7 7Z" />
        <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    )
  }
];

export default function TrustBar() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white border-y border-[#E5E8F0] overflow-hidden relative">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-[#0057FF]/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-24 bg-[#00D5FF]/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container-vcs mb-12 text-center relative z-10">
        <span className="badge-premium-blue mb-4">
          Trusted Partner
        </span>
        <h3 className="text-xl md:text-2xl font-extrabold text-[#111827] tracking-tight">
          Powering <span className="text-gradient">Industry Leaders</span> Globally
        </h3>
        <p className="text-xs md:text-sm text-[#6B7280] mt-2">
          Empowering enterprises across major verticals with scalable Salesforce environments.
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative z-10">
        {/* Soft fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] py-4">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center gap-4 px-6 py-3 bg-white border border-[#E5E8F0] rounded-2xl shadow-subtle hover:border-[#0057FF]/20 hover:shadow-card transition-all duration-300 group cursor-pointer"
            >
              {/* Logo Container with custom gradient */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                {brand.logo}
              </div>
              
              {/* Text info */}
              <div>
                <span className="block text-sm font-bold text-[#111827] group-hover:text-[#0057FF] transition-colors">
                  {brand.name}
                </span>
                <span className="block text-[10px] font-semibold text-[#6B7280]">
                  {brand.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
