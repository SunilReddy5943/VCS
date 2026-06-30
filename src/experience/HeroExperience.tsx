'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import homeData from '@/content/home.json';
import { animationConfig } from '@/config/animations';
import { cn } from '@/lib/utils';

interface ServiceNode {
  id: string;
  label: string;
  tagline: string;
  tooltipDetails: string[];
  x: number;
  y: number;
  accentColor: string;
  iconPath: string;
}

const serviceNodes: ServiceNode[] = [
  {
    id: 'consulting',
    label: 'Salesforce Consulting',
    tagline: 'Strategy & Advisory',
    tooltipDetails: [
      'Business process consulting',
      'Digital transformation strategy',
      'CRM planning & roadmapping',
      'Salesforce architecture planning',
      'Technology advisory & solution design'
    ],
    x: 50.0,
    y: 13.0,
    accentColor: '#0057FF',
    // Compass
    iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm4.24-10.24l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z'
  },
  {
    id: 'implementation',
    label: 'Implementation & Dev',
    tagline: 'Build & Deploy Solutions',
    tooltipDetails: [
      'Salesforce deployment & config',
      'Application configuration',
      'Custom Apex & LWC development',
      'Workflow & process automation',
      'Enterprise application development'
    ],
    x: 76.0,
    y: 28.0,
    accentColor: '#06B6D4',
    // Rocket
    iconPath: 'M21 3s-3.5 0-7 3.5c-3.5 3.5-3.5 7-3.5 7L7 17l-3-3-2 2 4 4 4-4 3.5-3.5s3.5 0 7-3.5C21 6.5 21 3 21 3z M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z'
  },
  {
    id: 'cloud',
    label: 'Cloud Solutions',
    tagline: 'Sales · Service · Marketing',
    tooltipDetails: [
      'Sales & Service Cloud setup',
      'Marketing Cloud journeys & automation',
      'Experience Cloud self-service portals',
      'Analytics Cloud (Tableau) integration',
      'CPQ & Industry Clouds (Vlocity)'
    ],
    x: 76.0,
    y: 58.0,
    accentColor: '#8B5CF6',
    // Cloud
    iconPath: 'M18 10h-.79A4.5 4.5 0 0 0 8.5 8c0 .28.03.55.08.81A4.5 4.5 0 0 0 4 13.5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4 4 4 0 0 0-4-4z'
  },
  {
    id: 'integration',
    label: 'Integration & Data',
    tagline: 'Connect All Core Systems',
    tooltipDetails: [
      'API & MuleSoft integrations',
      'Legacy modernization & migration',
      'Database synchronization',
      'Third-party software connectors',
      'Unified Customer 360 data pipelines'
    ],
    x: 50.0,
    y: 73.0,
    accentColor: '#10B981',
    // Chain link
    iconPath: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
  },
  {
    id: 'managed',
    label: 'Managed Services',
    tagline: '24/7 Support & Evolution',
    tooltipDetails: [
      '24/7 support & bug resolution',
      'Performance optimization & monitoring',
      'Security updates & system compliance',
      'Continuous feature enhancements',
      'Long-term technology support'
    ],
    x: 24.0,
    y: 58.0,
    accentColor: '#F59E0B',
    // Shield
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  },
  {
    id: 'staff',
    label: 'Staff Augmentation',
    tagline: 'Certified Expert Talent',
    tooltipDetails: [
      'Salesforce Developers & Architects',
      'Business Analysts & Tech Leads',
      'Project Managers & QA Engineers',
      'Flexible team scaling models',
      'Talent management by VCS'
    ],
    x: 24.0,
    y: 28.0,
    accentColor: '#EC4899',
    // People/Users
    iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'
  }
];

const outerRingConnections = [
  { from: 'consulting', to: 'implementation' },
  { from: 'implementation', to: 'cloud' },
  { from: 'cloud', to: 'integration' },
  { from: 'integration', to: 'managed' },
  { from: 'managed', to: 'staff' },
  { from: 'staff', to: 'consulting' }
];

interface JourneyStory {
  source: string;
  destination: string;
  text: string;
}

