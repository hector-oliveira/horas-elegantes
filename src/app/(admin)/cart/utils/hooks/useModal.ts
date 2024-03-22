import { useState } from 'react';
// import { BodyDataProps } from '@/components/Table/Table';
import { OrderProps } from '../components/OrderDetails';

export function useModal() {
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [viewOrder, setViewOrder] = useState({
    orderCode: '',
    client: '',
    address: '',
    status: ''
  });

  const [editOrder, setEditOrder] = useState({
    orderCode: '',
    client: '',
    address: '',
    status: '',
    newStatus: ''
  });

  const setViewOrderDetails = (item: OrderProps) => {
    setViewOrder({
      orderCode: item.orderCode,
      client: item.client,
      address: item.address,
      status: item.status
    });
  };

  const setEditOrderDetails = (item: OrderProps) => {
    setEditOrder({
      orderCode: item.orderCode,
      client: item.client,
      address: item.address,
      status: item.status,
      newStatus: item.status
    });
  };

  const handleOpenViewModal = (item: OrderProps) => {
    setViewOrderDetails(item);
    setIsViewModalVisible(true);
  };
  const handleCloseViewModal = () => {
    setIsViewModalVisible(false);
  };

  const handleOpenEditModal = (item: OrderProps) => {
    setEditOrderDetails(item);
    setIsEditModalVisible(true);
  };
  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  return {
    isViewModalVisible,
    isEditModalVisible,
    viewOrder,
    editOrder,
    handleOpenViewModal,
    handleCloseViewModal,
    handleOpenEditModal,
    handleCloseEditModal
  };
}
