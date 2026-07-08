import { FadeIn, Section } from '@/components/ui/section';
import { ArrowRight } from 'lucide-react';
import bgImg from "@assets/cta-bg.jpg";

export default function CTA() {
  return (
    <Section id="contact" className="py-32 relative overflow-hidden" data-testid="section-cta">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background/80 z-0" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[120px] opacity-40 pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/15 rounded-full blur-[120px] opacity-40 pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center border border-white/10 bg-card/60 backdrop-blur-md shadow-2xl p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight relative z-10">
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Stop losing premium jobs to competitors with better marketing. Let's build a digital presence that reflects the true quality of your work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="mailto:hello@osprey.agency"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-md text-base font-medium transition-all shadow-lg shadow-blue-900/20 group"
            >
              Get a Free Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-muted-foreground text-sm mx-4">or</span>
            <a 
              href="tel:+18005550199"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-md text-base font-medium transition-all"
            >
              Call (800) 555-0199
            </a>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2 relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Currently accepting 2 new projects for next month.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
