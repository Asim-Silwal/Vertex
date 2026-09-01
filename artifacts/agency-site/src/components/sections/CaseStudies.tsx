import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard, { type CaseStudy } from './CaseStudyCard';
import usaStormImg from '@assets/usa-storm-roofing-screenshot.jpg';
import paintingServiceImg from '/Print_Service_Nepal.png';

const caseStudies: CaseStudy[] = [
  {
    projectType: 'Independent Website Redesign',
    title: 'USA Storm Roofing Concept Redesign',
    description:
      'A premium independent redesign of the public homepage, reworked to sharpen the hero message, emphasize trust, and streamline the path to contact for storm restoration and exterior services.',
    label: 'Independent Website Redesign',
    image: usaStormImg,
    imageAlt: 'USA Storm Roofing independent concept redesign preview',
    ctaLabel: 'Read Case Study',
    ctaHref: '/case-studies/usa-storm-roofing',
    features: [
      {
        title: 'Clearer offer hierarchy',
        description:
          'The redesign puts the core services, trust message, and next step into a cleaner visual path.',
      },
      {
        title: 'More direct conversion flow',
        description:
          'The page structure reduces friction and keeps the contact path visible without adding clutter.',
      },
    ],
    stats: [
      {
        label: 'Project type',
        value: 'Independent concept work',
      },
      {
        label: 'Focus',
        value: 'Trust, clarity, conversion',
      },
    ],
  },
  {
    projectType: 'Brand & Website Refresh',
    title: 'Painting Service Nepal',
    description:
      'A service-focused brand experience for interior, exterior, texture, and waterproofing work, designed around clearer offerings and an easier quote path.',
    label: 'Portfolio Project',
    image: paintingServiceImg,
    imageAlt: 'Painting Service Nepal business website preview',
    ctaLabel: 'Read Case Study',
    ctaHref: '/case-studies/painting-service',
    features: [
      {
        title: 'Service clarity',
        description:
          'The brand message makes interior, exterior, texture, and waterproofing work easier to understand at a glance.',
      },
      {
        title: 'Frictionless inquiry path',
        description:
          'The experience supports quick quoting and confident decision-making for service-based customer journeys.',
      },
    ],
    stats: [
      {
        label: 'Project type',
        value: 'Service business website',
      },
      {
        label: 'Focus',
        value: 'Brand clarity, trust, conversion',
      },
    ],
  },
];

export default function CaseStudies() {
  return (
    <Section id="portfolio" className="py-24 bg-[#070707]" data-testid="section-case-studies">
      <div className="page-gutter">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-block">
              <span className="rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium text-[#765EFF]">
                Case Studies
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-5xl">Selected work built around real business goals.</h2>
            <p className="text-lg text-[#A6B0C0]">
              We create digital experiences that help brands communicate clearly, build trust, and move customers toward action.
            </p>
          </div>
          <a
            href="/work"
            className="inline-flex items-center gap-2 font-medium text-[#765EFF] transition-colors hover:text-[#8B7AFF]"
          >
            See all work <ArrowRight size={18} />
          </a>
        </div>

        <FadeInStagger className="space-y-4">
          {caseStudies.map((caseStudy, index) => (
            <FadeIn key={caseStudy.title}>
              <CaseStudyCard caseStudy={caseStudy} featured={index === 0} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}