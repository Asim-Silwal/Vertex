import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    company: "Apex Roofing Co.",
    industry: "Roofing",
    metric: "+340% inbound lead volume",
    description: "Rebuilt from the ground up to dominate local search. Implemented an interactive roof estimate funnel that tripled conversion rates.",
    gradient: "from-blue-900 to-slate-900",
    accent: "text-blue-400",
    accentBg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    company: "Climate Masters",
    industry: "HVAC",
    metric: "$2.1M pipeline generated",
    description: "A digital showroom designed to sell premium HVAC installations. Reduced bounce rate by 65% and increased average ticket size.",
    gradient: "from-emerald-900 to-slate-900",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  {
    company: "Precision Flow",
    industry: "Plumbing",
    metric: "41% lower cost-per-lead",
    description: "Emergency plumbing landing pages hyper-optimized for mobile. One-tap dispatch integration resulting in record response times.",
    gradient: "from-purple-900 to-slate-900",
    accent: "text-purple-400",
    accentBg: "bg-purple-400/10",
    border: "border-purple-400/20"
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="py-24" data-testid="section-portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Proof in the Metrics.</h2>
            <p className="text-muted-foreground text-lg">
              We don't design for awards. We design for revenue. Here is what happens when craft meets conversion science.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            View All Case Studies <ArrowUpRight size={18} />
          </a>
        </div>

        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-border/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
                <div className={`h-64 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Abstract UI representation */}
                  <div className="absolute inset-x-8 -bottom-16 top-12 bg-background rounded-t-xl border-t border-x border-white/10 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:translate-y-4">
                    <div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-muted/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="p-6">
                      <div className="w-1/3 h-4 bg-white/10 rounded mb-6" />
                      <div className="w-3/4 h-8 bg-white/20 rounded mb-4" />
                      <div className="w-1/2 h-8 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.accent} ${project.accentBg} ${project.border} border`}>
                      {project.industry}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                      View Project <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.company}</h3>
                  <div className="text-2xl font-display font-medium text-white mb-4 tracking-tight">
                    {project.metric}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
