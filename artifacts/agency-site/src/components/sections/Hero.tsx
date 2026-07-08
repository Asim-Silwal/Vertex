import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1F2937_1px,transparent_1px),linear-gradient(to_bottom,#1F2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col items-center text-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-muted-foreground mb-8"
        >
          <div className="flex -space-x-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={14} className="text-[#10B981] fill-[#10B981]" />
            ))}
          </div>
          <span className="mx-2 w-[1px] h-4 bg-border"></span>
          Trusted by 50+ 7-figure home service businesses
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] tracking-tight max-w-5xl mb-6"
        >
          We Engineer Trust For <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
            Home Service Brands.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Stop losing jobs to competitors with worse service but better websites. 
          We build high-converting digital showrooms that turn local traffic into premium booked leads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-base font-medium transition-all group"
            data-testid="button-hero-primary"
          >
            Get a Free Audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-card border border-border text-foreground px-8 py-4 rounded-md text-base font-medium transition-all"
            data-testid="button-hero-secondary"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
