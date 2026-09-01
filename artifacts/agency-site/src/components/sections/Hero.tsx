import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Hero() {
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 400], [0, -40]);
  const subtitleY = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#0A0A0A] pb-16 pt-32"
      data-testid="section-hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-8%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.35),_transparent_70%)] blur-[140px] animate-gradient-shift" />
        <div className="absolute left-[8%] top-[16%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(75,110,255,0.24),_transparent_72%)] blur-[110px] animate-drift-slow" />
        <div className="absolute right-[6%] top-[22%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.14),_transparent_70%)] blur-[100px] animate-drift-slow" style={{ animationDelay: '-8s' }} />
      </div>

      <div className="page-gutter z-10 flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111]/90 px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C7D0E1]">
            DIGITAL DESIGN & DEVELOPMENT STUDIO
          </span>
        </motion.div>

        <motion.div style={{ y: headlineY }}>
          <div className="mb-8 flex flex-col items-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-5xl font-bold leading-[0.96] tracking-[-0.06em] text-white md:text-7xl">
                WE BUILD DIGITAL
              </span>
              <span className="font-display text-5xl font-bold leading-[0.96] tracking-[-0.06em] text-white md:text-7xl">
                EXPERIENCES THAT
              </span>
              <span className="mt-1 font-display text-5xl font-bold leading-[0.96] tracking-[-0.06em] text-[#765EFF] md:text-7xl">
                MOVE BUSINESSES FORWARD.
              </span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#9CA7B7]"
          >
            From brand identity and UI/UX to high-performance websites and digital products, we design and build digital experiences that help ambitious businesses grow.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <AnimatedButton
            href="/contact"
            variant="primary"
            className="w-full rounded-full bg-[#765EFF] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_18px_30px_rgba(118,94,255,0.28)] sm:w-auto"
            data-testid="button-hero-primary"
          >
            Start a Project
          </AnimatedButton>
          <AnimatedButton
            href="/work"
            variant="secondary"
            className="w-full rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:w-auto"
            data-testid="button-hero-secondary"
          >
            Explore Our Work
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
