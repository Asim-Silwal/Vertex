import { motion } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  'data-testid'?: string;
}

export function AnimatedButton({ children, className = '', href, variant = 'primary', onClick, type = 'button', ariaLabel, 'data-testid': testId }: AnimatedButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }

    if (!href?.startsWith('#')) {
      return;
    }

    event.preventDefault();

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const offset = 96;
    const top = window.scrollY + target.getBoundingClientRect().top - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`relative overflow-hidden ${className}`}
      data-testid={testId}
      whileHover={{ opacity: 0.88 }}
      whileTap={{ scale: 0.98, opacity: 0.78 }}
      transition={{ duration: 0.2, ease: [0.28, 0.11, 0.32, 1] }}
    >
      {children}
    </Tag>
  );
}
