'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const benefits = [
  { title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family', icon: '🏥' },
  { title: 'Learning & Development', desc: 'Salesforce certification sponsorship and learning budget', icon: '📚' },
  { title: 'Remote Flexibility', desc: 'Hybrid work model with flexible hours', icon: '🏠' },
  { title: 'Career Growth', desc: 'Clear career paths with mentorship programs', icon: '📈' },
  { title: 'Premium Equipment', desc: 'Latest MacBooks, monitors, and dev tools', icon: '💻' },
  { title: 'Team Culture', desc: 'Regular offsites, team events, and celebrations', icon: '🎉' },
];

const hiringSteps = [
  {
    step: '01',
    title: 'Reviewing Profiles',
    subtitle: 'Sourcing & Scoring',
    desc: 'Shortlisting sourced profiles based on requirements for the position. A score will be provided by recruiters based on experience, skills, work history and availability. Based on the score, applicants will be prioritized and contacted over a phone call accordingly.',
    icon: '📝',
    color: '#0057FF',
    accentBg: 'bg-[#0057FF]/10'
  },
  {
    step: '02',
    title: 'Initial Screening',
    subtitle: 'Phone Credentials',
    desc: 'We typically begin initial interviews with phone calls to determine if the applicants possess the requisite qualifications to fill the position.',
    icon: '📞',
    color: '#3B82F6',
    accentBg: 'bg-blue-50'
  },
  {
    step: '03',
    title: 'Standard Skills Test',
    subtitle: 'Language & Programming',
    desc: 'Face-to-face or video call interview focused on testing candidates’ standard skills, including language speaking and fundamental programming skills.',
    icon: '⌨️',
    color: '#8B5CF6',
    accentBg: 'bg-purple-50'
  },
  {
    step: '04',
    title: 'Technical Suitability',
    subtitle: 'Senior Architect Screening',
    desc: 'Our in-house senior technology leaders will carefully screen applicants. This includes detailed verification of technical skills and domain expertise matching job requirements.',
    icon: '⚙️',
    color: '#EC4899',
    accentBg: 'bg-pink-50'
  },
  {
    step: '05',
    title: 'Screened Profiles Share',
    subtitle: 'Client Evaluation',
    desc: 'Shortlisted screened profiles are shared directly with the client. We then schedule further face-to-face or video call interviews with the client team.',
    icon: '🤝',
    color: '#10B981',
    accentBg: 'bg-emerald-50'
  },
  {
    step: '06',
    title: 'Background Verification',
    subtitle: 'Expedited Screening',
    desc: 'Background checking of the final shortlisted applicants. We have active partnerships with premier third-party vendors for expediting the background check process.',
    icon: '🔒',
    color: '#0F172A',
    accentBg: 'bg-slate-100'
  }
];

