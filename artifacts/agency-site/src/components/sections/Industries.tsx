import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowRight, Building2, Globe, Rocket, ShoppingBag, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'STARTUPS', icon: Rocket, hook: 'Build and validate digital products quickly.', color: 'text-violet-400' },
  { name: 'SERVICE BUSINESSES', icon: Users, hook: 'Turn your website into a stronger customer acquisition tool.', color: 'text-cyan-400' },
  { name: 'E-COMMERCE', icon: ShoppingBag, hook: 'Create digital storefronts designed around conversion.', color: 'text-amber-400' },
  { name: 'PROFESSIONAL SERVICES', icon: Building2, hook: 'Build credibility through a polished digital presence.', color: 'text-sky-400' },
  { name: 'TECH & DIGITAL PRODUCTS', icon: Sparkles, hook: 'Design and develop intuitive product experiences.', color: 'text-emerald-400' },
  { name: 'LOCAL BUSINESSES', icon: Globe, hook: 'Create a digital presence that helps customers discover and trust your business.', color: 'text-pink-400' },
];

export default function Industries() {
  return (
    <Section id="industries" className="py-24 bg-[#0A0A0A]" data-testid="section-industries">
      <div className="page-gutter">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Built for ambitious businesses.</h2>
          <p className="text-lg text-[#9CA7B7]">
            We work across startups, service brands, e-commerce, professional teams, and modern organizations that need digital experiences built for growth.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={i}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-white/6 bg-[#111] p-5 transition-all duration-300 hover:border-[#765EFF]/40 hover:bg-[#111]/80"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon size={20} className={ind.color} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#7B8595]">{ind.hook}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#A8AEEA]">
                    Explore <ArrowRight size={12} />
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </Section>
  );
}
