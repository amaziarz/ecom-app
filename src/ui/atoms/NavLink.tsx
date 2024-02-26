'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from 'next';
import clsx from 'clsx';

export interface NavLinkProps<T extends string> {
  children: React.ReactNode;
  href: Route<T>;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  'aria-label'?: string;
}

export function NavLink<T extends string>({
  children,
  href,
  className,
  activeClassName,
  exact,
  'aria-label': ariaLabel,
}: NavLinkProps<T>) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        'text-blue-500 hover:text-blue-600 hover:underline',
        className,
        isActive && ['text-blue-600 underline', activeClassName],
      )}
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
