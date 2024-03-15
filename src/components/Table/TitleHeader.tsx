type TitleHeaderProps = {
  titles: string[];
};

export const TitleHeader = ({ titles }: TitleHeaderProps) => {
  return (
    <tr className="shadow-md bg-gray-50">
      {titles.map((title) => (
        <th key={title} className="py-3">
          {title}
        </th>
      ))}
    </tr>
  );
};
