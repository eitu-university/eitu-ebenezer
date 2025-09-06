import Image from 'next/image';
import Link from 'next/link';

// src/app/not-found.tsx - Página de error
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src="/images/text-logo.png" alt="Logo" width={300} height={100} />
      <h1>404 - Página no encontrada</h1>
      <Link href="/" className="text-blue-500">
        Volver a la página de inicio
      </Link>
    </div>
  );
}
