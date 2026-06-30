'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const challenges = [
  {
    id: 'data-silos', category: 'Data & CRM', accent: '#3B82F6',
    title: 'Fragmented Customer Data & Broken 360° Views',
    description: 'Critical customer data trapped across disconnected CRM instances, ERP systems, marketing platforms, and legacy databases — making it impossible to build a unified Customer 360 profile.',
    painStats: [{ label: 'Enterprises with data silos', value: '83%' }, { label: 'Revenue lost to bad data', value: '12%' }, { label: 'Avg. systems per org', value: '12+' }],
    impacts: ['Duplicate records across Sales & Service Cloud', 'Marketing campaigns missing target audiences', 'No single source of truth for customer journey', 'Compliance gaps from inconsistent data governance'],
    solution: {
      title: 'Salesforce Data Cloud + MuleSoft Integration',
      description: 'Unify every customer touchpoint into a single, real-time Customer 360 profile. Connect siloed ERPs, databases, and third-party APIs through MuleSoft.',
      tools: ['Data Cloud', 'MuleSoft', 'Customer 360', 'Tableau'],
      results: [{ label: 'Faster data access', value: '10x' }, { label: 'Data accuracy', value: '99.9%' }, { label: 'Integration time', value: '-70%' }],
      benefits: ['Real-time unified customer profiles', 'Automated cross-cloud data sync', 'Enterprise-grade data governance'],
      cta: { label: 'Unify Your Data', href: '/contact' },
    },
  },
  {
    id: 'ai-adoption', category: 'AI & Automation', accent: '#8B5CF6',
    title: 'Slow AI Agent & Automation Deployment',
    description: 'Most enterprises struggle to deploy AI agents inside Salesforce. Without expertise in Agentforce & Einstein, AI adoption becomes slow and expensive.',
    painStats: [{ label: 'AI projects that fail', value: '87%' }, { label: 'Avg. deployment time', value: '8mo+' }, { label: 'Cost overrun risk', value: '3x' }],
    impacts: ['Manual case routing consuming agent bandwidth', 'No intelligent lead scoring or opportunity insights', 'Chatbots stuck in pilot phase', 'Zero proactive customer retention automation'],
    solution: {
      title: 'Agentforce AI + Einstein Copilot Deployment',
      description: 'Deploy autonomous AI agents that resolve cases, score leads, draft emails, and automate workflows — all within Salesforce guardrails.',
      tools: ['Agentforce', 'Einstein AI', 'Flow Builder', 'Copilot'],
      results: [{ label: 'Deployment speed', value: '10x' }, { label: 'Case resolution', value: '98.7%' }, { label: 'Cost savings', value: '-62%' }],
      benefits: ['AI agents live in hours, not months', 'Autonomous case & lead management', '24/7 multilingual customer support'],
      cta: { label: 'Deploy AI Agents', href: '/contact' },
    },
  },
  {
    id: 'legacy-systems', category: 'Integration', accent: '#10B981',
    title: 'Legacy System Burden & Integration Debt',
    description: 'Aging on-premise ERP, HR, and billing systems consume up to 70% of IT budgets on maintenance, blocking cloud migration and real-time data flow.',
    painStats: [{ label: 'IT budget on maintenance', value: '70%' }, { label: 'Integration points avg.', value: '25+' }, { label: 'Data sync delays', value: '48hr' }],
    impacts: ['Manual CSV exports between ERP and Salesforce', 'Batch processing causing 24-48hr data delays', 'Security risks from outdated middleware', 'Failed cloud migration attempts'],
    solution: {
      title: 'MuleSoft API-Led Connectivity & Migration',
      description: 'Connect SAP, Oracle, AWS, and any legacy system to Salesforce using MuleSoft\'s API-led architecture with <100ms latency.',
      tools: ['MuleSoft', 'Heroku', 'Platform Events', 'REST APIs'],
      results: [{ label: 'API calls/day', value: '2.4M' }, { label: 'Data latency', value: '<100ms' }, { label: 'Uptime SLA', value: '99.99%' }],
      benefits: ['Real-time bi-directional data sync', 'API-first modernization roadmap', 'Zero-downtime cloud migration'],
      cta: { label: 'Modernize Systems', href: '/contact' },
    },
  },
  {
    id: 'cloud-complexity', category: 'Cloud Setup', accent: '#F59E0B',
    title: 'Multi-Cloud Configuration & Optimization Gaps',
    description: 'Enterprises deploy multiple Salesforce Clouds but rarely configure them to work together, crippling performance and user adoption.',
    painStats: [{ label: 'Features actually used', value: '30%' }, { label: 'Low user adoption', value: '47%' }, { label: 'Unused license waste', value: '$2.4M' }],
    impacts: ['Sales Cloud not syncing with Marketing journeys', 'Service Cloud missing customer purchase history', 'Experience Cloud portals with poor UX', 'Governor limit errors blocking automations'],
    solution: {
      title: 'Multi-Cloud Optimization & Health Check',
      description: 'Our certified architects audit your entire ecosystem, optimize cross-cloud automation, and unlock the full potential of every license.',
      tools: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'CPQ'],
      results: [{ label: 'Feature adoption', value: '+85%' }, { label: 'License savings', value: '$1.2M' }, { label: 'Performance gain', value: '3x' }],
      benefits: ['Cross-cloud workflow optimization', 'Governor limit resolution', 'Role-based security hardening'],
      cta: { label: 'Optimize Clouds', href: '/contact' },
    },
  },
  {
    id: 'talent-gap', category: 'Talent & Scaling', accent: '#EC4899',
    title: 'Certified Salesforce Talent Shortage',
    description: 'Finding and retaining certified Salesforce developers, architects, and administrators delays critical project deliveries and inflates budgets.',
    painStats: [{ label: 'SF jobs unfilled globally', value: '4.2M' }, { label: 'Avg. time to hire', value: '90 days' }, { label: 'Attrition rate', value: '34%' }],
    impacts: ['Critical projects delayed 3-6 months', 'Over-reliance on expensive contractors', 'Knowledge loss from team departures', 'Inability to scale for seasonal demands'],
    solution: {
      title: 'VCS Staff Augmentation & Managed Teams',
      description: 'Access pre-vetted, certified Salesforce professionals within 24-48 hours with flexible hourly, monthly, or project-based models.',
      tools: ['Certified Devs', 'Architects', 'Admins', 'QA Engineers'],
      results: [{ label: 'Time to onboard', value: '24hr' }, { label: 'Certified experts', value: '100+' }, { label: 'Cost savings', value: '-45%' }],
      benefits: ['Pre-vetted certified professionals', 'Flexible team scaling models', 'Dedicated project management'],
      cta: { label: 'Scale Your Team', href: '/contact' },
    },
  },
  {
    id: 'roi-visibility', category: 'ROI & Analytics', accent: '#06B6D4',
    title: 'Poor Salesforce ROI Visibility & Reporting',
    description: 'Without proper analytics, enterprises cannot measure CRM ROI. Disconnected dashboards and manual reporting make it impossible to justify budgets.',
    painStats: [{ label: "Can't measure CRM ROI", value: '68%' }, { label: 'Reports done manually', value: '60%' }, { label: 'Dashboard adoption', value: '22%' }],
    impacts: ['C-suite lacks pipeline visibility', 'Manual Excel reports consuming 15+ hrs/week', 'No predictive forecasting or churn analytics', 'Cannot justify Salesforce renewal investments'],
    solution: {
      title: 'Tableau + Einstein Analytics Deployment',
      description: 'Build executive dashboards, predictive forecasting, and AI-driven churn analytics directly inside Salesforce with role-based reporting.',
      tools: ['Tableau', 'Einstein Analytics', 'CRM Analytics', 'Reports'],
      results: [{ label: 'Report time saved', value: '90%' }, { label: 'Forecast accuracy', value: '94%' }, { label: 'Dashboard adoption', value: '4x' }],
      benefits: ['Real-time executive dashboards', 'AI-powered predictive insights', 'Automated scheduled reporting'],
      cta: { label: 'Unlock Insights', href: '/contact' },
    },
  },
];

