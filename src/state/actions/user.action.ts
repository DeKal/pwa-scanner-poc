import { Action } from 'types/state'
import { FETCH_USER } from './actionTypes'

export const fetchUser = (userId: string): Action<string> => {
  return {
    type: FETCH_USER,
    payload: userId,
  }
}
