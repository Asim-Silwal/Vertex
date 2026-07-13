import { ArrowLeft, ArrowRight, ExternalLink, Globe, Layers3, MonitorSmartphone, Search, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import PageMeta from '@/components/seo/page-meta';
import whiteLogo from '@assets/White Logo.png';

export type CaseStudySummary = {
  label: string;
  value: string;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyGalleryItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type CaseStudyPageData = {
  title: string;
  subtitle: string;
  description: string;
  projectType: string;
  industry: string;
  overview: string;
  challenge: string;
  designGoals: string[];
  researchProcess: string[];
  uxImprovements: string[];
  uiImprovements: string[];
  mobileFirstApproach: string[];
  keyFeatures: CaseStudyFeature[];
  gallery: CaseStudyGalleryItem[];
  technologies: string[];
  liveRedesignHref: string;
  liveRedesignLabel: string;
  originalWebsiteHref: string;
  originalWebsiteLabel: string;
  disclaimer: string;
  summary: CaseStudySummary[];
  canonicalPath: string;
  beforeAfterComparison?: {
    beforeLabel: string;
    beforeDescription: string;
    beforeImage: string;
    beforeImageAlt: string;
    afterLabel: string;
    afterDescription: string;
    afterImage: string;
    afterImageAlt: string;
    rows: {
      label: string;
      original: string;
      redesign: string;
    }[];
  };
};

type CaseStudyPageProps = {
  caseStudy: CaseStudyPageData;
};

const sectionIconMap = {
  overview: Sparkles,
  challenge: Search,
  goals: Layers3,
  research: Search,
  ux: MonitorSmartphone,
  ui: Sparkles,
  mobile: MonitorSmartphone,
  features: Globe,
  gallery: Sparkles,
  technologies: Layers3,
} as const;

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-[#C7CEDA] md:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#765EFF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailCard({
  title,
  body,
  items,
}: {
  title: string;
  body?: string;
  items?: string[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#8F7CFF]">{title}</div>
      {body ? <p className="mt-4 text-sm leading-7 text-[#A3ACB9] md:text-base">{body}</p> : null}
      {items?.length ? <div className="mt-4"><ContentList items={items} /></div> : null}
    </div>
  );
}

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const { title, subtitle, description, projectType, industry, overview, challenge, designGoals, researchProcess, uxImprovements, uiImprovements, mobileFirstApproach, keyFeatures, gallery, technologies, liveRedesignHref, liveRedesignLabel, originalWebsiteHref, originalWebsiteLabel, disclaimer, summary, canonicalPath, beforeAfterComparison } = caseStudy;

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <PageMeta
        title={`${title} Case Study | Vertex Digital`}
        description={description}
        canonicalPath={canonicalPath}
      />

      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="page-gutter flex items-center justify-between py-4">
          <Link to="/" className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white">
            <img src={whiteLogo} alt="Vertex Digital logo" className="h-8 w-auto" />
            <span>Vertex Digital</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
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

          <div className="page-gutter relative grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <FadeIn className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium tracking-[0.28em] text-[#8F7CFF] uppercase">
                  {projectType}
                </span>
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#8F7CFF]">{industry}</p>
                  <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                    {title}
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-[#B7BFCC]">
                    {subtitle}
                  </p>
                </div>
              </div>

              <p className="max-w-3xl text-base leading-8 text-[#98A0AE] md:text-lg">
                {overview}
              </p>

              <div className="flex flex-wrap gap-3">
                {summary.map((item) => (
                  <div key={item.label} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#D8DDEA]">
                    <span className="text-[#7D86A0]">{item.label}: </span>
                    <span className="font-medium text-white">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={liveRedesignHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]"
                >
                  {liveRedesignLabel}
                  <ArrowRight size={16} />
                </a>
                <a
                  href={originalWebsiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30"
                >
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
                    Live concept preview
                  </div>
                </div>
                <img
                  src={gallery[0].image}
                  alt={gallery[0].imageAlt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <Section className="py-10">
          <div className="page-gutter">
            <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DetailCard title="Project Type" body={projectType} />
              <DetailCard title="Industry" body={industry} />
              <DetailCard title="Live Link" body="Independent redesign published as a portfolio concept." />
              <DetailCard title="Original Site" body="Reference site reviewed during the redesign process." />
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#765EFF]" />
              <h2 className="text-2xl font-bold text-white md:text-3xl">Project breakdown</h2>
            </div>

            <FadeInStagger className="grid gap-4 lg:grid-cols-2">
              <FadeIn><DetailCard title="Challenge" body={challenge} /></FadeIn>
              <FadeIn><DetailCard title="Design Goals" items={designGoals} /></FadeIn>
              <FadeIn><DetailCard title="Research Process" items={researchProcess} /></FadeIn>
              <FadeIn><DetailCard title="UX Improvements" items={uxImprovements} /></FadeIn>
              <FadeIn><DetailCard title="UI Improvements" items={uiImprovements} /></FadeIn>
              <FadeIn><DetailCard title="Mobile-First Approach" items={mobileFirstApproach} /></FadeIn>
            </FadeInStagger>
          </div>
        </Section>

        {beforeAfterComparison ? (
          <Section className="py-10">
            <div className="page-gutter">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#765EFF]" />
                <h2 className="text-2xl font-bold text-white md:text-3xl">Before vs After</h2>
              </div>

              <FadeIn className="space-y-6">
                <div className="grid gap-4 lg:grid-cols-2">
                  <article className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D]">
                    <div className="border-b border-white/8 px-5 py-4">
                      <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#8F7CFF]">
                        Original website
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#A3ACB9]">
                        {beforeAfterComparison.beforeDescription}
                      </p>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden bg-black/20">
                      <img
                        src={beforeAfterComparison.beforeImage}
                        alt={beforeAfterComparison.beforeImageAlt}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="border-t border-white/8 px-5 py-4">
                      <a
                        href={originalWebsiteHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#CBBFFF] transition hover:text-white"
                      >
                        Open original website
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </article>

                  <article className="overflow-hidden rounded-[2rem] border border-[#765EFF]/20 bg-[#765EFF]/10">
                    <div className="border-b border-white/10 px-5 py-4">
                      <div className="text-xs font-medium uppercase tracking-[0.32em] text-[#D8D0FF]">
                        Redesigned version
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#ECE8FF]">
                        {beforeAfterComparison.afterDescription}
                      </p>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden bg-black/20">
                      <img
                        src={beforeAfterComparison.afterImage}
                        alt={beforeAfterComparison.afterImageAlt}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="border-t border-white/10 px-5 py-4">
                      <a
                        href={liveRedesignHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#ECE8FF]"
                      >
                        Open redesigned website
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </article>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D]">
                  <div className="grid divide-y divide-white/8">
                    {beforeAfterComparison.rows.map((item) => (
                      <div key={item.label} className="grid gap-px border-b border-white/8 last:border-b-0 lg:grid-cols-[0.24fr_0.38fr_0.38fr]">
                        <div className="bg-white/[0.02] px-5 py-4 text-sm font-semibold text-white lg:border-r lg:border-r-white/8">
                          {item.label}
                        </div>
                        <div className="bg-white/[0.01] px-5 py-4 text-sm leading-7 text-[#A3ACB9] lg:border-r lg:border-r-white/8">
                          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.28em] text-[#8E97A8]">
                            Before
                          </span>
                          {item.original}
                        </div>
                        <div className="bg-[#765EFF]/10 px-5 py-4 text-sm leading-7 text-[#E8E4FF]">
                          <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.28em] text-[#CBBFFF]">
                            After
                          </span>
                          {item.redesign}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>
        ) : null}

        <Section className="py-10">
          <div className="page-gutter">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#765EFF]" />
              <h2 className="text-2xl font-bold text-white md:text-3xl">Key features</h2>
            </div>

            <FadeInStagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {keyFeatures.map((feature) => (
                <FadeIn key={feature.title}>
                  <div className="h-full rounded-[1.75rem] border border-white/8 bg-[#0D0D0D] p-6">
                    <div className="text-sm font-semibold text-white">{feature.title}</div>
                    <p className="mt-3 text-sm leading-7 text-[#A3ACB9]">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
        </Section>

        <Section className="py-10">
          <div className="page-gutter">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#765EFF]" />
              <h2 className="text-2xl font-bold text-white md:text-3xl">Visual gallery</h2>
            </div>

            <FadeInStagger className="grid gap-4 lg:grid-cols-3">
              {gallery.map((item) => (
                <FadeIn key={item.title}>
                  <article className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0D0D0D]">
                    <div className="aspect-[4/3] overflow-hidden bg-black/20">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#9AA3B2]">{item.description}</p>
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
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#765EFF]" />
                  <h2 className="text-2xl font-bold text-white">Technologies used</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[#D4DAE5]">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-[2rem] border border-[#765EFF]/20 bg-[#765EFF]/10 p-6 md:p-8">
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#C9BFFF]">
                  Disclaimer
                </div>
                <p className="text-sm leading-8 text-[#E8E4FF] md:text-base">
                  {disclaimer}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Back to home
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>
    </div>
  );
}