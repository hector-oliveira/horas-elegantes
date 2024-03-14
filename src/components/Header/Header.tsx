'use client';
import React from 'react';
import { Input } from '../Input/@index';
import { FiSearch } from 'react-icons/fi';
import { useValidateForm } from './hooks/useValidateForm';

interface HeaderProps {
  namePage: string;
}

export const Header = ({ namePage }: HeaderProps) => {
  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleClick
  } = useValidateForm();
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
        <button
          className="bg-brow-3 p-2 rounded-lg hover:bg-brow-4"
          onClick={handleClick}
        >
          <FiSearch size={22} color="#fff" />
        </button>
      </form>
    </div>
  );
};
