import { FadeIn, FadeInStagger, Section } from '@/components/ui/section';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We were spending $5k/month on Google Ads sending traffic to a template website. Osprey rebuilt the site and our conversion rate went from 2% to 8%. We're booking an extra 15 roof replacements a month from the exact same ad spend.",
    author: "James Mitchell",
    role: "Owner, Apex Roofing Co.",
    rating: 5,
    initials: "JM"
  },
  {
    quote: "They don't just know web design, they know the HVAC business. The new site highlights our emergency service and financing options perfectly. The ROI was realized in the first two weeks of launch.",
    author: "Sarah Jenkins",
    role: "CMO, Climate Masters",
    rating: 5,
    initials: "SJ"
  },
  {
    quote: "Finally, an agency that actually delivers. Our old site looked like it was from 2005. Osprey gave us a digital presence that matches the quality of our actual plumbing work. It's night and day.",
    author: "David Chen",
    role: "Founder, Precision Flow",
    rating: 5,
    initials: "DC"
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-24" data-testid="section-testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Take Our Word For It.</h2>
          <p className="text-muted-foreground text-lg">
            Hear from the owners and operators who trusted us to rebuild their digital foundation.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i}>
              <div className="bg-card border border-border p-8 rounded-2xl relative h-full flex flex-col hover:border-primary/30 transition-colors">
                <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={18} className="text-[#10B981] fill-[#10B981]" />
                  ))}
                </div>
                
                <p className="text-foreground text-lg leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center font-display font-bold text-muted-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
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
