import { ArrowUpRight, Gauge, MessageSquareText, ShieldCheck } from 'lucide-react';

const principles = [
  { icon: ShieldCheck, title: 'Build confidence', text: 'Show visitors why your business is the right choice.' },
  { icon: Gauge, title: 'Keep it fast', text: 'Make every page feel smooth on any screen.' },
  { icon: MessageSquareText, title: 'Make contact easy', text: 'Help customers call or request a quote without friction.' },
];

export default function Credibility() {
  return (
    <section className="border-b border-white/10 bg-[#0d0e13] py-16 sm:py-20" data-testid="section-credibility">
      <div className="page-gutter">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.22em] text-[#a99aff]">Why the details matter</p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">A better website should do more than look better.</h2>
          </div>
          <a href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c2b9ff] hover:text-white">Explore our approach <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-7">
              <div className="mb-8 flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl border border-[#765EFF]/25 bg-[#765EFF]/10 text-[#aa9bff]"><Icon size={20} /></span><span className="text-xs text-[#687386]">0{index + 1}</span></div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#9ca7b8]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
