import { REMOVE_SESSION } from './actionTypes'
import { Action } from 'types/state'

export const removeUserSession = (): Action => {
  return {
    type: REMOVE_SESSION,
  }
}
