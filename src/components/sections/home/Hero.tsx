'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

const networkNodes = [
  { id: 'client', label: 'Enterprise Client', x: 50, y: 8, color: '#0057FF' },
  { id: 'consulting', label: 'Consulting', x: 20, y: 30, color: '#3D7AFF' },
  { id: 'cloud', label: 'Salesforce Cloud', x: 50, y: 32, color: '#0057FF' },
  { id: 'ai', label: 'AI & Analytics', x: 80, y: 30, color: '#4DA8FF' },
  { id: 'implementation', label: 'Implementation', x: 15, y: 55, color: '#3D7AFF' },
  { id: 'integration', label: 'Integration', x: 50, y: 58, color: '#0046CC' },
  { id: 'managed', label: 'Managed Services', x: 85, y: 55, color: '#4DA8FF' },
  { id: 'growth', label: 'Business Growth', x: 50, y: 82, color: '#10B981' },
];

const networkEdges = [
  ['client', 'consulting'], ['client', 'cloud'], ['client', 'ai'],
  ['consulting', 'implementation'], ['cloud', 'integration'], ['ai', 'managed'],
  ['implementation', 'growth'], ['integration', 'growth'], ['managed', 'growth'],
  ['consulting', 'cloud'], ['cloud', 'ai'],
];

function InteractiveNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animatingEdge, setAnimatingEdge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatingEdge((prev) => (prev + 1) % networkEdges.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getNodePos = (id: string) => {
    const node = networkNodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0057FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4DA8FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="edge-active" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0057FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4DA8FF" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {networkEdges.map(([from, to], i) => {
          const fromPos = getNodePos(from);
          const toPos = getNodePos(to);
          const isActive = i === animatingEdge;
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={fromPos.x} y1={fromPos.y}
                x2={toPos.x} y2={toPos.y}
                stroke={isActive ? 'url(#edge-active)' : 'url(#edge-gradient)'}
                strokeWidth={isActive ? 0.4 : 0.2}
                strokeDasharray={isActive ? '2 1' : 'none'}
              >
                {isActive && (
                  <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1.5s" repeatCount="indefinite" />
                )}
              </line>
              {/* Flowing particle */}
              {isActive && (
                <circle r="0.6" fill="#4DA8FF" filter="url(#glow)">
                  <animateMotion dur="1.5s" repeatCount="indefinite">
                    <mpath xlinkHref={`#path-${i}`} />
                  </animateMotion>
                </circle>
              )}
              <path id={`path-${i}`} d={`M${fromPos.x},${fromPos.y} L${toPos.x},${toPos.y}`} fill="none" />
            </g>
          );
        })}

        {/* Nodes */}
        {networkNodes.map((node) => {
          const isActive = activeNode === node.id;
          const isGrowth = node.id === 'growth';
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Outer glow ring */}
              <circle
                cx={node.x} cy={node.y} r={isActive ? 5 : 3.5}
                fill="none"
                stroke={node.color}
                strokeWidth="0.3"
                opacity={isActive ? 0.5 : 0.2}
              >
                <animate attributeName="r" values={isActive ? '4;5.5;4' : '3;4;3'} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values={isActive ? '0.5;0.2;0.5' : '0.2;0.1;0.2'} dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Node circle */}
              <circle
                cx={node.x} cy={node.y}
                r={isActive ? 3 : 2.2}
                fill={isGrowth ? '#10B981' : node.color}
                opacity={isActive ? 1 : 0.85}
                filter={isActive ? 'url(#glow)' : 'none'}
                className="transition-all duration-300"
              />

              {/* Inner dot */}
              <circle cx={node.x} cy={node.y} r="0.8" fill="white" opacity="0.9" />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + (node.y < 20 ? -4.5 : 5.5)}
                textAnchor="middle"
                fill={isActive ? '#111827' : '#6B7280'}
                fontSize="2.2"
                fontWeight={isActive ? '600' : '400'}
                fontFamily="var(--font-geist-sans)"
                className="transition-all duration-200 select-none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ['Transforming', 'Enterprises', 'Through', 'Salesforce', 'Innovation'];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
      aria-label="Hero"
    >
      {/* Mesh gradient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-[100px]" />
      </motion.div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <motion.div style={{ opacity }} className="container-vcs relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 text-primary-600 text-sm font-semibold rounded-full">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                Salesforce Summit Partner
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={cn(
                    'inline-block mr-3',
                    word === 'Salesforce' && 'text-gradient',
                    word === 'Innovation' && 'text-gradient'
                  )}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              Empowering businesses with Salesforce Consulting, Implementation, 
              Managed Services, Integration, and Digital Transformation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white text-base font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Book Consultation
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary-200 text-primary-600 text-base font-semibold rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-12 flex items-center gap-6 text-sm text-text-muted"
            >
              {[
                { value: '500+', label: 'Projects' },
                { value: '200+', label: 'Clients' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-2">
                  {i > 0 && <div className="w-px h-8 bg-border-light" />}
                  <div className={i > 0 ? 'pl-6' : ''}>
                    <div className="text-lg font-bold text-text-primary">{stat.value}</div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Interactive Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.45, 0, 0.55, 1] }}
            className="hidden lg:block relative"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-400/5 rounded-3xl" />
            <div className="relative glass-card p-6 rounded-3xl">
              <div className="absolute -top-4 left-6 px-3 py-1 bg-white rounded-full shadow-card text-xs font-medium text-text-muted border border-border-light">
                Enterprise Architecture
              </div>
              <InteractiveNetwork />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Scroll to explore</span>
          <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
