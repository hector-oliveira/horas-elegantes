'use client';
import * as C from '@/components/index';
import { useCart } from '../cart/hooks/useCart';
import { useEffect, useState } from 'react';
import { TableWhish } from '@/components/Table/TableWhish';
import { useModal } from '../cart/hooks/useModal';
import axios from 'axios';

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

type OptionSelect = {
  id: string;
  name: string;
};

const headerData = ['Usuário', 'Status'];
export default function WishList() {
  const { filter, setFilter } = useCart();

  const [whishData, setWhishData] = useState<WhishData[]>([]);
  const [options, setOptions] = useState<OptionSelect[]>([]);
  const [selectedOption, setSelectedOption] = useState<OptionSelect | null>(
    null
  );
  const [filteredData, setFilteredData] = useState<WhishData[]>([]);

  useEffect(() => {
    setFilteredData(
      whishData.filter(
        (data) =>
          data.status.name.toLowerCase().includes(filter.toLowerCase()) ||
          data.user.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, whishData]);

  const {
    isEditModalVisible,
    isViewModalVisible,
    editItem,
    viewItem,
    viewModalHandlers,
    editModalHandlers
  } = useModal<WhishData>();

  useEffect(() => {
    fetch('https://beco-back.onrender.com/admin/orders')
      .then((response) => response.json())
      .then((data) => setWhishData(data));
  }, []);

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await fetch('https://beco-back.onrender.com/status/all');
      const data: OptionSelect[] = await res.json();
      setOptions(data);
    };

    fetchOptions();
  }, []);

  const ids = editItem?.item.filter((item) => item.id).map((item) => item.id);

  const generateCoupons = async () => {
    try {
      const response = await axios.post(
        'https://beco-back.onrender.com/admin/items-receipt',
        {
          order_id: editItem?.id,
          items: ids
        }
      );

      console.log(response.data);
      editModalHandlers.close();
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async () => {
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
        editModalHandlers.close();
      }
    } catch (error) {
      console.error('Erro ao atualizar o status:', error);
    }
  };

  return (
    <C.BaseLayout>
      <div className="w-full px-4 gap-2">
        <C.Header namePage="Pedidos" />
        <C.Input.Search
          filterValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <main className="overflow-y-scroll max-h-96 px-2 shadow-lg">
          <TableWhish
            hederData={headerData}
            bodyData={filteredData}
            openViewModal={viewModalHandlers.open}
            openEditModal={editModalHandlers.open}
          />
        </main>
        {isEditModalVisible && editItem !== null && (
          <C.ViewModal closeModal={editModalHandlers.close}>
            <p>{editItem.user.name}</p>
            {Array.isArray(editItem.item) ? (
              <div>
                <p>{editItem.item.length} items</p>
                <p>
                  {editItem.item
                    .map((item) => (item.name ? item.name : 'Item sem nome'))
                    .join(',')}
                </p>
              </div>
            ) : (
              <p>editItem.item não é uma matriz</p>
            )}
            <p>{editItem.status.name}</p>
            <div className="flex flex-col gap-2">
              <select
                className="mt-4 border border-black rounded-lg cursor-pointer p-2 border-none bg-@desert-sand focus:outline-none focus:ring-2 focus:ring-brow-3 focus:border-transparent"
                onChange={(e) => {
                  const selected = options.find(
                    (option) => option.name === e.target.value
                  );
                  setSelectedOption(selected || null);
                }}
              >
                {options.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>

              {ids &&
                ids.length > 0 &&
                editItem.status.name === 'Itens devolvidos' && (
                  <button
                    className="bg-brow-3 p-1 hover:bg-brow-4 hover:text-white rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-brow-3 focus:border-transparent"
                    onClick={generateCoupons}
                  >
                    Gerar Cupons
                  </button>
                )}

              <button
                className="bg-brow-3 p-1 hover:bg-brow-4 hover:text-white rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-brow-3 focus:border-transparent"
                onClick={updateStatus}
              >
                ATUALIZAR
              </button>
            </div>
          </C.ViewModal>
        )}
        {isViewModalVisible && viewItem !== null && (
          <C.ViewModal closeModal={viewModalHandlers.close}>
            <p>{viewItem.user.name}</p>
          </C.ViewModal>
        )}
      </div>
    </C.BaseLayout>
  );
}
