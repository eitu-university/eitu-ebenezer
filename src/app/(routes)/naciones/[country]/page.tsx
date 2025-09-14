import { nations } from '@/data/nations';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function NationsPage({
  params,
}: {
  params: { country: string };
}) {
  const param = await params;
  const nation = nations.find(
    (n) => n.slug.split('/').pop() === param.country
  );

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
            className="h-28 w-28 shadow-xl rounded-full"
          />
          <h1 className="text-4xl font-bold">{nation.name}</h1>
          <p className="mt-2 text-lg">{nation.description}</p>
        </div>
      </div>
    </div>
  );
}
