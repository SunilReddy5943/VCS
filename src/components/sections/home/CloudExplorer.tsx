'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CloudItem {
  name: string;
  icon: string;
  tagline: string;
  desc: string;
  features: string[];
  color: string;
}

const cloudCategories: Record<string, CloudItem[]> = {
  'Core CRM': [
    {
      name: 'Sales Cloud',
      icon: '📈',
      tagline: 'Sales Automation & Pipeline Growth',
      desc: 'Drive revenue growth with intelligent lead management, pipeline forecasting, and automated sales workflows.',
      features: ['Opportunity Tracking', 'Lead Management', 'Sales Forecasting', 'Einstein AI Insights'],
      color: '#0057FF'
    },
    {
      name: 'Service Cloud',
      icon: '🛡️',
      tagline: 'Omni-Channel Customer Support',
      desc: 'Deliver exceptional customer service across phone, chat, email, and social with AI-powered case routing.',
      features: ['Case Management', 'Knowledge Base', 'Omni-Channel Routing', 'Field Service'],
      color: '#00D5FF'
    },
    {
      name: 'Marketing Cloud & Pardot',
      icon: '📣',
      tagline: 'Data-Driven Journey Personalization',
      desc: 'Create personalized 1-to-1 customer journeys with email, social, and mobile marketing automation.',
      features: ['Journey Builder', 'Email Studio', 'Lead Nurturing', 'Audience Segmenting'],
      color: '#4DA8FF'
    },
    {
      name: 'Experience Cloud',
      icon: '🌐',
      tagline: 'Custom Portals & Communities',
      desc: 'Build secure, engaging digital spaces for your customers, business partners, and internal teams.',
      features: ['Partner Portals', 'Customer Communities', 'Content Management', 'Mobile Experience'],
      color: '#0B41CD'
    }
  ],
  'Industry Clouds': [
    {
      name: 'Financial Services Cloud',
      icon: '🏦',
      tagline: 'Wealth, Banking & Insurance CRM',
      desc: 'Unify client management, track financial goals, and ensure compliance across banking and advisory teams.',
      features: ['Financial Profiles', 'Relationship Mapping', 'Action Plans', 'Compliance Tools'],
      color: '#0057FF'
    },
    {
      name: 'Health Cloud',
      icon: '🏥',
      tagline: 'Patient Journey & Care Coordination',
      desc: 'Connect care teams, map patient journeys, and integrate clinical and non-clinical data securely.',
      features: ['Patient Profiles', 'Care Plan Templates', 'Provider Relationships', 'HIPAA Compliance'],
      color: '#00D5FF'
    },
    {
      name: 'Manufacturing Cloud',
      icon: '⚙️',
      tagline: 'Run-Rate & Forecasting Visibility',
      desc: 'Bridge the gap between sales agreements and run-rate demand forecasting for seamless supply chain alignment.',
      features: ['Sales Agreements', 'Account Forecasting', 'Partner Collaboration', 'Demand Insights'],
      color: '#0B41CD'
    },
    {
      name: 'Nonprofit Cloud',
      icon: '🌱',
      tagline: 'Donor Engagement & Impact Tracking',
      desc: 'Maximize fundraising efficiency, track grants, and deliver transparent reports on social impact.',
      features: ['Donor Management', 'Grant Tracking', 'Fundraising Campaigns', 'Impact Analytics'],
      color: '#10B981'
    }
  ],
  'AI & Analytics': [
    {
      name: 'Agentforce AI',
      icon: '🤖',
      tagline: 'Autonomous AI Agents',
      desc: 'Build and deploy conversational AI voice agents and chatbots that perform tasks and resolve cases in real-time.',
      features: ['AI Calling Agents', 'Smart Chatbots', 'Workflow Triggers', 'Semantic Parsing'],
      color: '#8B5CF6'
    },
    {
      name: 'Data Cloud (CDP)',
      icon: '🗄️',
      tagline: 'Real-Time Customer Data Platform',
      desc: 'Unify and harmonize customer data from ERPs, legacy systems, and web telemetry into a single profile.',
      features: ['Identity Resolution', 'Real-Time Ingestion', 'Data Stream Connectors', 'Segment Activation'],
      color: '#0057FF'
    },
    {
      name: 'MuleSoft Integrations',
      icon: '🔌',
      tagline: 'API-Led Enterprise Connectivity',
      desc: 'Connect any application, database, or legacy system with secure, high-speed bi-directional API gateways.',
      features: ['API Manager', 'Anypoint Studio', 'ETL Data Pipelines', 'Legacy Modernization'],
      color: '#00D5FF'
    },
    {
      name: 'Tableau Analytics',
      icon: '📊',
      tagline: 'Visual Business Intelligence',
      desc: 'Translate raw enterprise data into interactive dashboards and predictive Einstein AI metrics.',
      features: ['Tableau Pulse', 'Einstein Discovery', 'Live Streaming Data', 'Interactive Dashboards'],
      color: '#EC4899'
    }
  ]
};

export default function CloudExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('Core CRM');
  const [hoveredCloud, setHoveredCloud] = useState<string | null>(null);

  const categories = Object.keys(cloudCategories);
  const currentClouds = cloudCategories[activeCategory];

  return (
    <section id="cloud-explorer" className="relative py-28 bg-[#F8FAFC] border-b border-[#E5E8F0] overflow-hidden">
      {/* Dynamic glow decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0057FF]/3 to-transparent rounded-full pointer-events-none filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D5FF]/2 to-transparent rounded-full pointer-events-none filter blur-3xl" />

      <div className="container-vcs relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge-premium-blue mb-4">
            Salesforce Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Comprehensive <span className="text-gradient">Cloud Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-[#4B5563] mt-4">
            Deploy cutting-edge Salesforce technologies designed to streamline your operations, unify your customer data, and automate workflows.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-[#E5E8F0] p-1.5 rounded-2xl flex gap-1 shadow-subtle relative z-20">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                    isActive ? 'text-white' : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="explorerActiveTab"
                      className="absolute inset-0 bg-[#0057FF] rounded-xl z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clouds Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentClouds.map((cloud) => {
              const isHovered = hoveredCloud === cloud.name;
              return (
                <div
                  key={cloud.name}
                  onMouseEnter={() => setHoveredCloud(cloud.name)}
                  onMouseLeave={() => setHoveredCloud(null)}
                  className="card-glow-hover p-7 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Icon and Accent Glow */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${cloud.color}08`,
                        boxShadow: isHovered ? `0 0 15px ${cloud.color}15` : undefined
                      }}
                    >
                      {cloud.icon}
                    </div>

                    <h3 className="text-lg font-bold text-[#111827] mb-1 group-hover:text-[#0057FF] transition-colors duration-300">
                      {cloud.name}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-wider mb-4" style={{ color: cloud.color }}>
                      {cloud.tagline}
                    </p>
                    <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                      {cloud.desc}
                    </p>
                  </div>

                  {/* Features Bullet List */}
                  <div className="border-t border-[#E5E8F0] pt-5 mt-auto">
                    <ul className="space-y-2">
                      {cloud.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-[#4B5563]">
                          <span className="text-[9px]" style={{ color: cloud.color }}>✦</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
