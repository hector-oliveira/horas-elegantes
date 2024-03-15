type Props = {
  value: string;
  handleOnChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateCalendar = ({ value, handleOnChange }: Props) => {
  return (
    <input
      type="date"
      value={value}
      onChange={handleOnChange}
      className="bg-white p-2 rounded-lg cursor-pointer focus:outline-brow-3 focus:shadow-lg"
    />
  );
};
