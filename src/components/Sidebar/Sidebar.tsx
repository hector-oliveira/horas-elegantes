'use client';
// import React from 'react';
import { sidebarItems } from './data/sidebarItems.data';
import { ActiveLink } from '../ActiveLink/ActiveLink';
export const Sidebar = () => {
  return (
    <div>
      <aside className="w-36 h-screen p-4 bg-@maastricht-blue shadow-xl">
        <ul className="flex flex-col w-full mt-40 gap-4">
          {sidebarItems.map((item) => (
            <li key={item.label} className="flex justify-center">
              <ActiveLink href={item.href}>
                <item.icon size={35} />
              </ActiveLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
