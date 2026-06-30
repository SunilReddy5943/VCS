// =============================================================================
// Solutions Content — Value Cloud Services
// =============================================================================

export interface Solution {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  useCases: string[];
  benefits: string[];
}

export const solutions: Solution[] = [
  {
    id: 'sales-cloud',
    name: 'Sales Cloud',
    icon: 'sales',
    description:
      'Salesforce Sales Cloud is the world\'s #1 CRM platform — and VCS is among the most experienced partners in deploying it. We configure Sales Cloud to mirror your unique sales methodology, automate pipeline management, and give your leadership real-time revenue visibility. From lead scoring to forecast accuracy, we engineer every element to accelerate deal velocity and quota attainment.',
    features: [
      'Advanced lead scoring and intelligent lead routing',
      'Customised opportunity management and sales stage automation',
      'Territory management and quota planning',
      'Einstein AI-powered forecasting and pipeline analytics',
      'Salesforce Inbox and activity capture integration',
      'Partner relationship management and channel sales enablement',
    ],
    useCases: [
      'Enterprise B2B sales teams managing complex, multi-stakeholder deal cycles across geographies',
      'Channel-driven organisations needing unified visibility across direct and indirect sales pipelines',
      'High-growth companies requiring scalable sales processes that maintain discipline as headcount triples',
    ],
    benefits: [
      'Increase pipeline visibility and forecast accuracy by up to 42%',
      'Reduce sales cycle length by 28% through process automation',
      'Improve rep productivity by eliminating 5+ hours of manual data entry per week',
      'Drive consistent sales methodology adoption across global teams',
    ],
  },
  {
    id: 'service-cloud',
    name: 'Service Cloud',
    icon: 'service',
    description:
      'Exceptional customer service is the ultimate competitive differentiator. VCS deploys Salesforce Service Cloud to transform your support operations — from reactive ticket resolution to proactive, omnichannel customer care. We implement intelligent case routing, self-service portals, field service management, and AI-powered chatbots that resolve issues faster while reducing operational costs.',
    features: [
      'Omnichannel case management across voice, chat, email, and social',
      'AI-powered Einstein Bots and next-best-action recommendations',
      'Knowledge base management with intelligent article suggestions',
      'Field Service Lightning with optimised scheduling and mobile workforce',
      'Customer self-service portals with community-driven support',
      'Entitlement management and service-level agreement tracking',
    ],
    useCases: [
      'High-volume contact centres handling 50,000+ monthly interactions across multiple channels',
      'Field service organisations managing distributed technician workforces with complex scheduling needs',
      'B2B enterprises requiring tiered SLA management with automated escalation workflows',
    ],
    benefits: [
      'Improve first-contact resolution rates by 35% with intelligent routing',
      'Reduce average handle time by 25% through AI-assisted agent workflows',
      'Cut support costs by 30% with self-service portal and chatbot deflection',
      'Increase customer satisfaction (CSAT) scores by 20+ points within six months',
    ],
  },
  {
    id: 'marketing-cloud',
    name: 'Marketing Cloud',
    icon: 'marketing',
    description:
      'VCS helps marketing teams harness the full power of Salesforce Marketing Cloud to orchestrate personalised, data-driven customer journeys at scale. We implement Journey Builder, Email Studio, Advertising Studio, and Marketing Cloud Intelligence to help you engage prospects and customers with the right message, on the right channel, at the right moment — driving measurable pipeline and revenue impact.',
    features: [
      'Journey Builder multi-step campaign orchestration',
      'Email Studio with dynamic content and A/B testing',
      'Advertising Studio for CRM-powered paid media targeting',
      'Marketing Cloud Intelligence for cross-channel analytics',
      'Personalisation and real-time interaction management',
      'Data Cloud integration for unified customer profiles',
    ],
    useCases: [
      'B2C brands running lifecycle marketing programmes across email, SMS, push, and paid media',
      'B2B marketing teams implementing account-based marketing strategies with Sales Cloud alignment',
      'Retail organisations delivering personalised product recommendations and abandoned cart recovery journeys',
    ],
    benefits: [
      'Increase marketing-sourced pipeline by 40% through intelligent lead nurturing',
      'Improve email engagement rates by 50% with AI-driven send-time optimisation',
      'Reduce cost-per-acquisition by 30% with CRM-powered audience targeting',
      'Achieve unified measurement across every marketing channel and touchpoint',
    ],
  },
  {
    id: 'experience-cloud',
    name: 'Experience Cloud',
    icon: 'experience',
    description:
      'Salesforce Experience Cloud enables enterprises to build branded, connected digital experiences for customers, partners, and employees. VCS designs and develops portals, communities, and microsites that extend your Salesforce data to external stakeholders — driving self-service adoption, partner collaboration, and customer engagement without building custom web applications from scratch.',
    features: [
      'Branded customer self-service portals and knowledge bases',
      'Partner portals with deal registration and co-marketing tools',
      'Employee intranets and help desk communities',
      'Lightning Bolt templated solutions for rapid deployment',
      'CMS content management and personalised page experiences',
      'External identity management and social sign-on',
    ],
    useCases: [
      'Insurance companies building policyholder portals for claims submission and document management',
      'Technology vendors creating partner ecosystems with deal registration and MDF management',
      'Government agencies deploying citizen-facing service portals with case tracking and appointment scheduling',
    ],
    benefits: [
      'Reduce inbound support volume by 45% through self-service deflection',
      'Accelerate partner onboarding and productivity by 50%',
      'Improve customer NPS by giving stakeholders 24/7 access to their data',
      'Launch new digital experiences 3x faster than custom development alternatives',
    ],
  },
  {
    id: 'analytics-cloud',
    name: 'Analytics Cloud',
    icon: 'analytics',
    description:
      'Data-driven decisions require more than dashboards — they require actionable intelligence embedded in the workflow. VCS implements Tableau CRM (formerly Einstein Analytics) and Tableau to deliver interactive visualisations, predictive models, and embedded analytics that empower every role in your organisation to make faster, smarter decisions directly within Salesforce.',
    features: [
      'Tableau CRM interactive dashboards and lenses',
      'Einstein Discovery automated predictive modelling',
      'Embedded analytics within Sales, Service, and custom apps',
      'Tableau integration for enterprise-wide data visualisation',
      'Data Prep recipes for complex data transformation',
      'Mobile-optimised analytics for on-the-go decision-making',
    ],
    useCases: [
      'Sales leaders needing predictive deal scoring and pipeline risk analysis directly in their workflow',
      'Operations teams requiring real-time KPI dashboards that blend Salesforce and external data sources',
      'Executive teams demanding unified C-suite scorecards with drill-down capabilities across business units',
    ],
    benefits: [
      'Reduce time-to-insight from days to minutes with embedded, real-time analytics',
      'Improve forecast accuracy by 30% with AI-powered predictive models',
      'Democratise data access across the organisation without requiring analyst support',
      'Blend Salesforce data with external sources for holistic business intelligence',
    ],
  },
  {
    id: 'cpq',
    name: 'CPQ',
    icon: 'cpq',
    description:
      'Salesforce CPQ (Configure, Price, Quote) transforms how enterprises sell complex products and services. VCS implements CPQ solutions that automate product configuration, enforce pricing guardrails, generate professional proposals, and accelerate approval workflows — reducing quote errors and compressing sales cycles from weeks to hours for even the most complex deal structures.',
    features: [
      'Guided selling and intelligent product configuration',
      'Dynamic pricing rules, discounting policies, and approval chains',
      'Automated quote document generation with branded templates',
      'Subscription and usage-based billing management',
      'Contract lifecycle management and renewal automation',
      'Advanced approvals with multi-level and parallel routing',
    ],
    useCases: [
      'Technology companies selling configurable SaaS solutions with tiered pricing and add-on modules',
      'Manufacturing firms quoting complex BOMs (Bills of Materials) with interdependent component rules',
      'Professional services organisations managing SOW-based engagements with blended rate cards and milestone billing',
    ],
    benefits: [
      'Reduce quote generation time by 65% with automated configuration and pricing',
      'Eliminate pricing errors and unauthorised discounts with intelligent guardrails',
      'Increase average deal size by 15% through guided upsell and cross-sell recommendations',
      'Accelerate the contract-to-cash cycle by automating renewals and amendments',
    ],
  },
  {
    id: 'industries',
    name: 'Industries',
    icon: 'industries',
    description:
      'Salesforce Industries (formerly Vlocity) delivers pre-built, industry-specific data models, processes, and UI components that dramatically accelerate time-to-value for vertical solutions. VCS leverages Industries Cloud for financial services, healthcare, communications, and manufacturing — giving our clients a 60% head start over generic CRM implementations with out-of-the-box industry functionality.',
    features: [
      'Industry-specific data models and business processes (OmniStudio)',
      'Pre-built OmniScripts for guided digital interactions',
      'FlexCards for contextual, role-based information display',
      'Integration Procedures for complex backend orchestration',
      'Industry-specific Einstein AI models and analytics',
      'Document generation and e-signature workflows',
    ],
    useCases: [
      'Banks implementing digital account opening and loan origination journeys with Financial Services Cloud',
      'Telecom operators deploying product catalogue management and order decomposition with Communications Cloud',
      'Healthcare providers building patient intake and care plan management workflows with Health Cloud',
    ],
    benefits: [
      'Reduce implementation timelines by 60% with pre-built industry processes and data models',
      'Achieve regulatory compliance faster with industry-certified configurations',
      'Deliver superior user experiences with purpose-built OmniStudio components',
      'Future-proof your investment with Salesforce\'s continuous industry innovation roadmap',
    ],
  },
];
