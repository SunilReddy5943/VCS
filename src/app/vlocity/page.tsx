'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const methodology = [
  {
    phase: 'Phase 01',
    title: 'Identify & Prioritize',
    desc: 'Understand business features and document scope parameters.',
    color: '#0057FF',
    substeps: ['Identify Feature', 'Scope Requirement', 'Document Feature']
  },
  {
    phase: 'Phase 02',
    title: 'Assign & Monitor',
    desc: 'Align resources and configure monitoring trackers.',
    color: '#3B82F6',
    substeps: ['Assign Resource', 'Update Status', 'Monitor Progress']
  },
  {
    phase: 'Phase 03',
    title: 'Design & Develop',
    desc: 'Code with industry vertical standards and track development sprints.',
    color: '#8B5CF6',
    substeps: ['Best Practices', 'Develop', 'Log Progress']
  },
  {
    phase: 'Phase 04',
    title: 'Validate & Approve',
    desc: 'Thorough QA testing, bug log, defect resolution, and business sign-off.',
    color: '#EC4899',
    substeps: ['Validate Feature', 'Log Defect', 'Resolve Defect', 'Business Approval']
  },
  {
    phase: 'Phase 05',
    title: 'Train & Deploy',
    desc: 'User boarding, release schedules, release notes communication, and go-live.',
    color: '#10B981',
    substeps: ['Train Users', 'Schedule Deployment', 'Communicate', 'Deploy']
  },
  {
    phase: 'Phase 06',
    title: 'Track & Report',
    desc: 'Periodical status updates, continuous consulting enhancements, and feedback loops.',
    color: '#0F172A',
    substeps: ['Periodic Reports', 'Track Progress', 'Support', 'Enhancement', 'Consulting']
  }
];

const managedServices = [
  { title: 'Vlocity Industry Clouds', desc: 'Expertise across Banking, Insurance, Telecommunications, Healthcare, and Government vertical engines.' },
  { title: 'OmniStudio Configuration', desc: 'Designing lightning-fast user interactions using Vlocity OmniScripts and FlexCards.' },
  { title: 'ITIL Automation', desc: 'ITIL-aligned support with on-demand integration tools, trimming maintenance cost by up to 30%.' },
  { title: 'RMM Support Monitoring', desc: 'Normality checking in everyday systems operations with immediate response timelines.' }
];

export default function VlocityPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">Salesforce Vlocity</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Vlocity Services &<br /><span className="text-gradient">Industry Cloud Delivery</span></h1>
          <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
            Configure, prioritize, and deploy Vlocity Industry CRM solutions built on modular, scalable processes designed for telecommunications, insurance, and banking.
          </p>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-14 bg-surface-white border-b border-border-light">
        <div className="container-vcs max-w-4xl">
          <div className="relative p-8 rounded-2xl bg-surface-soft border border-border-light text-center">
            <span className="absolute top-2 left-6 text-7xl text-primary-200 select-none font-serif">&ldquo;</span>
            <p className="text-base md:text-lg text-text-secondary italic leading-relaxed relative z-10 mb-4">
              The current IT leaders have been constantly looking out for ways to cut costs, improve operational efficiency and eventually build progressive business value. Even though they are proactive in their approach, IT landscape is constantly changing at breakneck speed and posing new challenges at every inflection point.
            </p>
            <p className="text-sm font-extrabold text-[#0057FF] uppercase tracking-wider">
              It is estimated that 70% of IT budgets are spent on &apos;Keep the Lights On&apos; projects.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-500 bg-primary-50 px-3 py-1 rounded-full">Pipeline Delivery</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 text-text-primary">Vlocity Development pipeline</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Our 6-phase Vlocity deployment methodology engineered for swift, high-standard vertical customization.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Steps Selector */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-3">
              {methodology.map((step, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={step.phase}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      'w-full text-left p-4.5 rounded-xl border transition-all duration-300 relative outline-none',
                      isActive
                        ? 'bg-white border-transparent shadow-md scale-[1.01]'
                        : 'bg-white/40 border-border-light hover:bg-white/70 text-text-primary'
                    )}
                    style={isActive ? { borderLeft: `4px solid ${step.color}` } : undefined}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#0057FF]/80">
                        {step.phase}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-bold text-text-primary">
                          {step.title}
                        </h4>
                        <p className="text-xs text-text-muted mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Steps Detail Screen */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl border border-border-light p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: methodology[activeTab].color }}
                    >
                      {methodology[activeTab].phase} Tasks
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary" style={{ color: methodology[activeTab].color }}>
                    {methodology[activeTab].title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed -mt-3">
                    {methodology[activeTab].desc}
                  </p>

                  <div className="pt-4 border-t border-border-light">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-text-muted mb-4">Core Deliverables:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {methodology[activeTab].substeps.map(sub => (
                        <div key={sub} className="flex items-center gap-2.5 px-3 py-2 bg-surface-soft border border-border-light rounded-lg shadow-inner">
                          <svg className="w-4 h-4 text-[#0057FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <span className="text-xs font-semibold text-text-primary">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Support Services details */}
      <section className="py-20 bg-surface-soft border-t border-border-light">
        <div className="container-vcs max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-500 bg-primary-50 px-3 py-1 rounded-full">Managed Support</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 text-text-primary">Vlocity Managed Services Operations</h2>
            <p className="text-base text-text-secondary mt-4 max-w-2xl mx-auto">
              How VCS simplifies complexities in Application Management, Infrastructure, and Cloud Operations.
            </p>
          </div>

          <div className="bg-white border border-border-light rounded-3xl p-8 shadow-sm space-y-6 text-sm md:text-base text-text-secondary leading-relaxed mb-12">
            <p>
              VCS simplifies your complexities in Application Management, Infrastructure Management, Service Integration, Security and Cloud Operations. With fast response time and dedicated teams of Remote Monitoring and Management (RMM), Value Cloud Services leaves no stone unturned in maintaining normality in everyday operations. Our remote support made our clients ease their operational bottlenecks resulting in the raise in productivity.
            </p>
            <p>
              At VCS, we understand the intricacies of the pressing matters and mentor the clients on where to keep the lights on and where to keep them off. Through Managed Services, we enable our clients to keep their eyes on the profitable matters of the business. We and also make our clients engage on delivering high impact business building activities while taking care of their maintenance & support tasks to upkeep the projects at affordable costs.
            </p>
            <p>
              With immense knowledge of our customers pain points and collective wisdom of our certified teams, we even guide our clients at what time the lights should be lit and how long they should be burning bright. With our ITIL-aligned customer focused automation abilities and on-demand integration tools, Value Cloud Services significantly trims your maintenance costs, eases the ITSM procedures, and provides end-to-end visibility of your IT infrastructure.
            </p>
            <p>
              The proactive teams of Value Cloud Services regularly send periodical summary reports to evaluate the existing systems and identify potential threats. Our comprehensive IT support ensures peace of mind and manages all your IT requests diligently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {managedServices.map(srv => (
              <div key={srv.title} className="p-6 bg-white border border-border-light rounded-2xl shadow-sm">
                <h3 className="text-base font-bold text-text-primary mb-2">{srv.title}</h3>
                <p className="text-xs leading-relaxed text-text-secondary">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 to-primary-800 text-center">
        <div className="container-vcs">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Build a Composable Vlocity Engine</h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">Contact VCS consultants to start mapping your Vlocity industry cloud configuration today.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg">Request Vlocity Consultation</Link>
        </div>
      </section>
    </>
  );
}
