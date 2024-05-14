'use client';
import * as Components from '@/components';
import { useCart } from './hooks/useCart';
import { useModal } from './hooks/useModal';
import { useStatus } from './hooks/useStatus';
import { HeaderData } from './data/headerData';
import { useEffect, useState } from 'react';
import { BodyDataProps } from '@/components/Table/Table';

type OrderProps = {
  cpf: string;
  name: string;
  email: string;
};
export default function Cart() {
  const { filter, setFilter } = useCart();
  const {
    isViewModalVisible,
    isEditModalVisible,
    editModalHandlers,
    viewModalHandlers,
    editItem,
    viewItem
  } = useModal<OrderProps>();
  const { status, setStatus, handleStatusChange, handleUpdate } = useStatus();
  const [bodyData, setBodyData] = useState<BodyDataProps[]>([]);

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
            bodyData={bodyData}
            openViewModal={viewModalHandlers.open}
            openEditModal={editModalHandlers.open}
          />
          {isViewModalVisible && viewItem !== null && (
            <Components.ViewModal closeModal={viewModalHandlers.close}>
              <Components.OrderDetails order={viewItem} />
            </Components.ViewModal>
          )}
          {isEditModalVisible && editItem !== null && (
            <Components.ViewModal closeModal={editModalHandlers.close}>
              <Components.EditOrder
                handleStatusChange={handleStatusChange}
                handleUpdate={handleUpdate}
                order={editItem}
              />
            </Components.ViewModal>
          )}
          {status.isUpdated && (
            <Components.UpdateStatusModal
              status={status}
              setStatus={() => setStatus({ ...status, isUpdated: false })}
            />
          )}
        </main>
      </div>
    </Components.BaseLayout>
  );
}
