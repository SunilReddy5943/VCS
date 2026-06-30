'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const industries = [
  { name: 'Financial Services', desc: 'Banking, insurance & wealth management solutions', color: 'from-blue-500/10 to-blue-600/5', icon: '🏦' },
  { name: 'Retail & Commerce', desc: 'Omnichannel customer engagement platforms', color: 'from-purple-500/10 to-purple-600/5', icon: '🛍️' },
  { name: 'Government', desc: 'Digital governance and citizen service portals', color: 'from-teal-500/10 to-teal-600/5', icon: '🏛️' },
  { name: 'Communications', desc: 'Telecom digital transformation solutions', color: 'from-orange-500/10 to-orange-600/5', icon: '📡' },
  { name: 'Healthcare', desc: 'Patient engagement and healthcare CRM', color: 'from-green-500/10 to-green-600/5', icon: '🏥' },
  { name: 'Manufacturing', desc: 'Enterprise process automation and sales', color: 'from-slate-500/10 to-slate-600/5', icon: '🏭' },
];

export default function IndustriesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 md:py-32 bg-surface-white relative" id="industries">
      <div className="container-vcs" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Industries We Serve</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Transforming Every Sector</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Industry-specific Salesforce solutions designed for your unique challenges.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`group p-8 rounded-2xl border border-border-light bg-gradient-to-br ${ind.color} hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <div className="text-4xl mb-4">{ind.icon}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-500 transition-colors">{ind.name}</h3>
              <p className="text-sm text-text-secondary">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
