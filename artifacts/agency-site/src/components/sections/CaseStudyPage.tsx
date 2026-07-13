import type { LucideIcon } from 'lucide-react';
import { ArrowLeft, ArrowRight, BadgeCheck, CheckCircle2, ExternalLink, Gauge, LayoutGrid, ShieldCheck, Smartphone, Workflow } from 'lucide-react';
import { Link } from 'wouter';
import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import PageMeta from '@/components/seo/page-meta';
import originalHeroImage from '@assets/usa-storm-original-hero.webp';
import redesignHeroImage from '@assets/usa-storm-redesign-hero.jpg';
import redesignHomeImage from '@assets/usa-storm-redesign-home.jpg';
import redesignStormImage from '@assets/usa-storm-redesign-storm.jpg';

const improvementIcons = [Gauge, Smartphone, LayoutGrid, ShieldCheck, Workflow, CheckCircle2, BadgeCheck, Gauge] as const;

type CaseStudyPageData = {
  title: string;
  subtitle: string;
  description: string;
  projectType: string;
  industry: string;
  overview: string;
  liveRedesignHref: string;
  liveRedesignLabel: string;
  originalWebsiteHref: string;
  originalWebsiteLabel: string;
  summary: { label: string; value: string }[];
  challengeCards: { title: string; description: string }[];
  beforeAfterComparison: {
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
  finalOutcome: string[];
  canonicalPath: string;
};

const caseStudy: CaseStudyPageData = {
  title: 'USA Storm Roofing',
  subtitle: 'Independent redesign for a roofing and storm restoration brand.',
  description:
    'A compact case study for an independent USA Storm Roofing redesign, focused on clear visual hierarchy, stronger trust signals, and a cleaner mobile-first path to action.',
  projectType: 'Independent Website Redesign',
  industry: 'Roofing / Storm Restoration',
  overview:
    'A premium, trust-first concept that makes the offer easier to understand at a glance.',
  liveRedesignHref: 'https://usa-storm-roofin.vercel.app/',
  liveRedesignLabel: 'View redesign',
  originalWebsiteHref: 'https://usastormroofing.com/',
  originalWebsiteLabel: 'View original',
  summary: [
    { label: 'Industry', value: 'Roofing and storm restoration' },
    { label: 'Project Type', value: 'Independent redesign' },
    { label: 'Device Focus', value: 'Desktop + mobile' },
    { label: 'Technologies', value: 'React, Vite, Tailwind CSS, Framer Motion' },
    { label: 'Timeline', value: 'Concept redesign' },
    { label: 'Project Status', value: 'Portfolio concept' },
  ],
  challengeCards: [
    { title: 'Too much text', description: 'The original story needed a faster scan path.' },
    { title: 'Trust came late', description: 'Credibility cues needed to appear earlier.' },
    { title: 'CTA needed focus', description: 'The action path had to stand out more clearly.' },
  ],
  beforeAfterComparison: {
    beforeDescription: 'Original website: https://usastormroofing.com/',
    afterDescription: 'Redesign: https://usa-storm-roofin.vercel.app/',
    beforeImage: originalHeroImage,
    beforeImageAlt: 'Original USA Storm Roofing website hero image',
    afterImage: redesignHeroImage,
    afterImageAlt: 'USA Storm Roofing redesigned website hero image',
    rows: [
      { label: 'Navigation', original: 'The original structure is broader and less guided.', redesign: 'The redesign keeps the path simpler to scan.' },
      { label: 'Visual hierarchy', original: 'Important content competes for attention.', redesign: 'The key message is visually prioritized.' },
      { label: 'Typography', original: 'The reading flow feels more even.', redesign: 'The type scale creates a clearer hierarchy.' },
      { label: 'CTA placement', original: 'The action is less anchored at first glance.', redesign: 'The primary action is more visible.' },
      { label: 'Trust', original: 'Trust cues appear later in the page.', redesign: 'Trust signals arrive earlier and more clearly.' },
      { label: 'Mobile experience', original: 'The page feels more desktop-first.', redesign: 'The layout stacks more cleanly on mobile.' },
      { label: 'Readability', original: 'There is more to read before the point lands.', redesign: 'The page is easier to skim quickly.' },
    ],
  },
  keyFeatures: [
    { title: 'Better CTA Visibility', description: 'The primary action is easier to notice.' },
    { title: 'Improved Mobile UX', description: 'The experience stacks cleanly on smaller screens.' },
    { title: 'Cleaner Layout', description: 'Spacing and grouping make the page easier to scan.' },
    { title: 'Higher Visual Trust', description: 'Trust cues are surfaced with more confidence.' },
    { title: 'Stronger Typography', description: 'The hierarchy is sharper and more readable.' },
    { title: 'Clearer Service Structure', description: 'Services are organized into simpler sections.' },
    { title: 'Modern UI', description: 'The interface feels more premium and current.' },
    { title: 'Better Information Hierarchy', description: 'The page communicates in a more deliberate order.' },
  ],
  designDecisions: [
    { title: 'Headline', description: 'We made the headline shorter to communicate the value faster.' },
    { title: 'CTA', description: 'The main button was moved higher for visibility.' },
    { title: 'Navigation', description: 'Navigation was simplified for faster decisions.' },
    { title: 'Typography', description: 'Readability improved through clearer hierarchy.' },
  ],
  gallery: [
    { title: 'Homepage hero', description: 'Primary visual focus.', image: redesignHeroImage, imageAlt: 'USA Storm Roofing redesign homepage hero' },
    { title: 'Residential framing', description: 'Warm, trust-led composition.', image: redesignHomeImage, imageAlt: 'USA Storm Roofing redesign residential image' },
    { title: 'Storm response', description: 'Urgency with clearer contrast.', image: redesignStormImage, imageAlt: 'USA Storm Roofing redesign storm response image' },
  ],
  technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'wouter', 'TypeScript', 'Lucide React'],
  finalOutcome: [
    'The redesign reads faster because the story is built with visuals and cards instead of long paragraphs.',
    'The structure makes the project easier to understand in a few seconds.',
    'The result feels more premium, more focused, and more aligned with the Vertex Digital system.',
  ],
  canonicalPath: '/case-studies/usa-storm-roofing',
};

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
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
  return <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[#D8DDEA]">{children}</span>;
}

