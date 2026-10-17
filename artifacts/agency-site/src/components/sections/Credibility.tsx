import { ArrowUpRight } from 'lucide-react';

const principles = [
  { title: 'Earn trust faster', text: 'Present your services, standards, and real work in a way customers can understand quickly.' },
  { title: 'Make the offer clear', text: 'Turn scattered information into a focused story that answers the questions behind an inquiry.' },
  { title: 'Remove digital friction', text: 'Give visitors a fast, responsive experience with an obvious route to contact.' },
];

export default function Credibility() {
  return (
    <section className="border-b border-white/8 bg-[#111113] py-20 sm:py-28" data-testid="section-credibility">
      <div className="page-gutter">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[#8f7cff]">What better design changes</p>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#f5f5f7] sm:text-5xl">A premium website should make your business feel like the obvious choice.</h2>
          </div>
          <a href="/services" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#b8adff] hover:text-white">Explore our approach <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid border-y border-white/10 md:grid-cols-3">
          {principles.map(({ title, text }, index) => (
            <div key={title} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/10 md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r">
              <span className="text-sm font-medium text-[#86868b]">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold text-[#f5f5f7]">{title}</h3>
              <p className="mt-3 max-w-sm text-base leading-7 text-[#a1a1a6]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
