import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We audit your current digital footprint, analyze your local competitors, and map out your highest-margin service offerings."
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We blueprint the site architecture, conversion funnels, and local SEO plan tailored strictly for your service area."
  },
  {
    id: "03",
    title: "Design",
    desc: "We craft a premium, high-trust visual identity that positions you as the unquestioned authority in your market."
  },
  {
    id: "04",
    title: "Build",
    desc: "We engineer the site using edge-compute technology for blazing fast load times and bulletproof security."
  },
  {
    id: "05",
    title: "Launch",
    desc: "Rigorous QA testing, CRM integrations, tracking setup, and a seamless zero-downtime deployment."
  },
  {
    id: "06",
    title: "Support",
    desc: "Ongoing optimization, technical maintenance, content updates, and continuous performance monitoring."
  }
];

export default function Process() {
  return (
    <Section id="process" className="py-24 bg-[#070707]" data-testid="section-process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Blueprint.</h2>
          <p className="text-[#666] text-lg">
            A battle-tested process refined over dozens of 7-figure trade business launches. Zero guesswork, total predictability.
          </p>
        </div>

        <FadeInStagger className="max-w-2xl mx-auto flex flex-col">
          {steps.map((step, i) => (
            <FadeIn key={i}>
              <div className="flex gap-6 items-start py-6 border-b border-white/6 last:border-0 group">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-[#555] flex-shrink-0 group-hover:border-[#765EFF]/50 group-hover:text-[#765EFF] transition-colors mt-0.5">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{step.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
