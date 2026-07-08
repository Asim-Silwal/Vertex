import { FadeIn, Section } from '@/components/ui/section';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <Section id="contact" className="py-32 relative overflow-hidden" data-testid="section-cta">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center border border-border bg-card/50 backdrop-blur-sm p-10 md:p-16 rounded-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop losing premium jobs to competitors with better marketing. Let's build a digital presence that reflects the true quality of your work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:hello@osprey.agency"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-base font-medium transition-all group"
            >
              Get a Free Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-muted-foreground text-sm mx-4">or</span>
            <a 
              href="tel:+18005550199"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-card border border-border text-foreground px-8 py-4 rounded-md text-base font-medium transition-all"
            >
              Call (800) 555-0199
            </a>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            Currently accepting 2 new projects for next month.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
