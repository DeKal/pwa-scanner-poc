import { ADD_TO_CART, FETCH_PRODUCT, UPDATE_CART } from './actionTypes'
import { createAction } from 'redux-actions'
import { toRequest, toSuccess, toError } from 'utils/state'
export const addToCart = createAction(ADD_TO_CART)
export const updateCart = createAction(UPDATE_CART)
export const fetchProduct = createAction(FETCH_PRODUCT)
export const fetchProductRequest = createAction(toRequest(FETCH_PRODUCT))
export const fetchProductSuccess = createAction(toSuccess(FETCH_PRODUCT))
export const fetchProductError = createAction(toError(FETCH_PRODUCT))
