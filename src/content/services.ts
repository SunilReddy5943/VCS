// =============================================================================
// Services Content — Value Cloud Services
// =============================================================================

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: ServiceBenefit[];
  workflowSteps: string[];
}

export const services: Service[] = [
  {
    id: "salesforce-consulting",
    title: "Salesforce Consulting",
    shortDescription: "Align your CRM strategy with business goals. As a Salesforce Summit Partner, we offer expert consulting that drives continuous innovation and maximizes ROI.",
    longDescription: "Our strategic consulting teams bring deep domain expertise to align Salesforce with your long-term business goals. We guide enterprises through CRM roadmapping, business process optimization, Salesforce architecture design, and change management. By establishing a robust governance framework, we ensure your Salesforce investment scales efficiently while mitigating risks.",
    icon: "consulting",
    features: [
      "Business Process Alignment",
      "Digital Transformation Roadmaps",
      "CRM Auditing & Health Checks",
      "Enterprise Solution Architecture",
      "AI Strategy & Agentforce Planning",
      "Change Management & Training"
    ],
    benefits: [
      {
        title: "Summit-Level Expertise",
        description: "Work with elite certified consultants who understand your industry and business processes."
      },
      {
        title: "Strategic Outcomes",
        description: "We don't just implement technology; we design strategies that drive customer retention, sales growth, and operational efficiency."
      }
    ],
    workflowSteps: [
      "Discovery & Assessment",
      "Gap Analysis",
      "Strategic Roadmap",
      "Governance Setup"
    ]
  },
  {
    id: "implementation",
    title: "Implementation & Development",
    shortDescription: "Deploy Salesforce solutions tailored to your industry. We build robust, secure, and future-ready business applications using Apex, LWC, and Flow.",
    longDescription: "Transform your operations with seamless Salesforce deployments. We specialize in custom application development, declarative automation, and complex configurations across Sales, Service, Marketing, Commerce, and Industry Clouds. Our agile methodology ensures accelerated time-to-market, delivering high-quality, production-ready solutions in weeks.",
    icon: "implementation",
    features: [
      "Core & Industry Cloud Setup",
      "Custom LWC & Apex Development",
      "Declarative Flow Automation",
      "Custom Application Development",
      "QA & Automated Testing",
      "Agentforce AI Agent Deployment"
    ],
    benefits: [
      {
        title: "Accelerated ROI",
        description: "Our battle-tested implementation frameworks compress timelines by up to 40% without compromising quality."
      },
      {
        title: "Future-Ready Architecture",
        description: "We build scalable, clean-code solutions that align with Salesforce best practices, making future updates seamless."
      }
    ],
    workflowSteps: [
      "Requirements Mapping",
      "System Configuration",
      "Custom Development",
      "Validation & Deployment"
    ]
  },
  {
    id: "managed-services",
    title: "Managed Services & Support",
    shortDescription: "Keep your Salesforce ecosystem optimized, secure, and up-to-date with our proactive 24/7 managed support and administration.",
    longDescription: "Maximize system uptime and performance while trimming IT maintenance costs. Our ITIL-aligned managed services offer proactive Remote Monitoring and Management (RMM), helpdesk support, system administration, regular security audits, and continuous feature enhancements. We keep your Salesforce instance healthy so you can focus on growth.",
    icon: "managed",
    features: [
      "24/7 Helpdesk & Support",
      "Proactive Monitoring & Audits",
      "Security & Compliance Updates",
      "Customization & Adjustments",
      "Release Management & Upgrades",
      "Performance Tuning & Cleanups"
    ],
    benefits: [
      {
        title: "Operational Peace of Mind",
        description: "Our dedicated support engineers resolve issues rapidly, keeping daily business operations running smoothly."
      },
      {
        title: "Predictable IT Spend",
        description: "Flexible, budget-friendly monthly retainer models that eliminate the high cost of hiring full-time in-house admins."
      }
    ],
    workflowSteps: [
      "Incident Monitoring",
      "Triage & Resolution",
      "Quality Testing",
      "Proactive Tuning"
    ]
  },
  {
    id: "integration",
    title: "Integration & Data Services",
    shortDescription: "Unify fragmented data silos. We build secure, real-time integrations between Salesforce, ERPs, and legacy databases using MuleSoft and APIs.",
    longDescription: "Unlock a true 360-degree view of your customers by connecting your entire enterprise. We design and implement robust API-led integrations and ETL processes using MuleSoft, Heroku, and custom middleware. Whether connecting legacy on-premise databases or syncing real-time data with Salesforce Data Cloud, we ensure seamless, high-speed data flows.",
    icon: "integration",
    features: [
      "API Design (REST, SOAP)",
      "MuleSoft API Gateways",
      "Salesforce Data Cloud Setup",
      "ETL & Data Migrations",
      "ERP & Legacy System Connect",
      "Real-Time Sync Pipelines"
    ],
    benefits: [
      {
        title: "Zero Data Silos",
        description: "Equip your teams with real-time customer intelligence by bridging the gap between CRM, ERP, and marketing platforms."
      },
      {
        title: "Composable Architecture",
        description: "Build an API-first enterprise architecture that makes adding or updating business applications effortless."
      }
    ],
    workflowSteps: [
      "Data Mapping & Schema Design",
      "API Development",
      "ETL Execution",
      "Performance Testing"
    ]
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    shortDescription: "Scale your team instantly. Access certified Salesforce architects, developers, and consultants ready to integrate with your projects.",
    longDescription: "Accelerate your delivery capacity with elite, pre-screened Salesforce talent. Whether you need a Technical Architect for complex integrations, a Developer for custom LWC, or an Administrator for day-to-day operations, we provide certified professionals who match your technical and cultural requirements, onboarding them in as little as 24 hours.",
    icon: "staff",
    features: [
      "Certified Architects & Tech Leads",
      "Custom LWC/Apex Developers",
      "Functional Consultants & BAs",
      "Salesforce Administrators",
      "QA & Automated Test Engineers",
      "Flexible Engagement Models"
    ],
    benefits: [
      {
        title: "Rapid Resource Onboarding",
        description: "Scale your team up or down instantly based on project demands with pre-vetted professionals."
      },
      {
        title: "Reduced Overhead",
        description: "Avoid recruitment delays, onboarding overhead, and long-term hiring liabilities."
      }
    ],
    workflowSteps: [
      "Requirement Analysis",
      "Profile Selection",
      "Technical Screening",
      "Onboarding & Integration"
    ]
  }
];
