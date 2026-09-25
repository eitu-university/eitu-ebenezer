import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import styles from './Diploma.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('diploma.title'),
    description: t('diploma.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/programs/study-programs/diploma'
          : `/${locale}/programs/study-programs/diploma`,
    },
  };
}

const Diploma = async () => {
  const t = await getTranslations('Programs.diploma');

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
    </div>
  );
};

export default Diploma;
