// =============================================================================
// Home Page Content — Value Cloud Services
// =============================================================================

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroData {
  badge: string;
  title: string[];
  subtitle: string;
  cta: {
    primary: HeroCTA;
    secondary: HeroCTA;
  };
}

export interface BusinessProblem {
  id: string;
  icon: string;
  title: string;
  description: string;
  solution: string;
}

export interface SolutionOverview {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface StatItem {
  value: number | string;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PlatformNode {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

export interface LifecyclePhase {
  phase: string;
  step: string;
  description: string;
  details: string[];
}

export interface ImplementationLifecycleData {
  title: string;
  subtitle: string;
  salesforce: LifecyclePhase[];
  vlocity: LifecyclePhase[];
}

export const hero: HeroData = {
  badge: 'Salesforce Summit Partner',
  title: ['AI-Driven', 'Salesforce Excellence', 'For Global Enterprises'],
  subtitle: 'We architect, deploy, and scale high-performance Salesforce solutions, MuleSoft integrations, and Agentforce AI agents. We drive 2X ROI with speed, security, and scale.',
  cta: {
    primary: { label: 'Book Free Consultation', href: '/contact' },
    secondary: { label: 'Explore Solutions', href: '/solutions' }
  }
};

export const trustLogos: string[] = [
  'Fortune 500 Financial',
  'Global Retail Leaders',
  'Government Agencies',
  'Telecom Giants',
  'Healthcare Enterprises',
  'Manufacturing Innovators',
];

export const problems: BusinessProblem[] = [
  {
    id: 'disconnected',
    icon: 'disconnected',
    title: 'Fragmented Customer Intelligence',
    description:
      'Critical customer data trapped in disconnected silos — CRM, ERP, marketing platforms, and legacy databases — making it impossible to deliver a unified Customer 360 experience.',
    solution: 'Unified Customer 360°',
  },
  {
    id: 'slow',
    icon: 'slow',
    title: 'Slow AI & Automation Adoption',
    description:
      'Struggling to integrate conversational AI agents and workflow automation. Without expert guidance, deploying AI becomes a costly and slow-moving liability.',
    solution: 'Agentforce AI Agent Integration',
  },
  {
    id: 'legacy',
    icon: 'legacy',
    title: 'Legacy System Burden',
    description:
      'Aging on-premise systems consuming 70% of IT budgets on maintenance alone, blocking agility and slowing down cloud migration.',
    solution: 'MuleSoft Integration & Modernization',
  },
  {
    id: 'scaling',
    icon: 'scaling',
    title: 'Talent Sourcing Bottlenecks',
    description:
      'Difficulty hiring and scaling certified Salesforce developers, architects, and administrators to meet rapid project delivery timelines.',
    solution: 'Elite Staff Augmentation',
  },
];

export const solutionsOverview: SolutionOverview[] = [
  {
    icon: 'unify',
    title: 'Unified Customer 360°',
    description:
      'Consolidate every customer touchpoint into a single source of truth across Sales, Service, Marketing, and Commerce Clouds.',
    link: '/solutions',
  },
  {
    icon: 'accelerate',
    title: 'Agentforce AI Deployment',
    description:
      'Build and deploy autonomous AI calling agents, chatbots, and campaign managers inside Salesforce in hours, not months.',
    link: '/solutions',
  },
  {
    icon: 'modernise',
    title: 'MuleSoft Integration & Migration',
    description:
      'Seamlessly connect legacy databases and ERPs with Salesforce using secure, high-speed API-led architectures.',
    link: '/services',
  },
  {
    icon: 'scale',
    title: 'Summit Partner Advisory',
    description:
      'Get expert consulting, system audits, and custom LWC/Apex development tailored to your specific industry compliance.',
    link: '/services',
  },
];

export const statsContent: StatItem[] = [
  { value: 14, suffix: '+', label: 'Years in Industry' },
  { value: '3k', suffix: '+', label: 'Salesforce Projects' },
  { value: 30, suffix: '+', label: 'Industries Served' },
  { value: 100, suffix: '+', label: 'Certified Experts' },
  { value: 5, suffix: '★', label: 'AppExchange Rating' },
  { value: 24, suffix: '/7', label: 'Support Availability' },
  { value: 2, suffix: 'h', label: 'Average Response Time' },
  { value: 99.5, suffix: '%', label: 'Project Success Rate' },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery & Assessment',
    description:
      'Deep-dive into your business processes, technology landscape, and strategic objectives to build a comprehensive CRM roadmap.',
  },
  {
    title: 'Strategy & CRM Roadmapping',
    description:
      'Craft a phased transformation plan with clear milestones, ROI projections, and architecture recommendations.',
  },
  {
    title: 'Architecture & Custom Design',
    description:
      'Design scalable, future-proof solution architectures leveraging Salesforce best practices and security frameworks.',
  },
  {
    title: 'Agile Development & Coding',
    description:
      'Build custom LWC components, Apex classes, and flow automations in iterative two-week sprints with constant feedback.',
  },
  {
    title: 'Rigorous QA & Testing',
    description:
      'Perform comprehensive unit, integration, user acceptance (UAT), and performance testing to ensure enterprise reliability.',
  },
  {
    title: 'Deployment & Training',
    description:
      'Execute seamless production release with change management, role-based user training, and post-launch support.',
  },
  {
    title: 'Managed Services & Optimisation',
    description:
      'Provide ongoing platform monitoring, security updates, and feature enhancements to ensure continuous value compounding.',
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

export const platformNodes: PlatformNode[] = [
  { id: 'data', x: 50, y: 50, label: 'Salesforce Data Cloud', description: 'Unify all your customer profiles, ERP records, and real-time telemetry into a single, cohesive source of truth.' },
  { id: 'ai', x: 50, y: 15, label: 'Agentforce AI', description: 'Deploy autonomous AI agents that converse, trigger workflows, and handle customer queries inside your CRM.' },
  { id: 'analytics', x: 85, y: 50, label: 'Tableau & Einstein Analytics', description: 'Transform operational data into actionable dashboards and AI-driven predictive insights.' },
  { id: 'crm', x: 15, y: 50, label: 'Salesforce Customer 360', description: 'Power your front office with optimized Sales, Service, Marketing, and Commerce Clouds.' },
  { id: 'integration', x: 50, y: 85, label: 'MuleSoft Integration', description: 'Connect legacy systems, APIs, and databases with secure, high-speed bi-directional queues.' }
];

export const implementationLifecycle: ImplementationLifecycleData = {
  title: 'Implementation & Delivery Roadmaps',
  subtitle: 'Discover our proven, structured methodologies that guarantee quality, compliance, and rapid time-to-market for enterprise platforms.',
  salesforce: [
    {
      phase: 'Plan & Prepare',
      step: '01',
      description: 'Align project objectives with business goals, establish team governance, and outline project scopes.',
      details: [
        'Define project and performance goals',
        'Prioritize business milestones',
        'Finalize release roadmap',
        'Assemble delivery and steering teams'
      ]
    },
    {
      phase: 'Design & Map',
      step: '02',
      description: 'Conduct business process workshops to capture detailed system requirements and design solution blueprints.',
      details: [
        'Record functional and system requirements',
        'Define target business processes',
        'Apply industry best-practice architectures',
        'Map legacy data migration pipelines'
      ]
    },
    {
      phase: 'Develop & Deploy',
      step: '03',
      description: 'Iterative system building, custom coding, automated testing, data loads, and training.',
      details: [
        'Utilize pre-built accelerators for speed',
        'Configure standard objects and custom LWC',
        'Write Apex and automate processes',
        'Perform enterprise data loads',
        'Ensure quality and run user training'
      ]
    },
    {
      phase: 'Manage & Enhance',
      step: '04',
      description: 'Continuous platform evolution, support services, and routine release updates.',
      details: [
        'Provide 24/7 support & SLAs',
        'Manage system data quality & integrity',
        'Deploy custom feature enhancements',
        'Adhere to official Salesforce releases',
        'Deliver continuous consulting advisory'
      ]
    }
  ],
  vlocity: [
    {
      phase: 'Identify & Prioritize',
      step: '01',
      description: 'Audit business requirements and prioritize vertical Vlocity capabilities.',
      details: [
        'Identify specific Vlocity platform features',
        'Determine detailed user story scope',
        'Document target Vlocity object blueprints'
      ]
    },
    {
      phase: 'Assign & Monitor',
      step: '02',
      description: 'Allocate certified OmniStudio and Vlocity developers, and establish progress tracking metrics.',
      details: [
        'Assign qualified OmniStudio developers',
        'Initialize Agile sprint boards',
        'Monitor development progress metrics'
      ]
    },
    {
      phase: 'Design & Develop',
      step: '03',
      description: 'Build high-speed guided user journeys using OmniStudio OmniScripts, FlexCards, and Integration Procedures.',
      details: [
        'Apply OmniStudio design best practices',
        'Build intuitive, guided OmniScripts',
        'Implement high-performance Integration Procedures'
      ]
    },
    {
      phase: 'Validate & Approve',
      step: '04',
      description: 'Thorough system verification, defect management, and user sign-off.',
      details: [
        'Run comprehensive OmniStudio test cases',
        'Log and resolve functional bugs',
        'Acquire business stakeholder sign-off'
      ]
    },
    {
      phase: 'Train & Deploy',
      step: '05',
      description: 'Run user adoption training and deploy modular components securely using Salesforce DX or Copado.',
      details: [
        'Conduct interactive user training',
        'Schedule secure production deployments',
        'Communicate release updates to business users'
      ]
    },
    {
      phase: 'Track & Report',
      step: '06',
      description: 'Establish continuous system health checking, optimization, and post-go-live managed support.',
      details: [
        'Review periodic platform health reports',
        'Analyze business value and track user progress',
        'Deliver on-demand consulting optimization'
      ]
    }
  ]
};
