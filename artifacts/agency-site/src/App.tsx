import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/privacy';
import Terms from '@/pages/terms';
import USAStormRoofingCaseStudy from '@/pages/case-studies/usa-storm-roofing';
import PaintingServiceCaseStudy from '@/pages/case-studies/painting-service';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/case-studies/usa-storm-roofing" component={USAStormRoofingCaseStudy} />
      <Route path="/case-studies/painting-service" component={PaintingServiceCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
