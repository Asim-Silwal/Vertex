import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const targetX = useMotionValue(-200);
  const targetY = useMotionValue(-200);
  const targetOpacity = useMotionValue(0);

  const x = useSpring(targetX, { stiffness: 180, damping: 28, mass: 0.2 });
  const y = useSpring(targetY, { stiffness: 180, damping: 28, mass: 0.2 });
  const opacity = useSpring(targetOpacity, { stiffness: 220, damping: 30, mass: 0.2 });

  useEffect(() => {
    const canUseFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canUseFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      targetX.set(event.clientX);
      targetY.set(event.clientY);
      targetOpacity.set(1);
    };

    const handlePointerLeave = () => {
      targetOpacity.set(0);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [targetOpacity, targetX, targetY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30"
      style={{ x, y, opacity }}
    >
      <div className="h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.32)_0%,_rgba(118,94,255,0.12)_38%,_rgba(118,94,255,0)_72%)] blur-xl" />
    </motion.div>
  );
}
