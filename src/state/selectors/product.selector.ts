import { ProductData } from 'types/product'
import { RootState } from 'types/state'
export const getProduct = (state: RootState): ProductData =>
  state.product.currentProduct

export const getFetchProductStatus = (state: RootState): string =>
  state.product.fetchProductStatus
