import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'wouter';
import whiteLogo from '@assets/White Logo.png';
import PageMeta from '@/components/seo/page-meta';

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  canonicalPath: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  description,
  updatedAt,
  canonicalPath,
  sections,
}: LegalPageProps) {
  const businessEmail = 'verted.d10@gmail.com';

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <PageMeta
        title={`${title} | Vertex Digital`}
        description={description}
        canonicalPath={canonicalPath}
        noIndex
        removeStructuredData
      />

      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white">
            <img src={whiteLogo} alt="Vertex Digital logo" className="h-8 w-auto" />
            <span>Vertex Digital</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(118,94,255,0.18),transparent_60%)]" />

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-10">
          <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8F7CFF]">Last updated {updatedAt}</p>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="max-w-3xl text-base leading-7 text-[#C7CEDA] md:text-lg">{description}</p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="space-y-4">
                <h2 className="text-xl font-semibold text-white md:text-2xl">{section.title}</h2>
                <div className="space-y-4 text-sm leading-7 text-[#C7CEDA] md:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="space-y-3 pl-5 text-sm leading-7 text-[#C7CEDA] md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm leading-7 text-[#C7CEDA]">
              Questions about these policies? Email us at{' '}
              <a className="inline-flex items-center gap-2 font-medium text-white transition hover:text-[#8F7CFF]" href={`mailto:${businessEmail}`}>
                <Mail size={16} />
                {businessEmail}
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}