const jobs = [
  { id: 'sf-dev', title: 'Senior Salesforce Developer', dept: 'Engineering', loc: 'Hyderabad', type: 'Full-time', exp: '5-8 years', desc: 'Build custom Salesforce solutions using Apex, LWC, and integration frameworks.', reqs: ['5+ years Salesforce development', 'Expert in Apex, Visualforce, LWC', 'Platform Developer II certified', 'Experience with CI/CD and DevOps', 'Strong problem-solving skills'] },
  { id: 'sf-arch', title: 'Salesforce Architect', dept: 'Engineering', loc: 'Hyderabad', type: 'Full-time', exp: '8-12 years', desc: 'Design enterprise-scale Salesforce architectures for complex multi-cloud implementations.', reqs: ['8+ years Salesforce experience', 'Certified Technical Architect preferred', 'Multi-cloud integration experience', 'Enterprise architecture patterns', 'Leadership and mentoring skills'] },
  { id: 'ba', title: 'Business Analyst', dept: 'Consulting', loc: 'Hyderabad', type: 'Full-time', exp: '3-6 years', desc: 'Bridge business requirements with technical solutions for enterprise clients.', reqs: ['3+ years BA experience', 'Salesforce Admin certified', 'Strong requirement gathering skills', 'Agile methodology experience', 'Excellent communication'] },
  { id: 'pm', title: 'Project Manager', dept: 'Delivery', loc: 'Hyderabad', type: 'Full-time', exp: '6-10 years', desc: 'Lead enterprise Salesforce implementations from planning through delivery.', reqs: ['6+ years PM experience', 'PMP or CSM certified', 'Salesforce project experience', 'Stakeholder management', 'Budget and timeline management'] },
  { id: 'qa', title: 'QA Engineer', dept: 'Engineering', loc: 'Hyderabad / Remote', type: 'Full-time', exp: '3-5 years', desc: 'Ensure quality of Salesforce implementations through automated and manual testing.', reqs: ['3+ years QA experience', 'Selenium/Provar experience', 'API testing skills', 'Salesforce testing knowledge', 'Test automation frameworks'] }
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">Careers</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Your Career&apos;s Next Level<br />Can Create <span className="text-gradient">Next-Level Impact</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl">You want to do work that matters. Value Cloud Services makes that possible.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Work at VCS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map(b => (
              <div key={b.title} className="p-6 rounded-2xl bg-surface-soft border border-border-light hover:shadow-card transition-all">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-text-primary mb-1">{b.title}</h3>
                <p className="text-sm text-text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Approach Section (Interactive 2D Pipeline) */}
      <section className="py-20 bg-surface-soft border-y border-border-light">
        <div className="container-vcs">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Our Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">Interactive Hiring Approach</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              How VCS simplifies the recruitment pipeline, ensuring high standards of tech capability and domain expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Progress Step Indicators */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-3">
              {hiringSteps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      'w-full text-left p-4.5 rounded-xl border transition-all duration-300 relative overflow-hidden outline-none',
                      isActive
                        ? 'bg-white border-transparent shadow-md scale-[1.01]'
                        : 'bg-white/40 border-border-light hover:bg-white/70 text-text-primary'
                    )}
                    style={isActive ? { borderLeft: `4px solid ${step.color}` } : undefined}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#0057FF]/80">
                        Phase {step.step}
                      </span>
                      <div className="flex-1">
                        <h4 className={cn('text-sm md:text-base font-bold', isActive ? 'text-text-primary' : 'text-text-secondary')}>
                          {step.title}
                        </h4>
                        <p className="text-xs text-text-muted">{step.subtitle}</p>
                      </div>
                      <span className="text-xl">{step.icon}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Specification Board */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl border border-border-light p-8 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: hiringSteps[activeStep].color }}
                    >
                      Step {hiringSteps[activeStep].step}
                    </span>
                    <span className="text-4xl">{hiringSteps[activeStep].icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary" style={{ color: hiringSteps[activeStep].color }}>
                    {hiringSteps[activeStep].title}
                  </h3>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-extrabold -mt-3">
                    {hiringSteps[activeStep].subtitle}
                  </p>

                  <p className="text-sm md:text-base text-text-secondary leading-relaxed pt-2">
                    {hiringSteps[activeStep].desc}
                  </p>

                  {/* Flow pipeline graphic marker */}
                  <div className="pt-8 border-t border-border-light flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: hiringSteps[activeStep].color }} />
                      <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">
                        Hiring Pipeline Status: Active
                      </span>
                    </div>
                    <span className="text-xs font-bold text-text-muted">
                      {activeStep + 1} of {hiringSteps.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-3">
            {jobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl border border-border-light overflow-hidden">
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-surface-soft transition-colors"
                >
                  <div className="text-left">
                    <h3 className="font-semibold text-text-primary">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs text-text-muted">{job.dept}</span>
                      <span className="text-xs text-text-disabled">•</span>
                      <span className="text-xs text-text-muted">{job.loc}</span>
                      <span className="text-xs text-text-disabled">•</span>
                      <span className="text-xs text-text-muted">{job.exp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-50 text-green-600">{job.type}</span>
                    <svg className={cn('w-5 h-5 text-text-muted transition-transform', expandedJob === job.id ? 'rotate-180' : '')} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border-light pt-4">
                        <p className="text-text-secondary mb-4">{job.desc}</p>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Requirements</h4>
                        <ul className="space-y-1.5 mb-6">
                          {job.reqs.map(r => (
                            <li key={r} className="flex items-center gap-2 text-sm text-text-secondary">
                              <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              {r}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="inline-flex items-center px-6 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors">Apply Now</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 to-primary-800 text-center">
        <div className="container-vcs">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don&apos;t See the Right Role?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">Send us your details and we&apos;ll keep you in mind for future openings.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg">Contact Recruitment</Link>
        </div>
      </section>
    </>
  );
}
