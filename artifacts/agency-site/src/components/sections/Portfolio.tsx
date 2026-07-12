import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowRight } from 'lucide-react';
import { CountUp } from '@/components/ui/count-up';
import { motion } from 'framer-motion';
import apexImg from "@assets/apex-roofing.jpg";
import climateImg from "@assets/climate-hvac.jpg";
import precisionImg from "@assets/precision-plumbing.jpg";

const projects = [
  {
    company: "Apex Roofing Co.",
    industry: "Roofing",
    metricValue: 340,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "inbound lead volume",
    description: "Rebuilt from the ground up to dominate local search. Implemented an interactive roof estimate funnel that tripled conversion rates.",
    image: apexImg
  },
  {
    company: "Climate Masters",
    industry: "HVAC",
    metricValue: 2.1,
    metricPrefix: "$",
    metricSuffix: "M",
    metricLabel: "pipeline generated",
    decimals: 1,
    description: "A digital showroom designed to sell premium HVAC installations. Reduced bounce rate by 65% and increased average ticket size.",
    image: climateImg
  },
  {
    company: "Precision Flow",
    industry: "Plumbing",
    metricValue: 41,
    metricPrefix: "",
    metricSuffix: "%",
    metricLabel: "lower cost-per-lead",
    description: "Emergency plumbing landing pages hyper-optimized for mobile. One-tap dispatch integration resulting in record response times.",
    image: precisionImg
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="py-24 bg-[#070707]" data-testid="section-portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Results That Speak.</h2>
            <p className="text-[#666] text-lg">
              We don't design for awards. We design for revenue. Here is what happens when craft meets conversion science.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#765EFF] font-medium hover:text-[#8B7AFF] transition-colors">
            View All <ArrowRight size={18} />
          </a>
        </div>

        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={i}>
              <motion.div 
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="group rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/6 hover:border-white/12 transition-all duration-300"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.company} website`} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-medium text-[#765EFF] mb-3">
                    {project.industry}
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-1">{project.company}</h3>
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-white mb-1">
                      <CountUp 
                        end={project.metricValue} 
                        prefix={project.metricPrefix} 
                        suffix={project.metricSuffix} 
                        decimals={project.decimals || 0}
                        duration={2000} 
                      />
                    </div>
                    <div className="text-xs text-[#666] uppercase tracking-wide">{project.metricLabel}</div>
                  </div>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-[#765EFF] text-sm mt-4 inline-flex items-center group-hover:gap-2 transition-all">
                    View Project <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
