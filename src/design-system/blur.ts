// Design System - Backdrop Blur Tokens
export const blur = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  glass: '20px',
} as const;

export type BlurToken = typeof blur;
