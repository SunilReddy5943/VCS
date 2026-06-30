'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import homeData from '@/content/home.json';
import { cn } from '@/lib/utils';

export default function StaffAugmentationProcess() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const { title, subtitle, quickFacts, hiringApproach } = homeData.staffAugmentation;
  const activeStep = hiringApproach[activeStepIdx];

  return (
    <section id="staff-augmentation" className="relative py-28 bg-white border-b border-[#E5E8F0] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.02)_0%,transparent_50%)] pointer-events-none" />
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#EC4899] bg-[#EC4899]/5 px-3 py-1 rounded-full">
            05 / Expert Resource Delivery
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mt-4 mb-6 leading-tight flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse flex-shrink-0" />
            {title}
          </h2>
          <p className="text-lg text-[#4B5563]">
            {subtitle}
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {quickFacts.map((fact, idx) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: '#EC4899' }}
              className="p-6 rounded-2xl bg-white border border-[#E5E8F0] hover:shadow-elevated hover:border-[#EC4899]/30 transition-all duration-300 card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EC4899]/10 text-[#EC4899] flex items-center justify-center font-bold mb-4 group-hover:bg-[#EC4899] group-hover:text-white transition-colors duration-300">
                {idx === 0 && '🎯'}
                {idx === 1 && '💼'}
                {idx === 2 && '⚙️'}
                {idx === 3 && '🎓'}
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">{fact.title}</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">{fact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pipeline Title */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-[#111827] uppercase tracking-wider">
            Our 6-Step Vetting & Hiring Approach
          </h3>
          <p className="text-sm text-[#4B5563] mt-2">
            Click on a step below to explore our detailed screening filters.
          </p>
        </div>

        {/* Desktop Pipeline (Horizontal flow) */}
        <div className="hidden lg:block relative min-h-[140px] mb-8">
          {/* SVG Connector track */}
          <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none" viewBox="0 0 1000 10" preserveAspectRatio="none">
            <line x1="0" y1="5" x2="1000" y2="5" stroke="#E5E8F0" strokeWidth="2" />
            <motion.line
              x1="0"
              y1="5"
              x2={(activeStepIdx / (hiringApproach.length - 1)) * 1000}
              y2="5"
              stroke="#EC4899"
              strokeWidth="3"
              className="transition-all duration-500"
            />
          </svg>

          {/* Steps node row */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {hiringApproach.map((item, idx) => {
              const isActive = idx === activeStepIdx;
              const isPast = idx < activeStepIdx;

              return (
                <div key={item.step} className="flex flex-col items-center relative z-20">
                  <button
                    onClick={() => setActiveStepIdx(idx)}
                    className={cn(
                      'w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 outline-none focus:ring-2 focus:ring-[#EC4899]/50',
                      isActive
                        ? 'bg-white border-[#EC4899] text-[#EC4899] shadow-lg scale-110'
                        : isPast
                        ? 'bg-[#EC4899] border-[#EC4899] text-white'
                        : 'bg-white border-[#E5E8F0] text-[#4B5563] hover:border-[#9CA3AF]'
                    )}
                  >
                    {item.step}
                  </button>
                  <span
                    className={cn(
                      'absolute -bottom-7 whitespace-nowrap text-xs font-semibold tracking-wider uppercase transition-colors duration-300',
                      isActive ? 'text-[#EC4899]' : 'text-[#4B5563]'
                    )}
                  >
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stepper (Vertical stack) */}
        <div className="lg:hidden space-y-3 mb-8">
          {hiringApproach.map((item, idx) => {
            const isActive = idx === activeStepIdx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIdx(idx)}
                className={cn(
                  'w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300',
                  isActive
                    ? 'bg-[#EC4899]/5 border-[#EC4899] shadow-sm'
                    : 'bg-white border-[#E5E8F0] hover:border-[#9CA3AF]'
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border',
                      isActive ? 'bg-[#EC4899] text-white border-[#EC4899]' : 'bg-[#F7F9FC] text-[#4B5563] border-[#E5E8F0]'
                    )}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4 className={cn('text-sm font-bold', isActive ? 'text-[#EC4899]' : 'text-[#111827]')}>
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-[#4B5563]/60 uppercase tracking-widest font-semibold">{item.badge}</span>
                  </div>
                </div>
                <svg
                  className={cn('w-4 h-4 text-[#4B5563] transition-transform duration-300', isActive ? 'rotate-90 text-[#EC4899]' : '')}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Detailed Information Panel */}
        <div className="bg-[#F7F9FC] rounded-3xl border border-[#E5E8F0] p-8 md:p-10 min-h-[280px] shadow-sm relative overflow-hidden">
          {/* Glowing node decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EC4899]/5 to-transparent rounded-bl-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Description */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EC4899] bg-[#EC4899]/10 px-2.5 py-1 rounded-md">
                    Phase {activeStep.step} / {activeStep.badge}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#111827] mb-4">
                  {activeStep.title}
                </h4>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed mb-6">
                  {activeStep.description}
                </p>
              </div>

              {/* Right Column: Key Activities / Deliverables */}
              <div className="md:col-span-5 bg-white border border-[#E5E8F0] p-6 rounded-2xl shadow-subtle">
                <h5 className="text-xs font-bold uppercase tracking-widest text-[#EC4899] mb-4">
                  Key Activities & Outputs
                </h5>
                <ul className="space-y-3.5">
                  {activeStep.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-xs text-[#4B5563] leading-relaxed">
                      <svg className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
