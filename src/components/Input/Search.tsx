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
        className="bg-@ghost-white p-4 rounded-lg text-xl shadow-md focus:outline-@maastricht-blue focus:shadow-lg placeholder:text-black w-4/5"
      />
    </div>
  );
};
