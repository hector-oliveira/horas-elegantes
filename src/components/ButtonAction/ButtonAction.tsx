type ButtonActionProps = {
  children: React.ReactNode;
};

export const ButtonAction = ({ children }: ButtonActionProps) => {
  return <button>{children}</button>;
};
