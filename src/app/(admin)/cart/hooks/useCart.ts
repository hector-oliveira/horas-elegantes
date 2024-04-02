import { RowDatas } from '../data/rowData';
import { useState } from 'react';

export const useCart = () => {
  const [filter, setFilter] = useState('');

  const filteredRowData = RowDatas.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  const getZebraEffect = (index: number) =>
    index % 2 === 0 ? 'bg-@snow-white' : 'bg-@botticelli-blue';

  return { filter, setFilter, filteredRowData, getZebraEffect };
};
