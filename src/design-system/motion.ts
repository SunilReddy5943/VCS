// Design System - Motion Tokens
// Consistent animation timing, easing, and behavior across the entire app

export const motionTokens = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 800,
    slowest: 1200,
  },
  easing: {
    default: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    smooth: [0.45, 0, 0.55, 1] as [number, number, number, number],
    easeOut: [0, 0, 0.2, 1] as [number, number, number, number],
    easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
    spring: { stiffness: 400, damping: 30 },
    bounce: { stiffness: 300, damping: 10 },
    snappy: { stiffness: 500, damping: 35 },
    gentle: { stiffness: 200, damping: 20 },
  },
  hover: {
    scale: 1.02,
    lift: -4,
    glowExpand: 8,
    magneticStrength: 0.3,
  },
  scroll: {
    revealDistance: 60,
    staggerDelay: 0.08,
    parallaxSpeed: 0.3,
    threshold: 0.15,
  },
  page: {
    enterDuration: 500,
    exitDuration: 300,
  },
} as const;

export type MotionTokens = typeof motionTokens;
