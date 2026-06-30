// Design System - Color Tokens
// Single source of truth for all colors across all themes

export const colors = {
  primary: {
    50: '#EBF0FF',
    100: '#D6E0FF',
    200: '#ADC2FF',
    300: '#85A3FF',
    400: '#3D7AFF',
    500: '#0057FF', // Royal Blue - Brand Primary
    600: '#0046CC',
    700: '#003499',
    800: '#002366',
    900: '#001133',
    950: '#000A1F',
  },
  secondary: {
    50: '#E8EBF5',
    100: '#C5CCE6',
    200: '#8B99CC',
    300: '#5166B3',
    400: '#2C4082',
    500: '#0D2266',
    600: '#071A52', // Deep Navy - Brand Secondary
    700: '#051340',
    800: '#030D2E',
    900: '#02071C',
    950: '#010410',
  },
  accent: {
    50: '#EDF6FF',
    100: '#DBEDFF',
    200: '#B8DBFF',
    300: '#94C9FF',
    400: '#4DA8FF', // Sky Blue - Brand Accent
    500: '#2196F3',
    600: '#1A78C2',
    700: '#135A92',
    800: '#0D3C61',
    900: '#061E31',
    950: '#030F18',
  },
  surface: {
    white: '#FFFFFF',
    light: '#F7FAFF',
    soft: '#F3F8FF',
    muted: '#E5E7EB',
    dark: '#1A1A2E',
    darker: '#0F0F1A',
    darkest: '#0A0A0F',
  },
  text: {
    primary: '#111827',
    secondary: '#374151',
    muted: '#6B7280',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
    inverseSecondary: '#D1D5DB',
  },
  status: {
    success: '#10B981',
    successLight: '#D1FAE5',
    warning: '#F59E0B',
    warningLight: '#FEF3C7',
    error: '#EF4444',
    errorLight: '#FEE2E2',
    info: '#3B82F6',
    infoLight: '#DBEAFE',
  },
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
    focus: '#0057FF',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #0057FF 0%, #4DA8FF 100%)',
    secondary: 'linear-gradient(135deg, #071A52 0%, #0057FF 100%)',
    accent: 'linear-gradient(135deg, #4DA8FF 0%, #A5D8FF 100%)',
    hero: 'linear-gradient(135deg, #071A52 0%, #0D2266 30%, #0057FF 100%)',
    card: 'linear-gradient(135deg, rgba(0, 87, 255, 0.05) 0%, rgba(77, 168, 255, 0.05) 100%)',
    dark: 'linear-gradient(180deg, #0A0A0F 0%, #1A1A2E 100%)',
    glow: 'radial-gradient(circle, rgba(0, 87, 255, 0.15) 0%, transparent 70%)',
  },
} as const;

export type ColorToken = typeof colors;
