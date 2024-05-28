// useUpdateStatus.ts
import { useState } from 'react';
import axios from 'axios';
import { Item, Status, User } from './use-whish-data';

type OptionSelect = {
  id: string;
  name: string;
};

type WhishData = {
  id: string;
  item: Item[];
  status: Status;
  value_total: string;
  user: User;
};

export const useUpdateStatus = (
  whishData: WhishData[],
  setWhishData: React.Dispatch<React.SetStateAction<WhishData[]>>
) => {
  const [selectedOption, setSelectedOption] = useState<OptionSelect | null>(
    null
  );

  const updateStatus = async (editItem: WhishData) => {
    if (editItem === null || selectedOption === null) {
      console.error('editItem ou selectedOption é null');
      return;
    }

    try {
      const response = await axios.put(
        `https://beco-back.onrender.com/admin/orders/status`,
        {
          order_id: `${editItem.id}`,
          status_id: `${selectedOption.id}`
        }
      );

      if (response.status === 200) {
        setWhishData(
          whishData.map((item) =>
            item.id === editItem.id
              ? {
                  ...item,
                  status: { ...item.status, name: selectedOption.name }
                }
              : item
          )
        );
      }
    } catch (error) {
      console.error('Erro ao atualizar o status:', error);
    }
  };

  return { selectedOption, setSelectedOption, updateStatus };
};
