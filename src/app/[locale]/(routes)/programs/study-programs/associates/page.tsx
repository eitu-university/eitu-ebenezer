import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import { Link } from '@/i18n/navigation';
import { FiTarget, FiClipboard, FiArrowRight } from 'react-icons/fi';
import { DegreeCurriculumAccordion } from '@/components/sections/DegreeCurriculum/DegreeCurriculumAccordion';
import { associateCurriculum } from '@/data/associateCurriculum';
import Button from '@/components/ui/Button';
import styles from './Associates.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('associates.title'),
    description: t('associates.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/programs/study-programs/associates'
          : `/${locale}/programs/study-programs/associates`,
    },
  };
}

const Associates = async () => {
  const t = await getTranslations('Programs.associates');

  const years = [
    {
      ...associateCurriculum[0],
      title: t('years.year1.title'),
      focus: t('years.year1.focus'),
    },
    {
      ...associateCurriculum[1],
      title: t('years.year2.title'),
      focus: t('years.year2.focus'),
    },
    {
      ...associateCurriculum[2],
      title: t('years.year3.title'),
      focus: t('years.year3.focus'),
    },
  ];

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={styles.animteFadeInRight}>
            <h1 className="font-display mb-6 flex flex-col items-center justify-center text-4xl font-normal leading-tight text-parchment md:text-6xl">
              {t('programTitle')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-parchment/80 md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-4xl bg-parchment px-4 py-16 dark:bg-[#18181b]">
        {/* Stats */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-card border border-taupe bg-paper p-6 text-center shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              {t('durationLabel')}
            </p>
            <p className="mt-1 text-2xl font-semibold text-ink dark:text-paper">
              {t('duration')}
            </p>
          </div>
          <div className="rounded-card border border-taupe bg-paper p-6 text-center shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              {t('creditsTotalLabel')}
            </p>
            <p className="mt-1 text-2xl font-semibold text-ink dark:text-paper">
              {t('creditsTotal')}
            </p>
          </div>
        </div>

        {/* Objectives & Requirements */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-card border border-taupe bg-paper p-8 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
            <FiTarget className="mb-4 h-10 w-10 text-terracotta" />
            <h2 className="font-display mb-3 text-xl font-normal text-ink dark:text-paper">
              {t('objectivesTitle')}
            </h2>
            <p className="text-graphite dark:text-[#a1a1aa]">
              {t('objectives')}
            </p>
          </div>
          <div className="rounded-card border border-taupe bg-paper p-8 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
            <FiClipboard className="mb-4 h-10 w-10 text-terracotta" />
            <h2 className="font-display mb-3 text-xl font-normal text-ink dark:text-paper">
              {t('requirementsTitle')}
            </h2>
            <p className="text-graphite dark:text-[#a1a1aa]">
              {t('requirements')}
            </p>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-8">
          <div className="mb-8 text-center">
            <h2 className="font-display mb-3 text-3xl font-normal text-ink dark:text-paper">
              {t('curriculumTitle')}
            </h2>
            <p className="mx-auto max-w-2xl text-graphite dark:text-[#a1a1aa]">
              {t('curriculumDescription')}
            </p>
          </div>

          <DegreeCurriculumAccordion
            years={years}
            creditsLabel={t('creditsLabel')}
            creditsPendingLabel={t('creditsPending')}
            pendingMessage={t('pendingConfirmation')}
          />
        </div>

        {/* Continuation to Degree */}
        <Link
          href="/programs/study-programs/degree"
          className="mb-16 flex items-center justify-between gap-4 rounded-card border border-terracotta bg-terracotta/10 p-6 transition-colors hover:bg-terracotta/20"
        >
          <div>
            <h2 className="mb-1 font-semibold text-ink dark:text-paper">
              {t('continuationTitle')}
            </h2>
            <p className="text-sm text-graphite dark:text-[#a1a1aa]">
              {t('continuationDescription')}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-terracotta">
            {t('continuationLink')}
            <FiArrowRight className="h-4 w-4" />
          </span>
        </Link>

        {/* CTA */}
        <div className="rounded-card border border-taupe bg-paper px-8 py-12 text-center shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
          <h2 className="font-display mb-3 text-2xl font-normal text-ink dark:text-paper md:text-3xl">
            {t('ctaTitle')}
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-graphite dark:text-[#a1a1aa]">
            {t('ctaDescription')}
          </p>
          <Button href="/naciones">{t('ctaButton')}</Button>
        </div>
      </section>
    </div>
  );
};

export default Associates;
