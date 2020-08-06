import { ProductState } from 'types/state'

import { handleActions } from 'redux-actions'
import { addToCart } from 'state/actions/product.action'
import { ProductItem } from 'types/product'

const initialState: ProductState = {
  products: {},
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
  },
  initialState
)