export default function USAStormRoofingCaseStudy() {
  const { title, subtitle, description, projectType, industry, overview, liveRedesignHref, liveRedesignLabel, originalWebsiteHref, originalWebsiteLabel, summary, challengeCards, beforeAfterComparison, keyFeatures, designDecisions, gallery, technologies, finalOutcome } = caseStudy;

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <PageMeta title={`${title} Case Study | Vertex Digital`} description={description} canonicalPath={caseStudy.canonicalPath} />

      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="page-gutter flex items-center justify-between py-4">
          <Link to="/" className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white">
            <span className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.04]" />
            <span>Vertex Digital</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </header>

      <main className="pb-20">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-8%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(118,94,255,0.18),_transparent_68%)] blur-[120px]" />
          </div>

          <div className="page-gutter relative grid gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:py-20">
            <FadeIn className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium tracking-[0.28em] text-[#8F7CFF] uppercase">Independent Redesign</span>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#8F7CFF]">{industry}</p>
                <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
                <p className="max-w-2xl text-lg leading-8 text-[#B7BFCC]">{subtitle}</p>
              </div>

              <div className="max-w-2xl rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5 md:p-6">
                <p className="text-base leading-7 text-white md:text-lg">{overview}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={liveRedesignHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]">
                  {liveRedesignLabel}
                  <ArrowRight size={16} />
                </a>
                <a href={originalWebsiteHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30">
                  {originalWebsiteLabel}
                  <ExternalLink size={16} />
                </a>
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
                <img src={beforeAfterComparison.afterImage} alt={beforeAfterComparison.afterImageAlt} className="h-[440px] w-full object-cover object-top md:h-[520px]" loading="eager" decoding="async" />
              </div>
            </FadeIn>
          </div>
        </section>

        <Section className="py-10">
          <div className="page-gutter">
            <div className="rounded-[2.25rem] border border-[#765EFF]/20 bg-[linear-gradient(135deg,rgba(118,94,255,0.16),rgba(255,255,255,0.04))] p-7 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-3">
                  <div className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#C9BFFF]">Call to action</div>
                  <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-white md:text-4xl">Imagine what your business could look like with a website designed to generate more trust and more leads.</h2>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a href={liveRedesignHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#F1F0FF]">
                    View redesign
                    <ArrowRight size={16} />
                  </a>
                  <a href={originalWebsiteHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-black/30">
                    Compare original
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

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
              {challengeCards.map((item) => (
                <FadeIn key={item.title}>
                  <CompactCard title={item.title} description={item.description} />
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <SectionHeading eyebrow="Before vs After" title="The centerpiece of the case study" description="Large screenshots show the change first; the comparisons stay concise." />
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D]">
                <div className="border-b border-white/8 px-5 py-4">
                  <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#8F7CFF]">Original website</div>
                  <p className="mt-2 text-sm leading-7 text-[#A3ACB9]">{beforeAfterComparison.beforeDescription}</p>
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-black/20">
                  <img src={beforeAfterComparison.beforeImage} alt={beforeAfterComparison.beforeImageAlt} className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
                </div>
                <div className="border-t border-white/8 px-5 py-4">
                  <a href={originalWebsiteHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#CBBFFF] transition hover:text-white">
                    Open original website
                    <ExternalLink size={14} />
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-[#765EFF]/20 bg-[#765EFF]/10">
                <div className="border-b border-white/10 px-5 py-4">
                  <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#D8D0FF]">Redesigned version</div>
                  <p className="mt-2 text-sm leading-7 text-[#ECE8FF]">{beforeAfterComparison.afterDescription}</p>
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-black/20">
                  <img src={beforeAfterComparison.afterImage} alt={beforeAfterComparison.afterImageAlt} className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
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
                      <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" loading="lazy" decoding="async" />
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
                  {finalOutcome.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(118,94,255,0.22),rgba(13,13,13,0.95))] p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <div className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#D8D0FF]">Final CTA</div>
                  <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">Imagine what your business could look like with a website designed to generate more trust and more leads.</h2>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a href={liveRedesignHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#F1F0FF]">
                    View redesign
                    <ArrowRight size={16} />
                  </a>
                  <a href={originalWebsiteHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-black/30">
                    Compare original
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
