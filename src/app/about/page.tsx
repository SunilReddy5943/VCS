import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Value Cloud Services',
  description: 'Learn about Value Cloud Services — our vision, mission, core values, and journey of empowering enterprises through Salesforce and Vlocity.',
};

const values = [
  { name: 'Integrity', desc: 'We never compromise the integrity of our solutions and approach', icon: '🤝' },
  { name: 'Excellence', desc: 'We always give our best effort in everything we do', icon: '⭐' },
  { name: 'Care', desc: "We truly care about our associates, partners, and client's successes", icon: '❤️' },
];

const secondaryValues = [
  { name: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions', icon: '💡' },
  { name: 'Customer Success', desc: 'Your success is our primary metric', icon: '🎯' },
  { name: 'Collaboration', desc: 'Working together as one unified team', icon: '👥' },
  { name: 'Continuous Learning', desc: 'Growing our expertise every day', icon: '📚' },
  { name: 'Quality', desc: 'Zero-compromise on code and consulting quality', icon: '✅' },
  { name: 'Trust', desc: 'Building long-term trusted partnerships', icon: '🔒' }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">About VCS</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Building the Future of<br /><span className="text-gradient">Enterprise Technology</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl">Empowering enterprises with certified Salesforce consulting and digital transformation solutions.</p>
        </div>
      </section>

      {/* Company Overview Block */}
      <section className="py-20 bg-surface-white border-b border-border-light">
        <div className="container-vcs">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-left">Our Value is the Sum of Our Values</h2>
            <div className="space-y-6 text-base text-text-secondary leading-relaxed">
              <p className="font-semibold text-text-primary text-lg">
                Value Cloud Services, a perfect blend of Certified Teams with an array of skills that encompass both industry and technical knowledge on Salesforce CRM and Vlocity Industry Cloud across diverse verticals.
              </p>
              <p>
                The power of a company depends on the company it keeps and the alliances it makes. We at Value Cloud Services believe in collective efforts of our dynamic teams and strategic partnerships we have built with the blue chips over the years. To tackle the digital challenges of the present day, any client relies on a resource that is equipped with a can-do attitude and laced with technical brilliance along with a critical eye in detecting the devil in the details.
              </p>
              <p>
                Our consultants bring real world experience and domain expertise to help achieve transformation around global outsourcing, IT cost optimization, complex package integration and risk management.
              </p>
              <p>
                With our vast experience in open source technologies, we help our clients undergo business transformation through creating or customizing solutions to suit their business needs. We built long lasting relationships with our clients being an ally and true partner in every step of customer digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-surface-soft border-b border-border-light">
        <div className="container-vcs">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">Our Vision</h3>
              <p className="text-base leading-relaxed">Value Cloud Services, a perfect blend of Certified Teams with an array of skills that encompass both industry and technical knowledge on Salesforce CRM and Vlocity Industry Cloud across diverse verticals.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary-600 to-secondary-800 text-white shadow-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">Our Mission</h3>
              <p className="text-base leading-relaxed">To simplify enterprise technology adoption by providing high-quality Salesforce consulting, implementation, managed services, integration solutions, and expert technology talent while maintaining the highest standards of quality, integrity, and customer success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
          
          {/* Primary Values */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {values.map(v => (
              <div key={v.name} className="p-8 rounded-2xl bg-gradient-to-b from-white to-surface-soft border border-primary-100 hover:border-primary-300 hover:shadow-card transition-all text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{v.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Secondary Values Grid */}
          <h3 className="text-lg font-semibold text-center text-text-muted mb-8 uppercase tracking-wider">Extended Commitments</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {secondaryValues.map(v => (
              <div key={v.name} className="p-6 rounded-2xl bg-white border border-border-light hover:shadow-sm transition-all text-center">
                <div className="text-2xl mb-2">{v.icon}</div>
                <h4 className="font-semibold text-text-primary mb-1 text-sm">{v.name}</h4>
                <p className="text-xs text-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 to-primary-800 text-center">
        <div className="container-vcs">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With VCS</h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">We are ready to guide you on every step of your digital transformation journey.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg">Schedule Consultation</Link>
            <Link href="/services" className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
