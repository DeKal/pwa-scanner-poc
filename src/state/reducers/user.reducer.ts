import { UserState } from 'types/state'
import { Action } from 'types/state'

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
  action: Action
): UserState => {
  switch (action.type) {
    default:
      return state
  }
}
