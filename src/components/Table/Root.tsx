type BodyProps = {
  children: React.ReactNode;
};

export const Root = ({ children }: BodyProps) => {
  return (
    <table className="table-auto w-full border-spacing-y-2 border-separate">
      {children}
    </table>
  );
};
