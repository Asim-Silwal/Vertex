import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorDot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setIsFinePointer(window.matchMedia('(pointer: fine)').matches);

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isFinePointer) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden="true">
      <motion.div
        className="absolute h-2.5 w-2.5 rounded-full border border-white/20 bg-[#765EFF]/90 shadow-[0_0_16px_rgba(118,94,255,0.35)]"
        animate={{ x: mousePosition.x, y: mousePosition.y, scale: isVisible ? 1 : 0.7 }}
        transition={{ type: 'spring', stiffness: 180, damping: 24, mass: 0.2 }}
        style={{ translateX: '-50%', translateY: '-50%', opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="absolute h-5 w-5 rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10"
        animate={{ x: mousePosition.x, y: mousePosition.y, scale: isVisible ? 1 : 0.7 }}
        transition={{ type: 'spring', stiffness: 150, damping: 22, mass: 0.3 }}
        style={{ translateX: '-50%', translateY: '-50%', opacity: isVisible ? 0.6 : 0 }}
      />
    </div>
  );
}
