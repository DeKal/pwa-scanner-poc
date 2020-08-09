import React, { ReactElement } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './modal.scss'
import { OrderModalProps } from 'types/props'

const OrderModal = ({
  show,
  handleClose,
  removeUserSession,
  history,
}: OrderModalProps): ReactElement => {
  const confirmOrder = () => {
    removeUserSession()
    history.push('/')
  }
  return (
    <Modal show={show} centered>
      <Modal.Header closeButton>
        <Modal.Title>Complete your order</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to confirm your order?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={confirmOrder}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default OrderModal
