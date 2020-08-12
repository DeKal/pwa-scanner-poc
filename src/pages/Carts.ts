import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CartItem from 'components/CartItem'
import { getProductCart } from 'state/selectors/product.selector'
import { updateCart } from 'state/actions/product.action'
const mapStateToProps = (state) => ({
  products: getProductCart(state),
})
const mapDispatchToProps = {
  updateCart,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartItem))
