import { getTranslations } from 'next-intl/server';
import { FiMapPin, FiClock } from 'react-icons/fi';
import ContactForm from './ContactForm';
import { contactInfo } from '@/data';
import DynamicMap from '@/components/DynamicMap';

export default async function Contact() {
  const t = await getTranslations('Contact');

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-50 py-28 dark:bg-gray-800"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-900/20" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600" />
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {t('info.title')}
              </h3>
              <p className="mb-8 text-justify leading-relaxed text-gray-600 dark:text-gray-300">
                {t('info.description')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                  <FiMapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    {t('info.addressLabel')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                    <br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                  <FiClock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    {t('info.hoursLabel')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('info.hoursSunday')}
                    <br />
                    {t('info.hoursWednesday')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <DynamicMap />
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
