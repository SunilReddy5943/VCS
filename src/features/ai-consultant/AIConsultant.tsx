'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { animationConfig } from '@/config/animations';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  title: string;
  question: string;
}

const steps: Step[] = [
  { id: 1, title: 'Transformation Objective', question: 'What is your primary system transformation goal?' },
  { id: 2, title: 'Operational Scale', question: 'What is your active user scale across the enterprise?' },
  { id: 3, title: 'Architectural Bottleneck', question: 'What is the primary bottleneck you want to solve?' },
  { id: 4, title: 'Secure Valuation Report', question: 'Input your contact information to validate results.' },
];

export default function AIConsultant() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);
  const [selectedScale, setSelectedScale] = useState<string | null>(null);
  const [selectedBottleneck, setSelectedBottleneck] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="relative py-32 bg-[#050508] border-t border-white/10 text-white overflow-hidden"
    >
      {/* Background glow mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,213,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-4xl text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#101018] border border-white/10 text-[#00D5FF] rounded-full text-xs font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 bg-[#00D5FF] rounded-full animate-pulse" />
            VCS Agentforce Consultant
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Connected Intelligence Assessment
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Run a simulated architectural assessment of your systems. Get a custom audit report generated in real-time.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-[#101018]/60 border border-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 text-left relative max-w-2xl mx-auto shadow-2xl">
          
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/5 rounded-full mb-10 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-[#00D5FF]"
              initial={{ width: '25%' }}
              animate={{ width: `${(currentStep / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: animationConfig.timings.card }}
                className="min-h-[220px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D5FF] block mb-2">
                    Step 0{currentStep} / {steps[currentStep - 1].title}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                    {steps[currentStep - 1].question}
                  </h3>

                  {/* Step 1: Objective */}
                  {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Unify Customer Data (Customer 360)', 'Deploy Agentforce AI Workers', 'Integrate ERP & Legacy Warehouses', 'Optimize Pipeline forecasting'].map((obj) => (
                        <button
                          key={obj}
                          onClick={() => { setSelectedObjective(obj); handleNext(); }}
                          className={cn(
                            'text-left p-4 rounded-xl border transition-all text-xs font-semibold',
                            selectedObjective === obj
                              ? 'bg-[#00D5FF]/10 border-[#00D5FF] text-[#00D5FF]'
                              : 'bg-[#101018] border-white/10 text-gray-300 hover:border-white/20'
                          )}
                        >
                          {obj}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Scale */}
                  {currentStep === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Mid-market (< 100 users)', 'Enterprise (100 - 500 users)', 'Scale Enterprise (500 - 2000 users)', 'Global Tier (> 2000 users)'].map((scale) => (
                        <button
                          key={scale}
                          onClick={() => { setSelectedScale(scale); handleNext(); }}
                          className={cn(
                            'text-left p-4 rounded-xl border transition-all text-xs font-semibold',
                            selectedScale === scale
                              ? 'bg-[#00D5FF]/10 border-[#00D5FF] text-[#00D5FF]'
                              : 'bg-[#101018] border-white/10 text-gray-300 hover:border-white/20'
                          )}
                        >
                          {scale}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 3: Bottleneck */}
                  {currentStep === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Siloed databases & API fallout', 'High manual admin & processing overhead', 'Outdated dashboard reports', 'Long deployment implementation periods'].map((btnk) => (
                        <button
                          key={btnk}
                          onClick={() => { setSelectedBottleneck(btnk); handleNext(); }}
                          className={cn(
                            'text-left p-4 rounded-xl border transition-all text-xs font-semibold',
                            selectedBottleneck === btnk
                              ? 'bg-[#00D5FF]/10 border-[#00D5FF] text-[#00D5FF]'
                              : 'bg-[#101018] border-white/10 text-gray-300 hover:border-white/20'
                          )}
                        >
                          {btnk}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 4: Contact details */}
                  {currentStep === 4 && (
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                      <div className="grid grid-cols-1 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#101018] border border-white/10 rounded-xl focus:border-[#00D5FF] focus:outline-none text-sm text-white"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Work Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#101018] border border-white/10 rounded-xl focus:border-[#00D5FF] focus:outline-none text-sm text-white"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#101018] border border-white/10 rounded-xl focus:border-[#00D5FF] focus:outline-none text-sm text-white"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-[#0057FF] to-[#00D5FF] text-white text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,87,255,0.3)] transition-all mt-4"
                      >
                        Generate Assessment Report
                      </button>
                    </form>
                  )}
                </div>

                {/* Back button */}
                {currentStep > 1 && currentStep < 4 && (
                  <button
                    onClick={handleBack}
                    className="text-xs text-gray-400 hover:text-white font-semibold flex items-center gap-1 mt-6 self-start"
                  >
                    &larr; Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="report"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-left"
              >
                <div className="flex items-center gap-2.5 mb-6 text-[#10B981]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">Audit Completed Successfully!</h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Thank you, <span className="text-[#00D5FF] font-semibold">{formData.name}</span>. An audit report for <span className="font-semibold text-white">{formData.company}</span> has been dispatched to <span className="text-[#00D5FF] font-semibold">{formData.email}</span>.
                </p>

                <div className="bg-[#101018] border border-white/10 rounded-2xl p-6 mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Report Parameters:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-gray-400">Target Area:</span>
                      <span className="font-semibold text-white">{selectedObjective}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-gray-400">Scale Tier:</span>
                      <span className="font-semibold text-white">{selectedScale}</span>
                    </div>
                    <div className="flex justify-between text-xs pb-1">
                      <span className="text-gray-400">Core Bottleneck:</span>
                      <span className="font-semibold text-[#00D5FF]">{selectedBottleneck}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => { setSubmitted(false); setCurrentStep(1); }}
                  className="px-5 py-2.5 bg-[#101018] border border-white/10 hover:border-white/20 text-xs font-bold rounded-xl transition-all"
                >
                  Restart Assessment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
