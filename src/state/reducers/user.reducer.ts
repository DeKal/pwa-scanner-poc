import { UserState } from 'types/state'
import { fetchStatuses } from 'utils/state'

import { handleActions } from 'redux-actions'
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
} from 'state/actions/user.action'

const initialState: UserState = {
  currentUser: {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    active: false,
  },
  fetchUserStatus: null,
}

export const userReducer = handleActions(
  {
    [fetchUserRequest]: (state) => ({
      ...state,
      fetchUserStatus: fetchStatuses.REQUEST,
    }),
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      fetchUserStatus: fetchStatuses.SUCCESS,
      currentUser: action.payload,
    }),
    [fetchUserError]: (state) => ({
      ...state,
      fetchUserStatus: fetchStatuses.ERROR,
    }),
  },
  initialState
)
