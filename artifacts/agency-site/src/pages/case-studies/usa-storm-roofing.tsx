import CaseStudyPage, { type CaseStudyPageData } from '@/components/sections/CaseStudyPage';
import heroImage from '@assets/usa-storm-roofing-hero.jpg';
import homeImage from '@assets/usa-storm-roofing-home.jpg';
import stormImage from '@assets/usa-storm-roofing-storm.jpg';
import afterLiveImage from '@assets/usa-storm-roofing-after-live.png';
import beforeLiveImage from '@assets/usa-storm-roofing-before-live.png';
import screenshotImage from '@assets/usa-storm-roofing-screenshot.jpg';

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
  mobileFirstApproach: [
    'Stacked the hero content so the main message stays readable on small screens.',
    'Kept CTA targets large enough for easy tapping without adding visual noise.',
    'Used card-based content blocks that collapse cleanly on mobile.',
    'Maintained clear spacing and line lengths so the page stays easy to scan on phones.',
  ],
  beforeAfterComparison: {
    beforeLabel: 'Before',
    beforeDescription: 'Original website: https://usastormroofing.com/',
    beforeImage: beforeLiveImage,
    beforeImageAlt: 'Original USA Storm Roofing website homepage screenshot',
    afterLabel: 'After',
    afterDescription: 'Redesign: https://usa-storm-roofin.vercel.app/',
    afterImage: afterLiveImage,
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
      title: 'Trust-led homepage framing',
      description:
        'The redesigned concept surfaces credibility, service scope, and conversion intent in the first screenful.',
    },
    {
      title: 'Clear homeowner journey',
      description:
        'The page sequence follows the way a homeowner actually looks for help: problem, proof, service, and action.',
    },
    {
      title: 'Service-focused content blocks',
      description:
        'Supporting sections are organized so roofing, storm response, and exterior services are easy to scan.',
    },
    {
      title: 'Premium but restrained execution',
      description:
        'The interface keeps the existing brand direction while tightening spacing, contrast, and hierarchy.',
    },
  ],
  gallery: [
    {
      title: 'Hero concept',
      description: 'The primary homepage view emphasizes the home, the roofline, and the premium storm-ready tone.',
      image: heroImage,
      imageAlt: 'USA Storm Roofing redesign hero concept',
    },
    {
      title: 'Residential trust framing',
      description: 'A warmer sunset composition supports the premium, high-confidence positioning of the redesign.',
      image: homeImage,
      imageAlt: 'USA Storm Roofing redesign home concept',
    },
    {
      title: 'Storm-response framing',
      description: 'The darker weather treatment reinforces urgency without sacrificing the polished visual language.',
      image: stormImage,
      imageAlt: 'USA Storm Roofing redesign storm concept',
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