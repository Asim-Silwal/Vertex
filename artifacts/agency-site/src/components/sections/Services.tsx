import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import webdesignImg from '@assets/service-webdesign.jpg';
import seoImg from '@assets/service-seo.jpg';
import croImg from '@assets/service-cro.jpg';
import reviewsImg from '@assets/service-reviews.jpg';

export default function Services() {
  return (
    <Section id="services" className="py-24 bg-[#0A0A0A]" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-medium bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-3 py-1">
              What We Build
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Four disciplines.<br />
            <span className="text-[#888]">One focus: your leads.</span>
          </h2>
          <p className="text-[#666] text-lg max-w-sm">
            We handle the digital foundation so you can focus on operations.
          </p>
        </div>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 01 - Web Design */}
          <FadeIn className="md:col-span-2">
            <div className="h-full bg-[#0D0D0D] rounded-2xl border border-white/8 p-8 overflow-hidden relative transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_0_30px_rgba(118,94,255,0.08)] flex flex-col">
              <div className="mb-6 relative group">
                <img src={webdesignImg} alt="High-Conversion Web Design" className="h-52 w-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-2.5 py-0.5">
                    Web Design
                  </span>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    +340% avg lead increase
                  </div>
                </div>
                <h3 className="font-semibold text-white text-xl md:text-2xl mt-3">High-Conversion Web Design</h3>
                <p className="text-[#666] text-sm md:text-base mt-1">
                  Custom sites that turn visitors into booked calls.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 02 - SEO */}
          <FadeIn className="md:col-span-1">
            <div className="h-full bg-[#0D0D0D] rounded-2xl border border-white/8 p-8 overflow-hidden relative transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_0_30px_rgba(118,94,255,0.08)] flex flex-col">
              <div className="mb-6 relative group">
                <img src={seoImg} alt="Local SEO & Visibility" className="h-36 w-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-auto">
                <span className="inline-block text-xs bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-2.5 py-0.5 mb-3">
                  SEO
                </span>
                <h3 className="font-semibold text-white text-lg mt-3">Local SEO & Visibility</h3>
                <p className="text-[#666] text-sm mt-1">
                  Own your local market completely.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 03 - CRO */}
          <FadeIn className="md:col-span-1">
            <div className="h-full bg-[#0D0D0D] rounded-2xl border border-white/8 p-8 overflow-hidden relative transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_0_30px_rgba(118,94,255,0.08)] flex flex-col">
              <div className="mb-6 relative group">
                <img src={croImg} alt="Conversion Rate Optimization" className="h-36 w-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-auto">
                <span className="inline-block text-xs bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-2.5 py-0.5 mb-3">
                  CRO
                </span>
                <h3 className="font-semibold text-white text-lg mt-3">Conversion Rate Optimization</h3>
                <p className="text-[#666] text-sm mt-1">
                  More leads from the same traffic.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 04 - Reviews */}
          <FadeIn className="md:col-span-2">
            <div className="h-full bg-[#0D0D0D] rounded-2xl border border-white/8 p-8 overflow-hidden relative transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_0_30px_rgba(118,94,255,0.08)] flex flex-col">
              <div className="mb-6 relative group">
                <img src={reviewsImg} alt="Review & Reputation Engine" className="h-36 w-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-auto">
                <span className="inline-block text-xs bg-[#765EFF]/10 text-[#765EFF] border border-[#765EFF]/20 rounded-full px-2.5 py-0.5 mb-3">
                  Reputation
                </span>
                <h3 className="font-semibold text-white text-xl md:text-2xl mt-3">Review & Reputation Engine</h3>
                <p className="text-[#666] text-sm md:text-base mt-1">
                  5-star authority at every touchpoint.
                </p>
              </div>
            </div>
          </FadeIn>

        </FadeInStagger>
      </div>
    </Section>
  );
}
