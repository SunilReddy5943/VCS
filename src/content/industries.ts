// =============================================================================
// Industries Content — Value Cloud Services
// =============================================================================

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryMetric {
  value: number;
  suffix: string;
  label: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: IndustrySolution[];
  metrics: IndustryMetric[];
  color: string;
}

export const industries: Industry[] = [
  {
    id: "financial-services",
    name: "Financial Services",
    icon: "finance",
    description: "Turn your team into a deal-winning machine. When work flows, trust grows. Collaborate in real time, instantly share insights, maintain compliance, and make smarter, faster decisions from anywhere with Financial Services Cloud and Slack.",
    challenges: [
      "Fragmented deal-flow visibility across investment and advisory teams",
      "Manual and slow compliance workflows causing onboarding delays",
      "Disconnected communication between brokers, analysts, and wealth heads",
      "Siloed legacy data blocks preventing real-time portfolio collaboration"
    ],
    solutions: [
      {
        "title": "Deep Client Relationships",
        "description": "Empower senior bankers, analysts, compliance managers, and group heads to manage pipelines, collaborate across deal teams, and leverage third-party data securely."
      },
      {
        "title": "Decoupled Digital Imperative",
        "description": "Engage clients with omni-channel portals, agile product innovation, and automated processes. Quote and issue policies, transact service requests, and adjudicate claims."
      },
      {
        "title": "Compliance & Security Hub",
        "description": "Deploy secure tools designed for strict regulatory compliance, ensuring client data is shared with the right people at the right time."
      }
    ],
    metrics: [
      { value: 45, suffix: "%", label: "Revenue Growth" },
      { value: 60, suffix: "%", label: "Process Efficiency" },
      { value: 99.9, suffix: "%", label: "System Uptime" }
    ],
    color: "#0A2463"
  },
  {
    id: "retail-commerce",
    name: "Retail & Commerce",
    icon: "retail",
    description: "CRM Solution for Online Retail. Find new customers and manage hundreds of campaigns across social sites, mobile publishers, and ad ecosystems with Advertising Studio from Marketing Cloud. Visualise and report on ad performance in a few clicks, so you can reach out to shoppers with the right offer, at the right time.",
    challenges: [
      "Fragmented online and offline customer experience leading to churn",
      "Difficulty managing and tracking multi-channel digital campaigns",
      "Siloed purchase history preventing scalable personalization",
      "Lack of unified order fulfillment across online and retail stores"
    ],
    solutions: [
      {
        "title": "Personalised Customer Journeys",
        "description": "Create scalable, data-driven customer journeys that deliver the right offer to shoppers at the right time on the right channel — across email, mobile, social, and web."
      },
      {
        "title": "Seamless Omnichannel Commerce",
        "description": "Make the shopping experience seamless across web, social, mobile, and physical stores with unified product catalogs and checkout."
      },
      {
        "title": "Order Management Fulfillment",
        "description": "Enable omnichannel order management capabilities that let shoppers buy anywhere and retailers sell, track, and fulfill from any location."
      }
    ],
    metrics: [
      { value: 3, suffix: "x", label: "Engagement" },
      { value: 35, suffix: "%", label: "Conversion Increase" },
      { value: 50, suffix: "%", label: "Cost Reduction" }
    ],
    color: "#1B998B"
  },
  {
    id: "communications",
    name: "Communications",
    icon: "communications",
    description: "Communicate on a person-to-person level. Salesforce solutions for communications gives customers, reps, agents and retailers clear, fast, easy access to all the information they need. So customers enjoy a more cohesive, personalised experience at every step.",
    challenges: [
      "Customer care bottlenecks due to fragmented contact systems",
      "Complex billing and service plan lookup for retail and support reps",
      "Slow routing of service inquiries to qualified tech specialists",
      "Declining customer satisfaction from generic, impersonal service"
    ],
    solutions: [
      {
        "title": "Personal Care & Connections",
        "description": "Transform customer care using collaborative systems to help support reps know each individual customer better, making support personal, positive and productive."
      },
      {
        "title": "Social & Mobile Cloud Solutions",
        "description": "Use Salesforce social and mobile clouds to ensure customers always get connected to the right person, equipped with the exact information needed to help."
      },
      {
        "title": "Omnichannel Access Portal",
        "description": "Provide customers, reps, agents, and retailers clear, fast, and easy access to billing history, network status, and product catalogs."
      }
    ],
    metrics: [
      { value: 80, suffix: "%", label: "Faster Resolution" },
      { value: 55, suffix: "%", label: "Churn Reduction" },
      { value: 4.8, suffix: "/5", label: "CSAT Score" }
    ],
    color: "#E84855"
  },
  {
    id: "government",
    name: "Government",
    icon: "government",
    description: "Deliver on your mission with more impact. Now departments and agencies of all sizes can overcome the 'digital dilemma' with Salesforce Government Cloud. That’s the gap between where you want to expend resources – on continually innovating and improving processes – and where you’re compelled to – on costly maintenance and propping up legacy IT systems.",
    challenges: [
      "Rigid legacy systems consuming the majority of IT resources and budget",
      "Friction in citizen interaction and online permit processing",
      "Data sovereignty and complex security compliance demands",
      "Lack of real-time transparency and system health visibility"
    ],
    solutions: [
      {
        "title": "Innovation & Impact",
        "description": "Empower your departments with capabilities that allow you to deliver outcomes that exceed key success criteria in an innovative, open, fast, easy, and trusted manner."
      },
      {
        "title": "Secure & Compliant Cloud",
        "description": "Count on a secure, transparent, and compliant platform. Earned the industry's top standards, including Australia's ASD iRAP Certification for specified cloud services."
      },
      {
        "title": "Real-Time System Trust",
        "description": "Leverage Trust.salesforce.com for real-time information on system performance, security alerts, and system health status to maintain public trust."
      }
    ],
    metrics: [
      { value: 2, suffix: "M+", label: "Citizens Served" },
      { value: 70, suffix: "%", label: "Digital Adoption" },
      { value: 40, suffix: "%", label: "Efficiency Gain" }
    ],
    color: "#2D3047"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "healthcare",
    description: "Enhance patient engagement, care coordination, and operational efficiency with healthcare-specific Salesforce Health Cloud solutions that connect clinical, administrative, and patient-facing systems.",
    challenges: [
      "Siloed patient health records across administrative networks",
      "Poor care coordination between providers and support agents",
      "Rigid communication systems causing appointment no-shows",
      "HIPAA data security compliance bottlenecks"
    ],
    solutions: [
      {
        "title": "Patient Engagement CRM",
        "description": "Deliver clinical care coordination and build patient portals to schedule appointments, track care plans, and receive proactive reminders."
      },
      {
        "title": "Workflow Automation",
        "description": "Simplify administrative overhead and automate patient referral routing to improve care timelines and lower costs."
      }
    ],
    metrics: [
      { value: 40, suffix: "%", label: "Better Engagement" },
      { value: 30, suffix: "%", label: "Reduced No-Shows" },
      { value: 95, suffix: "%", label: "Satisfaction Rate" }
    ],
    color: "#00A6A6"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "manufacturing",
    description: "Optimize manufacturing sales pipelines, partner networks, and field operations using Salesforce Manufacturing Cloud and custom integrations.",
    challenges: [
      "Mismatched sales forecasting and inventory planning",
      "Manual and slow quote-to-cash workflows for complex products",
      "Lack of visibility into distributor and distributor partner networks"
    ],
    solutions: [
      {
        "title": "Enterprise Process Management",
        "description": "Integrate sales forecasting and contract management with production planning to reduce inventory leaks."
      },
      {
        "title": "Sales & CPQ Automation",
        "description": "Enable automated quoting, pricing rules, and field technician dispatch to resolve client requests faster."
      }
    ],
    metrics: [
      { value: 35, suffix: "%", label: "Sales Growth" },
      { value: 50, suffix: "%", label: "Faster Quotes" },
      { value: 25, suffix: "%", label: "Service Cost Reduction" }
    ],
    color: "#F18F01"
  }
];
