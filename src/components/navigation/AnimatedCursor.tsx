'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cursor as cursorTokens } from '@/design-system/cursor';

export default function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'button' | 'text' | 'explore'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth lag following
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const mobile =
        window.matchMedia('(max-width: 1024px)').matches ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Context-aware hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button') || target.closest('.cursor-pointer');
      const isText = ['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName);
      const isExploreNode = target.closest('[data-cursor="explore"]');

      if (isExploreNode) {
        setHoverType('explore');
      } else if (isButton) {
        setHoverType('button');
      } else if (isLink) {
        setHoverType('link');
      } else if (isText) {
        setHoverType('text');
      } else {
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  // Determine dynamic size, border, and background based on context type
  let size: number = cursorTokens.default.size;
  let border: string = cursorTokens.default.border;
  let bg: string = cursorTokens.default.bg;
  let labelText = '';

  if (isClicking) {
    size = cursorTokens.click.size;
    border = cursorTokens.click.border;
    bg = cursorTokens.click.bg;
  } else if (hoverType === 'button' || hoverType === 'link') {
    size = cursorTokens.hover.size;
    border = cursorTokens.hover.border;
    bg = 'rgba(0, 87, 255, 0.08)';
  } else if (hoverType === 'text') {
    size = 8;
    border = '1px solid rgba(0, 87, 255, 0.8)';
    bg = 'rgba(0, 87, 255, 0.4)';
  } else if (hoverType === 'explore') {
    size = 64;
    border = '2px dashed #4DA8FF';
    bg = 'rgba(0, 87, 255, 0.1)';
    labelText = 'Explore';
  }

  return (
    <>
      {/* Outer Spring Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference flex items-center justify-center text-[10px] font-bold text-white tracking-widest uppercase z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          width: size,
          height: size,
          border,
          backgroundColor: bg,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {labelText}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-[#0057FF] rounded-full pointer-events-none z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
