import React, { ReactElement } from 'react'
import { CartProps } from 'types/props'
import { ProductItem } from 'types/product'
import { Form, Col, InputGroup, Row, Button } from 'react-bootstrap'
const CartItem = ({
  products,
  history,
  updateCart,
}: CartProps): ReactElement => {
  const sum = (total, current) => current + total
  const countTotal = (products: ProductItem[]) =>
    products && products.length > 0
      ? products.map((product) => product.total).reduce(sum, 0)
      : 0
  const total = countTotal(products)
  const handlerQuanityUpdate = (id, quantity) => {
    const convertQuanity = parseInt(quantity)
    updateCart({
      quantity: convertQuanity,
      id,
    })
  }
  return (
    <div className="container">
      <h3 className="text-center mt-3 mb-4">Current Order</h3>
      {products.length > 0 ? (
        <>
          <Row>
            <Col sm={6} className="ml-auto mr-auto">
              {products &&
                products.map((product) => {
                  return (
                    <>
                      <Row key={product.id} className="mb-3">
                        <Col sm={7} xs={6}>
                          <p className="mb-0 font-weight-bold">
                            Product:{' '}
                            <span className="font-weight-normal">
                              {product.name}
                            </span>
                          </p>
                          <p className="mb-0 font-weight-bold">
                            Price:{' '}
                            <span className="font-weight-normal">{`${product.price} ${product.currency} per ${product.unit}`}</span>
                          </p>
                        </Col>
                        <Col sm={5} xs={6}>
                          <InputGroup>
                            <Form.Control
                              className="text-right"
                              required
                              type="number"
                              maxLength={10}
                              placeholder="Quantity"
                              value={product.quantity}
                              onChange={(e) =>
                                handlerQuanityUpdate(product.id, e.target.value)
                              }
                            />
                            <InputGroup.Prepend>
                              <InputGroup.Text>{product.unit}</InputGroup.Text>
                            </InputGroup.Prepend>
                          </InputGroup>
                        </Col>
                      </Row>
                    </>
                  )
                })}
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="ml-auto mr-auto">
              <Row>
                <Col sm={6} xs={6} className="text-center">
                  Total
                </Col>
                <Col sm={6} xs={6} className="text-right">
                  {total.toFixed(2)} {products[0].currency}
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <p className="text-center font-weight-bold">
          Scan products and add them to your cart
        </p>
      )}
      <Row>
        <Col sm={6} className="ml-auto mr-auto text-center mt-4">
          <Button
            variant="secondary"
            className="mr-3"
            onClick={() => history.push('/product')}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={() => history.push('/')}>
            Confirm Order
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CartItem
