import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Salesforce cloud solutions including Sales, Service, Marketing, Experience, Analytics, CPQ, and Salesforce Industries.',
};

const clouds = [
  { name: 'Sales Cloud', icon: '📈', desc: 'Drive revenue growth with intelligent pipeline management, lead scoring, and automated sales processes.', features: ['Lead Management', 'Opportunity Tracking', 'Pipeline Analytics', 'Sales Automation', 'Forecasting', 'Territory Management'] },
  { name: 'Service Cloud', icon: '🛡️', desc: 'Deliver exceptional customer service with AI-powered case management and omnichannel support.', features: ['Case Management', 'Knowledge Base', 'Omnichannel Routing', 'Service Analytics', 'Field Service', 'Self-Service Portal'] },
  { name: 'Marketing Cloud', icon: '📣', desc: 'Create personalized customer journeys with data-driven marketing automation across every channel.', features: ['Journey Builder', 'Email Studio', 'Social Studio', 'Advertising', 'Data Studio', 'Personalization'] },
  { name: 'Experience Cloud', icon: '🌐', desc: 'Build engaging digital experiences for customers, partners, and employees.', features: ['Community Builder', 'Partner Portal', 'Customer Portal', 'Content Management', 'Mobile App', 'Analytics'] },
  { name: 'Analytics Cloud', icon: '📊', desc: 'Transform data into actionable insights with powerful analytics and AI.', features: ['Einstein Analytics', 'Dashboards', 'Reports', 'Data Visualization', 'Predictive Analytics', 'Data Integration'] },
  { name: 'CPQ', icon: '💰', desc: 'Automate complex quoting and pricing for faster, more accurate deals.', features: ['Product Configuration', 'Pricing Rules', 'Quote Generation', 'Approval Workflows', 'Contract Management', 'Revenue Recognition'] },
  { name: 'Salesforce Industries', icon: '🏢', desc: 'Industry-specific solutions for Financial Services, Healthcare, Communications, and Manufacturing.', features: ['Industry Data Models', 'Prebuilt Processes', 'Compliance Tools', 'Industry Analytics', 'OmniScript', 'FlexCards'] },
];

const journey = [
  { step: '01', title: 'Book Consultation', desc: 'Initial discussion of your goals' },
  { step: '02', title: 'Discovery', desc: 'Requirements analysis & assessment' },
  { step: '03', title: 'Architecture', desc: 'Solution design & technical planning' },
  { step: '04', title: 'Proposal', desc: 'Detailed scope, timeline & pricing' },
  { step: '05', title: 'Implementation', desc: 'Agile development & configuration' },
  { step: '06', title: 'Go-Live', desc: 'Testing, training & deployment' },
  { step: '07', title: 'Managed Services', desc: 'Ongoing support & optimization' },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">Solutions</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Salesforce Cloud<br /><span className="text-gradient">Solutions</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl">Comprehensive expertise across the entire Salesforce ecosystem to power your enterprise.</p>
        </div>
      </section>

      {/* Clouds Spectrum Quote */}
      <section className="py-12 bg-surface-soft border-b border-border-light">
        <div className="container-vcs max-w-4xl text-center">
          <div className="p-6 bg-white border border-border-light rounded-2xl shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0057FF] mb-3">Our Clouds</h3>
            <p className="text-base md:text-lg text-text-primary font-medium leading-relaxed max-w-3xl mx-auto">
              &ldquo;From business prototyping to enterprise application development and from mobile application development to 24/7 support &amp; customization: VCS is at the heart of the complete software spectrum of services on Salesforce CRM.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clouds.map((cloud, i) => (
              <div key={cloud.name} className="group p-8 rounded-2xl bg-white border border-border-light hover:border-primary-200 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{cloud.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">{cloud.name}</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">{cloud.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {cloud.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-text-muted">
                      <svg className="w-3.5 h-3.5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="py-20 section-light">
        <div className="container-vcs">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Client Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Your Path to Transformation</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {journey.map((j) => (
              <div key={j.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center text-lg font-bold mx-auto mb-3 shadow-lg shadow-primary-500/20">{j.step}</div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">{j.title}</h3>
                <p className="text-xs text-text-muted">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 to-primary-800 text-center">
        <div className="container-vcs">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Cloud Solution</h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">Let our experts recommend the right Salesforce cloud for your business.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
