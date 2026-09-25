export type PortfolioProject = {
  slug: string; name: string; category: string; location: string; headline: string;
  description: string; url: string; image: string; detail: string; mobile: string; color: string;
  scope: string[]; challenge: string; approach: string;
  decisions: { title: string; text: string }[]; detailCaption: string; outcome: string;
};
export const projects: PortfolioProject[] = [
  {
    slug: 'usa-storm-roofing', name: 'USA Storm Roofing', category: 'Roofing & exterior restoration', location: 'Virginia, Maryland & Washington, DC',
    headline: 'A reassuring first impression. A clear next step.',
    description: 'An editorial website redesign that brings roofing, storm restoration, and exterior services into one clear homeowner journey.',
    url: 'https://usa-storm-roofin.vercel.app/', image: '/work/usa-desktop.png', detail: '/work/usa-detail.png', mobile: '/work/usa-mobile.png', color: '#dfe6db',
    scope: ['Website strategy', 'UI/UX design', 'Responsive development'],
    challenge: 'A homeowner considering roof repairs needs to understand the service area, available work, and how to request an inspection quickly. The design brief was to give those essentials a clear hierarchy while making an often stressful purchase feel approachable.',
    approach: 'We built the page around a simple sequence: understand the offer, explore exterior services, learn how the team works, and make contact. The first screen pairs a homeowner-focused message with a large roof photograph and an inspection call to action.',
    decisions: [
      { title: 'Confidence through restraint', text: 'Warm off-white backgrounds, forest-green accents, and generous spacing create a calm visual direction. Large architectural imagery gives the work context without crowding the message.' },
      { title: 'Services before complexity', text: 'Roof replacement, storm restoration, and siding and gutters each receive a distinct card. Short descriptions help visitors choose a direction before reaching the inquiry section.' },
      { title: 'A visible route to contact', text: 'Inspection links appear in the navigation, hero, and closing section. Click-to-call links offer a direct alternative, while the inquiry form groups the essential project details.' },
    ],
    detailCaption: 'Three clear entry points into the roofing and exterior offer.',
    outcome: 'The finished concept brings the service area, core offer, process, and inspection request into a cohesive single-page experience. The live demonstration shows the design and navigation; no lead-generation or revenue results are claimed.',
  },
  {
    slug: 'painting-service', name: 'Painting Service Nepal', category: 'Residential & commercial painting', location: 'Kathmandu Valley, Nepal',
    headline: 'Helping people picture what comes next.',
    description: 'A warm, image-led painting website with clear service pages, a room visualizer, and an easy route to a quote.',
    url: 'https://painting-service-nepal.vercel.app/', image: '/work/painting-desktop.png', detail: '/work/painting-detail.png', mobile: '/work/painting-mobile.png', color: '#e9e0d4',
    scope: ['Visual direction', 'Website design', 'Interactive experience'],
    challenge: 'Painting is both a practical service and a visual decision. The site needed to explain interior, exterior, texture, and waterproofing options while helping visitors imagine how a finished space could feel.',
    approach: 'We paired a warm editorial homepage with a practical service structure. Interior photography and a softer color palette introduce the brand, while service descriptions, pricing context, and quote links answer the next questions a visitor is likely to ask.',
    decisions: [
      { title: 'A home-first visual language', text: 'Cream, deep green, and terracotta tones sit alongside expressive serif headings and interior photography. The result gives painting a tangible connection to everyday living.' },
      { title: 'Exploration before inquiry', text: 'A dedicated room visualizer lets visitors explore color and finish options. Gallery and service links create additional ways to understand the offering before starting a conversation.' },
      { title: 'Multiple ways to reach out', text: 'Free-quote links, a structured inquiry form, click-to-call, and WhatsApp links give visitors a choice of contact channels. The primary next step stays consistent across the site.' },
    ],
    detailCaption: 'Dedicated service content explains the work and scope before inviting a quote request.',
    outcome: 'The completed portfolio build connects visual inspiration with service information and contact paths across multiple pages. Its live deployment includes the room visualizer; the case study describes the delivered experience rather than unmeasured business results.',
  },
  {
    slug: 'jireh-roofing', name: 'Jireh Roofing', category: 'Residential, commercial & HOA roofing', location: 'South Florida, USA',
    headline: 'Making a broad roofing business easier to explore.',
    description: 'A structured contractor website connecting service categories, project photography, credentials, and estimate requests.',
    url: 'https://jireh-roofing-self.vercel.app/', image: '/work/jireh-desktop.png', detail: '/work/jireh-detail.png', mobile: '/work/jireh-mobile.png', color: '#dce5e8',
    scope: ['Content architecture', 'UI/UX design', 'Multi-page development'],
    challenge: 'Jireh’s offering spans homeowners, commercial buildings, and HOA communities. A single undifferentiated service list would make it difficult for those different audiences to find relevant information and project examples.',
    approach: 'We organized the experience around property types and service needs. A clear homepage introduces the company, with dedicated service and project pages providing depth. Project imagery from the existing business website supports the presentation of the work.',
    decisions: [
      { title: 'Paths for different properties', text: 'Residential, commercial, roof repair, and HOA services have clear entry points. Visitors can move from a broad overview to a page that addresses their property type.' },
      { title: 'Project work as the centerpiece', text: 'A browsable project collection presents roofing imagery with locations and categories. Individual project pages give visitors more context than a generic photo gallery.' },
      { title: 'Useful information at the decision', text: 'Credentials, service areas, frequently asked questions, and estimate links sit within the same information system. Emergency phone contact remains prominent for urgent needs.' },
    ],
    detailCaption: 'A project collection pairs source-site imagery with locations and property categories.',
    outcome: 'The finished redesign gives a complex service business a consistent multi-page structure. Visitors can browse a service, explore relevant work, and reach the estimate page without losing the thread of their search. Performance or sales uplift has not been measured.',
  },
  {
    slug: 'pacific-northwest-x-ray', name: 'Pacific Northwest X-Ray', category: 'Medical imaging equipment & supplies', location: 'Oregon, USA',
    headline: 'A clearer front door for a specialist supplier.',
    description: 'A focused B2B website that makes a technical product range approachable and connects buyers with specialist support.',
    url: 'https://scroll-nav-api-server.vercel.app/', image: '/work/pnwx-desktop.png', detail: '/work/pnwx-detail.png', mobile: '/work/pnwx-mobile.png', color: '#dbe6e7',
    scope: ['Information design', 'Website design', 'Responsive development'],
    challenge: 'Imaging equipment and supplies cover a wide range of technical categories. The design needed to introduce that breadth without making the first visit feel like an overwhelming catalog, and help buyers find a person to discuss their requirements.',
    approach: 'We designed a single-page introduction with persistent section navigation. The content moves from the supplier’s role to its approach, product families, and contact details, keeping the buying conversation at the center of the experience.',
    decisions: [
      { title: 'Technical breadth, organized clearly', text: 'Equipment, radiation protection, accessories, specialty products, and general supplies are presented as distinct groups. Short lists make the range easier to scan.' },
      { title: 'A consultative next step', text: 'The page explains a three-step conversation, selection, and order-planning process. Consultation links lead to phone numbers, location information, and business hours.' },
      { title: 'Connected section navigation', text: 'A persistent header links directly to the major sections. Deep blue-green tones, restrained typography, and clinical imagery provide a consistent visual language.' },
    ],
    detailCaption: 'Product families are grouped into scannable sections instead of an undifferentiated catalog.',
    outcome: 'The completed portfolio concept provides an introduction to the product range and specialist contact channels. It is a marketing website demonstration, not an inventory system or online checkout, and no commercial results are implied.',
  },
];
export const projectPath = (project: PortfolioProject) => `/case-studies/${project.slug}`;
