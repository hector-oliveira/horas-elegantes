import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [modalData, setModalData] = useState({
    orderCodeValue: '',
    statusValue: '',
    clientValue: '',
    addressValue: ''
  });
  const [editModalData, setEditModalData] = useState({
    orderCodeValue: '',
    clientValue: '',
    addressValue: '',
    initialStatusValue: ''
  });

  const openModalWithEdit = useCallback(
    (
      orderCodeValue: string,
      clientValue: string,
      addressValue: string,
      initialStatusValue: string
    ) => {
      setEditModalData({
        orderCodeValue,
        clientValue,
        addressValue,
        initialStatusValue
      });
      setIsOpenEditModal(true);
    },
    []
  );

  const openModalWithOrderCode = useCallback(
    (
      orderCodeValue: string,
      statusValue: string,
      clientValue: string,
      addressValue: string
    ) => {
      setModalData({ orderCodeValue, statusValue, clientValue, addressValue });
      setIsOpenModal(true);
    },
    []
  );

  const closeEditModal = useCallback(() => {
    setIsOpenEditModal(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return {
    isOpenModal,
    isOpenEditModal,
    editModalData,
    openModalWithEdit,
    openModalWithOrderCode,
    closeEditModal,
    closeModal,
    modalData
  };
};
