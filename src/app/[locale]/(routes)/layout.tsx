import Header from '@/components/header/Header';
import { Toaster } from 'sonner';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <div className="h-36 bg-gray-700 md:h-44"></div>
      {children}
    </>
  );
}
