'use client';
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

export const Row = (props: RowDatasProps) => {
  return (
    <tr className={props.zebraEffect}>
      <td className={cellClassName}>{props.orderCode}</td>
      <td className={cellClassName}>{props.value}</td>
      <td className={cellClassName}>{props.client}</td>
      <td className={cellClassName}>{props.dateOfBuy}</td>
      <td className={cellClassName}>{props.address}</td>
      <td className={`${cellClassName} flex justify-between item center gap-2`}>
        {props.status}
        <section className="flex flex-1 justify-end gap-4 pr-4">
          <button onClick={() => props.openModal(props.orderCode)}>
            <MdOutlineRemoveRedEye
              size={22}
              color="#5784E6"
              className="cursor-pointer"
            />
          </button>
          <button onClick={() => props.openModal(props.orderCode)}>
            <TbEditCircle
              size={22}
              color="#F5C400"
              className="cursor-pointer"
            />
          </button>
        </section>
      </td>
    </tr>
  );
};
