import Header from '@/components/header/Header';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="h-44 md:h-44 bg-gray-700"></div>
      {children}
    </>
  );
}
