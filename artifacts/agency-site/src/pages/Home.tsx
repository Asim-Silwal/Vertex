import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import Industries from '@/components/sections/Industries';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Credibility />
        <Industries />
        <Services />
        <Portfolio />
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
