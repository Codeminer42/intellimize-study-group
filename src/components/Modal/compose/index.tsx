import React from 'react'
import styled from 'styled-components'

type ModalProps = {
  closeModal: () => void
}

const CloseButton = ({ closeModal }: ModalProps) => {
  return (
    <Container onClick={closeModal}>&times;</Container>
  )
}

export const Container = styled.button`
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
`

export default CloseButton