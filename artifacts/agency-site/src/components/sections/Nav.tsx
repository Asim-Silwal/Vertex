import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { AnimatedButton } from '@/components/ui/animated-button';
import whiteLogo from '@assets/White Logo.png';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, navigate] = useLocation();
  const mobileMenuRef = useRef<HTMLElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const resolveSectionHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`);

  const handleLogoClick = () => {
    if (pathname !== '/') {
      navigate('/');
      return;
    }

    window.location.hash = '';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      const firstLink = mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a');
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.28, 0.11, 0.32, 1] }}
        className="page-gutter flex min-h-16 items-center justify-between gap-8"
        data-testid="header-nav"
      >
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center"
          aria-label="Vertex Digital home"
        >
          <img src={whiteLogo} alt="Vertex Digital logo" className="h-8 w-auto object-contain" />
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              className="text-[13px] font-normal text-[#d2d2d7] hover:text-white transition-colors"
              whileHover={{ color: '#ffffff' }}
              transition={{ duration: 0.15 }}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:block">
          <AnimatedButton 
            href="/contact"
            variant="primary"
            className="min-h-10 rounded-lg bg-[#765EFF] px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#8F7CFF]"
            data-testid="button-nav-audit"
          >
            Start a Project
          </AnimatedButton>
        </div>

        <button 
          ref={mobileMenuButtonRef}
          type="button"
          className="grid min-h-11 min-w-11 place-items-center text-white md:!hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close mobile navigation' : 'Open mobile navigation'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {mobileMenuOpen && (
        <nav ref={mobileMenuRef} id="mobile-navigation" aria-label="Mobile navigation" className="absolute left-4 right-4 top-20 z-40 flex flex-col gap-2 rounded-xl border border-white/10 bg-[#111113]/95 p-4 backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="min-h-11 rounded-lg px-3 py-3 text-sm font-medium text-[#d2d2d7] hover:bg-white/5 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <AnimatedButton 
            href="/contact"
            variant="primary"
            className="bg-[#765EFF] text-center text-white px-5 py-2.5 rounded-lg text-sm font-medium w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Project
          </AnimatedButton>
        </nav>
      )}
    </header>
  );
}
