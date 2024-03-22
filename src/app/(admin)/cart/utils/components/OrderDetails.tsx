import { useState } from 'react';

export type OrderProps = {
  orderCode: string;
  client: string;
  address: string;
  status: string;
  newStatus?: string;
};

type OrderDetailsProps = {
  order: OrderProps;
};

export const OrderDetails = ({ order }: OrderDetailsProps) => {
  const [newStatus, setNewStatus] = useState(order.status);
  const handleNewStatusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewStatus(event.target.value);
  };
  return (
    <div>
      <h1>Pedido: {order.orderCode}</h1>
      <h1>Cliente: {order.client}</h1>
      <h1>Endereço: {order.address}</h1>
      <h1>Status: {newStatus}</h1>
      {order.newStatus && (
        <input
          type="text"
          placeholder="Novo Status"
          value={newStatus}
          onChange={handleNewStatusChange}
        />
      )}
    </div>
  );
};
