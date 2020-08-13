import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchProduct, addToCart } from 'state/actions/product.action'
import { removeUserSession } from 'state/actions/home.action'
import {
  getProduct,
  getFetchProductStatus,
} from 'state/selectors/product.selector'
import ProductScan from 'components/ProductScan'

const mapStateToProps = (state) => ({
  currentProduct: getProduct(state),
  fetchProductStatus: getFetchProductStatus(state),
})

const mapDispatchToProps = {
  fetchProduct,
  addToCart,
  removeUserSession,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductScan))
