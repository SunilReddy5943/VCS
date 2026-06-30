'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceNode {
  id: string;
  label: string;
  tagline: string;
  x: number;
  y: number;
  accent: string;
  iconPath: string;
}

const nodes: ServiceNode[] = [
  {
    id: 'consulting', label: 'Consulting', tagline: 'Strategy & Advisory',
    x: 50, y: 6, accent: '#3B82F6',
    iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.24-12.24l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z'
  },
  {
    id: 'implementation', label: 'Development', tagline: 'Build & Deploy',
    x: 84, y: 24, accent: '#22D3EE',
    iconPath: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
  },
  {
    id: 'cloud', label: 'Cloud Solutions', tagline: 'Sales · Service · Marketing',
    x: 84, y: 58, accent: '#A78BFA',
    iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'
  },
  {
    id: 'integration', label: 'Integration', tagline: 'MuleSoft & APIs',
    x: 50, y: 76, accent: '#34D399',
    iconPath: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
  },
  {
    id: 'managed', label: 'Managed Services', tagline: '24/7 Support',
    x: 16, y: 58, accent: '#FBBF24',
    iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
  },
  {
    id: 'staff', label: 'Staff Augment', tagline: 'Expert Talent',
    x: 16, y: 24, accent: '#F472B6',
    iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
  }
];

const outerRing: [string, string][] = [
  ['consulting', 'implementation'], ['implementation', 'cloud'], ['cloud', 'integration'],
  ['integration', 'managed'], ['managed', 'staff'], ['staff', 'consulting']
];

const stories = [
  { src: 'consulting', dst: 'implementation', text: 'Strategy defined → Salesforce deployment initiated' },
  { src: 'integration', dst: 'cloud', text: 'Legacy ERP integrated → Customer 360 unified across clouds' },
  { src: 'staff', dst: 'implementation', text: 'VCS Architects embedded → Project velocity accelerated 3x' },
  { src: 'managed', dst: 'cloud', text: 'Proactive monitoring → Critical bug resolved before downtime' },
  { src: 'cloud', dst: 'managed', text: 'Clouds optimized → Long-term managed support activated' },
];

