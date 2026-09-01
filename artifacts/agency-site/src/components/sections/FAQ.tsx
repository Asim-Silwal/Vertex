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
    answer: "Project scope varies based on strategy, design complexity, product requirements, and ongoing support. We’ll outline a clear recommendation after discovery so the plan fits your goals and budget."
  },
  {
    question: "How long does it take to launch?",
    answer: "Most projects take between three and eight weeks depending on scope, stakeholder feedback, and content readiness. We focus on a clear process and a realistic timeline from the beginning."
  },
  {
    question: "Do you build custom solutions or use templates?",
    answer: "We lean into custom builds that are designed for performance, flexibility, and a polished user experience. That gives the product room to grow without feeling limited by generic templates."
  },
  {
    question: "Will this actually help my business?",
    answer: "The goal is to create a digital presence that feels credible, communicates clearly, and supports the actions you want users to take. Better clarity and UX usually improve trust, engagement, and conversion."
  },
  {
    question: "Do you help with content and messaging?",
    answer: "Yes. We can support structure, messaging, and content direction so the site communicates your value clearly and consistently across the customer journey."
  },
  {
    question: "What happens after launch?",
    answer: "We can support refinements, future updates, and ongoing improvements as your brand or product evolves. A website should stay useful long after the initial launch."
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
