import { ArrowRight } from 'lucide-react';
import ProjectGrid from './ProjectGrid';
export default function CaseStudies() {
  return <section id="portfolio" className="border-y border-white/8 bg-black py-20 md:py-32" data-testid="section-case-studies"><div className="page-gutter">
    <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20"><p className="text-sm font-semibold text-[#8f7cff]">Selected website work / 01-04</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#f5f5f7] md:text-6xl">The quality of the work<br />is the pitch.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#a1a1a6]">Explore four website projects, the thinking behind them, and the live experiences we built.</p><a href="/work" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#b8adff] hover:text-white">Explore our work <ArrowRight size={17} /></a></div>
    <ProjectGrid />
    <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-6 text-[#939dad]">Selected independent redesigns and portfolio builds. Each case study documents our design and development work; it does not imply a client engagement or measured business results.</p>
  </div></section>;
}
