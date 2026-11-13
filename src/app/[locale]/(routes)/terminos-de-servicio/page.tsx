import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import LegalContact from '@/components/legal/LegalContact';

type Props = {
  params: Promise<{ locale: string }>;
};

const linkClasses = 'text-terracotta underline hover:text-terracotta/80';
const textClasses =
  'mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('terms.title'),
    description: t('terms.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/terminos-de-servicio'
          : `/${locale}/terminos-de-servicio`,
    },
  };
}

function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="font-display text-xl font-normal text-ink dark:text-paper"
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

export default async function TermsOfServicePage() {
  const t = await getTranslations('TermsOfService');

  return (
    <main className="min-h-screen bg-parchment dark:bg-[#18181b]">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="font-display text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-3 text-sm text-graphite dark:text-[#a1a1aa]">
            {t('subtitle')}
          </p>
          <p className="mt-1 text-xs text-graphite/80 dark:text-[#a1a1aa]/80">
            {t('lastUpdated')}
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          <Section id="uso-sitio" heading={t('siteUse.heading')}>
            <div className="mt-3 space-y-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              <p>{t('siteUse.text1')}</p>
              <p>{t('siteUse.text2')}</p>
            </div>
          </Section>

          <Section id="programas" heading={t('programs.heading')}>
            <p className={textClasses}>{t('programs.text')}</p>
          </Section>

          <Section id="formularios" heading={t('forms.heading')}>
            <p className={textClasses}>
              {t.rich('forms.text', {
                privacy: (chunks) => (
                  <Link className={linkClasses} href="/politica-de-privacidad">
                    {chunks}
                  </Link>
                ),
                cookies: (chunks) => (
                  <Link className={linkClasses} href="/politica-de-cookies">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </Section>

          <Section id="propiedad" heading={t('contentOwnership.heading')}>
            <p className={textClasses}>{t('contentOwnership.text')}</p>
          </Section>

          <Section id="uso-adecuado" heading={t('properUse.heading')}>
            <p className={textClasses}>{t('properUse.text')}</p>
          </Section>

          <Section id="enlaces" heading={t('externalLinks.heading')}>
            <p className={textClasses}>{t('externalLinks.text')}</p>
          </Section>

          <Section id="responsabilidad" heading={t('liability.heading')}>
            <p className={textClasses}>{t('liability.text')}</p>
          </Section>

          <Section id="ley-aplicable" heading={t('law.heading')}>
            <p className={textClasses}>{t('law.text')}</p>
          </Section>

          <Section id="cambios" heading={t('changes.heading')}>
            <p className={textClasses}>{t('changes.text')}</p>
          </Section>

          <Section id="contacto" heading={t('contact.heading')}>
            <p className={textClasses}>{t('contact.intro')}</p>
            <LegalContact
              emailLabel={t('contact.emailLabel')}
              phoneLabel={t('contact.phoneLabel')}
              addressLabel={t('contact.addressLabel')}
            />
          </Section>
        </div>
      </section>
    </main>
  );
}
