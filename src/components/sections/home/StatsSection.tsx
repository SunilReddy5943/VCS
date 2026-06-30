'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Enterprise Clients' },
  { value: 15, suffix: '+', label: 'Countries' },
  { value: 100, suffix: '+', label: 'Certified Experts' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Support' },
  { value: 2, suffix: 'h', label: 'Response Time', prefix: '<' },
  { value: 99.5, suffix: '%', label: 'Success Rate' },
];

function Counter({ value, suffix, prefix, isInView }: { value: number; suffix: string; prefix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span className="text-gradient">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden" id="stats">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div className="container-vcs relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">By the Numbers</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Enterprise Impact at Scale</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} isInView={isInView} />
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
