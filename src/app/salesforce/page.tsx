'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

/* ─── Data ─── */
const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '100+', label: 'Certified Experts' },
  { value: '3,000+', label: 'Projects Delivered' },
  { value: '5★', label: 'AppExchange Rating' },
];

const clouds = [
  {
    id: 'sales', label: 'Sales Cloud', accent: '#0057FF',
    desc: 'Accelerate revenue growth with intelligent pipeline management, AI-powered forecasting, and automated sales processes that close deals faster.',
    features: ['Lead & Opportunity Management', 'Einstein AI Lead Scoring', 'CPQ & Revenue Intelligence', 'Territory & Quota Planning', 'Sales Engagement Automation', 'Pipeline Analytics & Forecasting'],
    useCases: ['B2B Enterprise Sales', 'Channel Partner Management', 'Subscription Revenue'],
  },
  {
    id: 'service', label: 'Service Cloud', accent: '#8B5CF6',
    desc: 'Deliver world-class customer support with omnichannel case management, self-service portals, and AI-powered agent assistance.',
    features: ['Omnichannel Case Routing', 'Knowledge Base & Self-Service', 'Field Service Management', 'Einstein Bot & Live Agent', 'SLA & Entitlement Tracking', 'Customer Satisfaction (CSAT) Analytics'],
    useCases: ['Enterprise Support Centers', 'Field Service Operations', 'Customer Success Programs'],
  },
  {
    id: 'marketing', label: 'Marketing Cloud', accent: '#EC4899',
    desc: 'Craft personalized customer journeys across email, SMS, social, and advertising channels — powered by real-time behavioral data.',
    features: ['Journey Builder & Automation', 'Email Studio & Personalization', 'Social Studio & Advertising', 'Pardot B2B Marketing', 'Mobile Push & In-App Messaging', 'Marketing Analytics & Attribution'],
    useCases: ['Multi-Channel Campaigns', 'Account-Based Marketing', 'Lead Nurturing Journeys'],
  },
  {
    id: 'commerce', label: 'Commerce Cloud', accent: '#F59E0B',
    desc: 'Build seamless B2B and B2C digital commerce experiences with headless storefronts, order management, and unified inventory.',
    features: ['B2B & B2C Storefronts', 'Order Management System', 'Headless Commerce APIs', 'AI-Powered Recommendations', 'Payment & Checkout Optimization', 'Inventory & Fulfillment'],
    useCases: ['D2C E-Commerce', 'B2B Wholesale Portals', 'Marketplace Integrations'],
  },
  {
    id: 'experience', label: 'Experience Cloud', accent: '#06B6D4',
    desc: 'Build branded portals, communities, and self-service sites that connect customers, partners, and employees with your Salesforce data.',
    features: ['Customer & Partner Portals', 'Community Engagement', 'Knowledge & Self-Service', 'Lightning Bolt Templates', 'CMS-Driven Content', 'Analytics & Engagement Scoring'],
    useCases: ['Partner Portals', 'Customer Communities', 'Employee Intranets'],
  },
];

const specializedPlatforms = [
  { name: 'Data Cloud', desc: 'Unify all customer data sources into a single real-time profile for segmentation, analytics, and activation.', accent: '#3B82F6' },
  { name: 'MuleSoft', desc: 'API-led integration connecting Salesforce to SAP, Oracle, AWS, and 200+ systems with <100ms latency.', accent: '#10B981' },
  { name: 'Tableau', desc: 'Interactive dashboards and AI-driven analytics that transform raw data into actionable executive insights.', accent: '#6366F1' },
  { name: 'Einstein AI', desc: 'Predictive scoring, NLP, computer vision, and recommendation engines embedded natively in Salesforce.', accent: '#F59E0B' },
  { name: 'Agentforce', desc: 'Autonomous AI agents for service, sales, marketing — resolving cases and managing workflows 24/7.', accent: '#8B5CF6' },
  { name: 'Slack', desc: 'Real-time collaboration integrated with Salesforce workflows, alerts, and CRM data for faster decisions.', accent: '#E11D48' },
];

const omnistudioCapabilities = [
  { name: 'OmniScripts', desc: 'Guided digital workflows for complex industry processes' },
  { name: 'FlexCards', desc: 'Dynamic UI components with real-time CRM data rendering' },
  { name: 'Integration Procedures', desc: 'Server-side orchestration for multi-step data operations' },
  { name: 'DataRaptors', desc: 'High-performance data read/write without Apex code' },
];

const omnistudioIndustries = ['Telecommunications', 'Insurance', 'Healthcare', 'Energy & Utilities', 'Financial Services', 'Government'];

const certifications = [
  'Platform Developer I & II', 'Administrator', 'Sales Cloud Consultant',
  'Service Cloud Consultant', 'Marketing Cloud Specialist', 'Data Cloud Consultant',
  'MuleSoft Developer', 'Tableau Analyst', 'OmniStudio Developer',
  'Application Architect', 'System Architect', 'B2C Commerce Developer',
];

