'use client';
import Link from 'next/link';
import { sidebarItems } from './data/sidebarItems.data';
export const Sidebar = () => {
  return (
    <div>
      <aside className="w-36 h-screen p-4 bg-brow-1 shadow-xl">
        <ul className="flex flex-col w-full mt-40 gap-4">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <div className="flex justify-center">
                  <item.icon size={32} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
