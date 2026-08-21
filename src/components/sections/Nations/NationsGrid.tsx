import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { nations } from '@/data/nations';

const NationsGrid = async () => {
  const t = await getTranslations('Nations');

  return (
    <section className="bg-white py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h1>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600" />
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nations.map((nation) => (
            <Link
              key={nation.code}
              href={nation.slug}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={nation.imgThumb}
                  alt={nation.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Image
                  src={nation.flagSvg}
                  alt={`${nation.name} flag`}
                  width={40}
                  height={40}
                  className="absolute right-3 top-3 h-10 w-10 rounded-full ring-2 ring-white"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <h3 className="text-lg font-bold text-white">
                    {nation.name}
                  </h3>
                </div>
              </div>
              <p className="line-clamp-2 p-4 text-sm text-gray-600 dark:text-gray-300">
                {nation.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationsGrid;
