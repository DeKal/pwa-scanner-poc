import React, { ReactElement, useState } from 'react'
import BarcodeScanner from './BarcodeScanner'
import PropTypes from 'prop-types'
import { ProductProps } from 'types/props'
import './productScan.scss'
import AddProductModal from './AddProductModal'
import { fetchStatuses } from 'utils/state'
const ProductScan = ({
  fetchProduct,
  currentProduct,
  fetchProductStatus,
  addToCart,
}: ProductProps): ReactElement => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
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
        <div className="button__group text-right">
          <button type="button" className="btn btn-outline-dark">
            {' '}
            Checkout{' '}
          </button>
          <button type="button" className="btn btn-outline-secondary ml-3">
            Cart 2
          </button>
        </div>
        <AddProductModal
          show={show && fetchProductStatus === fetchStatuses.SUCCESS}
          handleClose={handleClose}
          addToCart={addToCart}
          product={currentProduct}
        />
      </div>
    </div>
  )
}
export default ProductScan
ProductScan.propTypes = {
  currentProduct: PropTypes.object,
  fetchProduct: PropTypes.func,
}
