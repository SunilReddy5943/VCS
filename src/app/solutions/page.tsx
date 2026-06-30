import Link from 'next/link';
import type { Metadata } from 'next';
import ClientJourney from '@/components/sections/solutions/ClientJourney';

export const metadata: Metadata = {
  title: 'Salesforce Solutions | Value Cloud Services',
  description: 'Enterprise Salesforce cloud solutions including Sales, Service, Marketing, Experience, Data Cloud, Agentforce AI, Analytics, and Industry Clouds.',
};

interface CloudSolution {
  name: string;
  icon: string;
  tagline: string;
  desc: string;
  features: string[];
  color: string;
}

const coreClouds: CloudSolution[] = [
  { 
    name: 'Sales Cloud', 
    icon: '📈', 
    tagline: 'Sales Automation & Pipeline Growth',
    desc: 'Accelerate revenue with intelligent lead routing, pipeline forecasting, opportunity tracking, and built-in Einstein AI productivity tools.', 
    features: ['Opportunity Management', 'Pipeline Forecasting', 'Lead Scoring', 'Sales Automation'],
    color: '#0057FF'
  },
  { 
    name: 'Service Cloud', 
    icon: '🛡️', 
    tagline: 'Omni-Channel Customer Support',
    desc: 'Deliver exceptional customer service with AI-powered case management, smart agent consoles, and seamless multi-channel support routing.', 
    features: ['Case Management', 'Knowledge Base', 'Omni-Channel Routing', 'Field Service'],
    color: '#00D5FF'
  },
  { 
    name: 'Marketing Cloud & Pardot', 
    icon: '📣', 
    tagline: '1-to-1 Customer Journey Builder',
    desc: 'Personalize customer engagements across email, mobile, social, and web with automated campaign journeys and predictive lead nurturing.', 
    features: ['Journey Builder', 'Email Automation', 'Lead Nurturing', 'Marketing Analytics'],
    color: '#4DA8FF'
  },
  { 
    name: 'Commerce Cloud', 
    icon: '🛒', 
    tagline: 'Unified B2B & B2C Digital Commerce',
    desc: 'Create seamless shopping experiences across web, mobile, social, and brick-and-mortar storefronts, powered by AI-driven search and recommendations.', 
    features: ['Storefront Templates', 'Order Management', 'AI Recommendations', 'B2B/B2C Portals'],
    color: '#0B41CD'
  },
  { 
    name: 'Experience Cloud', 
    icon: '🌐', 
    tagline: 'Secure Portals & Communities',
    desc: 'Build custom, branded digital spaces and portals for your customers, business partners, distributors, and internal employee networks.', 
    features: ['Partner Portals', 'Customer Communities', 'Content Management', 'Mobile App Support'],
    color: '#0D2266'
  }
];

const specializedClouds: CloudSolution[] = [
  { 
    name: 'Agentforce AI', 
    icon: '🤖', 
    tagline: 'Autonomous AI Agents',
    desc: 'Build and deploy autonomous AI calling agents, customer service chatbots, and campaign managers that operate securely inside your Salesforce guardrails.', 
    features: ['AI Calling Agents', 'Smart Chatbots', 'Workflow Automation', 'Guardrail Compliance'],
    color: '#8B5CF6'
  },
  { 
    name: 'Salesforce Data Cloud', 
    icon: '🗄️', 
    tagline: 'Real-Time Customer Data Platform',
    desc: 'Unify and harmonize customer data from ERPs, legacy databases, web telemetry, and Salesforce into a single, actionable real-time profile.', 
    features: ['Identity Resolution', 'Real-Time Ingestion', 'Segment Activation', 'Data Stream Connectors'],
    color: '#0057FF'
  },
  { 
    name: 'Tableau & Analytics Cloud', 
    icon: '📊', 
    tagline: 'AI-Driven Business Intelligence',
    desc: 'Translate raw enterprise data into interactive Tableau dashboards, predictive Einstein AI metrics, and proactive Tableau Pulse alerts.', 
    features: ['Tableau Pulse', 'Einstein Discovery', 'Interactive Dashboards', 'Live Stream Analytics'],
    color: '#EC4899'
  },
  { 
    name: 'MuleSoft Integration', 
    icon: '🔌', 
    tagline: 'API-Led Enterprise Connectivity',
    desc: 'Connect any application, database, or legacy system (SAP, Oracle) with secure, high-speed bi-directional API gateways and microservices.', 
    features: ['API Manager', 'Anypoint Studio', 'ETL Data Pipelines', 'Legacy Modernization'],
    color: '#00D5FF'
  }
];

const industryClouds: CloudSolution[] = [
  { 
    name: 'Financial Services Cloud', 
    icon: '🏦', 
    tagline: 'Wealth, Banking & Insurance CRM',
    desc: 'Unify client management, track financial goals, map household relationships, and ensure regulatory compliance across advisory teams.', 
    features: ['Financial Profiles', 'Relationship Mapping', 'Action Plans', 'Compliance Tools'],
    color: '#0057FF'
  },
  { 
    name: 'Health Cloud', 
    icon: '🏥', 
    tagline: 'Patient Journey & Care Coordination',
    desc: 'Connect care teams, map patient journeys, track clinical devices, and integrate EHR data securely while maintaining strict compliance.', 
    features: ['Patient Profiles', 'Care Plan Templates', 'EHR Integration', 'HIPAA Compliance'],
    color: '#00D5FF'
  },
  { 
    name: 'Manufacturing Cloud', 
    icon: '⚙️', 
    tagline: 'Run-Rate & Forecasting Visibility',
    desc: 'Bridge the gap between sales agreements and run-rate demand forecasting for seamless supply chain, partner, and operations alignment.', 
    features: ['Sales Agreements', 'Account Forecasting', 'Partner Portals', 'Demand Insights'],
    color: '#0B41CD'
  },
  { 
    name: 'Nonprofit Cloud', 
    icon: '🌱', 
    tagline: 'Donor Engagement & Impact Tracking',
    desc: 'Maximize fundraising efficiency, track grants, manage volunteers, and deliver transparent reports on social impact and program delivery.', 
    features: ['Donor Management', 'Grant Tracking', 'Fundraising Campaigns', 'Impact Analytics'],
    color: '#10B981'
  }
];



