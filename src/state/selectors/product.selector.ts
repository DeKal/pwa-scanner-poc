/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ProductData } from 'types/product'
import { RootState } from 'types/state'
export const getProduct = (state: RootState): ProductData =>
  state.product.currentProduct
export const getProductCart = (state: RootState) =>
  Object.values(state.product.products)
export const getProductCartLength = (state: RootState) => {
  return Object.keys(state.product.products).length
}
export const getFetchProductStatus = (state: RootState): string =>
  state.product.fetchProductStatus
