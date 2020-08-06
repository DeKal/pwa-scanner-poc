import { FETCH_PRODUCT } from './actionTypes'
import { toRequest, toSuccess, toError } from 'utils/state'
import { createAction } from 'redux-actions'

export const fetchProduct = createAction(FETCH_PRODUCT)

export const fetchProductRequest = createAction(toRequest(FETCH_PRODUCT))

export const fetchProductSuccess = createAction(toSuccess(FETCH_PRODUCT))

export const fetchProductError = createAction(toError(FETCH_PRODUCT))
