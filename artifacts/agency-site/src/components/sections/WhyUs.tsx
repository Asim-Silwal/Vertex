import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { BarChart3, Layers3, Sparkles, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <Section id="why-us" className="py-24 bg-[#0A0A0A]" data-testid="section-why-us">
      <div className="page-gutter">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium text-[#765EFF]">
              Why Vertex Digital
            </span>
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            WE BRIDGE DESIGN AND TECHNOLOGY.
          </h2>
          <p className="max-w-2xl text-lg text-[#9CA7B7]">
            Vertex Digital combines creative design, thoughtful UX, and modern development to turn ideas into digital experiences that are built to perform.
          </p>
        </div>

        <FadeInStagger className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="group h-full rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-8 transition-all duration-300 hover:border-[#765EFF]/25">
              <div className="mb-12 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#765EFF]/20 bg-[#765EFF]/10 transition-transform duration-500 group-hover:scale-110">
                  <Layers3 className="size-6 text-[#765EFF]" />
                </div>
                <span className="rounded border border-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#555]">
                  Design Thinking
                </span>
              </div>
              <div className="font-serif text-3xl font-bold text-white">Thoughtful design from the start.</div>
              <p className="mt-4 text-sm leading-relaxed text-[#6E7786]">
                We shape the product around how people think, navigate, and decide so digital experiences feel clear and premium.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group h-full rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-8 transition-all duration-300 hover:border-emerald-500/25">
              <div className="mb-12 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 transition-transform duration-500 group-hover:scale-110">
                  <Wrench className="size-6 text-emerald-400" />
                </div>
                <span className="rounded border border-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#555]">
                  Development
                </span>
              </div>
              <div className="font-serif text-3xl font-bold text-white">Built to perform in the real world.</div>
              <p className="mt-4 text-sm leading-relaxed text-[#6E7786]">
                We design with technical constraints in mind so the final product is fast, responsive, accessible, and maintainable.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group h-full rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-8 transition-all duration-300 hover:border-yellow-500/25">
              <div className="mb-12 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 transition-transform duration-500 group-hover:scale-110">
                  <Sparkles className="size-6 text-yellow-400" />
                </div>
                <span className="rounded border border-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#555]">
                  Business Understanding
                </span>
              </div>
              <div className="font-serif text-3xl font-bold text-white">Strategy shaped around business goals.</div>
              <p className="mt-4 text-sm leading-relaxed text-[#6E7786]">
                Every decision is guided by what the business needs to achieve, not just what looks impressive in a portfolio.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group h-full rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-8 transition-all duration-300 hover:border-blue-400/25">
              <div className="mb-12 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 transition-transform duration-500 group-hover:scale-110">
                  <BarChart3 className="size-6 text-blue-400" />
                </div>
                <span className="rounded border border-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#555]">
                  Long-Term Collaboration
                </span>
              </div>
              <div className="font-serif text-3xl font-bold text-white">Support that lasts beyond launch.</div>
              <p className="mt-4 text-sm leading-relaxed text-[#6E7786]">
                We help teams iterate, refine, and maintain digital experiences as their business grows and evolves.
              </p>
            </div>
          </FadeIn>
        </FadeInStagger>
      </div>
    </Section>
  );
}
