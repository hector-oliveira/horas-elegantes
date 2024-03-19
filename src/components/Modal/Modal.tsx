import { RiCloseCircleLine } from 'react-icons/ri';
type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-sm">
      <main className="relative bg-gray-300 rounded-lg h-3/5 w-1/3 p-10">
        <button onClick={closeModal} className="absolute top-3 right-3">
          <RiCloseCircleLine size={23} />
        </button>
        {children}
      </main>
    </div>
  );
};
