import React, { ReactElement, useState } from 'react'
import BarcodeScanner from './BarcodeScanner'
import PropTypes from 'prop-types'
import { ProductProps } from 'types/props'
import './productScan.scss'
import AddProductModal from './AddProductModal'
import { fetchStatuses } from 'utils/state'
import OrderModal from './OrderModal'
import { Link } from 'react-router-dom'
const ProductScan = ({
  fetchProduct,
  currentProduct,
  fetchProductStatus,
  addToCart,
  removeUserSession,
  history,
  productLength,
}: ProductProps): ReactElement => {
  const [show, setShow] = useState(false)
  const [showModalOrder, setShowModalOrder] = useState(false)
  const handleClose = () => setShow(false)
  const handleCloseOrder = () => setShowModalOrder(false)
  const handleShow = () => setShowModalOrder(true)
  const _onDetected = (result) => {
    if (result) {
      setShow(true)
      fetchProduct(result.codeResult.code)
    }
  }
  return (
    <div className="container">
      <div className="products text-center">
        <h1>Food Saver</h1>
        <p>Scan the barcode of each product</p>
        <BarcodeScanner onDetected={_onDetected} />
        <div className="button__group text-center mt-3">
          <button
            type="button"
            className="btn btn-outline-dark mr-3"
            onClick={() => {
              removeUserSession()
              history.push('/')
            }}
          >
            {' '}
            New session{' '}
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleShow}
          >
            {' '}
            Checkout{' '}
          </button>
          <Link
            to="/cart"
            role="button"
            className="btn btn-outline-secondary ml-3"
          >
            Cart {productLength}
          </Link>
        </div>
        <AddProductModal
          show={show && fetchProductStatus === fetchStatuses.SUCCESS}
          handleClose={handleClose}
          addToCart={addToCart}
          product={currentProduct}
        />
        <OrderModal
          show={showModalOrder}
          handleClose={handleCloseOrder}
          removeUserSession={removeUserSession}
          history={history}
        />
      </div>
    </div>
  )
}
export default ProductScan
ProductScan.propTypes = {
  currentProduct: PropTypes.object,
  fetchProduct: PropTypes.func,
  removeUserSession: PropTypes.func,
}
