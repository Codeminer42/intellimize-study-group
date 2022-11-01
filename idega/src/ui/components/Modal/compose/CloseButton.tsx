import React from 'react';
import styled from 'styled-components';

type CloseButtonProps = {
  closeModal: () => void;
};

const CloseButton = ({ closeModal }: CloseButtonProps) => {
  return <Container onClick={closeModal}>&times;</Container>;
};

const Container = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  font-size: 20px;

  &:hover {
    background-color: grey;
  }
`;

export { CloseButton };