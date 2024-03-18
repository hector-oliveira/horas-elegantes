type RowDatasProps = {
  orderCode: string;
  value: string;
  client: string;
  dateOfBuy: string;
  address: string;
  status: string;
  zebraEffect: string;
};

const cellClassName = 'text-center py-4 px-6';

export const Row = (props: RowDatasProps) => (
  <tr className={props.zebraEffect}>
    <td className={cellClassName}>{props.orderCode}</td>
    <td className={cellClassName}>{props.value}</td>
    <td className={cellClassName}>{props.client}</td>
    <td className={cellClassName}>{props.dateOfBuy}</td>
    <td className={cellClassName}>{props.address}</td>
    <td className={cellClassName}>{props.status}</td>
  </tr>
);
