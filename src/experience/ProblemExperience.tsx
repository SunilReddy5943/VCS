'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import homeData from '@/content/home.json';
import { animationConfig } from '@/config/animations';
import { TiltCard } from '@/design-system/primitives';

export default function ProblemExperience() {
  const [activeId, setActiveId] = useState<string>(homeData.problems[0].id);

  const activeProblem = homeData.problems.find((p) => p.id === activeId) || homeData.problems[0];

  return (
    <section
      id="challenges"
      className="relative py-28 bg-[#FFFFFF] border-y border-[#E5E8F0] overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,87,255,0.025)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0057FF] bg-[#0057FF]/5 px-3 py-1 rounded-full">
            02 / Critical Challenges
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mt-4 mb-6 leading-tight">
            Why Enterprise Digital Initiatives Stall
          </h2>
          <p className="text-lg text-[#4B5563] leading-relaxed">
            Many organizations fail to realize the value of their Salesforce investments because of fragmented data, rigid systems, and manual scaling blocks.
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Problem Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {homeData.problems.map((problem) => {
              const isActive = problem.id === activeId;
              return (
                <button
                  key={problem.id}
                  onClick={() => setActiveId(problem.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#F7F9FC] border-[#0057FF] shadow-sm'
                      : 'bg-white border-[#E5E8F0] hover:border-[#9CA3AF]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon indicator */}
                    <div
                      className={`p-3 rounded-xl transition-colors duration-300 ${
                        isActive ? 'bg-[#0057FF]/10 text-[#0057FF]' : 'bg-[#F7F9FC] text-[#4B5563]'
                      }`}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        {problem.icon === 'disconnected' && (
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                        )}
                        {problem.icon === 'slow' && (
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        )}
                        {problem.icon === 'legacy' && (
                          <path d="M19.36 10.04L20.5 9l-1.14-1.14-1.14 1.14 1.14 1.14zM9 20h2v-6H9v6zm4-8h2V7h-2v5zm4 8h2v-8h-2v8z" />
                        )}
                        {problem.icon === 'scaling' && (
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                        )}
                      </svg>
                    </div>

                    <div>
                      <h3
                        className={`text-base font-semibold transition-colors duration-300 ${
                          isActive ? 'text-[#0057FF]' : 'text-[#111827]'
                        }`}
                      >
                        {problem.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] line-clamp-1 mt-1">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Problem Details & Solution Reveal Card */}
          <div className="lg:col-span-7 h-[380px] lg:h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: animationConfig.timings.card }}
                className="w-full h-full"
              >
                <TiltCard className="w-full h-full bg-[#F7F9FC] border-[#E5E8F0] text-[#111827]">
                  <div className="flex flex-col justify-between h-full">
                    {/* Front Aspect: The Challenge details */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E84855] border border-[#E84855]/20 bg-[#E84855]/5 px-2.5 py-0.5 rounded-full">
                        The Pain Point
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#111827] mt-4 mb-4">
                        {activeProblem.title}
                      </h3>
                      <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
                        {activeProblem.description}
                      </p>
                    </div>

                    {/* Bottom Aspect: The Solution reveal */}
                    <div className="mt-8 border-t border-[#E5E8F0] pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#10B981] border border-[#10B981]/20 bg-[#10B981]/5 px-2.5 py-0.5 rounded-full">
                          VCS Engineered Solution
                        </span>
                        <h4 className="text-lg font-bold text-[#0057FF] mt-1.5">
                          {activeProblem.solution}
                        </h4>
                      </div>

                      <motion.a
                        href="/contact"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0057FF] hover:underline whitespace-nowrap self-start md:self-auto"
                      >
                        Deploy Solution
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
