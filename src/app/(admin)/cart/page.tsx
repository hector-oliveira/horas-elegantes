'use client';
import * as Components from '@/components';
import { useCart } from './hooks/useCart';
import { useModal } from './hooks/useModal';
import { useStatus } from './hooks/useStatus';
import { RowDatas } from './data/rowData';
import { HeaderData } from './data/headerData';

export default function Cart() {
  const { filter, setFilter } = useCart();
  const {
    isViewModalVisible,
    isEditModalVisible,
    editOrder,
    viewOrder,
    editModalHandlers,
    viewModalHandlers
  } = useModal();
  const { status, setStatus, handleStatusChange, handleUpdate } = useStatus();

  const rowData = RowDatas;
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
            bodyData={rowData}
            openViewModal={viewModalHandlers.open}
            openEditModal={editModalHandlers.open}
          />
          {isViewModalVisible && (
            <Components.ViewModal closeModal={viewModalHandlers.close}>
              <Components.OrderDetails order={viewOrder} />
            </Components.ViewModal>
          )}
          {isEditModalVisible && (
            <Components.ViewModal closeModal={editModalHandlers.close}>
              <Components.EditOrder
                handleStatusChange={handleStatusChange}
                handleUpdate={handleUpdate}
                order={editOrder}
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
