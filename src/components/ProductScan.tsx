import React, { ReactElement, useState } from 'react'
import BarcodeScan from './BarcodeScan'
import PropTypes from 'prop-types'
import { ProductProps } from 'types/props'
import './productScan.scss'
const ProductScan = ({ fetchProduct }: ProductProps): ReactElement => {
  const [results, setResult] = useState([])
  const _onDetected = (result) => {
    setResult(results.concat([result]))
    if (result) {
      fetchProduct(result.codeResult.code)
    }
  }
  return (
    <div className="container">
      <div className="products text-center">
        <h1>Food Saver</h1>
        <p>Scan the barcode of each product</p>
        <BarcodeScan onDetected={_onDetected} />
        <div className="button__group text-right">
          <button type="button" className="btn btn-outline-dark">
            {' '}
            Checkout{' '}
          </button>
          <button type="button" className="btn btn-outline-secondary ml-3">
            Cart 2
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductScan
ProductScan.defaultProps = {
  fetchProduct: () => {},
}
ProductScan.propTypes = {
  fetchProduct: PropTypes.func,
}
