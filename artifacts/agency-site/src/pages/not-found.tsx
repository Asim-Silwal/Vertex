import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'wouter';
import PageMeta from '@/components/seo/page-meta';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <PageMeta
        title="Page Not Found | Vertex Digital"
        description="The page you requested could not be found. Return to Vertex Digital's homepage or explore the site."
        canonicalPath={window.location.pathname}
        noIndex
        removeStructuredData
      />

      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-16 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(118,94,255,0.16),transparent_55%)]" />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#8F7CFF]">
              <Home className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8F7CFF]">404</p>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Page Not Found</h1>
              <p className="max-w-2xl text-sm leading-7 text-[#C7CEDA] md:text-base">
                The page you requested does not exist. You can return to the homepage or go back to the previous page.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8F7CFF]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:border-white/30"
              >
                Contact Vertex Digital
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
