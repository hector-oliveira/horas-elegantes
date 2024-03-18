type BodyProps = {
  children: React.ReactNode;
};

export const Body = ({ children }: BodyProps) => {
  return <tbody className="w-full">{children}</tbody>;
};
