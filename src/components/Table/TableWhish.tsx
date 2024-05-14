'use client';
import { Item, Status, User } from '@/app/(admin)/wishlist/page';
import { ButtonAction } from '../ButtonAction/ButtonAction';
import { IoEyeOutline } from 'react-icons/io5';
import { TbEditCircle } from 'react-icons/tb';

export interface WhishData {
  id: string;
  item: Item[];
  status: Status;
  value_total: string;
  user: User;
}

type TableProps = {
  hederData: string[];
  bodyData: WhishData[];
  openViewModal?: (item: WhishData) => void;
  openEditModal?: (item: WhishData) => void;
};

const cellClassName = 'text-center p-3';

export const TableWhish = ({
  hederData,
  bodyData,
  openViewModal,
  openEditModal
}: TableProps) => {
  const handleViewModal = (item: WhishData) => {
    if (openViewModal) {
      openViewModal(item);
    }
  };

  const handleEditModal = (item: WhishData) => {
    if (openEditModal) {
      openEditModal(item);
    }
  };

  const getZebraEffect = (index: number) =>
    index % 2 === 0 ? 'bg-@snow-white' : 'bg-@botticelli-blue';

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
        {Array.isArray(bodyData) &&
          bodyData.map((item, index) => (
            <tr key={item.id} className={getZebraEffect(index)}>
              <td className={cellClassName}>{item.user.name}</td>
              <td className={`${cellClassName} flex justify-center`}>
                {item.status.name}
                <section className="flex w-max ml-3 item-center gap-3">
                  <ButtonAction
                    aria-label="Visualizar"
                    onClick={() => handleViewModal(item)}
                  >
                    <IoEyeOutline
                      size={26}
                      color="#2c899a"
                      className="cursor-pointer"
                    />
                  </ButtonAction>
                  <ButtonAction
                    aria-label="Editar"
                    onClick={() => handleEditModal(item)}
                  >
                    <TbEditCircle
                      size={26}
                      color="#9a752c"
                      className="cursor-pointer"
                    />
                  </ButtonAction>
                </section>
              </td>
              <td
                className={`${cellClassName} flex justify-between items-center`}
              ></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
