'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

interface Capability {
  id: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
  features: string[];
  link: string;
}

const capabilities: Capability[] = [
  {
    id: 'consulting',
    title: 'Strategic Salesforce Consulting',
    badge: 'CRM Strategy & Advisory',
    desc: 'Align your digital transformation roadmap with business goals. Our certified consultants perform in-depth CRM health audits, design enterprise architectures, and prepare your systems for autonomous AI integration.',
    image: '/images/salesforce_consulting.jpg',
    features: ['CRM Health Audits', 'Digital Transformation Roadmaps', 'Agentforce AI Preparedness', 'Enterprise Architecture Design'],
    link: '/services#salesforce-consulting'
  },
  {
    id: 'implementation',
    title: 'Enterprise Development & LWC Coding',
    badge: 'Custom CRM Deployments',
    desc: 'Deploy custom Salesforce configurations tailored to your industry. We build robust, clean-code solutions using Lightning Web Components (LWC), Apex classes, and advanced Flow automations in two-week agile sprints.',
    image: '/images/salesforce_implementation_development.jpg',
    features: ['Custom LWC & Apex Development', 'Salesforce Flow Automation', 'Core & Industry Cloud Setup', 'Agile Product Delivery'],
    link: '/services#implementation'
  },
  {
    id: 'integration',
    title: 'MuleSoft & Data Cloud Integration',
    badge: 'Unified Customer 360°',
    desc: 'Eliminate data silos by connecting legacy ERPs, databases, and third-party APIs with Salesforce. We build secure, real-time, bi-directional data pipelines using MuleSoft and configure Salesforce Data Cloud for real-time customer graphing.',
    image: '/images/salesforce_integration.png',
    features: ['MuleSoft API-Led Connectivity', 'Salesforce Data Cloud Setup', 'Legacy System Modernization', 'Real-Time Data Sync'],
    link: '/services#integration'
  },
  {
    id: 'managed-services',
    title: '24/7 Managed Services & Support',
    badge: 'Proactive System Tuning',
    desc: 'Maintain peak platform performance and security. Our ITIL-aligned managed services offer 24/7 remote monitoring, regular security audits, rapid bug resolution, and continuous feature enhancements.',
    image: '/images/salesforce_managed_services.jpg',
    features: ['24/7 Helpdesk & Support', 'Proactive Monitoring & Audits', 'Regular Release Upgrades', 'Continuous Feature Enhancements'],
    link: '/services#managed-services'
  }
];

export default function SalesforceCapabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white overflow-hidden">
      <div className="container-vcs">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="badge-premium-blue mb-4">
            Our Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Enterprise <span className="text-gradient">Salesforce Services</span>
          </h2>
          <p className="text-base md:text-lg text-[#4B5563] mt-4">
            Maximize the value of your CRM investments with our specialized consulting, custom engineering, and proactive support.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="space-y-32">
          {capabilities.map((cap, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={cap.id}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 relative h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-elevated border border-[#E5E8F0] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/20 via-transparent to-transparent" />
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0057FF] mb-3 block">
                    {cap.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-5 leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#4B5563] leading-relaxed mb-8">
                    {cap.desc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="grid grid-cols-2 gap-4 mb-8">
                    {cap.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#374151]">
                        <svg className="w-4 h-4 text-[#0057FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={cap.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0057FF] hover:underline"
                  >
                    Learn More About This Service
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
