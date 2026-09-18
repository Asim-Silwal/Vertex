import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Gauge,
  LayoutGrid,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import PageMeta from '@/components/seo/page-meta';
import Nav from '@/components/sections/Nav';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

const improvementIcons = [
  Gauge,
  Smartphone,
  LayoutGrid,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  BadgeCheck,
  Gauge,
] as const;

export type CaseStudyPageData = {
  title: string;
  subtitle: string;
  description: string;
  projectType: string;
  industry: string;
  overview: string;
  liveRedesignHref: string;
  liveRedesignLabel: string;
  originalWebsiteHref?: string;
  originalWebsiteLabel?: string;
  summary: { label: string; value: string }[];
  challengeCards?: { title: string; description: string }[];
  beforeAfterComparison?: {
    beforeLabel?: string;
    afterLabel?: string;
    beforeDescription: string;
    afterDescription: string;
    beforeImage: string;
    beforeImageAlt: string;
    afterImage: string;
    afterImageAlt: string;
    rows: { label: string; original: string; redesign: string }[];
  };
  keyFeatures: { title: string; description: string }[];
  designDecisions: { title: string; description: string }[];
  gallery: { title: string; description: string; image: string; imageAlt: string }[];
  technologies: string[];
  finalOutcome?: string[];
  canonicalPath: string;
  challenge?: string;
  designGoals?: string[];
  researchProcess?: string[];
  uxImprovements?: string[];
  uiImprovements?: string[];
  mobileFirstApproach?: string[];
  disclaimer?: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl space-y-3">
      <div className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#8F7CFF]">{eyebrow}</div>
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-[#A3ACB9] md:text-base">{description}</p> : null}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 md:p-5">
      <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#8E97A8]">{label}</div>
      <div className="mt-2 text-sm font-medium leading-6 text-white md:text-base">{value}</div>
    </div>
  );
}

function CompactCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-[#0D0D0D] p-4 md:p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-6 text-[#A3ACB9]">{description}</p>
    </div>
  );
}

