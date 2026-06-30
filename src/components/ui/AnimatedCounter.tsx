'use client';

import { useCountUp } from '@/animations/hooks';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix,
  prefix,
  label,
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp(value, duration);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="text-5xl font-bold text-gradient">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-text-muted uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  );
}
