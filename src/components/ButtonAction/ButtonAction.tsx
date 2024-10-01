import { ButtonHTMLAttributes } from 'react';
interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function ButtonAction({ children, ...rest }: ButtonActionProps) {
  return <button {...rest}>{children}</button>;
}

export default ButtonAction;
