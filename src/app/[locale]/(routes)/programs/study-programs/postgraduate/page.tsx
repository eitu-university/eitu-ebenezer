import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SvgWave } from '@/components/banner/SvgWave';
import { FiAward, FiBookOpen } from 'react-icons/fi';
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
      canonical:
        locale === 'es'
          ? '/programs/study-programs/postgraduate'
          : `/${locale}/programs/study-programs/postgraduate`,
    },
  };
}

const Postgraduate = async () => {
  const t = await getTranslations('Programs.postgrados');

  const sections = [
    { key: 'masters', icon: FiBookOpen },
    { key: 'doctorates', icon: FiAward },
  ] as const;

  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={`${styles.containerAnimate}`}>
            <h1 className="font-display mb-6 flex flex-col justify-center text-5xl font-normal leading-tight text-parchment md:text-7xl">
              {t('title')}
            </h1>

            <p className="text-small mb-8 leading-relaxed text-parchment/80 md:text-xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
        <SvgWave />
      </section>

      <section className="mx-auto max-w-4xl bg-parchment px-4 py-16 dark:bg-[#18181b]">
        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-card border border-taupe bg-paper p-8 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]"
            >
              <Icon className="mb-4 h-10 w-10 text-terracotta" />
              <h2 className="font-display mb-3 text-xl font-normal text-ink dark:text-paper">
                {t(`${key}.title`)}
              </h2>
              <p className="text-graphite dark:text-[#a1a1aa]">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Postgraduate;
