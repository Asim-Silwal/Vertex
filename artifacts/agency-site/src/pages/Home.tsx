import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import Industries from '@/components/sections/Industries';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
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
        title="Vertex Digital — Digital Design, Development & Growth"
        description="Vertex Digital creates modern brands, websites, applications, and digital experiences designed to help businesses grow."
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
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
