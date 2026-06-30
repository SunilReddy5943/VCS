// Motion budgets and spring physics mappings
export const animationConfig = {
  timings: {
    hover: 0.15,     // 150ms micro-interactions
    button: 0.2,     // 200ms snappy response
    card: 0.25,      // 250ms card tilt
    reveal: 0.5,     // 500ms scroll reveals
    page: 0.7,       // 700ms smooth route blend
    hero: 0.9,       // 900ms slow entrance
  },
  springs: {
    hover: { stiffness: 400, damping: 20 },
    card: { stiffness: 200, damping: 30 },
    page: { stiffness: 100, damping: 15 },
  },
} as const;

export type AnimationConfig = typeof animationConfig;
