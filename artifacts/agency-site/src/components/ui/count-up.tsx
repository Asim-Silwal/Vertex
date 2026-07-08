import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // ms
  className?: string;
  decimals?: number;
}

export function CountUp({ end, prefix = '', suffix = '', duration = 2000, className = '', decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * end);
      if (progress < 1) requestAnimationFrame(step);
      else setCurrent(end);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  const display = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}
