import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services | Value Cloud Services',
  description: 'Enterprise Salesforce consulting, implementation, managed services, integration, and staff augmentation solutions.',
};

// Map service IDs to premium, colorful images
const serviceImages: Record<string, string> = {
  'salesforce-consulting': '/images/salesforce_consulting.jpg', // Consulting
  'implementation': '/images/salesforce_implementation_development.jpg', // Custom Dev / 3D illustration
  'managed-services': '/images/salesforce_managed_services.jpg', // Support team
  'integration': '/images/salesforce_integration.png', // Integration / Tech network
  'staff-augmentation': '/images/salesforce_staff_augmentation.jpg' // Team collaborating
};

const faqs = [
  { 
    q: 'What Salesforce certifications does your team hold?', 
    a: 'Our team holds 100+ certifications across all Salesforce and Vlocity industry clouds, including Certified Technical Architect (CTA), Application Architect, System Architect, Platform Developer II, OmniStudio Developer, and Industry Consultant credentials.' 
  },
  { 
    q: 'What is your managed services model?', 
    a: 'We offer ITIL-aligned managed support services with flexible monthly retainers. This includes 24/7 proactive monitoring, security updates, regular system health checks, user management, and custom feature enhancements.' 
  },
  { 
    q: 'Can you integrate Salesforce with our existing systems?', 
    a: 'Yes. We specialize in enterprise integrations using MuleSoft Anypoint Platform, REST/SOAP APIs, Heroku, and custom ETL middleware to connect Salesforce with ERPs (SAP, Oracle), billing engines, and legacy databases.' 
  },
  { 
    q: 'How does your Staff Augmentation service work?', 
    a: 'We provide pre-vetted, certified Salesforce professionals (developers, architects, administrators, and business analysts) who integrate directly into your teams and projects. Resources can be onboarded in as little as 24 hours.' 
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 hero-gradient relative overflow-hidden">
        {/* Background grids and glows */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0057FF]/5 to-transparent rounded-full pointer-events-none filter blur-3xl" />
        
        <div className="container-vcs relative z-10 text-center max-w-4xl mx-auto">
          <span className="badge-premium-blue mb-6">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Enterprise Salesforce <br className="hidden sm:inline" />
            <span className="text-gradient">Services & Support</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            End-to-end consulting, custom development, API integration, and proactive managed support to maximize your CRM investment.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3.5 bg-[#0057FF] text-white text-sm font-bold rounded-xl hover:bg-[#0046CC] transition-all shadow-lg hover:-translate-y-0.5">
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        const imageUrl = serviceImages[service.id] || '/images/salesforce_core_crm.png';

        return (
          <section 
            key={service.id} 
            id={service.id} 
            className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC] border-y border-border-light'}`}
          >
            <div className="container-vcs">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Left/Right Column: Image + Capabilities */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="h-[260px] md:h-[300px] rounded-2xl overflow-hidden border border-border-light shadow-sm">
                      <img 
                        src={imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xs font-extrabold uppercase tracking-widest text-text-muted">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-1 gap-2.5">
                        {service.features.map(f => (
                          <div 
                            key={f} 
                            className="card-premium flex items-start gap-3 p-3.5"
                          >
                            <svg className="w-4 h-4 text-[#0057FF] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs font-bold text-text-primary">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Left/Right Column: Text Block */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="badge-premium-blue mb-3 block w-fit">
                      Service Tier 0{i + 1}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-5">
                      {service.title}
                    </h2>
                    <p className="text-base text-text-secondary leading-relaxed mb-8">
                      {service.longDescription}
                    </p>
                    
                    {/* Workflow Steps */}
                    {service.workflowSteps && (
                      <div className="mt-8 pt-8 border-t border-border-light">
                        <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                          Delivery Workflow:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {service.workflowSteps.map((step, idx) => (
                            <div 
                              key={step} 
                              className="flex items-center gap-2 text-xs text-text-secondary bg-white border border-border-light px-4 py-2 rounded-xl shadow-subtle hover:border-[#0057FF]/20 transition-all"
                            >
                              <span className="w-5 h-5 rounded-full bg-[#0057FF] text-white flex items-center justify-center font-bold text-[10px]">
                                {idx + 1}
                              </span>
                              <span className="font-semibold">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="py-24 bg-[#F8FAFC] border-t border-border-light">
        <div className="container-vcs max-w-3xl">
          <div className="text-center mb-16">
            <span className="badge-premium-blue mb-4">
              Support FAQ
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-center">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details 
                key={faq.q} 
                className="group border border-border-light rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4.5 cursor-pointer font-bold text-sm text-text-primary hover:bg-[#F3F8FF] transition-colors">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-text-muted">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-xs text-text-secondary leading-relaxed border-t border-[#F8FAFC]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0D2266] to-[#0057FF] text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg text-white/75 mb-10 max-w-xl mx-auto">Let&apos;s discuss how our certified team can help you build scalable and future-ready Salesforce solutions.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3.5 bg-white text-[#0057FF] text-sm font-bold rounded-xl hover:bg-[#F3F8FF] transition-all shadow-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
