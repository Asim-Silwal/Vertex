import { ArrowRight } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';
import { FadeIn, Section } from '@/components/ui/section';
import { usaStormRoofingCaseStudy } from '@/pages/case-studies/usa-storm-roofing';

export default function Work() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="Our Work | Vertex Digital"
        description="Explore selected digital experiences, websites, branding, and growth-focused work from Vertex Digital."
        canonicalPath="/work"
      />
      <Nav />

      <main className="flex-1 pt-28">
        <Section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[6%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.24),_transparent_72%)] blur-[120px]" />
          </div>
          <div className="page-gutter relative z-10 max-w-5xl">
            <FadeIn className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">Selected Work</p>
              <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
                Work that moves
                <br />
                businesses forward.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#B7BFCC]">
                A selection of digital experiences, brand systems, and growth-focused work created with purpose.
              </p>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-10 md:py-16">
          <div className="page-gutter">
            <FadeIn>
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D0D] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-8 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8F7CFF]">Featured Case Study</p>
                    <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white">USA Storm Roofing</h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#BBC4D2]">{usaStormRoofingCaseStudy.description}</p>
                    <a href="/case-studies/usa-storm-roofing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8F7CFF]">
                      View Case Study
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <div className="relative bg-black/20">
                    <img
                      src={usaStormRoofingCaseStudy.beforeAfterComparison.afterImage}
                      alt={usaStormRoofingCaseStudy.beforeAfterComparison.afterImageAlt}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="page-gutter">
            <FadeIn className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8 text-center md:p-12">
              <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">More work coming soon.</h3>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#AEB7C6] md:text-lg">
                We&apos;re building a portfolio of work focused on meaningful business outcomes, not just pretty screens.
              </p>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-14 md:py-24">
          <div className="page-gutter">
            <FadeIn className="rounded-[2.25rem] border border-[#765EFF]/20 bg-[linear-gradient(135deg,rgba(118,94,255,0.18),rgba(13,13,13,0.95))] p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">Have a project in mind?</h2>
              <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#F1F0FF]">
                Start a Conversation
                <ArrowRight size={16} />
              </a>
            </FadeIn>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
