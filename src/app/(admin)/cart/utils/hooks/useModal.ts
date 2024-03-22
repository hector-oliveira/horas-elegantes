import { useState } from 'react';
import { BodyDataProps } from '@/components/Table/Table';

export function useModal() {
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({
    orderCode: '',
    client: '',
    address: '',
    status: ''
  });

  const setCurrentOrderDetails = (item: BodyDataProps) => {
    setCurrentOrder({
      orderCode: item.orderCode,
      client: item.client,
      address: item.address,
      status: item.status
    });
  };

  const handleOpenViewModal = (item: BodyDataProps) => {
    setCurrentOrderDetails(item);
    setIsViewModalVisible(true);
  };
  const handleCloseViewModal = () => {
    setIsViewModalVisible(false);
  };

  const handleOpenEditModal = (item: BodyDataProps) => {
    setCurrentOrderDetails(item);
    setIsEditModalVisible(true);
  };
  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  return {
    isViewModalVisible,
    isEditModalVisible,
    currentOrder,
    handleOpenViewModal,
    handleCloseViewModal,
    handleOpenEditModal,
    handleCloseEditModal
  };
}
