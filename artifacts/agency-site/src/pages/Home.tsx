import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import Industries from '@/components/sections/Industries';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { CursorGlow } from '@/components/ui/cursor-glow';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="Vertex Digital — Websites for Home Service Businesses"
        description="Vertex Digital builds clear, fast websites for home service businesses that need to earn trust and turn visitors into calls and quote requests."
        canonicalPath="/"
      />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Credibility />
        <Industries />
        <Services />
        <CaseStudies />
        <WhyUs />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
