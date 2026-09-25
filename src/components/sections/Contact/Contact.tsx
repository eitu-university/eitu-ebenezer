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
      className="relative overflow-hidden bg-paper py-28 dark:bg-[#18181b]"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-terracotta/10 opacity-60 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
          <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display mb-6 text-2xl font-normal text-ink dark:text-paper">
                {t('info.title')}
              </h3>
              <p className="mb-8 text-justify leading-relaxed text-graphite dark:text-[#a1a1aa]">
                {t('info.description')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-card border border-taupe bg-parchment p-4 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-terracotta bg-terracotta/10">
                  <FiMapPin className="h-6 w-6 text-terracotta" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-ink dark:text-paper">
                    {t('info.addressLabel')}
                  </h4>
                  <p className="text-graphite dark:text-[#a1a1aa]">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                    <br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-card border border-taupe bg-parchment p-4 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-terracotta bg-terracotta/10">
                  <FiClock className="h-6 w-6 text-terracotta" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-ink dark:text-paper">
                    {t('info.hoursLabel')}
                  </h4>
                  <p className="text-graphite dark:text-[#a1a1aa]">
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
