import { REMOVE_SESSION } from './actionTypes'
import { ActionType } from 'types/state'

export const removeUserSession = (): ActionType => {
  return {
    type: REMOVE_SESSION,
  }
}
