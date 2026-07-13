import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export type CaseStudyStat = {
  label: string;
  value: string;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudy = {
  projectType: string;
  title: string;
  description: string;
  label: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  stats?: CaseStudyStat[];
  features?: CaseStudyFeature[];
};

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  featured?: boolean;
};

export default function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  const containerClasses = featured
    ? 'lg:grid-cols-[1.15fr_0.85fr]'
    : 'lg:grid-cols-[0.95fr_1.05fr]';

  const imagePanelClasses = featured
    ? 'min-h-[18rem] lg:min-h-[28rem]'
    : 'min-h-[18rem] lg:min-h-[24rem]';

  return (
    <motion.article
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      className={`group overflow-hidden rounded-[2rem] border border-white/8 bg-[#0D0D0D] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[#765EFF]/30 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)]`}
    >
      <div className={`grid ${containerClasses} items-stretch`}>
        <div className={`${imagePanelClasses} relative overflow-hidden border-b border-white/8 lg:border-b-0 lg:border-r lg:border-white/8`}>
          <img
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
            {caseStudy.label}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between p-6 md:p-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#765EFF]">
                {caseStudy.projectType}
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                {caseStudy.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-[#98A0AE] md:text-base">
                {caseStudy.description}
              </p>
            </div>

            {caseStudy.features?.length ? (
              <div className="space-y-3">
                {caseStudy.features.map((feature) => (
                  <div key={feature.title} className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
                    <div className="text-sm font-semibold text-white">{feature.title}</div>
                    <p className="mt-1 text-sm leading-6 text-[#8A93A2]">{feature.description}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {caseStudy.stats?.length ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {caseStudy.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.28em] text-[#6F7582]">{stat.label}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={caseStudy.ctaHref}
              target={caseStudy.ctaExternal ? '_blank' : undefined}
              rel={caseStudy.ctaExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full bg-[#765EFF] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#8F7CFF]"
            >
              {caseStudy.ctaLabel}
              <ArrowRight size={16} />
            </a>
            <span className="text-sm text-[#748091]">
              Independent concept work for portfolio use.
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}