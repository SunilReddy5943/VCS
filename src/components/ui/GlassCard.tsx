'use client';

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type GlassCardPadding = 'sm' | 'md' | 'lg';

interface GlassCardProps {
  className?: string;
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
  padding?: GlassCardPadding;
}

const paddingClasses: Record<GlassCardPadding, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function GlassCard({
  className,
  children,
  hover = true,
  glow = false,
  padding = 'md',
}: GlassCardProps) {
  const classes = cn(
    'glass-card',
    paddingClasses[padding],
    glow && 'glow-hover',
    hover && 'gradient-border',
    className
  );

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{
          y: -4,
          boxShadow:
            '0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -3px rgba(0, 0, 0, 0.05)',
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
