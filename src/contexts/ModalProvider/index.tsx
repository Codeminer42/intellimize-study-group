import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Modal } from '../../components';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalData = {
  content: ReactNode;
} | null;

const ModalContext = createContext<any>({} as any);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalData, setModalData] = useState<ModalData>(null);

  const closeModal = () => setModalData(null);

  const confirmModalProps = useMemo(
    () => ({
      ...modalData,
      isOpen: Boolean(modalData),
      children: modalData?.content,
      onClose: () => {
        closeModal();
      },
    }),
    [modalData]
  );

  const value = useCallback(
    (newModalData: ModalData) => {
      setModalData(newModalData);
    },
    [setModalData]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal {...confirmModalProps} />
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModalConsumer = () => useContext(ModalContext);
