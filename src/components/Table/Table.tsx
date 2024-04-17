'use client';
// import { useEffect, useState } from 'react';
import { ButtonAction } from '../ButtonAction/ButtonAction';
import { IoEyeOutline } from 'react-icons/io5';
import { TbEditCircle } from 'react-icons/tb';

export type BodyDataProps = {
  id: string;
  cpf: string;
  name: string;
  phone: string;
  birth: string;
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

export const Table = ({
  hederData,
  bodyData,
  openViewModal,
  openEditModal
}: TableProps) => {
  const handleViewModal = (item: BodyDataProps) => {
    if (openViewModal) {
      openViewModal(item);
    }
  };

  const handleEditModal = (item: BodyDataProps) => {
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
              <td className={cellClassName}>{item.cpf}</td>
              <td className={cellClassName}>{item.name}</td>
              <td className={cellClassName}>{item.phone}</td>
              <td className={cellClassName}>{item.birth}</td>
              <td className={cellClassName}>{item.email}</td>
              <td
                className={`${cellClassName} flex justify-between items-center`}
              >
                {item.active ? 'Ativo' : 'Inativo'}
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
            </tr>
          ))}
      </tbody>
    </table>
  );
};
