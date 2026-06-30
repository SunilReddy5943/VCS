'use client';

import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 via-primary-800 to-secondary-700" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-400/10 rounded-full blur-2xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-400/5 rounded-full blur-xl animate-float-slow" />

      <div className="container-vcs relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Ready for Digital<br />Transformation?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
            Let&apos;s build together. Start your journey with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
