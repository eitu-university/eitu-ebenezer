import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { contactInfo } from '@/data';

type Props = {
  params: Promise<{ locale: string }>;
};

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
          <section aria-labelledby="intro">
            <h2
              id="intro"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('intro.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('intro.text')}
            </p>
          </section>

          <section aria-labelledby="datos">
            <h2
              id="datos"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('dataCollected.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
              {dataCollectedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="finalidad">
            <h2
              id="finalidad"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('purpose.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
              {purposeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="base-legal">
            <h2
              id="base-legal"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('legalBasis.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
              {legalBasisItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="comparticion">
            <h2
              id="comparticion"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('sharing.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa]">
              {t('sharing.intro')}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
              {sharingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2
              id="cookies"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('cookies.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('cookies.text')}
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2
              id="derechos"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('rights.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa]">
              {t('rights.intro')}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
              {rightsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('rights.contactText')}{' '}
              <a
                className="text-terracotta underline hover:text-terracotta/80"
                href={contactInfo.emailLink}
              >
                {contactInfo.email}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="conservacion">
            <h2
              id="conservacion"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('retention.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('retention.text')}
            </p>
          </section>

          <section aria-labelledby="contacto">
            <h2
              id="contacto"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('contact.heading')}
            </h2>
            <div className="mt-3 space-y-1 text-charcoal dark:text-[#a1a1aa]">
              <p>
                📧 {t('contact.emailLabel')}:{' '}
                <a
                  className="text-terracotta underline hover:text-terracotta/80"
                  href={contactInfo.emailLink}
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                📞 {t('contact.phoneLabel')}:{' '}
                <a
                  className="text-terracotta underline hover:text-terracotta/80"
                  href={contactInfo.whatsappLink}
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                📍 {t('contact.addressLabel')}: {contactInfo.address.country},{' '}
                {contactInfo.address.city}
              </p>
            </div>
          </section>

          <section aria-labelledby="seguridad">
            <h2
              id="seguridad"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('security.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('security.text')}
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2
              id="cambios"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('changes.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('changes.text')}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
