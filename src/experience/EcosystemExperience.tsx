'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import industriesData from '@/content/industries.json';
import { animationConfig } from '@/config/animations';
import { cn } from '@/lib/utils';

export default function EcosystemExperience() {
  const [activeId, setActiveId] = useState<string>('financial-services');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeIndustry = industriesData.find((i) => i.id === activeId) || industriesData[0];

  // Circle orbit parameters
  const centerX = 50;
  const centerY = 50;
  const radius = 35;

  return (
    <section
      id="ecosystem"
      className="relative py-28 bg-[#FFFFFF] border-b border-[#E5E8F0] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0057FF] bg-[#0057FF]/5 px-3 py-1 rounded-full">
            06 / Vertical Systems
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mt-4 mb-6 leading-tight">
            The Industry Ecosystem
          </h2>
          <p className="text-lg text-[#4B5563]">
            Custom vertical Salesforce configurations tailored to solve specialized sector bottlenecks out of the box.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Orbit Wheel */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[480px]">
            {/* SVG orbit line and spoke connect lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#E5E8F0"
                strokeWidth="0.2"
                strokeDasharray="2 2"
              />

              {industriesData.map((ind, idx) => {
                const angle = (idx * 2 * Math.PI) / industriesData.length;
                const nodeX = parseFloat((centerX + radius * Math.cos(angle)).toFixed(4));
                const nodeY = parseFloat((centerY + radius * Math.sin(angle)).toFixed(4));
                const isSelected = ind.id === activeId;
                const isHovered = ind.id === hoveredId;

                return (
                  <g key={`connect-${ind.id}`}>
                    <line
                      x1={centerX}
                      y1={centerY}
                      x2={nodeX}
                      y2={nodeY}
                      stroke={isSelected || isHovered ? ind.color : '#E5E8F0'}
                      strokeWidth={isSelected || isHovered ? 0.5 : 0.25}
                      className="transition-all duration-300"
                    />
                    {(isSelected || isHovered) && (
                      <circle
                        cx={nodeX}
                        cy={nodeY}
                        r="1.2"
                        fill={ind.color}
                        opacity="0.3"
                        className="animate-ping"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central VCS node logo mark */}
            <div className="absolute w-24 h-24 rounded-full bg-[#101018] shadow-xl border border-white/10 flex flex-col items-center justify-center z-25 text-white">
              <span className="text-xl font-bold tracking-widest text-white">VCS</span>
              <span className="text-[7px] text-[#00D5FF] font-bold uppercase tracking-wider mt-0.5">Ecosystem</span>
            </div>

            {/* Orbiting buttons absolute position */}
            {industriesData.map((ind, idx) => {
              const angle = (idx * 2 * Math.PI) / industriesData.length;
              const xPercent = parseFloat((centerX + radius * Math.cos(angle)).toFixed(4));
              const yPercent = parseFloat((centerY + radius * Math.sin(angle)).toFixed(4));
              const isSelected = ind.id === activeId;

              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  onMouseEnter={() => setHoveredId(ind.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={cn(
                    'absolute flex flex-col items-center justify-center w-16 h-16 rounded-full transition-all duration-300 z-20 outline-none focus:ring-2 focus:ring-[#0057FF]',
                    isSelected
                      ? 'bg-[#101018] text-white shadow-lg border-2'
                      : 'bg-white border border-[#E5E8F0] text-[#111827] hover:border-gray-400 hover:shadow-md'
                  )}
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                    transform: 'translate(-50%, -50%)',
                    borderColor: isSelected ? ind.color : undefined,
                  }}
                >
                  <div className="text-lg">
                    {ind.id === 'financial-services' && '🏦'}
                    {ind.id === 'retail-commerce' && '🛍️'}
                    {ind.id === 'government' && '🏛️'}
                    {ind.id === 'communications' && '📞'}
                    {ind.id === 'healthcare' && '🏥'}
                    {ind.id === 'manufacturing' && '⚙️'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Industry Details Board */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: animationConfig.timings.card }}
                className="bg-white rounded-3xl p-8 border border-[#E5E8F0] shadow-sm min-h-[460px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: activeIndustry.color }}
                    >
                      {activeIndustry.name}
                    </span>
                  </div>

                  <p className="text-[#4B5563] text-sm md:text-base leading-relaxed mb-6">
                    {activeIndustry.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Challenges list */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Common Bottlenecks
                      </h4>
                      <ul className="space-y-2">
                        {activeIndustry.challenges.map((ch, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4B5563]">
                            <span className="w-1.5 h-1.5 bg-[#E84855] rounded-full mt-1.5 flex-shrink-0" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions list */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        VCS Blueprints
                      </h4>
                      <ul className="space-y-2.5">
                        {activeIndustry.solutions.map((sol, idx) => (
                          <li key={idx} className="text-xs text-[#4B5563]">
                            <span className="font-bold text-[#111827] block mb-0.5">{sol.title}</span>
                            <span className="text-[11px] text-gray-500 leading-normal">{sol.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Metrics ribbon */}
                <div className="border-t border-[#E5E8F0] pt-6 flex justify-between gap-4 flex-wrap">
                  {activeIndustry.metrics.map((met, idx) => (
                    <div key={idx} className="text-left">
                      <span
                        className="text-lg md:text-xl font-bold block"
                        style={{ color: activeIndustry.color }}
                      >
                        {met.value}
                        {met.suffix}
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block">
                        {met.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
