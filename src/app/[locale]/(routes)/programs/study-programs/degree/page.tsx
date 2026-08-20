import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import { Link } from '@/i18n/navigation';
import { FiTarget, FiClipboard, FiArrowRight } from 'react-icons/fi';
import { DegreeCurriculumAccordion } from '@/components/sections/DegreeCurriculum/DegreeCurriculumAccordion';
import { degreeCurriculum } from '@/data/degreeCurriculum';
import styles from './Degree.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('degree.title'),
    description: t('degree.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/programs/study-programs/degree'
          : `/${locale}/programs/study-programs/degree`,
    },
  };
}

const Degree = async () => {
  const t = await getTranslations('Programs.degree');

  const years = degreeCurriculum.map((year) => ({
    ...year,
    title: t('years.year4.title'),
    focus: t('years.year4.focus'),
  }));

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={styles.animteFadeInRight}>
            <h1 className="mb-6 flex flex-col items-center justify-center text-4xl font-bold leading-tight text-white md:text-6xl">
              {t('programTitle')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-gray-200 md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        {/* Stats */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {t('durationLabel')}
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {t('duration')}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {t('creditsTotalLabel')}
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {t('creditsTotal')}
            </p>
          </div>
        </div>

        {/* Objectives & Requirements */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <FiTarget className="mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
              {t('objectivesTitle')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t('objectives')}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <FiClipboard className="mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
              {t('requirementsTitle')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t('requirements')}
            </p>
          </div>
        </div>

        {/* Continuation of Associates */}
        <Link
          href="/programs/study-programs/associates"
          className="mb-16 flex items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 transition-colors hover:bg-blue-100 dark:border-blue-900/40 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
        >
          <div>
            <h2 className="mb-1 font-bold text-blue-900 dark:text-blue-200">
              {t('continuationTitle')}
            </h2>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              {t('continuationDescription')}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
            {t('continuationLink')}
            <FiArrowRight className="h-4 w-4" />
          </span>
        </Link>

        {/* Curriculum */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-gray-100">
              {t('curriculumTitle')}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
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

        {/* CTA */}
        <div className="rounded-2xl border border-gray-100 bg-white px-8 py-12 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
            {t('ctaTitle')}
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-gray-600 dark:text-gray-300">
            {t('ctaDescription')}
          </p>
          <Link href="/contacto" className="btn btn-1 hover-filled-slide-right">
            <span>{t('ctaButton')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Degree;
