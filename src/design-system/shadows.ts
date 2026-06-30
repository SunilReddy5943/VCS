// Design System - Shadow Tokens
export const shadows = {
  none: 'none',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.04)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  card: '0 4px 16px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  lg: '0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
  elevated: '0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -3px rgba(0, 0, 0, 0.05)',
  floating: '0 20px 50px -10px rgba(0, 0, 0, 0.15), 0 8px 20px -5px rgba(0, 0, 0, 0.08)',
  xl: '0 25px 60px -12px rgba(0, 0, 0, 0.2)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  glow: {
    blue: '0 0 20px rgba(0, 87, 255, 0.3)',
    blueStrong: '0 0 40px rgba(0, 87, 255, 0.4), 0 0 80px rgba(0, 87, 255, 0.1)',
    accent: '0 0 20px rgba(77, 168, 255, 0.3)',
    white: '0 0 20px rgba(255, 255, 255, 0.1)',
    card: '0 0 30px rgba(0, 87, 255, 0.08)',
  },
} as const;

export type ShadowTokens = typeof shadows;
