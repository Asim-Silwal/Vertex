import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  'data-testid'?: string;
}

export function Section({ children, className = '', id, 'data-testid': testId }: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      data-testid={testId}
    >
      {children}
    </section>
  );
}

export function FadeInStagger({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function FadeIn({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function SlideIn({ children, className = '', from = 'left' }: { children: ReactNode; className?: string; from?: 'left' | 'right' }) {
  return (
    <div className={className} data-slide-origin={from}>
      {children}
    </div>
  );
}
