import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react';
import { Modal } from '..'

type ModalProps = {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const setup =
  ({ children = null, isOpen = false, onClose = () => { } }: ModalProps = {}) =>
    render(
      <Modal onClose={onClose} isOpen={isOpen}>
        {children}
      </Modal>
    )

describe('<Modal />', () => {
  describe('When isOpen is false', () => {
    it('render an empty DOM element', () => {
      const { container } = setup()

      expect(container).toBeEmptyDOMElement()
    })
  })

  describe('When isOpen is true', () => {
    it('render the modal with the given children', () => {
      setup({ isOpen: true, children: 'test' })

      expect(screen.getByText("test")).toBeInTheDocument()
    })

    it('render modal with a close button', () => {
      setup({ isOpen: true, children: 'test' })

      expect(screen.getByText("×")).toBeInTheDocument()
    })

    it('When click on modal overlay, call onClose function', () => {
      const mockOnClose = jest.fn()
      setup({ isOpen: true, children: 'test', onClose: mockOnClose })

      fireEvent.click(screen.getByTestId("modal-overlay-id"))

      expect(mockOnClose).toHaveBeenCalled()
    })

    it('When click on modal content, does not call onClose function', () => {
      const mockOnClose = jest.fn()
      setup({ isOpen: true, children: 'test', onClose: mockOnClose })

      fireEvent.click(screen.getByTestId("modal-content-id"))

      expect(mockOnClose).not.toHaveBeenCalled()
    })
  })
})
