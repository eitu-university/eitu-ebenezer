import { nations } from '@/data/nations';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface NationsPageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({
  params,
}: NationsPageProps): Promise<Metadata> {
  const { country } = await params;
  const nation = nations.find((n) => n.slug.split('/').pop() === country);
  const lang = nation?.lang || 'es';

  const ogUrl = nation ? `/og/nations/${country}.png` : '/opengraph-image.png';
  const title = nation
    ? lang === 'en'
      ? `EITU Ebenezer | ${nation.name}`
      : `UITE Ebenezer | ${nation.name}`
    : 'Nación no encontrada';

  const description =
    nation && lang === 'en'
      ? 'A theological community: here to educate and serve you.'
      : nation
        ? 'Comunidad teológica con el ideal de educarte y servirte.'
        : 'La nación que buscas no está disponible.';

  return {
    title,
    description,
    openGraph: {
      images: [{ url: ogUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogUrl],
    },
  };
}

export default async function NationsPage({ params }: NationsPageProps) {
  const { country } = await params;
  const nation = nations.find((n) => n.slug.split('/').pop() === country);

  if (!nation) return notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* <span className="text-8xl">{nation.flag}</span> */}

      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image
          src={nation.img}
          alt={nation.name}
          fill={true}
          className="h-52 w-80 object-cover shadow-lg"
        />
        {/* Contenido centrado sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white">
          <img
            src={nation.flagSvg}
            alt={`${nation.name} flag`}
            className="h-28 w-28 rounded-full shadow-xl"
          />
          <h1 className="text-4xl font-bold">{nation.name}</h1>
          <p className="mt-2 text-lg">{nation.description}</p>
        </div>
      </div>
    </div>
  );
}
