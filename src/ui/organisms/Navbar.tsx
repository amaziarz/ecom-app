'use client';

import type { Route } from 'next';
import { useEffect, useRef } from 'react';
import { NavLink } from '@/ui/atoms/NavLink';

export interface NavItem<T extends string = string> {
  href: Route<T>;
  label: string;
  exact?: boolean;
}

export interface NavbarProps {
  links: NavItem[];
}

export function Navbar({ links }: NavbarProps) {
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function toggleNavBlur() {
      const blurClass = 'backdrop-blur-3xl';
      if (window.scrollY === 0) {
        navbarRef.current?.classList.remove(blurClass);
      } else {
        navbarRef.current?.classList.add(blurClass);
      }
    }

    toggleNavBlur();
    window.addEventListener('scroll', toggleNavBlur);

    return () => {
      window.removeEventListener('scroll', toggleNavBlur);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={
        'sticky top-0 border-b border-gray-200 px-4 py-6 backdrop-blur-3xl'
      }
    >
      <ul className="container mx-auto flex">
        {links.map((link) => (
          <li key={link.href} className="mr-8">
            <NavLink href={link.href} exact={link.exact} className="text-lg">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
