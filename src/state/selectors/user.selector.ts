import { User } from 'types/user'
import { RootState } from 'types/state'

export const getUser = (state: RootState): User => state.user.currentUser

export const getFetchUserStatus = (state: RootState): string =>
  state.user.fetchUserStatus
