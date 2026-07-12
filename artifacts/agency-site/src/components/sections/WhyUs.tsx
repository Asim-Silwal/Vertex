import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Wrench, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <Section id="why-us" className="py-24 bg-[#0A0A0A]" data-testid="section-why-us">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-medium bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-3 py-1">
              Why Vertex Digital
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
            Why contractors choose Vertex Digital.
          </h2>
          <p className="text-[#555] text-lg max-w-md">
            We help roofing, HVAC, plumbing, remodeling, and other home service businesses grow with clear communication, conversion-focused design, and dependable support.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C7CCD6]">
              Professional communication
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C7CCD6]">
              Reliable delivery
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C7CCD6]">
              Long-term support
            </span>
          </div>
        </div>

        <FadeInStagger className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 01 */}
          <FadeIn>
            <div className="h-full p-8 rounded-2xl bg-[#0D0D0D] border border-white/8 hover:border-[#765EFF]/25 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-[#765EFF]/10 flex items-center justify-center border border-[#765EFF]/20 group-hover:scale-110 transition-transform duration-500">
                  <Wrench className="size-6 text-[#765EFF]" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Professional Communication</span>
              </div>
              
              <div className="mt-auto">
                <div className="font-serif italic text-3xl font-bold text-white mb-3">Clear from the start.</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  You get direct communication, practical timelines, and a partner who understands how contractors actually run their business.
                </p>
                <div className="mt-4 text-sm font-semibold text-white/80">Clear updates throughout the project</div>
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
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Conversion-Focused Design</span>
              </div>
              
              <div className="mt-auto">
                <div className="font-serif italic text-3xl font-bold text-white mb-3">Built to earn calls.</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  Every page is designed to build trust quickly, guide visitors toward action, and turn more local traffic into qualified leads.
                </p>
                <div className="mt-4 text-sm font-semibold text-emerald-400">Focused on qualified inquiries</div>
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
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">SEO Readiness</span>
              </div>
              
              <div className="mt-auto">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }} 
                  whileInView={{ scale: 1, opacity: 1 }} 
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  className="text-5xl font-bold text-white tracking-tighter mb-2"
                >
                  SEO-ready
                </motion.div>
                <div className="text-[#444] text-xs uppercase tracking-widest font-semibold mb-3">Local visibility foundation</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  The site structure, content hierarchy, and metadata are built to support local search visibility from day one.
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
                <span className="text-[10px] uppercase tracking-wider text-[#555] font-medium px-2 py-1 rounded border border-white/5">Long-Term Support</span>
              </div>
              
              <div className="mt-auto">
                <div className="font-serif italic text-3xl font-bold text-white mb-3">Reliable after launch.</div>
                <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                  We stay available for updates, improvements, and maintenance so the website keeps working as the business grows.
                </p>
                <div className="mt-4 text-sm font-semibold text-blue-400">Support that continues after launch</div>
              </div>
            </div>
          </FadeIn>

        </FadeInStagger>
      </div>
    </Section>
  );
}
