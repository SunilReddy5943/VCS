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
    shortDescription: "Our consultants bring real world experience and domain expertise to help achieve transformation around global outsourcing, IT cost optimization, complex package integration and risk management.",
    longDescription: "Our consultants bring real world experience and domain expertise to help achieve transformation around global outsourcing, IT cost optimization, complex package integration and risk management. With our vast experience in open source technologies, we help our clients undergo business transformation through creating or customizing solutions to suit their business needs. We built long lasting relationships with our clients being an ally and true partner in every step of customer digital transformation journey.",
    icon: "consulting",
    features: [
      "Business process consulting",
      "Digital transformation strategy",
      "CRM planning",
      "Salesforce architecture",
      "Technology advisory",
      "Solution design"
    ],
    benefits: [
      {
        title: "Certified Teams",
        description: "A perfect blend of Certified Teams with an array of skills that encompass both industry and technical knowledge on Salesforce CRM and Vlocity Industry Cloud."
      },
      {
        title: "Collective Efforts",
        description: "We at Value Cloud Services believe in collective efforts of our dynamic teams and strategic partnerships we have built over the years."
      }
    ],
    workflowSteps: [
      "Initial Consultation",
      "Requirement Analysis",
      "Solution Architecture",
      "Governance Framework Mapping"
    ]
  },
  {
    id: "implementation",
    title: "Implementation & Development",
    shortDescription: "Simplification is at the core of everything Value Cloud Services does. We create robust, secure, and future-ready Salesforce and Vlocity business applications.",
    longDescription: "Simplification is at the core of everything Value Cloud Services does. We are the preferred choice for diverse clients in creating robust business applications in Salesforce CRM and Vlocity, that are secure, scalable, maintainable and future-ready. With advanced tools and automation procedures Value Cloud Services ensures that our client's time-to-market is accelerated. Project completion within short periods without compromising on quality is an unwritten agenda and a prevailing practice at Value Cloud Services.",
    icon: "implementation",
    features: [
      "Salesforce deployment",
      "Application configuration",
      "Custom development (Apex, LWC)",
      "Workflow automation",
      "Enterprise application development",
      "Mobile application development"
    ],
    benefits: [
      {
        title: "Quality Assured Delivery",
        description: "Project completion within short periods without compromising on quality is an unwritten agenda and prevailing practice."
      },
      {
        title: "Value Boosting Tech",
        description: "We leverage the trending technologies and package solutions that are cost-efficient which thereby help boost your business value."
      }
    ],
    workflowSteps: [
      "Requirements gathering & object mapping",
      "Custom programming & workflow automation",
      "Data load verification",
      "User training & secure deployment"
    ]
  },
  {
    id: "managed-services",
    title: "Managed Services",
    shortDescription: "VCS simplifies your complexities in Application Management, Infrastructure Management, Service Integration, Security and Cloud Operations.",
    longDescription: "The current IT leaders have been constantly looking out for ways to cut costs, improve operational efficiency and eventually build progressive business value. Even though they are proactive in their approach, IT landscape is constantly changing at breakneck speed and posing new challenges at every inflection point. It is estimated that 70% of IT budgets are spent on 'Keep the Lights On' projects. If we can mitigate these money leaks with foresight and deep understanding of the mechanics of the business process, companies can hugely benefit from the incredible outcomes it brings to the table.",
    icon: "managed",
    features: [
      "24×7 Support and Maintenance",
      "Performance optimization & bug fixing",
      "Security updates & compliance monitoring",
      "Remote Monitoring and Management (RMM)",
      "ITIL-aligned customer focused automation",
      "Continuous feature enhancements"
    ],
    benefits: [
      {
        title: "Operational Peace of Mind",
        description: "With fast response time and dedicated teams of Remote Monitoring and Management (RMM), Value Cloud Services leaves no stone unturned in maintaining normality in everyday operations."
      },
      {
        title: "Cost Trimming Support",
        description: "Through Managed Services, we enable our clients to keep their eyes on the profitable matters of the business. We take care of maintenance & support tasks to upkeep projects at affordable costs."
      }
    ],
    workflowSteps: [
      "Daily operations monitoring",
      "Incident logging and rapid resolution",
      "ITIL-aligned release updates",
      "Periodical summary system audits"
    ]
  },
  {
    id: "integration",
    title: "Integration & Data Services",
    shortDescription: "Unifying diverse data sources swiftly yet smoothly using industry-standard integration applications and API gateways.",
    longDescription: "As the existing data keeps on growing exponentially & exploding rapidly; business needs on the other side force you to integrate diverse sources of data, it is imperative to hatch on to the right data integration tools. With the plethora of tools available, it demands deep understanding of these platforms to cope up and swiftly yet smoothly integrate data from various sources. With the plethora of tools available, it demands deep understanding of these Application platforms to swiftly yet smoothly provide Application Services that can scale to the next level.",
    icon: "integration",
    features: [
      "API integrations (REST, SOAP)",
      "MuleSoft API Gateways",
      "Data migration & ETL mapping",
      "Database synchronization",
      "Third-party integrations",
      "Legacy modernization & cloud connect"
    ],
    benefits: [
      {
        title: "Scalable Applications",
        description: "Provides scalable application integration blueprints designed to support exponential data growth."
      },
      {
        title: "Zero Data Silos",
        description: "Ensures real-time synchronization between CRM platforms, ERPs, and external databases."
      }
    ],
    workflowSteps: [
      "Identify endpoints & data mapping",
      "API design and authentication setup",
      "Data migration loads",
      "Sync testing & performance profiling"
    ]
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    shortDescription: "With the strength of developing complex digital technologies, we simplify the hiring process, providing certified experts swiftly.",
    longDescription: "With the strength of developing complex digital technologies, esteemed clientele and executive level tech savants, we simplify the entire hiring process, resulting in high-standard staff augmentation swiftly. Our multi-location team has the ability to source Niche, Premium, and Common Skills, offering a one-stop recruitment solution ranging from Executive leadership to Entry level trainees.",
    icon: "staff",
    features: [
      "Sourcing Niche, Premium and Common Skills",
      "Salesforce Developers & Architects",
      "Business Analysts & Project Managers",
      "QA Engineers & Technical Leads",
      "One-stop Recruitment Solution",
      "Proprietary Database Search Software"
    ],
    benefits: [
      {
        title: "Niche resourcing competence",
        description: "Demonstrated competence in headhunting and resourcing highly specific or premium technology talent."
      },
      {
        title: "Turnaround time reduction",
        description: "A proprietary database search software that supports our resourcing search and helps reduce turnaround time."
      }
    ],
    workflowSteps: [
      "Reviewing and scoring sourced profiles",
      "Initial screening & qualification interviews",
      "Language speaking and programming tests",
      "Senior tech leader suitability screening",
      "Sharing screened profiles with client",
      "Expedited background checking via partners"
    ]
  }
];
