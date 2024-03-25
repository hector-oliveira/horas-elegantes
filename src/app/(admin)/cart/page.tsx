'use client';
import React, { useState } from 'react';
import * as Components from '@/components/index';
import * as Utils from './utils/index';

export default function Cart() {
  const { filter, setFilter } = Utils.useCart();
  const {
    isViewModalVisible,
    isEditModalVisible,
    editOrder,
    viewOrder,
    editModalHandlers,
    viewModalHandlers
  } = Utils.useModal();

  const rowData = Utils.RowDatas;
  const headerData = Utils.HeaderData;

  const [status, setStatus] = useState({
    newStatus: '',
    isUpdated: false
  });

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus({ ...status, newStatus: e.target.value });
  };

  const handleUpdate = () => {
    setStatus({ newStatus: '', isUpdated: true });
    editModalHandlers.close();
  };

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
              <div>
                <h1>Modal Visualização</h1>
                <p>Pedido: {viewOrder.orderCode}</p>
                <p>Cliente: {viewOrder.client}</p>
                <p>Endereço: {viewOrder.address}</p>
                <p>Status: {viewOrder.status}</p>
              </div>
            </Components.ViewModal>
          )}
          {isEditModalVisible && (
            <Components.EditModal closeModal={editModalHandlers.close}>
              <div>
                <h1>Modal Edição</h1>
                <p>Pedido: {editOrder.orderCode}</p>
                <p>Cliente: {editOrder.client}</p>
                <p>Endereço: {editOrder.address}</p>
                <p>Status: {editOrder.status}</p>
                <input
                  type="text"
                  placeholder="Novo Status"
                  value={status.newStatus}
                  onChange={handleStatusChange}
                  className="shadow appearance-none border my-4 rounded w-full p-3 text-gray-700 leading-tight text-xl focus:outline-none focus:shadow-outline"
                />
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Atualizar
                </button>
              </div>
            </Components.EditModal>
          )}
          {status.isUpdated && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-sm">
              <main className="bg-[#F8F8F8] rounded-lg p-8 flex flex-col-reverse justify-between h-1/4">
                <p className="text-xl text-green-600">
                  Status atualizado com sucesso!
                </p>
                <button
                  className="bg-red-500 text-white rounded px-4 py-2 w-max self-end cursor-pointer hover:bg-red-600"
                  onClick={() => setStatus({ ...status, isUpdated: false })}
                >
                  Fechar
                </button>
              </main>
            </div>
          )}
        </main>
      </div>
    </Components.BaseLayout>
  );
}
