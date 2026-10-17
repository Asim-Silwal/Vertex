import { ArrowRight, Check } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';
import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const services = [
  {
    id: '01',
    label: 'Website Strategy',
    title: 'A clear plan before design begins.',
    description:
      'We clarify the audience, offer, page structure, and customer journey so every design decision has a reason.',
    items: [
      'Audience & Offer Review',
      'Page Architecture',
      'Customer Journey',
      'Content Priorities',
      'Conversion Paths',
      'Project Roadmap',
    ],
    cta: 'Plan My Website',
  },
  {
    id: '02',
    label: 'Web Design',
    title: 'A premium experience built around your business.',
    description:
      'We create a distinct visual system and responsive page designs that make your business feel credible, current, and easy to understand.',
    items: [
      'Visual Direction',
      'Responsive Layouts',
      'Service Page Design',
      'Design System',
      'Prototype Review',
    ],
    cta: 'Design My Website',
  },
  {
    id: '03',
    label: 'Web Development',
    title: 'Fast, responsive, and ready for real use.',
    description:
      'We build the approved design carefully, with clean responsive behavior, strong performance, and straightforward content updates.',
    items: [
      'Responsive Development',
      'Performance Optimization',
      'Technical SEO Setup',
      'CMS Integration',
      'Accessibility Review',
    ],
    cta: 'Build My Website',
  },
  {
    id: '04',
    label: 'Launch & Support',
    title: 'A smooth launch and practical support afterward.',
    description:
      'We handle the final checks, deployment, analytics setup, and ongoing improvements needed to keep the website useful.',
    items: [
      'Launch Checklist',
      'Domain & Deployment',
      'Analytics Setup',
      'Content Updates',
      'Ongoing Improvements',
    ],
    cta: 'Plan My Launch',
  },
];

export default function Services() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="Website Strategy, Design & Development Services | Vertex Digital"
        description="Explore Vertex Digital's website strategy, premium web design, responsive development, launch, and ongoing support services."
        canonicalPath="/services"
      />
      <Nav />

      <main className="flex-1 pt-28">
        <Section className="relative overflow-hidden py-24 md:py-36">
          <div className="page-gutter relative z-10 mx-auto max-w-4xl text-center">
            <FadeIn className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">What We Do</p>
              <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#f5f5f7] md:text-7xl">
                Websites planned,
                <br />
                designed, and built.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-[#a1a1a6]">
                From positioning and page structure to responsive design, development, and launch, every step supports one clear business story.
              </p>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-12 md:py-16">
          <div className="page-gutter">
            <FadeInStagger className="grid gap-4 xl:grid-cols-2">
              {services.map((service) => (
                <FadeIn key={service.id}>
                  <article className="h-full rounded-xl border border-white/10 bg-[#1d1d1f] p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8F7CFF]">{service.id}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-[#9AA3B2]">{service.label}</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">{service.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-[#A3ACB9] md:text-base">{service.description}</p>

                    <ul className="mt-6 grid gap-3 text-sm text-[#D3DAE6] md:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-[#765EFF]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#765EFF]/35 hover:text-[#E8E4FF]">
                      {service.cta}
                      <ArrowRight size={16} />
                    </a>
                  </article>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="page-gutter">
            <FadeIn className="rounded-xl border border-white/10 bg-[#1d1d1f] p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">Not sure what you need?</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#C6CDDA] md:text-lg">
                You don&apos;t need a finished brief. Tell us about your business, your current website, and what needs to improve. We&apos;ll help define the right scope.
              </p>
              <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8F7CFF]">
                Let&apos;s Talk
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
