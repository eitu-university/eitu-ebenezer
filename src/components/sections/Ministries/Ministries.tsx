import { getTranslations } from 'next-intl/server';
import Cta from '@/components/Cta';
import {
  FiUsers,
  FiMusic,
  FiHeart,
  FiBookOpen,
  FiGlobe,
  FiHome,
} from 'react-icons/fi';

export default async function Ministries() {
  const t = await getTranslations('Ministries');
  const tCommon = await getTranslations('Common');

  const ministries = [
    { key: 'youth', icon: FiUsers, color: 'from-purple-500 to-purple-600' },
    { key: 'worship', icon: FiMusic, color: 'from-pink-500 to-pink-600' },
    { key: 'women', icon: FiHeart, color: 'from-red-500 to-red-600' },
    {
      key: 'bibleSchool',
      icon: FiBookOpen,
      color: 'from-green-500 to-green-600',
    },
    { key: 'missions', icon: FiGlobe, color: 'from-blue-500 to-blue-600' },
    { key: 'family', icon: FiHome, color: 'from-orange-500 to-orange-600' },
  ] as const;

  return (
    <section className="bg-gray-50 py-28 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.key}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
            >
              <div
                className={`h-32 bg-gradient-to-r ${ministry.color} flex items-center justify-center`}
              >
                <ministry.icon className="h-12 w-12 text-white" />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t(`items.${ministry.key}.title`)}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {t(`items.${ministry.key}.description`)}
                </p>

                <button className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  {tCommon('learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <Cta
        imgUrl="/images/banner/join-us.webp"
        buttonHref="/contacto"
        buttonText={t('cta.button')}
        title={t('cta.title')}
        description={t('cta.description')}
      />
    </section>
  );
}

{
  /*const CTA = () => (
  <div className="mt-16 text-center">
    <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
      <Image
        src="/images/banner/join-us.webp"
        alt={''}
        fill={true}
        className="h-52 w-80 object-cover shadow-lg"
      />
      
      <div
        id="content"
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white"
      >
        <div className="rounded-xl bg-black/20 p-4 backdrop-blur-sm md:px-28">
          <h3 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">
            ¿Te gustaría servir en alguna capellanía?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl">
            Dios ha dado dones únicos a cada uno de nosotros. Descubre cómo
            puedes usar tus talentos para glorificar a Dios y bendecir a otros.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-1 hover-filled-slide-right"
          >
            <span>Únete a una capellanía</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);*/
}
