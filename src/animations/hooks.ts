'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import { useRef, useEffect, useState, useCallback } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react';
import { prefersReducedMotion } from '@/lib/utils';

// ========================================
// useScrollReveal - Trigger animations on scroll
// ========================================
export function useScrollReveal(options?: {
  threshold?: number;
  once?: boolean;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.threshold ?? 0.15,
    margin: options?.margin as `${number}px ${number}px ${number}px ${number}px` | undefined,
  });
  const shouldAnimate = !prefersReducedMotion();

  return { ref, isInView: shouldAnimate ? isInView : true };
}

// ========================================
// useMagnetic - Magnetic cursor effect
// ========================================
export function useMagnetic(strength: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion() || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}

// ========================================
// useParallax - Parallax on scroll
// ========================================
export function useParallax(
  scrollY: MotionValue<number>,
  speed: number = 0.3
) {
  const y = useTransform(scrollY, (value) => value * speed);
  return y;
}

// ========================================
// useCountUp - Animated counter
// ========================================
export function useCountUp(
  target: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (startOnView && isInView) {
      setStarted(true);
    }
  }, [isInView, startOnView]);

  useEffect(() => {
    if (!started) return;
    if (prefersReducedMotion()) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [started, target, duration]);

  return { count, ref };
}

// ========================================
// useTypewriter - Typing effect
// ========================================
export function useTypewriter(
  text: string,
  speed: number = 50,
  startDelay: number = 0
) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplayText(text);
      setIsComplete(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex));
          charIndex++;
          timeoutId = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeoutId = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
}

// ========================================
// useMediaQuery - Responsive hook
// ========================================
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

// ========================================
// useReducedMotion - Check motion preference
// ========================================
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

// ========================================
// useScrollPosition - Track scroll
// ========================================
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
      setScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
}

// ========================================
// useWindowSize - Track window dimensions
// ========================================
export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// ========================================
// useLockBodyScroll - Lock body scroll (for modals)
// ========================================
export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    if (lock) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lock]);
}
