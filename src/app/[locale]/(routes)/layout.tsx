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
      <div className="h-28 bg-parchment dark:bg-[#18181b] md:h-36"></div>
      {children}
    </>
  );
}
