interface OrderDetailsProps {
  order: {
    cpf: string;
    name: string;
    phone: string;
    active: boolean;
  };
  handleUpdate: () => void;
  handleStatusChange: (event: Event) => void;
}

type Event = React.ChangeEvent<HTMLInputElement>;

export function EditOrder({
  order,
  handleStatusChange,
  handleUpdate
}: OrderDetailsProps) {
  return (
    <div>
      <h1>Modal Edição</h1>
      <p>CPF: {order.cpf}</p>
      <p>Cliente: {order.name}</p>
      <p>Telefone: {order.phone}</p>
      <p>Status: {order.active}</p>
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
