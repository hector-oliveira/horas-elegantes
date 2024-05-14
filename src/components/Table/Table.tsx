'use client';
import { ButtonAction } from '../ButtonAction/ButtonAction';
import { IoEyeOutline } from 'react-icons/io5';

export type BodyDataProps = {
  id: string;
  cpf: string;
  name: string;
  email: string;
  active: boolean;
};

type TableProps = {
  hederData: string[];
  bodyData: BodyDataProps[];
  openViewModal?: (item: BodyDataProps) => void;
  openEditModal?: (item: BodyDataProps) => void;
};

const cellClassName = 'text-center p-3';

export const Table = ({ hederData, bodyData, openViewModal }: TableProps) => {
  const handleViewModal = (item: BodyDataProps) => {
    if (openViewModal) {
      openViewModal(item);
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
              <td className={cellClassName}>{item.cpf}</td>
              <td className={cellClassName}>{item.name}</td>
              <td className={cellClassName}>{item.email}</td>
              <td
                className={`flex justify-center items-center max-h-full gap-3 pt-2`}
              >
                {item.active ? 'Usuário Ativo' : 'Usuário Inativo'}
                <section className="flex w-max item-center gap-3">
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
                </section>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
