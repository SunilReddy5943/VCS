'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', size: '', industry: '', services: [] as string[], message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = ['Salesforce Consulting', 'Implementation', 'Managed Services', 'Integration', 'Staff Augmentation', 'Cloud Solutions'];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="container-vcs relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-6 border border-primary-100">Contact</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Let&apos;s Build Something<br /><span className="text-gradient">Great Together</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl">Schedule a free consultation with our enterprise technology experts.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-surface-white">
        <div className="container-vcs">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 px-8 bg-green-50 rounded-2xl border border-green-200"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Thank You!</h3>
                    <p className="text-text-secondary">We&apos;ll be in touch within 24 hours. Our team is excited to learn about your project.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                        <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Work Email *</label>
                        <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Phone</label>
                        <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all" placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name *</label>
                        <input type="text" required value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all" placeholder="Acme Corp" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Company Size</label>
                        <select value={form.size} onChange={e => setForm({...form, size: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all bg-white">
                          <option value="">Select size</option>
                          <option>1-50 employees</option>
                          <option>51-200 employees</option>
                          <option>201-1000 employees</option>
                          <option>1000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Industry</label>
                        <select value={form.industry} onChange={e => setForm({...form, industry: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all bg-white">
                          <option value="">Select industry</option>
                          <option>Financial Services</option>
                          <option>Retail & Commerce</option>
                          <option>Government</option>
                          <option>Healthcare</option>
                          <option>Communications</option>
                          <option>Manufacturing</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Services Interested In</label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map(s => (
                          <label key={s} className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium border transition-all ${form.services.includes(s) ? 'bg-primary-500 text-white border-primary-500' : 'bg-white border-border-light text-text-secondary hover:border-primary-200'}`}>
                            <input type="checkbox" className="sr-only" checked={form.services.includes(s)} onChange={() => setForm({...form, services: form.services.includes(s) ? form.services.filter(x => x !== s) : [...form.services, s]})} />
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Message *</label>
                      <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 border border-border-light rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="w-full md:w-auto px-10 py-4 bg-primary-500 text-white text-lg font-semibold rounded-xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 bg-surface-soft rounded-2xl border border-border-light">
                <h3 className="text-lg font-semibold text-text-primary mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">US Office Address</div>
                      <div className="text-sm text-text-secondary">2108 O&apos;Keefe Court, Little Elm,<br />Texas - 75068</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">India Office Address</div>
                      <div className="text-sm text-text-secondary">4B, 4th Floor, Dhanalakshmi Towers,<br />DK Road, Ameerpet, Hyderabad,<br />Telangana - 500016</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Phone</div>
                      <div className="text-sm text-text-secondary">+91 6302194501</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Email</div>
                      <div className="text-sm text-text-secondary">info@valuecloudservices.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Business Hours</div>
                      <div className="text-sm text-text-secondary">Mon-Fri 9:00 AM - 6:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-48 rounded-2xl bg-surface-soft border border-border-light overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-2 shadow-lg shadow-primary-500/30">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    </div>
                    <span className="text-xs text-text-muted font-medium">Ameerpet, Hyderabad & Little Elm, Texas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
