'use client';

import { motion } from 'motion/react';

const systemNodes = [
  { label: 'Salesforce', short: 'SF', x: 50, y: 8, accent: '#0057FF' },
  { label: 'SAP ERP', short: 'SAP', x: 85, y: 28, accent: '#F59E0B' },
  { label: 'REST APIs', short: 'API', x: 85, y: 62, accent: '#8B5CF6' },
  { label: 'Data Cloud', short: 'DC', x: 50, y: 82, accent: '#00D5FF' },
  { label: 'Snowflake', short: 'SNO', x: 15, y: 62, accent: '#38BDF8' },
  { label: 'AWS S3', short: 'S3', x: 15, y: 28, accent: '#F97316' },
];

const floatingMetrics = [
  { label: 'API Calls/Day', value: '2.4M', accent: '#22D3EE', top: '0%', right: '0%', delay: 0 },
  { label: 'Data Latency', value: '<100ms', accent: '#34D399', top: '0%', left: '0%', delay: 0.3 },
  { label: 'Connected Systems', value: '18 Active', accent: '#3B82F6', top: '38%', right: '-3%', delay: 0.6 },
  { label: 'Sync Accuracy', value: '99.97%', accent: '#A78BFA', top: '38%', left: '-3%', delay: 0.9 },
  { label: 'Records/Sec', value: '15K', accent: '#38BDF8', bottom: '2%', right: '3%', delay: 0.5 },
  { label: 'Uptime SLA', value: '99.99%', accent: '#FBBF24', bottom: '2%', left: '3%', delay: 0.8 },
];

export default function DataPipeline() {
  const cx = 50, cy = 45;

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none">
      {/* Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-emerald-500/5 filter blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-cyan-500/4 filter blur-2xl pointer-events-none" />

      {/* SVG Network Diagram — LARGE */}
      <div className="relative w-[400px] h-[380px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 90">
          <defs>
            <linearGradient id="dp-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#00D5FF" />
              <stop offset="100%" stopColor="#0057FF" />
            </linearGradient>
            {systemNodes.map(n => (
              <path key={`dp-p-${n.short}`} id={`dp2-in-${n.short}`} d={`M${n.x},${n.y} L${cx},${cy}`} fill="none" />
            ))}
            <style>{`
              @keyframes dpDash2 { to { stroke-dashoffset: -16; } }
              .dp2-flow { stroke-dasharray: 4 4; animation: dpDash2 4s linear infinite; }
            `}</style>
          </defs>

          {/* Outer hexagonal connecting ring */}
          {systemNodes.map((node, i) => {
            const next = systemNodes[(i + 1) % systemNodes.length];
            return (
              <line key={`ring2-${i}`} x1={node.x} y1={node.y} x2={next.x} y2={next.y}
                stroke="url(#dp-grad2)" strokeWidth="0.3" opacity="0.2" className="dp2-flow" />
            );
          })}

          {/* Spokes to center */}
          {systemNodes.map(n => (
            <g key={`sp2-${n.short}`}>
              <line x1={n.x} y1={n.y} x2={cx} y2={cy}
                stroke={n.accent} strokeWidth="0.5" opacity="0.25" className="dp2-flow" />
              {/* Animated data packets */}
              <circle r="1" fill={n.accent} opacity="0.8">
                <animateMotion dur="2.5s" repeatCount="indefinite">
                  <mpath xlinkHref={`#dp2-in-${n.short}`} />
                </animateMotion>
              </circle>
              <circle r="1.6" fill={n.accent} opacity="0.15">
                <animateMotion dur="2.5s" repeatCount="indefinite">
                  <mpath xlinkHref={`#dp2-in-${n.short}`} />
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* Central MuleSoft Hub */}
          <circle cx={cx} cy={cy} r="11" fill="#0B1D3A" stroke="#10B981" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="7" fill="#10B981" opacity="0.9">
            <animate attributeName="r" values="6.5;7.5;6.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r="10" fill="none" stroke="#10B981" strokeWidth="0.3" opacity="0.4">
            <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x={cx} y={cy - 0.5} textAnchor="middle" fill="#FFFFFF" fontSize="3" fontWeight="800" fontFamily="sans-serif">Mule</text>
          <text x={cx} y={cy + 2.8} textAnchor="middle" fill="#FFFFFF" fontSize="1.8" fontWeight="500" fontFamily="sans-serif" opacity="0.7">Soft</text>

          {/* System Nodes — LARGER */}
          {systemNodes.map(n => (
            <g key={n.short}>
              <circle cx={n.x} cy={n.y} r="6.5" fill="none" stroke={n.accent} strokeWidth="0.25" opacity="0.15" />
              <circle cx={n.x} cy={n.y} r="5" fill="#0B1D3A" stroke={n.accent} strokeWidth="0.7" />
              <text x={n.x} y={n.y + 1.2} textAnchor="middle" fill="#FFFFFF" fontSize="2.8" fontWeight="700" fontFamily="sans-serif">
                {n.short}
              </text>
              {/* Label below */}
              <text x={n.x} y={n.y + 8.5} textAnchor="middle" fill="#94A3B8" fontSize="1.8" fontWeight="500" fontFamily="sans-serif">
                {n.label}
              </text>
              {/* Status dot */}
              <circle cx={n.x + 3.5} cy={n.y - 3.5} r="0.7" fill="#34D399" />
            </g>
          ))}
        </svg>
      </div>

      {/* 6 Floating Metric Cards */}
      {floatingMetrics.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: card.delay },
            y: { duration: 4.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: card.delay }
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
