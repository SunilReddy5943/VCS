'use client';

import { motion } from 'motion/react';

const bars = [
  { height: '35%', label: 'v1.0', color: '#3B82F6' },
  { height: '52%', label: 'v1.5', color: '#2563EB' },
  { height: '70%', label: 'v2.0', color: '#1D4ED8' },
  { height: '85%', label: 'v2.5', color: '#0057FF' },
  { height: '95%', label: 'v3.0', color: '#00D5FF' },
];

const floatingCards = [
  { label: 'Security Review', value: 'Passed ✓', accent: '#34D399', top: '0%', right: '0%', delay: 0 },
  { label: 'Partner Rating', value: '4.9 / 5.0 ★', accent: '#FBBF24', top: '0%', left: '0%', delay: 0.4 },
  { label: 'Active Installs', value: '2,400+ orgs', accent: '#22D3EE', top: '38%', right: '-2%', delay: 0.8 },
  { label: 'ISV Revenue', value: '+186% YoY', accent: '#34D399', bottom: '8%', left: '0%', delay: 1.2 },
  { label: 'Release Cycle', value: '2-Week Sprints', accent: '#A78BFA', bottom: '8%', right: '0%', delay: 0.6 },
  { label: 'Apex Coverage', value: '94% tested', accent: '#38BDF8', top: '38%', left: '-2%', delay: 1.0 },
];

export default function GrowthChart() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none">
      {/* Glow backdrop */}
      <div className="absolute w-96 h-96 rounded-full bg-sky-500/5 filter blur-3xl pointer-events-none" />

      {/* Central Chart Dashboard Card — LARGE */}
      <div className="relative w-[380px] bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
        
        {/* Chart Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">AppExchange Portfolio</span>
            <h4 className="text-base font-bold text-white mt-1">14 Apps Published</h4>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
            ▲ +142%
          </span>
        </div>

        {/* Bar Chart — TALLER */}
        <div className="flex items-end justify-between gap-3 h-40 border-b border-white/10 pb-2 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0,1,2].map(i => (
              <div key={i} className="border-t border-dashed border-white/5 w-full h-0" />
            ))}
          </div>

          {bars.map((bar, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end relative z-10 group">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: bar.height }}
                transition={{ duration: 1.2, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-t-lg relative transition-all"
                style={{ backgroundColor: bar.color, boxShadow: `0 0 16px ${bar.color}40` }}
              >
                {/* Hover tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                  {idx === bars.length - 1 ? 'Latest Release' : 'Stable'}
                </div>
              </motion.div>
              <span className="text-[10px] font-bold text-slate-400 mt-2">{bar.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            { label: 'Downloads', value: '12.8K', color: 'text-sky-400' },
            { label: 'Avg Rating', value: '4.9★', color: 'text-amber-400' },
            { label: 'Retention', value: '97.2%', color: 'text-emerald-400' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
              <span className={`block text-lg font-extrabold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Floating Metric Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: card.delay },
            y: { duration: 4.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: card.delay }
          }}
          className="absolute px-3.5 py-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-xl shadow-lg flex items-center gap-3"
          style={{ top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: card.accent, boxShadow: `0 0 10px ${card.accent}` }} />
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider" style={{ color: card.accent }}>{card.label}</span>
            <span className="block text-xs font-semibold text-white">{card.value}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
