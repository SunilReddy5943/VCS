'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';

const services = [
  { icon: '💡', title: 'Salesforce Consulting', desc: 'Strategic CRM planning, digital transformation advisory, and enterprise architecture design.', href: '/services#consulting' },
  { icon: '⚙️', title: 'Implementation & Development', desc: 'End-to-end Salesforce deployment, custom development, and workflow automation.', href: '/services#implementation' },
  { icon: '🛡️', title: 'Managed Services', desc: '24/7 support, maintenance, performance optimization, and continuous enhancements.', href: '/services#managed' },
  { icon: '🔗', title: 'Integration & Data', desc: 'API integrations, data migration, legacy modernization, and cloud connectivity.', href: '/services#integration' },
  { icon: '📊', title: 'Analytics & Intelligence', desc: 'Business intelligence, interactive dashboards, and AI-powered insights.', href: '/services#analytics' },
  { icon: '👥', title: 'Staff Augmentation', desc: 'Certified Salesforce developers, architects, and consultants for your projects.', href: '/services#staff' },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 md:py-32 section-light relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="container-vcs relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Enterprise Salesforce Solutions</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">End-to-end consulting, implementation, and managed services that drive business growth.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full p-8 rounded-2xl bg-white border border-border-light hover:border-primary-200 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl mb-5">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary-500 transition-colors">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-sm font-semibold text-primary-500 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
