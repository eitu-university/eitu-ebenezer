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
            <h1 className="font-display mb-6 flex flex-col items-center justify-center text-5xl font-normal leading-tight text-parchment md:text-7xl">
              {t('title')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-parchment/80 md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-2xl bg-parchment px-4 py-16 text-center dark:bg-[#18181b]">
        <div className="rounded-card border border-taupe bg-paper p-10 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
          <FiClock className="mx-auto mb-4 h-10 w-10 text-terracotta" />
          <h2 className="font-display mb-3 text-2xl font-normal text-ink dark:text-paper">
            {t('comingSoon.title')}
          </h2>
          <p className="text-graphite dark:text-[#a1a1aa]">
            {t('comingSoon.description')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProgramasDeCurso;
