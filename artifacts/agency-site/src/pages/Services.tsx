import { ArrowRight, Check } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';
import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const services = [
  {
    id: '01',
    label: 'Web Design & Development',
    title: 'Websites built to convert.',
    description:
      'We design and develop fast, modern websites that communicate value clearly, build trust, and guide visitors toward action.',
    items: [
      'UX/UI Design',
      'Responsive Development',
      'Conversion-focused Structure',
      'Performance Optimization',
      'CMS Integration',
      'Website Maintenance',
    ],
    cta: 'Build My Website',
  },
  {
    id: '02',
    label: 'Branding',
    title: 'Brands people remember.',
    description:
      'We create clear, distinctive identities that help businesses look credible, communicate consistently, and stand apart from the competition.',
    items: [
      'Brand Strategy',
      'Visual Identity',
      'Logo Systems',
      'Brand Guidelines',
      'Marketing Assets',
    ],
    cta: 'Build My Brand',
  },
  {
    id: '03',
    label: 'SEO',
    title: 'Get found by the right people.',
    description:
      'We build search strategies designed to improve visibility, attract qualified traffic, and create sustainable organic growth.',
    items: [
      'Technical SEO',
      'On-page SEO',
      'Local SEO',
      'Content Strategy',
      'Search Performance Tracking',
    ],
    cta: 'Grow My Visibility',
  },
  {
    id: '04',
    label: 'Growth Strategy',
    title: 'Turn digital activity into growth.',
    description:
      'We connect strategy, digital experiences, and measurable goals to create a clearer path from attention to opportunity.',
    items: [
      'Digital Strategy',
      'Conversion Optimization',
      'Growth Planning',
      'Analytics',
      'Performance Tracking',
    ],
    cta: 'Plan My Growth',
  },
];

export default function Services() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="Services | Web Design, Branding, SEO & Growth Strategy | Vertex Digital"
        description="Explore Vertex Digital's web design, branding, SEO, and growth strategy services built to help businesses stand out and grow."
        canonicalPath="/services"
      />
      <Nav />

      <main className="flex-1 pt-28">
        <Section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-10%] top-[4%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.26),_transparent_72%)] blur-[120px]" />
          </div>
          <div className="page-gutter relative z-10 max-w-5xl">
            <FadeIn className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">What We Do</p>
              <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
                Digital work with
                <br />
                a purpose.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#B7BFCC]">
                From strategy and branding to websites and growth, we build the digital foundations businesses need to stand out and move forward.
              </p>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-12 md:py-16">
          <div className="page-gutter">
            <FadeInStagger className="grid gap-4 xl:grid-cols-2">
              {services.map((service) => (
                <FadeIn key={service.id}>
                  <article className="h-full rounded-[2rem] border border-white/10 bg-[#0D0D0D] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
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

                    <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#765EFF]/35 hover:text-[#E8E4FF]">
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
            <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">Not sure what you need?</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#C6CDDA] md:text-lg">
                You don&apos;t need to figure it all out before talking to us. Tell us where your business is today and where you want to go. We&apos;ll help identify the opportunities.
              </p>
              <a href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8F7CFF]">
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
