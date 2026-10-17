import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const reasons = [
  { label: 'Design', title: 'Thoughtful design from the start.', text: 'We structure pages around the questions customers ask before they call or request a quote.' },
  { label: 'Development', title: 'Built to perform in the real world.', text: 'We design with technical constraints in mind so the final product is fast, responsive, accessible, and maintainable.' },
  { label: 'Business understanding', title: 'Strategy shaped around business goals.', text: 'Every decision is guided by what the business needs to achieve, not just what looks impressive in a portfolio.' },
  { label: 'Long-term collaboration', title: 'Support that lasts beyond launch.', text: 'We help teams iterate, refine, and maintain digital experiences as their business grows and evolves.' },
];

export default function WhyUs() {
  return (
    <Section id="why-us" className="bg-black py-20 md:py-32" data-testid="section-why-us">
      <div className="page-gutter">
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold text-[#8f7cff]">Why Vertex Digital</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#f5f5f7] md:text-6xl">
            A website partner who understands what the website is meant to do.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#a1a1a6]">
            Good design earns attention. Clear thinking turns that attention into confidence and action.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.label}>
              <article className="flex h-full min-h-72 flex-col justify-between rounded-xl border border-white/10 bg-[#1d1d1f] p-8 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-[#8f7cff]">0{index + 1}</span>
                  <span className="max-w-[12rem] text-right text-xs font-semibold uppercase tracking-[0.12em] text-[#86868b]">{reason.label}</span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-3xl font-semibold leading-tight text-[#f5f5f7]">{reason.title}</h3>
                  <p className="mt-4 max-w-lg text-base leading-7 text-[#a1a1a6]">{reason.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
