import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/section';

export default function VisualCTA() {
  return (
    <section id="visual-cta" className="scroll-mt-16 bg-black py-20 md:py-28" aria-labelledby="visual-cta-title">
      <div className="page-gutter">
        <FadeIn>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111113] p-2 sm:p-3">
            <div className="flex min-h-10 items-center justify-between px-2 text-[11px] text-[#86868b] sm:px-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-white/25" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <span>Project invitation</span>
            </div>

            <div className="relative min-h-[470px] overflow-hidden rounded-lg bg-[#f5f5f7] sm:min-h-[520px]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1200 520"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path fill="#2c2c2e" d="M0 72C150 28 266 31 348 110c86 83 177 145 313 126 139-20 170-112 287-75 111 35 142 50 252 4v355H0Z" />
                <path fill="#1d1d1f" d="M0 108c153-52 278-41 352 42 77 86 190 142 319 123 116-18 178-105 273-63 105 46 151 51 256 15v295H0Z" />
                <path fill="#09090b" d="M0 145c134-45 263-38 340 38 96 96 207 142 339 112 101-23 158-92 253-41 97 52 175 48 268 13v253H0Z" />
              </svg>

              <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-12 md:p-16">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f7cff]">A better first impression</p>
                <h2 id="visual-cta-title" className="mt-4 max-w-2xl text-4xl font-normal leading-[0.98] text-[#f5f5f7] sm:text-5xl md:text-6xl">
                  Ready to make your website easier to trust?
                </h2>
                <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <a href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#765EFF] px-6 text-sm font-semibold text-white hover:bg-[#8F7CFF]">
                    Plan your website
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href="#process" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/15 bg-black/30 px-6 text-sm font-semibold text-white hover:border-white/30 hover:bg-black/50">
                    View our process
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
