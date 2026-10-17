import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Roofing', hook: 'Help homeowners find the right service and request an inspection.' },
  { name: 'HVAC', hook: 'Make urgent repairs and planned installations easy to discover.' },
  { name: 'Plumbing', hook: 'Put the services, service areas, and contact path upfront.' },
  { name: 'Remodeling', hook: 'Show the quality of your work and make inquiries feel simple.' },
  { name: 'Painting', hook: 'Turn project imagery and clear offers into stronger first impressions.' },
  { name: 'Landscaping', hook: 'Give local customers a compelling reason to get in touch.' },
];

export default function Industries() {
  return (
    <Section id="industries" className="bg-black py-20 md:py-32" data-testid="section-industries">
      <div className="page-gutter">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold text-[#8f7cff]">Industry focus</p>
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#f5f5f7] md:text-6xl">Websites for the businesses customers rely on every day.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#a1a1a6]">
            We focus on service businesses where trust, local relevance, and a clear route to contact shape the buying decision.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind, i) => {
            return (
              <FadeIn key={i}>
                <article className="group flex h-full min-h-56 flex-col justify-between rounded-xl border border-white/10 bg-[#1d1d1f] p-7 transition-colors duration-200 hover:bg-[#242426]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-medium text-[#86868b]">0{i + 1}</span>
                    <ArrowRight size={18} className="text-[#8f7cff] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-[#f5f5f7]">{ind.name}</h3>
                    <p className="mt-3 text-base leading-7 text-[#a1a1a6]">{ind.hook}</p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </Section>
  );
}
