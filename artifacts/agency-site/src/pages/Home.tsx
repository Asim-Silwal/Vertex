import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import Industries from '@/components/sections/Industries';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import VisualCTA from '@/components/sections/VisualCTA';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="Vertex Digital | Premium Websites for Home Service Businesses"
        description="Vertex Digital designs and builds premium websites for home service businesses that need clearer positioning, stronger trust, and more qualified inquiries."
        canonicalPath="/"
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Credibility />
        <Industries />
        <Services />
        <CaseStudies />
        <VisualCTA />
        <WhyUs />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
