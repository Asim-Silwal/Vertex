import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Wrench, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { CountUp } from '@/components/ui/count-up';
import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <Section id="why-us" className="py-24 bg-[#0A0A0A]" data-testid="section-why-us">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-medium bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-3 py-1">
              Why Osprey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
            Built different.
          </h2>
          <p className="text-[#555] text-lg max-w-xs">
            We build highly-calibrated lead generation engines specifically for the trades.
          </p>
        </div>

        <FadeInStagger className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 01 */}
          <FadeIn>
            <div className="h-full p-8 rounded-2xl bg-[#0D0D0D] border border-white/8 hover:border-[#765EFF]/25 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-[#765EFF]/10 flex items-center justify-center border border-[#765EFF]/20 group-hover:scale-110 transition-transform duration-500">
                  <Wrench className="size-6 text-[#765EFF]" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Industry Expertise</span>
              </div>
              
              <div className="mt-auto">
                <div className="font-serif italic text-3xl font-bold text-white mb-3">No translator needed.</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  We speak your language. We know the difference between a dispatch fee and a diagnostic fee.
                </p>
                <div className="mt-4 text-sm font-semibold text-white/80">
                  <CountUp end={50} suffix="+ clients" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 02 */}
          <FadeIn>
            <div className="h-full p-8 rounded-2xl bg-[#0D0D0D] border border-white/8 hover:border-emerald-500/25 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="size-6 text-emerald-500" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Conversion Science</span>
              </div>
              
              <div className="mt-auto">
                <div className="font-serif italic text-3xl font-bold text-white mb-3">Trust by design.</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  Your website must project immediate safety. We use psychological triggers and professional imagery to build instant credibility.
                </p>
                <div className="mt-4 text-sm font-semibold text-emerald-400">
                  <CountUp end={100} suffix="% satisfaction" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 03 */}
          <FadeIn>
            <div className="h-full p-8 rounded-2xl bg-[#0D0D0D] border border-white/8 hover:border-yellow-500/25 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="size-6 text-yellow-500" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Edge Performance</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-2">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }} 
                    whileInView={{ scale: 1, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                    className="text-5xl font-bold text-white tracking-tighter"
                  >
                    &lt; 1s
                  </motion.div>
                </div>
                <div className="text-[#444] text-xs uppercase tracking-widest font-semibold mb-3">Average load time</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  Slow websites kill conversions. Our sites load in milliseconds even on 3G networks in the field.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 04 */}
          <FadeIn>
            <div className="h-full p-8 rounded-2xl bg-[#0D0D0D] border border-white/8 hover:border-blue-400/25 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center border border-blue-400/20 group-hover:scale-110 transition-transform duration-500">
                  <BarChart3 className="size-6 text-blue-400" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Analytics-First</span>
              </div>
              
              <div className="mt-auto">
                <div className="font-serif italic text-3xl font-bold text-white mb-3">Always improving.</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  We install advanced analytics to track exactly where users click, scroll, and bounce.
                </p>
                <div className="mt-4 text-sm font-semibold text-blue-400">
                  <CountUp end={4.9} decimals={1} suffix="/5 avg. rating" />
                </div>
              </div>
            </div>
          </FadeIn>

        </FadeInStagger>
      </div>
    </Section>
  );
}
