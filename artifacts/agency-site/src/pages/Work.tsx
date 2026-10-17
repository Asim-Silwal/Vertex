import { ArrowUpRight } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import ProjectGrid from '@/components/sections/ProjectGrid';
import PageMeta from '@/components/seo/page-meta';
export default function Work() {
  return <div className="min-h-screen bg-[#0a0b10] text-white">
    <PageMeta title="Premium Website Work & Case Studies | Vertex Digital" description="Explore four Vertex Digital website projects and see the positioning, design decisions, responsive screens, and live builds behind each one." canonicalPath="/work" />
    <Nav /><main className="pt-32 md:pt-44">
      <header className="page-gutter pb-20 text-center md:pb-28"><p className="text-sm font-semibold text-[#8f7cff]">Our work</p><h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-[-.045em] text-[#f5f5f7] md:text-7xl">Premium websites built<br /><span className="text-[#b8adff]">with a clear point of view.</span></h1><div className="mx-auto mt-8 max-w-2xl"><p className="text-lg leading-8 text-[#a1a1a6]">A closer look at how positioning, design, and development come together across four distinct website projects.</p><p className="mt-5 text-sm text-[#86868b]">04 projects <span className="mx-3 text-white/20">/</span> Design & development</p></div></header>
      <section className="page-gutter pb-20 md:pb-28" aria-label="Website portfolio"><ProjectGrid /><p className="mt-12 max-w-3xl text-sm leading-7 text-[#939dad]">These are independent redesigns and portfolio builds, presented to show our capabilities. Screenshots are captured from the linked live websites. Business names and source imagery remain the property of their respective owners.</p></section>
      <section className="border-t border-white/8 bg-[#111113] py-20 md:py-28"><div className="page-gutter flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-semibold text-[#8f7cff]">Planning a website?</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-[#f5f5f7] md:text-5xl">Tell us what your business needs.</h2></div><a href="/contact" className="inline-flex min-h-12 w-fit items-center gap-3 rounded-xl bg-[#765EFF] px-7 py-3 text-sm font-semibold text-white hover:bg-[#8b77ff]">Start a project <ArrowUpRight size={18} /></a></div></section>
    </main><Footer />
  </div>;
}
