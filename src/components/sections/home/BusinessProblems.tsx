'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const problems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Disconnected Customer Data',
    description: 'Fragmented data across systems creates blind spots in customer understanding, leading to poor experiences and lost revenue.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Manual Business Processes',
    description: 'Time-consuming manual workflows drain productivity, increase errors, and prevent your teams from focusing on strategic initiatives.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Legacy System Limitations',
    description: 'Outdated technology stacks limit agility, increase maintenance costs, and create barriers to digital transformation.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Scaling Customer Operations',
    description: 'Growing customer bases demand scalable solutions that existing systems cannot support without significant rearchitecture.',
  },
];

export default function BusinessProblems() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-surface-white relative overflow-hidden" id="problems">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="container-vcs relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-error/5 text-error text-sm font-semibold rounded-full mb-4 border border-error/10">
            Enterprise Challenges
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            The Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Enterprise organizations face complex challenges that require strategic, technology-driven solutions.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border-light bg-white hover:border-error/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-error/3 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-error/5 text-error flex items-center justify-center mb-5 group-hover:bg-error/10 transition-colors">
                {problem.icon}
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
