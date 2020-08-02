import { UserState } from 'types/state'
import { Action } from 'types/state'
import { User } from 'types/user'
import { FETCH_USER } from 'state/actions/actionTypes'
import { toSuccess } from 'utils/state'

const initialState: UserState = {
  currentUser: {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    active: false,
  },
}

export const userReducer = (
  state = initialState,
  action: Action<User>
): UserState => {
  switch (action.type) {
    case toSuccess(FETCH_USER):
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}
