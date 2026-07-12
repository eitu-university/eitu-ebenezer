import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import styles from './Postgrados.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('postgrados.title'),
    description: t('postgrados.description'),
    alternates: {
      canonical: locale === 'es' ? '/postgrados' : `/${locale}/postgrados`,
    },
  };
}

const Postgrados = async () => {
  const t = await getTranslations('Programs.postgrados');

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={`${styles.containerAnimate}`}>
            <h1 className="mb-6 flex flex-col justify-center text-5xl font-bold leading-tight text-white md:text-7xl">
              {t('title')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-gray-200 md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>
    </div>
  );
};

export default Postgrados;
