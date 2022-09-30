import { useModalConsumer } from './../contexts/ModalProvider/index';
import { ReactNode } from 'react';

export const useModal = ({ content }: { content: ReactNode }) => {
  const openModal = useModalConsumer();

  return () => openModal({ content });
};
