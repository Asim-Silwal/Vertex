import { FadeIn, Section } from '@/components/ui/section';
import { Target, ShieldCheck, Cpu, BarChart3 } from 'lucide-react';

const points = [
  {
    title: "We Understand Your Operations",
    description: "We know the difference between a dispatch fee and a diagnostic fee. We understand that water heater replacements are high-margin and drain clearings are entry offers. We speak your language, so you don't have to translate your business to a generic web designer.",
    icon: Target
  },
  {
    title: "Engineered for Trust",
    description: "Homeowners are inviting strangers into their homes. Your website must project immediate safety, authority, and reliability. We use specific psychological triggers, verified reviews, and professional imagery to eliminate friction and build instant credibility.",
    icon: ShieldCheck
  },
  {
    title: "Performance Without Compromise",
    description: "Slow websites kill conversions. Our sites are built on modern edge infrastructure, loading in milliseconds even on 3G networks in the field. When a homeowner is standing in a flooded basement, they aren't going to wait for your site to load.",
    icon: Cpu
  },
  {
    title: "Data-Driven Iteration",
    description: "Launching the site is the starting line, not the finish line. We install advanced analytics to track exactly where users click, scroll, and bounce. We constantly refine the experience to squeeze every possible lead out of your traffic.",
    icon: BarChart3
  }
];

export default function WhyUs() {
  return (
    <Section id="why-us" className="py-24" data-testid="section-why-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Not Just Another Agency.</h2>
          <p className="text-muted-foreground text-lg">
            Most agencies sell you a digital brochure. We build highly-calibrated lead generation engines designed specifically for the trades.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <FadeIn key={i}>
                <div className="group flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-10 rounded-2xl bg-card/30 border border-border hover:bg-card/80 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