/* ─── Component ─── */
export default function SalesforceExpertisePage() {
  const [activeCloud, setActiveCloud] = useState(0);
  const cloud = clouds[activeCloud];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #0E2A5A 50%, #0B1D3A 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/salesforce-hero.png" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/60 to-[#0B1D3A]/90" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
            Salesforce Summit Partner
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Complete Salesforce<br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Ecosystem Expertise</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            From Sales Cloud to Agentforce AI — we architect, implement, and optimize every Salesforce product to drive measurable ROI for global enterprises.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {stats.map((s, i) => (
              <div key={i}>
                <span className="block text-3xl md:text-4xl font-extrabold text-white font-display">{s.value}</span>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 font-body">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CORE CRM CLOUDS — Tabbed ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0057FF] bg-[#0057FF]/5 px-4 py-1.5 rounded-full border border-[#0057FF]/10">
              Core CRM Clouds
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] mt-5 mb-4">
              Mastery Across Every<br />Salesforce Cloud
            </h2>
            <p className="font-body text-lg text-[#64748B]">
              Deep expertise in all 5 core CRM Clouds — we configure, customize, and optimize each to fit your business perfectly.
            </p>
          </div>

          {/* Cloud Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {clouds.map((c, i) => (
              <button key={c.id} onClick={() => setActiveCloud(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${i === activeCloud ? 'text-white border-transparent shadow-lg' : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#94A3B8] hover:text-[#0F172A]'}`}
                style={i === activeCloud ? { backgroundColor: c.accent } : {}}>
                {c.label}
              </button>
            ))}
          </div>

          {/* Cloud Detail */}
          <AnimatePresence mode="wait">
            <motion.div key={cloud.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }} className="grid lg:grid-cols-2 gap-6">
              {/* Left: Description & Use Cases */}
              <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] border border-[#F1F5F9] p-7 md:p-8 relative overflow-hidden">
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full" style={{ backgroundColor: cloud.accent, opacity: 0.5 }} />
                <div className="pl-4">
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">{cloud.label}</h3>
                  <p className="font-body text-[#64748B] text-sm leading-relaxed mb-6">{cloud.desc}</p>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-3">Key Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {cloud.useCases.map((uc, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-semibold border" style={{ color: cloud.accent, borderColor: `${cloud.accent}25`, backgroundColor: `${cloud.accent}08` }}>
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: Features */}
              <div className="rounded-2xl p-7 md:p-8 bg-gradient-to-br from-[#0B1D3A] via-[#0E2A5A] to-[#0B1D3A] shadow-[0_8px_40px_rgba(11,29,58,0.25)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${cloud.accent}, transparent)` }} />
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: cloud.accent }}>VCS Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cloud.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2.5 bg-white/5 border border-white/8 rounded-xl">
                      <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${cloud.accent}20` }}>
                        <svg className="w-3 h-3" style={{ color: cloud.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      </span>
                      <span className="text-xs font-semibold text-slate-200">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ SPECIALIZED PLATFORMS ═══ */}
      <section className="py-20 md:py-28 bg-[#FAFBFF] border-y border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0057FF] bg-[#0057FF]/5 px-4 py-1.5 rounded-full border border-[#0057FF]/10">
              Specialized Platforms
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] mt-5 mb-4">Beyond CRM — Full Platform Mastery</h2>
            <p className="font-body text-lg text-[#64748B]">Deep expertise in Salesforce&apos;s most advanced products — Data Cloud, MuleSoft, Tableau, Einstein AI, and Agentforce.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializedPlatforms.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="bg-white rounded-2xl border border-[#F1F5F9] p-6 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${p.accent}10` }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.accent }} />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2">{p.name}</h3>
                <p className="font-body text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VLOCITY / OMNISTUDIO ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/5 px-4 py-1.5 rounded-full border border-[#8B5CF6]/10 mb-5">
                Industry Cloud & OmniStudio
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
                Vlocity & OmniStudio<br />Deep Expertise
              </h2>
              <p className="font-body text-[#64748B] leading-relaxed mb-8">
                We build high-speed, guided digital experiences for industry-specific use cases using OmniStudio&apos;s low-code tools — OmniScripts, FlexCards, Integration Procedures, and DataRaptors.
              </p>

              <div className="space-y-3">
                {omnistudioCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl">
                    <span className="w-6 h-6 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#0F172A]">{cap.name}</h4>
                      <p className="text-xs text-[#64748B] mt-0.5">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B1D3A] via-[#0E2A5A] to-[#0B1D3A] rounded-2xl p-8 shadow-[0_8px_40px_rgba(11,29,58,0.25)]">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8B5CF6] mb-5">Industries We Serve with OmniStudio</h3>
              <div className="grid grid-cols-2 gap-3">
                {omnistudioIndustries.map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/8 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <span className="text-sm font-semibold text-slate-200">{ind}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                  </span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">VCS Advantage</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">Our OmniStudio-certified team delivers guided digital workflows that reduce process time by up to 60% and improve customer self-service adoption by 3x.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="py-20 md:py-28 bg-[#FAFBFF] border-y border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0057FF] bg-[#0057FF]/5 px-4 py-1.5 rounded-full border border-[#0057FF]/10">
              Certifications & Partnerships
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] mt-5 mb-4">Certified Excellence</h2>
            <p className="font-body text-lg text-[#64748B]">Our team holds 100+ Salesforce certifications across every major specialization.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="w-8 h-8 rounded-lg bg-[#0057FF]/8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
                </span>
                <span className="text-xs font-semibold text-[#0F172A]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #0E2A5A 50%, #0B1D3A 100%)' }}>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0057FF]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-3xl" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">Discuss Your Salesforce Strategy</h2>
          <p className="font-body text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re starting fresh or optimizing an existing ecosystem — our certified architects will craft a roadmap tailored to your business goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057FF] text-white text-base font-bold rounded-xl hover:bg-[#0046CC] transition-all shadow-lg shadow-[#0057FF]/20">
              Book Free Consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-base font-semibold rounded-xl hover:bg-white/15 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
