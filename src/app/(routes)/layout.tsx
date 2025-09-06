import Header from '@/components/header/Header';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="h-28 bg-gray-700"></div>
      {children}
    </>
  );
}
