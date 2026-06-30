'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';

interface JourneyStep {
  step: string;
  title: string;
  desc: string;
  color: string;
  glow: string;
  icon: React.ReactNode;
}

const journeySteps: JourneyStep[] = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Evaluate CRM needs & business goals',
    color: '#0284C7', // Sky Blue
    glow: 'rgba(2, 132, 199, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Handshake/Agreement CRM icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    )
  },
  {
    step: '02',
    title: 'Discovery',
    desc: 'Audit current systems & gap analysis',
    color: '#0D9488', // Teal
    glow: 'rgba(13, 148, 136, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Telescope/Magnifying discovery icon */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'Architecture',
    desc: 'Scalable CRM design blueprints',
    color: '#2563EB', // Blue
    glow: 'rgba(37, 99, 235, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Architecture gear & draft logo */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    step: '04',
    title: 'Proposal',
    desc: 'Define scope, pricing & deliverables',
    color: '#4F46E5', // Indigo
    glow: 'rgba(79, 70, 229, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Proposal Document Shield logo */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
      </svg>
    )
  },
  {
    step: '05',
    title: 'Development',
    desc: 'LWC, Apex & Salesforce Flow setup',
    color: '#7C3AED', // Purple
    glow: 'rgba(124, 58, 237, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Code LWC bracket logo */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    step: '06',
    title: 'Go-Live',
    desc: 'QA, user training & deployment launch',
    color: '#D946EF', // Fuchsia/Pink
    glow: 'rgba(217, 70, 239, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Rocket cloud launch logo */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.59 2.51a14.98 14.98 0 0 0-6.16 12.12 14.98 14.98 0 0 0 12.16 6.16v-4.8m0-6.42a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    step: '07',
    title: 'Optimization',
    desc: '24/7 managed support & CRM audit',
    color: '#F43F5E', // Rose/Red
    glow: 'rgba(244, 63, 94, 0.25)',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {/* Speedometer/Continuous optimization logo */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  }
];

