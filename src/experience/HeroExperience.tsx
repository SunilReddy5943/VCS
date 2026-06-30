'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import OrbitNetwork from '@/components/sections/home/OrbitNetwork';
import AIHologram from '@/components/sections/home/AIHologram';
import GrowthChart from '@/components/sections/home/GrowthChart';
import DataPipeline from '@/components/sections/home/DataPipeline';

interface Slide {
  id: number;
  badge: string;
  badgeClass: string;
  title: string[];
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  visual: React.ReactNode;
  bgGrad: string;
  tabTitle: string;
}

const slides: Slide[] = [
  {
    id: 0,
    badge: 'Salesforce Summit Partner',
    badgeClass: 'badge-premium-blue',
    title: ['AI-Driven Salesforce', 'Excellence', 'For Global Enterprises'],
    subtitle: 'We architect, deploy, and scale high-performance Salesforce solutions, MuleSoft integrations, and Agentforce AI agents. We drive 2X ROI with speed, security, and scale.',
    primaryCta: { label: 'Book Free Consultation', href: '/contact' },
    secondaryCta: { label: 'Explore Solutions', href: '/solutions' },
    visual: <OrbitNetwork />,
    bgGrad: 'from-[#0B1D3A] via-[#0C2D6B] to-[#071633]',
    tabTitle: '01 / Connected CRM'
  },
  {
    id: 1,
    badge: 'Next-Gen AI Automation',
    badgeClass: 'badge-premium-purple',
    title: ['Deploy AI Agents', '10x Faster', 'With Agentforce'],
    subtitle: 'Build, customize, and deploy autonomous AI agents that operate securely inside your Salesforce guardrails to resolve customer inquiries 24/7.',
    primaryCta: { label: 'Schedule 1:1 Demo', href: '/contact' },
    secondaryCta: { label: 'AI Services', href: '/services' },
    visual: <AIHologram />,
    bgGrad: 'from-[#0D1638] via-[#1B2670] to-[#080E2A]',
    tabTitle: '02 / Agentforce AI'
  },
  {
    id: 2,
    badge: 'AppExchange & PDO Experts',
    badgeClass: 'badge-premium-blue',
    title: ['Drive 2X ROI With', 'Smarter Product', 'Development (PDO)'],
    subtitle: 'Accelerate your commercial AppExchange roadmap. We design, package, and publish secure managed packages under Salesforce PDO guidelines.',
    primaryCta: { label: 'Partner with Us', href: '/contact' },
    secondaryCta: { label: 'PDO Offerings', href: '/services' },
    visual: <GrowthChart />,
    bgGrad: 'from-[#081E3F] via-[#0E3570] to-[#051428]',
    tabTitle: '03 / Product Dev'
  },
  {
    id: 3,
    badge: 'MuleSoft Integration Hub',
    badgeClass: 'badge-premium-cyan',
    title: ['Unify Customer Data', 'With MuleSoft &', 'Salesforce Data Cloud'],
    subtitle: 'Connect legacy ERPs, databases, and third-party APIs to build a real-time Customer 360 profile. Enable instant insights and intelligent automation.',
    primaryCta: { label: 'Integrate Systems', href: '/contact' },
    secondaryCta: { label: 'Integration Services', href: '/solutions' },
    visual: <DataPipeline />,
    bgGrad: 'from-[#072240] via-[#0F4080] to-[#041830]',
    tabTitle: '04 / Data Pipeline'
  }
];

const AUTOPLAY_TIME = 7000; // 7 seconds per slide

