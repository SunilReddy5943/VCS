'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const steps = [
  { num: '01', title: 'Requirement', desc: 'Deep-dive into business needs and objectives' },
  { num: '02', title: 'Strategy', desc: 'Define roadmap and technology approach' },
  { num: '03', title: 'Architecture', desc: 'Design scalable solution architecture' },
  { num: '04', title: 'Development', desc: 'Agile build with continuous feedback' },
  { num: '05', title: 'Testing', desc: 'Rigorous QA and user acceptance testing' },
  { num: '06', title: 'Deployment', desc: 'Seamless go-live with zero downtime' },
  { num: '07', title: 'Support', desc: 'Ongoing optimization and managed services' },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-surface-white relative overflow-hidden" id="process">
      <div className="container-vcs" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From Vision to Reality</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">A proven methodology that delivers predictable outcomes for enterprise transformations.</p>
        </motion.div>

        {/* Desktop: Horizontal */}
        <div className="hidden md:block relative">
          {/* Connection line */}
          <div className="absolute top-8 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />
          <div className="grid grid-cols-7 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-500 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-primary-500/20 mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">{step.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="flex gap-4 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center text-sm font-bold shrink-0">{step.num}</div>
                {i < steps.length - 1 && <div className="w-0.5 h-full bg-primary-200 my-1" />}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
