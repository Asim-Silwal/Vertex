import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import whiteLogo from '@assets/White Logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessEmail = 'info@vertex-digital.site';
  const linkedinUrl = 'https://www.linkedin.com/company/vertex-digital/';
  
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050608] py-16" data-testid="section-footer">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-5 lg:max-w-sm">
          <img src={whiteLogo} alt="Vertex Digital logo" className="h-36 w-auto object-contain" />
          <p className="max-w-sm text-sm leading-7 text-[#D1D5DB]">
            Vertex Digital designs and builds clear, fast websites that help service businesses earn trust and receive more inquiries.
          </p>
          <a href={`mailto:${businessEmail}`} className="text-sm font-medium text-[#A1ACBE] transition duration-300 hover:text-white">
            {businessEmail}
          </a>
        </div>

        <div className="flex flex-col gap-4 lg:items-center">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#A1ACBE] lg:justify-center">
            <a href="/" className="transition duration-300 hover:text-white">Home</a>
            <a href="/services" className="transition duration-300 hover:text-white">Services</a>
            <a href="/work" className="transition duration-300 hover:text-white">Work</a>
            <a href="/about" className="transition duration-300 hover:text-white">About</a>
            <a href="/contact" className="transition duration-300 hover:text-white">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 text-[#A1ACBE]">
          <a href="/contact" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A1ACBE] transition duration-300 hover:bg-white/15 hover:text-white" aria-label="Contact Vertex Digital">
            <ArrowRight size={20} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A1ACBE] transition duration-300 hover:bg-white/15 hover:text-white" aria-label="Vertex Digital on LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${businessEmail}`} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A1ACBE] transition duration-300 hover:bg-white/15 hover:text-white" aria-label={`Email Vertex Digital at ${businessEmail}`}>
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 pt-6 text-sm text-[#8B95A4] md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {currentYear} Vertex Digital. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href="/privacy" className="transition duration-300 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="transition duration-300 hover:text-white">Terms of Service</a>
          <a href="/contact" className="transition duration-300 hover:text-white">Contact Vertex Digital</a>
        </div>
      </div>
    </footer>
  );
}
