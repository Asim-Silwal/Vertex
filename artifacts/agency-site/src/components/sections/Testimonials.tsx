import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Star } from 'lucide-react';
import test1Img from "@assets/testimonial-1.jpg";
import test2Img from "@assets/testimonial-2.jpg";
import test3Img from "@assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "We were spending $5k/month on Google Ads sending traffic to a template website. Vertex Digital rebuilt the site and our conversion rate went from 2% to 8%. We're booking an extra 15 roof replacements a month from the exact same ad spend.",
    author: "James Mitchell",
    role: "Apex Roofing Co.",
    image: test1Img
  },
  {
    quote: "They don't just know web design, they know the HVAC business. The new site highlights our emergency service and financing options perfectly. The ROI was realized in the first two weeks of launch.",
    author: "Sarah Jenkins",
    role: "Climate Masters",
    image: test2Img
  },
  {
    quote: "Finally, an agency that actually delivers. Our old site looked like it was from 2005. Vertex Digital gave us a digital presence that matches the quality of our actual plumbing work. It's night and day.",
    author: "David Chen",
    role: "Precision Flow",
    image: test3Img
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-24 bg-[#0A0A0A]" data-testid="section-testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What Our Clients Say.</h2>
          <p className="text-[#666] text-lg">
            Hear from the owners and operators who trusted us to rebuild their digital foundation.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
