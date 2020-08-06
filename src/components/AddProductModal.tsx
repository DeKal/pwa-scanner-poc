import React, { ReactElement, useState } from 'react'
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap'
import { AddProductModalProps } from 'types/props'

const AddProductModal = ({
  show,
  name,
  unit,
  price,
  currency,
  addToCart,
  handleClose,
}: AddProductModalProps): ReactElement => {
  const [quantity, setQuantity] = useState(1)
  return (
    <Modal show={show} centered>
      <Modal.Body className="pl-4 pr-4">
        <h4 className="text-center mb-4">Scan new product</h4>

        <Form.Row className="mb-2 justify-content-between">
          <Form.Label className="font-weight-bold">Name:</Form.Label>
          <Form.Label>{name}</Form.Label>
        </Form.Row>

        <Form.Row className="mb-2 justify-content-between">
          <Form.Label className="font-weight-bold">Price:</Form.Label>
          <Form.Label>{`${price} ${currency}`}</Form.Label>
        </Form.Row>

        <Form.Row className="mb-2 justify-content-between align-items-baseline">
          <Form.Label className="font-weight-bold">Quantity:</Form.Label>
          <Col sm={4} xs={6} className="pr-0">
            <InputGroup>
              <Form.Control
                id="inlineFormInputGroup"
                className="text-right"
                required
                name="mobile"
                type="number"
                maxLength={10}
                placeholder="Quantity"
                defaultValue={quantity}
                onChange={(event) => {
                  const fleldVal = event.target.value
                  const quantity = parseInt(fleldVal)
                  if (!isNaN(quantity) && quantity > 0) {
                    setQuantity(quantity)
                  } else {
                    setQuantity(1)
                  }
                }}
              />
              <InputGroup.Prepend>
                <InputGroup.Text>{unit}</InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Form.Row>

        <Form.Row className="mb-2 justify-content-between">
          <Form.Label className="font-weight-bold">Total:</Form.Label>
          <Form.Label>{`${quantity * price} ${currency}`}</Form.Label>
        </Form.Row>

        <Form.Row className="d-flex justify-content-between justify-content-md-around mt-3">
          <Button variant="secondary" onClick={handleClose}>
            Scan another
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              addToCart({
                name,
                price,
                currency,
                quantity,
              })
            }
          >
            Add to cart
          </Button>
        </Form.Row>
      </Modal.Body>
    </Modal>
  )
}
export default AddProductModal
