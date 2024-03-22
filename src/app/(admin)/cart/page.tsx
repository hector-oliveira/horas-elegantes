'use client';
import * as C from '@/components/index';
import * as U from './utils/index';
import { OrderDetails } from './utils/components/OrderDetails';

export default function Cart() {
  const { filter, setFilter } = U.useCart();
  const {
    isViewModalVisible,
    isEditModalVisible,
    viewOrder,
    editOrder,
    handleOpenViewModal,
    handleCloseViewModal,
    handleOpenEditModal,
    handleCloseEditModal
  } = U.useModal();

  return (
    <C.BaseLayout>
      <div className="w-full px-4 gap-2">
        <C.Header namePage="Troca e Devoluções" />
        <C.Input.Search
          filterValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <main className="overflow-y-scroll max-h-96 px-2 shadow-lg">
          <C.Table
            hederData={U.HeaderData}
            bodyData={U.RowDatas}
            openViewModal={handleOpenViewModal}
            openEditModal={handleOpenEditModal}
          />
          {isViewModalVisible && (
            <C.ViewModal closeModal={handleCloseViewModal}>
              <h1>Modal Visualização</h1>
              <OrderDetails order={viewOrder} />
            </C.ViewModal>
          )}
          {isEditModalVisible && (
            <C.EditModal closeModal={handleCloseEditModal}>
              <h1>Modal Edição</h1>
              <OrderDetails order={editOrder} />
            </C.EditModal>
          )}
        </main>
      </div>
    </C.BaseLayout>
  );
}
