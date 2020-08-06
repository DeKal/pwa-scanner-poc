import { Product } from 'types/products'
import { RootState } from 'types/state'

export const getProduct = (state: RootState): Product =>
  state.product.currentProduct

export const getFetchProductStatus = (state: RootState): string =>
  state.product.fetchProductStatus
