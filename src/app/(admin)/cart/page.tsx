'use client';
import * as Components from '@/components';
import { useCart } from './hooks/useCart';
import { useModal } from './hooks/useModal';
import { HeaderData } from './data/headerData';
import { useEffect, useState } from 'react';
import { BodyDataProps } from '@/components/Table/Table';

type OrderProps = {
  cpf: string;
  name: string;
  email: string;
  active: boolean;
};
export default function Cart() {
  const { filter, setFilter } = useCart();
  const { isViewModalVisible, viewModalHandlers, viewItem } =
    useModal<OrderProps>();
  const [bodyData, setBodyData] = useState<BodyDataProps[]>([]);
  const [filteredData, setFilteredData] = useState<BodyDataProps[]>([]);

  useEffect(() => {
    setFilteredData(
      bodyData.filter((data) =>
        data.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, bodyData]);

  useEffect(() => {
    fetch('https://beco-back.onrender.com/users/all?isAdmin=admin@master.com')
      .then((response) => response.json())
      .then((data) => setBodyData(data));
  }, []);

  const headerData = HeaderData;

  return (
    <Components.BaseLayout>
      <div className="w-full px-4 gap-2">
        <Components.Header namePage="Troca e Devoluções" />
        <Components.Input.Search
          filterValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <main className="overflow-y-scroll max-h-96 px-2 shadow-lg">
          <Components.Table
            hederData={headerData}
            bodyData={filteredData}
            openViewModal={viewModalHandlers.open}
          />
          {isViewModalVisible && viewItem !== null && (
            <Components.ViewModal closeModal={viewModalHandlers.close}>
              <Components.OrderDetails order={viewItem} />
            </Components.ViewModal>
          )}
        </main>
      </div>
    </Components.BaseLayout>
  );
}
