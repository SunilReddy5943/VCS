'use client';

import { motion } from 'motion/react';

const agentCards = [
  { label: 'Service Agent', value: 'Resolving 847 cases', accent: '#22D3EE', top: '0%', left: '0%' },
  { label: 'Sales Agent', value: '12 deals auto-scored', accent: '#A78BFA', top: '0%', right: '0%' },
  { label: 'Chat Agent', value: '2.1s avg response', accent: '#38BDF8', top: '40%', left: '-3%' },
  { label: 'Email Agent', value: '340 drafts/hr', accent: '#F472B6', top: '40%', right: '-3%' },
  { label: 'Agent Accuracy', value: '98.7% resolution', accent: '#34D399', bottom: '6%', left: '3%' },
  { label: 'Cost Savings', value: '-62% vs manual', accent: '#FBBF24', bottom: '6%', right: '3%' },
];

export default function AIHologram() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none">
      {/* Glow Backdrops */}
      <div className="absolute w-96 h-96 rounded-full bg-violet-500/6 filter blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-cyan-500/5 filter blur-2xl pointer-events-none" />

      {/* Central AI Brain — LARGE */}
      <div className="relative w-[340px] h-[340px] flex items-center justify-center">
        
        {/* Outer rotating ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-cyan-400/25"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.6)]" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
        </motion.div>

        {/* Outer rotating ring 2 (counter) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[320px] h-[320px] rounded-full border border-violet-400/15"
        >
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
        </motion.div>

        {/* Inner pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[180px] h-[180px] rounded-full border-2 border-cyan-400/30"
        />

        {/* Core Brain Sphere — LARGE */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-[140px] h-[140px] rounded-full bg-gradient-to-br from-violet-500 via-cyan-500 to-sky-400 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.3),0_0_40px_rgba(34,211,238,0.2)]"
        >
          {/* AI Brain SVG */}
          <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>

          {/* Inner spinning ring */}
          <div className="absolute inset-3 rounded-full border border-white/25 animate-spin" style={{ animationDuration: '6s' }} />

          {/* Label */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
            <span className="block text-sm font-extrabold text-white tracking-wider uppercase">Agentforce AI</span>
            <span className="block text-[10px] text-slate-400 mt-0.5">Autonomous Agent Platform</span>
          </div>
        </motion.div>
      </div>

      {/* 6 Floating Agent Status Cards */}
      {agentCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: i * 0.1 },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }
          }}
          className="absolute px-3.5 py-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-xl shadow-lg flex items-center gap-3"
          style={{ top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
        >
          <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: card.accent, boxShadow: `0 0 10px ${card.accent}` }} />
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider" style={{ color: card.accent }}>{card.label}</span>
            <span className="block text-xs font-semibold text-white">{card.value}</span>
          </div>
        </motion.div>
      ))}

      {/* Bottom Live Throughput Banner */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">4 Agents Active</span>
        <span className="text-xs font-bold text-white">Processing 1,247 tasks/hr</span>
      </motion.div>
    </div>
  );
}
