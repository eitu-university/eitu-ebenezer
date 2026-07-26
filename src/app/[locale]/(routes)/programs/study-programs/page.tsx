import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import { Link } from '@/i18n/navigation';
import styles from './StudyPrograms.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('programasDeEstudio.title'),
    description: t('programasDeEstudio.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/programs/study-programs'
          : `/${locale}/programs/study-programs`,
    },
  };
}

const StudyProgramsPage = async () => {
  const t = await getTranslations('Programs');

  const options = [
    {
      href: '/programs/study-programs/associates',
      title: t('associates.title'),
    },
    { href: '/programs/study-programs/degree', title: t('degree.title') },
    {
      href: '/programs/study-programs/postgraduate',
      title: t('postgrados.title'),
    },
    { href: '/programs/study-programs/diploma', title: t('diploma.title') },
  ];

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={styles.animteFadeInRight}>
            <h1 className="mb-6 flex flex-col items-center justify-center text-5xl font-bold leading-tight text-white md:text-7xl">
              {t('studyPrograms.title')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-gray-200 md:text-xl">
              {t('studyPrograms.subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {options.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group rounded-2xl border border-gray-100 bg-white p-8 text-center text-xl font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            >
              {option.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyProgramsPage;
