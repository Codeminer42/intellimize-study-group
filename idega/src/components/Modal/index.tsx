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
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #1e1e1e;
  opacity: 0.6;
`;

const Content = styled.div`
  position: relative;
  min-height: 500px;
  min-width: 45%;
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 50px;
  z-index: 1;
`;

export default Modal;
