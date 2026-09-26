import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';

const services = [
  {
    id: '01',
    label: 'BRANDING',
    title: 'Distinctive brands that build recognition.',
    description: 'Build a distinctive visual identity that makes your business recognizable and memorable.',
    image: '/work/usa-desktop.png',
    alt: 'USA Storm Roofing website designed and built by Vertex Digital',
    deliverables: ['Identity system', 'Brand guidelines', 'Visual direction'],
  },
  {
    id: '02',
    label: 'UI/UX DESIGN',
    title: 'Interfaces designed for clarity and confidence.',
    description: 'Design intuitive digital experiences that look great and make complex products easier to use.',
    image: '/work/painting-desktop.png',
    alt: 'Painting Service Nepal website designed and built by Vertex Digital',
    deliverables: ['User journeys', 'Page layouts', 'Design systems'],
  },
  {
    id: '03',
    label: 'WEB DESIGN & DEVELOPMENT',
    title: 'High-impact websites built around goals.',
    description: 'Create fast, responsive websites designed around your business goals and users.',
    image: '/work/jireh-desktop.png',
    alt: 'Jireh Roofing website designed and built by Vertex Digital',
    deliverables: ['Responsive build', 'Performance', 'Easy updates'],
  },
  {
    id: '04',
    label: 'APP DEVELOPMENT',
    title: 'Digital products built to be useful and scalable.',
    description: 'Turn digital product ideas into functional mobile and web applications.',
    image: '/work/pnwx-desktop.png',
    alt: 'Pacific Northwest Imaging Collective website designed and built by Vertex Digital',
    deliverables: ['Product planning', 'Interface design', 'Development'],
  },
];

export default function Services() {
  return (
    <Section id="services" className="py-24 bg-[#0A0A0A]" data-testid="section-services">
      <div className="page-gutter">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="rounded-md border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium text-[#765EFF]">
              What We Build
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Design. Development.<br />
            <span className="text-[#8B95A4]">Digital growth.</span>
          </h2>
          <p className="max-w-2xl text-lg text-[#A5AEBD]">A clear view of what we can design, build, and deliver for your business.</p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <div
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-6 transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_0_30px_rgba(118,94,255,0.08)]"
              >
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/8 bg-[#171822]">
                  <img src={service.image} alt={service.alt} className="aspect-[3/2] w-full object-cover object-top" loading="lazy" decoding="async" />
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[.04] px-3 py-1.5 text-[11px] text-[#b5becc]">{item}</span>)}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#8F7CFF]">{service.id}</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9AA3B2]">{service.label}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A3ACB9] md:text-base">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
