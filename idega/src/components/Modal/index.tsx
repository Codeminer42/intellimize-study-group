import React, { ReactNode } from 'react';
import styled from 'styled-components';
import CloseButton from './compose/CloseButton';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

type EventClick = {
  stopPropagation: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleModalCLick = (event: EventClick) => {
    event.stopPropagation();
  };

  return (
    <Overlay onClick={onClose}>
      <Content onClick={handleModalCLick}>
        <CloseButton closeModal={onClose} />
        {children}
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(5px);
`;

const Content = styled.div`
  position: relative;
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 50px;
  z-index: 1;
`;

export default Modal;
