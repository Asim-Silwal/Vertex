import CaseStudyPage, { type CaseStudyPageData } from '@/components/sections/CaseStudyPage';
import paintingServicePreview from '/Print_Service_Nepal.png';

export const paintingServiceCaseStudy: CaseStudyPageData = {
  title: 'A Modern Digital Presence Built to Turn Local Searches Into Customers.',
  subtitle:
    'A modern, conversion-focused website designed for a professional painting service, built to establish trust, showcase services, and turn visitors into potential customers.',
  description:
    'A modern, conversion-focused website designed and developed by Vertex Digital for a professional painting service. The experience focuses on trust, service clarity, and a stronger path to inquiry without overwhelming the visitor.',
  projectType: 'Web Design & Development / UI/UX / Conversion-Focused Website',
  industry: 'Professional Services',
  overview:
    'We designed and developed a modern website for a professional painting service looking to build a stronger online presence. The goal was simple: make the business look trustworthy, communicate its services clearly, and make it effortless for potential customers to take the next step. Instead of overwhelming visitors with information, the experience focuses on strong visual hierarchy, clear service presentation, trust-building elements, and strategically placed calls to action.',
  challenge:
    'The painting industry is highly competitive, especially for local businesses competing for customers through Google and social media. The website needed to establish credibility within seconds, clearly communicate services, showcase the quality of the business, work seamlessly across mobile and desktop, guide visitors toward requesting a quote, and present the company as professional rather than generic.',
  designGoals: [
    'Establish credibility within seconds.',
    'Clearly communicate available services.',
    'Showcase the quality of the business.',
    'Keep the experience polished across mobile and desktop.',
    'Guide visitors toward requesting a quote with clarity.',
  ],
  researchProcess: [
    'Reviewed the local service website category and identified the most common trust gaps and decision barriers for customers searching for painting companies.',
    'Focused the structure around how visitors typically evaluate a service business: credibility, quality, services, and next-step clarity.',
    'Balanced conversion-focused layout decisions with a premium, modern presentation that still feels professional and trustworthy.',
  ],
  uxImprovements: [
    'Moved the primary value proposition and call to action higher in the journey.',
    'Structured services so visitors can scan the offer quickly without friction.',
    'Reduced hesitation by emphasizing trust-building content and client confidence cues.',
    'Made the inquiry path feel immediate and easier to understand.',
  ],
  uiImprovements: [
    'Used modern typography and stronger contrast to establish a premium visual tone.',
    'Introduced clear service cards and large visual sections to improve readability.',
    'Applied subtle motion and interaction to add polish without distracting from the main goal.',
    'Kept the layout responsive and calm so the page feels professional on every screen size.',
  ],
  designDecisions: [
    {
      title: 'Attention → Trust → Services → Value → Action',
      description:
        'The interface was designed around a simple conversion hierarchy so visitors can understand the business quickly and move toward the next step without friction.',
    },
    {
      title: 'Clean service presentation',
      description:
        'Service offerings were organized into clear sections to help visitors understand the value and scope of the business at a glance.',
    },
    {
      title: 'Conversion-focused CTA strategy',
      description:
        'Calls to action were placed strategically through the experience to support customer action without feeling aggressive or intrusive.',
    },
    {
      title: 'Responsive, premium layout system',
      description:
        'The design balances modern visual treatment with practical readability, maintaining clarity on desktop, tablet, and mobile devices.',
    },
  ],
  mobileFirstApproach: [
    'Stacked content to preserve readability and hierarchy on smaller screens.',
    'Kept call-to-action areas large enough to tap comfortably and quickly.',
    'Used compact card structures and spacing to maintain scanability across devices.',
    'Preserved the premium look without sacrificing clarity or speed.',
  ],
  keyFeatures: [
    {
      title: 'Responsive design',
      description: 'Optimized for desktop, tablet, and mobile experiences so the business presents consistently across devices.',
    },
    {
      title: 'Service presentation',
      description: 'Services are organized into clear sections so visitors can quickly understand what the business offers.',
    },
    {
      title: 'Conversion-focused CTAs',
      description: 'Calls to action are strategically positioned throughout the experience to encourage inquiries.',
    },
    {
      title: 'Trust-building sections',
      description: 'Content structure reinforces professionalism and helps reduce hesitation before contacting the business.',
    },
    {
      title: 'Modern interactions',
      description: 'Subtle motion and transitions create a polished experience without distracting from the main purpose.',
    },
  ],
  finalOutcome: [
    'The project demonstrates how a traditional local service business can be presented through a modern, conversion-focused digital experience.',
    'Rather than simply creating another service website, we built an interface designed around how potential customers evaluate a business: does this company look professional, can they do what I need, can I trust them, and how do I contact them?',
    'The result is a stronger, clearer digital presence that better supports trust and action.',
  ],
  summary: [
    { label: 'Project type', value: 'Web design & development' },
    { label: 'Industry', value: 'Painting and home services' },
    { label: 'Focus', value: 'Trust, clarity, conversion' },
    { label: 'Deliverable', value: 'Responsive conversion-focused website' },
  ],
  technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'wouter', 'Lucide React'],
  gallery: [
    {
      title: 'Service business homepage',
      description: 'Modern trust-building layout and conversion-focused structure.',
      image: paintingServicePreview,
      imageAlt: 'Painting Service Nepal business website preview',
    },
  ],
  liveRedesignHref: 'https://paintingservice.lovable.app/',
  liveRedesignLabel: 'View live project',
  canonicalPath: '/case-studies/painting-service',
};

export default function PaintingServiceCaseStudy() {
  return <CaseStudyPage caseStudy={paintingServiceCaseStudy} />;
}
