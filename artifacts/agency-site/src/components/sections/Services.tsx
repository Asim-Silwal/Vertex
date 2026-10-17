import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const services = [
  {
    id: '01',
    label: 'POSITIONING & CONTENT',
    title: 'Clarify why customers should choose you.',
    description: 'Shape your offer, page structure, and core messaging around the questions customers ask before they get in touch.',
    image: '/work/usa-desktop.png',
    alt: 'USA Storm Roofing website designed and built by Vertex Digital',
    deliverables: ['Offer clarity', 'Page strategy', 'Core messaging'],
  },
  {
    id: '02',
    label: 'WEB DESIGN',
    title: 'Turn credibility into a premium visual experience.',
    description: 'Design a distinctive website that makes your business feel established, capable, and easy to understand.',
    image: '/work/painting-desktop.png',
    alt: 'Painting Service Nepal website designed and built by Vertex Digital',
    deliverables: ['User journeys', 'Responsive layouts', 'Design system'],
  },
  {
    id: '03',
    label: 'WEB DEVELOPMENT',
    title: 'Build it fast, responsive, and ready to grow.',
    description: 'Turn the approved design into a reliable website that works smoothly across devices and is easy to maintain.',
    image: '/work/jireh-desktop.png',
    alt: 'Jireh Roofing website designed and built by Vertex Digital',
    deliverables: ['Responsive build', 'Performance', 'Easy updates'],
  },
  {
    id: '04',
    label: 'LAUNCH & SUPPORT',
    title: 'Launch with confidence and keep improving.',
    description: 'Handle final checks, deployment, updates, and practical improvements after the website goes live.',
    image: '/work/pnwx-desktop.png',
    alt: 'Pacific Northwest Imaging Collective website designed and built by Vertex Digital',
    deliverables: ['Launch checks', 'Deployment', 'Ongoing updates'],
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-[#111113] py-20 md:py-32" data-testid="section-services">
      <div className="page-gutter">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold text-[#765EFF]">What We Do</p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#f5f5f7] md:text-6xl">
            Strategy. Design.<br />
            <span className="text-[#a1a1a6]">Development.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#a1a1a6]">One focused team from the first idea to the final launch.</p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <div
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1d1d1f] p-5 transition-transform duration-200 hover:-translate-y-0.5 md:p-6"
              >
                <div className="mb-7 overflow-hidden rounded-[1.25rem] bg-[#2c2c2e]">
                  <img src={service.image} alt={service.alt} className="aspect-[3/2] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]" loading="lazy" decoding="async" />
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => <span key={item} className="rounded-lg bg-[#2c2c2e] px-3 py-1.5 text-[11px] font-medium text-[#d2d2d7]">{item}</span>)}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#765EFF]">{service.id}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">{service.label}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[#f5f5f7]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#a1a1a6] md:text-base">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
