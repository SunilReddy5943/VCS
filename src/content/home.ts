// =============================================================================
// Home Page Content — Value Cloud Services
// =============================================================================

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface BusinessProblem {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionOverview {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export const heroContent: HeroContent = {
  headline: 'Transform Your Enterprise with Salesforce',
  subheadline:
    'We architect and deliver end-to-end Salesforce solutions that unify your customer data, automate critical workflows, and drive measurable revenue growth — trusted by 200+ enterprises across 15 countries.',
  primaryCta: { label: 'Schedule a Consultation', href: '/contact' },
  secondaryCta: { label: 'Explore Our Work', href: '/case-studies' },
};

export const trustLogos: string[] = [
  'Fortune 500 Financial',
  'Global Retail Leaders',
  'Government Agencies',
  'Telecom Giants',
  'Healthcare Enterprises',
  'Manufacturing Innovators',
];

export const businessProblems: BusinessProblem[] = [
  {
    icon: 'disconnected',
    title: 'Fragmented Customer Intelligence',
    description:
      'Critical customer data trapped in disconnected silos — CRM, ERP, marketing platforms, and legacy databases — making it impossible to deliver the unified, personalised experiences your customers demand.',
  },
  {
    icon: 'slowTransformation',
    title: 'Stalled Digital Transformation',
    description:
      'Digital initiatives that drag on for years, hemorrhaging budget and executive confidence. Without a proven methodology, transformation projects become expensive liabilities instead of strategic assets.',
  },
  {
    icon: 'legacy',
    title: 'Legacy System Burden',
    description:
      'Aging on-premise systems consuming 70% of your IT budget on maintenance alone, leaving no room for innovation. Every quarter of delay widens the gap between you and cloud-native competitors.',
  },
  {
    icon: 'scaling',
    title: 'Inability to Scale Operations',
    description:
      'Manual processes and rigid architectures that buckle under growth. When your business expands into new markets or launches new products, your technology should accelerate that momentum — not throttle it.',
  },
];

export const solutionsOverview: SolutionOverview[] = [
  {
    icon: 'unify',
    title: 'Unified Customer 360°',
    description:
      'Consolidate every customer touchpoint into a single source of truth with Salesforce Customer 360, enabling hyper-personalised engagement at every stage of the lifecycle.',
    link: '/solutions/sales-cloud',
  },
  {
    icon: 'accelerate',
    title: 'Accelerated Cloud Adoption',
    description:
      'Our battle-tested implementation methodology delivers production-ready Salesforce deployments in 8–16 weeks, not 8–16 months. We compress timelines without compromising quality.',
    link: '/services/implementation',
  },
  {
    icon: 'modernise',
    title: 'Legacy Modernisation',
    description:
      'Seamlessly migrate from on-premise legacy systems to the Salesforce ecosystem with zero data loss, minimal downtime, and an architecture designed for the next decade of growth.',
    link: '/services/integration-data',
  },
  {
    icon: 'scale',
    title: 'Elastic Enterprise Architecture',
    description:
      'Design and deploy composable, API-first architectures on Salesforce and MuleSoft that scale effortlessly — from 100 users to 100,000 without re-platforming.',
    link: '/services/cloud-expertise',
  },
];

export const statsContent: StatItem[] = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Enterprise Clients' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 100, suffix: '+', label: 'Certified Experts' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 24, suffix: '/7', label: 'Support Availability' },
  { value: 2, suffix: 'h', label: 'Average Response Time' },
  { value: 99.5, suffix: '%', label: 'Project Success Rate' },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery & Assessment',
    description:
      'Deep-dive into your business processes, technology landscape, and strategic objectives to build a comprehensive understanding of where you are and where you need to be.',
  },
  {
    title: 'Strategy & Roadmap',
    description:
      'Craft a phased transformation roadmap with clear milestones, resource plans, and ROI projections — aligned to your budget cycles and business priorities.',
  },
  {
    title: 'Architecture & Design',
    description:
      'Design scalable, future-proof solution architectures leveraging Salesforce best practices, integration patterns, and security frameworks tailored to your enterprise.',
  },
  {
    title: 'Agile Development',
    description:
      'Build iteratively in two-week sprints with continuous stakeholder feedback, ensuring every feature delivers tangible business value before moving to the next.',
  },
  {
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous automated and manual testing across unit, integration, UAT, and performance layers — ensuring enterprise-grade reliability before go-live.',
  },
  {
    title: 'Deployment & Training',
    description:
      'Seamless production deployment with comprehensive change management, role-based training programmes, and hypercare support to maximise user adoption from day one.',
  },
  {
    title: 'Ongoing Optimisation',
    description:
      'Continuous platform monitoring, quarterly health checks, and proactive enhancements to ensure your Salesforce investment keeps compounding value year after year.',
  },
];

export const technologyPartners: string[] = [
  'Salesforce',
  'MuleSoft',
  'Tableau',
  'Slack',
  'AWS',
  'Azure',
  'Google Cloud',
  'Heroku',
];
