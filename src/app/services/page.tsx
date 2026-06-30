import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services | Value Cloud Services',
  description: 'Enterprise Salesforce consulting, implementation, managed services, integration, and staff augmentation solutions.',
};

const faqs = [
  { q: 'What Salesforce certifications does your team hold?', a: 'Our team holds 100+ certifications across all Salesforce and Vlocity industry clouds including Platform Developer, Solution Architect, Consultant, and Administrator credentials.' },
  { q: 'What is the typical managed services model?', a: 'We offer ITIL-aligned managed support services with proactive Remote Monitoring and Management (RMM), reducing maintenance overhead and providing 24/7 system security.' },
  { q: 'Can you integrate Salesforce with our existing systems?', a: 'Absolutely. We specialize in enterprise integrations using MuleSoft, REST/SOAP APIs, and custom middleware to connect Salesforce with ERP, marketing, and legacy databases.' },
  { q: 'Do you offer staff augmentation?', a: 'Yes, we simplify the hiring process through our certified multi-location team, sourcing niche Salesforce professionals and handling talent management.' }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Enterprise Salesforce<br /><span className="text-gradient">Services & Solutions</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-8">Comprehensive consulting, implementation, and managed services that simplify technology adoption.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-20 ${i % 2 === 0 ? 'bg-surface-white' : 'bg-surface-soft border-y border-border-light'}`}>
          <div className="container-vcs">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-start">
                
                {/* Text Block */}
                <div className="md:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-500 mb-2 block">Service Tier 0{i + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">{service.title}</h2>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">{service.longDescription}</p>
                  
                  {/* Workflow Steps Flowchart Indicator */}
                  {service.workflowSteps && (
                    <div className="mt-8 pt-6 border-t border-border-light">
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Service Delivery Workflow:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.workflowSteps.map((step, idx) => (
                          <div key={step} className="flex items-center gap-1.5 text-xs text-text-secondary bg-white border border-border-light px-3 py-1.5 rounded-lg shadow-sm">
                            <span className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-[9px]">{idx + 1}</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Capabilities Grid */}
                <div className="md:col-span-5 space-y-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-text-muted">Key Capabilities</h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {service.features.map(f => (
                      <div key={f} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border-light shadow-sm">
                        <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-sm font-semibold text-text-primary">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group border border-border-light rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-text-primary hover:bg-surface-soft transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-4 text-text-secondary">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 to-primary-800 text-center">
        <div className="container-vcs">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">Let&apos;s discuss how our certified team can help you build scalable and future-ready solutions.</p>
          <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
