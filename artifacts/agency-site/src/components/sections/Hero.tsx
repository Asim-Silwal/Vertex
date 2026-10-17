import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';

const roofingPreview = '/work/usa-desktop.png';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: [0.28, 0.11, 0.32, 1] as const },
  });

  return (
    <section className="overflow-hidden border-b border-white/8 bg-black pt-32 sm:pt-40" data-testid="section-hero">
      <div className="page-gutter pb-20 text-center md:pb-28">
        <motion.p {...enter(0)} className="text-sm font-semibold text-[#8f7cff]">
          Premium websites for home service businesses
        </motion.p>

        <motion.h1 {...enter(0.08)} className="mx-auto mt-6 max-w-[1020px] text-[clamp(3.5rem,7.5vw,7.25rem)] font-normal leading-[0.92] tracking-[-0.045em] text-[#f5f5f7]">
          Premium websites that make your business easier to trust and hire.
        </motion.h1>

        <motion.p {...enter(0.16)} className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#a1a1a6] sm:text-xl">
          We design and build premium websites for home service businesses that need clearer positioning, stronger trust, and an easier path from visit to inquiry.
        </motion.p>

        <motion.div {...enter(0.24)} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AnimatedButton href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#765EFF] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8F7CFF]" data-testid="button-hero-primary">
            Plan Your Website <ArrowUpRight size={17} />
          </AnimatedButton>
          <AnimatedButton href="/work" variant="secondary" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#b8adff] hover:bg-white/5 hover:text-white" data-testid="button-hero-secondary">
            View Case Studies <ArrowRight size={17} />
          </AnimatedButton>
        </motion.div>

        <motion.div {...enter(0.3)} className="relative mx-auto mt-16 max-w-[1060px]" aria-label="Website project preview">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111113] p-2.5 sm:p-3.5">
            <div className="flex min-h-11 items-center justify-between px-3 text-[11px] text-[#86868b] sm:px-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>
              <span>Selected work / USA Storm Roofing</span>
              <ArrowUpRight size={13} />
            </div>
            <img src={roofingPreview} alt="USA Storm Roofing website redesign preview" className="aspect-[16/9] w-full rounded-lg object-cover object-top" fetchPriority="high" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
