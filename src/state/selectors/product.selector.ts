import { ProductData } from 'types/product'
import { RootState } from 'types/state'
export const getProduct = (state: RootState): ProductData =>
  state.product.currentProduct
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getProductCart = (state: RootState) =>
  Object.values(state.product.products)
export const getFetchProductStatus = (state: RootState): string =>
  state.product.fetchProductStatus