export default function ClientJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the automatic loop
  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => (prev + 1) % journeySteps.length);
    }, 4000);
  };

  // Function to stop autoplay
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // When user clicks a step, jump to it and reset the loop timer
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    startAutoplay();
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAFBFF] relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-gradient-to-r from-[#0284C7]/5 via-[#7C3AED]/5 to-[#F43F5E]/5 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="badge-premium-blue mb-4">
            Deployment Path
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
            Your Path to CRM Transformation
          </h2>
          <p className="font-body text-sm md:text-base text-[#64748B] mt-4 max-w-xl mx-auto">
            Click on any station to view its details or watch our live delivery flow progress automatically.
          </p>
        </div>

        {/* Live Flow Timeline Area */}
        <div className="relative min-h-[380px] mt-12 px-4">
          
          {/* Horizontal Connecting Flow Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[7.14%] right-[7.14%] h-1.5 pointer-events-none z-0">
            {/* Base grey line track */}
            <div className="absolute inset-0 bg-[#E2E8F0] rounded-full" />
            
            {/* Live Flow Animated Gradient Overlay */}
            <svg className="absolute inset-0 w-full h-[6px] overflow-visible" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 3 L 950 3"
                stroke="url(#live-gradient-current)"
                strokeWidth="5"
                strokeDasharray="140 280"
                strokeLinecap="round"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="1260;0" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
              </path>
              <defs>
                <linearGradient id="live-gradient-current" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="20%" stopColor="#0D9488" />
                  <stop offset="40%" stopColor="#2563EB" />
                  <stop offset="60%" stopColor="#4F46E5" />
                  <stop offset="80%" stopColor="#7C3AED" />
                  <stop offset="90%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
              </defs>
            </svg>

            {/* Traveling Flow Pulse "Bus/Rocket" Indicator */}
            <motion.div 
              className="absolute -top-[18px] z-20 pointer-events-none"
              animate={{ 
                left: `${(activeStep / 6) * 100}%` 
              }}
              style={{ x: '-50%' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
              {/* Pulsing visual container */}
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors duration-500 bg-white"
                style={{ 
                  boxShadow: `0 0 25px ${journeySteps[activeStep].color}`,
                  border: `2.5px solid ${journeySteps[activeStep].color}`
                }}
              >
                {/* Micro rocket / bus indicator */}
                <svg className="w-5 h-5 animate-pulse" style={{ color: journeySteps[activeStep].color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Steps Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {journeySteps.map((stepObj, index) => {
              const isActive = index === activeStep;

              return (
                <motion.div 
                  key={stepObj.step} 
                  className="text-center group flex flex-col items-center cursor-pointer"
                  variants={cardVariants}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Node container */}
                  <div className="relative mb-6">
                    {/* Glow ring behind node */}
                    <div 
                      className="absolute -inset-3 rounded-full blur-xl scale-90 transition-all duration-500"
                      style={{ 
                        backgroundColor: stepObj.glow,
                        opacity: isActive ? 1 : 0 
                      }}
                    />

                    {/* Outer Orbit Line */}
                    <div 
                      className="absolute -inset-1.5 rounded-full border border-dashed transition-all duration-500"
                      style={{ 
                        borderColor: isActive ? stepObj.color : `${stepObj.color}20`,
                        transform: isActive ? 'scale(1.08) rotate(45deg)' : 'scale(0.95)'
                      }}
                    />
                    
                    {/* Main Badge / Bubble */}
                    <motion.div 
                      className="h-20 rounded-full bg-white border shadow-sm flex items-center justify-start px-4 relative z-10 transition-all duration-300 overflow-hidden"
                      animate={{ 
                        width: isActive ? '200px' : '80px',
                        borderColor: isActive ? stepObj.color : '#E2E8F0'
                      }}
                      transition={{ type: 'spring', stiffness: 150, damping: 18 }}
                      style={{
                        boxShadow: isActive 
                          ? `0 10px 25px ${stepObj.glow}` 
                          : '0 4px 15px rgba(0, 0, 0, 0.02)'
                      }}
                    >
                      {/* Flex layout inside the expanding bubble */}
                      <div className="flex items-center gap-3 w-full">
                        {/* Icon */}
                        <div 
                          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                          style={{ 
                            backgroundColor: isActive ? stepObj.color : '#FAFBFF',
                            color: isActive ? '#FFFFFF' : stepObj.color
                          }}
                        >
                          {stepObj.icon}
                        </div>

                        {/* Title text visible inside the badge only when active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.25, delay: 0.1 }}
                              className="text-left whitespace-nowrap overflow-hidden pr-2"
                            >
                              <span className="block text-[9px] font-extrabold uppercase tracking-widest text-[#64748B]">
                                Step {stepObj.step}
                              </span>
                              <span className="block text-sm font-extrabold text-[#0F172A]">
                                {stepObj.title}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Step Number circular badge on top of inactive nodes */}
                    {!isActive && (
                      <span 
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-20 shadow-md transition-all duration-300"
                        style={{ backgroundColor: stepObj.color }}
                      >
                        {stepObj.step}
                      </span>
                    )}

                    {/* Live Beacon indicator for active node */}
                    {isActive && (
                      <span className="absolute top-0 left-0 flex h-4 w-4 z-20">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: stepObj.color }}></span>
                        <span className="relative inline-flex rounded-full h-4 w-4" style={{ backgroundColor: stepObj.color }}></span>
                      </span>
                    )}
                  </div>

                  {/* Typography below node */}
                  <h3 
                    className="font-display text-base font-bold text-[#0F172A] mb-2 transition-colors duration-300"
                    style={{ color: isActive ? stepObj.color : '#0F172A' }}
                  >
                    {stepObj.title}
                  </h3>
                  <p 
                    className="font-body text-xs leading-relaxed max-w-[140px] mx-auto transition-colors duration-300"
                    style={{ color: isActive ? '#334155' : '#64748B' }}
                  >
                    {stepObj.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
