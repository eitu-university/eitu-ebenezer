import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { FiBookOpen, FiDroplet } from 'react-icons/fi';
import { SvgWave } from '@/components/banner/SvgWave';

type Props = {
  params: Promise<{ locale: string }>;
};

type Ordinance = IntlMessages['StatementOfFaith']['ordinances']['items'][number];

// One icon per ordinance, in the same order as the translation array.
const ordinanceIcons = [
  FiDroplet, // Water baptism
  FiBookOpen, // Lord's Supper
];

const HERO_IMAGE = '/declaracion-de-fe/hero.webp';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('statementOfFaith.title'),
    description: t('statementOfFaith.description'),
    alternates: {
      canonical: locale === 'es' ? '/declaracion-de-fe' : `/${locale}/declaracion-de-fe`,
    },
  };
}

export default async function StatementOfFaithPage() {
  const t = await getTranslations('StatementOfFaith');
  const articles = t.raw('articles.items') as string[];
  const ordinances = t.raw('ordinances.items') as Ordinance[];

  return (
    <main className="bg-paper dark:bg-[#18181b]">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink pb-24 pt-32">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/70 to-ink/50" />

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full border border-terracotta-light/60 bg-terracotta/15 px-4 py-1.5 text-sm font-semibold tracking-[0.2em] text-terracotta-light">
            {t('eyebrow')}
          </span>
          <h1 className="font-display mx-auto max-w-4xl text-4xl font-normal leading-tight text-parchment sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <div className="mx-auto my-6 h-1 w-16 rounded-full bg-terracotta" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-parchment/80 sm:text-xl">
            {t('tagline')}
          </p>
        </div>
        <SvgWave />
      </section>

      {/* Articles of faith */}
      <section aria-labelledby="creemos" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="creemos" className="font-display text-3xl font-normal text-ink dark:text-paper sm:text-4xl">
            {t('articles.heading')}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-terracotta" />
        </div>
        <ol className="grid gap-6 lg:grid-cols-2">
          {articles.map((article, index) => (
            <li
              key={article}
              className="flex gap-5 rounded-3xl border border-taupe bg-parchment p-6 dark:border-[#3f3f46] dark:bg-[#27272a] sm:p-8"
            >
              <span className="font-display shrink-0 text-3xl leading-none text-terracotta" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="leading-relaxed text-charcoal dark:text-[#d4d4d8]">{article}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Ordinances */}
      <section aria-labelledby="ordenanzas" className="bg-ink py-20 text-parchment dark:bg-[#0c0c0e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 id="ordenanzas" className="font-display text-3xl font-normal sm:text-4xl">
              {t('ordinances.heading')}
            </h2>
            <div className="mx-auto my-4 h-1 w-16 rounded-full bg-terracotta" />
            <p className="text-lg text-parchment/80">{t('ordinances.intro')}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {ordinances.map((ordinance, index) => {
              const Icon = ordinanceIcons[index] ?? FiBookOpen;
              return (
                <article
                  key={ordinance.title}
                  className="rounded-card border border-parchment/10 bg-parchment/5 p-8 sm:p-10"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-terracotta-light bg-terracotta/15">
                      <Icon className="h-5 w-5 text-terracotta-light" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-2xl font-normal">
                      <span className="text-terracotta-light">{String.fromCharCode(65 + index)}.</span>{' '}
                      {ordinance.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-parchment/80">{ordinance.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
