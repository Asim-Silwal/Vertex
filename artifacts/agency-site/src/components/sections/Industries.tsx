import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Home, Zap, Droplets, PaintRoller, TreePine, Hammer, HardHat } from 'lucide-react';

const industries = [
  { name: 'Roofing', icon: Home, hook: 'Storm damage to full replacements.' },
  { name: 'HVAC', icon: Zap, hook: 'AC installs and emergency repairs.' },
  { name: 'Plumbing', icon: Droplets, hook: 'From leaky faucets to repiping.' },
  { name: 'Electrical', icon: Zap, hook: 'Panel upgrades and smart homes.' },
  { name: 'Painting', icon: PaintRoller, hook: 'Interior and exterior finishes.' },
  { name: 'Landscaping', icon: TreePine, hook: 'Hardscapes and lawn care.' },
  { name: 'Remodeling', icon: Hammer, hook: 'Kitchens, baths, and additions.' },
  { name: 'Contracting', icon: HardHat, hook: 'General construction and builds.' }
];

export default function Industries() {
  return (
    <Section id="industries" className="py-24" data-testid="section-industries">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trades We Dominate.</h2>
          <p className="text-muted-foreground text-lg">
            We don't build generic websites for SaaS companies or local bakeries. 
            We only work with home service businesses, because we know exactly what makes a homeowner convert.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={i}>
                <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm">{ind.hook}</p>
                </div>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </Section>
  );
}
