type TitleHeaderProps = {
  titles: string[];
};

export const TitleHeader = ({ titles }: TitleHeaderProps) => {
  return (
    <tr>
      {titles.map((title) => (
        <th key={title} className="py-3">
          {title}
        </th>
      ))}
    </tr>
  );
};
