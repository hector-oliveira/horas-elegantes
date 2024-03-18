import { rowDatas } from '../data/rowData';
import { useState } from 'react';

export const useCart = () => {
  const [filter, setFilter] = useState('');

  const filteredRowData = rowDatas.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  const getZebraEffect = (index: number) =>
    index % 2 === 0 ? 'bg-gray-200' : '';

  return { filter, setFilter, filteredRowData, getZebraEffect };
};
