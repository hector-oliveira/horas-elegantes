type SearchProps = {
  filterValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ filterValue, onChange }: SearchProps) => {
  return (
    <div className="flex justify-center my-3">
      <input
        type="text"
        placeholder="Buscar"
        value={filterValue}
        onChange={onChange}
        className="bg-[#FAFAFA] p-4 rounded-lg shadow-md focus:outline-brow-3 focus:shadow-lg placeholder:text-black w-4/5"
      />
    </div>
  );
};
