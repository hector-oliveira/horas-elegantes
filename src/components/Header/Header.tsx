type HeaderProps = {
  namePage: string;
};
export const Header = ({ namePage }: HeaderProps) => {
  return (
    <div className="w-full h-max flex justify-between px-10 py-20">
      <h1 className="text-2xl font-bold">{namePage}</h1>
      <section className="flex justify-between items-center w-fit gap-6">
        <input type="date" className="bg-white p-2 rounded-lg" />
        <p className="text-gray-400 font-normal text-sm">até</p>
        <input type="date" className="bg-white p-2 rounded-lg" />
      </section>
    </div>
  );
};
