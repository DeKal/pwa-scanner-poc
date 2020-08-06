import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchProduct } from 'state/actions/products.action'
import {
  getProduct,
  getFetchProductStatus,
} from 'state/selectors/product.selector'
import ProductScan from 'components/ProductScan'

const mapStateToProps = (state) => ({
  product: getProduct(state),
  fetchProductStatus: getFetchProductStatus(state),
})

const mapDispatchToProps = {
  fetchProduct,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductScan))
