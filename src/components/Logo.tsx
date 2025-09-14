import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex h-32 w-36 items-center justify-center rounded-full sm:w-40">
      <Image
        fill={true}
        src="/images/logo-eituebenezer.webp"
        alt="eituebenezer logo"
      />
    </div>
  );
};

export default Logo;
