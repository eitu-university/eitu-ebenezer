import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { contactInfo } from '@/data';
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
    title: t('privacy.title'),
    description: t('privacy.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/politica-de-privacidad'
          : `/${locale}/politica-de-privacidad`,
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

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('PrivacyPolicy');
  const dataCollectedItems = t.raw('dataCollected.items') as string[];
  const purposeItems = t.raw('purpose.items') as string[];
  const legalBasisItems = t.raw('legalBasis.items') as string[];
  const sharingItems = t.raw('sharing.items') as string[];
  const rightsItems = t.raw('rights.items') as string[];

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
          <Section id="intro" heading={t('intro.heading')}>
            <p className={textClasses}>{t('intro.text')}</p>
          </Section>

          <Section id="datos" heading={t('dataCollected.heading')}>
            <p className={textClasses}>{t('dataCollected.intro')}</p>
            <List items={dataCollectedItems} />
          </Section>

          <Section id="finalidad" heading={t('purpose.heading')}>
            <List items={purposeItems} />
          </Section>

          <Section id="base-legal" heading={t('legalBasis.heading')}>
            <List items={legalBasisItems} />
          </Section>

          <Section id="comparticion" heading={t('sharing.heading')}>
            <p className={textClasses}>{t('sharing.intro')}</p>
            <List items={sharingItems} />
          </Section>

          <Section id="transferencias" heading={t('transfers.heading')}>
            <p className={textClasses}>{t('transfers.text')}</p>
          </Section>

          <Section id="cookies" heading={t('cookies.heading')}>
            <p className={textClasses}>
              {t('cookies.text')}{' '}
              <Link className={linkClasses} href="/politica-de-cookies">
                {t('cookies.linkLabel')}
              </Link>{' '}
              {t('cookies.textAfter')}
            </p>
          </Section>

          <Section id="menores" heading={t('minors.heading')}>
            <p className={textClasses}>{t('minors.text')}</p>
          </Section>

          <Section id="derechos" heading={t('rights.heading')}>
            <p className={textClasses}>{t('rights.intro')}</p>
            <List items={rightsItems} />
            <p className={textClasses}>
              {t('rights.contactText')}{' '}
              <a className={linkClasses} href={contactInfo.emailLink}>
                {contactInfo.email}
              </a>
              .
            </p>
            <p className={textClasses}>{t('rights.responseText')}</p>
          </Section>

          <Section id="conservacion" heading={t('retention.heading')}>
            <p className={textClasses}>{t('retention.text')}</p>
          </Section>

          <Section id="seguridad" heading={t('security.heading')}>
            <p className={textClasses}>{t('security.text')}</p>
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
