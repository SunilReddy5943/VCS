'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { animationConfig } from '@/config/animations';
import { cn } from '@/lib/utils';

interface ArchLayer {
  id: string;
  name: string;
  badge: string;
  desc: string;
  components: string[];
  color: string;
  bgGradient: string;
  glowColor: string;
  metrics: string[];
}

const archLayers: ArchLayer[] = [
  {
    id: 'presentation',
    name: 'Presentation & Interaction Layer',
    badge: '01 / Touchpoints',
    desc: 'The customer-facing tier. VCS designs, deploys, and maintains responsive digital portals, sales workspaces, self-service community hubs, and mobile portals to streamline customer interactions.',
    components: ['Experience Cloud Portals', 'Sales & Service CRM', 'Mobile SDK Applications', 'B2B/B2C Commerce Hubs'],
    color: '#EC4899',
    bgGradient: 'from-[#EC4899] via-[#EC4899] to-[#F43F5E]',
    glowColor: 'rgba(236,72,153,0.3)',
    metrics: ['API Latency: 14ms', 'Active Users: 12K+']
  },
  {
    id: 'logic',
    name: 'Business Logic & Agentic AI',
    badge: '02 / Logic & Flow',
    desc: 'The automation and reasoning tier. VCS configures autonomous Agentforce workers, Einstein AI predictors, complex Apex engines, validation rules, and automated workflow triggers.',
    components: ['Einstein Predictors', 'Agentforce AI Workers', 'Custom Apex Engine', 'Automated Flows & Approvals'],
    color: '#0057FF',
    bgGradient: 'from-[#0057FF] via-[#0057FF] to-[#6366F1]',
    glowColor: 'rgba(0,87,255,0.3)',
    metrics: ['AI Agents: 8 Active', 'Apex CPU Load: 12%']
  },
  {
    id: 'data',
    name: 'Unified Data Storage Core',
    badge: '03 / Data Core',
    desc: 'The single source of truth tier. VCS consolidates disconnected legacy databases, MuleSoft API gateways, real-time customer transactional records, and cloud synchronization structures.',
    components: ['Salesforce Data Cloud', 'MuleSoft API Gateways', 'Shield Security Ledger', 'Core ERP Connectors'],
    color: '#10B981',
    bgGradient: 'from-[#10B981] via-[#10B981] to-[#14B8A6]',
    glowColor: 'rgba(16,185,129,0.3)',
    metrics: ['Data Sync: Unified', 'Encryption: AES-256']
  },
];

