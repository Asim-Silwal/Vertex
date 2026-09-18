import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Check, MousePointer2 } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import roofingPreview from '@assets/usa-storm-roofing-screenshot.jpg';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#08090d] pt-32 sm:pt-40" data-testid="section-hero">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(118,94,255,.18),transparent_42%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="page-gutter relative grid min-h-[700px] items-center gap-14 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pb-28">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#765EFF]/30 bg-[#765EFF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] text-[#b8adff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9b8aff] shadow-[0_0_12px_#9b8aff]" />
            Digital growth for service businesses
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1 }} className="max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[.99] tracking-[-.075em] text-white">
            Make your first impression <span className="text-[#9e8eff]">work harder.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .2 }} className="mt-8 max-w-xl text-lg leading-8 text-[#aab3c4] sm:text-xl">
            We build sharp, fast websites for home service businesses that need to earn trust and turn more visitors into calls and quote requests.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .3 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AnimatedButton href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#765EFF] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(118,94,255,.22)]" data-testid="button-hero-primary">Start a Project <ArrowUpRight size={17} /></AnimatedButton>
            <AnimatedButton href="/work" variant="secondary" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[.04] px-7 py-4 text-sm font-semibold text-white" data-testid="button-hero-secondary">See Our Work <ArrowDownRight size={17} /></AnimatedButton>
          </motion.div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-[#aab3c4]">
            <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#a799ff]" /> Clearer offers</span>
            <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#a799ff]" /> Faster experiences</span>
            <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#a799ff]" /> Easier inquiries</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-[620px] lg:ml-auto" aria-label="Website project preview">
          <div className="absolute -inset-7 rounded-[2.5rem] bg-[#765EFF]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#11131a] p-2 shadow-[0_35px_100px_rgba(0,0,0,.55)] sm:p-3">
            <div className="mb-2 flex items-center justify-between px-3 py-2 text-[10px] text-[#8993a6] sm:mb-3">
              <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ef6d73]" /><span className="h-2 w-2 rounded-full bg-[#e8bf62]" /><span className="h-2 w-2 rounded-full bg-[#69bb8c]" /></div>
              <span className="rounded-md border border-white/10 bg-white/5 px-4 py-1">Selected work / USA Storm Roofing</span>
              <ArrowUpRight size={13} />
            </div>
            <img src={roofingPreview} alt="USA Storm Roofing website redesign preview" className="aspect-[16/10] w-full rounded-xl object-cover object-top" fetchPriority="high" />
          </div>
          <div className="absolute -bottom-7 -left-3 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#191a24] px-4 py-3 shadow-2xl sm:-left-8">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#765EFF]/20 text-[#ae9fff]"><MousePointer2 size={17} /></span>
            <span><strong className="block text-xs font-semibold text-white">Designed for action</strong><small className="text-[11px] text-[#9ca7b8]">Clear paths from visit to inquiry</small></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
