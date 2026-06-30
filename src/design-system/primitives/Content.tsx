import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContentLayout = 'grid' | 'flex' | 'stack';
type ContentColumns = 1 | 2 | 3 | 4;
type ContentGap = 'sm' | 'md' | 'lg' | 'xl';

interface ContentProps {
  layout?: ContentLayout;
  columns?: ContentColumns;
  gap?: ContentGap;
  className?: string;
  children: ReactNode;
}

const gapClasses: Record<ContentGap, string> = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

const columnClasses: Record<ContentColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function Content({
  layout = 'grid',
  columns = 3,
  gap = 'lg',
  className,
  children,
}: ContentProps) {
  const gapClass = gapClasses[gap];

  const layoutClasses: Record<ContentLayout, string> = {
    grid: cn('grid', columnClasses[columns], gapClass),
    flex: cn('flex flex-wrap', gapClass),
    stack: cn('flex flex-col', gapClass),
  };

  return (
    <div className={cn(layoutClasses[layout], className)}>
      {children}
    </div>
  );
}
