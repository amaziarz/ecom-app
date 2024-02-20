import './globals.css';
import type { Metadata, Route } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, type NavItem } from '@/ui/organisms/Navbar';

const inter = Inter({ subsets: ['latin'] });

const links = [
  {
    href: '/',
    label: 'Home',
    exact: true,
  },
  {
    href: '/products/1' as Route,
    label: 'All',
  },
] satisfies NavItem[];

export const metadata: Metadata = {
  title: 'ecom-app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar links={links} />
        <main className="container mx-auto mb-12 mt-8 px-4">{children}</main>
      </body>
    </html>
  );
}
