import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/6 pt-16 pb-8" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#765EFF] rounded-sm flex items-center justify-center">
              <span className="font-display font-bold text-white text-xs leading-none">O</span>
            </div>
            <span className="font-display font-medium text-sm text-white tracking-tight">Osprey</span>
          </div>
          
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li><a href="#services" className="text-sm font-medium text-[#555] hover:text-white transition-colors">Services</a></li>
            <li><a href="#portfolio" className="text-sm font-medium text-[#555] hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#process" className="text-sm font-medium text-[#555] hover:text-white transition-colors">Our Process</a></li>
            <li><a href="#faq" className="text-sm font-medium text-[#555] hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#contact" className="text-sm font-medium text-[#555] hover:text-white transition-colors">Contact</a></li>
          </ul>

          <div className="flex gap-4">
            <a href="#" className="text-[#555] hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-[#555] hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-[#555] hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#555]">
          <p>© {currentYear} Osprey Digital LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
