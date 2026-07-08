import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Industries', href: '#industries' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="inline-flex items-center justify-between gap-6 px-4 py-2.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-fit"
        data-testid="header-nav"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#765EFF] rounded-sm flex items-center justify-center">
            <span className="font-display font-bold text-white text-xs leading-none">O</span>
          </div>
          <span className="font-display font-medium text-sm text-white">Osprey</span>
        </div>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#999] transition-colors"
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
            href="#contact"
            variant="primary"
            className="bg-[#765EFF] text-white px-4 py-2 rounded-full text-sm font-medium"
            data-testid="button-nav-audit"
          >
            Get a Free Audit
          </AnimatedButton>
        </div>

        <button 
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl flex flex-col gap-4 z-40 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#999] hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <AnimatedButton 
            href="#contact"
            variant="primary"
            className="bg-[#765EFF] text-center text-white px-5 py-3 rounded-full text-sm font-medium w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Free Audit
          </AnimatedButton>
        </div>
      )}
    </header>
  );
}
