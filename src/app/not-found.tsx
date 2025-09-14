import Logo from '@/components/Logo';
import Image from 'next/image';
import Link from 'next/link';

// src/app/not-found.tsx - Página de error
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* <Image src="/images/text-logo.png" alt="Logo" width={300} height={100} /> */}
      <div className="flex items-center">
        <Link href={'/'} className="flex items-center space-x-2">
          <Logo />
          {/* <span className="text-xl font-bold text-gray-200 dark:text-gray-900 lg:text-2xl">
            EITU Ebenezer
          </span> */}
        </Link>
      </div>
      <h1>404 - Página no encontrada</h1>
      <Link href="/" className="text-blue-500">
        Volver a la página de inicio
      </Link>
    </div>
  );
}
