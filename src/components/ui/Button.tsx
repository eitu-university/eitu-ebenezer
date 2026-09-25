import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-terracotta text-parchment hover:bg-terracotta/90 dark:bg-terracotta-light dark:hover:bg-terracotta-light/90',
        outline:
          'border border-terracotta bg-transparent text-terracotta hover:bg-terracotta hover:text-parchment dark:border-terracotta-light dark:text-terracotta-light dark:hover:bg-terracotta-light dark:hover:text-ink',
        ghost:
          'bg-transparent text-ink hover:text-terracotta dark:text-paper dark:hover:text-terracotta-light',
      },
      size: {
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-3.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
);

type Variants = VariantProps<typeof buttonVariants>;

type ButtonAsLink = Variants &
  ComponentPropsWithoutRef<typeof Link> & {
    href: string;
  };

type ButtonAsButton = Variants &
  ComponentPropsWithoutRef<'button'> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href) || /^(mailto|tel):/.test(href);

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href) {
    const { href, ...rest } = props as ButtonAsLink;

    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...rest } = props as ButtonAsButton;
  void _href;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
