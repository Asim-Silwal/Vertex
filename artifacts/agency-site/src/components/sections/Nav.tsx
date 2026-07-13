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
    { name: 'Industries', href: '#industries' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
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
    <header className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="inline-flex items-center justify-between gap-8 px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_rgba(0,0,0,0.35)]"
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
              href={resolveSectionHref(link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
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
            href={resolveSectionHref('#contact')}
            variant="primary"
            className="bg-[#765EFF] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#8F7CFF] transition-colors"
            data-testid="button-nav-audit"
          >
            Get a Free Audit
          </AnimatedButton>
        </div>

        <button 
          ref={mobileMenuButtonRef}
          type="button"
          className="md:hidden text-white p-1"
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
        <nav ref={mobileMenuRef} id="mobile-navigation" aria-label="Mobile navigation" className="absolute top-20 left-4 right-4 bg-black/40 border border-white/10 p-4 rounded-2xl flex flex-col gap-4 z-40 md:hidden backdrop-blur-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={resolveSectionHref(link.href)}
              className="text-sm font-medium text-white/70 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <AnimatedButton 
            href={resolveSectionHref('#contact')}
            variant="primary"
            className="bg-[#765EFF] text-center text-white px-5 py-2.5 rounded-lg text-sm font-medium w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Free Audit
          </AnimatedButton>
        </nav>
      )}
    </header>
  );
}
