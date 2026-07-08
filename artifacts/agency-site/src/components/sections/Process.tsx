import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Search, MapPin, PenTool, Code2, Rocket, Headset } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We audit your current digital footprint, analyze your local competitors, and map out your highest-margin service offerings.",
    icon: Search
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We blueprint the site architecture, conversion funnels, and local SEO plan tailored strictly for your service area.",
    icon: MapPin
  },
  {
    id: "03",
    title: "Design",
    desc: "We craft a premium, high-trust visual identity that positions you as the unquestioned authority in your market.",
    icon: PenTool
  },
  {
    id: "04",
    title: "Build",
    desc: "We engineer the site using edge-compute technology for blazing fast load times and bulletproof security.",
    icon: Code2
  },
  {
    id: "05",
    title: "Launch",
    desc: "Rigorous QA testing, CRM integrations, tracking setup, and a seamless zero-downtime deployment.",
    icon: Rocket
  },
  {
    id: "06",
    title: "Support",
    desc: "Ongoing optimization, technical maintenance, content updates, and continuous performance monitoring.",
    icon: Headset
  }
];

export default function Process() {
  return (
    <Section id="process" className="py-24 bg-card/50 overflow-hidden" data-testid="section-process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Blueprint.</h2>
          <p className="text-muted-foreground text-lg">
            A battle-tested process refined over dozens of 7-figure trade business launches. Zero guesswork, total predictability.
          </p>
        </div>

        <FadeInStagger className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={i} className="relative">
                  <div className="bg-background w-24 h-24 rounded-full border border-border flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl relative group">
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <Icon size={32} className="text-foreground group-hover:text-primary transition-colors relative z-10" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold font-display">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </div>
    </Section>
  );
}
