import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  'data-testid'?: string;
}

export function Section({ children, className = '', id, 'data-testid': testId }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      data-testid={testId}
    >
      {children}
    </motion.section>
  );
}

export function FadeInStagger({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {}
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: { 
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, className = '', from = 'left' }: { children: ReactNode; className?: string; from?: 'left' | 'right' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: from === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
