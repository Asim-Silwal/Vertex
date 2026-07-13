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
    <Section id="faq" className="py-24 bg-[#070707]" data-testid="section-faq">
      <div className="page-gutter">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Got Questions.</h2>
          <p className="text-[#666] text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/6">
              <AccordionTrigger className="text-white font-medium text-base py-5 hover:text-[#765EFF] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#666] text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
