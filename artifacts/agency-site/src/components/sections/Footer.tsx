import { Twitter, Linkedin, Instagram } from 'lucide-react';
import whiteLogo from '@assets/White Logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050608] py-16" data-testid="section-footer">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.24),transparent_55%)] blur-3xl opacity-70 animate-drift-slow" />
        <div className="absolute right-[-14%] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.18),transparent_60%)] blur-3xl opacity-60 animate-gradient-shift" />
        <div className="absolute left-1/2 top-16 h-60 w-60 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(103,232,249,0.16),transparent_60%)] blur-3xl opacity-60 animate-drift-slow" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-5 lg:max-w-sm">
          <img src={whiteLogo} alt="Vertex Digital logo" className="h-36 w-auto object-contain" />
          <p className="max-w-sm text-sm leading-7 text-[#D1D5DB]">
            Premium web design and growth marketing for ambitious brands who want a refined digital presence.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#A1ACBE] lg:justify-center">
          <a href="#services" className="transition duration-300 hover:text-white">Services</a>
          <a href="#portfolio" className="transition duration-300 hover:text-white">Case Studies</a>
          <a href="#process" className="transition duration-300 hover:text-white">Our Process</a>
          <a href="#faq" className="transition duration-300 hover:text-white">FAQ</a>
          <a href="#contact" className="transition duration-300 hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3 text-[#A1ACBE]">
          <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A1ACBE] transition duration-300 hover:bg-white/15 hover:text-white">
            <Twitter size={20} />
          </a>
          <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A1ACBE] transition duration-300 hover:bg-white/15 hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A1ACBE] transition duration-300 hover:bg-white/15 hover:text-white">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 pt-6 text-sm text-[#8B95A4] md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {currentYear} Vertex Digital. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="transition duration-300 hover:text-white">Privacy Policy</a>
          <a href="#" className="transition duration-300 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
