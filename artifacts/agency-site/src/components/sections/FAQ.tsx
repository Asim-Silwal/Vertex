import { Section } from '@/components/ui/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a custom website cost?",
    answer: "Our projects typically range from $5,000 to $15,000+, depending on the complexity of the build, the size of your service area, and whether you need custom CRM integrations or advanced local SEO mapping. We provide a firm quote after our initial discovery call."
  },
  {
    question: "How long does it take to launch?",
    answer: "A standard custom build takes 4 to 6 weeks from kickoff to launch. We don't sacrifice quality for speed, but we also stick strictly to our timeline. Delays usually only happen if we are waiting on content or approvals from your team."
  },
  {
    question: "Do you use templates like WordPress or Wix?",
    answer: "No. We build modern, edge-deployed web applications. We use frameworks like React to ensure the site loads instantly, is incredibly secure, and out-performs standard WordPress templates in both speed and search rankings."
  },
  {
    question: "Will this actually get me more leads?",
    answer: "Yes. By optimizing the user experience, improving load times, establishing trust through design, and making it frictionless for homeowners to contact you, your conversion rate will increase. If you are already running ads or have organic traffic, you will see a higher return on that existing traffic."
  },
  {
    question: "Do you write the content?",
    answer: "Yes. We have copywriters who specialize in home services. We write all the service pages, location pages, and value propositions based on the information gathered during discovery to ensure it resonates with homeowners."
  },
  {
    question: "What happens after the site launches?",
    answer: "We offer ongoing support and optimization packages. We handle the hosting, security, and technical maintenance, while also continuously tracking user behavior to make data-driven conversion improvements."
  }
];

export default function FAQ() {
  return (
    <Section id="faq" className="py-24 bg-card/30" data-testid="section-faq">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Common Questions.</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-bold py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
