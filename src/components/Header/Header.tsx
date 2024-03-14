'use client';
import React, { useState } from 'react';
import { Input } from '../Input/@index';

interface HeaderProps {
  namePage: string;
}

export const Header = ({ namePage }: HeaderProps) => {
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
    alert(`Start Date: ${startDate}, End Date: ${endDate}`);
  };

  return (
    <div className="w-full h-max flex justify-between px-10 py-20">
      <h1 className="text-2xl font-bold">{namePage}</h1>
      <form className="flex justify-between items-center w-fit gap-6">
        <Input.DateCalendar
          value={startDate}
          handleOnChange={handleStartDateChange}
        />
        <p className="text-gray-400 font-normal text-sm">até</p>
        <Input.DateCalendar
          value={endDate}
          handleOnChange={handleEndDateChange}
        />
        <button className="bg-brow-3 p-2 rounded-lg" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
