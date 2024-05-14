'use client';
import Link, { LinkProps } from 'next/link';

import { useActiveLink } from './hooks/use-active-link';

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode;
};

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const { isActive } = useActiveLink({ href });
  return (
    <>
      <Link
        className={`w-fit h-fit p-2 flex items-center justify-center rounded-full hover:bg-@ghost-white ${
          isActive ? 'bg-@ghost-white' : 'bg-@maastricht-blue-light'
        }`}
        href={href}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
}
