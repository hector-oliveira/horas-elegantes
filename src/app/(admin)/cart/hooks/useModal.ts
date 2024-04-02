import { useState } from 'react';

type OrderProps = {
  orderCode: string;
  client: string;
  address: string;
  status: string;
  newStatus?: string;
};

export function useModal() {
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [viewOrder, setViewOrder] = useState<OrderProps>({
    orderCode: '',
    client: '',
    address: '',
    status: ''
  });
  const [editOrder, setEditOrder] = useState<OrderProps>({
    orderCode: '',
    client: '',
    address: '',
    status: '',
    newStatus: ''
  });

  // Define a função para atualizar os detalhes do pedido visualizado
  const setViewOrderDetails = (item: OrderProps) => setViewOrder(item);

  // Define a função para atualizar os detalhes do pedido editado
  const setEditOrderDetails = (item: OrderProps) =>
    setEditOrder({ ...item, newStatus: item.status });

  // Define as funções para abrir e fechar o modal de visualização
  const viewModalHandlers = {
    open: (item: OrderProps) => {
      setViewOrderDetails(item);
      setIsViewModalVisible(true);
    },
    close: () => setIsViewModalVisible(false)
  };

  // Define as funções para abrir e fechar o modal de edição
  const editModalHandlers = {
    open: (item: OrderProps) => {
      setEditOrderDetails(item);
      setIsEditModalVisible(true);
    },
    close: () => setIsEditModalVisible(false)
  };

  return {
    isViewModalVisible,
    isEditModalVisible,
    viewOrder,
    editOrder,
    viewModalHandlers,
    editModalHandlers
  };
}
