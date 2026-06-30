import type { Variants, Transition } from 'motion/react';
import { motionTokens } from '@/design-system/motion';

// ========================================
// PAGE TRANSITIONS
// ========================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionTokens.duration.slow / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.99,
    transition: {
      duration: motionTokens.duration.normal / 1000,
      ease: motionTokens.easing.default,
    },
  },
};

// ========================================
// SCROLL REVEAL VARIANTS
// ========================================

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.scroll.revealDistance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.normal / 1000,
      ease: motionTokens.easing.default,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionTokens.duration.slow / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionTokens.duration.slow / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.slow / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionTokens.duration.slower / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionTokens.duration.slower / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

// ========================================
// STAGGER CONTAINERS
// ========================================

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.scroll.staggerDelay,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.scroll.staggerDelay / 2,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.scroll.staggerDelay * 2,
      delayChildren: 0.2,
    },
  },
};

// ========================================
// CARD ANIMATIONS
// ========================================

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    scale: motionTokens.hover.scale,
    y: motionTokens.hover.lift,
    boxShadow: '0 20px 40px -12px rgba(0, 87, 255, 0.15)',
    transition: {
      duration: motionTokens.duration.normal / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionTokens.duration.slow / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

// ========================================
// BUTTON ANIMATIONS
// ========================================

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

export const buttonHover = {
  scale: 1.02,
  transition: {
    type: 'spring' as const,
    stiffness: motionTokens.easing.spring.stiffness,
    damping: motionTokens.easing.spring.damping,
  },
};

// ========================================
// MODAL ANIMATIONS
// ========================================

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionTokens.duration.normal / 1000 },
  },
  exit: {
    opacity: 0,
    transition: { duration: motionTokens.duration.fast / 1000 },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: motionTokens.easing.snappy.stiffness,
      damping: motionTokens.easing.snappy.damping,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: motionTokens.duration.fast / 1000,
    },
  },
};

// ========================================
// NAVIGATION ANIMATIONS
// ========================================

export const navItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const megaMenu: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionTokens.duration.normal / 1000,
      ease: motionTokens.easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: {
      duration: motionTokens.duration.fast / 1000,
    },
  },
};

export const mobileMenu: Variants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: motionTokens.duration.normal / 1000,
    },
  },
};

// ========================================
// ICON ANIMATIONS
// ========================================

export const iconFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const iconSpin: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const iconPulse: Variants = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ========================================
// MARQUEE
// ========================================

export const marquee: Variants = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

// ========================================
// COMMON TRANSITION PRESETS
// ========================================

export const springTransition: Transition = {
  type: 'spring',
  stiffness: motionTokens.easing.spring.stiffness,
  damping: motionTokens.easing.spring.damping,
};

export const smoothTransition: Transition = {
  duration: motionTokens.duration.normal / 1000,
  ease: motionTokens.easing.smooth,
};

export const slowTransition: Transition = {
  duration: motionTokens.duration.slow / 1000,
  ease: motionTokens.easing.smooth,
};
