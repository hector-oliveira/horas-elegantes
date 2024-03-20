type HeadProps = {
  children: React.ReactNode;
};

export const Head = ({ children }: HeadProps) => {
  return (
    <thead className="w-full sticky top-0 bg-gray-300 shadow-lg">
      {children}
    </thead>
  );
};
