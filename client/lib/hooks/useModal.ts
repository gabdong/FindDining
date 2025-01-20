import { useAppDispatch } from '@lib/redux/hooks';
import { openModal, closeModal } from '@lib/redux/slices/modalSlice';

export default function useModal() {
  const dispatch = useAppDispatch();

  const handleOpenModal = ({ type, props }: ModalState) => {
    dispatch(openModal({ type, props }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
}
