type RowDatasProps = {
  wishlist: string;
  value: string;
  client: string;
  dateOfBuy: string;
  address: string;
  status: string;
};

const cellClassName = 'text-center p-2';

export const TableRow = (props: RowDatasProps) => (
  <tr className="h-max w-full bg-gray-200">
    <td className={cellClassName}>{props.wishlist}</td>
    <td className={cellClassName}>{props.value}</td>
    <td className={cellClassName}>{props.client}</td>
    <td className={cellClassName}>{props.dateOfBuy}</td>
    <td className={cellClassName}>{props.address}</td>
    <td className={cellClassName}>{props.status}</td>
  </tr>
);
