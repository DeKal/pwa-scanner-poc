import { UserState } from 'types/state'
import { Action } from 'types/state'
import { User } from 'types/user'
import { FETCH_USER } from 'state/actions/actionTypes'
import { fetchStatuses, toRequest, toError, toSuccess } from 'utils/state'

const initialState: UserState = {
  currentUser: {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    active: false,
  },
  fetchUserStatus: fetchStatuses.DEFAULT,
}

export const userReducer = (
  state = initialState,
  action: Action<User>
): UserState => {
  switch (action.type) {
    case toRequest(FETCH_USER):
      return {
        ...state,
        fetchUserStatus: fetchStatuses.REQUEST,
      }
    case toSuccess(FETCH_USER):
      return {
        ...state,
        fetchUserStatus: fetchStatuses.SUCCESS,
        currentUser: action.payload,
      }
    case toError(FETCH_USER):
      return {
        ...state,
        fetchUserStatus: fetchStatuses.ERROR,
      }
    default:
      return state
  }
}
