import Image from 'next/image';

const Logo = ({ isScrolled }: { isScrolled?: boolean }) => {
  const mobileClass = 'h-24 w-28';
  const desktopClass = 'sm:w-36 sm:h-32';
  const isScrolledClass = isScrolled ? 'h-20 w-24 sm:h-20 sm:w-24' : '';

  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${mobileClass} ${desktopClass} ${isScrolledClass}`}
    >
      <Image
        fill={true}
        src="/images/logo-eituebenezer.webp"
        alt="eituebenezer logo"
      />
    </div>
  );
};

export default Logo;
