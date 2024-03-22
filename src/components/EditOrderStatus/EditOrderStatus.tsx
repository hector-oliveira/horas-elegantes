import { useState } from 'react';

type OrderDetailsProps = {
  orderCodeValue: string;
  clientValue: string;
  addressValue: string;
  initialStatusValue: string;
};

export const EditOrderStatus = ({
  orderCodeValue,
  clientValue,
  addressValue,
  initialStatusValue
}: OrderDetailsProps) => {
  const [statusValue, setStatusValue] = useState(initialStatusValue);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusValue(event.target.value);
  };
  const h1ClassName = 'text-2xl font-bold mb-4';
  const h2ClassName = 'text-lg font-semibold text-brow-4 mt-3';
  const pClassName = 'opacity-60 font-sm';
  return (
    <>
      <h1 className={h1ClassName}>{orderCodeValue}</h1>
      <h2 className={h2ClassName}>Endereço de Entrega</h2>
      <p className={pClassName}>{addressValue}</p>
      <h2 className={h2ClassName}>Cliente</h2>
      <p className={pClassName}>{clientValue}</p>
      <h2 className={h2ClassName}>Status</h2>
      <p className={pClassName}>{statusValue}</p>
      <input type="text" value={statusValue} onChange={handleStatusChange} />
    </>
  );
};
