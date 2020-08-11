import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CartItem from 'components/CartItem'
import { getProduct, getProductCart } from 'state/selectors/product.selector'
const mapStateToProps = (state) => ({
  currentProduct: getProduct(state),
  products: getProductCart(state),
})
export default connect(mapStateToProps, null)(withRouter(CartItem))
