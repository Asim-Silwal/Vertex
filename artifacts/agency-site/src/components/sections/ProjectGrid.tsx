import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, projectPath } from '@/data/projects';
export default function ProjectGrid() {
  return <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
    {projects.map((project, index) => <article key={project.slug} className="group min-w-0">
      <a href={projectPath(project)} className="relative block overflow-hidden rounded-xl p-4 sm:p-7" style={{ backgroundColor: project.color }} aria-label={`Read the ${project.name} case study`}>
        <div className="overflow-hidden rounded-xl bg-white transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5">
          <div className="flex h-6 items-center gap-1 border-b border-black/5 bg-[#f8f8f7] px-2" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-black/20" /><span className="h-1.5 w-1.5 rounded-full bg-black/15" /><span className="h-1.5 w-1.5 rounded-full bg-black/10" /><span className="ml-auto text-[8px] tracking-wide text-black/45">{project.name}</span></div>
          <img src={project.image} alt={`${project.name} live website homepage screenshot`} width={1265} height={713} className="aspect-[1265/713] w-full object-cover object-top" loading="lazy" decoding="async" />
        </div>
      </a>
      <div className="mt-7 flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-[#8f7cff]">{String(index + 1).padStart(2, '0')} / {project.category}</p><h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-[#f5f5f7]"><a href={projectPath(project)}>{project.name}</a></h3></div><ArrowUpRight className="mt-8 shrink-0 text-[#86868b]" size={22} aria-hidden="true" /></div>
      <p className="mt-3 max-w-xl text-base leading-7 text-[#a1a1a6]">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a href={projectPath(project)} className="inline-flex min-h-11 items-center gap-2 text-[#b8adff] hover:text-white">Read case study <ArrowRight size={16} /></a><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-[#a1a1a6] hover:text-white" aria-label={`View ${project.name} live site (opens in a new tab)`}>View live site <ArrowUpRight size={16} /></a></div>
    </article>)}
  </div>;
}
