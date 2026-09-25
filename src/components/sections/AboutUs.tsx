import { getTranslations } from 'next-intl/server';
import { values } from '@/data/about-us';
import { FiTarget, FiEye } from 'react-icons/fi';

export default async function AboutUs() {
  const t = await getTranslations('AboutUs');

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper py-20 dark:bg-[#18181b] md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-terracotta/10 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-terracotta/10 opacity-60 blur-3xl" />

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

        <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
          <div className="border-l-4 border-terracotta pl-6">
            <h3 className="font-display mb-6 text-2xl font-normal text-ink dark:text-paper sm:text-3xl">
              {t('historyTitle')}
            </h3>
            <p className="mb-6 text-justify leading-relaxed text-graphite dark:text-[#a1a1aa]">
              {t('historyText')}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-card bg-[#27272a] p-8 text-white">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FiTarget className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-semibold">{t('missionTitle')}</h4>
              </div>
              <p className="mb-6 text-justify leading-relaxed text-white/80">
                {t('missionText')}
              </p>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FiEye className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-semibold">{t('visionTitle')}</h4>
              </div>
              <p className="text-justify leading-relaxed text-white/80">
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
              className="group rounded-card border border-taupe bg-parchment p-6 text-center shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a]"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-terracotta bg-terracotta/10 transition-transform duration-300 group-hover:scale-110">
                <value.icon className="h-7 w-7 text-terracotta" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-ink dark:text-paper">
                {t(`values.${value.key}.title`)}
              </h4>
              <p className="text-graphite dark:text-[#a1a1aa]">
                {t(`values.${value.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
