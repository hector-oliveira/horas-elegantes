import { useState } from 'react';
import { useModal } from './useModal';

export function useStatus() {
  const [status, setStatus] = useState({
    newStatus: '',
    isUpdated: false
  });

  const { editModalHandlers } = useModal();

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus({ ...status, newStatus: e.target.value });
  };

  const handleUpdate = () => {
    setStatus({ newStatus: '', isUpdated: true });
    editModalHandlers.close();
  };

  return {
    status,
    setStatus,
    handleStatusChange,
    handleUpdate
  };
}
