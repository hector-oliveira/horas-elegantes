import { useState } from 'react';

export const useValidateForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleClick = () => {
    const startDateLocal = new Date(startDate + 'T00:00');
    const endDateLocal = new Date(endDate + 'T00:00');
    const formattedStartDate = startDateLocal.toLocaleDateString('pt-BR');
    const formattedEndDate = endDateLocal.toLocaleDateString('pt-BR');
    alert(`Start Date: ${formattedStartDate}, End Date: ${formattedEndDate}`);
  };

  return {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleClick
  };
};
