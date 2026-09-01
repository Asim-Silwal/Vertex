import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import webdesignImg from '@assets/service-webdesign.jpg';
import seoImg from '@assets/service-seo.jpg';
import croImg from '@assets/service-cro.jpg';
import reviewsImg from '@assets/service-reviews.jpg';

const services = [
  {
    id: '01',
    label: 'BRANDING',
    title: 'Distinctive brands that build recognition.',
    description: 'Build a distinctive visual identity that makes your business recognizable and memorable.',
    image: webdesignImg,
    alt: 'Brand identity and visual direction',
  },
  {
    id: '02',
    label: 'UI/UX DESIGN',
    title: 'Interfaces designed for clarity and confidence.',
    description: 'Design intuitive digital experiences that look great and make complex products easier to use.',
    image: seoImg,
    alt: 'UI and UX design process',
  },
  {
    id: '03',
    label: 'WEB DESIGN & DEVELOPMENT',
    title: 'High-impact websites built around goals.',
    description: 'Create fast, responsive websites designed around your business goals and users.',
    image: croImg,
    alt: 'Website design and development',
  },
  {
    id: '04',
    label: 'APP DEVELOPMENT',
    title: 'Digital products built to be useful and scalable.',
    description: 'Turn digital product ideas into functional mobile and web applications.',
    image: reviewsImg,
    alt: 'Application design and product development',
  },
];

export default function Services() {
  return (
    <Section id="services" className="py-24 bg-[#0A0A0A]" data-testid="section-services">
      <div className="page-gutter">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="rounded-full border border-[#765EFF]/20 bg-[#765EFF]/10 px-3 py-1 text-xs font-medium text-[#765EFF]">
              What We Build
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Design. Development.<br />
            <span className="text-[#8B95A4]">Digital growth.</span>
          </h2>
          <p className="max-w-2xl text-lg text-[#A5AEBD]">
            Vertex Digital helps businesses turn ideas into modern digital experiences through strategy, design, technology, and practical execution.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <motion.div
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D] p-6 transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_0_30px_rgba(118,94,255,0.08)]"
              >
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/8 bg-[#111111]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-48 w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#8F7CFF]">{service.id}</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9AA3B2]">{service.label}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A3ACB9] md:text-base">{service.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
