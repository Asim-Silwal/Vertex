import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Star } from 'lucide-react';
import test1Img from "@assets/testimonial-1.jpg";
import test2Img from "@assets/testimonial-2.jpg";
import test3Img from "@assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "The process felt thoughtful from day one. We had a clear direction, a polished design language, and a final website that finally matched the quality of the business behind it.",
    author: "Founder",
    role: "Services Brand",
    image: test1Img
  },
  {
    quote: "They understood both the product and the audience. The design feels premium without losing clarity, which made the final experience feel more confident and easier to trust.",
    author: "Product Lead",
    role: "Digital Business",
    image: test2Img
  },
  {
    quote: "Working with Vertex Digital felt like bringing on a strategic design partner. We ended up with a site that communicates our value clearly and creates a much stronger first impression.",
    author: "Marketing Director",
    role: "Modern Brand",
    image: test3Img
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-24 bg-[#0A0A0A]" data-testid="section-testimonials">
      <div className="page-gutter">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What Our Clients Say.</h2>
          <p className="text-[#666] text-lg">
            Hear from the owners and operators who trusted us to rebuild their digital foundation.
          </p>
        </div>

        <FadeInStagger className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} className="h-full">
              <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/6 h-full flex flex-col">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-[#765EFF] fill-[#765EFF]" />
                  ))}
                </div>
                
                <p className="text-white/90 text-base leading-relaxed mt-4 mb-6 italic flex-1">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={t.image} 
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="font-medium text-white text-sm">{t.author}</div>
                    <div className="text-[#666] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Section>
  );
}
