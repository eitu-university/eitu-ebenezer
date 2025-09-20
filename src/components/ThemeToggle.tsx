'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = (resolvedTheme ?? theme) === 'dark';

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-md transition-colors duration-200 text-gray-200 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      title={isDark ? 'Cambiar a claro' : 'Cambiar a oscuro'}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}

