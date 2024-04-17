import { Fragment } from 'react';
interface OrderDetailsProps {
  order: {
    cpf: string;
    name: string;
    phone: string;
    active: boolean;
  };
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
  const details = [
    { label: 'CPF', value: order.cpf },
    { label: 'NOME', value: order.name },
    { label: 'TELEFONE', value: order.phone },
    { label: 'Status', value: order.active ? 'Ativo' : 'Inativo' }
  ];

  return (
    <div>
      {details.map((detail, index) => (
        <Fragment key={index}>
          <h2 className="text-brow-4 font-bold text-xl">{detail.label}</h2>
          <p className="text-brow-3 font-normal text-md mb-6">{detail.value}</p>
        </Fragment>
      ))}
    </div>
  );
};
