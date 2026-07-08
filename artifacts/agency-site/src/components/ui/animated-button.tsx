import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  'data-testid'?: string;
}

export function AnimatedButton({ children, className = '', href, variant = 'primary', onClick, 'data-testid': testId }: AnimatedButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const shimmer = variant === 'primary' ? (
    <motion.span
      className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
      initial={false}
    >
      <motion.span
        className="absolute inset-0 -translate-x-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
          borderRadius: 'inherit',
        }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.span>
  ) : null;

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref as any}
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      data-testid={testId}
      whileHover={{ 
        scale: 1.04,
        ...(variant === 'primary' ? { boxShadow: '0 0 30px rgba(118, 94, 255, 0.4)' } : { boxShadow: '0 0 20px rgba(255,255,255,0.06)' })
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {shimmer}
      {children}
    </Tag>
  );
}
