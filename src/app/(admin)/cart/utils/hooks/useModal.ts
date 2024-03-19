import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState({
    orderCodeValue: '',
    statusValue: '',
    clientValue: '',
    addressValue: ''
  });

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

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return { isOpenModal, openModalWithOrderCode, closeModal, modalData };
};
