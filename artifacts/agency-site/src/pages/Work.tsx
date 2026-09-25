import { ArrowUpRight } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import ProjectGrid from '@/components/sections/ProjectGrid';
import PageMeta from '@/components/seo/page-meta';
export default function Work() {
  return <div className="min-h-screen bg-[#0a0b10] text-white">
    <PageMeta title="Selected Work & Website Case Studies | Vertex Digital" description="Explore four Vertex Digital website projects: USA Storm Roofing, Painting Service Nepal, Jireh Roofing, and Pacific Northwest X-Ray. See real screens, design decisions, and live websites." canonicalPath="/work" />
    <Nav /><main className="pt-32 md:pt-44">
      <header className="page-gutter pb-16 md:pb-24"><div className="flex items-center gap-3 text-xs uppercase tracking-[.24em] text-[#a99bff]"><span className="h-px w-9 bg-[#a99bff]" />Our work</div><h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.06] tracking-[-.045em] md:text-7xl">Good businesses deserve<br /><span className="text-[#a99bff]">a better first impression.</span></h1><div className="mt-9 flex flex-col justify-between gap-7 border-t border-white/10 pt-7 md:flex-row md:items-end"><p className="max-w-xl text-lg leading-8 text-[#aab3c4]">A closer look at how we bring strategy, design, and development together. Four distinct businesses. Four experiences built around the people who use them.</p><p className="text-sm text-[#aab3c4]">04 projects <span className="mx-3 text-white/20">/</span> Design & development</p></div></header>
      <section className="page-gutter pb-20 md:pb-28" aria-label="Website portfolio"><ProjectGrid /><p className="mt-12 max-w-3xl text-sm leading-7 text-[#939dad]">These are independent redesigns and portfolio builds, presented to show our capabilities. Screenshots are captured from the linked live websites. Business names and source imagery remain the property of their respective owners.</p></section>
      <section className="border-t border-white/10 bg-[#11121a] py-16 md:py-24"><div className="page-gutter flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[.2em] text-[#a99bff]">Your project could be next</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Let’s build your next chapter.</h2></div><a href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#765EFF] px-7 py-4 text-sm font-semibold text-white hover:bg-[#8b77ff]">Start a project <ArrowUpRight size={18} /></a></div></section>
    </main><Footer />
  </div>;
}