export default function HeroExperience() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restart the autoplay timer and progress bar
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);

    const interval = 100; // update progress every 100ms
    const step = (interval / AUTOPLAY_TIME) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setActiveSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSlide]);

  const handleTabClick = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  const currentSlideData = slides[activeSlide];

  return (
    <section
      id="vision"
      className={`relative min-h-screen w-full bg-gradient-to-b ${currentSlideData.bgGrad} flex flex-col justify-between overflow-hidden pt-32 pb-16 transition-colors duration-1000`}
    >
      {/* Custom Sky Blue Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Sky Blue Orb - Top Right */}
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,rgba(56,189,248,0.05)_40%,transparent_70%)]" />
        {/* Cyan Orb - Center Left */}
        <div className="absolute top-[30%] -left-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,rgba(34,211,238,0.04)_40%,transparent_70%)]" />
        {/* Light Blue Orb - Bottom Center */}
        <div className="absolute -bottom-[10%] left-[30%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14)_0%,rgba(96,165,250,0.03)_45%,transparent_70%)]" />
        {/* Soft Indigo Accent - Top Left */}
        <div className="absolute -top-[5%] -left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      {/* Animated Floating Light Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 rounded-full bg-sky-400/30 blur-[1px] top-[15%] left-[20%] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300/25 blur-[1px] top-[25%] right-[25%] animate-[float_10s_ease-in-out_infinite_1s]" />
        <div className="absolute w-3 h-3 rounded-full bg-blue-400/20 blur-[2px] top-[60%] left-[10%] animate-[float_12s_ease-in-out_infinite_2s]" />
        <div className="absolute w-1 h-1 rounded-full bg-sky-300/35 top-[45%] right-[15%] animate-[float_7s_ease-in-out_infinite_0.5s]" />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-indigo-400/20 blur-[1px] top-[70%] left-[55%] animate-[float_9s_ease-in-out_infinite_3s]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/30 top-[10%] left-[60%] animate-[float_11s_ease-in-out_infinite_1.5s]" />
        <div className="absolute w-2 h-2 rounded-full bg-sky-500/15 blur-[1px] top-[80%] right-[35%] animate-[float_13s_ease-in-out_infinite_4s]" />
        <div className="absolute w-1 h-1 rounded-full bg-blue-300/40 top-[35%] left-[45%] animate-[float_6s_ease-in-out_infinite_2.5s]" />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl my-auto flex-grow flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full min-h-[500px]">
          
          {/* Left Column: Staggered text content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative min-h-[380px] justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlide}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Dynamic Badge */}
                <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide mb-6 ${currentSlideData.badgeClass}`}>
                  <span className="w-1.5 h-1.5 bg-[#00D5FF] rounded-full animate-ping" />
                  {currentSlideData.badge}
                </span>

                {/* Title display */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                  {currentSlideData.title.map((line, idx) => (
                    <span key={idx} className="block">
                      {idx === 1 ? (
                        <span className="text-gradient from-[#00D5FF] via-[#0057FF] to-[#A855F7]">
                          {line}
                        </span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg mb-8">
                  {currentSlideData.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 w-full">
                  <Link
                    href={currentSlideData.primaryCta.href}
                    className="px-6 py-3.5 bg-[#0057FF] hover:bg-[#0046CC] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_4px_20px_rgba(0,87,255,0.25)] transition-all duration-300"
                  >
                    {currentSlideData.primaryCta.label}
                  </Link>
                  <Link
                    href={currentSlideData.secondaryCta.href}
                    className="px-6 py-3.5 bg-white/10 border border-white/20 hover:border-white/35 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/15"
                  >
                    {currentSlideData.secondaryCta.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Custom graphic animations */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[420px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full flex items-center justify-center animate-glow"
              >
                {currentSlideData.visual}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Bottom Interactive Navigation Header Tabs */}
      <div className="w-full relative z-10 mt-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-6">
            {slides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleTabClick(idx)}
                  className="group text-left focus:outline-none relative pb-3"
                >
                  {/* Progress Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 rounded-full overflow-hidden">
                    {isActive ? (
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00D5FF] to-[#8B5CF6]"
                        style={{ width: `${progress}%` }}
                      />
                    ) : (
                      <div className="h-full w-0 bg-[#00D5FF] group-hover:w-full transition-all duration-300" />
                    )}
                  </div>

                  {/* Tab Text */}
                  <span className={`block text-xs font-extrabold tracking-wider uppercase mt-4 transition-colors duration-300 ${isActive ? 'text-[#00D5FF]' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {slide.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
