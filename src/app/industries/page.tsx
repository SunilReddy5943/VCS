'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { industries } from '@/content/industries';

export default function IndustriesPage() {
  const [activeId, setActiveId] = useState('financial-services');
  const active = industries.find(i => i.id === activeId) || industries[0];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">Industries</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Industry-Specific<br /><span className="text-gradient">Salesforce Cloud Solutions</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl">Tailored enterprise CRM and industry vertical solutions built for certified compliance and acceleration.</p>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs">
          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map(ind => (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeId === ind.id 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'bg-surface-soft text-text-secondary hover:bg-primary-50'
                }`}
              >
                <span className="text-lg">
                  {ind.id === 'financial-services' && '🏦'}
                  {ind.id === 'retail-commerce' && '🛍️'}
                  {ind.id === 'government' && '🏛️'}
                  {ind.id === 'communications' && '📞'}
                  {ind.id === 'healthcare' && '🏥'}
                  {ind.id === 'manufacturing' && '⚙️'}
                </span> 
                {ind.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto bg-surface-soft border border-border-light rounded-3xl p-8 shadow-sm"
            >
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2 block">Active Sector Spec</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">{active.name}</h2>
                <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">{active.description}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {active.metrics.map(m => (
                  <div key={m.label} className="text-center p-6 bg-white border border-border-light rounded-2xl shadow-sm">
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1" style={{ backgroundImage: 'linear-gradient(to right, #0057FF, #6366F1)' }}>{m.value}{m.suffix}</div>
                    <div className="text-xs text-text-muted uppercase font-semibold tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-text-primary uppercase tracking-wider text-xs">Sector Challenges</h3>
                  <div className="space-y-3">
                    {active.challenges.map(c => (
                      <div key={c} className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                        <span className="text-sm font-medium text-text-primary leading-normal">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-text-primary uppercase tracking-wider text-xs">VCS Solutions</h3>
                  <div className="space-y-3">
                    {active.solutions.map(s => (
                      <div key={s.title} className="p-4 bg-white rounded-xl border border-border-light shadow-sm">
                        <h4 className="font-bold text-text-primary mb-1 text-sm">{s.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 to-primary-800 text-center">
        <div className="container-vcs">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Build a Compliant CRM Platform</h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">Contact VCS consultants to start mapping your industry specific architecture today.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg">Request Consultation</Link>
        </div>
      </section>
    </>
  );
}