// Helper to render abstract system diagrams for each layer using inline vector graphics
const renderLayerGraphic = (id: string, color: string) => {
  if (id === 'presentation') {
    return (
      <svg className="w-full h-32 opacity-90 select-none pointer-events-none" viewBox="0 0 200 80">
        <rect x="10" y="5" width="180" height="70" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="20" cy="14" r="2" fill="#EF4444" />
        <circle cx="26" cy="14" r="2" fill="#F59E0B" />
        <circle cx="32" cy="14" r="2" fill="#10B981" />
        <rect x="44" y="11" width="112" height="6" rx="2" fill="#E2E8F0" />
        
        {/* Simulated cards inside web browser view */}
        <rect x="20" y="26" width="46" height="42" rx="4" fill="#FFFFFF" stroke={`${color}20`} strokeWidth="1" />
        <circle cx="30" cy="36" r="3.5" fill={color} opacity="0.8" />
        <rect x="26" y="46" width="34" height="3" rx="1" fill={`${color}20`} />
        <rect x="26" y="53" width="22" height="3" rx="1" fill={`${color}10`} />
        
        <rect x="77" y="26" width="46" height="42" rx="4" fill="#FFFFFF" stroke={`${color}20`} strokeWidth="1" />
        <rect x="83" y="34" width="34" height="8" rx="2" fill={`${color}15`} />
        <rect x="83" y="48" width="34" height="3" rx="1" fill={`${color}20`} />
        <rect x="83" y="55" width="22" height="3" rx="1" fill={`${color}10`} />

        <rect x="134" y="26" width="46" height="42" rx="4" fill="#FFFFFF" stroke={`${color}20`} strokeWidth="1" />
        <path d="M142,54 L148,59 L158,47" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="158" cy="36" r="3.5" fill={color} opacity="0.6" />
      </svg>
    );
  }
  if (id === 'logic') {
    return (
      <svg className="w-full h-32 opacity-90 select-none pointer-events-none" viewBox="0 0 200 80">
        {/* Node logic layout */}
        <rect x="15" y="25" width="42" height="30" rx="4" fill="#FFFFFF" stroke={`${color}30`} strokeWidth="1" />
        <text x="36" y="42" textAnchor="middle" fill="#4B5563" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">Input Event</text>
        <circle cx="57" cy="40" r="1.5" fill={color} />
        
        <path d="M57,40 L75,40" stroke={color} strokeWidth="1.2" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" values="10;0" dur="1s" repeatCount="indefinite" />
        </path>
        
        <rect x="75" y="15" width="50" height="50" rx="6" fill="#101018" stroke={color} strokeWidth="1.5" />
        <circle cx="100" cy="34" r="8" fill="none" stroke={color} strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="34" r="5" fill={color} />
        <text x="100" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.2">AGENTFORCE</text>
        <rect x="88" y="57" width="24" height="3" rx="1" fill="#00D5FF" />
        
        <path d="M125,40 L143,40" stroke={color} strokeWidth="1.2" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" values="10;0" dur="1s" repeatCount="indefinite" />
        </path>
        
        <circle cx="125" cy="40" r="1.5" fill={color} />
        <rect x="143" y="25" width="42" height="30" rx="4" fill="#FFFFFF" stroke={`${color}30`} strokeWidth="1" />
        <text x="164" y="42" textAnchor="middle" fill="#4B5563" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">Automation</text>
      </svg>
    );
  }
  // Data Core Layout
  return (
    <svg className="w-full h-32 opacity-90 select-none pointer-events-none" viewBox="0 0 200 80">
      <rect x="25" y="15" width="36" height="42" rx="4" fill="#FFFFFF" stroke={`${color}30`} strokeWidth="1" />
      <rect x="31" y="22" width="24" height="5" rx="1" fill={`${color}20`} />
      <rect x="31" y="31" width="24" height="5" rx="1" fill={`${color}20`} />
      <rect x="31" y="40" width="24" height="5" rx="1" fill={`${color}20`} />
      <text x="43" y="66" textAnchor="middle" fill="#4B5563" fontSize="6" fontWeight="700" fontFamily="sans-serif">CRM Data</text>

      {/* Sync pipelines */}
      <path d="M61,36 C85,15 115,15 139,36 M139,36 C115,57 85,57 61,36" stroke={color} strokeWidth="1.2" strokeDasharray="4 2" fill="none">
        <animate attributeName="stroke-dashoffset" values="20;0" dur="1.5s" repeatCount="indefinite" />
      </path>
      
      <circle cx="100" cy="36" r="5.5" fill="#FFFFFF" stroke={color} strokeWidth="1.5" />
      <path d="M97,36 L103,36 M100,33 L100,39" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      
      <rect x="139" y="15" width="36" height="42" rx="4" fill="#FFFFFF" stroke={`${color}30`} strokeWidth="1" />
      <rect x="145" y="22" width="24" height="5" rx="1" fill={`${color}20`} />
      <rect x="145" y="31" width="24" height="5" rx="1" fill={`${color}20`} />
      <rect x="145" y="40" width="24" height="5" rx="1" fill={`${color}20`} />
      <text x="157" y="66" textAnchor="middle" fill="#4B5563" fontSize="6" fontWeight="700" fontFamily="sans-serif">Data Cloud</text>
    </svg>
  );
};

