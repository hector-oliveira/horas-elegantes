import { ButtonAction } from '../ButtonAction/ButtonAction';
import { IoEyeOutline } from 'react-icons/io5';
import { TbEditCircle } from 'react-icons/tb';

type BodyDataProps = {
  orderCode: string;
  value: string;
  client: string;
  dateOfBuy: string;
  address: string;
  status: string;
};

type TableProps = {
  hederData: string[];
  bodyData: BodyDataProps[];
};

const cellClassName = 'text-center p-3';

export const Table = ({ hederData, bodyData }: TableProps) => {
  return (
    <table className="table-auto w-full border-spacing-y-4 border-separate">
      <thead className="w-full sticky top-0 bg-gray-300 shadow-lg">
        <tr>
          {hederData.map((item, index) => (
            <th key={index} className="py-4">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {bodyData.map((item, index) => (
          <tr key={index}>
            <td className={cellClassName}>{item.orderCode}</td>
            <td className={cellClassName}>{item.value}</td>
            <td className={cellClassName}>{item.client}</td>
            <td className={cellClassName}>{item.dateOfBuy}</td>
            <td className={cellClassName}>{item.address}</td>
            <td
              className={`${cellClassName} flex justify-between items-center`}
            >
              {item.status}
              <section className="flex w-max item-center gap-3">
                <ButtonAction>
                  <IoEyeOutline
                    size={26}
                    color="#2c899a"
                    className="cursor-pointer"
                  />
                </ButtonAction>
                <ButtonAction>
                  <TbEditCircle
                    size={26}
                    color="#9a752c"
                    className="cursor-pointer"
                  />
                </ButtonAction>
              </section>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
