// import { BodyDataProps } from '@/components/Table/Table';
import { useState } from 'react';

// export type OrderProps = BodyDataProps & {
//   newStatus?: string;
// };

// export function useModal() {
//   const [isViewModalVisible, setIsViewModalVisible] = useState(false);
//   const [isEditModalVisible, setIsEditModalVisible] = useState(false);
//   const [viewOrder, setViewOrder] = useState<OrderProps>({
//     id: '',
//     cpf: '',
//     name: '',
//     phone: '',
//     birth: '',
//     email: '',
//     active: true
//   });
//   const [editOrder, setEditOrder] = useState<OrderProps>({
//     id: '',
//     cpf: '',
//     name: '',
//     phone: '',
//     birth: '',
//     email: '',
//     active: true,
//     newStatus: ''
//   });

//   // Define a função para atualizar os detalhes do pedido visualizado
//   const setViewOrderDetails = (item: OrderProps) => setViewOrder(item);

//   // Define a função para atualizar os detalhes do pedido editado
//   const setEditOrderDetails = (item: OrderProps) =>
//     setEditOrder({ ...item, newStatus: item.active ? 'devolução' : 'troca' });

//   // Define as funções para abrir e fechar o modal de visualização
//   const viewModalHandlers = {
//     open: (item: OrderProps) => {
//       setViewOrderDetails(item);
//       setIsViewModalVisible(true);
//     },
//     close: () => setIsViewModalVisible(false)
//   };

//   // Define as funções para abrir e fechar o modal de edição
//   const editModalHandlers = {
//     open: (item: OrderProps) => {
//       setEditOrderDetails(item);
//       setIsEditModalVisible(true);
//     },
//     close: () => setIsEditModalVisible(false)
//   };

//   return {
//     isViewModalVisible,
//     isEditModalVisible,
//     viewOrder,
//     editOrder,
//     viewModalHandlers,
//     editModalHandlers
//   };
// }

export function useModal<T>() {
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [viewItem, setViewItem] = useState<T | null>(null);
  const [editItem, setEditItem] = useState<T | null>(null);

  // Define as funções para abrir e fechar o modal de visualização
  const viewModalHandlers = {
    open: (item: T) => {
      setViewItem(item);
      setIsViewModalVisible(true);
    },
    close: () => setIsViewModalVisible(false)
  };

  // Define as funções para abrir e fechar o modal de edição
  const editModalHandlers = {
    open: (item: T) => {
      setEditItem(item);
      setIsEditModalVisible(true);
    },
    close: () => setIsEditModalVisible(false)
  };

  return {
    isViewModalVisible,
    isEditModalVisible,
    viewItem,
    editItem,
    viewModalHandlers,
    editModalHandlers
  };
}
