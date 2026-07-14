import CaseStudyPage, { type CaseStudyPageData } from '@/components/sections/CaseStudyPage';
import originalHeroImage from '@assets/usa-storm-original-hero.webp';
import redesignHeroImage from '@assets/usa-storm-redesign-hero.jpg';
import redesignHomeImage from '@assets/usa-storm-redesign-home.jpg';
import redesignStormImage from '@assets/usa-storm-redesign-storm.jpg';

const caseStudy: CaseStudyPageData = {
  title: 'USA Storm Roofing',
  subtitle:
    'An independent concept redesign focused on trust, clarity, and a stronger inquiry path for a storm restoration and exterior services brand.',
  description:
    'This dedicated case study documents a portfolio redesign concept created independently for USA Storm Roofing. It reimagines the public homepage and supporting sections to better serve homeowners who need fast, credible guidance after storm damage or when planning exterior work.',
  projectType: 'Independent Website Redesign',
  industry: 'Roofing / Storm Restoration',
  overview:
    'The redesign reframes the homepage around a clearer message hierarchy, stronger trust cues, and a simpler path to request help. It keeps the premium dark visual language while making the offer, service scope, and next step easier to understand at a glance.',
  challenge:
    'The original site had strong production value, but the information structure could better support urgent homeowner visits. A visitor looking for storm response or roof replacement needs to understand credibility, service range, and how to act within seconds.',
  designGoals: [
    'Clarify the core offer as soon as the page loads.',
    'Surface trust signals without crowding the layout.',
    'Make the inspection and contact path feel immediate.',
    'Keep the premium exterior-brand look while improving clarity.',
  ],
  researchProcess: [
    'Reviewed the original homepage structure and identified which messages were appearing too late in the scroll.',
    'Looked at homeowner behavior patterns for storm-damage and exterior service visits, where speed and trust matter most.',
    'Compared the layout against premium service brands to refine spacing, hierarchy, and CTA placement.',
  ],
  uxImprovements: [
    'Moved the value proposition and conversion action higher on the page.',
    'Grouped service-related content so visitors can scan the offer faster.',
    'Reduced decision friction by using clearer section labels and focused supporting copy.',
    'Kept the primary contact path visible throughout the experience.',
  ],
  uiImprovements: [
    'Used stronger contrast separation for cards, previews, and supporting panels.',
    'Refined the dark palette with a cleaner accent rhythm for a more premium feel.',
    'Kept typography restrained and structured so the page reads more confidently.',
    'Preserved the existing motion language while keeping the interface calm and minimal.',
  ],
  designDecisions: [
    {
      title: 'Hero layout',
      description:
        'The hero was structured to communicate value, trust, and next action in one view so urgent visitors can decide quickly without extra scrolling.',
    },
    {
      title: 'CTA placement',
      description:
        'Primary and repeated CTAs were placed near high-intent moments to reduce hesitation and keep the inquiry path visible throughout the page.',
    },
    {
      title: 'Typography choices',
      description:
        'Type scale and spacing were tightened to create a clearer reading hierarchy, helping homeowners scan key points faster during time-sensitive decisions.',
    },
    {
      title: 'Color choices',
      description:
        'The dark premium palette was retained for brand continuity, while accent usage was made more deliberate to highlight actions and separate content zones.',
    },
    {
      title: 'Card layouts',
      description:
        'Card groupings were used to break complex information into short, scannable units so trust cues and service details are easier to absorb at a glance.',
    },
    {
      title: 'Mobile navigation',
      description:
        'Navigation and tap targets were simplified for small screens to support one-handed use and faster movement between proof, services, and contact actions.',
    },
    {
      title: 'Service presentation',
      description:
        'Services were reorganized by homeowner intent so storm response and exterior work feel clearer, reducing confusion about what help is available.',
    },
    {
      title: 'Lead generation improvements',
      description:
        'Content order was designed to move from problem to reassurance to action, increasing readiness to submit an inquiry without adding form friction.',
    },
    {
      title: 'Trust-building improvements',
      description:
        'Trust signals were surfaced earlier and repeated with restraint so credibility is felt continuously rather than appearing only in later sections.',
    },
  ],
  mobileFirstApproach: [
    'Stacked the hero content so the main message stays readable on small screens.',
    'Kept CTA targets large enough for easy tapping without adding visual noise.',
    'Used card-based content blocks that collapse cleanly on mobile.',
    'Maintained clear spacing and line lengths so the page stays easy to scan on phones.',
  ],
  beforeAfterComparison: {
    beforeLabel: 'Before',
    beforeDescription: 'Original website: https://usastormroofing.com/',
    beforeImage: originalHeroImage,
    beforeImageAlt: 'Original USA Storm Roofing website homepage screenshot',
    afterLabel: 'After',
    afterDescription: 'Redesign: https://usa-storm-roofin.vercel.app/',
    afterImage: redesignHeroImage,
    afterImageAlt: 'USA Storm Roofing redesigned website homepage screenshot',
    rows: [
      {
        label: 'Visual hierarchy',
        original: 'The original layout spreads attention across multiple areas with less emphasis on the primary next step.',
        redesign: 'The redesign gives the headline, supporting proof, and primary CTA a clearer visual order.',
      },
      {
        label: 'Typography',
        original: 'The original presentation feels more evenly weighted, so the message hierarchy is less immediate.',
        redesign: 'The redesign uses stronger contrast in type scale and spacing to make the message easier to scan.',
      },
      {
        label: 'Color system',
        original: 'The original color treatment is serviceable but less deliberate in how it separates content areas.',
        redesign: 'The redesign uses a tighter dark palette with a more consistent accent rhythm and clearer panel separation.',
      },
      {
        label: 'Mobile responsiveness',
        original: 'The original site reads as a broader desktop-first composition before collapsing to smaller screens.',
        redesign: 'The redesign is structured with stacked sections and larger touch targets so it stays easier to read on mobile.',
      },
      {
        label: 'CTA placement',
        original: 'The original call to action is not as visually anchored to the first impression of the page.',
        redesign: 'The redesign places the main CTA near the top and repeats the path to action in a more obvious way.',
      },
      {
        label: 'Trust building',
        original: 'The original presentation provides brand context, but the trust cues are less layered across the page.',
        redesign: 'The redesign brings service framing, visual proof, and explanatory content together earlier in the journey.',
      },
      {
        label: 'User experience',
        original: 'The original experience feels more exploratory, with less guidance around what to read first.',
        redesign: 'The redesign leads the visitor through a clearer path from problem to proof to action.',
      },
      {
        label: 'Conversion focus',
        original: 'The original page puts more emphasis on presentation than on the immediate contact path.',
        redesign: 'The redesign keeps the contact path visible while reducing hesitation around the next step.',
      },
      {
        label: 'Overall usability',
        original: 'The original site is polished, but key information is distributed more evenly instead of being prioritized.',
        redesign: 'The redesign is easier to navigate quickly because the layout, spacing, and sections work as a more deliberate sequence.',
      },
    ],
  },
  keyFeatures: [
    {
      title: 'Clearer navigation',
      description:
        'Navigation labels and section flow were simplified so visitors can locate services, proof, and contact paths faster.',
    },
    {
      title: 'Stronger visual hierarchy',
      description:
        'Headline, supporting proof, and primary actions are visually prioritized with clearer spacing and contrast.',
    },
    {
      title: 'Better readability',
      description:
        'Type scale, line length, and paragraph rhythm were tightened to improve scan speed across key sections.',
    },
    {
      title: 'Improved mobile experience',
      description:
        'Content stacks more cleanly on small screens with clearer touch targets and less visual crowding.',
    },
    {
      title: 'Better CTA placement',
      description:
        'Primary and supporting CTAs are placed near high-intent content so the next step stays obvious throughout the page.',
    },
    {
      title: 'Cleaner service presentation',
      description:
        'Service content is grouped into scannable blocks that reduce ambiguity between storm response and exterior work.',
    },
    {
      title: 'Stronger brand consistency',
      description:
        'The redesign keeps the established dark premium aesthetic while applying accent color and card styling more consistently.',
    },
    {
      title: 'Improved trust signals',
      description:
        'Credibility cues are introduced earlier and repeated with restraint to reinforce confidence during the browsing journey.',
    },
  ],
  gallery: [
    {
      title: 'Homepage hero',
      description: 'Primary redesign view.',
      image: redesignHeroImage,
      imageAlt: 'USA Storm Roofing redesigned homepage hero',
    },
    {
      title: 'Residential framing',
      description: 'Warmer, trust-led composition.',
      image: redesignHomeImage,
      imageAlt: 'USA Storm Roofing redesigned residential home concept',
    },
    {
      title: 'Storm response',
      description: 'Urgency with clearer contrast.',
      image: redesignStormImage,
      imageAlt: 'USA Storm Roofing redesigned storm response concept',
    },
  ],
  technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'wouter', 'TypeScript', 'Lucide React'],
  liveRedesignHref: 'https://usa-storm-roofin.vercel.app/',
  liveRedesignLabel: 'View live redesign',
  originalWebsiteHref: 'https://usastormroofing.com/',
  originalWebsiteLabel: 'View original website',
  disclaimer:
    'This case study is an independent redesign created for portfolio purposes only. Vertex Digital is not affiliated with, endorsed by, or hired by USA Storm Roofing for this project.',
  summary: [
    { label: 'Project type', value: 'Independent concept redesign' },
    { label: 'Industry', value: 'Roofing and storm restoration' },
    { label: 'Focus', value: 'Trust, clarity, conversion' },
    { label: 'Deliverable', value: 'Homepage and supporting concept system' },
  ],
  canonicalPath: '/case-studies/usa-storm-roofing',
};

export default function USAStormRoofingCaseStudy() {
  return <CaseStudyPage caseStudy={caseStudy} />;
}