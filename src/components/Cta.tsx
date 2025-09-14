import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

const Cta = ({ imgUrl, title, description, buttonHref, buttonText }: Props) => {
  return (
    <div className="mt-16 text-center">
      <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
        <Image
          src={imgUrl}
          alt={''}
          fill={true}
          className="h-52 w-80 object-cover shadow-lg"
        />
        {/* Contenido centrado sobre la imagen */}
        <div
          id="content"
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white"
        >
          <div className="rounded-xl bg-black/20 p-4 backdrop-blur-sm md:px-28">
            <h3 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">
              {title}
            </h3>
            <p className="mx-auto mb-6 max-w-2xl">{description}</p>
            <Link
              href={buttonHref}
              className="btn btn-1 hover-filled-slide-right"
            >
              <span>{buttonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
