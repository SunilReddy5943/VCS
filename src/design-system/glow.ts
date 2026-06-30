// Design System - Glow Shadows
export const glow = {
  blue: '0 0 20px rgba(0, 87, 255, 0.2)',
  blueStrong: '0 0 40px rgba(0, 87, 255, 0.4)',
  accent: '0 0 20px rgba(77, 168, 255, 0.25)',
  emerald: '0 0 20px rgba(16, 185, 129, 0.2)',
} as const;

export type GlowToken = typeof glow;
