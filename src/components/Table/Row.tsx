import React, { useCallback } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { TbEditCircle } from 'react-icons/tb';

type RowDatasProps = {
  orderCode: string;
  value: string;
  client: string;
  dateOfBuy: string;
  address: string;
  status: string;
  zebraEffect: string;
  openModal: (code: string) => void;
};

const cellClassName = 'text-center py-4';

export const Row = ({
  orderCode,
  value,
  client,
  dateOfBuy,
  address,
  status,
  zebraEffect,
  openModal
}: RowDatasProps) => {
  const handleOpenModal = useCallback(() => {
    openModal(orderCode);
  }, [orderCode, openModal]);

  return (
    <tr className={zebraEffect}>
      <td className={cellClassName}>{orderCode}</td>
      <td className={cellClassName}>{value}</td>
      <td className={cellClassName}>{client}</td>
      <td className={cellClassName}>{dateOfBuy}</td>
      <td className={cellClassName}>{address}</td>
      <td className={`${cellClassName} flex justify-between item center gap-2`}>
        {status}
        <section className="flex flex-1 justify-end gap-4 pr-4">
          <button onClick={handleOpenModal}>
            <MdOutlineRemoveRedEye
              size={22}
              color="#2c899a"
              className="cursor-pointer"
            />
          </button>
          <button onClick={handleOpenModal}>
            <TbEditCircle
              size={22}
              color="#8B4E1C"
              className="cursor-pointer"
            />
          </button>
        </section>
      </td>
    </tr>
  );
};
