import React, { ReactNode } from 'react'
import CloseButton from './compose'
import { Overlay, Content } from './styles'

type ModalProps = {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void
}

type EventClick = {
  stopPropagation: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  const handleModalCLick = (event: EventClick) => {
    event.stopPropagation()
  }

  return (
    <Overlay onClick={onClose}>
      <Content onClick={handleModalCLick}>
        <CloseButton closeModal={onClose}/>
        {children}
      </Content>
    </Overlay>
  )
}

export default Modal