'use client';
import * as C from '@/components/index';
import * as U from './utils/index';

export default function Cart() {
  const { filter, setFilter } = U.useCart();
  const {
    isViewModalVisible,
    isEditModalVisible,
    currentOrder,
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
              <h1>Pedido: {currentOrder.orderCode}</h1>
              <h1>Cliente: {currentOrder.client}</h1>
              <h1>Endereço: {currentOrder.address}</h1>
              <h1>Status: {currentOrder.status}</h1>
            </C.ViewModal>
          )}
          {isEditModalVisible && (
            <C.EditModal closeModal={handleCloseEditModal}>
              <h1>Modal Edição</h1>
              <h1>Pedido: {currentOrder.orderCode}</h1>
              <h1>Cliente: {currentOrder.client}</h1>
              <h1>Endereço: {currentOrder.address}</h1>
              <h1>Status: {currentOrder.status}</h1>
            </C.EditModal>
          )}
        </main>
      </div>
    </C.BaseLayout>
  );
}
