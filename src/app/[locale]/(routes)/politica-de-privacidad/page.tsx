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
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            {t('lastUpdated')}
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="intro">
            <h2
              id="intro"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('intro.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('intro.text')}
            </p>
          </section>

          <section aria-labelledby="datos">
            <h2
              id="datos"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('dataCollected.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
              {dataCollectedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="finalidad">
            <h2
              id="finalidad"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('purpose.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
              {purposeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="base-legal">
            <h2
              id="base-legal"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('legalBasis.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
              {legalBasisItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="comparticion">
            <h2
              id="comparticion"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('sharing.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              {t('sharing.intro')}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
              {sharingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2
              id="cookies"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('cookies.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('cookies.text')}
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2
              id="derechos"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('rights.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              {t('rights.intro')}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
              {rightsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('rights.contactText')}{' '}
              <a
                className="text-blue-600 underline dark:text-blue-400"
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
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('retention.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('retention.text')}
            </p>
          </section>

          <section aria-labelledby="contacto">
            <h2
              id="contacto"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('contact.heading')}
            </h2>
            <div className="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
              <p>
                📧 {t('contact.emailLabel')}:{' '}
                <a
                  className="text-blue-600 underline dark:text-blue-400"
                  href={contactInfo.emailLink}
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                📞 {t('contact.phoneLabel')}:{' '}
                <a
                  className="text-blue-600 underline dark:text-blue-400"
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
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('security.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('security.text')}
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2
              id="cambios"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('changes.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('changes.text')}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
