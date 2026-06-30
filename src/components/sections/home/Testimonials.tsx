'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

const testimonials = [
  { quote: "VCS transformed our entire Salesforce ecosystem. Their expertise in Sales Cloud implementation drove a 45% increase in our pipeline velocity.", name: 'Rajesh Krishnamurthy', title: 'CTO', company: 'Axis Financial Group' },
  { quote: "The managed services team at VCS operates as an extension of our own IT department. Their 24/7 support has been invaluable.", name: 'Priya Venkataraman', title: 'VP Engineering', company: 'MegaRetail India' },
  { quote: "Their deep industry knowledge in financial services set them apart. VCS didn't just implement technology—they transformed our business processes.", name: 'Arun Balachandran', title: 'CIO', company: 'National Insurance Corp' },
  { quote: "From consultation to deployment, VCS delivered our Experience Cloud portal 30% ahead of schedule with zero critical defects.", name: 'Meera Sundaram', title: 'Director IT', company: 'GovTech Solutions' },
  { quote: "The integration architecture VCS designed for our multi-cloud environment was elegant and scalable. Best technology partner we've worked with.", name: 'Vikram Malhotra', title: 'SVP Technology', company: 'TeleConnect Ltd' },
  { quote: "VCS's staff augmentation service provided us with certified Salesforce architects who integrated seamlessly with our team.", name: 'Deepa Nair', title: 'Head of Digital', company: 'Pharma Health India' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-surface-white relative" id="testimonials">
      <div className="container-vcs" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4 border border-primary-100">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What Our Clients Say</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-soft rounded-2xl p-8 md:p-12 text-center border border-border-light"
            >
              <svg className="w-10 h-10 text-primary-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <blockquote className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {testimonials[current].name[0]}
                </div>
                <div className="font-semibold text-text-primary">{testimonials[current].name}</div>
                <div className="text-sm text-text-muted">{testimonials[current].title}, {testimonials[current].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-primary-500 w-8' : 'bg-border-medium hover:bg-text-muted'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
