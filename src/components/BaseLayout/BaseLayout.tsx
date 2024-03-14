import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';

type BaseLayoutProps = {
  children: ReactNode | ReactNode[];
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex h-screen gap-4">
      <Sidebar />
      {children}
    </div>
  );
};
