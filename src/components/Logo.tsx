import Image from 'next/image';

const Logo = ({ isScrolled }: { isScrolled?: boolean }) => {
  const isNotScrolledClass = 'h-24 w-28 sm:w-36 sm:h-32';
  const isScrolledClass = isScrolled
    ? 'h-20 w-24 sm:h-24 sm:w-28'
    : isNotScrolledClass;

  return (
    <div
      className={`relative flex items-center justify-center rounded-full transition-all duration-1000  ${isScrolledClass}`}
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
