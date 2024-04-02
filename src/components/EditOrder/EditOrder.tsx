type Order = {
  orderCode: string;
  client: string;
  address: string;
  status: string;
};

type EditOrderProps = {
  order: Order;
  handleUpdate: () => void;
  handleStatusChange: (event: Event) => void;
};

type Event = React.ChangeEvent<HTMLInputElement>;

export function EditOrder({
  order,
  handleStatusChange,
  handleUpdate
}: EditOrderProps) {
  return (
    <div>
      <h1>Modal Edição</h1>
      <p>Pedido: {order.orderCode}</p>
      <p>Cliente: {order.client}</p>
      <p>Endereço: {order.address}</p>
      <p>Status: {order.status}</p>
      <input
        type="text"
        placeholder="Novo Status"
        onChange={handleStatusChange}
        className="shadow appearance-none border my-4 rounded w-full p-3 text-gray-700 leading-tight text-xl focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Atualizar
      </button>
    </div>
  );
}
