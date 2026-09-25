import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const inputBaseClasses =
  'block w-full border bg-paper text-charcoal placeholder-graphite outline-none transition-colors duration-200 border-ash focus:border-terracotta focus:shadow-[0_0_0_3px_rgba(255,90,0,0.2)] dark:bg-[#27272a] dark:text-[#f4f4f5] dark:placeholder-[#a1a1aa] dark:border-[#52525b] dark:focus:border-terracotta-light';

// Named "pill*" from a prior pill-shaped design system; radius now follows
// the current DESIGN.md input token (14px) via `rounded-input`.
export function pillClasses(hasIcon = true, className?: string) {
  return cn(
    inputBaseClasses,
    'rounded-input py-3 pr-5',
    hasIcon ? 'pl-11' : 'pl-5',
    className
  );
}

export function textareaClasses(hasIcon = true, className?: string) {
  return cn(
    inputBaseClasses,
    'resize-none rounded-input py-3 pr-5',
    hasIcon ? 'pl-11' : 'pl-5',
    className
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  icon?: ReactNode;
  error?: string;
  children: ReactNode;
  iconAlign?: 'center' | 'top';
};

export function Field({
  label,
  htmlFor,
  icon,
  error,
  children,
  iconAlign = 'center',
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-charcoal dark:text-[#a1a1aa]"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div
            className={cn(
              'pointer-events-none absolute left-5 flex items-center text-graphite dark:text-[#a1a1aa]',
              iconAlign === 'center' ? 'inset-y-0' : 'top-3.5'
            )}
          >
            {icon}
          </div>
        )}
        {children}
      </div>
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
