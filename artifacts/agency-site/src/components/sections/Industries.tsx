import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Home, Zap, Droplets, PaintRoller, TreePine, Hammer, HardHat } from 'lucide-react';
import bgImg from "@assets/industries-bg.jpg";

const industries = [
  { name: 'Roofing', icon: Home, hook: 'Storm damage to full replacements.', color: 'hover:border-blue-500', ring: 'group-hover:border-blue-500', accent: 'group-hover:border-l-blue-500' },
  { name: 'HVAC', icon: Zap, hook: 'AC installs and emergency repairs.', color: 'hover:border-emerald-500', ring: 'group-hover:border-emerald-500', accent: 'group-hover:border-l-emerald-500' },
  { name: 'Plumbing', icon: Droplets, hook: 'From leaky faucets to repiping.', color: 'hover:border-cyan-500', ring: 'group-hover:border-cyan-500', accent: 'group-hover:border-l-cyan-500' },
  { name: 'Electrical', icon: Zap, hook: 'Panel upgrades and smart homes.', color: 'hover:border-amber-500', ring: 'group-hover:border-amber-500', accent: 'group-hover:border-l-amber-500' },
  { name: 'Painting', icon: PaintRoller, hook: 'Interior and exterior finishes.', color: 'hover:border-orange-500', ring: 'group-hover:border-orange-500', accent: 'group-hover:border-l-orange-500' },
  { name: 'Landscaping', icon: TreePine, hook: 'Hardscapes and lawn care.', color: 'hover:border-green-500', ring: 'group-hover:border-green-500', accent: 'group-hover:border-l-green-500' },
  { name: 'Remodeling', icon: Hammer, hook: 'Kitchens, baths, and additions.', color: 'hover:border-purple-500', ring: 'group-hover:border-purple-500', accent: 'group-hover:border-l-purple-500' },
  { name: 'Contracting', icon: HardHat, hook: 'General construction and builds.', color: 'hover:border-red-500', ring: 'group-hover:border-red-500', accent: 'group-hover:border-l-red-500' }
];

export default function Industries() {
  return (
    <Section id="industries" className="py-24 relative overflow-hidden" data-testid="section-industries">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.06] mix-blend-luminosity"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                <div className={`group p-6 rounded-xl bg-card/80 backdrop-blur-sm border-y border-r border-border border-l-2 border-l-border ${ind.color} ${ind.accent} transition-colors cursor-pointer relative overflow-hidden h-full flex flex-col`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`w-12 h-12 bg-background border border-border ${ind.ring} rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-all duration-300`}>
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
