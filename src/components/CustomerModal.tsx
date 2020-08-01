import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './modal.scss'
type TProps = {
  name: string
  address: string
  status: string
  show: boolean
  handleClose?: () => void
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CustomerModal = ({
  name,
  address,
  status,
  show,
  handleClose,
}: TProps) => {
  return (
    <>
      <Modal show={show} centered>
        <Modal.Body id="modal-body">
          <h4 className="text-center">Wellcome back!</h4>
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
            <p>{status}</p>
          </Form.Group>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary" className="c-black">
              Scan Product
            </Button>
          </div>
          <p className="c-gray d-flex justify-content-center mt-3">
            Not you ? <span onClick={handleClose}> Click here</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default CustomerModal
