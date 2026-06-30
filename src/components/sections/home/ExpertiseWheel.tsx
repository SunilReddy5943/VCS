'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

const clouds = [
  { id: 'sales', name: 'Sales Cloud', desc: 'Drive revenue growth with intelligent pipeline management, lead scoring, and automated sales processes.', features: ['Lead Management', 'Opportunity Tracking', 'Pipeline Analytics', 'Sales Automation', 'Forecasting', 'Territory Management'] },
  { id: 'service', name: 'Service Cloud', desc: 'Deliver exceptional customer service with AI-powered case management and omnichannel support.', features: ['Case Management', 'Knowledge Base', 'Omnichannel Routing', 'Service Analytics', 'Field Service', 'Self-Service Portal'] },
  { id: 'marketing', name: 'Marketing Cloud', desc: 'Create personalized customer journeys with data-driven marketing automation.', features: ['Journey Builder', 'Email Studio', 'Social Studio', 'Advertising', 'Data Studio', 'Personalization'] },
  { id: 'experience', name: 'Experience Cloud', desc: 'Build engaging digital experiences for customers, partners, and employees.', features: ['Community Builder', 'Partner Portal', 'Customer Portal', 'Content Management', 'Mobile App', 'Analytics'] },
  { id: 'analytics', name: 'Analytics Cloud', desc: 'Transform data into actionable insights with powerful analytics and AI.', features: ['Einstein Analytics', 'Dashboards', 'Reports', 'Data Visualization', 'Predictive Analytics', 'Data Integration'] },
  { id: 'cpq', name: 'CPQ', desc: 'Automate complex quoting and pricing for faster, more accurate deals.', features: ['Product Configuration', 'Pricing Rules', 'Quote Generation', 'Approval Workflows', 'Contract Management', 'Revenue Recognition'] },
  { id: 'industries', name: 'Industries', desc: 'Industry-specific solutions for Financial Services, Healthcare, and Communications.', features: ['Industry Data Models', 'Prebuilt Processes', 'Compliance Tools', 'Industry Analytics', 'OmniScript', 'FlexCards'] },
];

export default function ExpertiseWheel() {
  const [active, setActive] = useState('sales');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const activeCloud = clouds.find(c => c.id === active)!;

  return (
    <section className="py-24 md:py-32 section-light relative overflow-hidden" id="expertise">
      <div className="container-vcs" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Salesforce Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Cloud Solutions</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Deep expertise across the entire Salesforce ecosystem.</p>
        </motion.div>

        {/* Cloud Selector */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-12">
          {clouds.map((cloud) => (
            <button
              key={cloud.id}
              onClick={() => setActive(cloud.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cloud.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 scale-105'
                  : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-600 border border-border-light'
              }`}
            >
              {cloud.name}
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl border border-border-light p-8 md:p-12 shadow-card"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{activeCloud.name}</h3>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">{activeCloud.desc}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeCloud.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-surface-soft rounded-xl"
                >
                  <svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-text-primary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
