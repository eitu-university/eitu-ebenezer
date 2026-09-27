import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import {
  FiArrowLeft,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiCompass,
  FiEye,
  FiFlag,
  FiHeart,
  FiHome,
  FiLink,
  FiLock,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
} from 'react-icons/fi';
import { SvgWave } from '@/components/banner/SvgWave';
import ChaplaincyGallery from '@/components/sections/Chaplaincy/ChaplaincyGallery';
import { chaplaincyGallery } from '@/data/chaplaincy-gallery';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

type Value = IntlMessages['Chaplaincy']['values']['items'][number];

// One icon per core value, in the same order as the translation array.
const valueIcons = [
  FiBookOpen, // Faith
  FiHeart, // Compassion
  FiUsers, // Service
  FiShield, // Integrity
  FiStar, // Excellence
  FiAward, // Respect
  FiLock, // Confidentiality
  FiLink, // Unity
  FiFlag, // Leadership
  FiHome, // Community
];

const HERO_IMAGE = '/capellania-gallery/16.jpeg';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('chaplaincy.title'),
    description: t('chaplaincy.description'),
    alternates: {
      canonical: locale === 'es' ? '/capellania' : `/${locale}/capellania`,
    },
  };
}

function SectionHeading({ icon: Icon, children }: { icon: typeof FiEye; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-terracotta bg-terracotta/10">
        <Icon className="h-5 w-5 text-terracotta" aria-hidden="true" />
      </span>
      <h2 className="font-display text-2xl font-normal text-ink dark:text-paper sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default async function ChaplaincyPage() {
  const t = await getTranslations('Chaplaincy');
  const aboutParagraphs = t.raw('about.paragraphs') as string[];
  const visionItems = t.raw('vision.items') as string[];
  const missionItems = t.raw('mission.items') as string[];
  const values = t.raw('values.items') as Value[];
  const formula = t.raw('commitment.formula') as string[];
  const motto = t.raw('motto') as string[];

  return (
    <main className="bg-paper dark:bg-[#18181b]">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pb-24 pt-32">
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
          <span className="mb-6 inline-block rounded-full border border-terracotta-light/60 bg-terracotta/15 px-4 py-1.5 text-sm font-semibold tracking-[0.25em] text-terracotta-light">
            {t('acronym')}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#capellania"
          className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta/80"
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('backToMinistries')}
        </Link>
      </div>

      {/* Who we are */}
      <section aria-labelledby="quienes-somos" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2
              id="quienes-somos"
              className="font-display text-3xl font-normal text-ink dark:text-paper sm:text-4xl"
            >
              {t('about.heading')}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-terracotta" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-graphite dark:text-[#a1a1aa]">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-parchment py-20 dark:bg-[#141417]">
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-card border border-taupe bg-paper p-8 dark:border-[#3f3f46] dark:bg-[#27272a] sm:p-10">
            <SectionHeading icon={FiEye}>{t('vision.heading')}</SectionHeading>
            <blockquote className="mb-6 border-l-4 border-terracotta pl-5 text-xl italic leading-relaxed text-ink dark:text-paper">
              “{t('vision.quote')}”
            </blockquote>
            <p className="mb-4 leading-relaxed text-graphite dark:text-[#a1a1aa]">
              {t('vision.intro')}
            </p>
            <ul className="mb-6 space-y-2.5">
              {visionItems.map((item) => (
                <li key={item} className="flex gap-3 text-charcoal dark:text-[#d4d4d8]">
                  <FiCheck className="mt-1 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-graphite dark:text-[#a1a1aa]">{t('vision.closing')}</p>
          </article>

          <article className="rounded-card border border-taupe bg-paper p-8 dark:border-[#3f3f46] dark:bg-[#27272a] sm:p-10">
            <SectionHeading icon={FiTarget}>{t('mission.heading')}</SectionHeading>
            <p className="mb-6 text-lg leading-relaxed text-ink dark:text-paper">
              {t('mission.statement')}
            </p>
            <p className="mb-4 font-semibold text-charcoal dark:text-[#d4d4d8]">{t('mission.intro')}</p>
            <ol className="space-y-3">
              {missionItems.map((item, index) => (
                <li key={item} className="flex gap-3 text-graphite dark:text-[#a1a1aa]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-xs font-semibold text-terracotta">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      {/* Core values */}
      <section aria-labelledby="valores" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="valores" className="font-display text-3xl font-normal text-ink dark:text-paper sm:text-4xl">
            {t('values.heading')}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-terracotta" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {values.map((value, index) => {
            const Icon = valueIcons[index] ?? FiCompass;
            return (
              <article
                key={value.title}
                className="group rounded-3xl border border-taupe bg-parchment p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-terracotta bg-terracotta/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-terracotta" aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl text-taupe dark:text-[#3f3f46]" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-lg font-semibold text-ink dark:text-paper">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite dark:text-[#a1a1aa]">{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Commitment */}
      <section aria-labelledby="compromiso" className="bg-ink py-20 text-parchment dark:bg-[#0c0c0e]">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="compromiso" className="font-display text-3xl font-normal sm:text-4xl">
            {t('commitment.heading')}
          </h2>
          <div className="mx-auto mb-8 mt-4 h-1 w-16 rounded-full bg-terracotta" />
          <p className="mb-8 text-lg leading-relaxed text-parchment/80">{t('commitment.intro')}</p>
          <p className="mb-4 font-semibold text-parchment/90">{t('commitment.formulaIntro')}</p>
          <ul className="mb-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {formula.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-xl font-semibold text-terracotta-light" aria-hidden="true">
                    +
                  </span>
                )}
                <span className="rounded-full border border-parchment/20 bg-parchment/5 px-4 py-1.5 text-sm font-semibold">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mb-12 text-lg leading-relaxed text-parchment/80">{t('commitment.closing')}</p>

          <div className="border-t border-parchment/10 pt-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-terracotta-light">
              {t('acronym')}
            </p>
            {motto.map((line) => (
              <p key={line} className="font-display text-2xl font-normal leading-snug sm:text-3xl">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section aria-labelledby="galeria" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="galeria" className="font-display text-3xl font-normal text-ink dark:text-paper sm:text-4xl">
            {t('gallery.heading')}
          </h2>
          <div className="mx-auto my-4 h-1 w-16 rounded-full bg-terracotta" />
          <p className="text-lg text-graphite dark:text-[#a1a1aa]">{t('gallery.description')}</p>
        </div>
        <ChaplaincyGallery images={chaplaincyGallery} />
      </section>
    </main>
  );
}
