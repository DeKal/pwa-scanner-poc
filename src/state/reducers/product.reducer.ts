import { ProductState } from 'types/state'
import { handleActions } from 'redux-actions'
import { addToCart } from 'state/actions/product.action'
import { ProductItem } from 'types/product'
import { fetchStatuses } from 'utils/state'
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
} from 'state/actions/products.action'

const initialState: ProductState = {
  products: {},
  currentProduct: {
    id: '',
    name: '',
    price: 0,
    currency: '',
    unit: '',
  },
  fetchProductStatus: null,
}

export const productReducer = handleActions(
  {
    [addToCart]: (state, action) => {
      const product: ProductItem = action.payload
      if (state.products[product.id]) {
        const curProduct = state.products[product.id]
        return {
          ...state,
          products: {
            ...state.products,
            [product.id]: {
              ...curProduct,
              quantity: curProduct.quantity + product.quantity,
              total: curProduct.total + product.price,
            },
          },
        }
      }
      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: product,
        },
      }
    },
    [fetchProductRequest]: (state) => ({
      ...state,
      fetchProductStatus: fetchStatuses.REQUEST,
    }),
    [fetchProductSuccess]: (state, action) => ({
      ...state,
      fetchProductStatus: fetchStatuses.SUCCESS,
      currentUser: action.payload,
    }),
    [fetchProductError]: (state) => ({
      ...state,
      fetchProductStatus: fetchStatuses.ERROR,
    }),
  },
  initialState
)
