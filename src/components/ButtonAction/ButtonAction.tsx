import { ButtonHTMLAttributes } from 'react';

type ButtonActionProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonAction = ({ children, ...rest }: ButtonActionProps) => {
  return <button {...rest}>{children}</button>;
};