export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 hero-gradient relative overflow-hidden">
        {/* Background grids and glows */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0057FF]/5 to-transparent rounded-full pointer-events-none filter blur-3xl" />
        
        <div className="container-vcs relative z-10 text-center max-w-4xl mx-auto">
          <span className="badge-premium-blue mb-6">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Next-Generation <br className="hidden sm:inline" />
            <span className="text-gradient">Salesforce Solutions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Unify customer data, deploy autonomous AI agents, and automate workflows with our comprehensive suite of Salesforce services.
          </p>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FAFBFF] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#0E2A5A] to-[#0B1D3A] shadow-[0_8px_40px_rgba(11,29,58,0.15)] border border-[#0057FF]/10 text-center">
            {/* Glowing accents */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#0057FF]/10 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#8B5CF6]/10 blur-2xl" />
            
            {/* Elegant Quotation Mark SVG */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-[#38BDF8] shadow-inner">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </span>
            </div>

            <p className="font-display text-lg md:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto relative z-10">
              &ldquo;From business prototyping to enterprise application development, and from mobile application development to 24/7 support &amp; customization: <span className="bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">VCS is at the heart</span> of the complete software spectrum of services on Salesforce CRM.&rdquo;
            </p>
            
            {/* Trust badge/divider below */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">Value Cloud Services Promise</span>
              <span className="h-px w-8 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Core CRM Clouds (With Image) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container-vcs">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="badge-premium-blue">
                Category 01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-4">Core CRM Platforms</h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Optimize your front-office operations and customer engagements. We deploy and customize Salesforce Sales, Service, and Marketing clouds to provide your business with a unified Customer 360 view.
              </p>
            </div>
            <div className="lg:col-span-6 h-[250px] md:h-[300px] rounded-3xl overflow-hidden border border-border-light shadow-sm">
              <img 
                src="/images/salesforce_core_crm.png" 
                alt="Salesforce Core CRM" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreClouds.map((cloud) => (
              <div key={cloud.name} className="card-glow-hover p-8 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: `${cloud.color}08` }}>
                    {cloud.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-text-primary group-hover:text-[#0057FF] transition-colors">{cloud.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-4" style={{ color: cloud.color }}>{cloud.tagline}</p>
                  <p className="text-text-secondary text-xs mb-6 leading-relaxed">{cloud.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 border-t border-border-light pt-5">
                  {cloud.features.map(f => (
                    <div key={f} className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <span style={{ color: cloud.color }}>✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Specialized Data & AI (With Image) */}
      <section className="py-24 bg-white border-y border-border-light">
        <div className="container-vcs">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 lg:order-2">
              <span className="badge-premium-purple">
                Category 02
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-4">AI, Data & Integration</h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Connect legacy systems, ingest real-time telemetry, and deploy autonomous AI agents. We combine MuleSoft, Salesforce Data Cloud, and Agentforce to power your workflows with connected intelligence.
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-1 h-[250px] md:h-[300px] rounded-3xl overflow-hidden border border-border-light shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                alt="AI, Data & Integration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedClouds.map((cloud) => (
              <div key={cloud.name} className="card-glow-hover p-7 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: `${cloud.color}08` }}>
                    {cloud.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-text-primary group-hover:text-[#8B5CF6] transition-colors">{cloud.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-4" style={{ color: cloud.color }}>{cloud.tagline}</p>
                  <p className="text-text-secondary text-xs mb-6 leading-relaxed">{cloud.desc}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 border-t border-border-light pt-5">
                  {cloud.features.map(f => (
                    <div key={f} className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <span style={{ color: cloud.color }}>✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Industry-Specific Clouds (With Image) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container-vcs">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="badge-premium-cyan">
                Category 03
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-4">Industry Solutions</h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Accelerate time-to-value with pre-built vertical data models. We deploy Salesforce Industries (Vlocity) to solve sector-specific challenges across Financial Services, Healthcare, and Manufacturing.
              </p>
            </div>
            <div className="lg:col-span-6 h-[250px] md:h-[300px] rounded-3xl overflow-hidden border border-border-light shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Salesforce Industries" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryClouds.map((cloud) => (
              <div key={cloud.name} className="card-glow-hover p-7 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: `${cloud.color}08` }}>
                    {cloud.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-text-primary group-hover:text-[#00D5FF] transition-colors">{cloud.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-4" style={{ color: cloud.color }}>{cloud.tagline}</p>
                  <p className="text-text-secondary text-xs mb-6 leading-relaxed">{cloud.desc}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 border-t border-border-light pt-5">
                  {cloud.features.map(f => (
                    <div key={f} className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <span style={{ color: cloud.color }}>✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <ClientJourney />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0D2266] to-[#0057FF] text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Find Your Cloud Solution</h2>
          <p className="text-base sm:text-lg text-white/75 mb-10 max-w-xl mx-auto">Let our certified architects recommend the right Salesforce cloud configurations for your business goals.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-3.5 bg-white text-[#0057FF] text-sm font-bold rounded-xl hover:bg-[#F3F8FF] transition-all shadow-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
