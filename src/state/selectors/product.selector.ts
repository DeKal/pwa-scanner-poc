/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ProductData, ProductItem } from 'types/product'
import { RootState } from 'types/state'
export const getProduct = (state: RootState): ProductData =>
  state.product.currentProduct
export const getProductCart = (state: RootState): Array<ProductItem> =>
  Object.values(state.product.products)
export const getProductCartLength = (state: RootState) =>
  Object.keys(state.product.products).length
export const getFetchProductStatus = (state: RootState): string =>
  state.product.fetchProductStatus
