'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import homeData from '@/content/home.json';
import { animationConfig } from '@/config/animations';
import { cn } from '@/lib/utils';

export default function PlatformExperience() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('data');

  const nodes = homeData.platformNodes;
  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];
  const centralNode = nodes.find((n) => n.id === 'data') || nodes[0];
  const outerNodes = nodes.filter((n) => n.id !== 'data');

  return (
    <section
      id="platform"
      className="relative py-28 bg-[#F7F9FC] border-b border-[#E5E8F0] overflow-hidden"
    >
      {/* Background Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] rounded-full border border-[#0057FF]/5 animate-[spin_60s_linear_infinite]" />
        <div className="w-[700px] h-[700px] rounded-full border border-[#0057FF]/3 animate-[spin_100s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0057FF] bg-[#0057FF]/5 px-3 py-1 rounded-full">
            03 / Unified Platform
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mt-4 mb-6 leading-tight">
            The Connected Intelligence Architecture
          </h2>
          <p className="text-lg text-[#4B5563]">
            Unifying transactional layers, integration gateways, business analytics, and agentic AI around a real-time data core.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: The interactive Hub & Spoke Diagram */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[500px]">
            {/* Hub and Spoke SVG Connection Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0057FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow-light">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Hub Spoke Lines */}
              {outerNodes.map((node) => (
                <line
                  key={`spoke-${node.id}`}
                  x1={centralNode.x}
                  y1={centralNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#orbit-grad)"
                  strokeWidth={hoveredNodeId === node.id || selectedNodeId === node.id ? 0.6 : 0.3}
                  className="transition-all duration-300"
                />
              ))}

              {/* Data stream pulses running to center */}
              {outerNodes.map((node, i) => {
                const isActive = hoveredNodeId === node.id || selectedNodeId === node.id;
                if (!isActive) return null;
                return (
                  <circle key={`pulse-${node.id}`} r="0.8" fill="#0057FF" filter="url(#glow-light)">
                    <animateMotion dur="2s" repeatCount="indefinite">
                      <mpath xlinkHref={`#spoke-path-${node.id}`} />
                    </animateMotion>
                  </circle>
                );
              })}

              {/* Paths for animateMotion */}
              {outerNodes.map((node) => (
                <path
                  id={`spoke-path-${node.id}`}
                  key={`path-${node.id}`}
                  d={`M${node.x},${node.y} L${centralNode.x},${centralNode.y}`}
                  fill="none"
                />
              ))}
            </svg>

            {/* Nodes Render as clickable HTML badges placed in SVG Coordinate grid absolute */}
            <div className="absolute inset-0 w-full h-full">
              {nodes.map((node) => {
                const isCentral = node.id === 'data';
                const isSelected = selectedNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={cn(
                      'absolute flex flex-col items-center justify-center transition-all duration-300 rounded-full z-20 cursor-pointer outline-none focus:ring-2 focus:ring-[#0057FF]',
                      isCentral
                        ? 'w-28 h-28 bg-[#0057FF] text-white shadow-[0_10px_30px_rgba(0,87,255,0.3)]'
                        : isSelected
                        ? 'w-20 h-20 bg-white border-2 border-[#0057FF] text-[#0057FF] shadow-lg'
                        : 'w-18 h-18 bg-white border border-[#E5E8F0] text-[#111827] hover:border-[#9CA3AF] hover:shadow-md'
                    )}
                  >
                    {/* Node Mini Icon */}
                    <div className={isCentral ? 'text-2xl font-bold' : 'text-lg font-semibold'}>
                      {node.id === 'data' && '🗄️'}
                      {node.id === 'ai' && '🤖'}
                      {node.id === 'analytics' && '📈'}
                      {node.id === 'crm' && '👥'}
                      {node.id === 'integration' && '🔌'}
                    </div>
                    {/* Tiny identifier */}
                    <span className={cn('text-[9px] font-bold mt-1 tracking-wider uppercase', isCentral ? 'text-white/80' : 'text-gray-500')}>
                      {node.id === 'data' ? 'Core Hub' : node.id}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Information Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNodeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: animationConfig.timings.card }}
                className="bg-white rounded-3xl p-8 border border-[#E5E8F0] shadow-sm flex flex-col justify-between min-h-[350px]"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0057FF] border border-[#0057FF]/10 bg-[#0057FF]/5 px-2.5 py-0.5 rounded-full">
                    Platform Node Profile
                  </span>
                  
                  <h3 className="text-2xl font-bold text-[#111827] mt-5 mb-4">
                    {activeNode.label}
                  </h3>
                  
                  <p className="text-[#4B5563] text-sm md:text-base leading-relaxed mb-6">
                    {activeNode.description}
                  </p>

                  {/* Sample details list based on node type */}
                  <ul className="space-y-3">
                    {activeNode.id === 'data' && (
                      <>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full" /> Real-time transactional record synchronization
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full" /> Cross-system identity resolution (single customer graph)
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full" /> Scalable storage for high-volume telemetry ingestion
                        </li>
                      </>
                    )}
                    {activeNode.id === 'ai' && (
                      <>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" /> Direct orchestration via Agentforce platforms
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" /> Predictive opportunity scoring & pipeline recommendations
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" /> Automated email summaries and support drafts
                        </li>
                      </>
                    )}
                    {activeNode.id === 'analytics' && (
                      <>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full" /> Interactive executive Tableau dashboards
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full" /> Einstein Analytics embedded directly in workspace CRM
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full" /> Live data warehouse streaming pipelines
                        </li>
                      </>
                    )}
                    {activeNode.id === 'crm' && (
                      <>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full" /> Fully optimized Sales, Service, and Commerce Clouds
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full" /> Custom experience portals and partner communities
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#0057FF] rounded-full" /> Omni-channel queue routing and case management
                        </li>
                      </>
                    )}
                    {activeNode.id === 'integration' && (
                      <>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#3D7AFF] rounded-full" /> MuleSoft Anypoint Platform enterprise runtime APIs
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#3D7AFF] rounded-full" /> Legacy ERP (SAP/Oracle) bi-directional queues
                        </li>
                        <li className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                          <span className="w-1.5 h-1.5 bg-[#3D7AFF] rounded-full" /> Composed microservices architecture (API Gateway)
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="mt-8 border-t border-[#E5E8F0] pt-6 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">
                    Status: Verified Connected
                  </span>
                  <a
                    href="#consultation"
                    className="text-xs font-bold text-[#0057FF] hover:underline"
                  >
                    Architect This Model &rarr;
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
