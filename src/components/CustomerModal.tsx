import React, { ReactElement } from 'react'
import { Modal, Form } from 'react-bootstrap'
import './modal.scss'
import { Link } from 'react-router-dom'
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
        <h4 className="text-center">Welcome back</h4>
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
          <p>{status ? 'Active' : 'Inactive'}</p>
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Link to="/product" role="button" className="btn btn-primary">
            Scan Products
          </Link>
        </div>
        <p
          className="c-gray d-flex justify-content-center mt-3"
          onClick={handleClose}
        >
          Not you?&nbsp;Click here
        </p>
      </Modal.Body>
    </Modal>
  )
}
export default CustomerModal
