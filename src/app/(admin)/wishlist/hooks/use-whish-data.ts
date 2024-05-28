import { useEffect, useState } from 'react';

export interface Item {
  id: string;
  price: string;
  name: string;
}

export interface Status {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
}

export interface WhishData {
  id: string;
  item: Item[];
  status: Status;
  value_total: string;
  user: User;
}

export const useWhishData = () => {
  const [whishData, setWhishData] = useState<WhishData[]>([]);

  useEffect(() => {
    fetch('https://beco-back.onrender.com/admin/orders')
      .then((response) => response.json())
      .then((data) => setWhishData(data));
  }, []);

  return whishData;
};
