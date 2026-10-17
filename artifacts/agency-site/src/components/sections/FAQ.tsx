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
    <Section id="faq" className="bg-[#111113] py-20 md:py-32" data-testid="section-faq">
      <div className="page-gutter">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold text-[#8f7cff]">Frequently asked questions</p>
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#f5f5f7] md:text-6xl">Straight answers to practical questions.</h2>
          <p className="mt-6 text-lg text-[#a1a1a6]">
            What to expect when you work with Vertex Digital.
          </p>
        </div>

        <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl border-t border-white/10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/6">
              <AccordionTrigger className="min-h-16 py-5 text-left text-base font-semibold text-[#f5f5f7] hover:text-[#b8adff] hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-7 text-[#a1a1a6]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
