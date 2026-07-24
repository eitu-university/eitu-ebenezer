import { getTranslations } from 'next-intl/server';
import { values } from '@/data/about-us';
import { FiTarget, FiEye } from 'react-icons/fi';

export default async function AboutUs() {
  const t = await getTranslations('AboutUs');

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-20 md:py-28 dark:bg-gray-800"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-100 opacity-60 blur-3xl dark:bg-indigo-900/20" />

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

        <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              {t('historyTitle')}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              {t('historyText')}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FiTarget className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">{t('missionTitle')}</h4>
              </div>
              <p className="mb-6 leading-relaxed text-blue-100 text-justify">
                {t('missionText')}
              </p>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FiEye className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">{t('visionTitle')}</h4>
              </div>
              <p className="leading-relaxed text-blue-100 text-justify">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.key}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-110">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {t(`values.${value.key}.title`)}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t(`values.${value.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
