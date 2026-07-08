import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Home, Zap, Droplets, PaintRoller, TreePine, Hammer, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Roofing', icon: Home, hook: 'Storm damage to full replacements.', color: 'text-blue-500' },
  { name: 'HVAC', icon: Zap, hook: 'AC installs and emergency repairs.', color: 'text-emerald-500' },
  { name: 'Plumbing', icon: Droplets, hook: 'From leaky faucets to repiping.', color: 'text-cyan-500' },
  { name: 'Electrical', icon: Zap, hook: 'Panel upgrades and smart homes.', color: 'text-amber-500' },
  { name: 'Painting', icon: PaintRoller, hook: 'Interior and exterior finishes.', color: 'text-orange-500' },
  { name: 'Landscaping', icon: TreePine, hook: 'Hardscapes and lawn care.', color: 'text-green-500' },
  { name: 'Remodeling', icon: Hammer, hook: 'Kitchens, baths, and additions.', color: 'text-purple-500' },
  { name: 'Contracting', icon: HardHat, hook: 'General construction and builds.', color: 'text-red-500' }
];

export default function Industries() {
  return (
    <Section id="industries" className="py-24 bg-[#0A0A0A]" data-testid="section-industries">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Trades We Serve.</h2>
          <p className="text-[#666] text-lg">
            We don't build generic websites for SaaS companies or local bakeries. 
            We only work with home service businesses, because we know exactly what makes a homeowner convert.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={i}>
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className="group p-5 rounded-2xl bg-[#111] border border-white/6 hover:border-[#765EFF]/40 hover:bg-[#111]/80 transition-all duration-300 cursor-pointer hover:shadow-[inset_3px_0_0_#765EFF] h-full flex flex-col"
                >
                  <Icon size={24} className={`${ind.color}`} />
                  <h3 className="font-medium text-white text-base mt-3">{ind.name}</h3>
                  <p className="text-[#666] text-sm mt-1">{ind.hook}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </Section>
  );
}
