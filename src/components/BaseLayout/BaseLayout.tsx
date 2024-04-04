import { ReactNode } from 'react';
import { Sidebar } from '@/components';

type BaseLayoutProps = {
  children: ReactNode | ReactNode[];
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex h-screen bg-@chinese-white">
      <Sidebar />
      {children}
    </div>
  );
};
