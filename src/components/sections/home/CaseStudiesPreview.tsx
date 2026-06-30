'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';

const caseStudies = [
  { title: 'Global Bank CRM Transformation', industry: 'Financial Services', bg: 'from-blue-600 to-blue-800', metrics: ['45% Revenue Growth', '60% Faster Processes', '99.9% Uptime'] },
  { title: 'RetailMax Omnichannel Experience', industry: 'Retail', bg: 'from-purple-600 to-purple-800', metrics: ['3x Customer Engagement', '35% Conversion Increase', '50% Cost Reduction'] },
  { title: 'Government Digital Portal', industry: 'Government', bg: 'from-teal-600 to-teal-800', metrics: ['2M+ Citizens Served', '70% Digital Adoption', '40% Efficiency Gain'] },
  { title: 'TeleCom360 Customer Platform', industry: 'Telecom', bg: 'from-orange-600 to-orange-800', metrics: ['80% Faster Resolution', '55% Churn Reduction', '4.8/5 CSAT Score'] },
];

export default function CaseStudiesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 md:py-32 section-light relative overflow-hidden" id="case-studies">
      <div className="container-vcs" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proven Enterprise Results</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Real transformations delivering measurable business impact.</p>
        </motion.div>

        {/* Horizontal Scrollable Cards */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="snap-center shrink-0 w-[340px] md:w-[420px]"
            >
              <Link href="/case-studies" className="block group">
                <div className={`bg-gradient-to-br ${cs.bg} rounded-2xl p-8 text-white h-full min-h-[320px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-lg`}>
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-6">{cs.industry}</span>
                    <h3 className="text-2xl font-bold leading-tight mb-4">{cs.title}</h3>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {cs.metrics.map(m => (
                        <div key={m} className="flex items-center gap-2 text-sm text-white/80">
                          <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                          {m}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white/90 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Case Study <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
