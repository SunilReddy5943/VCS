// Theme configuration mappings for hybrid layouts
export const themeConfig = {
  // Navigation layout flow of themes
  sequence: [
    { id: 'vision', theme: 'dark' },       // Hero
    { id: 'challenges', theme: 'light' },   // Why Enterprises Fail
    { id: 'platform', theme: 'light' },     // Connected Intelligence Platform
    { id: 'journey', theme: 'light' },      // Transformation Journey scroller
    { id: 'explorer', theme: 'light' },     // Architecture Explorer
    { id: 'ecosystem', theme: 'light' },    // Industry Ecosystem
    { id: 'matrix', theme: 'light' },       // Capability Matrix
    { id: 'case-studies', theme: 'light' }, // Case Studies
    { id: 'resources', theme: 'light' },    // Resource Center
    { id: 'consultation', theme: 'dark' },  // AI Consultation Form
    { id: 'footer', theme: 'dark' },        // Footer
  ],
  styles: {
    dark: {
      bg: 'bg-[#050508]',
      surface: 'bg-[#101018]',
      text: 'text-white',
      textMuted: 'text-gray-400',
      border: 'border-white/10',
    },
    light: {
      bg: 'bg-white',
      surface: 'bg-[#F7F9FC]',
      text: 'text-[#111827]',
      textMuted: 'text-[#4B5563]',
      border: 'border-[#E5E8F0]',
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
