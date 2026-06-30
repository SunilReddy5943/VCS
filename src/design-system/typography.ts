// Design System - Typography Tokens

export const typography = {
  display: { size: '4.5rem', lineHeight: 1.1, weight: 700, font: 'var(--font-geist-sans)' },
  h1: { size: '3.5rem', lineHeight: 1.15, weight: 700, font: 'var(--font-geist-sans)' },
  h2: { size: '2.625rem', lineHeight: 1.2, weight: 600, font: 'var(--font-geist-sans)' },
  h3: { size: '2rem', lineHeight: 1.3, weight: 600, font: 'var(--font-geist-sans)' },
  h4: { size: '1.5rem', lineHeight: 1.4, weight: 600, font: 'var(--font-geist-sans)' },
  h5: { size: '1.25rem', lineHeight: 1.5, weight: 600, font: 'var(--font-geist-sans)' },
  body: {
    lg: { size: '1.25rem', lineHeight: 1.7, weight: 400, font: 'var(--font-inter)' },
    md: { size: '1rem', lineHeight: 1.7, weight: 400, font: 'var(--font-inter)' },
    sm: { size: '0.875rem', lineHeight: 1.6, weight: 400, font: 'var(--font-inter)' },
  },
  caption: { size: '0.75rem', lineHeight: 1.5, weight: 500, font: 'var(--font-inter)' },
  overline: {
    size: '0.875rem', lineHeight: 1.5, weight: 600,
    font: 'var(--font-inter)', textTransform: 'uppercase' as const, letterSpacing: '0.05em',
  },
} as const;

export type TypographyTokens = typeof typography;
