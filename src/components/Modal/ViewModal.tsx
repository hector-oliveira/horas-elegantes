import { RiCloseCircleLine } from 'react-icons/ri';
import { ButtonAction } from '../ButtonAction/ButtonAction';
import { ModalProps } from './interface/Modal.interface';

export const ViewModal = ({ closeModal, children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center backdrop-blur-sm">
      <main className="relative bg-[#F8F8F8] rounded-lg h-4/5 w-3/4 p-10">
        <ButtonAction className="absolute top-3 right-3" onClick={closeModal}>
          <RiCloseCircleLine size={30} color="#b85b0e" />
        </ButtonAction>
        {children}
      </main>
    </div>
  );
};
