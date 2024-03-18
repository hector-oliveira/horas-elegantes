type HeadProps = {
  children: React.ReactNode;
};

export const Head = ({ children }: HeadProps) => {
  return <thead className="w-full sticky top-0">{children}</thead>;
};