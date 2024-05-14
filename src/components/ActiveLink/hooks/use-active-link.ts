import { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export function useActiveLink({ href }: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href.toString();

  return { isActive };
}
