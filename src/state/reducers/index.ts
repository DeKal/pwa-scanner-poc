import { Action, combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { RootState } from 'types/state'
import { REMOVE_SESSION } from 'state/actions/actionTypes'

const appReducer = combineReducers({
  user: userReducer,
})

const rootReducer = (state: RootState, action: Action): unknown => {
  if (action.type === REMOVE_SESSION) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
