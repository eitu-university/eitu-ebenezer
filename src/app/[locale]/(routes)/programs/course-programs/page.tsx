import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import { FiClock } from 'react-icons/fi';
import styles from './CoursePrograms.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('CoursePrograms.title'),
    description: t('CoursePrograms.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/programs/course-programs'
          : `/${locale}/programs/course-programs`,
    },
  };
}

const ProgramasDeCurso = async () => {
  const t = await getTranslations('Programs.coursePrograms');

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={styles.animteFadeInRight}>
            <h1 className="mb-6 flex flex-col items-center justify-center text-5xl font-bold leading-tight text-white md:text-7xl">
              {t('title')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-gray-200 md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <FiClock className="mx-auto mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('comingSoon.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('comingSoon.description')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProgramasDeCurso;
