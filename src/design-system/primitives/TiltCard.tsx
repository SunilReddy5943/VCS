'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  depth?: number; // Maximum rotation angle in degrees
  perspective?: number; // Perspective distance in px
}

export function TiltCard({
  children,
  className,
  depth = 15,
  perspective = 1000,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for normalized cursor position (-0.5 to 0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth spring physics for rotation
  const rotateX = useSpring(useTransform(y, [0, 1], [depth, -depth]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-depth, depth]), {
    stiffness: 200,
    damping: 30,
  });

  // Specular glare reflection positions (opposite to cursor)
  const glareX = useSpring(useTransform(x, [0, 1], ['100%', '-100%']), {
    stiffness: 200,
    damping: 30,
  });
  const glareY = useSpring(useTransform(y, [0, 1], ['100%', '-100%']), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className="w-full h-full select-none"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={cn(
          'relative w-full h-full rounded-[20px] transition-shadow duration-300 border border-white/10 bg-white/5 backdrop-blur-xl',
          isHovered ? 'shadow-[0_20px_50px_rgba(0,87,255,0.15)] border-white/20' : 'shadow-md',
          className
        )}
      >
        {/* Layer 5: Specular Reflection Sheet (Glare) */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[20px] overflow-hidden mix-blend-overlay z-[5]"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)',
            left: glareX,
            top: glareY,
          }}
        />

        {/* Child content containing layers mapped via translate-z */}
        <div className="relative w-full h-full p-8 z-[2]" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
