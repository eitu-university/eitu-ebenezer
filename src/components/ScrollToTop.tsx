'use client';

import { FiArrowUp } from 'react-icons/fi';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-[9999] w-12 h-12 bg-blue-600 hover:bg-blue-700',
        'text-white rounded-full shadow-lg hover:shadow-xl',
        'transition-all duration-300 transform hover:scale-110',
        'flex items-center justify-center'
      )}
      aria-label="Volver arriba"
    >
      <FiArrowUp size={20} />
    </button>
  );
}