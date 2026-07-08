import { FadeIn, Section } from '@/components/ui/section';
import { Target, ShieldCheck, Cpu, BarChart3 } from 'lucide-react';
import whyUsImg from "@assets/why-us.jpg";

const points = [
  {
    title: "We Understand Your Operations",
    description: "We know the difference between a dispatch fee and a diagnostic fee. We understand that water heater replacements are high-margin and drain clearings are entry offers. We speak your language, so you don't have to translate your business to a generic web designer.",
    icon: Target,
    color: "#2563EB",
    borderClass: "border-l-[#2563EB]",
    iconClass: "text-[#2563EB]"
  },
  {
    title: "Engineered for Trust",
    description: "Homeowners are inviting strangers into their homes. Your website must project immediate safety, authority, and reliability. We use specific psychological triggers, verified reviews, and professional imagery to eliminate friction and build instant credibility.",
    icon: ShieldCheck,
    color: "#10B981",
    borderClass: "border-l-[#10B981]",
    iconClass: "text-[#10B981]"
  },
  {
    title: "Performance Without Compromise",
    description: "Slow websites kill conversions. Our sites are built on modern edge infrastructure, loading in milliseconds even on 3G networks in the field. When a homeowner is standing in a flooded basement, they aren't going to wait for your site to load.",
    icon: Cpu,
    color: "#2563EB",
    borderClass: "border-l-[#2563EB]",
    iconClass: "text-[#2563EB]"
  },
  {
    title: "Data-Driven Iteration",
    description: "Launching the site is the starting line, not the finish line. We install advanced analytics to track exactly where users click, scroll, and bounce. We constantly refine the experience to squeeze every possible lead out of your traffic.",
    icon: BarChart3,
    color: "#10B981",
    borderClass: "border-l-[#10B981]",
    iconClass: "text-[#10B981]"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <FadeIn key={i}>
                  <div className={`group flex flex-col sm:flex-row gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-card/30 border-y border-r border-border border-l-4 ${point.borderClass} hover:bg-card/80 transition-colors`}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={28} strokeWidth={1.5} className={point.iconClass} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          
          <FadeIn className="hidden lg:block h-full min-h-[600px] relative">
            <div className="absolute inset-0 rounded-3xl border border-border overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img 
                src={whyUsImg} 
                alt="Agency designer working on home services website" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2563EB]/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#10B981]/20 blur-3xl rounded-full" />
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
