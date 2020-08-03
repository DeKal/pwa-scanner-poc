import { FETCH_USER } from './actionTypes'
import { toRequest, toSuccess, toError } from 'utils/state'
import { createAction } from 'redux-actions'

export const fetchUser = createAction(FETCH_USER)

export const fetchUserRequest = createAction(toRequest(FETCH_USER))

export const fetchUserSuccess = createAction(toSuccess(FETCH_USER))

export const fetchUserError = createAction(toError(FETCH_USER))
