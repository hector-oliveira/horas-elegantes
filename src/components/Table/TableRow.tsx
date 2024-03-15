type RowDatasProps = {
  wishlist: string;
  value: string;
  client: string;
  dateOfBuy: string;
  address: string;
  status: string;
  zebraEffect: string;
};

const cellClassName = 'text-center py-4 px-6';

export const TableRow = (props: RowDatasProps) => (
  <tr className={props.zebraEffect}>
    <td className={cellClassName}>{props.wishlist}</td>
    <td className={cellClassName}>{props.value}</td>
    <td className={cellClassName}>{props.client}</td>
    <td className={cellClassName}>{props.dateOfBuy}</td>
    <td className={cellClassName}>{props.address}</td>
    <td className={cellClassName}>{props.status}</td>
  </tr>
);
