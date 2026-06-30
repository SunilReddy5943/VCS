'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import homeData from '@/content/home.json';
import { cn } from '@/lib/utils';

export default function ImplementationLifecycle() {
  const [activeTab, setActiveTab] = useState<'salesforce' | 'vlocity'>('salesforce');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const { title, subtitle, salesforce, vlocity } = homeData.implementationLifecycle;
  
  const currentLifecycle = activeTab === 'salesforce' ? salesforce : vlocity;
  const activeStage = currentLifecycle[activeStageIdx] || currentLifecycle[0];

  // Helper to handle tab switch
  const handleTabChange = (tab: 'salesforce' | 'vlocity') => {
    setActiveTab(tab);
    setActiveStageIdx(0);
  };

  const isSalesforce = activeTab === 'salesforce';
  const themeColor = isSalesforce ? '#0057FF' : '#06B6D4';
  const themeTextColor = isSalesforce ? 'text-[#0057FF]' : 'text-[#06B6D4]';
  const themeLightBg = isSalesforce ? 'bg-[#0057FF]/5' : 'bg-[#06B6D4]/5';

  return (
    <section id="lifecycle" className="relative py-28 bg-[#F7F9FC] border-b border-[#E5E8F0] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.02)_0%,transparent_50%)] pointer-events-none" />
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0057FF] bg-[#0057FF]/5 px-3 py-1 rounded-full">
            04 / Methodologies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mt-4 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-[#4B5563]">
            {subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white border border-[#E5E8F0] p-1.5 rounded-2xl flex gap-1 shadow-subtle relative z-20">
            <button
              onClick={() => handleTabChange('salesforce')}
              className={cn(
                'px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative',
                isSalesforce ? 'text-white' : 'text-[#4B5563] hover:text-[#111827]'
              )}
            >
              {isSalesforce && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-[#0057FF] rounded-xl z-0"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">Salesforce Lifecycle</span>
            </button>

            <button
              onClick={() => handleTabChange('vlocity')}
              className={cn(
                'px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative',
                !isSalesforce ? 'text-white' : 'text-[#4B5563] hover:text-[#111827]'
              )}
            >
              {!isSalesforce && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-[#06B6D4] rounded-xl z-0"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">Vlocity Lifecycle</span>
            </button>
          </div>
        </div>

        {/* Desktop Timeline Roadmap */}
        <div className="hidden lg:block relative min-h-[140px] mb-12">
          {/* Connector timeline track */}
          <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none" viewBox="0 0 1000 10" preserveAspectRatio="none">
            <line x1="0" y1="5" x2="1000" y2="5" stroke="#E5E8F0" strokeWidth="2" />
            <motion.line
              x1="0"
              y1="5"
              x2={(activeStageIdx / (currentLifecycle.length - 1)) * 1000}
              y2="5"
              stroke={themeColor}
              strokeWidth="3"
              className="transition-all duration-500"
            />
          </svg>

          {/* Timeline Nodes */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {currentLifecycle.map((stage, idx) => {
              const isActive = idx === activeStageIdx;
              const isPast = idx < activeStageIdx;

              return (
                <div key={stage.phase} className="flex flex-col items-center relative z-20">
                  <button
                    onClick={() => setActiveStageIdx(idx)}
                    className={cn(
                      'w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 outline-none focus:ring-2',
                      isActive
                        ? `bg-white ${themeTextColor} shadow-lg scale-110`
                        : isPast
                        ? `text-white ${themeTextColor} border-current`
                        : 'bg-white border-[#E5E8F0] text-[#4B5563] hover:border-[#9CA3AF]'
                    )}
                    style={{
                      borderColor: isActive ? themeColor : isPast ? themeColor : undefined,
                      backgroundColor: isPast ? themeColor : undefined,
                    }}
                  >
                    {stage.step}
                  </button>
                  <span
                    className={cn(
                      'absolute -bottom-8 text-center whitespace-nowrap text-xs font-semibold tracking-wider uppercase transition-colors duration-300 max-w-[120px]',
                      isActive ? themeTextColor : 'text-[#4B5563]'
                    )}
                  >
                    {stage.phase}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stepper selector */}
        <div className="lg:hidden space-y-3 mb-10">
          {currentLifecycle.map((stage, idx) => {
            const isActive = idx === activeStageIdx;
            return (
              <button
                key={stage.phase}
                onClick={() => setActiveStageIdx(idx)}
                className={cn(
                  'w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300',
                  isActive
                    ? `${themeLightBg} shadow-sm`
                    : 'bg-white border-[#E5E8F0] hover:border-[#9CA3AF]'
                )}
                style={{ borderColor: isActive ? themeColor : undefined }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border'
                    )}
                    style={{
                      backgroundColor: isActive ? themeColor : '#F7F9FC',
                      color: isActive ? '#white' : '#4B5563',
                      borderColor: isActive ? themeColor : '#E5E8F0',
                    }}
                  >
                    {stage.step}
                  </span>
                  <div>
                    <h4 className={cn('text-sm font-bold', isActive ? themeTextColor : 'text-[#111827]')}>
                      {stage.phase}
                    </h4>
                  </div>
                </div>
                <svg
                  className={cn('w-4 h-4 text-[#4B5563] transition-transform duration-300', isActive ? 'rotate-90' : '')}
                  style={{ color: isActive ? themeColor : undefined }}
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

        {/* Details Panel */}
        <div className="bg-white rounded-3xl border border-[#E5E8F0] p-8 md:p-10 min-h-[300px] shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeStageIdx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              {/* Left Side: Stage description */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${themeColor}12`, color: themeColor }}
                  >
                    {activeTab === 'salesforce' ? 'Salesforce Core' : 'Vlocity Industry'} — Phase {activeStage.step}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                  {activeStage.phase}
                </h3>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed mb-6">
                  {activeStage.description}
                </p>
              </div>

              {/* Right Side: Deliverables and activities */}
              <div
                className="md:col-span-5 border p-6 rounded-2xl shadow-subtle bg-[#F7F9FC] card-hover hover:shadow-elevated hover:bg-white transition-all duration-300"
                style={{ borderColor: `${themeColor}20` }}
              >
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#111827] mb-4">
                  Deliverables & Activities
                </h4>
                <ul className="space-y-3.5">
                  {activeStage.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-xs text-[#4B5563] leading-relaxed">
                      <svg
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: themeColor }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
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
