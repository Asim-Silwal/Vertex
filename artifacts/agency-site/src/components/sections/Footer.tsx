import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-white text-xl leading-none">O</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Osprey</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              High-converting digital showrooms for the trades. We engineer trust so you can close more premium leads.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-wide text-foreground">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Design & Build</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Local SEO</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Conversion Rate Optimization</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Reputation Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-wide text-foreground">Company</h4>
            <ul className="space-y-4">
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</a></li>
              <li><a href="#process" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Process</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Osprey Digital LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
