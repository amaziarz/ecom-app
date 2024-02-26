import type { Route } from 'next';
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
  return (
    <nav className="p-4">
      <ul className="flex">
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
