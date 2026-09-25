import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import { Link } from '@/i18n/navigation';
import styles from './Programs.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('programs.title'),
    description: t('programs.description'),
    alternates: {
      canonical: locale === 'es' ? '/programs' : `/${locale}/programs`,
    },
  };
}

const ProgramsPage = async () => {
  const t = await getTranslations('Programs');

  const options = [
    { href: '/programs/study-programs', title: t('studyPrograms.title') },
    { href: '/programs/course-programs', title: t('coursePrograms.title') },
  ];

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={styles.animteFadeInRight}>
            <h1 className="font-display mb-6 flex flex-col items-center justify-center text-5xl font-normal leading-tight text-parchment md:text-7xl">
              {t('title')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-parchment/80 md:text-xl">
              {t('description')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-4xl bg-parchment px-4 py-16 dark:bg-[#18181b]">
        <div className="grid gap-6 sm:grid-cols-2">
          {options.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group rounded-card border border-taupe bg-paper p-8 text-center text-xl font-semibold text-ink shadow-glow transition-all duration-300 hover:-translate-y-2 hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a] dark:text-paper"
            >
              {option.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
