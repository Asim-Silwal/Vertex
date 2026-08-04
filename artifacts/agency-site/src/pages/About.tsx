import { ArrowRight } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';
import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const approachCards = [
  {
    id: '01',
    title: 'Strategy',
    description:
      'Understand the business, audience, positioning, and opportunity before designing.',
  },
  {
    id: '02',
    title: 'Design',
    description:
      'Create clear, distinctive experiences that make the brand easier to understand and remember.',
  },
  {
    id: '03',
    title: 'Technology',
    description:
      'Build fast, responsive, scalable digital experiences that work across devices.',
  },
  {
    id: '04',
    title: 'Growth',
    description:
      'Connect the experience to measurable business goals - visibility, leads, conversions, and growth.',
  },
];

const beliefCards = [
  'Good design should communicate.',
  'Good websites should convert.',
  'Good brands should be remembered.',
  'Good digital experiences should create business value.',
];

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="About Vertex Digital | Digital Experiences Built for Growth"
        description="Learn how Vertex Digital combines strategy, design, technology, and growth to build digital experiences that help businesses move forward."
        canonicalPath="/about"
      />
      <Nav />

      <main className="flex-1 pt-28">
        <Section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-12%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.28),_transparent_68%)] blur-[130px]" />
          </div>
          <div className="page-gutter relative z-10 max-w-5xl">
            <FadeIn className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">About Vertex Digital</p>
              <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
                Digital Experiences
                <br />
                Built for Growth.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#B7BFCC]">
                We combine strategy, design, technology, and growth thinking to build digital experiences that help businesses earn attention, build trust, and generate more opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]">
                  Let&apos;s Talk
                  <ArrowRight size={16} />
                </a>
                <a href="/work" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30">
                  View Our Work
                </a>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-16 md:py-20">
          <div className="page-gutter">
            <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                We don&apos;t just build websites.
                <br />
                We build growth systems.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#C7CEDA] md:text-lg">
                <p>
                  Your website is often the first interaction a customer has with your business. It should do more than look professional. It should communicate your value, build trust, and move the right people toward action.
                </p>
                <p>
                  At Vertex Digital, we bring strategy, design, technology, and growth together to create digital experiences built around business outcomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-16 md:py-20">
          <div className="page-gutter">
            <div className="mb-10 max-w-3xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">Our Approach</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">Strategy before screens.</h2>
              <p className="text-base leading-7 text-[#A8B0BE] md:text-lg">Great digital work starts with understanding the business.</p>
            </div>
            <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {approachCards.map((card) => (
                <FadeIn key={card.id}>
                  <article className="h-full rounded-[1.75rem] border border-white/10 bg-[#0D0D0D] p-6 transition-colors duration-300 hover:border-[#765EFF]/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8F7CFF]">{card.id}</p>
                    <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#A3ACB9]">{card.description}</p>
                  </article>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-16 md:py-20">
          <div className="page-gutter">
            <div className="mb-8 max-w-3xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">What We Believe</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                Built for results.
                <br />
                Not just applause.
              </h2>
            </div>
            <FadeInStagger className="grid gap-4 md:grid-cols-2">
              {beliefCards.map((belief) => (
                <FadeIn key={belief}>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-lg font-medium text-white md:text-xl">
                    {belief}
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-16 md:py-24">
          <div className="page-gutter">
            <FadeIn className="rounded-[2.25rem] border border-[#765EFF]/20 bg-[linear-gradient(135deg,rgba(118,94,255,0.2),rgba(13,13,13,0.96))] p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">Ready to build something that works?</h2>
              <p className="mt-4 text-base leading-8 text-[#E2DCFF] md:text-lg">Let&apos;s turn your digital presence into an advantage.</p>
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
