'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: '',
    industry: '',
    services: [] as string[],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = [
    'Salesforce Consulting',
    'Implementation',
    'Managed Services',
    'Integration (MuleSoft)',
    'Staff Augmentation',
    'AppExchange Product Dev'
  ];

  const handleServiceToggle = (service: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #0E2A5A 50%, #0B1D3A 100%)' }}>
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0057FF]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-3xl" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
            Connect With Us
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Let&apos;s Build Something<br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Great Together</span>
          </h1>
          <p className="font-body text-lg text-slate-300 max-w-2xl leading-relaxed">
            Schedule a free discovery call with our certified Salesforce architects to map your CRM objectives.
          </p>
        </div>
      </section>

      {/* ═══ FORM & CONTACT DETAILS ═══ */}
      <section className="py-20 md:py-28 bg-[#FAFBFF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: Premium Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_12px_48px_rgba(0,0,0,0.03)] border border-[#F1F5F9]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 px-6"
                  >
                    <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-inner">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-3">Inquiry Received</h3>
                    <p className="font-body text-[#64748B] text-sm leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. A certified architect will review your project details and contact you within 2 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-2">Send Us a Message</h2>
                      <p className="font-body text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">Fields marked with * are required</p>
                    </div>

                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all font-body text-sm text-[#0F172A]"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all font-body text-sm text-[#0F172A]"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all font-body text-sm text-[#0F172A]"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={e => setForm({...form, company: e.target.value})}
                          className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all font-body text-sm text-[#0F172A]"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Company Size</label>
                        <select
                          value={form.size}
                          onChange={e => setForm({...form, size: e.target.value})}
                          className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all font-body text-sm text-[#0F172A] appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                        >
                          <option value="">Select size</option>
                          <option>1-50 employees</option>
                          <option>51-200 employees</option>
                          <option>201-1000 employees</option>
                          <option>1000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Industry</label>
                        <select
                          value={form.industry}
                          onChange={e => setForm({...form, industry: e.target.value})}
                          className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all font-body text-sm text-[#0F172A] appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                        >
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

                    {/* Services Checklist */}
                    <div>
                      <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-3 font-body">Services Interested In</label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map(s => {
                          const isSelected = form.services.includes(s);
                          return (
                            <button
                              type="button"
                              key={s}
                              onClick={() => handleServiceToggle(s)}
                              className={`px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                                isSelected
                                  ? 'bg-[#0057FF] text-white border-transparent shadow-lg shadow-[#0057FF]/15'
                                  : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#94A3B8] hover:text-[#0F172A]'
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-2 font-body">Project Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 bg-[#FAFBFF] border border-[#E2E8F0] rounded-xl focus:border-[#0057FF] focus:ring-4 focus:ring-[#0057FF]/10 focus:outline-none transition-all resize-none font-body text-sm text-[#0F172A]"
                        placeholder="Tell us about your objectives, timeline, or current bottlenecks..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#0057FF] to-[#8B5CF6] text-white text-sm font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#0057FF]/20 hover:scale-[1.01]"
                    >
                      Send Message & Book Call
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT: Contact Information & Trust Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Contact details card */}
              <div className="rounded-2xl p-7 md:p-8 bg-gradient-to-br from-[#0B1D3A] via-[#0E2A5A] to-[#0B1D3A] shadow-[0_8px_40px_rgba(11,29,58,0.15)] text-white border border-[#0057FF]/10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#0057FF]/5 blur-2xl" />
                
                <h3 className="font-display text-lg font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] font-body leading-none mb-1">US Headquarters</span>
                      <span className="block text-sm text-slate-200 font-body">2108 O&apos;Keefe Court, Little Elm, Texas - 75068</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] font-body leading-none mb-1">India Delivery Center</span>
                      <span className="block text-sm text-slate-200 font-body">4B, 4th Floor, Dhanalakshmi Towers, DK Road, Ameerpet, Hyderabad - 500016</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.28-5.116-3.573-6.42-6.42l1.293-.97a1.25 1.25 0 0 0 .418-1.173L5.647 3.562A1.25 1.25 0 0 0 4.49 2.75H2.25a2.25 2.25 0 0 0-2.25 2.25V6.75Z" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] font-body leading-none mb-1">Phone Inquiry</span>
                      <span className="block text-sm text-slate-200 font-body">+91 6302194501</span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] font-body leading-none mb-1">Direct Support</span>
                      <span className="block text-sm text-slate-200 font-body">info@valuecloudservices.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust parameters card */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h4 className="font-display text-sm font-bold text-[#0F172A] mb-4">Why Book a Discovery Session?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-xs text-[#64748B] font-body leading-relaxed">
                    <span className="text-[#0057FF] font-bold">✓</span>
                    <span><strong>100% Confidentiality:</strong> All shared requirements are immediately protected by our enterprise NDA.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-[#64748B] font-body leading-relaxed">
                    <span className="text-[#0057FF] font-bold">✓</span>
                    <span><strong>Expert Advice:</strong> Speak directly with a Certified Salesforce Architect, not a sales representative.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-[#64748B] font-body leading-relaxed">
                    <span className="text-[#0057FF] font-bold">✓</span>
                    <span><strong>Actionable Roadmap:</strong> Get a high-level solution blueprint recommendation within 48 hours of our call.</span>
                  </li>
                </ul>
              </div>

              {/* Minimalist Map Pin Box */}
              <div className="relative h-44 rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden shadow-inner flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#0057FF]/10 flex items-center justify-center mx-auto mb-2 text-[#0057FF]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#0F172A]">Global Operations Centers</h4>
                  <p className="font-body text-xs text-[#64748B] mt-1">Ameerpet, Hyderabad (IN) &amp; Little Elm, Texas (US)</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
