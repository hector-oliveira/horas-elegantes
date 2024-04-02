import React, { Dispatch, SetStateAction } from 'react';

interface Status {
  newStatus: string;
  isUpdated: boolean;
}

interface UpdateStatusModalProps {
  status: Status;
  setStatus: Dispatch<SetStateAction<Status>>;
}

export const UpdateStatusModal = ({
  status,
  setStatus
}: UpdateStatusModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-sm">
      <main className="bg-[#F8F8F8] rounded-lg p-8 flex flex-col-reverse justify-between h-1/4">
        <p className="text-xl text-green-600">Status atualizado com sucesso!</p>
        <button
          className="bg-red-500 text-white rounded px-4 py-2 w-max self-end cursor-pointer hover:bg-red-600"
          onClick={() => setStatus({ ...status, isUpdated: false })}
        >
          Fechar
        </button>
      </main>
    </div>
  );
};