const journeyStories: JourneyStory[] = [
  {
    source: 'consulting',
    destination: 'implementation',
    text: 'Digital strategy defined → Custom Salesforce deployment initiated by VCS'
  },
  {
    source: 'integration',
    destination: 'cloud',
    text: 'Legacy ERP integrated → Customer 360 unified across Sales & Service Clouds'
  },
  {
    source: 'staff',
    destination: 'implementation',
    text: 'Certified VCS Salesforce Architects embedded → Project velocity accelerated'
  },
  {
    source: 'managed',
    destination: 'cloud',
    text: 'Proactive environment monitoring → Resolved critical bug before system downtime'
  },
  {
    source: 'cloud',
    destination: 'managed',
    text: 'Sales & Marketing Clouds optimized → Shifted to long-term support & evolution'
  }
];

function RedesignedOrbitNetwork() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [storyStage, setStoryStage] = useState<'sourceToCenter' | 'centerPulse' | 'centerToDest'>('sourceToCenter');

  const centerX = 50;
  const centerY = 43;

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;
    let timer3: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      setStoryStage('sourceToCenter');
      
      timer1 = setTimeout(() => {
        setStoryStage('centerPulse');
      }, 1200);

      timer2 = setTimeout(() => {
        setStoryStage('centerToDest');
      }, 1700);

      timer3 = setTimeout(() => {
        setActiveStoryIndex((prev) => (prev + 1) % journeyStories.length);
      }, 4000);
    };

    runCycle();
    const interval = setInterval(runCycle, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);



  const activeHoverNode = serviceNodes.find((n) => n.id === hoveredNodeId);
  const currentStory = journeyStories[activeStoryIndex];
  const activeSourceNode = serviceNodes.find((n) => n.id === currentStory.source);
  const activeDestNode = serviceNodes.find((n) => n.id === currentStory.destination);

  // Determine what to display in the fixed info card
  const getCardData = () => {
    if (hoveredNodeId === 'center') {
      return {
        title: 'VCS Connected Intelligence',
        tagline: 'VCS Technology Partnership',
        accentColor: '#0057FF',
        details: [
          'Unifies Salesforce CRM systems',
          'Integrates core enterprise platforms',
          'Automates complex business workflows',
          'Provides skilled expert talent & support'
        ]
      };
    }
    
    if (hoveredNodeId && activeHoverNode) {
      return {
        title: activeHoverNode.label,
        tagline: activeHoverNode.tagline,
        accentColor: activeHoverNode.accentColor,
        details: activeHoverNode.tooltipDetails
      };
    }

    // Default state when nothing is hovered
    return {
      title: 'VCS Solutions Core',
      tagline: 'Salesforce & Integration Excellence',
      accentColor: '#0057FF',
      details: [
        'Summit-level Salesforce expertise',
        'End-to-end digital transformation',
        'Seamless multi-platform integration',
        '24/7 managed services & support',
        'Flexible expert staff augmentation'
      ]
    };
  };

  const cardData = getCardData();

  return (
    <div
      className="relative w-full min-h-[580px] lg:min-h-[680px] flex flex-col items-center justify-center select-none py-4"
    >
      <style>{`
        @keyframes strokeFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes rotateCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .spoke-dash-flow {
          stroke-dasharray: 8 4;
          animation: strokeFlow 8s linear infinite;
        }
        .outer-dash-flow {
          stroke-dasharray: 4 6;
          animation: strokeFlow 16s linear infinite;
          opacity: 0.35;
        }
        .orbit-ring-cw {
          transform-origin: 50px 43px;
          animation: rotateCW 60s linear infinite;
        }
        .orbit-ring-ccw {
          transform-origin: 50px 43px;
          animation: rotateCCW 80s linear infinite;
        }
        .ambient-float-1 {
          animation: ambientFloat 12s ease-in-out infinite;
        }
        .ambient-float-2 {
          animation: ambientFloat 9s ease-in-out infinite 2s;
        }
        @keyframes ambientFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-4px) translateX(2px); }
        }
      `}</style>

      <div
        className="w-full h-[360px] sm:h-[400px] lg:h-[450px] relative"
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 86" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="center-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0057FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Direct paths definition for animated data packets */}
            {serviceNodes.map((node) => (
              <g key={`paths-${node.id}`}>
                <path id={`path-in-${node.id}`} d={`M${node.x},${node.y} L${centerX},${centerY}`} fill="none" />
                <path id={`path-out-${node.id}`} d={`M${centerX},${centerY} L${node.x},${node.y}`} fill="none" />
              </g>
            ))}
          </defs>

          {/* Faint Concentric Orbit Guides (Reference image style) */}
          <circle
            cx={centerX}
            cy={centerY}
            r="20"
            fill="none"
            stroke="#0057FF"
            strokeWidth="0.15"
            strokeDasharray="1 3"
            className="orbit-ring-cw"
            opacity="0.15"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r="35"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="0.1"
            strokeDasharray="1 4"
            className="orbit-ring-ccw"
            opacity="0.1"
          />

          {/* Outer Ring System Connections (Hexagonal loop) */}
          {outerRingConnections.map((conn) => {
            const fromNode = serviceNodes.find((n) => n.id === conn.from);
            const toNode = serviceNodes.find((n) => n.id === conn.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={`outer-${conn.from}-${conn.to}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="url(#center-glow)"
                strokeWidth="0.25"
                className="outer-dash-flow"
              />
            );
          })}

          {/* Spokes: Connecting Services to the Center Core */}
          {serviceNodes.map((node) => {
            const isSourceActive = storyStage === 'sourceToCenter' && currentStory.source === node.id;
            const isDestActive = storyStage === 'centerToDest' && currentStory.destination === node.id;
            const isHighlighted = isSourceActive || isDestActive;

            return (
              <g key={`spoke-${node.id}`}>
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={centerX}
                  y2={centerY}
                  stroke={isHighlighted ? node.accentColor : '#94A3B8'}
                  strokeWidth={isHighlighted ? '0.6' : '0.25'}
                  opacity={isHighlighted ? '0.8' : '0.2'}
                  className={cn('transition-all duration-500', isHighlighted ? '' : 'spoke-dash-flow')}
                />
              </g>
            );
          })}

          {/* Dynamic Highlighted Story Data Packets */}
          {storyStage === 'sourceToCenter' && activeSourceNode && (
            <g>
              {/* Outer Glow */}
              <circle r="1.4" fill={activeSourceNode.accentColor} opacity="0.3">
                <animateMotion dur="1.2s" fill="freeze">
                  <mpath xlinkHref={`#path-in-${activeSourceNode.id}`} />
                </animateMotion>
              </circle>
              {/* Inner Bright Core */}
              <circle r="0.7" fill="#FFFFFF">
                <animateMotion dur="1.2s" fill="freeze">
                  <mpath xlinkHref={`#path-in-${activeSourceNode.id}`} />
                </animateMotion>
              </circle>
            </g>
          )}

          {storyStage === 'centerToDest' && activeDestNode && (
            <g>
              {/* Outer Glow */}
              <circle r="1.4" fill={activeDestNode.accentColor} opacity="0.3">
                <animateMotion dur="1.2s" fill="freeze">
                  <mpath xlinkHref={`#path-out-${activeDestNode.id}`} />
                </animateMotion>
              </circle>
              {/* Inner Bright Core */}
              <circle r="0.7" fill="#FFFFFF">
                <animateMotion dur="1.2s" fill="freeze">
                  <mpath xlinkHref={`#path-out-${activeDestNode.id}`} />
                </animateMotion>
              </circle>
            </g>
          )}

          {/* Background system syncing packets (smaller, continuous) */}
          {serviceNodes.map((node, index) => (
            <g key={`sync-packets-${node.id}`} opacity="0.4">
              <circle r="0.4" fill="#0057FF">
                <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${index * 0.6}s`}>
                  <mpath xlinkHref={`#path-in-${node.id}`} />
                </animateMotion>
              </circle>
              <circle r="0.3" fill="#8B5CF6">
                <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${index * 0.5 + 0.3}s`}>
                  <mpath xlinkHref={`#path-out-${node.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* Ambient Floating Particle Dots */}
          <circle cx="35" cy="20" r="0.3" fill="#0057FF" opacity="0.25" className="ambient-float-1" />
          <circle cx="68" cy="18" r="0.25" fill="#8B5CF6" opacity="0.2" className="ambient-float-2" />
          <circle cx="78" cy="46" r="0.3" fill="#06B6D4" opacity="0.25" className="ambient-float-1" />
          <circle cx="21" cy="50" r="0.2" fill="#10B981" opacity="0.15" className="ambient-float-2" />
          <circle cx="48" cy="68" r="0.35" fill="#F59E0B" opacity="0.25" className="ambient-float-1" />

          {/* Center core representing Client Business */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNodeId('center')}
            onMouseLeave={() => setHoveredNodeId(null)}
          >
            {/* Outer halo */}
            <circle
              cx={centerX}
              cy={centerY}
              r="9.5"
              fill="none"
              stroke="#0057FF"
              strokeWidth="0.3"
              opacity={storyStage === 'centerPulse' ? '0.5' : '0.2'}
              className="transition-opacity duration-300"
            >
              <animate
                attributeName="r"
                values={storyStage === 'centerPulse' ? "9.5;11.5;9.5" : "9.5;10.2;9.5"}
                dur={storyStage === 'centerPulse' ? "0.5s" : "4s"}
                repeatCount="indefinite"
              />
            </circle>

            {/* Ambient soft glow behind center */}
            <circle
              cx={centerX}
              cy={centerY}
              r="12"
              fill="#0057FF"
              opacity="0.08"
              className="transition-all duration-300"
            />
            {/* Inner Core container */}
            <circle
              cx={centerX}
              cy={centerY}
              r="7.5"
              fill="#101018"
              stroke={storyStage === 'centerPulse' ? 'url(#center-glow)' : '#0057FF'}
              strokeWidth="0.8"
              className="transition-all duration-300"
            />

            {/* Labels inside Center Core */}
            <text
              x={centerX}
              y={centerY + 0.8}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="1.8"
              fontWeight="800"
              fontFamily="sans-serif"
              letterSpacing="0.2"
            >
              VCS
            </text>
          </g>

          {/* 6 Service Nodes (Hexagonal layout) */}
          {serviceNodes.map((node) => {
            const isHovered = hoveredNodeId === node.id;
            const isSourceActive = storyStage === 'sourceToCenter' && currentStory.source === node.id;
            const isDestActive = storyStage === 'centerToDest' && currentStory.destination === node.id;
            const isHighlighted = isSourceActive || isDestActive;

            return (
              <g
                key={node.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                {/* Soft Ambient Halo behind Node (Glow alternative) */}
                {(isHovered || isHighlighted) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="5.5"
                    fill={node.accentColor}
                    opacity="0.18"
                    className="transition-all duration-300"
                  />
                )}

                {/* Node Outer Pulsing Ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="none"
                  stroke={node.accentColor}
                  strokeWidth="0.2"
                  opacity={isHovered ? 0.7 : isHighlighted ? 0.5 : 0.08}
                  className="transition-all duration-300"
                />

                {/* Main Node body (Obsidian disc) */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3.6"
                  fill="#101018"
                  stroke={node.accentColor}
                  strokeWidth={isHovered ? 0.75 : isHighlighted ? 0.6 : 0.35}
                  className="transition-all duration-300"
                />

                {/* Vector SVG Icon inside the node */}
                <g transform={`translate(${node.x}, ${node.y}) scale(0.14) translate(-12, -12)`}>
                  <path
                    d={node.iconPath}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Service Name Label */}
                <text
                  x={node.x}
                  y={node.y + 5.8}
                  textAnchor="middle"
                  fill="#111827"
                  fontSize="1.6"
                  fontWeight={isHovered || isHighlighted ? '700' : '600'}
                  fontFamily="sans-serif"
                  className="transition-all duration-200 select-none pointer-events-none"
                >
                  {node.label}
                </text>

                {/* Tagline */}
                <text
                  x={node.x}
                  y={node.y + 7.6}
                  textAnchor="middle"
                  fill="#6B7280"
                  fontSize="1.2"
                  fontWeight="400"
                  fontFamily="sans-serif"
                  className="select-none pointer-events-none"
                >
                  {node.tagline}
                </text>

                {/* Green Connected Indicator Dot */}
                <circle
                  cx={node.x + 2.4}
                  cy={node.y - 2.4}
                  r="0.55"
                  fill="#10B981"
                />
                <circle
                  cx={node.x + 2.4}
                  cy={node.y - 2.4}
                  r="0.9"
                  fill="#10B981"
                  opacity="0.2"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Fixed Info Card Panel under the animation */}
      <motion.div
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        animate={{
          height: hoveredNodeId ? 'auto' : 0,
          opacity: hoveredNodeId ? 1 : 0,
          marginTop: hoveredNodeId ? 16 : 0
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl mx-auto relative overflow-hidden"
      >
        {cardData && (
          <div className="bg-white/95 border border-[#E5E8F0] backdrop-blur-md rounded-2xl p-4.5 shadow-lg text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <h4 className="text-sm font-bold text-[#111827]">
                  {cardData.title}
                </h4>
                <span
                  className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    color: cardData.accentColor,
                    backgroundColor: `${cardData.accentColor}12`,
                  }}
                >
                  {hoveredNodeId === 'center' ? 'Core' : 'Capability'}
                </span>
              </div>
              <p className="text-xs text-[#6B7280] italic mb-2">
                {cardData.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 border-t border-[#E5E8F0] pt-2.5">
              {cardData.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-[#4B5563] leading-tight">
                  <span className="text-[9px] mt-0.5" style={{ color: cardData.accentColor }}>✦</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Premium Glassmorphic Live Story Ticker Panel */}
      <div className="relative w-full max-w-xl mx-auto bg-white/80 backdrop-blur-md border border-[#E5E8F0] rounded-2xl p-4.5 shadow-lg overflow-hidden mt-6 mb-2">
        {/* Animated Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-[#0057FF]/25 w-full">
          <div
            key={activeStoryIndex}
            className="h-full bg-gradient-to-r from-[#0057FF] via-[#06B6D4] to-[#8B5CF6]"
            style={{
              animation: 'progressFill 4s linear forwards',
            }}
          />
        </div>
        
        <div className="flex items-center gap-3.5">
          {/* Pulsing indicator colored to the active source node */}
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse duration-1000"
            style={{
              backgroundColor: activeSourceNode?.accentColor || '#0057FF',
              boxShadow: `0 0 8px ${activeSourceNode?.accentColor || '#0057FF'}`
            }}
          />
          
          <div className="text-left flex-grow">
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#9CA3AF]">
              VCS Service Story — Scenario {activeStoryIndex + 1} of 5
            </span>
            <p className="text-xs md:text-sm font-semibold text-[#111827] mt-0.5 leading-snug transition-all duration-300">
              {currentStory.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const { hero } = homeData;

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#EBF1FF] via-[#F4F7FC] to-white flex items-center justify-center overflow-hidden py-32"
    >
      {/* Radial soft blue glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,87,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            style={{ y, opacity }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Summit Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animationConfig.timings.reveal, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#0057FF]/5 border border-[#0057FF]/15 text-[#0057FF] rounded-full text-xs font-semibold tracking-wide mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#00D5FF] rounded-full animate-ping" />
              {hero.badge}
            </motion.div>

            {/* Title Display Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.08] mb-6">
              {hero.title.map((line, idx) => (
                <motion.span
                  key={idx}
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: animationConfig.timings.hero,
                    delay: 0.2 + idx * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {idx === 1 ? (
                    <span className="bg-gradient-to-r from-[#0057FF] via-[#00D5FF] to-[#A855F7] bg-clip-text text-transparent">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animationConfig.timings.reveal, delay: 0.5 }}
              className="text-lg text-[#4B5563] font-normal leading-relaxed max-w-lg mb-8"
            >
              {hero.subtitle}
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animationConfig.timings.reveal, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <Link
                href={hero.cta.primary.href}
                className="px-6 py-3.5 bg-[#0057FF] hover:bg-[#0046CC] text-white font-semibold text-sm rounded-xl hover:shadow-[0_4px_20px_rgba(0,87,255,0.25)] transition-all duration-300"
              >
                {hero.cta.primary.label}
              </Link>
              <Link
                href={hero.cta.secondary.href}
                className="px-6 py-3.5 bg-white border border-[#E5E8F0] hover:border-gray-300 text-[#111827] font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-sm"
              >
                {hero.cta.secondary.label}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Redesigned Orbiting Network Column */}
          <motion.div
            className="lg:col-span-7 w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <RedesignedOrbitNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
