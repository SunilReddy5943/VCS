'use client';

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type HeadingAlign = 'left' | 'center' | 'right';
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  align?: HeadingAlign;
  titleAs?: HeadingTag;
  className?: string;
}

const alignClasses: Record<HeadingAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Heading({
  badge,
  title,
  subtitle,
  align = 'center',
  titleAs: TitleTag = 'h2',
  className,
}: HeadingProps) {
  return (
    <motion.div
      className={cn(alignClasses[align], className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-wider text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full inline-block mb-4"
        >
          {badge}
        </motion.span>
      )}

      <motion.div variants={fadeUp}>
        <TitleTag className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
          {title}
        </TitleTag>
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'text-lg md:text-xl text-text-secondary mt-4 max-w-3xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
