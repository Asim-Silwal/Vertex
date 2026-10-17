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
      'Connect every decision to a practical business goal such as clearer positioning, stronger trust, or more qualified inquiries.',
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
        title="About Vertex Digital | Website Design Studio"
        description="Meet Vertex Digital through our focus, capabilities, process, and selected website work for service businesses."
        canonicalPath="/about"
      />
      <Nav />

      <main className="flex-1 pt-28">
        <Section className="relative overflow-hidden py-24 md:py-36">
          <div className="page-gutter relative z-10 mx-auto max-w-4xl text-center">
            <FadeIn className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">About Vertex Digital</p>
              <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#f5f5f7] md:text-7xl">
                Premium websites.
                <br />
                Clear business thinking.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-[#a1a1a6]">
                Vertex Digital is a web design and development studio for service businesses that want to look established, communicate clearly, and make it easier for customers to take the next step.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]">
                  Let&apos;s Talk
                  <ArrowRight size={16} />
                </a>
                <a href="/work" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30">
                  View Our Work
                </a>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-8 md:py-12">
          <div className="page-gutter grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#1d1d1f] p-7">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a99aff]">Focus</p>
              <h2 className="mt-5 text-xl font-semibold text-white">Websites for service businesses</h2>
              <p className="mt-3 text-sm leading-7 text-[#aab3c4]">Clear offers, credible presentation, and simple ways for customers to get in touch.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1d1d1f] p-7">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a99aff]">Capabilities</p>
              <h2 className="mt-5 text-xl font-semibold text-white">Strategy to launch</h2>
              <p className="mt-3 text-sm leading-7 text-[#aab3c4]">Messaging, interface design, responsive development, and ongoing improvements.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1d1d1f] p-7">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a99aff]">Portfolio</p>
              <h2 className="mt-5 text-xl font-semibold text-white">See the work itself</h2>
              <p className="mt-3 text-sm leading-7 text-[#aab3c4]">Project screenshots and case studies show the decisions behind the design.</p>
              <a href="/work" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c2b9ff] hover:text-white">View selected work <ArrowRight size={15} /></a>
            </div>
          </div>
        </Section>

        <Section className="py-16 md:py-20">
          <div className="page-gutter">
            <FadeIn className="rounded-xl border border-white/10 bg-[#1d1d1f] p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                We build more than pages.
                <br />
                We build confidence in the business.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#C7CEDA] md:text-lg">
                <p>
                  Your website is often the first interaction a customer has with your business. It should do more than look professional. It should communicate your value, build trust, and move the right people toward action.
                </p>
                <p>
                  At Vertex Digital, we bring positioning, content, design, and development together so every part of the website supports the same clear story.
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
                  <article className="h-full rounded-xl border border-white/10 bg-[#1d1d1f] p-6 transition-colors duration-200 hover:bg-[#242426]">
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
                  <div className="rounded-[1.5rem] bg-[#1d1d1f] p-6 text-lg font-medium text-[#f5f5f7] md:text-xl">
                    {belief}
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-16 md:py-24">
          <div className="page-gutter">
            <FadeIn className="rounded-xl border border-white/10 bg-[#1d1d1f] p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">Ready for a website that reflects the quality of your work?</h2>
              <p className="mt-4 text-base leading-8 text-[#E2DCFF] md:text-lg">Let&apos;s plan a clearer, more credible digital presence.</p>
              <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#F1F0FF]">
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