export default function ExplorerExperience() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('logic');
  const [isPanelHovered, setIsPanelHovered] = useState(false);

  // Auto-cycle layers every 6 seconds if the user is not actively hovering the section
  useEffect(() => {
    if (isPanelHovered) return;

    const interval = setInterval(() => {
      setSelectedLayerId((prev) => {
        const currentIndex = archLayers.findIndex((l) => l.id === prev);
        const nextIndex = (currentIndex + 1) % archLayers.length;
        return archLayers[nextIndex].id;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isPanelHovered]);

  const activeLayer = archLayers.find((l) => l.id === selectedLayerId) || archLayers[1];

  return (
    <section
      id="explorer"
      className="relative py-28 bg-[#F4F7FC] border-b border-[#E5E8F0] overflow-hidden"
    >
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-dots opacity-[0.45] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0057FF] bg-[#0057FF]/5 px-3 py-1 rounded-full">
            05 / Platform Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mt-4 mb-6 leading-tight">
            Enterprise Architecture Explorer
          </h2>
          <p className="text-lg text-[#4B5563]">
            See how VCS modernizes operations by structuring solutions into a secure, decoupled three-tier model.
          </p>
        </div>

        {/* Tabbed Interactive Showcase Container */}
        <div 
          className="grid lg:grid-cols-12 gap-10 items-stretch"
          onMouseEnter={() => setIsPanelHovered(true)}
          onMouseLeave={() => setIsPanelHovered(false)}
        >
          
          {/* Left Column: Premium Vertical Navigation Menu */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4.5 z-10">
            {archLayers.map((layer) => {
              const isSelected = selectedLayerId === layer.id;

              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={cn(
                    'w-full text-left p-5.5 rounded-2xl border transition-all duration-500 relative overflow-hidden outline-none select-none',
                    isSelected
                      ? `bg-gradient-to-r ${layer.bgGradient} text-white border-transparent shadow-xl scale-[1.015]`
                      : 'bg-white/50 backdrop-blur-sm border-[#E5E8F0] text-[#111827] hover:border-gray-300 hover:bg-white/80 shadow-sm'
                  )}
                  style={{
                    boxShadow: isSelected ? `0 15px 30px -5px ${layer.glowColor}` : undefined
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      {/* Badge identifier */}
                      <span
                        className={cn(
                          "text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-all duration-300",
                          isSelected
                            ? "text-white bg-white/10 border-white/20"
                            : "border-transparent"
                        )}
                        style={!isSelected ? {
                          color: layer.color,
                          backgroundColor: `${layer.color}15`,
                          border: `1px solid ${layer.color}25`,
                        } : undefined}
                      >
                        {layer.badge}
                      </span>
                      
                      <h4 className={cn(
                        "text-base md:text-lg font-bold mt-3 transition-colors duration-300",
                        isSelected ? "text-white" : "text-[#111827]"
                      )}>
                        {layer.name}
                      </h4>
                    </div>

                    {/* Status Indicator LED */}
                    <span
                      className={cn(
                        "w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-500 mt-1",
                        isSelected ? "animate-pulse" : ""
                      )}
                      style={{
                        backgroundColor: isSelected ? '#FFFFFF' : layer.color,
                        boxShadow: isSelected 
                          ? `0 0 12px #FFFFFF, 0 0 3px #FFFFFF`
                          : `0 0 3px ${layer.color}60`,
                      }}
                    />
                  </div>

                  {/* Collapsible Subtitle / Metric row on active */}
                  <div 
                    className={cn(
                      "transition-all duration-500 overflow-hidden flex gap-4 mt-3.5",
                      isSelected ? "max-h-6 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {layer.metrics.map((metric, i) => (
                      <span 
                        key={i} 
                        className={cn(
                          "text-[10px] font-semibold flex items-center gap-1.5 transition-colors duration-300",
                          isSelected ? "text-white/80" : "text-gray-500"
                        )}
                      >
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Premium Interactive details panel adopting active tier theme */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl border border-[#E5E8F0] shadow-md p-7 relative overflow-hidden bg-dots">
            <div>
              {/* Dynamic Abstract System Diagram Header */}
              <div 
                className="bg-[#F8FAFC] rounded-2xl border border-[#E5E8F0] overflow-hidden p-5 shadow-inner relative flex justify-center items-center transition-all duration-500"
                style={{
                  borderLeft: `4px solid ${activeLayer.color}`
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedLayerId}
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center"
                  >
                    {renderLayerGraphic(selectedLayerId, activeLayer.color)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description Spec Box */}
              <div className="mt-7 flex flex-col gap-5 text-left">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full self-start"
                  style={{
                    color: activeLayer.color,
                    backgroundColor: `${activeLayer.color}10`,
                    border: `1px solid ${activeLayer.color}20`,
                  }}
                >
                  {activeLayer.badge} Active Spec
                </span>

                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-normal">
                  {activeLayer.desc}
                </p>

                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-2">
                  VCS Built Core Sub-Systems:
                </h4>
                
                <div className="grid grid-cols-2 gap-y-3.5 gap-x-5">
                  {activeLayer.components.map((comp) => (
                    <div key={comp} className="flex items-center gap-2.5">
                      {/* Checkmark icon adopting active color theme */}
                      <svg 
                        className="w-4 h-4 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke={activeLayer.color} 
                        strokeWidth="3.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-bold text-[#4B5563]">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#E5E8F0] pt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider">
                  VCS Enterprise Security Policy: Active
                </span>
              </div>
              <a
                href="#contact"
                className="text-xs font-extrabold text-[#0057FF] hover:text-[#0046CC] transition-colors flex items-center gap-1"
              >
                Consult Integration Blueprint
                <span className="text-sm font-semibold">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
