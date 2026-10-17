import { ArrowUpRight } from 'lucide-react';

const footerCards = [
  {
    number: '01',
    title: 'Clear positioning',
    text: 'Shape the offer, page structure, and message around what customers need to understand before they get in touch.',
  },
  {
    number: '02',
    title: 'Considered design',
    text: 'Create a distinctive visual system that makes the business feel credible, established, and easy to trust.',
  },
  {
    number: '03',
    title: 'Reliable development',
    text: 'Build a fast, responsive website that works smoothly across devices and remains practical to maintain.',
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessEmail = 'vertex.d10@gmail.com';

  return (
    <footer className="overflow-hidden border-t border-white/10 bg-[#111113]" data-testid="section-footer">
      <div className="page-gutter pt-20 text-center md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f7cff]">Your website, thoughtfully made</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] text-[#f5f5f7] md:text-7xl">
          Build a website worth choosing.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#a1a1a6]">
          One focused process from the first business question to the final responsive build.
        </p>

        <div className="mt-12 grid gap-3 text-left md:grid-cols-3">
          {footerCards.map((card) => (
            <article key={card.number} className="min-h-56 rounded-xl border border-white/10 bg-[#1d1d1f] p-6 md:p-7">
              <span className="text-xs font-semibold text-[#8f7cff]">{card.number}</span>
              <h3 className="mt-10 text-2xl font-normal text-[#f5f5f7]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#a1a1a6]">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#765EFF] px-7 text-sm font-semibold text-white hover:bg-[#8F7CFF]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${businessEmail}`}
            className="inline-flex min-h-11 items-center text-sm font-medium text-[#d2d2d7] underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-[#8f7cff]"
          >
            {businessEmail}
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-2 text-xs text-[#8B95A4] sm:flex-row sm:gap-5">
          <span>© {currentYear} Vertex Digital</span>
          <a href="/terms" className="inline-flex min-h-11 items-center hover:text-white">Terms of Service</a>
          <a href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">Privacy Policy</a>
        </div>

        <div aria-hidden="true" className="mt-4 translate-y-[0.12em] font-display text-[clamp(4.5rem,11.3vw,9rem)] font-normal leading-[0.72] tracking-[-0.065em] text-[#f5f5f7] opacity-[0.32]">
          <span className="block md:inline">VERTEX</span>{' '}
          <span className="block text-[#765EFF] md:inline">DIGITAL</span>
        </div>
      </div>
    </footer>
  );
}
