import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const services = [
  {
    id: "01",
    title: "High-Conversion Web Design",
    description: "We don't do templates. Every site is custom-engineered to guide homeowners to the exact action you want: picking up the phone or submitting a quote request. Lightning fast, accessible, and visually dominant."
  },
  {
    id: "02",
    title: "Local SEO & Visibility",
    description: "Owning your backyard means showing up first when the pipes burst or the AC dies. We optimize your service area structure, schema markup, and content to completely monopolize local search intent."
  },
  {
    id: "03",
    title: "Conversion Rate Optimization",
    description: "Traffic is useless if it bounces. We use heatmaps, session recordings, and A/B testing on your CTAs to ensure every marketing dollar you spend elsewhere converts better on the site we build."
  },
  {
    id: "04",
    title: "Review & Reputation Engine",
    description: "Trust is the only currency that matters in the trades. We integrate your Google Business Profile directly into the site structure, prominently featuring 5-star reviews to systematically eliminate buyer hesitation."
  }
];

export default function Services() {
  return (
    <Section id="services" className="py-24 bg-[#0A0A0A]" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What We Build.</h2>
          <p className="text-[#666] text-lg">
            Four specialized disciplines, executed with precision. We handle the digital foundation so you can focus on operations.
          </p>
        </div>
        
        <FadeInStagger className="max-w-2xl mx-auto flex flex-col divide-y divide-white/6">
          {services.map((service, i) => (
            <FadeIn key={i}>
              <div className="py-8 flex gap-6 items-start group hover:opacity-100 opacity-80 transition-opacity">
                <div className="text-[#333] font-mono text-sm self-start mt-1 w-8 flex-shrink-0 group-hover:text-[#765EFF] transition-colors">
                  {service.id}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2">{service.title}</h3>
                  <p className="text-[#666] text-base leading-relaxed">
                    {service.description}
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
