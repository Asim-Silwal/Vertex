import { FadeIn, Section } from '@/components/ui/section';
import { Layout, Search, MousePointerClick, Star } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "High-Conversion Web Design",
    description: "We don't do templates. Every site is custom-engineered to guide homeowners to the exact action you want: picking up the phone or submitting a quote request. Lightning fast, accessible, and visually dominant.",
    icon: Layout,
    colorClass: "border-b-[#2563EB]"
  },
  {
    id: "02",
    title: "Local SEO & Visibility",
    description: "Owning your backyard means showing up first when the pipes burst or the AC dies. We optimize your service area structure, schema markup, and content to completely monopolize local search intent.",
    icon: Search,
    colorClass: "border-b-[#10B981]"
  },
  {
    id: "03",
    title: "Conversion Rate Optimization",
    description: "Traffic is useless if it bounces. We use heatmaps, session recordings, and A/B testing on your CTAs to ensure every marketing dollar you spend elsewhere converts better on the site we build.",
    icon: MousePointerClick,
    colorClass: "border-b-purple-500"
  },
  {
    id: "04",
    title: "Review & Reputation Engine",
    description: "Trust is the only currency that matters in the trades. We integrate your Google Business Profile directly into the site structure, prominently featuring 5-star reviews to systematically eliminate buyer hesitation.",
    icon: Star,
    colorClass: "border-b-[#F59E0B]"
  }
];

export default function Services() {
  return (
    <Section id="services" className="py-24 bg-card/30" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Arsenal.</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Four specialized disciplines, executed with precision. We handle the digital foundation so you can focus on operations.
            </p>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={i}>
                  <div className={`p-8 rounded-2xl bg-card border-t border-x border-b-2 border-border ${service.colorClass} flex flex-col sm:flex-row gap-6 items-start hover:bg-card/80 transition-colors`}>
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl shadow-lg flex items-center justify-center text-white font-display text-xl font-bold">
                      {service.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={20} className="text-primary hidden sm:block" />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
