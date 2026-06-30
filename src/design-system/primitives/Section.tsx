'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

type SectionBackground = 'white' | 'light' | 'soft' | 'navy' | 'dark' | 'gradient';
type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  id?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: 'section-white',
  light: 'section-light',
  soft: 'section-soft',
  navy: 'section-navy',
  dark: 'section-dark',
  gradient: 'section-gradient',
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-16',
  md: 'py-24',
  lg: 'py-32',
  xl: 'py-40',
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

export function Section({
  id,
  background = 'white',
  spacing = 'lg',
  className,
  children,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn(backgroundClasses[background], spacingClasses[spacing], className)}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.section>
  );
}