export default function ProblemExperience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = challenges[activeIdx];

  return (
    <section id="challenges" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0057FF] bg-[#0057FF]/5 px-4 py-1.5 rounded-full border border-[#0057FF]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] animate-pulse" />
            02 / Critical Salesforce Challenges
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] mt-5 mb-5 leading-[1.15]">
            Why Enterprise Salesforce<br />Initiatives Stall
          </h2>
          <p className="font-body text-lg text-[#64748B] leading-relaxed">
            Organizations lose millions in unrealized CRM value. Here are the 6 most critical challenges — and how VCS solves each one.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {challenges.map((c, i) => (
            <button key={c.id} onClick={() => setActiveIdx(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${i === activeIdx ? 'bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-lg shadow-[#0B1D3A]/15' : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#94A3B8] hover:text-[#0F172A] hover:shadow-sm'}`}>
              {c.category}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="grid lg:grid-cols-2 gap-6">

            {/* LEFT: The Challenge — Premium white card with accent left border */}
            <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] border border-[#F1F5F9] p-7 md:p-8 flex flex-col relative overflow-hidden">
              {/* Accent left border */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full" style={{ backgroundColor: active.accent, opacity: 0.5 }} />

              <div className="flex items-center gap-2 mb-4 pl-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 font-body">⚠ The Challenge</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0F172A] mb-3 leading-tight pl-3">{active.title}</h3>
              <p className="font-body text-[#64748B] text-sm leading-relaxed mb-6 pl-3">{active.description}</p>

              {/* Pain Stats — premium cards */}
              <div className="grid grid-cols-3 gap-3 mb-6 pl-3">
                {active.painStats.map((stat, i) => (
                  <div key={i} className="text-center rounded-xl p-3.5 border transition-all hover:shadow-md" style={{ borderColor: `${active.accent}20`, backgroundColor: `${active.accent}05` }}>
                    <span className="block text-2xl font-extrabold font-display" style={{ color: active.accent }}>{stat.value}</span>
                    <span className="block text-[8px] font-bold text-[#94A3B8] uppercase tracking-wider mt-1 font-body leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Impact Bullets */}
              <div className="space-y-3 mt-auto pl-3">
                {active.impacts.map((impact, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px] text-[#475569] font-body">
                    <span className="w-5 h-5 rounded-md bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </span>
                    {impact}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: The Solution — Deep navy blue premium card */}
            <div className="rounded-2xl p-7 md:p-8 flex flex-col relative overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#0E2A5A] to-[#0B1D3A] shadow-[0_8px_40px_rgba(11,29,58,0.25)]">
              {/* Decorative gradient accent stripe at top */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${active.accent}, ${active.accent}80, transparent)` }} />
              {/* Decorative shapes */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full" style={{ background: `radial-gradient(circle, ${active.accent}08 0%, transparent 70%)` }} />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#0057FF]/5" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${active.accent}25` }}>
                    <svg className="w-4 h-4" style={{ color: active.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest font-body" style={{ color: active.accent }}>VCS Engineered Solution</span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{active.solution.title}</h3>
                <p className="font-body text-slate-300 text-sm leading-relaxed mb-6">{active.solution.description}</p>

                {/* Key Results — glassmorphic stat cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {active.solution.results.map((r, i) => (
                    <div key={i} className="text-center rounded-xl p-3.5 border border-white/8 bg-white/5 backdrop-blur-sm">
                      <span className="block text-2xl font-extrabold font-display" style={{ color: active.accent }}>{r.value}</span>
                      <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider mt-1 font-body leading-tight">{r.label}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-3 mb-6">
                  {active.solution.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-[13px] text-slate-200 font-body">
                      <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${active.accent}20` }}>
                        <svg className="w-3 h-3" style={{ color: active.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      </span>
                      {b}
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.solution.tools.map((tool, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/8 rounded-lg text-[11px] font-semibold text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: active.accent }} />
                      {tool}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link href={active.solution.cta.href}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                    style={{ backgroundColor: active.accent, boxShadow: `0 4px 20px ${active.accent}35` }}>
                    {active.solution.cta.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {challenges.map((c, i) => (
            <button key={i} onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === activeIdx ? 'w-8 h-2' : 'w-2 h-2 hover:bg-[#94A3B8]'}`}
              style={{ backgroundColor: i === activeIdx ? c.accent : '#CBD5E1' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
