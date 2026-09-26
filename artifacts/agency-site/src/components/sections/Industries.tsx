import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowRight, Droplets, Flame, Hammer, House, Paintbrush, Trees } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'ROOFING', icon: House, hook: 'Help homeowners find the right service and request an inspection.', color: 'text-violet-400' },
  { name: 'HVAC', icon: Flame, hook: 'Make urgent repairs and planned installations easy to discover.', color: 'text-cyan-400' },
  { name: 'PLUMBING', icon: Droplets, hook: 'Put the services, service areas, and contact path upfront.', color: 'text-amber-400' },
  { name: 'REMODELING', icon: Hammer, hook: 'Show the quality of your work and make inquiries feel simple.', color: 'text-sky-400' },
  { name: 'PAINTING', icon: Paintbrush, hook: 'Turn project imagery and clear offers into stronger first impressions.', color: 'text-emerald-400' },
  { name: 'LANDSCAPING', icon: Trees, hook: 'Give local customers a compelling reason to get in touch.', color: 'text-pink-400' },
];

export default function Industries() {
  return (
    <Section id="industries" className="py-24 bg-[#0A0A0A]" data-testid="section-industries">
      <div className="page-gutter">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Built for the businesses that build our communities.</h2>
          <p className="text-lg text-[#9CA7B7]">
            From roofers to remodelers, we help home service teams present their work clearly and make the next step easy for customers.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={i}>
                <motion.div
                  className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#111218] p-6 transition-all duration-300 hover:border-[#765EFF]/40 hover:bg-[#171725]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon size={20} className={ind.color} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#7B8595]">{ind.hook}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#A8AEEA]">Built for growth <ArrowRight size={12} /></div>
                </motion.div>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </div>
    </Section>
  );
}
