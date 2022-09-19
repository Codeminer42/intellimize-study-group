import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Modal } from "../../components";

const DEFAULT_MODAL_PROPS = {
  content: "",
};

const ModalContext = createContext<any>({} as any);

type ModalProviderProps = {
  children: ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalData, setModalData] = useState(DEFAULT_MODAL_PROPS);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const confirmModalProps = useMemo(
    () => ({
      ...modalData,
      isOpen,
      children: modalData.content,
      onClose: () => {
        closeModal();
      },
    }),
    [modalData, isOpen]
  );

  const value = useCallback(
    (newModalData: {}) => {
      setModalData({
        ...DEFAULT_MODAL_PROPS,
        ...newModalData
      });
      openModal();
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
