import { ArrowRight } from 'lucide-react';
import ProjectGrid from './ProjectGrid';
export default function CaseStudies() {
  return <section id="portfolio" className="border-y border-white/10 bg-[#0a0b10] py-20 md:py-28" data-testid="section-case-studies"><div className="page-gutter">
    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-2xl"><p className="text-xs font-medium uppercase tracking-[.24em] text-[#a99bff]">Selected work / 01-04</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">Different businesses.<br />Thoughtfully built websites.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-[#aab3c4]">Explore four website projects, the decisions behind them, and the live experiences we built.</p></div><a href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#b8adff]">Explore our work <ArrowRight size={17} /></a></div>
    <ProjectGrid />
    <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-6 text-[#939dad]">Selected independent redesigns and portfolio builds. Each case study documents our design and development work; it does not imply a client engagement or measured business results.</p>
  </div></section>;
}
