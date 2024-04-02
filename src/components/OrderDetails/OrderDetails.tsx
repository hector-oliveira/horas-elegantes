import React from 'react';

interface Order {
  orderCode: string;
  client: string;
  address: string;
  status: string;
}

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div>
      <h2 className="text-brow-4 font-bold text-xl">Pedido</h2>
      <p className="text-brow-3 font-normal text-md mb-6">{order.orderCode}</p>
      <h2 className="text-brow-4 font-bold text-xl">Cliente</h2>
      <p className="text-brow-3 font-normal text-md mb-6">{order.client}</p>
      <h2 className="text-brow-4 font-bold text-xl">Endereço</h2>
      <p className="text-brow-3 font-normal text-md mb-6">{order.address}</p>
      <h2 className="text-brow-4 font-bold text-xl">Status</h2>
      <p className="text-brow-3 font-normal text-md mb-6">{order.status}</p>
    </div>
  );
}
