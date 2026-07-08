import { FadeIn, Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function CTA() {
  return (
    <Section id="contact" className="py-32 relative overflow-hidden bg-[#0A0A0A]" data-testid="section-cta">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="max-w-2xl mx-auto text-center relative">
          <div className="text-[#765EFF] text-sm font-medium mb-4">Ready to grow?</div>
          
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Dominate Your Local Market.
          </h2>
          
          <p className="text-[#666] text-lg mb-10">
            Stop losing premium jobs to competitors with better marketing. Let's build a digital presence that reflects the true quality of your work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton 
              href="mailto:hello@vertexdigital.com"
              variant="primary"
              className="w-full sm:w-auto text-center bg-[#765EFF] text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              Get a Free Audit
            </AnimatedButton>
            <AnimatedButton 
              href="tel:+18005550199"
              variant="secondary"
              className="w-full sm:w-auto text-center bg-transparent border border-white/15 text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              See Our Work
            </AnimatedButton>
          </div>
          
          <p className="mt-8 text-sm text-[#444]">
            Currently accepting 2 new projects for next month.
          </p>

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-[#765EFF]/20 via-[#4B6EFF]/10 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" 
          />
        </FadeIn>
      </div>
    </Section>
  );
}
