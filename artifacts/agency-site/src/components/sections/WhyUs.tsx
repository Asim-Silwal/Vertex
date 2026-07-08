import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const points = [
  {
    id: "01",
    title: "We Understand Your Operations",
    description: "We know the difference between a dispatch fee and a diagnostic fee. We understand that water heater replacements are high-margin and drain clearings are entry offers. We speak your language, so you don't have to translate your business to a generic web designer."
  },
  {
    id: "02",
    title: "Engineered for Trust",
    description: "Homeowners are inviting strangers into their homes. Your website must project immediate safety, authority, and reliability. We use specific psychological triggers, verified reviews, and professional imagery to eliminate friction and build instant credibility."
  },
  {
    id: "03",
    title: "Performance Without Compromise",
    description: "Slow websites kill conversions. Our sites are built on modern edge infrastructure, loading in milliseconds even on 3G networks in the field. When a homeowner is standing in a flooded basement, they aren't going to wait for your site to load."
  },
  {
    id: "04",
    title: "Data-Driven Iteration",
    description: "Launching the site is the starting line, not the finish line. We install advanced analytics to track exactly where users click, scroll, and bounce. We constantly refine the experience to squeeze every possible lead out of your traffic."
  }
];

export default function WhyUs() {
  return (
    <Section id="why-us" className="py-24 bg-[#0A0A0A]" data-testid="section-why-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Osprey.</h2>
          <p className="text-[#666] text-lg">
            Most agencies sell you a digital brochure. We build highly-calibrated lead generation engines designed specifically for the trades.
          </p>
        </div>

        <FadeInStagger className="max-w-3xl mx-auto">
          {points.map((point, i) => (
            <FadeIn key={i}>
              <div className="flex gap-6 py-8 border-b border-white/6 last:border-0 group hover:opacity-100 opacity-85 transition-opacity">
                <div className="text-[#222] font-mono text-sm group-hover:text-[#765EFF] transition-colors w-8 flex-shrink-0 pt-1">
                  {point.id}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2">{point.title}</h3>
                  <p className="text-[#666] text-base leading-relaxed">
                    {point.description}
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
