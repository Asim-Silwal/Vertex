import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard, { type CaseStudy } from './CaseStudyCard';
import usaStormImg from '@assets/usa-storm-roofing-screenshot.jpg';

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
];

export default function CaseStudies() {
  return (
    <Section id="portfolio" className="py-24 bg-[#070707]" data-testid="section-case-studies">
      <div className="page-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-block">
              <span className="text-xs font-medium bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-3 py-1">
                Case Studies
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Concepts built to feel like the real thing.</h2>
            <p className="text-[#666] text-lg">
              These case studies show how a home service site can be reorganized around clarity, trust, and a better path to inquiry.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#765EFF] font-medium hover:text-[#8B7AFF] transition-colors"
          >
            Start a Project <ArrowRight size={18} />
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