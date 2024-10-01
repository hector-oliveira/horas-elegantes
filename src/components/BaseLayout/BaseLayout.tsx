import { ReactNode } from 'react';
import { Sidebar } from '@/components';

type BaseLayoutProps = {
  children: ReactNode | ReactNode[];
};

export const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <div className="flex h-screen bg-@chinese-white">
      <Sidebar />
      {props.children}
    </div>
  );
};