function IconCard({ Icon, title, description }: { Icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-[#0D0D0D] p-5">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#8F7CFF]">
        <Icon size={18} />
      </div>
      <div className="mt-4 text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-6 text-[#A3ACB9]">{description}</p>
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[#D8DDEA]">
      {children}
    </span>
  );
}

type CaseStudyPageProps = {
  caseStudy: CaseStudyPageData;
};

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const {
    title,
    subtitle,
    description,
    industry,
    overview,
    liveRedesignHref,
    liveRedesignLabel,
    originalWebsiteHref,
    originalWebsiteLabel,
    summary,
    challengeCards,
    beforeAfterComparison,
    keyFeatures,
    designDecisions,
    gallery,
    technologies,
    finalOutcome,
    canonicalPath,
  } = caseStudy;

  const heroImage = beforeAfterComparison?.afterImage ?? gallery[0]?.image ?? '';
  const heroImageAlt = beforeAfterComparison?.afterImageAlt ?? gallery[0]?.imageAlt ?? title;

  const challengeCardsToRender =
    challengeCards && challengeCards.length
      ? challengeCards
      : [
          { title: 'Core challenge', description: caseStudy.challenge ?? 'Improve clarity and conversion focus.' },
          {
            title: 'Design goal',
            description: caseStudy.designGoals?.[0] ?? 'Create a clearer trust and message hierarchy.',
          },
          {
            title: 'User focus',
            description: caseStudy.uxImprovements?.[0] ?? 'Make the path to action easier to follow.',
          },
        ];

  const finalOutcomeToRender =
    finalOutcome && finalOutcome.length
      ? finalOutcome
      : [
          caseStudy.uiImprovements?.[0] ?? 'The redesign improves visual clarity and message confidence.',
          caseStudy.uxImprovements?.[0] ?? 'The user journey is easier to scan and act on.',
          caseStudy.mobileFirstApproach?.[0] ?? 'The experience remains clear and usable across devices.',
        ];

  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta title={`${title} Case Study | Vertex Digital`} description={description} canonicalPath={canonicalPath} />
      <Nav />

      <main className="flex-1 pb-20 pt-28">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-8%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.18),_transparent_68%)] blur-[120px]" />
          </div>

          <div className="page-gutter relative grid gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:py-20">
            <FadeIn className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium tracking-[0.28em] text-[#8F7CFF] uppercase">
                  {caseStudy.projectType}
                </span>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#8F7CFF]">{industry}</p>
                <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
                <p className="max-w-2xl text-lg leading-8 text-[#B7BFCC]">{subtitle}</p>
              </div>

              <div className="max-w-2xl rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5 md:p-6">
                <p className="text-base leading-7 text-white md:text-lg">{overview}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={liveRedesignHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]"
                >
                  {liveRedesignLabel}
                  <ArrowRight size={16} />
                </a>
                {originalWebsiteHref && originalWebsiteLabel ? (
                  <a
                    href={originalWebsiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30"
                  >
                    {originalWebsiteLabel}
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.32em] text-[#8E97A8]">
                    <span className="h-2 w-2 rounded-full bg-[#765EFF]" />
                    Hero visual
                  </div>
                </div>
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  className="max-h-[620px] w-full bg-[#171922] object-contain object-top"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <Section className="py-10">
          <div className="page-gutter">
            <SectionHeading eyebrow="Project Snapshot" title="Key details at a glance" description="Compact cards keep the page easy to scan." />
            <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {summary.map((item) => (
                <FadeIn key={item.label}>
                  <StatCard label={item.label} value={item.value} />
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <SectionHeading eyebrow="The Challenge" title="Three issues shaped the redesign" description="Each card stays short and direct." />
            <FadeInStagger className="grid gap-4 md:grid-cols-3">
              {challengeCardsToRender.map((item) => (
                <FadeIn key={item.title}>
                  <CompactCard title={item.title} description={item.description} />
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        {beforeAfterComparison ? (
          <Section className="py-10">
            <div className="page-gutter">
              <SectionHeading eyebrow="Before vs After" title="The centerpiece of the case study" description="Large screenshots show the change first; the comparisons stay concise." />
              <div className="grid gap-4 lg:grid-cols-2">
                <article className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D]">
                  <div className="border-b border-white/8 px-5 py-4">
                    <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#8F7CFF]">
                      {beforeAfterComparison.beforeLabel ?? 'Original website'}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#A3ACB9]">{beforeAfterComparison.beforeDescription}</p>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-black/20">
                    <img
                      src={beforeAfterComparison.beforeImage}
                      alt={beforeAfterComparison.beforeImageAlt}
                      className="h-full w-full object-contain object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="border-t border-white/8 px-5 py-4">
                    {originalWebsiteHref ? (
                      <a href={originalWebsiteHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#CBBFFF] transition hover:text-white">
                        Open original website
                        <ExternalLink size={14} />
                      </a>
                    ) : null}
                  </div>
                </article>

                <article className="overflow-hidden rounded-[2rem] border border-[#765EFF]/20 bg-[#765EFF]/10">
                  <div className="border-b border-white/10 px-5 py-4">
                    <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#D8D0FF]">
                      {beforeAfterComparison.afterLabel ?? 'Redesigned version'}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#ECE8FF]">{beforeAfterComparison.afterDescription}</p>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-black/20">
                    <img
                      src={beforeAfterComparison.afterImage}
                      alt={beforeAfterComparison.afterImageAlt}
                      className="h-full w-full object-contain object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="border-t border-white/10 px-5 py-4">
                    <a href={liveRedesignHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#ECE8FF]">
                      Open redesigned website
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </div>

              <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D]">
                <div className="grid divide-y divide-white/8 md:grid-cols-2 xl:grid-cols-3 md:divide-y-0 md:divide-x">
                  {beforeAfterComparison.rows.map((item) => (
                    <div key={item.label} className="grid gap-px border-b border-white/8 last:border-b-0 md:border-b-0 md:p-5">
                      <div className="text-sm font-semibold text-white">{item.label}</div>
                      <div className="mt-2 text-sm leading-7 text-[#A3ACB9]">{item.original}</div>
                      <div className="mt-3 text-sm leading-7 text-[#E8E4FF]">{item.redesign}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        ) : null}

        <Section className="py-10">
          <div className="page-gutter">
            <SectionHeading eyebrow="Key Improvements" title="What changed in the redesign" description="Every card is a single sentence to keep the page highly visual." />
            <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {keyFeatures.map((feature, index) => (
                <FadeIn key={feature.title}>
                  <IconCard Icon={improvementIcons[index % improvementIcons.length]} title={feature.title} description={feature.description} />
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <SectionHeading eyebrow="Design Decisions" title="The thinking behind the cleaner layout" description="Each card stays within two lines." />
            <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {designDecisions.map((item, index) => (
                <FadeIn key={item.title}>
                  <IconCard Icon={improvementIcons[index % improvementIcons.length]} title={item.title} description={item.description} />
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <SectionHeading eyebrow="Gallery" title="Visual details from the redesign" description="Captions stay short so the screenshots do the talking." />
            <FadeInStagger className="grid gap-4 lg:grid-cols-3">
              {gallery.map((item) => (
                <FadeIn key={item.title}>
                  <article className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0D0D0D]">
                    <div className="aspect-[4/3] overflow-hidden bg-black/20">
                      <img src={item.image} alt={item.imageAlt} className="h-full w-full object-contain object-top" loading="lazy" decoding="async" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#9AA3B2]">{item.description}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter grid gap-4 lg:grid-cols-[1fr_0.95fr]">
            <FadeIn>
              <div className="rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-6 md:p-8">
                <SectionHeading eyebrow="Technology" title="Built with the existing Vertex Digital stack" description="Badges only, no explanatory text." />
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-[2rem] border border-[#765EFF]/20 bg-[#765EFF]/10 p-6 md:p-8">
                <SectionHeading eyebrow="Outcome" title="A simpler story with stronger visual clarity" />
                <div className="space-y-4 text-sm leading-7 text-[#E8E4FF] md:text-base">
                  {finalOutcomeToRender.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {caseStudy.disclaimer ? (
          <Section className="py-4">
            <div className="page-gutter">
              <p className="text-xs leading-6 text-[#8E97A8]">{caseStudy.disclaimer}</p>
            </div>
          </Section>
        ) : null}

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
