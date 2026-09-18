import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ChevronRight, Check, Search, LayoutTemplate, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    desc: "We learn about your business, your goals, and the customers you want more of before recommending anything."
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We define the messaging, structure, and lead-generation plan that best fits your market and services."
  },
  {
    id: "03",
    title: "Design",
    desc: "We design a clean, premium experience that builds trust quickly and makes it easy for visitors to take action."
  },
  {
    id: "04",
    title: "Development",
    desc: "We build the site carefully, keeping it reliable, easy to maintain, and ready for future growth."
  },
  {
    id: "05",
    title: "Launch",
    desc: "We handle launch details, checks, and setup so the website goes live smoothly and confidently."
  },
  {
    id: "06",
    title: "Ongoing Support",
    desc: "We stay available for updates, improvements, and maintenance so the site continues to support your business."
  }
];

export default function Process() {
  return (
    <Section id="process" className="py-24 bg-[#070707]" data-testid="section-process">
      <div className="page-gutter">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Process.</h2>
          <p className="text-[#666] text-lg">
            A clear six-step process built for trust, clarity, and smooth delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="sticky top-24">
                <div className="rounded-2xl border border-white/10 bg-[#111218] p-6 shadow-[0_24px_60px_rgba(0,0,0,.25)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a99aff]">From idea to launch</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">A clear path, at every step.</h3>
                  <div className="mt-8 space-y-3">
                    {[
                      { icon: Search, label: 'Understand the business' },
                      { icon: LayoutTemplate, label: 'Design the experience' },
                      { icon: Code2, label: 'Build and refine' },
                      { icon: Rocket, label: 'Launch and improve' },
                    ].map(({ icon: Icon, label }, index) => (
                      <div key={label} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[.025] p-3 text-sm text-[#c4cbd7]">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#765EFF]/15 text-[#ae9fff]"><Icon size={17} /></span>
                        <span className="flex-1">{label}</span>
                        {index < 3 ? <Check size={15} className="text-[#a99aff]" /> : <span className="h-2 w-2 rounded-full bg-[#a99aff]" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Right col - The 6 steps */}
          <div className="lg:col-span-3">
            <FadeInStagger className="flex flex-col">
              {steps.map((step, i) => (
                <FadeIn key={i}>
                  <div className="py-5 border-b border-white/6 group last:border-0">
                    <div className="flex items-center gap-6">
                      <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-[#555] flex-shrink-0 group-hover:border-[#765EFF]/60 group-hover:text-[#765EFF] transition-colors duration-300">
                        {step.id}
                      </div>
                      <h3 className="font-medium text-white/80 text-base md:text-lg group-hover:text-white transition-colors duration-300 flex-1">
                        {step.title}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-[#444] group-hover:text-[#765EFF] transition-transform duration-300 transform group-hover:translate-x-1" />
                    </div>
                    
                    <div className="pl-13 lg:max-h-0 lg:overflow-hidden lg:group-hover:max-h-24 transition-all duration-500 ease-in-out">
                      <p className="text-[#555] text-sm leading-relaxed mt-2 lg:mt-3 lg:pb-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