export default function OrbitNetwork() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [storyIdx, setStoryIdx] = useState(0);
  const [stage, setStage] = useState<'in' | 'pulse' | 'out'>('in');

  const cx = 50, cy = 41;

  useEffect(() => {
    const run = () => {
      setStage('in');
      const t1 = setTimeout(() => setStage('pulse'), 1200);
      const t2 = setTimeout(() => setStage('out'), 1700);
      const t3 = setTimeout(() => setStoryIdx(p => (p + 1) % stories.length), 4000);
      return [t1, t2, t3];
    };
    let timers = run();
    const iv = setInterval(() => { timers = run(); }, 4000);
    return () => { clearInterval(iv); timers.forEach(clearTimeout); };
  }, []);

  const story = stories[storyIdx];
  const srcNode = nodes.find(n => n.id === story.src);
  const dstNode = nodes.find(n => n.id === story.dst);

  return (
    <div className="relative w-full h-full min-h-[480px] flex flex-col items-center justify-center select-none">
      <style>{`
        @keyframes onDash { to { stroke-dashoffset: -20; } }
        @keyframes onCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes onCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes storyProgress { from { width: 0%; } to { width: 100%; } }
        .on-dash { stroke-dasharray: 6 4; animation: onDash 8s linear infinite; }
        .on-cw { transform-origin: 50px 41px; animation: onCW 55s linear infinite; }
        .on-ccw { transform-origin: 50px 41px; animation: onCCW 75s linear infinite; }
      `}</style>

      {/* FULL-SIZE SVG — takes all available space */}
      <div className="w-full flex-grow relative max-w-[600px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 84" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="on-glow2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
            </linearGradient>
            {nodes.map(n => (
              <g key={`p-${n.id}`}>
                <path id={`s1-in-${n.id}`} d={`M${n.x},${n.y} L${cx},${cy}`} fill="none" />
                <path id={`s1-out-${n.id}`} d={`M${cx},${cy} L${n.x},${n.y}`} fill="none" />
              </g>
            ))}
          </defs>

          {/* Rotating guide rings */}
          <circle cx={cx} cy={cy} r="20" fill="none" stroke="#22D3EE" strokeWidth="0.15" strokeDasharray="1 3" className="on-cw" opacity="0.2" />
          <circle cx={cx} cy={cy} r="36" fill="none" stroke="#A78BFA" strokeWidth="0.12" strokeDasharray="1 4" className="on-ccw" opacity="0.12" />

          {/* Outer ring hex connections */}
          {outerRing.map(([a, b]) => {
            const na = nodes.find(n => n.id === a)!;
            const nb = nodes.find(n => n.id === b)!;
            return <line key={`or-${a}-${b}`} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="url(#on-glow2)" strokeWidth="0.3" opacity="0.2" className="on-dash" />;
          })}

          {/* Spokes from each node to center */}
          {nodes.map(n => {
            const active = (stage === 'in' && story.src === n.id) || (stage === 'out' && story.dst === n.id);
            return (
              <line key={`sp-${n.id}`} x1={n.x} y1={n.y} x2={cx} y2={cy}
                stroke={active ? n.accent : '#64748B'} strokeWidth={active ? '0.7' : '0.25'} opacity={active ? '0.7' : '0.15'}
                className={active ? '' : 'on-dash'} />
            );
          })}

          {/* Animated story data packets */}
          {stage === 'in' && srcNode && (
            <g>
              <circle r="1.8" fill={srcNode.accent} opacity="0.25"><animateMotion dur="1.2s" fill="freeze"><mpath xlinkHref={`#s1-in-${srcNode.id}`} /></animateMotion></circle>
              <circle r="0.8" fill="#FFFFFF"><animateMotion dur="1.2s" fill="freeze"><mpath xlinkHref={`#s1-in-${srcNode.id}`} /></animateMotion></circle>
            </g>
          )}
          {stage === 'out' && dstNode && (
            <g>
              <circle r="1.8" fill={dstNode.accent} opacity="0.25"><animateMotion dur="1.2s" fill="freeze"><mpath xlinkHref={`#s1-out-${dstNode.id}`} /></animateMotion></circle>
              <circle r="0.8" fill="#FFFFFF"><animateMotion dur="1.2s" fill="freeze"><mpath xlinkHref={`#s1-out-${dstNode.id}`} /></animateMotion></circle>
            </g>
          )}

          {/* Background sync particles */}
          {nodes.map((n, i) => (
            <g key={`pkt-${n.id}`} opacity="0.3">
              <circle r="0.4" fill="#3B82F6"><animateMotion dur="3.2s" repeatCount="indefinite" begin={`${i * 0.5}s`}><mpath xlinkHref={`#s1-in-${n.id}`} /></animateMotion></circle>
              <circle r="0.35" fill="#A78BFA"><animateMotion dur="2.8s" repeatCount="indefinite" begin={`${i * 0.4 + 0.3}s`}><mpath xlinkHref={`#s1-out-${n.id}`} /></animateMotion></circle>
            </g>
          ))}

          {/* Central Hub */}
          <g className="cursor-pointer" onMouseEnter={() => setHovered('center')} onMouseLeave={() => setHovered(null)}>
            <circle cx={cx} cy={cy} r="12" fill="#3B82F6" opacity="0.06" />
            <circle cx={cx} cy={cy} r="10" fill="none" stroke="#3B82F6" strokeWidth="0.3" opacity={stage === 'pulse' ? 0.6 : 0.2}>
              <animate attributeName="r" values={stage === 'pulse' ? "10;13;10" : "10;11;10"} dur={stage === 'pulse' ? "0.5s" : "4s"} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r="8.5" fill="#0B1D3A" stroke="#3B82F6" strokeWidth="0.9" />
            <text x={cx} y={cy + 1.2} textAnchor="middle" fill="#FFFFFF" fontSize="3.2" fontWeight="800" fontFamily="sans-serif">VCS</text>
          </g>

          {/* Service Nodes — LARGE with labels */}
          {nodes.map(n => {
            const isHov = hovered === n.id;
            const isAct = (stage === 'in' && story.src === n.id) || (stage === 'out' && story.dst === n.id);
            const lit = isHov || isAct;
            return (
              <g key={n.id} className="cursor-pointer" onMouseEnter={() => setHovered(n.id)} onMouseLeave={() => setHovered(null)}>
                {lit && <circle cx={n.x} cy={n.y} r="7" fill={n.accent} opacity="0.12" />}
                <circle cx={n.x} cy={n.y} r="5.2" fill="#0B1D3A" stroke={n.accent} strokeWidth={lit ? 0.9 : 0.45} />
                {/* Icon */}
                <g transform={`translate(${n.x}, ${n.y}) scale(0.18) translate(-12, -12)`}>
                  <path d={n.iconPath} fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                {/* Labels */}
                <text x={n.x} y={n.y + 8} textAnchor="middle" fill="#FFFFFF" fontSize="2.2" fontWeight="700" fontFamily="sans-serif">{n.label}</text>
                <text x={n.x} y={n.y + 10.5} textAnchor="middle" fill="#94A3B8" fontSize="1.5" fontFamily="sans-serif">{n.tagline}</text>
                {/* Green status dot */}
                <circle cx={n.x + 3.6} cy={n.y - 3.6} r="0.7" fill="#34D399" />
              </g>
            );
          })}
        </svg>

        {/* Floating hover tooltip — FIXED POSITION, no layout shift */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/15 rounded-xl shadow-2xl"
            >
              <span className="text-xs font-bold text-white">
                {hovered === 'center' ? 'VCS — Unified Salesforce & Integration Hub' : `${nodes.find(n => n.id === hovered)?.label} — ${nodes.find(n => n.id === hovered)?.tagline}`}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Story Ticker — FIXED at bottom, never shifts the SVG */}
      <div className="w-full max-w-xl flex-shrink-0 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 shadow-2xl overflow-hidden relative mt-2">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
          <div key={storyIdx} className="h-full bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#A78BFA]" style={{ animation: 'storyProgress 4s linear forwards' }} />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: srcNode?.accent || '#3B82F6', boxShadow: `0 0 8px ${srcNode?.accent || '#3B82F6'}` }} />
          <div className="flex-grow min-w-0">
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">VCS Service Flow — {storyIdx + 1} of {stories.length}</span>
            <p className="text-xs font-semibold text-white mt-0.5 leading-snug truncate">{story.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
