import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import test1Img from "@assets/testimonial-1.jpg";
import test2Img from "@assets/testimonial-2.jpg";
import test3Img from "@assets/testimonial-3.jpg";
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Hero() {
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 400], [0, -40]);
  const subtitleY = useTransform(scrollY, [0, 400], [0, -20]);
  const glowY = useTransform(scrollY, [0, 400], [0, 30]);

  return (
    <section 
      className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A0A0A]"
      data-testid="section-hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-8%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.35),_transparent_70%)] blur-[140px] animate-gradient-shift" />
        <div className="absolute left-[8%] top-[16%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(75,110,255,0.24),_transparent_72%)] blur-[110px] animate-drift-slow" />
        <div className="absolute right-[6%] top-[22%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.14),_transparent_70%)] blur-[100px] animate-drift-slow" style={{ animationDelay: '-8s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)] mb-8"
        >
          <div className="flex -space-x-2">
            <img src={test1Img} alt="Reviewer" className="w-6 h-6 rounded-full border border-[#111] object-cover" />
            <img src={test2Img} alt="Reviewer" className="w-6 h-6 rounded-full border border-[#111] object-cover" />
            <img src={test3Img} alt="Reviewer" className="w-6 h-6 rounded-full border border-[#111] object-cover" />
          </div>
          <div className="flex -space-x-0.5">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={12} className="text-[#F59E0B] fill-[#F59E0B]" />
            ))}
          </div>
          <span className="text-xs font-medium text-white/80 pr-1">Trusted by 50+ 7-figure home service businesses</span>
        </motion.div>

        <motion.div style={{ y: headlineY }}>
          <div className="mb-8 flex flex-col items-center gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <span className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.1]">We Engineer Trust For</span>
              <span className="italic-serif text-5xl md:text-7xl text-[#765EFF] leading-[1.1] mt-1">Home Service Brands.</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#999] text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            Stop losing jobs to competitors with worse service but better websites. 
            We build high-converting digital showrooms that turn local traffic into premium booked leads.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <AnimatedButton 
            href="#contact"
            variant="primary"
            className="w-full sm:w-auto text-center bg-[#765EFF] text-white px-6 py-3 rounded-full font-medium text-sm transition-all"
            data-testid="button-hero-primary"
          >
            Get a Free Audit
          </AnimatedButton>
          <AnimatedButton 
            href="#portfolio"
            variant="secondary"
            className="w-full sm:w-auto text-center bg-transparent text-white px-6 py-3 rounded-full font-medium text-sm border border-white/15 transition-all"
            data-testid="button-hero-secondary"
          >
            See Our Work
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
