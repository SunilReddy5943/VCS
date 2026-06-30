'use client';

import { motion } from 'motion/react';

const talentRoles = [
  {
    role: "Salesforce Developers",
    desc: "Expert Apex, LWC, and Flow specialists to build and automate complex business requirements.",
    icon: "💻",
    skills: ["LWC / Apex", "Salesforce Flow", "OmniStudio", "Copado / CI-CD"]
  },
  {
    role: "Technical & Solution Architects",
    desc: "Senior leaders to design scalable, secure enterprise architectures and integration patterns.",
    icon: "🏗️",
    skills: ["MuleSoft / APIs", "Data Cloud (CDP)", "Multi-Cloud Designs", "Security Models"]
  },
  {
    role: "Consultants & Admins",
    desc: "Certified professionals to manage configurations, run audits, and optimize business processes.",
    icon: "👥",
    skills: ["Sales & Service Cloud", "Health Checks", "User Training", "Managed Support"]
  }
];

export default function StaffAugmentationProcess() {
  return (
    <section id="staff-augmentation" className="relative py-24 bg-white border-b border-[#E5E8F0] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,87,255,0.02)_0%,transparent_50%)] pointer-events-none" />
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge-premium-blue">
            05 / On-Demand Scaling
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mt-4 mb-4 leading-tight">
            Elite Salesforce Staff Augmentation
          </h2>
          <p className="text-base text-[#4B5563] max-w-xl mx-auto">
            Scale your team instantly with our pool of pre-screened, certified Salesforce experts ready to integrate into your projects.
          </p>
        </div>

        {/* Simplified 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {talentRoles.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-glow-hover p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0057FF]/5 text-2xl flex items-center justify-center mb-6 group-hover:bg-[#0057FF] group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3 group-hover:text-[#0057FF] transition-colors duration-300">
                  {item.role}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="border-t border-[#E5E8F0] pt-6">
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-semibold bg-[#F3F8FF] text-[#0057FF] px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Indicator */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6B7280] italic">
            * Flexible engagement models (hourly, monthly, or project-based) with resources ready in 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
