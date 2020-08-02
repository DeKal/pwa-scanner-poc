import React, { ReactElement } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './modal.scss'
import { CustomerModalProps } from 'types/props'

const CustomerModal = ({
  name,
  address,
  status,
  show,
  handleClose,
}: CustomerModalProps): ReactElement => {
  return (
    <Modal show={show} centered>
      <Modal.Body>
        <h4 className="text-center">Wellcome back</h4>
        <Form.Group>
          <Form.Label className="font-weight-bold">Name:</Form.Label>
          <p>{name}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Address:</Form.Label>
          <p>{address}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Status:</Form.Label>
          <p>{status ? 'Active' : 'deactive'}</p>
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="primary" className="c-black">
            Scan Product
          </Button>
        </div>
        <p className="c-gray d-flex justify-content-center mt-3">
          Not you? <span onClick={handleClose}> Click here</span>
        </p>
      </Modal.Body>
    </Modal>
  )
}
export default CustomerModal
