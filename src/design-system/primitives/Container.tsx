import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  '2xl': 'max-w-[1400px]',
  full: 'max-w-full',
};

export function Container({ size = '2xl', className, children }: ContainerProps) {
  return (
    <div className={cn('mx-auto px-6 md:px-8 xl:px-12', sizeClasses[size], className)}>
      {children}
    </div>
  );
}
