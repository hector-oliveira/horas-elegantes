type TitleHeaderProps = {
  titles: string[];
};

export const TitleHeader = ({ titles }: TitleHeaderProps) => {
  return (
    <>
      {titles.map((title) => (
        <th key={title}>{title}</th>
      ))}
    </>
  );
};
